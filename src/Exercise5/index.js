import React,{useState,useEffect} from 'react'
// import {AiOutlineMail} from 'react-icons/ai'

function Exercise5(){
  const [newUser,setNewUser]=useState(0)
    const [name,setName]=useState("")
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")
    const [birthDay,setBirthDay]=useState("")
    const [isEdit,setIsEdit]=useState(false)
    const [isloading,setIsloading]=useState(false)

const handleNewUser=()=>{
  setNewUser(newUser+1)
  setIsloading(true)
}
const handleEdit=()=>{
  setIsEdit(true)
  
}
const handleSubmit=(e)=>{
  e.preventDefault();
  setIsEdit(false)
}
const handleDelete=()=>{
  setNewUser(newUser+1)
}
    useEffect(()=>{
        let isActive = true;
           fetch("https://randomuser.me/api/")
           .then(response=>response.json())
           .then(res=>{
            if (isActive) { 
              setIsloading(false)
            setName(`${res.results[0].name.title} ${res.results[0].name.first} ${res.results[0].name.last} `)
            setEmail(res.results[0].email)
            setAddress(`${res.results[0].location.street.number} ${res.results[0].location.street.name}
            ${res.results[0].location.city} ${res.results[0].location.country}`)
            setPhone(res.results[0].phone)
            setPassword(res.results[0].login.password)
            setUsername(res.results[0].login.username)
            setBirthDay(res.results[0].dob.date)
            
           }})
    
        return () => {

            isActive = false;
          };
       },[newUser])
    
return(
   isloading ? <img src="https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"/>:
  isEdit?<div>
    <form className="card">
          <input 
            className="todo-input"
            type='text'
            defaultValue={name}
            onChange={e=>setName(e.target.value)}
            />
            <input 
            className="todo-input"
            type='text'
            defaultValue={email}
            onChange={e=>setEmail(e.target.value)}
            />
               <input 
            className="todo-input"
            type='text'
            defaultValue={username}
            onChange={e=>setUsername(e.target.value)}
            />
                 <input 
            className="todo-input"
            type='text'
            defaultValue={address}
            onChange={e=>setAddress(e.target.value)}
            />
                 <input 
            className="todo-input"
            type='text'
            defaultValue={birthDay}
            onChange={e=>setBirthDay(e.target.value)}
            />
                 <input 
            className="todo-input"
            type='text'
            defaultValue={phone}
            onChange={e=>setPhone(e.target.value)}
            />
                 <input 
            className="todo-input"
            type='text'
            defaultValue={password}
            onChange={e=>setPassword(e.target.value)}
            />
               <button 
            className="btn"
            type='submit'
            defaultValue=' edit user'
           onClick={handleSubmit}
            >  Submit Edit </button>
        
    </form>
  </div>:
  <div className="card">
   
  <div ><img
  className="card__image"
  alt="user"
  src={`https://robohash.org/${username}`}
  /></div>
  <p className="card-name">{name}</p>
  <div className="data-span"><b>Email : </b> {email}</div>
  <div className="data-span"><b>username : </b>{username}</div>
  <div className="data-span"><b>Date of Birth : </b>{birthDay}</div>
  <div className="data-span"><b>Phone : </b>{phone}</div>
  <div className="data-span"><b>Password : </b>{password}</div>
  <div className="data-span"><b>Address: </b>{address}</div>
 
  <button className="btn" onClick={handleNewUser}>New User</button>
  <button  className="btn" onClick={handleEdit}>Edit User</button>
  <button className="btn"  onClick={handleDelete}>Delete User</button>
</div>
  
    
)
}
export default Exercise5;