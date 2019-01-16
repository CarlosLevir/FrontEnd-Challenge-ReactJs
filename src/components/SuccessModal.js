import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class SuccessModal extends Component {
  render() {
    const { show, message, handleHide } = this.props;
    return (
      <div>
        <div className="modal-container" style={{ height: 200 }}>
          <Modal
            show={show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">Parabéns!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
              <Button onClick={handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}
