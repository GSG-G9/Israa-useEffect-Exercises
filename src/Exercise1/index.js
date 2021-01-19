import React,{useState,useEffect} from 'react'

function Exercise1(){
  const [count,setCount]=useState(0)
  const incrementCount = () => {
    setCount(c=>c+ 1);
  };
  useEffect(()=>{
    document.addEventListener('mousedown',incrementCount,true
    )
    console.log('useeffect')
    return()=>{
        document.removeEventListener('mousedown',
            incrementCount,true)
        console.log('end useeffect')
    }
  },[count])
  
return(
<h1>counter : {count}</h1>

)
}
export default Exercise1;