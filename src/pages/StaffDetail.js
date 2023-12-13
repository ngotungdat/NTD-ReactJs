// DetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detail Page</h1>
      <p>Chi tiết của mục có ID: {id}</p>
    </div>
  );
};

export default DetailPage;
