import React from 'react'
import { Check } from 'lucide-react'

function Slide07WedgeSolution() {
    const outcomes = [
        'Technical health scorecard',
        'Scalability assessment',
        'Compliance gap analysis',
        'Risk-adjusted valuation inputs'
    ]

    const impacts = [
        'Earlier go / no-go decisions',
        'Fewer late-stage re-trades',
        'Lower diligence spend'
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Wedge Solution</span> – Preliminary Tech Diligence
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '900px', margin: '12px auto 0', fontSize: '14px' }}>
                    Underwrite technology risk before LOI - quickly, discreetly, and evidence-linked - to <strong>strengthen pricing conviction, preserve leverage, and reduce wasted diligence spend.</strong>
                </p>
            </div>

            <div className="grid-2" style={{ gap: '48px', alignItems: 'start' }}>
                {/* Platform Mockup */}
                <div style={{
                    background: 'var(--color-gray-100)',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid var(--color-gray-200)'
                }}>
                    {/* Header */}
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27CA40' }}></div>
                    </div>

                    {/* Alert Box */}
                    <div style={{
                        background: '#FEF3C7',
                        border: '1px solid #F59E0B',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <span style={{ fontSize: '20px' }}>⚠️</span>
                        <span style={{ fontWeight: '600', color: '#92400E' }}>Proceed with Caution (High Risk)</span>
                    </div>

                    {/* Metrics Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                            <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)' }}>B</div>
                            <div className="small-text">Security Score</div>
                        </div>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                            <div style={{ fontSize: '24px', fontWeight: '700', color: '#F59E0B' }}>1</div>
                            <div className="small-text">GPL Violations</div>
                        </div>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                            <div style={{ fontSize: '24px', fontWeight: '700', color: '#EF4444' }}>2/4</div>
                            <div className="small-text">CIM Accuracy</div>
                        </div>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                            <div style={{ fontSize: '24px', fontWeight: '700', color: '#EF4444' }}>F</div>
                            <div className="small-text">VDR Health</div>
                        </div>
                    </div>
                    <div style={{
                        background: 'white',
                        padding: '12px',
                        borderRadius: '8px',
                        marginTop: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div className="small-text" style={{ fontWeight: '600' }}>Cyber Risk Posture</div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-primary)' }}>B</div>
                            <div style={{ fontSize: '14px', color: '#6B7280' }}>72/100</div>
                        </div>
                    </div>
                </div>

                {/* Outcomes & Impact */}
                <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--color-primary)' }}>Outcomes</h3>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                        {outcomes.map((item, index) => (
                            <li key={index} style={{
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'flex-start',
                                padding: '8px 0'
                            }}>
                                <Check size={18} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <span className="body-text" style={{ fontSize: '15px' }}>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--color-primary)' }}>Impact</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {impacts.map((item, index) => (
                            <li key={index} style={{
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'flex-start',
                                padding: '8px 0'
                            }}>
                                <Check size={18} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <span className="body-text" style={{ fontSize: '15px' }}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div style={{
                borderLeft: '4px solid var(--color-primary)',
                padding: '20px 24px',
                background: 'var(--color-gray-100)',
                borderRadius: '0 8px 8px 0',
                maxWidth: '900px',
                margin: '24px auto 0'
            }}>
                <p className="body-text" style={{ margin: 0 }}>
                    Pre-LOI Risk Screening is <strong>Alethi AI’s wedge entry product</strong>, driving pull-through into confirmatory diligence and execution workflows.
                </p>
            </div>

            <p className="small-text text-center mt-12" style={{ color: 'var(--color-text-secondary)', fontSize: '10px' }}>
                Primary users: Financial investors · Corporate development · M&A advisors · Buy-side banks · Tech DD firms · M&A law firms · VDRs
            </p>
        </div >
    )
}

export default Slide07WedgeSolution
