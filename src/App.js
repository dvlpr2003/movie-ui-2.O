import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Movie from './movie';

function App(){
  const [Series,setSeries]=useState([])
  const [SearchValue,setSearchValue]=useState()
  function normal(e){
    setSearchValue(e)

}
useEffect(
  function(){
    fetch(`http://www.omdbapi.com/?apikey=530cd181&s=${SearchValue}`)
    .then((res)=>res.json())
    .then((data)=>setSeries(data.Search))
  },[SearchValue]
)
console.log(Series)

  return (
    <>
    <Header normal={normal}/>
    <Movie  Series={Series}/>
    </>
  )
}


export default App;
