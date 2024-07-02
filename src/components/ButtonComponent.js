import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";

const ButtonComponent = ({ title, link }) => {
  return (
    <BootstrapButton variant="light" className="my-2 w-100" size="lg">
      <a href={link} target="_blank" style={{textDecoration:"none", color:"black"}}>{title}</a>
    </BootstrapButton>
  );
};

export default ButtonComponent;
