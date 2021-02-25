import React from 'react';
import Countries from './../countries.json';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const countryId = props.match.params.countryId;
  console.log('countryId', countryId);

  // We iterate over the array of the projects to find that one project by it's id
  const country = Countries.find((countryObj) => countryObj.cca3 === countryId);
  console.log('countryFound', country);

  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((id) => {
                  console.log('id', id);
                  const country = Countries.find(
                    (countryObj) => countryObj.cca3 === id
                  );
                  console.log('country', country);
                  return (
                    <li key={id}>
                      <Link to={`/${id}`}> {country.name.official} </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
