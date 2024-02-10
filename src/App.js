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
    async function fetchMovie(){
      try{
        const res = await fetch(`http://www.omdbapi.com/?apikey=530cd181&s=${SearchValue}`);
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        setSeries(data.Search);
      }catch(err) {
        console.log(err.message);
      }
      }
      fetchMovie()
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
