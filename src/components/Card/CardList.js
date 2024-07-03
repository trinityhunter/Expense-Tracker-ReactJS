import React, { useEffect, useState } from 'react';
import CardComponent from './CardComponent';
import './CardList.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const CardsList = () => {
  const [records, setRecords] = useState();

  var User = useSelector((state) => state.currentUserReducer);

  useEffect(() => {
    axios.get('https://expense-tracker-springboot-production.up.railway.app/track/')
    .then(function (response) {
      // handle success
      setRecords(response.data.filter(expense => expense.userEmail === User.user.email))
      // console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }, [setRecords]);

  const handleDelete = async (id) => {
    try {
      axios.delete(`https://expense-tracker-springboot-production.up.railway.app/track/${id}`)
      
      setRecords(records.filter(record => record.id !== id));
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <div className="card-list">
      {records!=null ?
        records.map(record => (
        <CardComponent
          key={record.id}
          record={record}
          onDelete={handleDelete}
        />
      ))
      :
      "Loading..."
    }
    </div>
  );
};

export default CardsList;
