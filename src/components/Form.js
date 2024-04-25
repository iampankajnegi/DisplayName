import React, { useState } from 'react';
import './form.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`;
    setFullName(newFullName);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Allow special characters and numbers in the input fields
    value = value.replace(/[^a-zA-Z0-9\s]/g, ''); // Remove any character that is not a letter, number, or whitespace

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="form-display">
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required />
          <br />
          <button type="submit">Submit</button>
        </form>
        <div className="full-name-display">Full Name: {fullName}</div>
      </div>
    </div>
  );
};

export default MyForm;
