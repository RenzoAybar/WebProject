import { useState, useEffect } from "react";
import { Navbar } from "../shared/Navbar";
import { ModalHistoria } from "../components/ModalHistoria";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
    const [showHistoria, setShowHistoria] = useState(false);

    useEffect(() => {
        const onShowHistoria = () => setShowHistoria(true);
        
        document.addEventListener('showSobreNosotros', onShowHistoria);
        
        return () => {
            document.removeEventListener('showSobreNosotros', onShowHistoria);
        };
    }, []);

    const handleCartClick = () => {
        // Aquí puedes agregar la lógica para abrir el carrito
        console.log("Carrito clickeado");
    };

    return (
        <>
            <Navbar 
                cartItemCount={0} 
                onCartClick={handleCartClick} 
            />
            <ModalHistoria isOpen={showHistoria} onClose={() => setShowHistoria(false)} />
            <main>
                {children}
            </main>
        </>
    );
};