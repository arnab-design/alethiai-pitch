import React from 'react'

function Slide04Solution() {
    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>The Solution</span>
                <h2 className="headline">
                    Alethi AI's <span className="highlight">Automated Technology Assurance</span>
                </h2>
            </div>

            <div className="grid-3">
                <div className="benefit-card">
                    <div style={{ fontSize: '32px', marginBottom: '16px' }}>⚡</div>
                    <h3>Faster Decisions</h3>
                    <p>Reduce technology diligence from weeks to days with automated evidence collection and risk scoring.</p>
                </div>

                <div className="benefit-card">
                    <div style={{ fontSize: '32px', marginBottom: '16px' }}>🎯</div>
                    <h3>Pricing Conviction</h3>
                    <p>Data-driven assessments quantify technology risk, giving deal teams confidence in valuations and negotiations.</p>
                </div>

                <div className="benefit-card">
                    <div style={{ fontSize: '32px', marginBottom: '16px' }}>📉</div>
                    <h3>Lower Costs</h3>
                    <p>Automated workflows reduce specialist dependency, cutting diligence costs by 60-75% per transaction.</p>
                </div>
            </div>
        </div>
    )
}

export default Slide04Solution
