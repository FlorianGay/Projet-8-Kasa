import Banner from "../../components/banner";
import Collapse from '../../components/collapse';
import collapseList from '../../datas/propos.json'
import bannerImg from '../../assets/banner_2.png'
import '../../styles/pages/_propos.scss'

function Propos () {
    return (
        <div>
            <Banner bannerImg = {bannerImg}/>
            {
                collapseList.map((list) => 
                    <Collapse 
                        title = {list.title}
                        description = {list.description}
                    />
                )
            }
            
        </div>
    )
}
export default Propos;