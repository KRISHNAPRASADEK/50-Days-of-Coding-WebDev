import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [singleCountry, setSingleCountry] = useState("");

  const [cities, setCities] = useState([]);
  const [singleCity, setSingleCity] = useState("");

  const [submit, setSubmit] = useState(false);

  const fetchCountries = async () => {
    try {
      const country = await axios.get(
        "https://countriesnow.space/api/v0.1/countries"
      );

      setCountries(country.data.data);
    } catch (error) {
      console.warn(error);
    }
  };

  const fetchCities = (country) => {
    setSingleCountry(country);
    setSingleCity("");
    setSubmit(false);

    if (country !== "select country") {
      const findCities = countries.find((item) => item.country === country);
      setCities(findCities.cities);
    }
  };

  const submitHandle = () => {
    if (singleCountry !== "" && singleCity !== "") {
      setSubmit(true);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  // console.warn(countries);
  // console.warn(cities);

  return (
    <div className="App">
      <div className="App-header">
        <h3>Select your hometown</h3>
        <div>
          {countries && (
            <select
              value={singleCountry}
              onChange={(e) => fetchCities(e.target.value)}
            >
              <option defaultValue>select country</option>
              {countries.map((item, i) => (
                <option key={i} value={item.country}>
                  {item.country}
                </option>
              ))}
            </select>
          )}

          {cities && (
            <select
              value={singleCity}
              onChange={(e) => setSingleCity(e.target.value)}
            >
              <option defaultValue>select city</option>
              {cities.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
          <button onClick={submitHandle}>Go</button>
        </div>
        {submit && (
          <h3>
            your country is {singleCountry} and your city is {singleCity}
          </h3>
        )}
      </div>
    </div>
  );
}

export default App;
