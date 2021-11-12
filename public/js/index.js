// Trageting DOM Elements
let din = document.querySelector('.day');
let tareekh = document.querySelector('.date');
let input = document.querySelector('.input-container input');
let searchBtn = document.querySelector('.search-btn');
let shehr = document.querySelector('.city');
let icon = document.querySelector('.temp-icon');

// Setting DayName & Date
let date = new Date().toString().slice(0,10);
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day;
for(let dai of days){
    if(dai.startsWith(date.slice(0,3))){
        day = dai;
    }
}
din.textContent = day;
tareekh.textContent = date.slice(3);




// Fetching & Displaying Weather in DOM
const fetchWeather = async (para)=>{
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${para}&appid=${Your Api Key Here}&units=metric`);
        if(!res.ok){
            throw new Error(res.status);
        }
        const data = await res.json();
        shehr.textContent = data.name+', '+data.sys.country;
        document.querySelector('.temp').textContent = data.main.temp+' C';
        switch(data.weather[0].main){
            case 'Clouds':
                icon.innerHTML = '<i class="fas fa-cloud"></i>';
                break;
            case 'Rain':
                icon.innerHTML = '<i class="fas fa-cloud-rain"></i>';
                break;
            case 'Haze':
                icon.innerHTML = '<i class="fas fa-smog"></i>';
                break;
            case 'Clear':
                icon.innerHTML = '<i class="fas fa-sun"></i>';
                break;
            case 'Smoke':
                icon.innerHTML = '<i class="fas fa-icicles"></i>';
                break;
            default:
                icon.innerHTML = '<i class="fas fa-sun"></i>';
        }
        input.value = '';
    }catch(e){
        console.log(e);
    }
}



// Listening for Click Event
searchBtn.addEventListener('click', ()=>{
    if(!input.value.trim().length){
        shehr.textContent = 'Plz write the name before search';
    }else{
        fetchWeather(input.value.trim()); 
    }
});
