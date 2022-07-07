import React from "react";

class SearchBar extends React.Component {
  // state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault(); // prevent submit
    this.props.runOnSubmit(event.target.value); //feeds back to the parent component which uses passes the value back up. Value is using the cat api id value which matches the image search api param
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Cat Breed Image Search</label>
            <select
              defaultValue=""
              onChange={this.onFormSubmit} // call back function to call onFromSubit above when there is a change to the form onOptionSelect would have been better name
            >
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
