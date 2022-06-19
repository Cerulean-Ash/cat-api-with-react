import React from "react";
import theCatApi from "../api/theCatApi";
import SearchContainer from "./SearchContainer";

class App extends React.Component {
  state = { breeds: [], catalogue: {} };

  onRenderList = async () => {
    const response = await theCatApi.get(`/v1/breeds`);
    const catalogue = this.catalogueData(response.data);
    this.setState({ breeds: response.data, catalogue: catalogue });
  };

  catalogueData = (data) => {
    const catalogue = {};
    data.forEach((element) => {
      catalogue[element.id] = element;
    });
    return catalogue;
  };

  componentDidMount() {
    this.onRenderList();
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchContainer
          breedList={this.state.breeds}
          breedCatalogue={this.state.catalogue}
        />
      </div>
    );
  }
}

export default App;
