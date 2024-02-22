import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SideBar from './SideBar';
import { API_VARIABLE } from '../util';

const FirmProducts = () => {
  const { vendorId } = useParams();
  const [vendorDetails, setVendorDetails] = useState(null);

  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const response = await fetch(`${API_VARIABLE}/vendor/details/${vendorId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch vendor details');
        }

        const data = await response.json();
        setVendorDetails(data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchVendorDetails();
  }, [vendorId]);

  if (!vendorDetails) {
    return <div>Loading...</div>;
  }

  return (
  <>
    <div className="firm-products-container">
      <h2>Product Details</h2>

      <ul>
        {vendorDetails.firms.map((firm) => (
          <li key={firm._id}>
            <Link to={`/all-firms/${vendorId}/${firm._id}`}>{firm.name}</Link>
          </li>
        ))}
      </ul>

      <h3>Products</h3>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Image</th>
            <th>Serves</th>
            <th>Quantity</th>
            <th>Timing</th>
            <th>Offers</th>
          </tr>
        </thead>
        <tbody>
          {vendorDetails.products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.discount}</td>
              <td><img src={`${API_VARIABLE}/uploads/${product.image}`} alt={product.name} className="product-image" /></td>
              <td>{product.serves}</td>
              <td>{product.quantity}</td>
              <td>{product.timing}</td>
              <td>{product.offers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  );
};

export default FirmProducts;
