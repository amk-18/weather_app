const API_KEY =`3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
// const API =`https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL =`https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeather = async(city) =>{
    weather.innerHTML = `<h2>loading...</h2>`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)  // js never waits for promise to be resolved and it executes next line so await prevent the execution
    // console.log(response);
    const data = await response.json();
    console.log(data);
    return showWeather(data)
}
const showWeather=(data)=>{
    if(data.cod=="404"){
        weather.innerHTML =`<h2> sorry !! please enter a valid city name</h2>`
        return
    }
            weather.innerHTML =`
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <h2>${data.main.temp} °C</h2>
                <h4>${data.weather[0].main}</h4>
                <h4>wind speed ${data.wind.speed}km/h</h4>
                <h5 class="coor">longitude ${data.coord.lon}</h5>
                <h5 class="coor">latitude ${data.coord.lat}</h5>
            </div> `
}

form.addEventListener("submit",
    function(event){
        getWeather(search.value);
        event.preventDefault();
    }
)
const btn=()=>{
    getWeather(search.value)
    
}
