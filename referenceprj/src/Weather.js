import {useState,useEffect} from 'react'



const Weather=({location,render})=>{

const [isLoading,setisLoading]=useState(true);
const [error,setError]=useState(false);
const[tempreture,setTempreture]=useState(0);
const[conditions,setConditions]=useState([]);
const[icon,setIcon]=useState("");
const[palce,setPlace]=useState("");
const [data,setData]=useState([])

const fetchWeather=location=>{
    setisLoading(true);
    fetch(`http://api.weatherstack.com/current?access_key=3934a224ef8415eb2c9d9dfad0f4f8c6&query=London`
    
    )
    .then(res=>res.json())
    .then(res => setData(res))  
    .then(({current,location})=>{
        const {temperature,weather_description,weather_icon}=current;
        const{name,country}=location;
        setTempreture(temperature);
        setConditions(weather_description);
        setIcon(weather_icon[0]);
        setPlace(`${name} , ${country}`);
        setError(false)
    })
    //alert(JSON.stringify(data))
    .catch(()=>setError(true))
    .finally(()=>setisLoading(false))

};
useEffect(()=>{
    if (location){
        fetchWeather(location);

    }

},[location])

return render({error,isLoading,tempreture,conditions,icon,palce});


};
export default Weather;