import React from "react";
import "./Search.css";
import Loading from "../common/Loading";
import { API_URL } from "../../config";
import { handleResponse } from "../../helpers";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: "",
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const searchQuery = e.target.value;

    this.setState({ searchQuery });

    if (!searchQuery) {
      //wont send request if no search query
      return "";
    }

    this.setState({ loading: true });

    fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
      .then(handleResponse)
      .then(result => {
        console.log(result);
        this.setState({ loading: false });
      });

    //add catch case, tutorial skips it as technically not needed

    console.log(this.state);
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="Search">
        <span className="Search-icon" />
        <input
          className="Search-input"
          type="text"
          placeholder="Currency Name"
          onChange={this.handleChange}
        />

        {loading && (
          <div className="Search-loading">
            <Loading width="12px" height="12px" />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
