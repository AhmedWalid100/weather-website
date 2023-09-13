//Variables and constants
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
const Link = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=ca17c5a558b869aa59e22084ebf4f1ef&units=imperial";




//Functions
function ButtonClick() {
    const zip = document.getElementById("zip").value;
    const feeling = document.getElementById("feelings").value;
    console.log(zip, feeling);
    getData(Link + zip + apiKey).then((data) => { postData("/post", { temp: data.main.temp, date: newDate, userResponse: feeling }).then(updateUI("/get")); })

}

const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
               
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

const getData = async (url = '') => {
    const response = await fetch(url);
    try {
        
        data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.log("error", error);
    }

}

const updateUI = async (url='') => {
    const response = await fetch(url);
    try {
        data = await response.json();
        document.getElementById("date").innerHTML = "Today's date is: " +data.date;
        document.getElementById("temp").innerHTML ="The temperature in fahrenheit is: " +data.temp;
        document.getElementById("content").innerHTML = "Your feeling today: " +data.userResponse;
    }
    catch (error) {
        console.log("error", error);
    }

}




//EventListener
document.getElementById("generate").addEventListener("click", ButtonClick);



/*Zipcode API requests were depracted by OpenWeatherMap. They are no longer supported and updated as far as I understand.
 I got this API zipcode request link from a their documentation if you scroll far down. If you don't include a country, by default it's set to US.*/


