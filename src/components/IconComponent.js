import React from "react";

const IconComponent = ({ url, iconName }) => {
  if (!url) return null;

  const formattedUrl = url.startsWith("http") ? url : `https://${url}`;

  return (
    <a href={formattedUrl} target="_blank" rel="noopener noreferrer">
      <i className={`bi bi-${iconName} mx-2`}></i>
    </a>
  );
};

export default IconComponent;
