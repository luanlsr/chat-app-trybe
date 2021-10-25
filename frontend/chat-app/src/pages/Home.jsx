import React, {useState, useEffect} from 'react'
import './Home.css'
const { io } = require("socket.io-client");

const socket = io('http://localhost:3001/'); 

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    try {
      setIsLoading(true);
      fetch('http://localhost:3001/depoimentos')
        .then(response => response.json())
        .then(data => {
          setMessages(data);
        });
      setIsLoading(false);
      
    } catch (error) {
      console.log(error);
    }

  }, []);

  const handleClick = (e) => {
    socket.emit('adicionarMensagem', { user, message });
  }

  if(isLoading) {
    return (
      <h1>
        Loading
      </h1>
    )
  }

  return (
    <div>
      <form id="chat">
        <h1 className='title'>Trybe Depoimentos</h1>
        <div id="mensagensContainer">
          {messages}
        </div >
        <div>
          <input 
            type="text" 
            name="user" 
            id="user" 
            placeholder="Usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input 
            type="text" 
            name="message" 
            id="message" 
            className='message'
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button 
            type="submit"
            onClick={() => handleClick()}
          >
            Enviar
          </button>
          
        </div>
      </form>
    </div>
  )
}
