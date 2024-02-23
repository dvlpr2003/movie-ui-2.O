import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Movie from './movie';
function App(){
  const [Series,setSeries]=useState([])
  const [SearchValue,setSearchValue]=useState("")
  const [error,setError] = useState("")
  const [Load,setLoad] = useState(false)
  const [Count,setCount]=useState()
  const [Drop,setDrop]=useState(false)
  function normal(e){
    setSearchValue(e)
}
useEffect(
  function(){
    async function fetchMovie(){
      try{
        setLoad(true)
        const res = await fetch(`http://www.omdbapi.com/?apikey=530cd181&s=${SearchValue}`);
        if (!res.ok) throw new Error("fuck")
        const data = await res.json();
        setLoad(false)

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
    <Header normal={normal} Count={Count} setDrop={setDrop}/>
    <Movie  Series={Series} Error={error} Load = {Load} setCount={setCount} Drop={Drop} setDrop={setDrop}/>
    </>
  )
}


export default App;
