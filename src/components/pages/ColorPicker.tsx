import React, { useState } from 'react';

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState('#000000');

    const handleColorChange = (event: any) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <input
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
            />
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: selectedColor,
                }}
            />
        </div>
    );
};

export default ColorPicker;