import React from 'react'
import { Wrench, FlaskConical, Target } from 'lucide-react'

function Slide09bRoadmap() {
    const phases = [
        {
            name: 'BUILD',
            subtitle: 'Validation Infrastructure',
            color: 'var(--color-primary)',
            icon: Wrench,
            outcomes: [
                'End-to-end technical diligence capability proven',
                'Repeatable assessment system across 6 deal stages',
                'Core IP defensibility established'
            ]
        },
        {
            name: 'PROVE',
            subtitle: 'Market Validation',
            color: '#F59E0B',
            icon: FlaskConical,
            outcomes: [
                'Paying pilots with PE/VC firms',
                'AlethiAI integrated into live M&A workflows',
                'Documented ROI: time saved, risks surfaced'
            ]
        },
        {
            name: 'POSITION',
            subtitle: 'Seed Readiness',
            color: '#8B5CF6',
            icon: Target,
            outcomes: [
                'Clear ICP and buyer persona validated',
                'Evidence of repeatable demand',
                'Defined what the Seed round scales'
            ]
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-16">
                <h2 className="headline">
                    <span className="highlight">Pre-Seed Roadmap</span> – From Insight to Validation
                </h2>
                <p className="body-text" style={{ maxWidth: '700px', margin: '16px auto 0', opacity: 0.8 }}>
                    How this capital converts into de-risking and unlocks the Seed round
                </p>
            </div>

            {/* Phase cards */}
            <div style={{
                display: 'flex',
                gap: '24px',
                justifyContent: 'center',
                marginBottom: '40px'
            }}>
                {phases.map((phase, i) => {
                    const IconComponent = phase.icon
                    return (
                        <div key={i} style={{
                            flex: 1,
                            maxWidth: '320px',
                            background: 'var(--color-gray-100)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid var(--color-gray-200)'
                        }}>
                            {/* Phase header */}
                            <div style={{
                                background: phase.color,
                                color: 'white',
                                padding: '16px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '8px',
                                    background: 'rgba(255,255,255,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <IconComponent size={20} color="white" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '16px', fontWeight: '700' }}>{phase.name}</div>
                                    <div style={{ fontSize: '12px', opacity: 0.9 }}>{phase.subtitle}</div>
                                </div>
                            </div>
                            {/* Outcomes */}
                            <div style={{ padding: '20px' }}>
                                {phase.outcomes.map((outcome, j) => (
                                    <div key={j} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '10px',
                                        marginBottom: j < phase.outcomes.length - 1 ? '12px' : 0
                                    }}>
                                        <div style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            background: phase.color,
                                            marginTop: '6px',
                                            flexShrink: 0
                                        }} />
                                        <div style={{
                                            fontSize: '13px',
                                            lineHeight: '1.4',
                                            color: 'var(--color-text-dark)'
                                        }}>
                                            {outcome}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Summary callout */}
            <div style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #059669 100%)',
                color: 'white',
                padding: '20px 32px',
                borderRadius: '12px',
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0, fontSize: '15px', fontWeight: '500' }}>
                    This pre-seed round validates our core thesis and unlocks a <strong>Seed round to scale</strong> proven demand.
                </p>
            </div>
        </div>
    )
}

export default Slide09bRoadmap
