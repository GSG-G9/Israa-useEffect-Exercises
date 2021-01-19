import React,{useState,useEffect} from 'react'

function Exercise3(){
   const [input,setInput]=useState("")
   const [image,setImage]=useState("")
   const [data,setData]=useState([])
   useEffect(()=>{
    let isActive = true;
       fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=fqRDKIkC6bHjBqqhzUXG8c4r8zRspT6V`)
       .then(response=>response.json())
       .then(res=>{
        if (isActive)   
        setData(res.data)
    })

    return () => {
        isActive = false;
      };
   },[input,data])
return(
    <div>
    <input 
            className="gif-input"
            type='text'
            id='input'
            onChange={e=>setInput(e.target.value)}
            />
    <ul className="home-recipes-container">
        {data.map(item=>(
            <li className="item" key={item.idMeal}>
                 <img
                      className="home-recipes-img"
                      alt={item.title}
                      src={item.images.downsized_medium.url}
                    />
            </li>
        ))}
    </ul>
    </div>

)
}
export default Exercise3;