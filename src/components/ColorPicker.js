// src/components/ColorPicker.js
import React from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ color, onChange }) => {
  return (
    <div>
      <SketchPicker color={color} onChangeComplete={onChange} />
    </div>
  );
};

export default ColorPicker;
