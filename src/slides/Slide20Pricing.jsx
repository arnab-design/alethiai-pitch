import React from 'react'

function Slide20Pricing() {
    const pricing = [
        {
            phase: 'Origination',
            solutions: 'Target Search Intelligence / Pre-LOI Risk Screening',
            alethiPrice: '$100K / year',
            alethiNote: '(includes 5 seats)',
            traditionalPrice: '$400K / year',
            traditionalNote: '(tools + advisory overlays)',
            advantage: '75%'
        },
        {
            phase: 'Deal Assurance',
            solutions: 'Confirmatory Tech DD Report / Pre-Close Integration Blueprint',
            alethiPrice: '$150K / deal',
            alethiNote: '(includes 5 seats)',
            traditionalPrice: '$600K / deal',
            traditionalNote: '(consultant-led Tech DD)',
            advantage: '75%'
        },
        {
            phase: 'Value Realization',
            solutions: 'Post-Close Integration Tracker / Compliance & Risk Monitoring',
            alethiPrice: '$200K / year',
            alethiNote: '(includes 5 seats)',
            traditionalPrice: '$450K / year',
            traditionalNote: '(ops tools + advisory support)',
            advantage: '60%'
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Business Model</span> – Pricing & Revenue Design
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '900px', margin: '12px auto 0', fontSize: '14px' }}>
                    Traditional diligence pricing is unpredictable and misaligned with deal flow, <strong>creating cost friction for investors</strong> managing variable pipelines and assurance needs.
                </p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid var(--color-primary)' }}>
                            <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: '700', fontSize: '12px' }}>Deal Phase</th>
                            <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: '700', fontSize: '12px' }}>Alethi AI Solutions</th>
                            <th style={{ padding: '12px 10px', textAlign: 'right', fontWeight: '700', fontSize: '12px', color: 'var(--color-primary)' }}>Alethi AI Pricing</th>
                            <th style={{ padding: '12px 10px', textAlign: 'right', fontWeight: '700', fontSize: '12px', color: 'var(--color-text-secondary)' }}>Traditional Pricing</th>
                            <th style={{ padding: '12px 10px', textAlign: 'center', fontWeight: '700', fontSize: '12px' }}>Cost Advantage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pricing.map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                <td style={{ padding: '14px 10px', fontWeight: '600', color: 'var(--color-primary)' }}>{row.phase}</td>
                                <td style={{ padding: '14px 10px', fontSize: '12px', color: 'var(--color-text-secondary)' }}>{row.solutions}</td>
                                <td style={{ padding: '14px 10px', textAlign: 'right', verticalAlign: 'top' }}>
                                    <div style={{ fontWeight: '700', color: 'var(--color-primary)', fontSize: '14px' }}>{row.alethiPrice}</div>
                                    <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>{row.alethiNote}</div>
                                </td>
                                <td style={{ padding: '14px 10px', textAlign: 'right', verticalAlign: 'top' }}>
                                    <div style={{ fontWeight: '600', color: 'var(--color-text-secondary)', fontSize: '14px' }}>{row.traditionalPrice}</div>
                                    <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>{row.traditionalNote}</div>
                                </td>
                                <td style={{ padding: '14px 10px', textAlign: 'center' }}>
                                    <span style={{
                                        background: 'var(--color-primary)',
                                        color: 'white',
                                        padding: '4px 12px',
                                        borderRadius: '12px',
                                        fontWeight: '700',
                                        fontSize: '13px'
                                    }}>
                                        {row.advantage} lower cost
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #059669 100%)',
                color: 'white',
                padding: '18px 24px',
                borderRadius: '10px',
                maxWidth: '900px',
                margin: '28px auto 0',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>
                    Across the full deal lifecycle, Alethi AI provides a single, software-based assurance layer that <strong>unifies fragmented tools and episodic advisory spend into a consistent, deal-aligned model.</strong>
                </p>
            </div>

            <p className="small-text text-center" style={{ marginTop: '12px', color: 'var(--color-text-secondary)', fontSize: '10px' }}>
                Sources: McKinsey & Company; Bain & Company; BCG; Deloitte; PwC; EY; S&P Global Market Intelligence; PitchBook; Dealogic; SEC filings.
            </p>
        </div>
    )
}

export default Slide20Pricing
