import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class CountriesList extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div className="col-5">
        <div className="list-group">
          {countries.map((country) => {
            return (
              <Link
                key={country.cca3}
                className="list-group-item list-group-item-action"
                to={`/${country.cca3}`}
              >
                {country.name.official}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CountriesList;
