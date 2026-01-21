import React from 'react'
import { Check } from 'lucide-react'

function Slide07WedgeSolution() {
    const outcomes = [
        'External signal analysis without target access',
        'Technology stack detection and mapping',
        'Security posture assessment',
        'Risk scoring and prioritization'
    ]

    const impacts = [
        'Earlier go / no-go decisions',
        'Reduced wasted diligence spend',
        'Informed negotiation positioning'
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-32">
                <h2 className="headline">
                    <span className="highlight">Wedge Solution</span> – Pre-LOI Technology Risk Screening
                </h2>
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
                        <span style={{ fontWeight: '600', color: '#92400E' }}>Proceed with Caution</span>
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
                            <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)' }}>94%</div>
                            <div className="small-text">Uptime Score</div>
                        </div>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                            <div style={{ fontSize: '24px', fontWeight: '700', color: '#EF4444' }}>3</div>
                            <div className="small-text">Critical CVEs</div>
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
                margin: '32px auto 0'
            }}>
                <p className="body-text" style={{ margin: 0 }}>
                    Pre-LOI screening provides <strong>early risk visibility</strong> without requiring target cooperation, enabling better investment decisions.
                </p>
            </div>
        </div>
    )
}

export default Slide07WedgeSolution
