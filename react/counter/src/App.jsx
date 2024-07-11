import React, {useState, useEffect} from 'react'
import './App.css'
import GetCounter from './components/counter'
//import Mapping from './components/Mapping.jsx'
// import Car from './components/Car'
// import isuzu from '../src/assets/isuzu.jpg'
// import honda from '../src/assets/Honda.jpeg'
// import subaru from '../src/assets/subaru.jfif'
// import alphard from '../src/assets/alphard.jpg'


function App() {
{/*
  let carToyota = {
    brand:'Toyota',
    year:2014,
    mileage:'20,000km',
    img:alphard,
    price:"3.3m"

  };
  let carIsuzu = {
    brand:'Isuzu', 
    year:2010, 
    mileage:'80,000km',
    img: isuzu,
    price:"2.1m"
  };
  let carHonda = {
    brand:'Honda',
    year:'2013',
    mileage:'60,000km',
    img: honda,
    price:"1.5m"
  };
  let carSubaru = {
    brand:'Subaru',
    year:'2012',
    mileage:'70,000km',
    img: subaru,
    price:"2.5m"
  };

  */}
  let [count, setCount] = useState(0)
  let [x, setX] = useState(20)

  useEffect(()=> {
    // our code

    console.log("count has changed")

    // returns a cleanup function
    return (
      ()=>{
        console.log("Inside cleanup")
      }
    )
  },[count, x])
 
  function getIncrease (number){
      setCount(++count)
  }
  function getDecrease (){
      setCount(--count)
  }
  function getReset (){
      setCount(0)
  }


  return (
    <>
      {/* <Car car={carToyota}/>
      <Car car={carIsuzu}/>
      <Car car={carHonda}/>
      <Car car={carSubaru}/> */}
      <GetCounter count={count} increaseFunc={getIncrease} decreaseFunc={getDecrease} resetFunc={getReset}/>
      <button type="button" className='btn btn-primary' onClick={()=>setX(x+1)}>Change X</button>
      {/* <Mapping/> */}
    </>
  )
}

export default App
