import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import { Route } from 'react-router-dom';

import Countries from './countries.json';

class App extends Component {
  state = {
    countries: Countries,
  };

  // componentDidMount()

  render() {
    const { countries } = this.state;
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Route path="/:countryId" component={CountryDetails} exact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
