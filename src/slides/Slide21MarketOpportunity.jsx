import React from 'react'

function Slide21MarketOpportunity() {
    return (
        <div className="slide-content">
            <div className="text-center mb-32">
                <h2 className="headline">
                    <span className="highlight">Market Opportunity</span> – TAM, SAM, SOM
                </h2>
                <p className="body-text mt-16" style={{ maxWidth: '900px', margin: '16px auto 0' }}>
                    Technology assurance is a <strong>~$12B global market</strong> driven by M&A activity, regulatory requirements, and the increasing role of technology in enterprise value creation.
                </p>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                gap: '48px',
                marginBottom: '32px'
            }}>
                {/* TAM */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(0,168,150,0.15) 0%, rgba(0,168,150,0.3) 100%)',
                        border: '3px solid var(--color-primary)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px'
                    }}>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-primary)', letterSpacing: '2px' }}>TAM</div>
                        <div style={{ fontSize: '42px', fontWeight: '800', color: 'var(--color-primary)' }}>~$12B</div>
                    </div>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)', maxWidth: '180px', margin: '0 auto' }}>
                        Full tech deal assurance, M&A risk, and audit
                    </p>
                </div>

                {/* SAM */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '160px',
                        height: '160px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(0,168,150,0.2) 0%, rgba(0,168,150,0.4) 100%)',
                        border: '3px solid var(--color-primary)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px'
                    }}>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-primary)', letterSpacing: '2px' }}>SAM</div>
                        <div style={{ fontSize: '36px', fontWeight: '800', color: 'var(--color-primary)' }}>~$4B</div>
                    </div>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)', maxWidth: '180px', margin: '0 auto' }}>
                        Mid-Market and Enterprise PE tech diligence globally
                    </p>
                </div>

                {/* SOM */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(0,168,150,0.3) 0%, rgba(0,168,150,0.6) 100%)',
                        border: '3px solid var(--color-primary)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px'
                    }}>
                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--color-primary)', letterSpacing: '2px' }}>SOM</div>
                        <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--color-primary)' }}>$250M</div>
                    </div>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)', maxWidth: '180px', margin: '0 auto' }}>
                        Initial capture in US mid-market and tech-heavy portcos
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
                    Alethi AI targets the <strong>mid-market PE technology diligence segment</strong>, with expansion into broader M&A and regulatory compliance verticals.
                </p>
            </div>
        </div>
    )
}

export default Slide21MarketOpportunity
