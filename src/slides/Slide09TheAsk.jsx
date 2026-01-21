import React from 'react'

function Slide09TheAsk() {
    const allocation = [
        { category: 'Team', amount: 'USD 0.73M', percent: '73%', capability: 'Engineering, GTM, Operations' },
        { category: 'Product Ops', amount: 'USD 0.15M', percent: '15%', capability: 'Infrastructure, Tools, Data' },
        { category: 'Infrastructure', amount: 'USD 0.08M', percent: '8%', capability: 'Cloud, Security, Compliance' },
        { category: 'Contingency', amount: 'USD 0.04M', percent: '4%', capability: 'Operating buffer' }
    ]

    const fundingEnables = [
        { bold: '12-month runway', text: 'to achieve product-market fit' },
        { bold: 'US/UK market launch', text: 'with focused go-to-market' },
        { bold: 'LOI-backed pilot conversion', text: 'to paying customers' },
        { bold: 'Seed proof points', text: 'for Series A positioning' }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-32">
                <h2 className="headline">
                    <span className="highlight">The Ask</span> – Pre-Seed Funding & Use of Proceeds
                </h2>
            </div>

            <div className="grid-2" style={{ gap: '48px', alignItems: 'start' }}>
                {/* Funding Enables */}
                <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: 'var(--color-primary)' }}>Funding Enables</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {fundingEnables.map((item, index) => (
                            <li key={index} style={{
                                padding: '12px 0',
                                borderBottom: index < fundingEnables.length - 1 ? '1px solid var(--color-gray-200)' : 'none'
                            }}>
                                <strong>{item.bold}</strong> {item.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Allocation Table */}
                <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: 'var(--color-primary)' }}>Allocation of Proceeds</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '13px', fontWeight: '600' }}>Category</th>
                                <th style={{ textAlign: 'right', padding: '12px 8px', fontSize: '13px', fontWeight: '600' }}>Allocation</th>
                                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '13px', fontWeight: '600' }}>Capability Built</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allocation.map((row, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                    <td style={{ padding: '12px 8px', fontSize: '14px', fontWeight: '500' }}>{row.category}</td>
                                    <td style={{ padding: '12px 8px', fontSize: '14px', textAlign: 'right' }}>
                                        <span style={{ fontWeight: '600' }}>{row.amount}</span>
                                        <span style={{ color: 'var(--color-primary)', marginLeft: '8px' }}>({row.percent})</span>
                                    </td>
                                    <td style={{ padding: '12px 8px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>{row.capability}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
                    Pre-seed funding positions Alethi AI to <strong>demonstrate product-market fit</strong> and build the proof points required for Series A.
                </p>
            </div>
        </div>
    )
}

export default Slide09TheAsk
