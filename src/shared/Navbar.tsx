import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
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
                <a href="./login" className='text-gray-700'>Inicia sesión</a>
                <a href="./register" className='text-gray-700'>Registro </a>
                <img src="/shop.svg" alt="Carrito" className='h-10 w-10' />
            </nav>
        </header>
    )
}