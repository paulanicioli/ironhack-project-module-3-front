import React, { Component } from 'react';
import GeneralTemplate from '../../components/templates/GeneralTemplate';
import CustomButton from '../../components/atoms/CustomButton';
import ShadedButton from '../../components/atoms/ShadedButton';
import Testimonial from '../../components/organisms/Testimonial';

import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import Logo from '../../utils/images/listo.png';
import card1 from '../../utils/images/card1.jpg';
import card2 from '../../utils/images/card2.jpg';

import card3 from '../../utils/images/card3.jpg';

import './styles.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  handleSelect = (selectedIndex) => {
    this.setState({ index: selectedIndex });
  };

  sendToCategories() {
    this.props.history.push('/categories');
  }

  render() {
    return (
      <GeneralTemplate
        updateUserState={this.props.updateUserState}
        user={this.props.user}
      >
        <div className="home-container">
          <div className="home-description">
            <Carousel
              activeIndex={this.state.index}
              onSelect={this.handleSelect}
              nextLabel=''
              prevLabel=''
            >
              <Carousel.Item onClick={() => this.sendToCategories()} className="image-container">
                <img
                  className="d-block w-100 blue-layer"
                  src={card1}
                  alt="First slide"
                  fluid
                />
                <Carousel.Caption>
                  <h3 className="carousel-title">Search</h3>
                  <p>A busca por serviços e produtos evoluiu.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="image-container">
                <img
                  className="d-block w-100 blue-layer"
                  src={card2}
                  alt="Second slide"
                  fluid
                />

                <Carousel.Caption>
                  <h3 className="carousel-title">Check it out</h3>
                  <p>
                    Nossa geração está em busca de experiências e aventuras.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="image-container">
                <img
                  className="d-block w-100 blue-layer"
                  src={card3}
                  alt="Third slide"
                  fluid
                />

                <Carousel.Caption>
                <br />
                  <div>
                  <h3 className="carousel-title">Evolve</h3>
                  <p>
                    A evolução que une aqueles que buscam com aqueles que
                    oferecem.
                  </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

              {/* <Carousel.Item onClick={() => this.sendToCategories()} className="image-container">
                <img
                  className="d-block w-100 blue-layer"
                  src={card1}
                  alt="Forth slide"
                  fluid
                />
                <Carousel.Caption>
                  <h3 className="carousel-title">Join!</h3>
                  <div><Button variant="outline-light" sz="sm" as={Link} to="/login">Entre</Button>  
                      <Button variant="outline-light" sz="sm" as={Link} to="/signup">Cadastre-se</Button>
                      para fazer parte dessa experiência.
                  </div>
                </Carousel.Caption>
              </Carousel.Item> */}
            </Carousel>
          </div>
         
          <div className="reviews-container">
            <h4 className="testimonial-title">
              Veja o que nossos clientes tem a dizer:
            </h4>
            <div className="testimonials-outer-container">
            <Testimonial
              name="Felipe Silveira"
              imageUrl="https://image.freepik.com/free-photo/attractive-laughing-guy-having-fun-smiling-happy_176420-18839.jpg"
              role="Proprietário do restaurante Bourgeois em Curitiba"
              quote="Num mundo fluido em que todos são bombardeados de informações a todo momento, Listo consegue garantir uma experiência única e personalizada a cada usuário. Consegui duplicar minha base de clientes em apenas dois meses."
            />
            <Testimonial
              name="Julia Hirsch"
              imageUrl="https://image.freepik.com/free-photo/happy-woman-with-wavy-brown-hair-laughing-jocund-girl-striped-pink-attire-smiling_197531-9823.jpg"
              role="Proprietário da JUbiJU em Recife"
              quote="É tudo tão simples com a Listo! Tenho todo o suporte de que preciso, e posso concentrar minha energia no que amo fazer: fazer design. Sei que a Listo está tomando conta de todo o resto."
            />
            <Testimonial
              name="Elton Tavares"
              imageUrl="https://image.freepik.com/free-photo/portrait-delighted-hipster-male-student-with-crisp-hair_176532-8157.jpg"
              role="Empreendedor de vestuário na LéV! em São Paulo"
              quote="Encontrar o cliente certo é extremamente desgastante. Bati a cabeça por muito tempo sozinho. E então eu conheci a Listo! E foi tudo muito fluido."
            />
            </div>
          </div>
        </div>
      </GeneralTemplate>
    );
  }
}

export default Home;
