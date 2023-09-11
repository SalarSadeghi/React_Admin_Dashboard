import "./newUser.scss";

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserFormItem">
          <label htmlFor="username">User Name</label>
          <input type="text" placeholder="Enter User Name..." id="username" />
        </div>
        <div className="newUserFormItem">
          <label htmlFor="fuulname">Full Name</label>
          <input type="text" placeholder="Enter Full Name..." id="fullname" />
        </div>
        <div className="newUserFormItem">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Email..." id="email" />
        </div>
        <div className="newUserFormItem">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password..."
            id="password"
          />
        </div>
        <div className="newUserFormItem">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            placeholder="Enter Phone Number..."
            id="phone"
          />
        </div>
        <div className="newUserFormItem">
          <label htmlFor="address">Address</label>
          <input type="text" placeholder="Enter Address..." id="address" />
        </div>
        <div className="newUserFormItem">
          <label htmlFor="username">Gender</label>
          <div className="newUserGender">
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="others">Others</label>
            <input type="radio" name="gender" id="others" />
          </div>
        </div>
        <div className="newUserFormItem">
          <label htmlFor="active" className="activeLabel">Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserBtn">Cearte</button>
      </form>
    </div>
  );
}

export default NewUser;
