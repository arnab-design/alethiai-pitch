import React from 'react'
import { Zap, FileCheck, TrendingDown } from 'lucide-react'

function Slide04Solution() {
    return (
        <div className="slide-content">
            <div className="text-center mb-32">
                <h2 className="headline">
                    <span className="highlight">Solution</span> – Alethi AI's Automated Technology Assurance
                </h2>
                <p className="body-text mt-16" style={{ maxWidth: '900px', margin: '16px auto 0' }}>
                    Acquirers and investors need <strong>faster, more dependable insight</strong> to <strong>price assets accurately</strong> and <strong>reduce deal and integration risk</strong>.
                </p>
            </div>

            <div className="grid-3 mb-32">
                <div className="card" style={{ background: '#F7F7F9', textAlign: 'center' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'var(--color-primary)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                    }}>
                        <Zap color="white" size={32} />
                    </div>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '3px', marginBottom: '12px', color: 'var(--color-primary)' }}>FASTER DECISIONS</h3>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Weeks of delay are removed</span> as automated evidence collection accelerates diligence cycles.
                    </p>
                </div>

                <div className="card" style={{ background: '#F7F7F9', textAlign: 'center' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'var(--color-primary)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                    }}>
                        <FileCheck color="white" size={32} />
                    </div>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '3px', marginBottom: '12px', color: 'var(--color-primary)' }}>PRICING CONVICTION</h3>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Risks are identified earlier</span> with data-driven assessments that quantify technology exposure.
                    </p>
                </div>

                <div className="card" style={{ background: '#F7F7F9', textAlign: 'center' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'var(--color-primary)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                    }}>
                        <TrendingDown color="white" size={32} />
                    </div>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '3px', marginBottom: '12px', color: 'var(--color-primary)' }}>LOWER COSTS</h3>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Diligence spend decreases</span> as automated workflows reduce specialist dependency.
                    </p>
                </div>
            </div>

            <div style={{
                borderLeft: '4px solid var(--color-primary)',
                padding: '20px 24px',
                background: 'var(--color-gray-100)',
                borderRadius: '0 8px 8px 0',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <p className="body-text" style={{ margin: 0 }}>
                    Alethi AI delivers <strong>automated, defensible technology assurance</strong> that enables faster decisions, accurate pricing, and reduced risk.
                </p>
            </div>
        </div>
    )
}

export default Slide04Solution
