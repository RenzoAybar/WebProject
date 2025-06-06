import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import { MenuDropdown } from '../components/MenuDropdown';
import { useEffect, useState } from 'react';

const BannerMensaje = () => {
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
        <div className="bg-black text-white py-2 overflow-hidden">
            <div className="relative h-6">
                <div 
                    className={`absolute w-full text-center transition-transform duration-500 ${
                        isTransitioning ? '-translate-x-full' : 'translate-x-0'
                    }`}
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

export const Navbar = () => {
    return (
        <>
        <BannerMensaje />
        <header className='flex justify-between items-center bg-amber-100 px-4 py-2'>
            {/* Logo */}
            <Link to="/">
                <img src="/logo2.svg" alt="logo" className='h-[60px]' />
            </Link>
            {/* Barra de búsqueda */}
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
                />
                <button className='px-4'>
                    <img src="/search.svg" alt="Buscar" className='h-5 w-5' />
                </button>
            </div>
            {/* Navegación */}
            <nav className='flex items-center gap-6'>
                <ThemeToggle />
                <a href="./login" className='text-gray-700'>Inicia sesión</a>
                <a href="./register" className='text-gray-700'>Registro </a>
                <img src="/shop.svg" alt="Carrito" className='h-10 w-10' />
                <MenuDropdown />
            </nav>
        </header>
        </>
    )
}
