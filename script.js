//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79aa45813cmsh421d9e9c2e6ac67p143539jsn79ac50780661',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>
  {
    cityname.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
  .then(response=>response.json())
  .then(response=>{
    console.log(response)
    cloud_pct .innerHTML = response.cloud_pct
  temp1.innerHTML = response.temp
    temp2.innerHTML = response.temp
      feels_like.innerHTML  = response.feels_like
  humidity1.innerHTML  = response.humidity
  humidity2.innerHTML  = response.humidity
  min_temp.innerHTML  = response.min_temp 
  max_temp.innerHTML  = response.max_temp 
  wind_speed1.innerHTML  = response.wind_speed
  wind_speed2.innerHTML  = response.wind_speed
  sunrise.innerHTML = response.sunrise
  sunset.innerHTML = response.sunset
  })
  .catch(err=>console.error(err));
}
const getWeather1=(shanghai)=>
  {
   
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+shanghai,options)
  .then(response=>response.json())
  .then(response=>{
    console.log(response)
    cloud_pct5.innerHTML = response.cloud_pct
  temp5.innerHTML = response.temp
  feels_like5.innerHTML  = response.feels_like
  humidity5.innerHTML  = response.humidity
min_temp5.innerHTML  = response.min_temp 
  max_temp5.innerHTML  = response.max_temp 
      wind_degrees5.innerHTML  = response.wind_degrees
  wind_speed5.innerHTML  = response.wind_speed
  sunrise5.innerHTML = response.sunrise
  sunset5.innerHTML = response.sunset
  })
  .catch(err=>console.error(err));
}
const getWeather2=(boston)=>
  {
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+boston,options)
  .then(response=>response.json())
  .then(response=>{
    console.log(response)
    cloud_pct6.innerHTML = response.cloud_pct
  temp6.innerHTML = response.temp
  feels_like6.innerHTML  = response.feels_like
  humidity6.innerHTML  = response.humidity
min_temp6.innerHTML  = response.min_temp 
  max_temp6.innerHTML  = response.max_temp 
      wind_degrees6.innerHTML  = response.wind_degrees
  wind_speed6.innerHTML  = response.wind_speed
  sunrise6.innerHTML = response.sunrise
  sunset6.innerHTML = response.sunset
  })
  .catch(err=>console.error(err));
}
const getWeather3=(lucknow)=>
  {
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+lucknow,options)
  .then(response=>response.json())
  .then(response=>{
    console.log(response)
    cloud_pct7.innerHTML = response.cloud_pct
  temp7.innerHTML = response.temp
  feels_like7.innerHTML  = response.feels_like
  humidity7.innerHTML  = response.humidity
min_temp7.innerHTML  = response.min_temp 
  max_temp7.innerHTML  = response.max_temp 
      wind_degrees7.innerHTML  = response.wind_degrees
  wind_speed7.innerHTML  = response.wind_speed
  sunrise7.innerHTML = response.sunrise
  sunset7.innerHTML = response.sunset
  })
  .catch(err=>console.error(err));
}
const getWeather4=(kolkata)=>
  {
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+kolkata,options)
  .then(response=>response.json())
  .then(response=>{
    console.log(response)
    cloud_pct8.innerHTML = response.cloud_pct
  temp8.innerHTML = response.temp
  feels_like8.innerHTML  = response.feels_like
  humidity8.innerHTML  = response.humidity
min_temp8.innerHTML  = response.min_temp 
  max_temp8.innerHTML  = response.max_temp 
      wind_degrees8.innerHTML  = response.wind_degrees
  wind_speed8.innerHTML  = response.wind_speed
  sunrise8.innerHTML = response.sunrise
  sunset8.innerHTML = response.sunset
  })
  .catch(err=>console.error(err));
}
const getWeather5=(switzerland)=>
  {
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+switzerland,options)
  .then(response=>response.json())
  .then(response=>{
    console.log(response)
    cloud_pct9.innerHTML = response.cloud_pct
  temp9.innerHTML = response.temp
  feels_like9.innerHTML  = response.feels_like
  humidity9.innerHTML  = response.humidity
min_temp9.innerHTML  = response.min_temp 
  max_temp9.innerHTML  = response.max_temp 
      wind_degrees9.innerHTML  = response.wind_degrees
  wind_speed9.innerHTML  = response.wind_speed
  sunrise9.innerHTML = response.sunrise
  sunset9.innerHTML = response.sunset
  })
  .catch(err=>console.error(err));
}
const getWeather6=(seattle)=>
  {
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+seattle,options)
  .then(response=>response.json())
  .then(response=>{
    console.log(response)
    cloud_pct0.innerHTML = response.cloud_pct
  temp0.innerHTML = response.temp
  feels_like0.innerHTML  = response.feels_like
  humidity0.innerHTML  = response.humidity
min_temp0.innerHTML  = response.min_temp 
  max_temp0.innerHTML  = response.max_temp 
      wind_degrees0.innerHTML  = response.wind_degrees
  wind_speed0.innerHTML  = response.wind_speed
  sunrise0.innerHTML = response.sunrise
  sunset0.innerHTML = response.sunset
  })
  .catch(err=>console.error(err));
}
submit.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather(city.value)
  })

shimla.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather("Shimla")
  })
bangalore.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather("Bangalore")
  })
kozhikode.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather("Kozhikode")
  })
chennai.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather("Chennai")
  })
delhi.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather("Delhi")
  })
mumbai.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather("Mumbai")
  })
hyderabad.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather("Hyderabad")
  })
getWeather("Delhi")
getWeather1("Shanghai")
getWeather2("Boston")
getWeather3("Lucknow")
getWeather4("Kolkata")
getWeather5("Switzerland")
getWeather6("Seattle")
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }