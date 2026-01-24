import React from 'react'
import { Cpu, CheckCircle, Lightbulb } from 'lucide-react'

function Slide14Architecture() {
    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Technology Architecture</span> – Enterprise-Grade System
                </h2>
                <p className="body-text mt-16" style={{ maxWidth: '900px', margin: '16px auto 0' }}>
                    Alethi AI <strong>converts raw, observable evidence into attribute-level outcomes and consolidated insights</strong> using deterministic rules, isolation boundaries, and audit-grade traceability.
                </p>
            </div>

            <p className="label mb-16 text-center">Alethi AI Agentic Workflow Summary</p>

            {/* Architecture Diagram */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', marginBottom: '24px' }}>
                {/* Agents */}
                <div style={{ textAlign: 'center', flex: 1, maxWidth: '280px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
                        {[1, 2, 3].map((i) => (
                            <div key={i} style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '12px',
                                background: 'var(--color-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Cpu color="white" size={28} />
                            </div>
                        ))}
                    </div>
                    <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>Agents</h4>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        Isolated attribute <strong>agents execute single-purpose collection</strong> and scoring routines against observable signals, producing structured, evidence-linked outputs.
                    </p>
                </div>

                {/* Arrow */}
                <div style={{ fontSize: '24px', color: 'var(--color-primary)' }}>→</div>

                {/* Attributes */}
                <div style={{ textAlign: 'center', flex: 1, maxWidth: '280px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                        {['Passed', 'Failed', 'Partial', 'Unknown', 'Pending'].map((state, i) => (
                            <div key={i} style={{
                                padding: '6px 12px',
                                borderRadius: '16px',
                                background: state === 'Passed' ? '#10B981' : state === 'Failed' ? '#EF4444' : state === 'Partial' ? '#F59E0B' : '#9CA3AF',
                                color: 'white',
                                fontSize: '11px',
                                fontWeight: '600'
                            }}>
                                {state}
                            </div>
                        ))}
                    </div>
                    <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>Attributes</h4>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        Each <strong>attribute resolves to an explicit state</strong> (Passed, Failed, Partial, Unknown, Pending). Agents cannot influence one another, enabling targeted re-runs and auditability.
                    </p>
                </div>

                {/* Arrow */}
                <div style={{ fontSize: '24px', color: 'var(--color-primary)' }}>→</div>

                {/* Insight */}
                <div style={{ textAlign: 'center', flex: 1, maxWidth: '280px' }}>
                    <div style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        background: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px'
                    }}>
                        <Lightbulb color="white" size={36} />
                    </div>
                    <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>Insight</h4>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        Attribute-level outputs are aggregated and <strong>normalized into a unified intelligence layer</strong> that preserves uncertainty and does not introduce new reasoning.
                    </p>
                </div>
            </div>

            <div style={{
                border: '2px solid var(--color-primary)',
                padding: '20px 24px',
                background: 'white',
                borderRadius: '12px',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <p className="body-text text-center" style={{ margin: 0 }}>
                    A <strong>modular, scalable, audit-grade system</strong> where every conclusion is independently derived, explicitly stated, and fully traceable to source evidence.
                </p>
            </div>
        </div>
    )
}

export default Slide14Architecture
