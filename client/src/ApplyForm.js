import React, { useState } from 'react';
import './styles.css'; 


const ApplyForm = ({ course }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contact: '',
    paymentPlan: 'installments',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert(`Application Submitted for ${course}!`);
    // Reset form
    setFormData({ username: '', email: '', contact: '', paymentPlan: 'installments' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Apply for {course}</h3>
      <label>
        Name:
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Contact:
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
      </label>
      <label>
        Payment Plan:
        <select name="paymentPlan" value={formData.paymentPlan} onChange={handleChange}>
          <option value="installments">Installments</option>
          <option value="lump-sum">Lump Sum</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ApplyForm;
