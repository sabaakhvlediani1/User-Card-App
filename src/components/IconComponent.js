import React from "react";

const IconComponent = ({ url, iconName, color }) => {
  if (!url) return null;

  const formattedUrl = url.startsWith("http") ? url : `https://${url}`;

  return (
    <a href={formattedUrl} target="_blank" rel="noopener noreferrer">
      <i className={`bi bi-${iconName} mx-2`} style={{ color }}></i>
    </a>
  );
};

export default IconComponent;
