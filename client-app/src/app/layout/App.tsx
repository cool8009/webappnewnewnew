import React, {useEffect, useState} from 'react';
import './styles.css';
import {  Container } from 'semantic-ui-react';
import { Message } from '../models/message';
import NavBar from './NavBar';
import MessagesDashboard from '../../features/messages/dashboard/MessagesDashboard';
import agent from '../api/agent'
import { Guid } from 'guid-typescript';





function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [submitting, setSubmitting] = useState(false);
  //const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    agent.Messages.list().then(response => {
      console.log(response);
      setMessages(response);
    })

  }, [])

    function handleCreateMessage(message: Message) {
      // setMessages([...messages, message]);
      setSubmitting(true);
      agent.Messages.create(message).then(() => {
        setMessages([...messages, message]);
        setSubmitting(false);

      });

      

    }


  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}} >
          <MessagesDashboard  
          messages = {messages}
          createMessage = {handleCreateMessage}
          submitting = {submitting}
          />
      </Container>
    </>
  );
}

export default App;