import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Map, Marker } from "yandex-map-react";
import { incrementCounter, decrementCounter } from "./testActions";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestCompontnt extends Component {
  state = {
    address: "",
    scriptLoaded: false,
    result: null
  };

  static defaultProps = {
    center: [59.95, 30.33],
    lat: 59.95,
    lng: 30.33,
    zoom: 9
  };

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  onChange = address => this.setState({ address });

  handleGetCity = e => {
    let ref = this;
    axios
      .get(
        "https://geocode-maps.yandex.ru/1.x/?format=json&geocode=" +
          e.target.value
      )
      .then(response => {
        console.log(response.data);
        ref.setState({
          result: response.data.response.GeoObjectCollection.featureMember
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { result } = this.state;
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };

    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>the answer is: {data} </h3>
        <Button onClick={incrementCounter} color="green" content="Increment" />
        <Button onClick={decrementCounter} color="red" content="Decrement" />

        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <button type="submit">Submit</button>
        </form>
        <Map
          onAPIAvailable={function() {
            console.log("API loaded");
          }}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          <Marker lat={this.props.lat} lon={this.props.lng} />
        </Map>

        <Input onChange={this.handleGetCity} />
        <div>
          {result <= null
            ? ""
            : result.map((data, i) => {
                return (
                  <div key={i}>
                    <span>
                      {result[i].GeoObject.description +
                        " | " +
                        result[i].GeoObject.name}
                    </span>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestCompontnt);
