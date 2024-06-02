import React from 'react';

export default function Contact() {
    return (
        <>
            <div className='contact-overlay'></div>
            <div className='contact-container'>
                <form
                action='https://getform.io/f/lajkwokb' 
                method='POST'
                >
                    <h2>Talk to us</h2>
                    <input type='email' name='email' placeholder='Work email*' />
                    <div className='name'>
                        <input type='text' name='name' placeholder='First name*' />
                        <input type='text' name='name' placeholder='Last name*' />
                    </div>
                    <div className='check'>
                        <input type='checkbox' />
                        <p>I agree to fyle's terms and condition,and provide consent to send me communication</p>
                    </div>
                        <button className='last' type='submit'>Contact Us</button>
                </form>
            </div>
        </>
    );
}
