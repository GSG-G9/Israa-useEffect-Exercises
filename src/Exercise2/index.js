import React,{useState,useEffect} from 'react'

function Exercise2(){
    const [color,setColor]=useState("blue")
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const measure=(e)=>{
           setX(e.clientX)
           setY(e.clientY)
           console.log(window.innerWidth)
           if(x>(window.innerWidth/2)){
            setColor("tomato")
        }
        else{
            setColor("blue")
        }
        }
    useEffect(()=>{
      document.addEventListener('mousemove',e=>{
          measure(e)
          }
        
      
      )
      console.log('useeffect')
      return()=>{
          document.removeEventListener('mousemove',measure)
          console.log('end useeffect')
      }
    },[color,x,y])
    
  return(
  <div className="color-div" style={{backgroundColor: color} }>I am now on X={x} and Y={y}</div>
  )
}
export default Exercise2;