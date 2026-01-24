import React from 'react'
import { ChevronRight } from 'lucide-react'

function Slide06ProductEcosystem() {
    const stages = [
        {
            title: 'Origination',
            primaryUsers: 'Financial Investors / Corporate Development Teams',
            decisionReq: 'Prioritize which targets matter; Detect technical risk early.',
            solutions: ['Target Search Intelligence', 'Preliminary Tech Diligence']
        },
        {
            title: 'Deal Assurance',
            primaryUsers: 'Financial Investors / Consultants & Tech DD Firms',
            decisionReq: 'Validate technology claims; Understand integration risks.',
            solutions: ['Confirmatory Tech DD Report', 'Pre-Close Integration Blueprint']
        },
        {
            title: 'Value Realization',
            primaryUsers: 'Portfolio & Operating Teams',
            decisionReq: 'Track integration progress; Risk & compliance visibility.',
            solutions: ['Post-Close Integration Tracker', 'Compliance & Risk Monitoring']
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-20">
                <h2 className="headline">
                    <span className="highlight">Solutions</span> – Unifying Technology Due Diligence Workflows
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '900px', margin: '12px auto 0', fontSize: '14px' }}>
                    Alethi AI unifies fragmented technology diligence workflows into a single, verifiable system for investors, advisors, and operators across the full deal lifecycle.
                </p>
            </div>

            {/* Workflow Matrix */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px' }}>
                {stages.map((stage, index) => (
                    <React.Fragment key={index}>
                        <div style={{
                            flex: 1,
                            maxWidth: '300px',
                            textAlign: 'center'
                        }}>
                            {/* Arc Header */}
                            <div style={{
                                height: '60px',
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
                                <h3 style={{ fontSize: '16px', fontWeight: '700', margin: 0 }}>{stage.title}</h3>
                            </div>

                            <div style={{ fontSize: '10px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '4px' }}>Primary Users</div>
                            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', minHeight: '24px' }}>{stage.primaryUsers}</div>

                            <div style={{ fontSize: '10px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '4px' }}>Decision Requirement</div>
                            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '16px', minHeight: '24px', fontStyle: 'italic' }}>"{stage.decisionReq}"</div>

                            {/* Solutions Pills */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {stage.solutions.map((solution, sIndex) => (
                                    <div key={sIndex} style={{
                                        background: 'var(--color-text-dark)',
                                        color: 'white',
                                        padding: '8px 12px',
                                        borderRadius: '24px',
                                        fontSize: '11px',
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
                                    width: '28px',
                                    height: '28px',
                                    background: 'var(--color-primary)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <ChevronRight color="white" size={16} />
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <div style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #059669 100%)',
                color: 'white',
                padding: '16px 24px',
                borderRadius: '10px',
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0, fontSize: '13px', fontWeight: '500' }}>
                    Alethi AI integrates screening, diligence, and monitoring into a single verifiable workflow, combining agentic AI execution with human-in-the-loop oversight to deliver audit-grade validation and confident execution.
                </p>
            </div>

            <p className="small-text text-center mt-12" style={{ color: 'var(--color-text-secondary)', fontSize: '10px' }}>
                * Preliminary Tech Diligence is Alethi AI’s pre-seed go-to-market wedge solution
            </p>
        </div>
    )
}

export default Slide06ProductEcosystem
