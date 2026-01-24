import React from 'react'

function Slide22Vision() {
    const buySideChannels = [
        'Financial Investors',
        'Corporate Development',
        'Portfolio / Operating Teams',
        'M&A Advisors & IBs',
        'Law Firms',
        'Consultants',
        'Virtual Data Rooms'
    ]

    const buySideProducts = [
        'Target Search Intelligence',
        'Pre-LOI Risk Screening',
        'Confirmatory Tech DD Report',
        'Pre-Close Integration Blueprint',
        'Post-Close Integration Tracker',
        'Compliance & Risk Monitoring'
    ]

    const sellSideProducts = [
        'Seller Readiness Scan',
        'Risk Remediation Tracker',
        'Disclosure Blueprint',
        'Evidence Sync for VDRs',
        'Challenge–Response Workflow',
        'Integration Simulation'
    ]

    const sellSideChannels = [
        'Founders & CEOs',
        'CIOs / CTOs / CPOs',
        'PE Portfolio Companies'
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-20">
                <h2 className="headline">
                    <span className="highlight">Vision</span> – The Future State
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '900px', margin: '12px auto 0', fontSize: '14px' }}>
                    Alethi AI establishes the verification standard on the <strong>buy side, then expands to the sell side</strong> to connect diligence, disclosure, and execution into a single, trusted system of record for M&A.
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginBottom: '24px' }}>
                {/* Buy Side */}
                <div style={{ flex: 1, maxWidth: '400px' }}>
                    <div style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                        padding: '12px 16px',
                        borderRadius: '8px 8px 0 0',
                        fontWeight: '700',
                        fontSize: '16px',
                        textAlign: 'center'
                    }}>
                        BUY SIDE
                    </div>
                    <div style={{ background: 'var(--color-gray-100)', padding: '16px', borderRadius: '0 0 8px 8px' }}>
                        <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>
                            Alethi AI is purchased as the system of record to <strong>verify</strong> and evidence technology risk in investment and integration decisions
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                            {buySideChannels.map((channel, i) => (
                                <span key={i} style={{ background: 'white', border: '1px solid var(--color-gray-200)', padding: '4px 8px', borderRadius: '4px', fontSize: '10px' }}>{channel}</span>
                            ))}
                        </div>
                        <div style={{ borderTop: '1px solid var(--color-gray-200)', paddingTop: '12px' }}>
                            <div style={{ fontSize: '10px', fontWeight: '600', marginBottom: '8px', color: 'var(--color-primary)' }}>Products</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                {buySideProducts.map((product, i) => (
                                    <span key={i} style={{ background: 'var(--color-primary)', color: 'white', padding: '3px 8px', borderRadius: '10px', fontSize: '9px' }}>{product}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sell Side */}
                <div style={{ flex: 1, maxWidth: '400px' }}>
                    <div style={{
                        background: 'var(--color-accent)',
                        color: 'white',
                        padding: '12px 16px',
                        borderRadius: '8px 8px 0 0',
                        fontWeight: '700',
                        fontSize: '16px',
                        textAlign: 'center'
                    }}>
                        SELL SIDE
                    </div>
                    <div style={{ background: 'var(--color-gray-100)', padding: '16px', borderRadius: '0 0 8px 8px' }}>
                        <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>
                            Alethi AI is used to <strong>evidence</strong>, package, and validate technology for buyer diligence and disclosure.
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                            {sellSideChannels.map((channel, i) => (
                                <span key={i} style={{ background: 'white', border: '1px solid var(--color-gray-200)', padding: '4px 8px', borderRadius: '4px', fontSize: '10px' }}>{channel}</span>
                            ))}
                        </div>
                        <div style={{ borderTop: '1px solid var(--color-gray-200)', paddingTop: '12px' }}>
                            <div style={{ fontSize: '10px', fontWeight: '600', marginBottom: '8px', color: 'var(--color-accent)' }}>Products</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                {sellSideProducts.map((product, i) => (
                                    <span key={i} style={{ background: 'var(--color-accent)', color: 'white', padding: '3px 8px', borderRadius: '10px', fontSize: '9px' }}>{product}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #059669 100%)',
                color: 'white',
                padding: '18px 24px',
                borderRadius: '10px',
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>
                    Alethi AI enables a more predictable deal process that reduces friction, improves disclosure quality, and supports consistent execution <strong>across the full transaction lifecycle</strong>.
                </p>
            </div>
        </div>
    )
}

export default Slide22Vision
