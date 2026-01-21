import React from 'react'
import Logo from '../components/Logo'
import WavePattern from '../components/WavePattern'

function Slide01Title() {
    return (
        <div className="slide-content slide-title text-center">
            <Logo className="mb-48" />

            <h1 className="headline-large mb-24">
                AUTOMATED ASSURANCE FOR<br />
                <span className="highlight">TECHNOLOGY DUE DILIGENCE</span> IN M&A
            </h1>

            <p className="subheadline" style={{ maxWidth: '700px', margin: '0 auto' }}>
                Agentic AI that continuously uncovers, verifies, and tracks technology risk across the deal lifecycle.
            </p>

            <WavePattern />
        </div>
    )
}

export default Slide01Title
