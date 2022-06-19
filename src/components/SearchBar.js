import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.runOnSubmit(event.target.value);
  };

  render() {
    return (
      <div className="ui segment">
        <form onChange={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Cat Breed Image Search</label>
            <select defaultValue="">
              <option hidden value="">
                Please select a breed
              </option>
              {this.props.breedList.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
