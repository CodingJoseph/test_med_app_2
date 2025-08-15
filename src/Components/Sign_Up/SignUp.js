import './SignUp.css';

// Function component for SignUp.
const Sign_Up = () => {
    return (
        <div className="signup-container">
        <h1>Sign Up</h1>
        <h3>Already a member? <a href="/login">Login</a></h3>
        {/* Form that REQUIRES Role, Name, Phone No., Email, and Password. Submit and Reset button at the end. */}
        <form className="signup-form">
            <table>
            <tbody>
                <tr>
                <td>Role</td>
                <td>
                    <div className="signup-radio-row">
                        <input type="radio" name="role" id="patient" required />
                        <label htmlFor="patient">Patient</label>
                        <input type="radio" name="role" id="doctor" />
                        <label htmlFor="doctor">Doctor</label>
                    </div>
                </td>
                </tr>
                <tr>
                    <td><label htmlFor="name">Name</label></td>
                    <td><input type="text" name="name" id="name" required placeholder="Your name here" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="phone">Phone #</label></td>
                    <td><input type="tel" name="phone" id="phone" required placeholder="Your phone number here" maxLength="10" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="email">E-mail</label></td>
                    <td><input type="email" name="email" id="email" required placeholder="Your e-mail address here" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="password">Password</label></td>
                    <td><input name="password" id="password" required placeholder="Your password here" /></td>
                </tr>
            </tbody>
            </table>
            <div className="signup-btn-row">
                <button type="submit" className="btn1">Submit</button>
                <button type="reset" className="btn1">Reset</button>
            </div>
        </form>
        </div>
    );
};

export default Sign_Up;