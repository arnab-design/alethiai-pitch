import React from 'react'

function Slide20Pricing() {
    const pricing = [
        {
            phase: 'Origination',
            solutions: 'Target Search Intelligence, Pre-LOI Risk Screening',
            alethiPrice: '$100K/year',
            traditionalPrice: '$400K/year',
            advantage: '75%'
        },
        {
            phase: 'Deal Assurance',
            solutions: 'Confirmatory Tech DD Report, Pre-Close Integration Blueprint',
            alethiPrice: '$150K/deal',
            traditionalPrice: '$600K/deal',
            advantage: '75%'
        },
        {
            phase: 'Value Realization',
            solutions: 'Post-Close Integration Tracker, Compliance & Risk Monitoring',
            alethiPrice: '$200K/year',
            traditionalPrice: '$500K/year',
            advantage: '60%'
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Business Model</span> – Pricing & Revenue Design
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '800px', margin: '12px auto 0' }}>
                    Alethi AI vs. Traditional Diligence pricing comparison
                </p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid var(--color-primary)' }}>
                            <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '700', fontSize: '14px' }}>Deal Phase</th>
                            <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '700', fontSize: '14px' }}>Alethi AI Solutions</th>
                            <th style={{ padding: '14px 12px', textAlign: 'right', fontWeight: '700', fontSize: '14px', color: 'var(--color-primary)' }}>Alethi AI Pricing</th>
                            <th style={{ padding: '14px 12px', textAlign: 'right', fontWeight: '700', fontSize: '14px', color: 'var(--color-text-secondary)' }}>Traditional Pricing</th>
                            <th style={{ padding: '14px 12px', textAlign: 'center', fontWeight: '700', fontSize: '14px' }}>Cost Advantage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pricing.map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                <td style={{ padding: '16px 12px', fontWeight: '600', color: 'var(--color-primary)' }}>{row.phase}</td>
                                <td style={{ padding: '16px 12px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>{row.solutions}</td>
                                <td style={{ padding: '16px 12px', textAlign: 'right', fontWeight: '700', color: 'var(--color-primary)', fontSize: '16px' }}>{row.alethiPrice}</td>
                                <td style={{ padding: '16px 12px', textAlign: 'right', color: 'var(--color-text-secondary)', textDecoration: 'line-through' }}>{row.traditionalPrice}</td>
                                <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                                    <span style={{
                                        background: 'var(--color-primary)',
                                        color: 'white',
                                        padding: '4px 12px',
                                        borderRadius: '12px',
                                        fontWeight: '700',
                                        fontSize: '14px'
                                    }}>
                                        {row.advantage}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{
                borderLeft: '4px solid var(--color-primary)',
                padding: '20px 24px',
                background: 'var(--color-gray-100)',
                borderRadius: '0 8px 8px 0',
                maxWidth: '900px',
                margin: '32px auto 0'
            }}>
                <p className="body-text" style={{ margin: 0 }}>
                    Alethi AI delivers <strong>60-75% cost savings</strong> compared to traditional diligence while providing faster, more comprehensive coverage.
                </p>
            </div>
        </div>
    )
}

export default Slide20Pricing
