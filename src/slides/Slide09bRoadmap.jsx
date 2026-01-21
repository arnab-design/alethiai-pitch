import React from 'react'
import { Wrench, FlaskConical, Rocket } from 'lucide-react'

function Slide09bRoadmap() {
    const phases = [
        {
            name: 'BUILD',
            months: ['Jan', 'Feb', 'Mar', 'Apr'],
            color: 'var(--color-primary)',
            icon: Wrench,
            focus: 'Foundation'
        },
        {
            name: 'PROVE',
            months: ['May', 'Jun', 'Jul', 'Aug'],
            color: '#F59E0B',
            icon: FlaskConical,
            focus: 'Validation'
        },
        {
            name: 'EXPAND',
            months: ['Sep', 'Oct', 'Nov', 'Dec'],
            color: '#8B5CF6',
            icon: Rocket,
            focus: 'Scale'
        }
    ]

    const milestones = [
        { month: 'Jan', items: ['Core agent framework', 'Engineering hires'] },
        { month: 'Feb', items: ['Pre-LOI screening MVP', 'Sales playbook'] },
        { month: 'Mar', items: ['First pilot signed', 'SOC 2 prep begins'] },
        { month: 'Apr', items: ['3 LOI-backed pilots', 'Advisory board'] },
        { month: 'May', items: ['VDR integration', 'Pilot feedback loop'] },
        { month: 'Jun', items: ['First paying customer', 'Case study #1'] },
        { month: 'Jul', items: ['Benchmark engine', 'Sales hire'] },
        { month: 'Aug', items: ['Second paying customer', 'Conference presence'] },
        { month: 'Sep', items: ['SOC 2 certification', 'UK market entry'] },
        { month: 'Oct', items: ['Post-close monitoring', 'Channel partner #1'] },
        { month: 'Nov', items: ['API ecosystem beta', 'Inbound marketing'] },
        { month: 'Dec', items: ['Series A positioning', '$200K+ ARR target'] }
    ]

    const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const getPhaseForMonth = (month) => {
        for (const phase of phases) {
            if (phase.months.includes(month)) return phase
        }
        return phases[0]
    }

    return (
        <div className="slide-content">
            <div className="text-center mb-16">
                <h2 className="headline">
                    <span className="highlight">12-Month Plan</span> – What We'll Deliver With $1M
                </h2>
            </div>

            {/* Phase legend */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '20px' }}>
                {phases.map((phase, i) => {
                    const IconComponent = phase.icon
                    return (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '6px',
                                background: phase.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <IconComponent size={14} color="white" />
                            </div>
                            <div>
                                <div style={{ fontSize: '13px', fontWeight: '700', color: phase.color }}>{phase.name}</div>
                                <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>{phase.focus}</div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Timeline grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '4px',
                marginBottom: '16px'
            }}>
                {allMonths.map((month, i) => {
                    const phase = getPhaseForMonth(month)
                    const milestone = milestones.find(m => m.month === month)
                    return (
                        <div key={i} style={{
                            background: 'var(--color-gray-100)',
                            borderRadius: '8px',
                            overflow: 'hidden'
                        }}>
                            {/* Month header */}
                            <div style={{
                                background: phase.color,
                                color: 'white',
                                padding: '6px 4px',
                                textAlign: 'center',
                                fontSize: '11px',
                                fontWeight: '700'
                            }}>
                                {month}
                            </div>
                            {/* Milestones */}
                            <div style={{ padding: '8px 6px', minHeight: '70px' }}>
                                {milestone?.items.map((item, j) => (
                                    <div key={j} style={{
                                        fontSize: '8px',
                                        marginBottom: '4px',
                                        lineHeight: '1.3',
                                        color: 'var(--color-text-dark)'
                                    }}>
                                        • {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Key outcomes row */}
            <div style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '16px'
            }}>
                {phases.map((phase, i) => (
                    <div key={i} style={{
                        flex: 1,
                        background: phase.color,
                        color: 'white',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '11px', opacity: 0.9, marginBottom: '4px' }}>
                            {phase.name} Outcome
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: '700' }}>
                            {i === 0 && '3 LOI-backed pilots'}
                            {i === 1 && 'First paying customers'}
                            {i === 2 && 'Series A ready + SOC 2'}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                borderLeft: '4px solid var(--color-primary)',
                padding: '12px 16px',
                background: 'var(--color-gray-100)',
                borderRadius: '0 8px 8px 0',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <p className="body-text" style={{ margin: 0, fontSize: '13px' }}>
                    <strong>12 months of runway</strong> to achieve product-market fit and position for <strong>Series A at $3-5M</strong>.
                </p>
            </div>
        </div>
    )
}

export default Slide09bRoadmap
