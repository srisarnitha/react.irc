import React, { useState } from 'react';
import '../assets/RegistrationForm.css';

function RegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('A form was submitted:', { firstName, lastName, email, password, confirmPassword });
    };

    return (
        <div className="form-container">
            <div class="formdet">
            <h3>THE BETTER WAY TO FLY</h3>

            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="firstName"><b>FIRST NAME</b></label>
                    
                    <input type="text" placeholder="Enter Firstname" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName"><b>LAST NAME</b></label>
                    <input type="text"placeholder="Enter Lastname"  id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className="input-field">
                    <label htmlFor="email"><b>EMAIL</b></label>
                    <input type="email"placeholder="Enter Mail" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-field">
                    <label htmlFor="password"><b>PASSWORD</b></label>
                    <input type="password"placeholder="Enter Password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="input-field">
                    <label htmlFor="confirmPassword"><b>CONFIRM PASSWORD</b></label>
                    <input type="password" placeholder="Password"id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>

                <button type="submit">REGISTER</button>
            </form>
            </div>
        </div>
    );
}

export default RegistrationForm;