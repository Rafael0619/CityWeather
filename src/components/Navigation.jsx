import React from "react";
import WeatherForm from "./WeatherForm";

const Navigation = ({handleCity, handleSearchWeather, name }) => {

    return (
        <>  
        <div className="navigation">
                    <div className="container" >
                        <h1 className="title_styles" >City Weather App</h1>
                        <div className="img_world">
                            <span className="pic_world">
                                <img  className="img_styles" src="https://www.mrjuegosdemesa.es/pics/2021/02/11/whcq-retro-del-globo-del-mundo-interactivo-globos-de-educacion-para-los-ninos-adornos-decoracion-adult-home-office-desktop-globe-con-base-de-metal-46108.jpg" alt="" />
                            </span>           
                        </div>
                
                        <WeatherForm  handleCity={handleCity} handleSearchWeather={handleSearchWeather} name={name} />
                    </div>
        </div>
        </>
    )
}

export default Navigation ;