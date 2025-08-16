// Necessary modules from React library.
import React from 'react';
// Custom styles.
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
        <h1>Login</h1>
        <h3>Not a member yet? <a href="/signup">Sign Up</a></h3>
        {/* Form that REQUIRES Email and Password. Submit and Reset button at the end. */}
        <form className="login-form">
            <table>
            <tbody>
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
            <div className="login-btn-row">
                <button type="submit" className="btn1">Submit</button>
                <button type="reset" className="btn1">Reset</button>
            </div>
        </form>
        </div>
    );
};

export default Login;