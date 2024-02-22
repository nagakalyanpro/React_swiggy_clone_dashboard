import React, { useState } from 'react';
import { API_VARIABLE } from '../util';

const FirmReg = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    business_type: '',
    category: '',
    serves: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('User not authenticated');
        return;
      }

      const response = await fetch(`${API_VARIABLE}/firm/add-firm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': `${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add firm');
      }

      const data = await response.json();
      console.log('Response:', data);

      alert('Firm added successfully');
      setFormData({
        name: '',
        address: '',
        business_type: '',
        category: '',
        serves: '',
      });

    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="add-firm-container">
      <h2>Fill Firm Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder='ex: Paradise Hotel'
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder='ex: Madhapur'
            required
          />
        </label>
        <label>
          Business Type:
          <input
            type="text"
            name="business_type"
            value={formData.business_type}
            onChange={handleInputChange}
            placeholder='ex: Family Restaurant'
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder='ex: veg, non-veg'
            required
          />
        </label>
        <label>
          Serves:
          <input
            type="text"
            name="serves"
            value={formData.serves}
            onChange={handleInputChange}
            placeholder='ex: break-fast, lunch, snacks, dinner'
            required
          />
        </label>
        <button type="submit">Add Firm</button>
      </form>
    </div>
  );
};

export default FirmReg;
