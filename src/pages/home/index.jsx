import Card from '../../components/card'
import Banner from '../../components/banner'
import '../../styles/pages/_home.scss'
import bannerImg from '../../assets/banner_1.png'

function Home () {
    return (
        <div>
            <Banner bannerImg = {bannerImg}/>
            <Card />
        </div>
    )
}

export default Home