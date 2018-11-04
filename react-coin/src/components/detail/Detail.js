import React from "react";
import { API_URL } from "../../config";
import { handleResponse } from "../../helpers";
import { renderChangePercent } from "../../helpers";
import Loading from "../common/Loading";
import "./Detail.css";

class Detail extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: {},
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    const currencyId = this.props.match.params.id;

    this.fetchCurrency(currencyId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      // get new currency id from url
      const newCurrencyId = nextProps.match.params.id;

      this.fetchCurrency(newCurrencyId);
    }
  }

  fetchCurrency(currencyId) {
    fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
      .then(handleResponse)
      .then(currency => {
        this.setState({
          loading: false,
          error: null,
          currency
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error.errorMessage
        });
      });
  }

  render() {
    const { loading, error, currency } = this.state;

    if (loading) {
      return (
        <div classname="loading-container">
          <Loading />
        </div>
      );
    }

    if (error) {
      return <div className="error">{error}</div>;
    }

    return (
      <div className="Detail">
        <h1>
          {currency.name} ({currency.symbol})
        </h1>
        <div className="Detail-container">
          <div className="Detail-item">
            Price <span className="Detail-value">${currency.price}</span>
          </div>
          <div className="Detail-item">
            Rank <span className="Detail-value">{currency.rank}</span>
          </div>
          <div className="Detail-item">
            24HR Change{" "}
            <span className="Detail-value">
              {renderChangePercent(currency.percentChange24h)}
            </span>
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Market Cap</span>
            <span className="Detail-dollar">$</span>
            {currency.marketCap}
          </div>
          <div className="Detail-item">
            <span className="Detail-title">24H Volue</span>
            <span className="Detail-dollar">$</span>
            {currency.volume24h}
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Total Supply</span>
            {currency.totalSupply}
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
