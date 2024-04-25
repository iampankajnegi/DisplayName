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
    const { name, value } = e.target;
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
        Full Name: {fullName} {/* Moved the full name display outside the form */}
      </div>
    </div>
  );
};

export default MyForm;
