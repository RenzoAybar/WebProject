// src/components/CartIcon.tsx
import React from 'react';
import '../styles/cart.css'; // We'll create this file next

interface CartIconProps {
  itemCount: number;
  onClick: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ itemCount, onClick }) => {
  return (
    <div 
      className="cart-icon-container group" 
      onClick={onClick} 
      style={{ cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center' }}
    >
      {/* Puedes reemplazar esto con un SVG real o un componente de icono */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="group-hover:opacity-80 transition-opacity dark:text-gray-900"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      {itemCount > 0 && (
        <span className="cart-item-count-badge">
          {itemCount}
        </span>
      )}
      <span className="ml-2 dark:text-gray-900">Carrito</span>
    </div>
  );
};

export default CartIcon;
