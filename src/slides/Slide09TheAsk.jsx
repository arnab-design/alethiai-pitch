import React from 'react'
import { Target, DollarSign, Shield, Rocket } from 'lucide-react'

function Slide09TheAsk() {
    const allocation = [
        { category: 'Team', amount: '$730K', percent: '73%', capability: 'Engineering & product execution' },
        { category: 'GTM', amount: '$150K', percent: '15%', capability: 'Pilots, Client onboarding' },
        { category: 'Infrastructure', amount: '$80K', percent: '8%', capability: 'Cloud, automation, security' },
        { category: 'Contingency', amount: '$50K', percent: '4%', capability: 'Operating buffer' }
    ]

    const outcomes = [
        { text: 'Multiple pilot partners in live M&A workflows', icon: Target },
        { text: 'At least one paid customer validating demand', icon: DollarSign },
        { text: 'Highest-value wedge confirmed', icon: Shield },
        { text: 'Seed plan defined: scope, milestones, scale path', icon: Rocket }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">The Ask</span> – $1M Pre-Seed
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '900px', margin: '12px auto 0', fontSize: '14px' }}>
                    Alethi AI is raising <strong>US$1M in pre-seed funding</strong> to scale go-to-market via Pre-LOI Risk Screening while bringing the full six-module diligence lifecycle to production with evidence-linked assurance.
                </p>
            </div>

            <div className="grid-2" style={{ gap: '40px', alignItems: 'start' }}>
                {/* Validation Outcomes */}
                <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: 'var(--color-primary)' }}>Validation Outcomes</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {outcomes.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '14px 16px',
                                    background: 'var(--color-gray-100)',
                                    borderRadius: '10px',
                                    borderLeft: '4px solid var(--color-primary)'
                                }}>
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '8px',
                                        background: 'var(--color-primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <IconComponent size={18} color="white" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: '600', fontSize: '14px' }}>{item.text}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Allocation Table */}
                <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px', color: 'var(--color-primary)' }}>Use of Proceeds</h3>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '16px', fontStyle: 'italic' }}>
                        Capital is allocated to maximize learning velocity and shorten time to market validation.
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ textAlign: 'left', padding: '10px 8px', fontSize: '12px', fontWeight: '600' }}>Category</th>
                                <th style={{ textAlign: 'right', padding: '10px 8px', fontSize: '12px', fontWeight: '600' }}>Amount</th>
                                <th style={{ textAlign: 'left', padding: '10px 8px', fontSize: '12px', fontWeight: '600' }}>Capability</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allocation.map((row, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                    <td style={{ padding: '12px 8px', fontSize: '13px', fontWeight: '500' }}>{row.category}</td>
                                    <td style={{ padding: '12px 8px', fontSize: '13px', textAlign: 'right' }}>
                                        <span style={{ fontWeight: '600' }}>{row.amount}</span>
                                        <span style={{ color: 'var(--color-primary)', marginLeft: '6px', fontSize: '12px' }}>({row.percent})</span>
                                    </td>
                                    <td style={{ padding: '12px 8px', fontSize: '12px', color: 'var(--color-text-secondary)' }}>{row.capability}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Total */}
                    <div style={{
                        marginTop: '16px',
                        padding: '14px 16px',
                        background: 'var(--color-primary)',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <span style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>Total Raise</span>
                        <span style={{ color: 'white', fontWeight: '800', fontSize: '20px' }}>$1,000,000</span>
                    </div>
                </div>
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
                    This raise provides approximately <strong>12 months of runway</strong> to convert LOI-backed pilots into repeatable buyer adoption, validate demand through paid customer conversion, and deliver the execution evidence required for a high-conviction Seed round.
                </p>
            </div>
        </div>
    )
}

export default Slide09TheAsk
