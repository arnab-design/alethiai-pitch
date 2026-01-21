import React from 'react'

function Slide22Vision() {
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
        'Tech Due Diligence Prep',
        'Data Room Optimization',
        'Valuation Support Package',
        'Carve-Out Assessment',
        'Exit Planning Intelligence'
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Vision</span> – The Future State
                </h2>
                <p className="body-text mt-16" style={{ maxWidth: '900px', margin: '16px auto 0' }}>
                    Alethi provides the <strong>definitive verification layer</strong> for the <strong>buy side</strong>, the <strong>assurance layer</strong> for the <strong>sell side</strong>, and the <strong>intelligence fabric</strong> for the entire M&A ecosystem.
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '64px', marginBottom: '32px' }}>
                {/* Buy Side Circle */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        border: '4px solid var(--color-primary)',
                        background: 'linear-gradient(135deg, rgba(0,168,150,0.05) 0%, rgba(0,168,150,0.15) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '24px'
                    }}>
                        <h3 style={{ color: 'var(--color-primary)', fontWeight: '700', marginBottom: '16px' }}>Buy Side</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                            {buySideProducts.map((product, i) => (
                                <span key={i} style={{
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    padding: '4px 10px',
                                    borderRadius: '12px',
                                    fontSize: '10px',
                                    fontWeight: '500'
                                }}>
                                    {product}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sell Side Circle */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        border: '4px solid var(--color-accent)',
                        background: 'linear-gradient(135deg, rgba(57,169,166,0.05) 0%, rgba(57,169,166,0.15) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '24px'
                    }}>
                        <h3 style={{ color: 'var(--color-accent)', fontWeight: '700', marginBottom: '16px' }}>Sell Side</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                            {sellSideProducts.map((product, i) => (
                                <span key={i} style={{
                                    background: 'var(--color-accent)',
                                    color: 'white',
                                    padding: '4px 10px',
                                    borderRadius: '12px',
                                    fontSize: '10px',
                                    fontWeight: '500'
                                }}>
                                    {product}
                                </span>
                            ))}
                        </div>
                    </div>
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
                    Long-term vision: <strong>the definitive platform for technology intelligence in M&A</strong>, serving all participants across the deal lifecycle.
                </p>
            </div>
        </div>
    )
}

export default Slide22Vision
