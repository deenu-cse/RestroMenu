import React from 'react'
import './App.css';
import flex2 from './—Pngtree—delivery man riding scooter on_5380726.png'

export default function Location() {
    return (
        <div className='location'>
            <h2>Embark on a gastronomic journey with ease using our handy location route. <span>We can't wait to welcome you to our table!</span></h2>
            <div className='flexme'>
                <div className='flex1'>
                    <h2>Our Location :</h2>
                    <h3>Mumbai</h3>
                    <h2>Contact Us :</h2>
                    <h3>XXXXXX7030</h3>
                    <h2>Email :</h2>
                    <h3>Mrestro@gmail.com</h3>
                    <h2 className='thank'>Thanks For Visiting!</h2>
                </div>
                <div className='flex2'>
                    <img src={flex2}></img>
                </div>
            </div>
        </div>
    )
}

