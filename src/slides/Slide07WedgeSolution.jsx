import React from 'react'

function Slide07WedgeSolution() {
    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>Wedge Solution</span>
                <h2 className="headline">
                    Pre-LOI <span className="highlight">Technology Risk Screening</span>
                </h2>
            </div>

            <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
                <div>
                    <p className="body-text mb-32">
                        Our entry point for deal teams: external and open-source signal analysis that surfaces technology risk before significant investment.
                    </p>

                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>What We Analyze</h3>
                    <div style={{ display: 'grid', gap: '16px' }}>
                        <div className="card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <span style={{ fontSize: '24px' }}>🔐</span>
                            <div>
                                <strong>Patching Cadence</strong>
                                <p className="small-text">Security update frequency and vulnerability exposure windows</p>
                            </div>
                        </div>
                        <div className="card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <span style={{ fontSize: '24px' }}>🌐</span>
                            <div>
                                <strong>Exposed Ports</strong>
                                <p className="small-text">Network attack surface and unnecessary service exposure</p>
                            </div>
                        </div>
                        <div className="card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <span style={{ fontSize: '24px' }}>🔒</span>
                            <div>
                                <strong>SSL Configuration</strong>
                                <p className="small-text">Certificate management and encryption standards compliance</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-primary" style={{ padding: '40px' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>Entry Point Value</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)', display: 'flex', gap: '12px' }}>
                            <span>✓</span>
                            <span>No target access required</span>
                        </li>
                        <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)', display: 'flex', gap: '12px' }}>
                            <span>✓</span>
                            <span>Results in 48 hours</span>
                        </li>
                        <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)', display: 'flex', gap: '12px' }}>
                            <span>✓</span>
                            <span>Go/No-Go confidence</span>
                        </li>
                        <li style={{ padding: '12px 0', display: 'flex', gap: '12px' }}>
                            <span>✓</span>
                            <span>Conversation starter for deeper engagement</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Slide07WedgeSolution
