import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/Navbar";

export const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
};