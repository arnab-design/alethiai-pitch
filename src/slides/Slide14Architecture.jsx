import React from 'react'

function Slide14Architecture() {
    const steps = [
        { name: 'Orchestrate', icon: '🎯' },
        { name: 'Collect', icon: '📥' },
        { name: 'Standardize', icon: '📐' },
        { name: 'Validate', icon: '✓' },
        { name: 'Contextualize', icon: '🔗' },
        { name: 'Verify', icon: '🔒' },
        { name: 'Present', icon: '📊' }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>Technology Architecture</span>
                <h2 className="headline">Enterprise-Grade System</h2>
            </div>

            <div className="mb-48">
                <h3 className="text-center mb-24" style={{ fontSize: '18px', fontWeight: '600' }}>Agentic Workflow</h3>
                <div className="architecture-flow">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className={`arch-step ${index === 0 ? 'primary' : ''}`}>
                                <span>{step.icon}</span>
                                <span>{step.name}</span>
                            </div>
                            {index < steps.length - 1 && <span className="arch-arrow">→</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="grid-2" style={{ gap: '32px' }}>
                <div className="card">
                    <h4 style={{ marginBottom: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>⚙️</span>
                        Deterministic Rules
                    </h4>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        Structured logic for consistent, repeatable analysis across all engagements with full audit trails.
                    </p>
                </div>

                <div className="card">
                    <h4 style={{ marginBottom: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--color-primary)' }}>📋</span>
                        Audit-Grade Traceability
                    </h4>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        Every finding linked to source evidence with complete chain of custody documentation.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Slide14Architecture
