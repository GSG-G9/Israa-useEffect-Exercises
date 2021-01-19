import React,{useState,useEffect} from 'react'

function Exercise4(){
    const [input,setInput]=useState("")
    
return(
    <div>
        <div>
    <input 
            className="todo-input"
            type='text'
            id='input'
            onChange={e=>setInput(e.target.value)}
            />
           </div>
            <img
                      className="home-recipes-img"
                        alt="robosh"
                      src={`https://robohash.org/${input}`}
                    />
</div>
)
}
export default Exercise4;