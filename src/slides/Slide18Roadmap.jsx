import React from 'react'

function Slide18Roadmap() {
    const phases = [
        {
            name: 'Build',
            subtitle: 'Product validation',
            color: 'var(--color-primary)',
            items: [
                'Demonstrate end-to-end technical diligence capability',
                'Establish repeatable assessment system across full deal lifecycle',
                'Establish early IP defensibility and compliance readiness'
            ]
        },
        {
            name: 'Prove',
            subtitle: 'Market validation',
            color: '#F59E0B',
            items: [
                'Paid pilots with PE/VC firms',
                'AlethiAI embedded into live M&A workflows',
                'Documented ROI: time saved, risks surfaced, decision quality'
            ]
        },
        {
            name: 'Position',
            subtitle: 'Seed Readiness',
            color: '#8B5CF6',
            items: [
                'Clear ICP and buyer persona validated',
                'Evidence of repeatable demand',
                'Clear articulation of what the Seed round scales'
            ]
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Roadmap</span> – Pre-Seed Execution Plan
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '900px', margin: '12px auto 0' }}>
                    Execution over the next 12 months <strong>requires coordinated progress across product, go-to-market, and operations</strong> to reach production readiness and repeatable adoption.
                </p>
            </div>

            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '32px' }}>
                {phases.map((phase, index) => (
                    <div key={index} style={{
                        flex: 1,
                        maxWidth: '280px',
                        background: 'var(--color-gray-100)',
                        borderRadius: '12px',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            background: phase.color,
                            color: 'white',
                            padding: '16px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '20px', fontWeight: '700' }}>{phase.name}</div>
                            <div style={{ fontSize: '13px', opacity: 0.9 }}>{phase.subtitle}</div>
                        </div>
                        <div style={{ padding: '16px' }}>
                            <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                {phase.items.map((item, i) => (
                                    <li key={i} style={{
                                        fontSize: '13px',
                                        marginBottom: '10px',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: '1.4'
                                    }}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
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
                    This <strong>pre-seed validates traction and unlocks Seed scale</strong> – strengthening delivery, expanding evidence coverage, and scaling with confidence.
                </p>
            </div>
        </div>
    )
}

export default Slide18Roadmap
