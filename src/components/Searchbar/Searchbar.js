import "./Searchbar.css";
import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    query: "",
  };

  changeQuery = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  onSubmitQuery = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitQuery}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.changeQuery}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
