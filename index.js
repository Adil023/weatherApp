const search=document.querySelector('#glassIcon')
search.addEventListener('click',()=>{
      const APIKey = '59c0e20aa0eda83dd939b1c9ea449ae4';
      const error=document.querySelector('.error')
      const image=document.querySelector('#image')
      const cityName=document.querySelector('#city')
      const container=document.querySelector('.container')
      const weatherBox=document.querySelector('.weatherBox')
      const humiditywind=document.querySelector('.humiditywind')
      const city=cityName.value
      

      

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
      .then((response) => response.json())
      .then((data) => {
            if(data.cod === '404'){
                  error.style.display='block' 
                  weatherBox.style.display='none'
                  humiditywind.style.display='none'
                  return;
            }else if (city === ''){
            weatherBox.style.display='none'
            humiditywind.style.display='none'
            error.style.display='none'
            return;
            }
                  error.style.display='none' 
                  weatherBox.style.display='block'
                  humiditywind.style.display='flex'
   
                 
                    switch(data.weather[0].main){
                        case 'Clear':
                              image.src='images/clear.png'
                              break;

                        case 'Clouds':
                              image.src='images/cloud.png'
                              break;

                        case 'Rain':
                              image.src='images/rain.png'
                              break;

                        case 'Snow':
                              image.src='images/snow.png'
                              break;

                        case 'Haze':
                              image.src='images/mist.png'
                              break;

                        default:
                              image.src=''
                              

                    }

                    const humidityPercent=document.querySelector('#humidityPercent')
                    const speedDegre=document.querySelector('#speedDegre')
                    const temprature=document.querySelector('#temprature')
                    const description=document.querySelector('#description')
                    humidityPercent.innerHTML=`${data.main.humidity}%`
                    temprature.innerHTML=`${Math.trunc(data.main.temp)}℃`
                    speedDegre.innerHTML=`${Math.trunc(data.wind.speed)}Km/h`
                    description.innerHTML=data.weather[0].description
            
                    
            
      });
})