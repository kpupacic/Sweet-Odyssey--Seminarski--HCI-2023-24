import React from 'react';

const Signup: React.FC = () => {
    return (
        <div id="login_signup">
            <h1>Sign up</h1>
            <form>
                <label htmlFor="username">Username</label><br />
                <input type="text" id="username" name="username" placeholder="Username" required /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" name="password" placeholder="Password" required /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" name="email" placeholder="Email" required /><br />
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" placeholder="Name" required /><br />
                <label htmlFor="surname">Surname</label><br />
                <input type="text" id="surname" name="surname" placeholder="Surname" required /><br />
                <button><a href="/">SIGN UP</a></button>
                <p>Already have an account? <a href="/login">Log in.</a></p>
            </form>
        </div>
    );
}

export default Signup;