import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <NavLink className="logo" to="/">ShopperMart</NavLink>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>Products</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
