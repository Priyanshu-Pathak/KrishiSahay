import React from 'react';


const glassEffect = {
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(0,0,0)',
};

const ShopFlashCard = ({ shop }) => {
    return (
        <div className="flex flex-col items-center justify-start border rounded-lg p-4 ml-4" style={glassEffect}>
            <img src={`http://localhost:3002/Images/${shop.image}`} alt={shop.shopname} className="w-64 h-40 object-cover rounded-lg" />
            <h2 className="text-lg font-semibold mt-2">{shop.shopname}</h2>
            <p className="text-sm text-gray-600 mt-1">{shop.address}</p>
            <p className="text-sm text-gray-600 mt-1">{shop.phonenumber}</p>
        </div>
    );
};

export default ShopFlashCard;