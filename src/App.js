import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Movie from './movie';

function App(){
  const [Series,setSeries]=useState([])
  const [SearchValue,setSearchValue]=useState("")
  const [error,setError] = useState("")
 

  function normal(e){
    setSearchValue(e)

}
useEffect(
  function(){
    async function fetchMovie(){
      try{
        const res = await fetch(`http://www.omdbapi.com/?apikey=530cd181&s=${SearchValue}`);
        if (!res.ok) 
          throw new Error("movie not found");
        const data = await res.json();
        setSeries(data.Search);
      }catch(err) {
        console.error(err.message)
        setError(err.message)
        
        
      }
      if (SearchValue.length < 3) {
      setSeries([]) 
      return;
      }
    
      }
      fetchMovie()
  },[SearchValue]
)

  return (
    <>
    <Header normal={normal}/>
    <Movie  Series={Series} Error={error}/>
    </>
  )
}


export default App;
