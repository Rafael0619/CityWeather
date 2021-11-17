import React from "react";
import { Link } from "react-router-dom";

const WeatherForm = ({handleCity, handleSearchWeather, name}) => {

    return (
        <form  className="form_styles row" action="" onSubmit={(e) => handleSearchWeather(e)}>
            <input className="form_styles Search_inputText" type="text" placeholder="Write City" onChange={({target}) => handleCity(target)} />
            <input className=" Search_capital_btn " type="submit" value="Search"  />
        </form>
            
            
    )
}

export default WeatherForm ;