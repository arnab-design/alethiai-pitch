import React from 'react'

function Slide17Competitive() {
    const features = [
        { feature: 'Approach', alethi: 'Automated', traditional: 'Manual' },
        { feature: 'Frequency', alethi: 'Persistent', traditional: 'Episodic' },
        { feature: 'Integration', alethi: 'API-enabled', traditional: 'PDF-based' },
        { feature: 'Speed', alethi: 'Days', traditional: 'Weeks' },
        { feature: 'Cost', alethi: '60-75% lower', traditional: 'Premium pricing' },
        { feature: 'Traceability', alethi: 'Full audit trail', traditional: 'Limited' }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>Competitive Landscape</span>
                <h2 className="headline">Alethi AI vs. Traditional Diligence</h2>
            </div>

            <div className="table-container">
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th style={{ width: '30%' }}>Feature</th>
                            <th style={{ width: '35%', color: 'var(--color-primary)' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    ✓ Alethi AI
                                </span>
                            </th>
                            <th style={{ width: '35%' }}>Traditional</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((row, index) => (
                            <tr key={index}>
                                <td style={{ fontWeight: '600' }}>{row.feature}</td>
                                <td style={{ color: 'var(--color-primary)', fontWeight: '500' }}>{row.alethi}</td>
                                <td style={{ color: 'var(--color-text-light)' }}>{row.traditional}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Slide17Competitive
