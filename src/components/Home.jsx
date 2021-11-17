import React,{useState} from "react";
import Navigation from "./Navigation";
import Loader from "./Custom/Loader";
import FetchError from "./FetchError"
import CityInformation from "./Custom/CityInformation";

const Home = () => {
    
    
    const [cityName , setCityName ] = useState ([]);
    const [cityInformation,  setCityInformation ] = useState (null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    const handleCity = ({value}) => {
        setCityName(value);
    }
     
    console.log(cityName);

    const handleSearchWeather = async (e) =>{
        e.preventDefault();
        setLoader(true);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=111e6b2ddfce9fdfe08ee7a72e7f9c7e`
        const response = await fetch(API)
        const result = await response.json();
        if(result.message){
            setError(true);
        }else{
            setCityInformation(result);
            setLoader(false);
            setError(false);
        }
        

    }

    return (
        <>
            <div className="md-screen">
                <Navigation handleCity={handleCity} handleSearchWeather={handleSearchWeather} name={cityName} />
                <div>
                    { error? ( < FetchError message={error.message} />  ) :
                        cityInformation ?
                        (  <CityInformation  name={cityInformation.name} temp={cityInformation.main.temp} icon={cityInformation.weather[0].icon} /> ) : 
                        (
                    <div className="md-width ">
                        <div className="home_container row">
                            <h1 className="title_weatherApp_styles">Welcome To The Weather App</h1>
                            <h4 className="paragraph_styles">If you want to travel to another capital city and want to know about its weather conditions this is the App you are looking for!!</h4>
                        </div>
                    </div> )
                    }
                </div>
            </div>
        </>
    )
}

export default Home;