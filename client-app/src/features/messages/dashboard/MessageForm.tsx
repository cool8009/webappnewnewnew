import React from "react";
import { Button, Form } from "semantic-ui-react";

class MessageForm extends React.Component {
	state = {input: ""};

	onInputChange = (event: any) => {
		this.setState({ input: event.target.value });
	}

	// onFormSubmit = () => {
	// 	let input = this.state.input.trim();
	// 	if(!input) return;
	// 	this.props.onSubmit(input);
	// 	this.setState({ input: "" });
	// }

	render() {
        return (
            // className={ this.props.className } onSubmit={ this.onFormSubmit }
            <Form  style={{ margin:"0 0 1em 0" }}>
				<Form.Group inline style={{ flexWrap:"nowrap", margin:0 }}>
					<Form.Input width={16}  placeholder='placeholder' value={ this.state.input } onChange={ this.onInputChange } />
					<Button primary>Send</Button>
				</Form.Group>
			</Form>
		);
	}
}

export default MessageForm;