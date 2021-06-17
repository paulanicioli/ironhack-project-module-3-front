
import React from "react";
import logo from "./images/listo.png";
import card1 from "./images/pexels-deva-darshan-1064136.jpg";
import card2 from "./images/pexels-omid-mostafavi-8240666.jpg";
import card3 from "./images/pexels-lumn-322207.jpg";
import card4 from "./images/pexels-cottonbro-6591162.jpg";
import "./style.css";

class Home extends React.Component {
 

  render() {
    return (
      <section ref={this.props.containerRef}>
       

        <div className="contain">
          <header className="navbar">
            <img src={logo} className='logo' alt="teste"/> 
            <nav className="navegator">
                <ul>
                    <li><a href='/categories' className="home">Categories</a></li>
                    <li><a href='/login' className="logar">Login</a></li>
                    <li><a href='#' className="about">About</a></li>
                    
                </ul>
            </nav>
            <img src='' className="menu-icon" alt=''></img>
          </header>   
          
          <div className="row">
                <div className="col">
                    <h1>Listo!</h1>
                    <p> The search for products and services has evolved, our generation is fuilled with desire, adventures and experiences. LISTO!
                            The evolution that brings union between those who seek and those who offers, moving products and services to satisfy hyperactive individuals.
                            Search. Check it out. Evolve.
                    </p>
                    <button className='button' type="button">Explore</button>
                </div>
                <div className="col">
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
                </div>
            </div>
        </div>
      </section>
    );
  }
}


export default Home;