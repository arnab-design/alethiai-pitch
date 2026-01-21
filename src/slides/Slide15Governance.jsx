import React from 'react'

function Slide15Governance() {
    const steps = [
        {
            number: '1',
            title: 'Evidence Discovery',
            description: 'Automated collection from multiple sources'
        },
        {
            number: '2',
            title: 'Deterministic Labeling',
            description: 'Rule-based classification and tagging'
        },
        {
            number: '3',
            title: 'Verification Logic',
            description: 'Multi-source cross-validation'
        },
        {
            number: '4',
            title: 'Continuous Assurance',
            description: 'Ongoing monitoring and alerting'
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>Technology Governance</span>
                <h2 className="headline">Intelligence Development Matrix</h2>
            </div>

            <div className="grid-4">
                {steps.map((step, index) => (
                    <div key={index} className="card text-center">
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: 'var(--color-primary)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '700',
                            fontSize: '20px',
                            margin: '0 auto 16px'
                        }}>
                            {step.number}
                        </div>
                        <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{step.title}</h4>
                        <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>{step.description}</p>
                    </div>
                ))}
            </div>

            <div className="card mt-48" style={{ padding: '24px', textAlign: 'center', background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFDF5 100%)', borderLeft: '4px solid #F59E0B' }}>
                <p style={{ fontWeight: '500', color: 'var(--color-text-dark)' }}>
                    <span style={{ marginRight: '8px' }}>⚠️</span>
                    Focus on avoiding generative hallucination through deterministic validation
                </p>
            </div>
        </div>
    )
}

export default Slide15Governance
