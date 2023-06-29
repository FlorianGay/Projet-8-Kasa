import Banner from "../../components/banner";
import Collapse from '../../components/collapse';
import collapseList from '../../datas/propos.json'
import bannerImg from '../../assets/banner_2.png'

function Propos() {
    return (
        <div>
            <Banner bannerImg={bannerImg}/>
            <div className={'collapse-group'}>
                {
                    collapseList.map((list, index) =>
                        <Collapse
                            key={index}
                            title={list.title}
                            description={list.description}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Propos;