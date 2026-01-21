import React from 'react'

function Slide09TheAsk() {
    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>The Ask</span>
                <h2 className="headline">
                    Pre-Seed Funding & <span className="highlight">Use of Proceeds</span>
                </h2>
            </div>

            <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
                <div className="text-center">
                    <div className="stat-value" style={{ fontSize: '72px' }}>$1.5M</div>
                    <div className="stat-label">Pre-Seed Round</div>
                </div>

                <div>
                    <div className="funding-chart">
                        <div className="funding-segment engineering">60%</div>
                        <div className="funding-segment gtm">25%</div>
                        <div className="funding-segment operations">15%</div>
                    </div>

                    <div style={{ display: 'grid', gap: '20px', marginTop: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'var(--color-primary)' }}></div>
                            <div>
                                <strong>Engineering (60%)</strong>
                                <p className="small-text">Core platform development, AI infrastructure</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'var(--color-primary-dark)' }}></div>
                            <div>
                                <strong>GTM (25%)</strong>
                                <p className="small-text">Sales, partnerships, customer success</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'var(--color-text-dark)' }}></div>
                            <div>
                                <strong>Operations (15%)</strong>
                                <p className="small-text">Legal, compliance, administration</p>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-32" style={{ padding: '24px' }}>
                        <h4 style={{ marginBottom: '12px', fontWeight: '600' }}>Key Milestones</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li className="small-text" style={{ padding: '8px 0', display: 'flex', gap: '8px' }}>
                                <span style={{ color: 'var(--color-primary)' }}>→</span>
                                US/UK market launch
                            </li>
                            <li className="small-text" style={{ padding: '8px 0', display: 'flex', gap: '8px' }}>
                                <span style={{ color: 'var(--color-primary)' }}>→</span>
                                LOI-backed pilot conversion
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide09TheAsk
