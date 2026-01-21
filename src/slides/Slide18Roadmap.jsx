import React from 'react'

function Slide18Roadmap() {
    const phases = [
        {
            quarter: 'Q1-Q2 2026',
            title: 'Build',
            items: ['SOC2 compliance', 'Core workflows', 'Initial integrations', 'Beta customers']
        },
        {
            quarter: 'Q3 2026',
            title: 'Prove',
            items: ['Benchmark engine', 'Repeatable channel', 'Case studies', 'Reference customers']
        },
        {
            quarter: 'Q4 2026',
            title: 'Expand',
            items: ['Scaling throughput', 'Seed proof points', 'Geographic expansion', 'Enterprise features']
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>Roadmap</span>
                <h2 className="headline">2026 Milestones</h2>
            </div>

            <div className="roadmap-timeline">
                {phases.map((phase, index) => (
                    <div key={index} className="roadmap-phase">
                        <div className="phase-quarter">{phase.quarter}</div>
                        <div className="phase-title">{phase.title}</div>
                        <ul className="phase-items">
                            {phase.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slide18Roadmap
