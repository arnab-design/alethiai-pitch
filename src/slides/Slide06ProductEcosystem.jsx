import React from 'react'
import { ChevronRight } from 'lucide-react'

function Slide06ProductEcosystem() {
    const stages = [
        {
            title: 'Origination',
            subtitle: 'Prioritize Targets',
            solutions: ['Target Search Intelligence', 'Risk Pre-Screening', 'Stack Detection']
        },
        {
            title: 'Deal Assurance',
            subtitle: 'Validate Claims',
            solutions: ['VDR Evidence Extraction', 'Claim Verification', 'Risk Quantification']
        },
        {
            title: 'Value Realization',
            subtitle: 'Track Integration',
            solutions: ['Continuous Monitoring', 'Integration Tracking', 'Value Capture']
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-32">
                <h2 className="headline">
                    <span className="highlight">How It Works</span> – Unifying Technology Due Diligence Workflows
                </h2>
            </div>

            {/* Workflow Matrix */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px' }}>
                {stages.map((stage, index) => (
                    <React.Fragment key={index}>
                        <div style={{
                            flex: 1,
                            maxWidth: '300px',
                            textAlign: 'center'
                        }}>
                            {/* Arc Header */}
                            <div style={{
                                height: '80px',
                                borderTop: '3px solid var(--color-primary)',
                                borderLeft: '3px solid var(--color-primary)',
                                borderRight: '3px solid var(--color-primary)',
                                borderRadius: '100px 100px 0 0',
                                marginBottom: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                paddingBottom: '8px'
                            }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>{stage.title}</h3>
                                <p className="small-text" style={{ color: 'var(--color-text-secondary)', margin: 0 }}>{stage.subtitle}</p>
                            </div>

                            {/* Solutions Pills */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {stage.solutions.map((solution, sIndex) => (
                                    <div key={sIndex} style={{
                                        background: 'var(--color-text-dark)',
                                        color: 'white',
                                        padding: '10px 16px',
                                        borderRadius: '24px',
                                        fontSize: '13px',
                                        fontWeight: '500'
                                    }}>
                                        {solution}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {index < stages.length - 1 && (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '40px'
                            }}>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    background: 'var(--color-primary)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <ChevronRight color="white" size={20} />
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
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
                    Alethi AI unifies the fragmented technology diligence workflow into a <strong>single, persistent intelligence layer</strong> that spans the entire deal lifecycle.
                </p>
            </div>
        </div>
    )
}

export default Slide06ProductEcosystem
