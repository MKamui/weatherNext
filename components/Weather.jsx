import React from 'react'
import Image from 'next/image'

const Weather = ({data}) => {
  console.log(data)
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90hv] m-auto p-4 text-gray-300 z-10'>
      <div className='relative flex justify-between py-12'>
        <div className='flex flex-col items-center'>
          <Image 
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
          alt='/'
          width='100'
          height='100'
          />
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        <p className='text-9xl'>{data.main.temp.toFixed(0)}º</p>
      </div>
      <div className={data.weather[0].main === 'Clouds'?'bg-black/50 relative p-8 rounded-md'
      :data.weather[0].main === 'Thunderstorm' ? 'bg-amber-200/50 relative p-8 rounded-md'
      :data.weather[0].main === 'Rain' ? 'bg-blue-400/50 relative p-8 rounded-md'
      :data.weather[0].main === 'Snow' ? 'bg-gray-500/50 relative p-8 rounded-md'
      :'bg-green-500/50 relative p-8 rounded-md'}>
        <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
        <div className='flex justify-between text-center'>
          <div>
            <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}º</p>
            <p className='text-xl'>Feels Like</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>{data.main.humidity}%</p>
            <p className='text-xl'>Humidity</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
            <p className='text-xl'>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather