import React from "react";
import "../../Styling/Components/Modals.css";
import download from "../../Assets/Icons/download.png"
import share from "../../Assets/Icons/share.png"
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Modals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Modals
      </Button> <br></br>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="title">
              <p>Design Tasks | One by Meja Putih</p>
              <button className="btn-download">
                <img src={download} />
              </button>
              <button className="btn-share">
                <img src={share} />
              </button>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="input-title" placeholder="Card Title" ></input>
          <p className="description-title">Description</p>
          <input className="input-description"></input>
          <Button variant="light" className="btn-description">Cancel</Button>
          <Button variant="light" className="btn-description">Save</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;