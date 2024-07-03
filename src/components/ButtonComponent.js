import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";

const ButtonComponent = ({ title, link, color }) => {
  return (
    <BootstrapButton variant="light" className="my-2 w-100" size="lg" style={{backgroundColor: color}}>
      <a href={link} target="_blank" style={{textDecoration:"none", color:"black"}}>{title}</a>
    </BootstrapButton>
  );
};

export default ButtonComponent;
