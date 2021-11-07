import React from "react";
import { Item, ItemExtra, ItemMeta, List, Segment } from "semantic-ui-react";
import { Message } from "../../../app/models/message";
import moment from 'moment';


interface Props {
    messages: Message[];
}

const formatDate = (date: Date) => {
    const pad = (n: number) => n < 10 ? "0" + n : n;
    return pad(date.getHours()) + ":" + pad(date.getMinutes());
}

const getAlignment = (index: number) => {
    if (index % 2 === 0)
        return 'right';
    else
        return 'left';
}

const getColor = (index: number) => {
    if (index % 2 === 0)
        return 'green';
    else
        return 'blue';
}
  

//const getAlignment = (username1, username2) => username1 === username2 ? "right" : "left"
//const getColor = (username1, username2) => username1 === username2 ? "green" : "blue"

export default function MessageList({ messages }: Props) {

    return (
        <List>
            {messages.map((message, index) => (
                <List.Item key={message.messageId}>
                    <Segment floated={getAlignment(index)} color={getColor(index)} style={{ textAlign: getAlignment(index) }}>
                        <p>
                            <span style={{ fontWeight: "bold" }}> placeholderUserName</span><br />
                            <span style={{ fontSize: "medium" }}>{message.content}</span><br />
                            <span style={{ fontSize: "mini", color: "grey" }}>{formatDate(new Date(moment(message.dateSent).toDate()))}</span>
                        </p>
                    </Segment>
                </List.Item>
            ))}
        </List>




    );
}


{/* <Segment>
            <Item.Group divided>
                {messages.map(message => (
                    <Item key={message.messageId}>
                        
                        <Item.Content >
                            <Item.Header>
                                PlaceholderUserName
                            </Item.Header>
                            <Item.Description>
                                {message.content}
                            </Item.Description>
                            <Item.Extra>
                                {message.dateSent}
                            </Item.Extra>
                        </Item.Content>

                    </Item>

                ))}

            </Item.Group>
        </Segment> */}