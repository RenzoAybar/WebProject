// src/components/CartDropdown.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cart.css';

// Definimos un tipo para los items del carrito para el ejemplo
export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  thumbnail: string; // URL de la miniatura
}

interface CartDropdownProps {
  cartItems: CartItem[];
  isUserLoggedIn: boolean;
  onClose: () => void; // Función para cerrar el dropdown
}

const CartDropdown: React.FC<CartDropdownProps> = ({ cartItems, isUserLoggedIn, onClose }) => {
  const hasItems = cartItems.length > 0;

  return (
    <div className="cart-dropdown-menu">
      {hasItems ? (
        <>
          <ul className="cart-item-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item-entry">
                <img src={item.thumbnail} alt={item.name} className="cart-item-thumbnail" />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-quantity-price">
                    Cantidad: {item.quantity} - ${item.price.toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <Link to="/checkout" className="btn btn-checkout" onClick={onClose}>
            Checkout
          </Link>
        </>
      ) : (
        <div className="cart-empty-state">
          {/* Icono de carrito vacío - puedes usar un SVG o una imagen */}
          <svg className="cart-empty-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <p>Tu carrito está vacío</p>
          {isUserLoggedIn ? (
            <Link to="/" className="btn btn-explore" onClick={onClose}>
              Explorar artículos
            </Link>
          ) : (
            <div className="cart-empty-actions-stacked">
              <Link to="/login" className="btn btn-login-register" onClick={onClose}>
                Identifícate
              </Link>
              <Link to="/" className="btn btn-explore" onClick={onClose}>
                Explorar artículos
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
