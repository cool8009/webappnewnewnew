import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Message } from '../../../app/models/message'
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

interface Props {
    messages: Message[];
}

export default function MessagesDashboard({ messages }: Props) {

    return (
        <Grid>
            <Grid.Column width='16'>
                <MessageList messages={messages} />
            </Grid.Column>
            <Grid.Column width='16'>
                <Grid.Row >
                    <MessageForm />
                </Grid.Row>
            </Grid.Column>
        </Grid>



    );


}