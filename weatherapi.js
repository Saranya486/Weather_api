let sel=document.getElementById("sel");
let temp=document.getElementById("temp")
let humi=document.getElementById("humi")
let cityname;
sel.addEventListener("change",()=>{
   
    cityname=sel.value;

    
async function checkwether(){
       
    let apikey="283fdf6cf05124c70731f590d256e6de"
    let response=await fetch(
      ` https://api.oenweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
   
    );
   
   return response;
   }

    checkwether().then((data)=>{
        // console.log(data.json());
          return data.json();
      })
      .then((data1)=>{
        console.log(data1)
      console.log(data1.main.temp)
      let tempInCelsius = (data1.main.temp - 273.15).toFixed(2);
                    temp.textContent = `Temperature: ${tempInCelsius}°C`;
                    humi.textContent = `Humidity: ${data1.main.humidity}%`;

      
      }).
      catch((err)=>{
            let al=document.getElementById("alert")
           
           al.textContent= err.message;
           al.style.color="yellow";
        });       
       
})



