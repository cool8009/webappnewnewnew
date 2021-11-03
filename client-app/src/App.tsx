import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/messages').then(response => {
      console.log(response);
      setMessages(response.data);
    })

  }, [])



  return (
    <div className="App">
      <Header as='h2' icon='users' content='messages' />
      
        <List>

        {messages.map((message: any) => (
            <List.Item key={message.id}> 
              {message.content}
            </List.Item>
         
          ))}

          </List>
    </div>
  );
}

export default App;
