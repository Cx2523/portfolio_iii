import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import CssAnimateSequencer from './cssAnimateSequencer';
import SkillsWidget from './SkillsWidget';

const img1 = require('./blocks.jpg');
class App extends Component {
  render() {
    return (
      <div>
        <LazyHero className={'hero'} parallaxOffset={550} imageSrc={img1} opacity={0} minHeight={'100vh'}>
          <CssAnimateSequencer string={'Christopher Caldwell'} duration={750} animation={'zoomInLeft'} />
        </LazyHero>

        <section className={'intro-blurb'}>
          <p>
            I am a Web and Business Intelligence Developer with experience in full stack applications utilizing Javascript and ASP.Net frameworks.
            I am passionate about creative logic, elegant code, continuous improvement, and collaborative teamwork.
            My professional experience in Finance, Business Intelligence, and Operations provides a unique perspective on software development processes and strategies.
          </p>
        </section>

        <SkillsWidget />

        <LazyHero minHeight={'20vh'} parallaxOffset={550} opacity={0} imageSrc={img1}>
          <CssAnimateSequencer string={'Generic Startup Headline'} duration={750} animation={'zoomIn'} />
        </LazyHero>



      </div>
    );
  }
}

export default App;
