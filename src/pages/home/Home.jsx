import { userData } from '../../dummyData'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.scss'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

function Home() {
  
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} grid dataKey="Active User" title="User Analytics"/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
