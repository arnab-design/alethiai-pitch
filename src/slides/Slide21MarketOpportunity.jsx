import React from 'react'

function Slide21MarketOpportunity() {
    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>Market Opportunity</span>
                <h2 className="headline">Market Sizing</h2>
            </div>

            <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
                <div className="market-circles">
                    <div className="market-circle tam">
                        <div className="market-circle-label">TAM</div>
                        <div className="market-circle-value">$21B</div>
                    </div>
                    <div className="market-circle sam">
                        <div className="market-circle-label">SAM</div>
                        <div className="market-circle-value">$4.2B</div>
                    </div>
                    <div className="market-circle som">
                        <div className="market-circle-label">SOM</div>
                        <div className="market-circle-value">$1.2B</div>
                    </div>
                </div>

                <div>
                    <div className="card mb-24">
                        <h4 style={{ marginBottom: '8px', fontWeight: '600', color: 'var(--color-primary)' }}>TAM — $21B</h4>
                        <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                            Total Addressable Market: Global technology due diligence and M&A advisory services
                        </p>
                    </div>

                    <div className="card mb-24">
                        <h4 style={{ marginBottom: '8px', fontWeight: '600', color: 'var(--color-primary)' }}>SAM — $4.2B</h4>
                        <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                            Serviceable Addressable Market: US/UK technology-focused M&A transactions
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ marginBottom: '8px', fontWeight: '600', color: 'var(--color-primary)' }}>SOM — $1.2B</h4>
                        <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                            Serviceable Obtainable Market: PE and corporate buyers with 10+ annual deals
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide21MarketOpportunity
