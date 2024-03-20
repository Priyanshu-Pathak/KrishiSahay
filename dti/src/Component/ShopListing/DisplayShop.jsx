
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShopFlashcard from './ShopFlashCard';

function DisplayShop() {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const response = await axios.get('http://localhost:3002/shoplisting');
                setShops(response.data);
            } catch (error) {
                console.error('Error fetching shops:', error);
            }
        };

        fetchShops();
    }, []);

    return (
        <div className="grid grid-cols-4 mt-3">
            {shops.map(shop => (
                <ShopFlashcard key={shop._id} shop={shop}  />
            ))}
        </div>
    );
}

export default DisplayShop;