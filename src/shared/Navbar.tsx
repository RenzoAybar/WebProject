import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import { MenuDropdown } from '../components/MenuDropdown';
import CartIcon from '../components/CartIcon';
import { ModalHistoria } from '../components/ModalHistoria';

const BannerCarrusel = () => {
    const mensajes = [
        '👕 LJ TENDENCIA MASCULINA',
        '💰 TENDENCIAS MASCULINAS AL MEJOR PRECIO',
        '👔 EL ESTILO QUE BUSCAS',
        '🛍️ AQUÍ LO ENCUENTRAS',
        '✅ COMPRAS ONLINE 100% CONFIABLES'
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % mensajes.length);
                setIsTransitioning(false);
            }, 500);
            
        }, 3000);
        
        return () => clearInterval(timer);
    }, [mensajes.length]);
    
    const nextIndex = (currentIndex + 1) % mensajes.length;
    
    return (
        <div className="bg-black text-white py-2 overflow-hidden w-full">
            <div className="relative h-6">
                <div 
                    className="absolute w-full text-center"
                    style={{
                        left: '50%',
                        transform: isTransitioning ? 'translateX(-150%)' : 'translateX(-50%)',
                        transition: 'transform 500ms ease-in-out'
                    }}
                >
                    {mensajes[currentIndex]}
                </div>
                <div 
                    className="absolute w-full text-center"
                    style={{
                        left: '50%',
                        transform: isTransitioning ? 'translateX(-50%)' : 'translateX(50%)',
                        opacity: isTransitioning ? 1 : 0,
                        transition: 'all 500ms ease-in-out'
                    }}
                >
                    {mensajes[nextIndex]}
                </div>
            </div>
        </div>
    );
};

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
  onSearch: (term: string) => void; 
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onCartClick, onSearch }) => {
    const [showHistoria, setShowHistoria] = useState(false);
    const [inputValue, setInputValue] = useState(""); 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onSearch(e.target.value); 
    };

    return (
        <>
        <BannerCarrusel />
        <header className='flex justify-between items-center bg-amber-100 px-4 py-2'>
            {}
            <Link to="/">
                <img src="/logo2.svg" alt="logo" className='h-[60px]' />
            </Link>
            {}
            <a
                href="#"
                className="text-gray-700 mx-4 whitespace-nowrap"
                onClick={e => { e.preventDefault(); setShowHistoria(true); }}
            >
                Historia de Progresemos Juntos
            </a>
            {}
            <div className='flex items-center border-2 rounded-3xl overflow-hidden'>
                <input
                    type="text"
                    placeholder='Buscar en la tienda'
                    aria-label='Buscar en la tienda'
                    name='search'
                    id='search'
                    spellCheck='false'
                    maxLength={50}
                    minLength={3}
                    required
                    pattern='[a-zA-Z0-9 ]*'
                    title='Buscar en la tienda'
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = 'Buscar en la tienda'}
                    className='w-200 h-10 px-4 outline-none'
                    value={inputValue}
                    onChange={handleInputChange} 
                />
                <button className='px-4'>
                    <img src="/search.svg" alt="Buscar" className='h-5 w-5' />
                </button>
            </div>
            {}
            <nav className='flex items-center gap-6'>
                <ThemeToggle />
                <a href="./login" className='text-gray-700'>Inicia sesión</a>
                <a href="./register" className='text-gray-700'>Registro </a>
                <CartIcon itemCount={cartItemCount} onClick={onCartClick} />
                <MenuDropdown />
            </nav>
        </header>
        <ModalHistoria isOpen={showHistoria} onClose={() => setShowHistoria(false)} />
        </>
    )
}
