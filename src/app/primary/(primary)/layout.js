import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';



function Layout({ children }) {
    return (
        <>

            <Navbar />
            {children}
            <Footer />

        </>
    )
}

export default Layout