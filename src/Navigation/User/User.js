import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import backgroundImage from "../../images/background.avif";
import ButtonComponent from "../../components/ButtonComponent";
import IconComponent from "../../components/IconComponent";

const User = () => {
  const user = useSelector((state) => state.user) || {
    links: [],
    social: {},
    buttonColor: "#000000",
    iconColor: "#ffffff",
    backgroundColor: "#ffffff", // Default background color
    backgroundImage: "",        // Default background image URL
  };

  // Check if user has chosen background color or image
  const hasBackgroundColor = user.backgroundColor !== "#ffffff"; // Adjust default color as needed
  const hasBackgroundImage = !!user.backgroundImage; // Check if there is a background image URL

  return (
    <>
      <div
        className="background-section"
        style={{
          backgroundImage: hasBackgroundImage ? `url(${user.backgroundImage})` : null,
          backgroundColor: hasBackgroundColor ? user.backgroundColor : null,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "100vh",
          }}
        >
          <Row className="text-center">
            <Col>
              <Image
                src={user.picture}
                roundedCircle
                className="profile-image mb-3"
              />
              <div className="text-center">
                <div className="d-inline-flex align-items-center">
                  <h2
                    className="mb-0 text-white"
                    style={{ textTransform: "capitalize" }}
                  >
                    {user.name}
                  </h2>
                  <Image src="verify.png" className="verify-icon ms-2" />
                </div>
              </div>
              <h4
                className="mb-4 text-white"
                style={{ textTransform: "capitalize" }}
              >
                {user.profession}
              </h4>
              {user.links.map((link, index) => (
                <ButtonComponent
                  key={index}
                  title={link.title}
                  link={link.link}
                  color={user.buttonColor}
                />
              ))}
              <div className="social-icons mt-4">
                <IconComponent
                  url={user.social.instagramURL}
                  iconName="instagram"
                  color={user.iconColor}
                />
                <IconComponent
                  url={user.social.facebookURL}
                  iconName="facebook"
                  color={user.iconColor}
                />
                <IconComponent
                  url={user.social.twitterURL}
                  iconName="twitter"
                  color={user.iconColor}
                />
                <IconComponent
                  url={user.social.discordURL}
                  iconName="controller"
                  color={user.iconColor}
                />
              </div>
              <hr className="white-line" />
              <p className="mt-2 text-white">@alexisharper</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default User;
