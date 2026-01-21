import React from 'react'

function Slide16IPDefensibility() {
    const engines = [
        {
            name: 'Public System Scanning Engine',
            description: 'Automated extraction of public tech signals',
            defensibility: 'Signal fusion logic',
            barrier: 'Enables pre-engagement intelligence'
        },
        {
            name: 'VDR Evidence Engine',
            description: 'Continuous ingestion of deal-room artifacts',
            defensibility: 'Provenance-locked evidence',
            barrier: 'Makes manual reports obsolete'
        },
        {
            name: 'Private System Scanning Engine',
            description: 'Secure post-close verification',
            defensibility: 'Linkage between operation signals and assurance',
            barrier: 'Persistent assurance'
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Technology Defensibility</span> – Intellectual Property
                </h2>
                <p className="body-text mt-16" style={{ maxWidth: '900px', margin: '16px auto 0' }}>
                    Enduring advantage in intelligence technologies is created through <strong>proprietary evidence pipelines</strong>, <strong>repeatable intelligence models</strong>, and <strong>systems that compound learning over time</strong>.
                </p>
            </div>

            {/* Engines Table */}
            <div style={{ marginBottom: '24px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid var(--color-primary)' }}>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '700', fontSize: '13px' }}>Patent-Pending Engine</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '700', fontSize: '13px' }}>Capability</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '700', fontSize: '13px' }}>Defensibility</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '700', fontSize: '13px' }}>Competitive Barrier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {engines.map((engine, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                <td style={{ padding: '16px', fontWeight: '600', color: 'var(--color-primary)' }}>{engine.name}</td>
                                <td style={{ padding: '16px', fontSize: '14px', color: 'var(--color-text-secondary)' }}>{engine.description}</td>
                                <td style={{ padding: '16px', fontSize: '14px', color: 'var(--color-text-secondary)' }}>{engine.defensibility}</td>
                                <td style={{ padding: '16px', fontSize: '14px', color: 'var(--color-text-secondary)' }}>{engine.barrier}</td>
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
                margin: '0 auto'
            }}>
                <p className="body-text" style={{ margin: 0 }}>
                    Three <strong>patent-pending engines</strong> form the foundation of Alethi AI's competitive moat and create sustainable differentiation.
                </p>
            </div>
        </div>
    )
}

export default Slide16IPDefensibility
