import Footer from "../components/footer";

const MainLayout = ({children}) => {

    return (
        <>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default MainLayout