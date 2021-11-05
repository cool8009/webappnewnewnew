import React from "react";
import { Item, ItemExtra, ItemMeta, Segment } from "semantic-ui-react";
import { Message } from "../../../app/models/message";

interface Props {
    messages: Message[];
}

export default function MessageList({ messages }: Props) {

    return (
        <Segment>
            <Item.Group divided>
                {messages.map(message => (
                    <Item key={message.messageId}>
                        
                        <Item.Header>
                            PlaceholderUserName
                        </Item.Header>
                        <Item.Content y>
                            {message.content}
                        </Item.Content>
                        <Item.Meta>
                            {message.dateSent}
                        </Item.Meta>

                    </Item>

                ))}

            </Item.Group>
        </Segment>



    );
}