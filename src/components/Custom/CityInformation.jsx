import React from "react";
import {Link} from "react-router-dom"

const CityInformation = ({name, temp, icon}) => {

    return (



        <>  
        <div className="md-width">
            <div className="capital_info row info_container">
                <div className="capitalInfo_presentation col-6">
                    <h1>{name}</h1>
                    <h2>{Math.round(((temp - 273.15)+ Number.EPSILON)*1000)/1000} °C</h2>
                </div>
                <img  src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="/" />
                <Link className=" col-6" to={`/details/${name}`}>
                    <button className="Search_capital_btn width_btn "  >See More</button>
                </Link>
            </div>
            </div>
        </>
    )
}

export default CityInformation ;