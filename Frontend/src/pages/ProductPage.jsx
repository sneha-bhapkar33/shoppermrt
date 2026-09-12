import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api } from '../services/api';
export default function ProductPage({ products, user, token }) {
  const { id } = useParams(); const product = products.find(item => item._id === id);
  const [address, setAddress] = useState({ fullName: '', addressLine: '', city: '', pincode: '' }); const [message, setMessage] = useState(''); const navigate = useNavigate();
  if (!product) return <p>Product not found.</p>;
  async function placeOrder(event) { event.preventDefault(); 
    if (!user) return navigate('/'); 
    try { await api('/orders', { method: 'POST', 
      body: JSON.stringify({ product: id, shippingAddress: address }) }, token); 
      setMessage('Order placed! This classroom demo does not collect payment.'); } 
      catch (err) { setMessage(err.message); } }
  return <section>
    <Link to="/">← Products</Link>{
    product.images?.[0] && <img className="detail-image" src={product.images[0]} alt={product.title}/>}
    <h1>{product.title}</h1><p>{product.description}</p>
    <p>Brand: {product.brand} · SKU: {product.sku} · ★ {product.rating}</p><
      p>{product.warrantyInformation} · {product.shippingInformation}</p>
      <h2>₹{product.price}</h2><h2>Reviews</h2>{product.reviews?.slice(0, 3).map((review, index) => <blockquote key={index}>★ {review.rating}: {review.comment}<footer>— {review.reviewerName}</footer></blockquote>)}
      <form className="form" onSubmit={placeOrder}>
        <h2>Delivery address</h2>
        {Object.entries(address).map(([field, value]) => 
        <input key={field} required placeholder={field === 'addressLine' ? 'Address' : field === 'fullName' ? 
          'Full name' : field[0].toUpperCase() + field.slice(1)} 
        value={value} onChange={e => setAddress({ ...address, [field]: e.target.value })}/>)}
        <button>Place order</button>
        {message && <p>{message}</p>}
        </form>
        </section>
}
