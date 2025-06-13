import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../CartInteraction/RootLayout";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { CheckoutPage } from '../pages/CheckoutPage'; // Importar CheckoutPage
import { PantalonesPage } from '../pages/PantalonesPage';
import { VestidosPage } from '../pages/VestidosPage';
import { PolosPage } from '../pages/PolosPage';
import { ZapatillasPage } from '../pages/ZapatillasPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
            {
                path: 'checkout', // Nueva ruta
                element: <CheckoutPage />,
            },
            {
                path: '/pantalones',
                element: <PantalonesPage />
            },
            {
                path: '/vestidos',
                element: <VestidosPage />
            },
            {
                path: '/polos',
                element: <PolosPage />
            },
            {
                path: '/zapatillas',
                element: <ZapatillasPage />
            },

        ]
    },
],
);
export default router;
