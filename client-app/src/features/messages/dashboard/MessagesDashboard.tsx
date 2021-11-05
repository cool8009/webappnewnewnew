import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Message } from '../../../app/models/message' 
import MessageList from "./MessagesList";

interface Props {
    messages: Message[];
}

export default function MessagesDashboard({messages}: Props) {

    return (
        <Grid>
            <Grid.Column width='8'>
                <MessageList messages = {messages}/>
            </Grid.Column>
        </Grid>



    );


}