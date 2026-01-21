import React from 'react'

function Slide13ProductDeepDive() {
    const products = [
        { title: 'Target Search Intelligence', description: 'Technology profile search and filtering for target identification' },
        { title: 'Confirmatory Tech DD Report', description: 'Comprehensive technology due diligence with evidence-backed findings' },
        { title: 'Post-Close Integration Tracker', description: 'Continuous monitoring of integration milestones and risk indicators' },
        { title: 'Pre-LOI Risk Screening', description: 'External signal analysis for early-stage technology risk assessment' },
        { title: 'Pre-Close Integration Blueprint', description: 'Technology integration planning and dependency mapping' },
        { title: 'Compliance & Risk Monitoring', description: 'Ongoing technology compliance and regulatory risk tracking' }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-32">
                <h2 className="headline">
                    <span className="highlight">Product</span> – Technology Assurance Solutions
                </h2>
                <p className="body-text mt-16" style={{ maxWidth: '900px', margin: '16px auto 0' }}>
                    As deal volume increases and execution risk rises, <strong>stakeholders require consistent, evidence-based technology insight</strong> across origination, diligence, and ongoing operations to support confident decision-making.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                marginBottom: '32px'
            }}>
                {products.map((product, index) => (
                    <div key={index} style={{
                        background: 'var(--color-gray-100)',
                        borderRadius: '12px',
                        overflow: 'hidden'
                    }}>
                        {/* Black header label */}
                        <div style={{
                            background: 'var(--color-text-dark)',
                            color: 'white',
                            padding: '10px 16px',
                            fontSize: '13px',
                            fontWeight: '600'
                        }}>
                            {product.title}
                        </div>
                        {/* Product mockup placeholder */}
                        <div style={{
                            height: '100px',
                            background: 'linear-gradient(180deg, #f8f8fa 0%, #ececf0 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '16px'
                        }}>
                            <p className="small-text" style={{ color: 'var(--color-text-secondary)', textAlign: 'center', margin: 0 }}>
                                {product.description}
                            </p>
                        </div>
                    </div>
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
                    Alethi AI delivers <strong>modular, workflow-aligned assurance solutions</strong> designed to scale coverage as deal volume grows and integration and regulatory complexity increases.
                </p>
            </div>
        </div>
    )
}

export default Slide13ProductDeepDive
