import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import ModalComponent from "../../components/ModalComponent";
import ColorPicker from "../../components/ColorPicker";

const Home = () => {
  const [userData, setUserData] = useState({
    picture: "",
    name: "",
    profession: "",
    social: {
      twitterURL: "",
      facebookURL: "",
      instagramURL: "",
      discordURL: "",
    },
    links: [],
    buttonColor: "#000000",
    iconColor: "#ffffff",
    backgroundColor: "#ffffff",
    backgroundImage: "",
  });

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showInputs, setShowInputs] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
    setShowInputs(false);
  };

  const toggleInputs = () => {
    setShowInputs(!showInputs);
    setShowColorPicker(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in userData.social) {
      setUserData((prevState) => ({
        ...prevState,
        social: { ...prevState.social, [name]: value },
      }));
    } else {
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userData.picture ||
      !userData.name ||
      !userData.profession ||
      Object.values(userData.social).some((url) => !url)
    ) {
      setError("All fields are required.");
      return;
    }
    setError("");
    dispatch(setUser(userData));
    navigate("/user");
  };

  const addLink = (title, link) => {
    setUserData((prevState) => ({
      ...prevState,
      links: [...prevState.links, { title, link }],
    }));
  };

  const handleButtonColorChange = (color) => {
    setUserData((prevState) => ({
      ...prevState,
      buttonColor: color.hex,
    }));
  };

  const handleIconColorChange = (color) => {
    setUserData((prevState) => ({
      ...prevState,
      iconColor: color.hex,
    }));
  };

  const handleBackgroundColorChange = (color) => {
    setUserData((prevState) => ({
      ...prevState,
      backgroundColor: color.hex,
    }));
  };

  const handleBackgroundImageChange = (e) => {
    const imageUrl = e.target.value;
    setUserData((prevState) => ({
      ...prevState,
      backgroundImage: imageUrl,
    }));
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Enter User Information</h1>
          <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group controlId="formPicture" style={{ paddingTop: "2rem" }}>
              <Form.Label>Picture URL</Form.Label>
              <Form.Control
                type="text"
                name="picture"
                value={userData.picture}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formProfession">
              <Form.Label>Profession</Form.Label>
              <Form.Control
                type="text"
                name="profession"
                value={userData.profession}
                onChange={handleChange}
              />
            </Form.Group>
            {Object.keys(userData.social).map((key) => (
              <Form.Group controlId={`form${key}`} key={key}>
                <Form.Label>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Form.Label>
                <Form.Control
                  type="text"
                  name={key}
                  value={userData.social[key]}
                  onChange={handleChange}
                />
              </Form.Group>
            ))}
            <div style={{marginTop:"3rem", marginBottom:"3rem"}}>
              <Button
                onClick={toggleColorPicker}
                variant="primary"
                className="me-2"
                style={{marginBottom:"1rem"}}
              >
                Background Color Button
              </Button>
              <Button
                onClick={toggleInputs}
                variant="secondary"
                className="me-2"
                style={{marginBottom:"1rem"}}
              >
                Background Image Button
              </Button>

              {showColorPicker && (
                <Form.Group controlId="formBackgroundColor">
                  <Form.Label>Background Color</Form.Label>
                  <ColorPicker
                    color={userData.backgroundColor}
                    onChange={handleBackgroundColorChange}
                  />
                </Form.Group>
              )}

              {showInputs && (
                <Form.Group controlId="formBackgroundImage">
                  <Form.Label>Background Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="backgroundImage"
                    value={userData.backgroundImage}
                    onChange={handleBackgroundImageChange}
                  />
                </Form.Group>
              )}
            </div>
            <Row>
              <Col>
                <Form.Group controlId="formButtonColor">
                  <Form.Label>Buttons Color</Form.Label>
                  <ColorPicker
                    color={userData.buttonColor}
                    onChange={handleButtonColorChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formIconColor">
                  <Form.Label>Icons Color</Form.Label>
                  <ColorPicker
                    color={userData.iconColor}
                    onChange={handleIconColorChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button
              variant="primary"
              type="submit"
              style={{ margin: "1.2rem 0" }}
            >
              Save
            </Button>
          </Form>
          <ModalComponent addLink={addLink} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
