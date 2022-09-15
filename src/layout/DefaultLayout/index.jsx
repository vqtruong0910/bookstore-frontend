import Footer from "../../components/Footer";
import Header from "../../components/Header";

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;