import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tienda Online</h3>
            <p className="text-gray-400 mb-4">
              Tu tienda de confianza para las mejores ofertas y productos de calidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Productos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ofertas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nuevos Lanzamientos</a></li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const event = new CustomEvent('showSobreNosotros', { bubbles: true });
                    document.dispatchEvent(event);
                  }}
                >
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicio al Cliente</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mi Cuenta</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rastrear Pedido</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Devoluciones y Reembolsos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li>
                <Link 
                  to="/terminos-y-condiciones"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-gray-400" />
                <span className="text-gray-400">123 Calle Principal, Ciudad, País</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">+1 234 567 890</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-gray-400" />
                <a href="mailto:info@tiendaonline.com" className="text-gray-400 hover:text-white transition-colors">info@tiendaonline.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} Tienda Online. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};


