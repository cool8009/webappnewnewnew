import { Guid } from "guid-typescript";
import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Message } from "../../../app/models/message";

interface Props {
	message: Message | undefined; 
	createMessage: (message: Message) => void;

}

function MessageForm({message : createdMessage , createMessage} : Props)  {
	
	const initialState = createdMessage ?? {
		messageId: Guid.create().toString,
		content: '',
		dateSent: new Date().toString()

	}

	const [message, setMessage] = useState(initialState)

	function handleSubmit() {
		console.log(message)
		//createMessage(createdMessage);
	}
	
	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		console.log(message);
		// let newMessage = message;
		// newMessage.content = event.target.value;
		// setMessage(newMessage);
		const {name, value} = event.target;
		setMessage({...message, content: value});
	}
	
        return (
            <Form onSubmit={handleSubmit} style={{ margin:"0 0 1em 0" }}>
				<Form.Group inline style={{ flexWrap:"nowrap", margin:0 }}>
					<Form.Input width={16}   onChange={handleInputChange}  />
					<Button type='submit' primary>Send</Button>
				</Form.Group>
			</Form>
		);
	 
}

export default MessageForm;