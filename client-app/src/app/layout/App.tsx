import React, {useEffect, useState} from 'react';
import './styles.css';
import axios from 'axios';
import {  Container, List } from 'semantic-ui-react';
import { Message } from '../models/message';
import NavBar from './NavBar';
import MessagesDashboard from '../../features/messages/dashboard/MessagesDashboard';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    axios.get<Message[]>('http://localhost:5000/api/messages').then(response => {
      console.log(response);
      setMessages(response.data);
    })

  }, [])



  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}} >
          <MessagesDashboard  messages = {messages}/>
      </Container>
    </>
  );
}

export default App;
