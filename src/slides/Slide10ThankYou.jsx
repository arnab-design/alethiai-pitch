import React from 'react'
import Logo from '../components/Logo'
import WavePattern from '../components/WavePattern'

function Slide10ThankYou() {
    return (
        <div className="slide-content slide-thankyou text-center flex flex-col items-center justify-center">
            <Logo className="mb-48" />

            <h2 className="headline mb-32">Thank You</h2>

            <div className="contact-info">
                <div className="contact-item">
                    <div className="contact-icon">🌐</div>
                    <span>alethiai.com</span>
                </div>
                <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <span>contact@alethiai.com</span>
                </div>
            </div>

            <WavePattern />
        </div>
    )
}

export default Slide10ThankYou
