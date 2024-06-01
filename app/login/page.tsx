import React from 'react';

const Login: React.FC = () => {
    return (
        <div id="login_signup">
            <h1>Log in</h1>
            <form>
                <label htmlFor="username">Username</label><br />
                <input type="text" id="username" name="username" placeholder="Username" required /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" name="password" placeholder="Password" required /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" name="email" placeholder="Email" required /><br />
                <button><a href="/">LOG IN</a></button>
                <p>Don't have an account? <a href="/signup">Sign up.</a></p>
            </form>
        </div>
    );
}

export default Login;