import React from 'react';
import Form from '../components/Form';

const Home = ({ onSave }) => {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-semibold mb-4">Welcome to the Home Page</h1>
      <Form onSave={onSave} />
    </div>
  );
};

export default Home;
