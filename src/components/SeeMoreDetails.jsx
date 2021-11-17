import React from "react";
import {Link} from "react-router-dom"

const SeeMoreDetails = ({name,lon,lat,main,description,icon,temperature,termicalsense,pressure,humidity,visibility,speed_wind,degree_wind}) => {

    return (

    

        <>  
        <div className="row height height-lg-screen">
            <h1 className="col-12 font-lg-size font-lg-size City_name ">{name}</h1>
            <h3 className="col-12 col-md-6 city_features city-lg-features city-lg-features col-lg-4" > <span className="color"> Temperature: </span>  {temperature} °C</h3>
            <h3 className="col-12 col-md-6 city_features city-lg-features city-lg-features col-lg-4" > <span className="color">Description: </span> { description}</h3>
            <h3 className="col-12 col-md-6 city_features city-lg-features city-lg-features col-lg-4"> <span className="color">Termincal Sense:  </span>{termicalsense} °C</h3>
            <h3 className="col-12 col-md-6 city_features city-lg-features city-lg-features col-lg-4"> <span className="color">Longitude:  </span>{lon}°</h3>
            <h3 className="col-12 col-md-6 city_features city-lg-features city-lg-features col-lg-4"> <span className="color">Latitude: </span> {lat}°</h3>
            <h3 className="col-12 col-md-6 city_features city-lg-features city-lg-features col-lg-4"> <span className="color">Main Feature:  </span>{main}</h3>
            <h3 className="col-12 col-md-6 city_features city-lg-features city-lg-features col-lg-4"> <span className="color">Pressure:  </span>{pressure} hPa</h3>
            <h3 className="col-12 col-md-6 city_features city-lg-features city-lg-features col-lg-4"> <span className="color">Humidity:  </span>{humidity}%</h3>
            <h3 className="col-12 col-md-6 city_features city-lg-features city-lg-features col-lg-4"> <span className="color">Visibility:  </span>{visibility/1000}Km</h3>
            <Link className="  col-12" to="/">
                <button className=" Home_btn justify_content_center position_lg_btn position_lg_btn " >Home</button>
            </Link>
        </div>
        </>
    )
}

export default SeeMoreDetails ;