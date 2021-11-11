import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Message } from '../../../app/models/message'
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

interface Props {
    messages: Message[];
    createMessage: (message : Message ) => void;
}

export default function MessagesDashboard({ messages, createMessage }: Props) {
    
    return (
        <Grid>
            <Grid.Column width='16'>
                <MessageList messages={messages} />
            </Grid.Column>
            <Grid.Column width='16'>
                <Grid.Row >
                    <MessageForm createMessage={createMessage} message={undefined} />
                </Grid.Row>
            </Grid.Column>
        </Grid>



    );


}