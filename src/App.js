import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LazyHero from 'react-lazy-hero';
import CssAnimateSequencer from './cssAnimateSequencer';

const img1 = require('./markus-spiske-507983-unsplash.jpg');
const img2 = require('./andrew-preble-199410-unsplash.jpg');
class App extends Component {
  render() {
    return (
      <div>
        <LazyHero parallaxOffset={550} imageSrc={img2} opacity={0} minHeight={'100vh'}>
          <CssAnimateSequencer string={'Christopher Caldwell'} duration={750} animation={'zoomInLeft'} />

        </LazyHero>

        <section class="content-section bg-light" id="about">
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-10 mx-auto">
                <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                <p class="lead mb-5">
                  I am a Web and Business Intelligence Developer with experience in full stack applications utilizing Javascript and ASP.Net frameworks.
                  I am passionate about creative logic, elegant code, continuous improvement, and collaborative teamwork.
                  My professional experience in Finance, Business Intelligence, and Operations provides a unique perspective on software development processes and strategies.
            </p>
                <a class="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a>
              </div>
            </div>
          </div>
        </section>

        <LazyHero minHeight={'20vh'} parallaxOffset={550} opacity={0} imageSrc={img1}>
          <CssAnimateSequencer string={'Generic Startup Headline'} duration={750} animation={'zoomIn'} />
        </LazyHero>



      </div>
    );
  }
}

export default App;
