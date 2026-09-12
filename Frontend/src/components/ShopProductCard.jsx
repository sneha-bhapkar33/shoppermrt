import { Link } from 'react-router-dom';

export default function ShopProductCard({ product }) {
  return <article className="card">
    {product.thumbnail && <img src={product.thumbnail} alt={product.title} />}
    <small>{product.category} · ★ {product.rating}</small>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <strong>₹{product.price}</strong>
    <Link className="button" to={`/products/${product._id}`}>View product</Link>
  </article>;
}
