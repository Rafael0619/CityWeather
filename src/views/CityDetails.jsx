import React,{useState, useEffect} from "react";
import SeeMoreDetails from "../components/SeeMoreDetails";
import { useParams } from "react-router";
import FetchError from "../components/FetchError";

const CityDetails = () => {
    
    const objeto = useParams();


    const [cityName , setCityName ] = useState (objeto.name);
    const [cityInformation, setCityInformation] = useState();
    const [loader, setLoader] = useState(false);

        const handleSearchWeather = async () =>{
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=111e6b2ddfce9fdfe08ee7a72e7f9c7e`
            const response = await fetch(API)
            const result = await response.json();
            setCityInformation(result);
            console.log(cityInformation);
        }


        useEffect(()=>{
            handleSearchWeather();
        },[]) 
    
      

    return (
        <>  

            { 
                cityInformation && (
                <SeeMoreDetails 
                name={cityInformation.name}
                lon={cityInformation.coord.lon}
                lat={cityInformation.coord.lat}
                main={cityInformation.weather[0].main}
                description={cityInformation.weather[0].description}
                icon={cityInformation.weather[0].icon}
                temperature={cityInformation.main.temp}
                termicalsense={cityInformation.main.feels_like}
                pressure={cityInformation.main.pressure}
                humidity={cityInformation.main.humidity}
                visibility={cityInformation.visibility}
                speed_wind={cityInformation.wind.speed}
                degree_wind={cityInformation.wind.deg} />     
                )}
            </>
    )
}

export default CityDetails;