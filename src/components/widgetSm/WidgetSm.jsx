import { Visibility } from '@mui/icons-material'
import './widgetSm.scss'

function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <img src="/assets/images/person2.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Salar Sadeghi</span>
                <span className="widgetSmUserTitle">Software Engineering</span>
            </div>
            <button className="widgetSmBtn">
                <Visibility className='widgetSmIcon'/>
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="/assets/images/person2.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Salar Sadeghi</span>
                <span className="widgetSmUserTitle">Software Engineering</span>
            </div>
            <button className="widgetSmBtn">
                <Visibility className='widgetSmIcon'/>
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="/assets/images/person2.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Salar Sadeghi</span>
                <span className="widgetSmUserTitle">Software Engineering</span>
            </div>
            <button className="widgetSmBtn">
                <Visibility className='widgetSmIcon'/>
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="/assets/images/person2.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Salar Sadeghi</span>
                <span className="widgetSmUserTitle">Software Engineering</span>
            </div>
            <button className="widgetSmBtn">
                <Visibility className='widgetSmIcon'/>
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="/assets/images/person2.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Salar Sadeghi</span>
                <span className="widgetSmUserTitle">Software Engineering</span>
            </div>
            <button className="widgetSmBtn">
                <Visibility className='widgetSmIcon'/>
                Display
            </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
