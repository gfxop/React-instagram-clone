import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';


// RENDER APP
class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <section className="App-main">
          
          <Post nickname="Cody" avatar="https://live.staticflickr.com/884/29070955078_8c812b539b_b.jpg" caption="Lorem ipsum dolor amet brooklyn pug scenester salvia" image="https://live.staticflickr.com/65535/46724134015_c933daa4d6_b.jpg" />

          <Post nickname="Chris" avatar="https://live.staticflickr.com/884/29070955078_8c812b539b_b.jpg" caption="Lorem ipsum dolor amet brooklyn pug scenester salvia" image="https://live.staticflickr.com/65535/46724143565_9cd1266e7b_b.jpg" />

        </section>
      </div>;
  }
}

export default App;
