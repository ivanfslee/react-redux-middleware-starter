import axios from 'axios'

const weatherApi = 'http://api.openweathermap.org/data/2.5/weather';
const weatherAPIKey = '6f3f23c0f1a2fcb7edee25d08cb9cf62';
const scale = "imperial" //metric

export default async (city)=>{
    const weatherUrl = `${weatherApi}?q=${city}&units=${scale}&appid=${weatherAPIKey}`;
    console.log(city);
    console.log(weatherUrl);
    const response = await axios.get(weatherUrl);
    return {
        type: "cityUpdate",
        payload: response.data
    }
}