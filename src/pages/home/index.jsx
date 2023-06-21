import Header from '../../components/header'
import Banner from '../../assets/banner_1.png'

function Home () {
    return (
        <div>
            <Header />
            <main>
                <div className="banner">
                    <img src={Banner} alt='fond de la bannière' />
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </main>
        </div>
    )
}

export default Home