import React from "react";

const Weather = (props) => {
  return (
    <div className="infoWeath">
      {props.city && (
        <div>
          <p>
            Место: {props.city}, {props.country}
          </p>
          <p>Температура: {props.temp}</p>
          <p>Давление: {props.pressure}</p>
        </div>
      )}
      <p className="error">{props.error}</p>
    </div>
  );
};

export default Weather;
