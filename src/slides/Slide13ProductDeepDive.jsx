import React from 'react'

function Slide13ProductDeepDive() {
    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>Appendix</span>
                <h2 className="headline">Product Deep Dive</h2>
            </div>

            <div className="grid-3">
                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: '48px',
                        marginBottom: '20px',
                        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>🔍</div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Pre-LOI Screening</h3>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        External signal analysis to surface technology risk before LOI
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px', textAlign: 'left' }}>
                        <li className="small-text" style={{ padding: '6px 0' }}>• Stack detection</li>
                        <li className="small-text" style={{ padding: '6px 0' }}>• Security posture</li>
                        <li className="small-text" style={{ padding: '6px 0' }}>• Risk scoring</li>
                    </ul>
                </div>

                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: '48px',
                        marginBottom: '20px',
                        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>📋</div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Confirmatory Diligence</h3>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        Deep-dive analysis with VDR access for comprehensive verification
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px', textAlign: 'left' }}>
                        <li className="small-text" style={{ padding: '6px 0' }}>• VDR extraction</li>
                        <li className="small-text" style={{ padding: '6px 0' }}>• Claim verification</li>
                        <li className="small-text" style={{ padding: '6px 0' }}>• Risk quantification</li>
                    </ul>
                </div>

                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: '48px',
                        marginBottom: '20px',
                        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>📊</div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Post-Deal Realization</h3>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        Continuous monitoring for integration and value capture
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px', textAlign: 'left' }}>
                        <li className="small-text" style={{ padding: '6px 0' }}>• Integration tracking</li>
                        <li className="small-text" style={{ padding: '6px 0' }}>• Value measurement</li>
                        <li className="small-text" style={{ padding: '6px 0' }}>• Ongoing assurance</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Slide13ProductDeepDive
