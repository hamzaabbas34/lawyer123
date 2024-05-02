import React, { useState } from 'react';
import io from 'socket.io-client';
import'./chat.css'
import Chating from './Chating';
const socket = io.connect("http://localhost:8000");

export default function Chat() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  function handleName(e) {
    e.preventDefault()
    if(!room.length){
      setName('')
    }
    else{
      setName(username)
    }
  }

  return (
    <div>
      {name ? <Chating socket={socket} name={name} room={room}/> : (
        <div className='user-name'>
          <form className="user-name-from">
          <h2>Wellcome To Chat App </h2>
         <div className="fo">
          <label htmlFor=""> Room Number</label>
          <input 
            type="text" 
            onChange={(e) => setRoom(e.target.value)} 
            placeholder='Enter the Room Number' 
          />
         </div>
         <div className="fo">
          <label htmlFor="">Name</label>
          <input 
            type="text" 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='Enter your Name' 
          />
         </div>
          
          <button onClick={handleName} cla>Enter</button> </form>  
        </div>
      )}
    </div>
  );
}
