 //
    let apiKey = "o0334a459at0ffc9a191a1b183f3f306";
    function displayTemperature(response) {
        let temperature = Math.round(response.data.temperature.current);
        let elementChange = document.querySelector(".temperature-value");
        elementChange.innerHTML = `${temperature}°C`;
    }
    
function family(event) {
    event.preventDefault();
    let searchElement = document.querySelector("#fortunate");
    let cityElement = document.querySelector("#enter-city");
    let city = searchElement.value;
    cityElement.innerHTML = city;
 
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
   
  axios.get(apiUrl).then(displayTemperature);

    
}
let submitform = document.querySelector("#search-form");
 submitform.addEventListener("submit", family);
 //
 let currentdate = document.querySelector("#current-date");
 let now = new Date();
 
 function formatDate(date) {
   let hour = now.getHours();
   let minute = now.getMinutes();
   let days = ["Sun","Mon", "Tue","Wed","Thurs","Fri","Sat"];
   let day = days[now.getDay()];

if(hour < 10) {
    hour = `0${hour}`;
     }
        if(minute < 10) {
    minute = `0${minute}`;
    }
    return `${day} ${hour}:${minute}`;
 }
 
 currentdate.innerHTML = formatDate(now);