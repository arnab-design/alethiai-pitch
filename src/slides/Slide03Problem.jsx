import React from 'react'

function Slide03Problem() {
    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>The Problem</span>
                <h2 className="headline">
                    Technology Is the Biggest <span className="highlight">Unverified Risk</span> in M&A
                </h2>
            </div>

            <div className="grid-3">
                <div className="issue-card">
                    <div style={{ fontSize: '32px', marginBottom: '16px' }}>⏱️</div>
                    <h3>Deal Delays</h3>
                    <p>Manual technology assessments take 4-6 weeks, creating bottlenecks that slow deal velocity and frustrate stakeholders.</p>
                </div>

                <div className="issue-card">
                    <div style={{ fontSize: '32px', marginBottom: '16px' }}>📊</div>
                    <h3>Valuation Risk</h3>
                    <p>Qualitative approaches lead to mispricing—hidden tech debt, security gaps, and integration costs often surface post-close.</p>
                </div>

                <div className="issue-card">
                    <div style={{ fontSize: '32px', marginBottom: '16px' }}>💰</div>
                    <h3>Escalating Costs</h3>
                    <p>Manual workflows require expensive specialist consultants, with costs often exceeding $500K per transaction.</p>
                </div>
            </div>
        </div>
    )
}

export default Slide03Problem
