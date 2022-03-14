import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [key, setKey] = useState("");

  const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=rapeMIyukWjJHSROCIILOC8VnDifrh4i&&q=${location}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data[0]);
        console.log(response.data[0]);
        searchWeather(data[0].Key);
      });
      setLocation("");
    }
  };

  const url2 = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=rapeMIyukWjJHSROCIILOC8VnDifrh4i`;

  const searchWeather = (key) => {
    axios.get(url2).then((response) => {
      console.log(response.data[0]);
    });
  };

  return (
    <div>
      <div>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div>
        <div className="displaySearchResult">
          <h1></h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
