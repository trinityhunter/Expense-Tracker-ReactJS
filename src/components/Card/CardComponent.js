import React from 'react';
import './CardComponent.css';

const CardComponent = ({ record, onDelete }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{record?.description}</h3>
        <p><strong>Amount:</strong> ${record?.amount}</p>
        <p><strong>Category:</strong> {record?.category}</p>
        <p><strong>Payment Method:</strong> {record?.paymentMethod}</p>
      </div>
      <div className="card-actions">
        <button onClick={() => onDelete(record.id)}>Delete</button>
      </div>
    </div>
  );
};

export default CardComponent;
