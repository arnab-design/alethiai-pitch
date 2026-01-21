import React from 'react'
import { X, Check } from 'lucide-react'

function Slide17Competition() {
    const comparisons = [
        {
            dimension: 'Diligence Scope',
            traditional: 'Manual spot checks',
            alethi: 'Automated evidence capture'
        },
        {
            dimension: 'Target Visibility',
            traditional: 'Restricted access',
            alethi: 'Pre-engagement signals'
        },
        {
            dimension: 'Verification Logic',
            traditional: 'Personal judgment',
            alethi: 'Audit-grade verification'
        },
        {
            dimension: 'Engagement Speed',
            traditional: 'Slow, labor-intensive',
            alethi: 'Near-instant delivery'
        },
        {
            dimension: 'Data Lifecycle',
            traditional: 'Static reports',
            alethi: 'Searchable intelligence assets'
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Competitive Advantage</span> – Structural Differentiation Across the Deal Lifecycle
                </h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '700', borderBottom: '2px solid var(--color-gray-200)' }}></th>
                            <th style={{ padding: '16px', textAlign: 'center', fontWeight: '700', borderBottom: '2px solid var(--color-gray-200)', color: 'var(--color-text-secondary)' }}>
                                Traditional TD
                            </th>
                            <th style={{ padding: '16px', textAlign: 'center', fontWeight: '700', borderBottom: '2px solid var(--color-gray-200)', color: 'var(--color-primary)' }}>
                                Alethi AI Assurance
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisons.map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                <td style={{ padding: '16px', fontWeight: '600' }}>{row.dimension}</td>
                                <td style={{ padding: '16px', textAlign: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                        <X size={16} color="#EF4444" />
                                        <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>{row.traditional}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '16px', textAlign: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                        <Check size={16} color="var(--color-primary)" />
                                        <span style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: '500' }}>{row.alethi}</span>
                                    </div>
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
                    Alethi AI replaces fragmented, subjective processes with <strong>automated, audit-grade assurance</strong> that scales across the entire deal lifecycle.
                </p>
            </div>
        </div>
    )
}

export default Slide17Competition
