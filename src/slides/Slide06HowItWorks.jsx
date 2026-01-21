import React from 'react'
import { Globe, Lock, Zap, Search, Shield, FileCheck, GitBranch, Activity, Scale } from 'lucide-react'

function Slide06HowItWorks() {
    const publicIntelModules = [
        { name: 'Target Search Intelligence', desc: 'Profile search & filtering', icon: Search },
        { name: 'Pre-LOI Risk Screening', desc: 'External signal analysis', icon: Shield }
    ]

    const fullAuditModules = [
        { name: 'Confirmatory Tech DD Report', desc: 'Evidence-backed findings', icon: FileCheck },
        { name: 'Pre-Close Integration Blueprint', desc: 'Dependency mapping', icon: GitBranch },
        { name: 'Post-Close Integration Tracker', desc: 'Milestone monitoring', icon: Activity },
        { name: 'Compliance & Risk Monitoring', desc: 'Regulatory tracking', icon: Scale }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-20">
                <h2 className="headline">
                    <span className="highlight">How It Works</span> – Two Scan Types, Six Modules
                </h2>
                <p className="body-text mt-8" style={{ maxWidth: '700px', margin: '8px auto 0' }}>
                    Our AI-powered platform delivers <strong>modular, workflow-aligned</strong> technology assurance across the entire deal lifecycle.
                </p>
            </div>

            <div style={{ display: 'flex', gap: '24px', marginBottom: '20px' }}>
                {/* Public Intelligence */}
                <div style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 100%)',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '2px solid var(--color-primary)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            background: 'var(--color-primary)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Globe color="white" size={22} />
                        </div>
                        <div>
                            <div style={{ fontSize: '17px', fontWeight: '700' }}>Public Intelligence</div>
                            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>No target access required</div>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '16px',
                        padding: '12px',
                        background: 'white',
                        borderRadius: '10px'
                    }}>
                        <div style={{ textAlign: 'center', flex: 1 }}>
                            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Input</div>
                            <div style={{ fontFamily: 'monospace', fontSize: '13px', fontWeight: '600' }}>domain.com</div>
                        </div>
                        <div style={{ textAlign: 'center', flex: 1, borderLeft: '1px solid var(--color-gray-200)', paddingLeft: '12px' }}>
                            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Delivery</div>
                            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                <Zap size={12} /> ~1 hour
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', flex: 1, borderLeft: '1px solid var(--color-gray-200)', paddingLeft: '12px' }}>
                            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Signals</div>
                            <div style={{ fontSize: '13px', fontWeight: '600' }}>148+</div>
                        </div>
                    </div>

                    <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '10px', color: 'var(--color-primary)' }}>
                        Powers 2 Modules:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {publicIntelModules.map((mod, i) => {
                            const IconComponent = mod.icon
                            return (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    background: 'white',
                                    padding: '10px 12px',
                                    borderRadius: '8px'
                                }}>
                                    <IconComponent size={16} color="var(--color-primary)" />
                                    <div>
                                        <div style={{ fontSize: '12px', fontWeight: '600' }}>{mod.name}</div>
                                        <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>{mod.desc}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Full Audit */}
                <div style={{
                    flex: 1.2,
                    background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.08) 0%, rgba(17, 24, 39, 0.02) 100%)',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '2px solid var(--color-text-dark)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            background: 'var(--color-text-dark)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Lock color="white" size={22} />
                        </div>
                        <div>
                            <div style={{ fontSize: '17px', fontWeight: '700' }}>Full Audit</div>
                            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>With private data access</div>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '16px',
                        padding: '12px',
                        background: 'white',
                        borderRadius: '10px'
                    }}>
                        {['GitHub/GitLab', 'AWS/Azure/GCP', 'Jira', 'Confluence'].map((src, i) => (
                            <div key={i} style={{
                                fontSize: '10px',
                                background: 'var(--color-text-dark)',
                                color: 'white',
                                padding: '4px 10px',
                                borderRadius: '12px',
                                fontWeight: '500'
                            }}>
                                {src}
                            </div>
                        ))}
                    </div>

                    <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '10px', color: 'var(--color-text-dark)' }}>
                        Powers 4 Modules:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        {fullAuditModules.map((mod, i) => {
                            const IconComponent = mod.icon
                            return (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'white',
                                    padding: '10px 12px',
                                    borderRadius: '8px'
                                }}>
                                    <IconComponent size={14} color="var(--color-text-dark)" />
                                    <div>
                                        <div style={{ fontSize: '11px', fontWeight: '600' }}>{mod.name}</div>
                                        <div style={{ fontSize: '9px', color: 'var(--color-text-secondary)' }}>{mod.desc}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div style={{
                borderLeft: '4px solid var(--color-primary)',
                padding: '14px 18px',
                background: 'var(--color-gray-100)',
                borderRadius: '0 8px 8px 0',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <p className="body-text" style={{ margin: 0, fontSize: '13px' }}>
                    <strong>Public Intelligence reports delivered in ~1 hour</strong> — before your first management call. Full Audit unlocks deeper insights when target grants access.
                </p>
            </div>
        </div>
    )
}

export default Slide06HowItWorks
