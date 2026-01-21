import React from 'react'

function Slide05MarketContext() {
    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>Market Context</span>
                <h2 className="headline">
                    Why Now — <span className="highlight">The Inflection Point</span>
                </h2>
            </div>

            <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
                <div className="market-stat">
                    <div className="stat-value">$2.4T+</div>
                    <div className="stat-label">Projected M&A Volume</div>
                    <p className="mt-16 small-text">Global M&A activity rebounding after 2023-2024 correction</p>
                </div>

                <div>
                    <h3 className="mb-24" style={{ fontSize: '20px', fontWeight: '600' }}>Key Drivers</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ padding: '16px 0', borderBottom: '1px solid var(--color-gray-200)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--color-primary)', fontSize: '20px' }}>🤖</span>
                            <div>
                                <strong>AI Exposure</strong>
                                <p className="small-text mt-8">Acquirers demanding clarity on AI capabilities, data assets, and technical talent</p>
                            </div>
                        </li>
                        <li style={{ padding: '16px 0', borderBottom: '1px solid var(--color-gray-200)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--color-primary)', fontSize: '20px' }}>📋</span>
                            <div>
                                <strong>Regulatory Pressure</strong>
                                <p className="small-text mt-8">SEC, DORA, and GDPR driving standardized disclosure requirements</p>
                            </div>
                        </li>
                        <li style={{ padding: '16px 0', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--color-primary)', fontSize: '20px' }}>✓</span>
                            <div>
                                <strong>Verification Standards</strong>
                                <p className="small-text mt-8">Buyers no longer accepting qualitative technology assessments</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Slide05MarketContext
