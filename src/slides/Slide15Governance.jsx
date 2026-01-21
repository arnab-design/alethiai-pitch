import React from 'react'

function Slide15Governance() {
    const processes = ['Orchestrate', 'Collect', 'Standardize', 'Validate', 'Contextualize', 'Verify', 'Present']

    const principles = [
        {
            name: 'Accuracy',
            target: '≥99%',
            values: ['Deterministic selection', 'Observable capture', 'Canonical schemas', 'Source acceptance', 'Verified enrichment', 'Confidence thresholds', 'Verified-only outputs']
        },
        {
            name: 'Auditability',
            target: '100%',
            values: ['Logged decisions', 'Provenance-preserved evidence', 'Traceable transformations', 'Recorded results', 'Reproducible logic', 'Recorded confidence', 'Evidence-linked results']
        },
        {
            name: 'Reusability',
            target: '≥95%',
            values: ['Reusable flows', 'Independent evidence', 'Single-definition attributes', 'Reusable trust rules', 'Modular components', 'Reusable verification', 'Reusable presentation']
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Technology Governance</span> – Intelligence Development Matrix
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '700px', margin: '12px auto 0' }}>
                    Focuses on <strong>accuracy, auditability, reusability, and scalability</strong>.
                </p>
            </div>

            {/* Matrix Table */}
            <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                    <thead>
                        <tr style={{ background: 'var(--color-primary)' }}>
                            <th style={{ padding: '12px 8px', textAlign: 'left', color: 'white', fontWeight: '700', minWidth: '120px' }}>Principles</th>
                            {processes.map((process, i) => (
                                <th key={i} style={{ padding: '12px 8px', textAlign: 'center', color: 'white', fontWeight: '600' }}>{process}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {principles.map((principle, rowIndex) => (
                            <tr key={rowIndex} style={{ background: rowIndex % 2 === 0 ? 'var(--color-gray-100)' : 'white' }}>
                                <td style={{ padding: '12px 8px', fontWeight: '700' }}>
                                    <span style={{ color: 'var(--color-primary)' }}>{principle.name}</span>
                                    <span style={{ color: 'var(--color-text-secondary)', marginLeft: '8px', fontSize: '11px' }}>({principle.target})</span>
                                </td>
                                {principle.values.map((value, colIndex) => (
                                    <td key={colIndex} style={{ padding: '10px 6px', textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '11px' }}>
                                        {value}
                                    </td>
                                ))}
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
                margin: '0 auto'
            }}>
                <p className="body-text" style={{ margin: 0, fontSize: '14px' }}>
                    Governance ensures every piece of intelligence meets <strong>enterprise-grade standards</strong> for reliability and defensibility.
                </p>
            </div>
        </div>
    )
}

export default Slide15Governance
