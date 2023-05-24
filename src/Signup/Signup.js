import React, { useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
const Signup = () => {
    const [error, setError] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Your password should at least at 6 word')
            return;
        }
        if (password !== confirm) {
            setError('Password did not match')
            return;
        }
    }
    return (
        <div>
            <div className='form-container'>
                <h1 className='form-title'>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm"> Confirm Password</label>
                        <input type="password" name='confirm' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Login" />
                    <h4 className='signup-page-alert'>Already have an account?? <Link to='/login'>Login</Link></h4>

                    <small className='text-error'>{error}</small>
                </form>
            </div>
        </div>
    );
};

export default Signup;