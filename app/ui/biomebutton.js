"use client"

import React, { useState } from 'react';

const BiomeButton = ({imageSrc, altText}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

    return(
        <div className={`relative inline-block border mr-4 ml-4 rounded cursor-pointer transition-shadow duration-300`} 
        onClick={handleClick}>
            <img src={imageSrc} alt={altText} className="w-32 h-32 object-cover rounded" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border border-gray-300 rounded bg-white">
                {isSelected && <div className="w-full h-full bg-black rounded"></div>}
            </div>
        </div>
    );
}

export default BiomeButton;