import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/Navbar";
import { useState } from 'react';
import CartDropdown from '../components/CartDropdown';
import type { CartItem } from '../components/CartDropdown';
import '../styles/cart.css';

export const RootLayout = () => {
    const [cartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); 

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const closeCart = () => setIsCartOpen(false);

    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <Navbar 
                cartItemCount={totalItemsInCart} 
                onCartClick={toggleCart}
                onSearch={setSearchTerm} 
            />
            {isCartOpen && (
                <div style={{ position: 'relative', zIndex: 1001 }}>
                    <CartDropdown 
                        cartItems={cartItems} 
                        isUserLoggedIn={false} 
                        onClose={closeCart} 
                    />
                </div>
            )}
            <main>
                <Outlet context={{ searchTerm }} /> {}
            </main>
        </>
    );
};
