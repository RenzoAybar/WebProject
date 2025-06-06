import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../shared/Navbar";

export const RootLayout = () => {
    const [cartItemCount, setCartItemCount] = useState(0);

    const handleCartClick = () => {
        // Aquí puedes agregar la lógica para abrir el carrito
        console.log("Carrito clickeado");
    };

    return (
        <>
            <Navbar 
                cartItemCount={cartItemCount} 
                onCartClick={handleCartClick} 
            />
            <main>
                <Outlet context={{ cartItemCount, setCartItemCount }} />
            </main>
        </>
    );
};