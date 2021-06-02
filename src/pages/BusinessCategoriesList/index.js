import React, { Component } from 'react';
import BusinessCategoryCard from '../../components/organisms/BusinessCategoryCard';

import apiService from '../../services/api.services';

class BusinessCategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
    this.apiService = apiService;
  }

  async componentDidMount() {
    const categoriesList = await this.apiService.getBusinessCategories();
    console.log(categoriesList);
    this.setState({ categories: categoriesList });
  }

  render() {
    return (
      <div>
        <h1>Categories List:</h1>
        {this.state.categories.map((element) => {
          return (
            <BusinessCategoryCard
              name={element.name}
              imageUrl={element.imageUrl}
            />
          );
        })}
      </div>
    );
  }
}

export default BusinessCategoriesList;
