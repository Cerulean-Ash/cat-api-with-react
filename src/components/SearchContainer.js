import React from "react";
import theCatApi from "../api/theCatApi";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import DescriptionCard from "./DescriptionCard";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.term = ""; // could have used state instead here

    this.state = { images: [] };
  }

  onSearchSubmit = async (term) => {
    this.term = term;
    const query_params = {
      breed_ids: term,
      limit: 20,
    };
    const response = await theCatApi.get(`v1/images/search`, {
      params: query_params,
    });
    this.setState({ images: response.data }); // returns an object containing image urls amongst other things
  };

  render() {
    return (
      <div>
        <SearchBar
          runOnSubmit={this.onSearchSubmit} // call back to onSearchSubmit function which calls the api for cat images
          breedList={this.props.breedList}
        />
        <DescriptionCard
          info={this.term ? this.props.breedCatalogue[this.term] : ""}
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default SearchContainer;
