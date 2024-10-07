const Show_That_Rain = document.getElementById('Show_That_Rain_Ye');


const Places_In_Britian = [
    { name: 'London', lat: 51.5074, lon: -0.1278 },
    { name: 'Manchester', lat: 53.483959, lon: -2.244644 },
    { name: 'Birmingham', lat: 52.4862, lon: -1.8904 },
    { name: 'Glasgow', lat: 55.8642, lon: -4.2518 },
    { name: 'Bristol', lat: 51.4545, lon: -2.5879 },
    { name: 'Leeds', lat: 53.8008, lon: -1.5491 }
];


async function Fetch_That_Rain_Data() {
    Show_That_Rain.innerHTML = '';

    for (const Location of Places_In_Britian) {
        const Lets_Wait = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${Location.lat}&longitude=${Location.lon}&current_weather=true`);
        const Data = await Lets_Wait.json();
        Actually_Show_The_Weather(Location.name, Data.current_weather);
    }
}


function Actually_Show_The_Weather(Location_Name, Rain_Data) {
    const Weather_Box_Ye = document.createElement('div');
    Weather_Box_Ye.classList.add('Where_It_Will_Rain');
    Weather_Box_Ye.innerHTML = `
        <h2>${Location_Name}</h2>
        <p>Temperature: ${Rain_Data.temperature}°C</p>
        <p>Windspeed: ${Rain_Data.windspeed} km/h</p>
        <p>Condition: ${Rain_Data.weathercode}</p>
    `;
    Show_That_Rain.appendChild(Weather_Box_Ye);
}


setInterval(Fetch_That_Rain_Data, 300000);


Fetch_That_Rain_Data();