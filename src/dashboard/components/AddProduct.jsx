import React, { useState } from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discount: '',
    serves: '',
    quantity: '',
    timing: '',
    offers: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
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

      const formDataForUpload = new FormData();
      formDataForUpload.append('name', formData.name);
      formDataForUpload.append('description', formData.description);
      formDataForUpload.append('price', formData.price);
      formDataForUpload.append('discount', formData.discount);
      formDataForUpload.append('serves', formData.serves);
      formDataForUpload.append('quantity', formData.quantity);
      formDataForUpload.append('timing', formData.timing);
      formDataForUpload.append('offers', formData.offers);
      formDataForUpload.append('image', formData.image);

      const response = await fetch('http://localhost:4000/product/add-product', {
        method: 'POST',
        headers: {
          'token': `${token}`,
        },
        body: formDataForUpload,
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      const data = await response.json();
      console.log('Response:', data);

      alert('Product added successfully');
      setFormData({
        name: '',
        description: '',
        price: '',
        discount: '',
        serves: '',
        quantity: '',
        timing: '',
        offers: '',
        image: null,
      });

    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="add-product-container">
      <h4>Add Product</h4>
      <form onSubmit={handleSubmit}>
    <div className="input-pair">
    <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
     
    </div>
    {/* <label>
          Description:
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </label> */}
        <label className="textarea-label">
    Description:
    <textarea
        className="large-textarea"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        required
    />
</label>

      <div className="input-pair">
      <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Discount:
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
     <div className="input-pair">
     <label>
          Serves:
          <input
            type="text"
            name="serves"
            value={formData.serves}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
        </label>
     </div>
   <div className="input-pair">
   <label>
          Timing:
          <input
            type="text"
            name="timing"
            value={formData.timing}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Offers:
          <input
            type="text"
            name="offers"
            value={formData.offers}
            onChange={handleInputChange}
            required
          />
        </label>
   </div>
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
            required
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
