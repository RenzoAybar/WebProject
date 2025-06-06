import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/Navbar";
import { useState } from 'react';
import CartDropdown from '../components/CartDropdown'; // Ajusta la ruta si es necesario
import type { CartItem } from '../components/CartDropdown';
import '../styles/cart.css'; // Asegúrate de que los estilos globales del carrito se importen aquí o en App.tsx

export const RootLayout = () => {
    const [cartItems] = useState<CartItem[]>([]); // Real cart items will come from app logic (currently read-only here)
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const closeCart = () => setIsCartOpen(false);


    // TODO: Implement actual user login state management
    // For now, isUserLoggedIn will remain false unless set by other means.

    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <Navbar cartItemCount={totalItemsInCart} onCartClick={toggleCart} />
            {isCartOpen && (
                <div style={{ position: 'relative', zIndex: 1001 }}> {/* Contenedor para el dropdown */}
                    <CartDropdown 
                        cartItems={cartItems} 
                        isUserLoggedIn={false} 
                        onClose={closeCart} 
                    />
                </div>
            )}
            <main>
                <Outlet />
            </main>
        </>
    );
};