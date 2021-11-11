import React, {useEffect, useState} from 'react';
import './styles.css';
import {  Container } from 'semantic-ui-react';
import { Message } from '../models/message';
import NavBar from './NavBar';
import MessagesDashboard from '../../features/messages/dashboard/MessagesDashboard';
import agent from '../api/agent'





function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  //const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    agent.Messages.list().then(response => {
      console.log(response);
      setMessages(response);
    })

  }, [])

    function handleCreateMessage(message: Message) {
      setMessages([...messages, message]);

    }


  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}} >
          <MessagesDashboard  
          messages = {messages}
          createMessage = {handleCreateMessage}
          />
      </Container>
    </>
  );
}

export default App;