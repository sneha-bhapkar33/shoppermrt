import ShopProductCard from '../components/ShopProductCard';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';
export default function HomePage({ products}) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    const machedProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(machedProducts);
  }, [searchText, products]);
 
  const onSearchChange = (newText) => {
    setSearchText(newText);
  };

  return <>
  <section>
    <h1>Welcome to ShopperMart!!</h1>
  <p>Every card product from MongoDB.</p>
  <SearchBar searchText={searchText} onSearchChange={onSearchChange} />
  <div className="grid">
    {filteredProducts.map(product => <ShopProductCard key={product._id} product={product} />)}
    </div></section>
    </>
}
