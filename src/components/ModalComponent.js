import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";

function ModalComponent({ addLink }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setShow(false);
    setError("");
  };
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || link === "") {
      setError("Both fields are required.");
      return;
    }
    addLink(title, link);
    setTitle("");
    setLink("");
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create your own Link
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create your own link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write title"
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Add link</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" className="ms-2">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
