import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Form from 'react-bootstrap/Form';

import GoogleLogo from '../../../utils/images/powered_by_google/drawable-hdpi/powered_by_google_on_white.png'
import './style.css'

// const searchOptions = {
//   location: new google.maps.LatLng(-14.235004, -51.92528),
//   radius: 10000,
//   types: ['address']
// }
 
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: ''};
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = async address => {
    this.setState({ address });

    const [ firstResult ] = await geocodeByAddress(address);
    const { lat, lng } = await getLatLng(firstResult);

    this.props.setCoordinates(lng, lat);    
  };

  componentDidUpdate = () => {
    if (this.props.resetSearch) {
      this.props.setResetSearch(false)
      this.setState({ address: ''})
    }
  } 
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        // searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Form.Control type="text" value={this.state.inputText}
              {...getInputProps({
                placeholder: 'Procurar endereço'
              })}
            />
            <span className="google-logo">
              <img src={GoogleLogo} />
            </span>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Carregando...</div>}
              {suggestions.map(suggestion => {
                return (
                  <div
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <span className>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;