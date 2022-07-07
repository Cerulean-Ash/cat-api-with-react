import React from "react";
import theCatApi from "../api/theCatApi";
import SearchContainer from "./SearchContainer";

class App extends React.Component {
  state = { breeds: [], catalogue: {} };

  onRenderList = async () => {
    const response = await theCatApi.get(`/v1/breeds`); // api call using axios returns an object that contains all breed names and data about them but only 1 image
    const catalogue = this.catalogueData(response.data); // using catalogueData function (below) convert the returned object into a usable list of cats categorised by cat api id
    this.setState({ breeds: response.data, catalogue: catalogue }); // bind the list of catalogue and response data to states to use later
  };

  catalogueData = (data) => {
    // function takes the api retunred object and makes a more user friendly object out of it
    const catalogue = {};
    data.forEach((element) => {
      catalogue[element.id] = element;
    });
    return catalogue;
  };

  componentDidMount() {
    this.onRenderList(); //only call once to prevent constant pinging to API
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchContainer // pass states to params for use in the child components
          breedList={this.state.breeds}
          breedCatalogue={this.state.catalogue}
        />
      </div>
    );
  }
}

export default App;
