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

  itemsInCart() {
    const order = localStorage.getItem('order');
    if (order) {
      const orderArray = JSON.parse(order);
      return orderArray.length;
    }
    return 0;
  }

  render() {
    return (
      <GeneralTemplate
        updateUserState={this.props.updateUserState}
        user={this.props.user}
        productsInCart={this.itemsInCart()}
      >
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
