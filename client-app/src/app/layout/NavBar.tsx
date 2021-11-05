import React from "react";
import { Container, Menu, Button, MenuItem } from "semantic-ui-react";

export default function NavBar() {

    return (
        <Menu inverted fixed='top'>
            <Container>
                <MenuItem header>
                    Chattr
                </MenuItem>
                <MenuItem name='Messaging' />

                <MenuItem>
                    <Button positive content='New Message' />
                </MenuItem>
            </Container>
            



        </Menu>

    );

}