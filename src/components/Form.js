import React, { useState } from 'react';
import './form.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  const [fullName, setFullName] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setFormError('Please fill in both first name and last name.');
    } else {
      const newFullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`;
      setFullName(newFullName);
      setFormError('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="form-display">
        <h1>Full Name Display</h1>
        {formError && <div className="error-message">{formError}</div>}
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
