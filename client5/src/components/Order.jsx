// src/pages/OrderPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Order= () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const response = await getOrderDetails(orderId);
      setOrder(response.data);
    };
    fetchOrderDetails();
  }, [orderId]);

  return (
    <div className="order-page">
      <h2>Order Details</h2>
      {order ? (
        <div>
          <p>Order ID: {order._id}</p>
          <p>Status: {order.status}</p>
          {/* Add more order details as necessary */}
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default Order;
