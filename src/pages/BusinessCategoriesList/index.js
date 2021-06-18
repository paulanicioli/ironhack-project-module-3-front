import React, { Component } from 'react';
import BusinessCategoryCard from '../../components/organisms/BusinessCategoryCard';
import GeneralTemplate from '../../components/templates/GeneralTemplate';

import './styles.css';

import apiService from '../../services/api.services';

class BusinessCategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
    this.apiService = apiService;
  }

  async componentDidMount() {
    const categoriesList = await this.apiService.getBusinessCategories();
    this.setState({ categories: categoriesList });
  }

  render() {
    return (
      <GeneralTemplate isUserLogged={this.props.isUserLogged}>
        <h1 className="section-title">Escolha a categoria</h1>
        <p className="section-subtitle">
          Seus pedidos a um clique de distância
        </p>
        <div className="category-list-container">
          {this.state.categories.map((element) => {
            return (
              <BusinessCategoryCard
                name={element.name}
                imageUrl={element.imageUrl}
                categoryId={element._id}
                key={element._id}
              />
            );
          })}
        </div>
      </GeneralTemplate>
    );
  }
}

export default BusinessCategoriesList;
