import React from 'react'

function Slide21MarketOpportunity() {
    const tamItems = [
        { name: 'Tech Diligence & Risk Assessment', value: '~$5B' },
        { name: 'Integration Readiness & Execution Oversight', value: '~$4B' },
        { name: 'Ongoing Tech Risk & Compliance Monitoring', value: '~$3B' }
    ]

    const samItems = [
        { name: 'Technology Diligence & Risk Screening', value: '~$1.6B' },
        { name: 'M&A-Linked Technology Integration', value: '~$0.3B' },
        { name: 'Post-Close Technology Risk Monitoring', value: '~$0.1B' }
    ]

    const somItems = [
        { name: 'Mid-Market PE Tech Deals', value: '~$70M' },
        { name: 'Advisor-Activated Deal Flow', value: '~$20M' },
        { name: 'Corporate Development Tech Acquisitions', value: '~$10M' }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Market Opportunity</span> – TAM, SAM, SOM
                </h2>
                <p className="body-text mt-16" style={{ maxWidth: '900px', margin: '16px auto 0' }}>
                    Technology assurance is a <strong>~$12B global market</strong> spanning diligence, integration, and post-close risk across increasingly complex M&A transactions.
                </p>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
                marginBottom: '24px'
            }}>
                {/* TAM */}
                <div style={{ flex: 1, maxWidth: '280px' }}>
                    <div style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                        padding: '16px',
                        borderRadius: '12px 12px 0 0',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>TAM $12B</div>
                        <div style={{ fontSize: '11px', opacity: 0.9 }}>Total Addressable Category</div>
                    </div>
                    <div style={{ padding: '4px', background: 'var(--color-primary)', borderRadius: '0 0 12px 12px' }}>
                        <div style={{ background: 'white', borderRadius: '8px', padding: '12px' }}>
                            <p style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: '600', marginBottom: '12px' }}>Global M&A Tech Assurance</p>
                            {tamItems.map((item, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '6px', color: 'var(--color-text-secondary)' }}>
                                    <span>{item.name}</span>
                                    <span style={{ fontWeight: '600' }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SAM */}
                <div style={{ flex: 1, maxWidth: '280px' }}>
                    <div style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                        padding: '16px',
                        borderRadius: '12px 12px 0 0',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>SAM $2B</div>
                        <div style={{ fontSize: '11px', opacity: 0.9 }}>Serviceable Available Market</div>
                    </div>
                    <div style={{ padding: '4px', background: 'var(--color-primary)', borderRadius: '0 0 12px 12px' }}>
                        <div style={{ background: 'white', borderRadius: '8px', padding: '12px' }}>
                            <p style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: '600', marginBottom: '12px' }}>NA + EU Tech Transactions (Automatable)</p>
                            {samItems.map((item, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '6px', color: 'var(--color-text-secondary)' }}>
                                    <span>{item.name}</span>
                                    <span style={{ fontWeight: '600' }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SOM */}
                <div style={{ flex: 1, maxWidth: '280px' }}>
                    <div style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                        padding: '16px',
                        borderRadius: '12px 12px 0 0',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>SOM $100M</div>
                        <div style={{ fontSize: '11px', opacity: 0.9 }}>Serviceable Obtainable Market</div>
                    </div>
                    <div style={{ padding: '4px', background: 'var(--color-primary)', borderRadius: '0 0 12px 12px' }}>
                        <div style={{ background: 'white', borderRadius: '8px', padding: '12px' }}>
                            <p style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: '600', marginBottom: '12px' }}>Near-Term Capturable Buyers (36 months)</p>
                            {somItems.map((item, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '6px', color: 'var(--color-text-secondary)' }}>
                                    <span>{item.name}</span>
                                    <span style={{ fontWeight: '600' }}>{item.value}</span>
                                </div>
                            ))}
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
                    Alethi AI targets a <strong>~$2B automatable serviceable market today</strong>, with a <strong>~$100M near-term entry opportunity</strong> driven by PE, advisors, and corporate development teams.
                </p>
            </div>

            <p className="small-text text-center" style={{ marginTop: '12px', color: 'var(--color-text-secondary)', fontSize: '10px' }}>
                Sources: Goldman Sachs; Dealogic; S&P Global / MSCI; SEC; EU AI Act; DORA; FTC / DOJ.
            </p>
        </div>
    )
}

export default Slide21MarketOpportunity
