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
                    M&A teams <strong>need faster, more dependable insight into target technology</strong> to price assets accurately, accelerate transaction execution, and materially reduce deal and integration risk.
                </p>
            </div>

            <p className="label mb-16 text-center">What Alethi AI enables</p>

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
                    <h3 style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '12px', color: 'var(--color-primary)' }}>FASTER DECISIONS</h3>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                        <em>Remove weeks of delays</em>
                    </p>
                    <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '8px' }}>
                        10–20x faster
                    </p>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        (48-hour delivery)<br />vs traditional tech DD
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
                    <h3 style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '12px', color: 'var(--color-primary)' }}>PRICING CONVICTION</h3>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                        <em>Verified risk clarity</em>
                    </p>
                    <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '8px' }}>
                        100% evidence-linked
                    </p>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        assurance<br />vs qualitative DD
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
                    <h3 style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '12px', color: 'var(--color-primary)' }}>LOWER COSTS</h3>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                        <em>Reduce diligence supplier spend</em>
                    </p>
                    <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '8px' }}>
                        ~4x lower cost
                    </p>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        vs traditional DD
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
                    Alethi AI delivers <strong>automated, defensible technology assurance</strong> that consolidates evidence, streamlines assessment, and enables faster decisions, stronger valuations, and lower lifecycle costs.
                </p>
            </div>
        </div>
    )
}

export default Slide04Solution
