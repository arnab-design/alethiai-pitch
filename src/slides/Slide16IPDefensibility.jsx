import React from 'react'

function Slide16IPDefensibility() {
    const engines = [
        {
            name: 'Public System Scanning Engine',
            status: '(Patent Pending)',
            whatProtected: 'Automated extraction and normalization of public technology signals',
            whyDefensible: 'Proprietary signal fusion and verification logic that improves with scale',
            barrier: 'Enables independent, pre-engagement technology intelligence'
        },
        {
            name: 'VDR Evidence Engine',
            status: '(Patent Pending)',
            whatProtected: 'Continuous ingestion and validation of deal-room diligence artifacts',
            whyDefensible: 'Provenance-locked evidence with reusable, auditable transformation logic',
            barrier: 'Makes one-off diligence reports structurally obsolete'
        },
        {
            name: 'Private System Scanning Engine',
            status: '(Patent Pending)',
            whatProtected: 'Secure, system-derived verification of post-close technology state',
            whyDefensible: 'Direct linkage between operational signals and assurance logic',
            barrier: 'Replaces episodic monitoring with persistent assurance'
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Technology Defensibility</span> – Intellectual Property
                </h2>
                <p className="body-text mt-16" style={{ maxWidth: '900px', margin: '16px auto 0' }}>
                    <strong>Enduring advantage in intelligence technologies</strong> is created through proprietary evidence pipelines, repeatable intelligence models, and systems that compound learning over time.
                </p>
            </div>

            {/* Engines Table */}
            <div style={{ marginBottom: '24px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid var(--color-primary)' }}>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '700', fontSize: '12px' }}>Patent Focus Area</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '700', fontSize: '12px' }}>What Is Protected</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '700', fontSize: '12px' }}>Why It Is Defensible</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '700', fontSize: '12px' }}>Barrier Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {engines.map((engine, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                <td style={{ padding: '16px', verticalAlign: 'top' }}>
                                    <div style={{ fontWeight: '600', color: 'var(--color-primary)' }}>{engine.name}</div>
                                    <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>{engine.status}</div>
                                </td>
                                <td style={{ padding: '16px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>{engine.whatProtected}</td>
                                <td style={{ padding: '16px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>{engine.whyDefensible}</td>
                                <td style={{ padding: '16px', fontSize: '13px', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>{engine.barrier}</td>
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
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>
                    <strong>Alethi AI defends it's technology advantage</strong> through patent-pending assurance engines that lock in independent evidence capture, audit-grade verification, and lifecycle-wide intelligence reuse.
                </p>
            </div>
        </div>
    )
}

export default Slide16IPDefensibility
