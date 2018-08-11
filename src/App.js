import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import CssAnimateSequencer from './cssAnimateSequencer';
import SkillsWidget from './SkillsWidget';
import ProjectsGrid from './ProjectsGrid';

const img1 = require('./blocks.jpg');
class App extends Component {
  render() {
    return (
      <div>
        <LazyHero className={'hero'} parallaxOffset={550} imageSrc={img1} opacity={0} minHeight={'100vh'}>
          <CssAnimateSequencer string={'Christopher Caldwell'} duration={750} animation={'zoomInLeft'} />
          <button href={'#skills'}>Learn More</button>
        </LazyHero>

        <section className={'intro-blurb'}>
          <p>
            I am a Web and Business Intelligence Developer with experience in full stack applications utilizing Javascript and ASP.Net frameworks.
            I am passionate about creative logic, elegant code, continuous improvement, and collaborative teamwork.
            My professional experience in Finance, Business Intelligence, and Operations provides a unique perspective on software development processes and strategies.
          </p>
        </section>
        <LazyHero id={'skills'} minHeight={'10vh'} parallaxOffset={550} opacity={0} imageSrc={img1}>
          <div style={{fontSize: '80px', color: 'white'}}>Core Skills</div>
        </LazyHero>
        <section className={'skills'}>
          <SkillsWidget />
        </section>
        <LazyHero minHeight={'10vh'} parallaxOffset={550} opacity={0} imageSrc={img1}>
          <div style={{fontSize: '80px', color: 'white'}}>Projects</div>
        </LazyHero>
        <section className={'skills'}>
          <ProjectsGrid />
        </section>
        <LazyHero minHeight={'10vh'} parallaxOffset={550} opacity={0} imageSrc={img1}>
          <div style={{fontSize: '80px', color: 'white'}}>Contact</div>
        </LazyHero>
        



      </div>
    );
  }
}

export default App;
