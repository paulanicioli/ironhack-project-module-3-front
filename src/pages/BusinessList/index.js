import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import GeneralTemplate from '../../components/templates/GeneralTemplate';
import BusinessListing from '../../components/organisms/BusinessListing';
import { PencilSquare } from 'react-bootstrap-icons';
// import { XLg } from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import LocationSearchInput from '../../components/molecules/LocationSearchInput';

import apiService from '../../services/api.services';

import './styles.css';

class BusinessList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      businesses: [], 
      showModal: false,
      errorMessage: '',
      showErrorMessage: false,
      resetSearch: false,
      searchRadius: '3km',
      coordinates: [],
    };
    this.apiService = apiService;
  }

  setResetSearch = (state) => {
    this.setState({ resetSearch: state })
  }

  setCoordinatesFromPosition = position => {
    this.setCoordinates(position.coords.longitude, position.coords.latitude);
  }

  getCoordinatesFromLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.setCoordinatesFromPosition, 
        err => this.setState({ showModal: true })
        )
    }
  }

  setCoordinates = (lng, lat) => {
    this.setState({ coordinates: [ lng, lat ]})

    localStorage.setItem('coordinates', JSON.stringify([ lng, lat ]))
  }

  useCurrentLocation = () => {
    this.setState({ resetSearch: true })
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.setCoordinatesFromPosition,
        () => this.setState(
          { showErrorMessage: true,
            errorMessage: 'Permita o uso da localização para ativar essa opção.'
          })
        )
    } else {
      this.setState(
        {
          showErrorMessage: true, 
          errorMessage: 'Opção indisponível' 
        })
    }
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  handleSelection = e => {
    this.setState({ searchRadius: e.target.value })
  }

  componentDidMount = async () => {
    const storedCoords = JSON.parse(localStorage.getItem('coordinates'))

    if (storedCoords) {
      this.setCoordinates(...storedCoords)
    } else {      
      this.getCoordinatesFromLocation();
    }
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const { coordinates, searchRadius } = this.state;

    if (prevState.searchRadius !== searchRadius || 
        coordinates.length &&
          ( Number(prevState.coordinates[0]) !== Number(coordinates[0]) ||
            Number(prevState.coordinates[1]) !== Number(coordinates[1]) )
      ) {

        const categoryId = this.props.match.params.categoryId;
    
        const businessList = await this.apiService.getBusinessFromCategory(
          categoryId,
          coordinates,
          searchRadius
        );

        this.setState({ businesses: businessList });
      }  
    
  }

  // componentDidUpdate() {
  //   console.log(this.state)
  // }

  render() {
    return (
      <GeneralTemplate updateUserState={this.props.updateUserState} user={this.props.user}>
        <div className="header">
          <h1 className="section-title">
            {this.state.businesses.length
              ? this.state.businesses[0].businessCategory.name + ' próximos '
              : 'Nenhum resultado nas proximidades '}
              <PencilSquare color="#3a3f58" onClick={() => this.setState({ showModal: true })}/>
          </h1>        
          
          <p className="section-subtitle">
            Seus pedidos a um clique de distância
          </p>
          <Modal
            show={this.state.showModal}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header>
              <Modal.Title>Local de referência</Modal.Title>
              {/* <XLg onClick={this.closeModal}/> */}
            </Modal.Header>
            <Modal.Body>
              <p>Ajude-nos a encontrar os negócios mais próximos de você.</p>
              <label htmlFor="search-radius">Raio de busca: </label>
              <select id="search-radius" value={this.state.searchRadius} onChange={e => this.handleSelection(e)}>
                <option>1km</option>
                <option selected>3km</option>
                <option>5km</option>
                <option>10km</option>
              </select>
              <div>
                <LocationSearchInput 
                  setCoordinates={this.setCoordinates} 
                  resetSearch={this.state.resetSearch}   
                  setResetSearch={this.setResetSearch}                 
                />
                <Button sz="lg" onClick={this.useCurrentLocation}>Usar minha localização</Button>
                <Toast 
                onClose={() => this.setState({ showErrorMessage: false })} 
                show={this.state.showErrorMessage} 
                delay={1000} 
                autohide>    
                  <Toast.Body>{this.state.errorMessage}</Toast.Body>
                </Toast>
              </div>
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>Salvar</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="business-list-container">
          {this.state.businesses.map((element) => {
            return (
              <BusinessListing
                name={element.name}
                imageUrl={element.imageUrl}
                street={element.street}
                businessHours={element.businessHours}
                businessId={element._id}
                key={element._id}
              />
            );
          })}
        </div>
      </GeneralTemplate>
    );
  }
}

export default BusinessList;
