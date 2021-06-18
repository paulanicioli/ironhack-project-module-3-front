import React, { Component } from 'react';
import GeneralTemplate from '../../components/templates/GeneralTemplate';
import CustomButton from '../../components/atoms/CustomButton';

import { Link } from 'react-router-dom';

import './styles.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GeneralTemplate
        updateUserState={this.props.updateUserState}
        user={this.props.user}
      >
        <div className="contain">
          <div className="col">
            <h1>Listo!</h1>
            <p>
              A busca por serviços e produtos evoluiu. Nossa geração está em
              busca de experiências e aventuras. LISTO! A evolução que une
              aqueles que buscam com aqueles que oferecem. Search. Check it out.
              Evolve.
            </p>
            <Link to="/categories">
              <CustomButton>Explorar categorias</CustomButton>
            </Link>
          </div>
          {/* <div className="col">
            <div className="card card1 ">
              <h5>Restaurants</h5>
            </div>
            <div className="card card2">
              <h5>Pub's</h5>
            </div>
            <div className="card card3">
              <h5>Clothes</h5>
            </div>
            <div className="card card4 ">
              <h5>Services</h5>
            </div>
          </div> */}
        </div>
      </GeneralTemplate>
    );
  }
}

export default Home;
