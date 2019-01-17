import React, { Component } from 'react';
import {
  FormGroup, ControlLabel, FormControl, Button
} from 'react-bootstrap';
import SuccessModal from './SuccessModal';

const styles = {
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  inputDiv: {
    margin: 5
  },
  message: {
    maxWidth: '80%'
  }
};

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  validateForm = () => true;

  handleSubmit = (e) => {
    e.preventDefault();
    const response = this.validateForm();

    if (response === true) {
      this.setState({
        show: true
      });
      e.target.reset();
    }
  };

  handleHide = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formBasicText">
            <div style={styles.content}>
              <div style={styles.inputDiv}>
                <ControlLabel>Type your name</ControlLabel>
                <FormControl style={styles.field} type="text" placeholder="Your name..." required />
              </div>
              <div style={styles.inputDiv}>
                <ControlLabel>Type your email</ControlLabel>
                <FormControl
                  style={styles.field}
                  type="email"
                  placeholder="Your email..."
                  required
                />
              </div>
              <div style={styles.inputDiv}>
                <ControlLabel>Type your state</ControlLabel>
                <FormControl
                  style={styles.field}
                  type="text"
                  placeholder="Your state..."
                  required
                />
              </div>
              <div style={styles.inputDiv}>
                <ControlLabel>Type your city</ControlLabel>
                <FormControl style={styles.field} type="text" placeholder="Your city..." required />
              </div>
            </div>
            <div style={styles.content}>
              <div style={styles.message}>
                <ControlLabel>Type your message</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Your Message..." cols="110" rows="10" required />
              </div>
            </div>
            <div style={styles.content}>
              <Button style={styles.inputDiv} type="submit">
                Submit
              </Button>
            </div>
          </FormGroup>
        </form>
        {show === true && (
          <SuccessModal
            message="Seu email foi enviado com sucesso ;)"
            show={show}
            handleHide={this.handleHide}
          />
        )}
      </div>
    );
  }
}

export default ContactForm;
