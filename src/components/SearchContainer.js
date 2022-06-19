import React from "react";
import theCatApi from "../api/theCatApi";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import DescriptionCard from "./DescriptionCard";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.term = "";

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
    this.setState({ images: response.data });
  };

  render() {
    return (
      <div>
        <SearchBar
          runOnSubmit={this.onSearchSubmit}
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
