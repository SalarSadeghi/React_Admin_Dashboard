import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, PublishOutlined } from '@mui/icons-material'
import './user.scss'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to='/newUser'>
            <button className="userAddBtn">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="/assets/images/person5.jpg" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Salar Sadeghi</span>
                    <span className="userShowUserTitle">Front End Developer </span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitle">Radolph</span>
                </div>
                <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <span className="userShowInfoTitle">16 Apr 1995</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitle">+98 9217440127</span>
                </div>
                <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">salar.sadeghi41@gmail.com</span>
                </div>
                <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <span className="userShowInfoTitle">New York | USA</span>
                </div>
            </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form action="" className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" className="userUpdateInput" placeholder='Radolph'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Fullname</label>
                        <input type="text" className="userUpdateInput" placeholder='Salar Sadeghi'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="email" className="userUpdateInput" placeholder='salar.sadeghi41@gmail.com'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input type="tel" className="userUpdateInput" placeholder='+98 9217440127'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" className="userUpdateInput" placeholder='New York | USA'/>
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img src="/assets/images/person5.jpg" alt="" className="userUpdateImg" />
                        <label htmlFor="file">
                            <PublishOutlined className='userUpdateIcon'/>
                        </label>
                        <input type="file" id="file" className='userUpdateInputFile' />
                    </div>
                    <button className="userUpdateBtn">Update</button>
                </div>
                
            </form>
        </div>
      </div>
    </div>
  )
}

export default User
