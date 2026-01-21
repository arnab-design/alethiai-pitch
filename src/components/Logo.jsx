import React from 'react'

function Logo({ size = 'default', className = '' }) {
    return (
        <div className={`logo ${size === 'small' ? 'logo-small' : ''} ${className}`}>
            <span className="logo-letter">A</span>
            <span className="logo-letter">L</span>
            <div className="logo-e">
                <span className="logo-e-bar"></span>
                <span className="logo-e-bar"></span>
                <span className="logo-e-bar"></span>
            </div>
            <span className="logo-letter">T</span>
            <span className="logo-letter">H</span>
            <span className="logo-letter">I</span>
            <span className="logo-ai">AI</span>
        </div>
    )
}

export default Logo
