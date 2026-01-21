import React from 'react'

function Slide18Roadmap() {
    const phases = [
        { name: 'Build', period: 'Q1-Q2 2026', color: 'var(--color-primary)' },
        { name: 'Prove', period: 'Q3 2026', color: '#F59E0B' },
        { name: 'Expand', period: 'Q4 2026', color: '#8B5CF6' }
    ]

    const categories = [
        {
            name: 'Product & Platform',
            build: ['Core agent framework', 'Pre-LOI screening MVP', 'SOC 2 compliance'],
            prove: ['VDR integration', 'Benchmark engine', 'Customer feedback loop'],
            expand: ['Post-close monitoring', 'API ecosystem', 'Enterprise features']
        },
        {
            name: 'Go-To-Market',
            build: ['Sales playbook', 'Partner outreach', 'Website & content'],
            prove: ['Pilot conversions', 'Case studies', 'Conference presence'],
            expand: ['Channel partnerships', 'UK market entry', 'Inbound marketing']
        },
        {
            name: 'Team & Operations',
            build: ['Engineering hires', 'Advisory board', 'Legal/finance setup'],
            prove: ['Sales hire', 'Customer success', 'Process documentation'],
            expand: ['Seed proof points', 'Series A prep', 'Team expansion planning']
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Roadmap</span> – Execution Plan
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '800px', margin: '12px auto 0' }}>
                    Execution over the <strong>next 12 months</strong> requires coordinated progress across product, go-to-market, and operations.
                </p>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '12px 16px', textAlign: 'left', background: 'var(--color-primary)', color: 'white', fontWeight: '700' }}></th>
                            {phases.map((phase, i) => (
                                <th key={i} style={{
                                    padding: '12px 16px',
                                    textAlign: 'center',
                                    background: phase.color,
                                    color: 'white',
                                    fontWeight: '700'
                                }}>
                                    <div>{phase.name}</div>
                                    <div style={{ fontSize: '12px', fontWeight: '400', opacity: 0.9 }}>{phase.period}</div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, rowIndex) => (
                            <tr key={rowIndex} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                <td style={{
                                    padding: '16px',
                                    fontWeight: '700',
                                    background: 'var(--color-gray-100)',
                                    color: 'var(--color-primary)'
                                }}>
                                    {category.name}
                                </td>
                                <td style={{ padding: '12px', verticalAlign: 'top' }}>
                                    <ul style={{ margin: 0, paddingLeft: '16px' }}>
                                        {category.build.map((item, i) => (
                                            <li key={i} className="small-text" style={{ marginBottom: '4px' }}>{item}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td style={{ padding: '12px', verticalAlign: 'top' }}>
                                    <ul style={{ margin: 0, paddingLeft: '16px' }}>
                                        {category.prove.map((item, i) => (
                                            <li key={i} className="small-text" style={{ marginBottom: '4px' }}>{item}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td style={{ padding: '12px', verticalAlign: 'top' }}>
                                    <ul style={{ margin: 0, paddingLeft: '16px' }}>
                                        {category.expand.map((item, i) => (
                                            <li key={i} className="small-text" style={{ marginBottom: '4px' }}>{item}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{
                borderLeft: '4px solid var(--color-primary)',
                padding: '16px 20px',
                background: 'var(--color-gray-100)',
                borderRadius: '0 8px 8px 0',
                maxWidth: '900px',
                margin: '24px auto 0'
            }}>
                <p className="body-text" style={{ margin: 0, fontSize: '14px' }}>
                    Each phase builds on the previous, creating <strong>proof points for Series A</strong> funding.
                </p>
            </div>
        </div>
    )
}

export default Slide18Roadmap
