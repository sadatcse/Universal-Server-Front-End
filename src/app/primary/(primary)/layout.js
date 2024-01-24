import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import AuthProvider from '@/providers/AuthProvider';
import { Toaster } from "react-hot-toast";

import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  
  const queryClient = new QueryClient();

function Layout({ children }) {
    return (
        <>
        <AuthProvider>
            <Navbar />
            <Toaster position="top-center" />
                {children}
            <Footer /></AuthProvider>
        </>
    )
}

export default Layout