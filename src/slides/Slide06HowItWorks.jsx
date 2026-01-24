import React from 'react'
import { Globe, Lock, Zap, Search, Shield, FileCheck, GitBranch, Activity, Scale } from 'lucide-react'

function Slide06HowItWorks() {
    const publicIntelModules = [
        { name: 'Target Search Intelligence', desc: 'Profile search & filtering', icon: Search },
        { name: 'Preliminary Tech Diligence', desc: 'External signal analysis', icon: Shield }
    ]

    const deepDiligenceModules = [
        { name: 'Confirmatory Tech DD Report', desc: 'Evidence-backed findings', icon: FileCheck },
        { name: 'Pre-Close Integration Blueprint', desc: 'Dependency mapping', icon: GitBranch },
        { name: 'Post-Close Integration Tracker', desc: 'Milestone monitoring', icon: Activity },
        { name: 'Compliance & Risk Monitoring', desc: 'Regulatory tracking', icon: Scale }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-8">
                <h2 className="headline">
                    <span className="highlight">How It Works</span> – Two Scan Types, Six Modules
                </h2>
                <p className="body-text mt-4" style={{ maxWidth: '700px', margin: '8px auto 0' }}>
                    Our AI-powered platform delivers <strong>modular, workflow-aligned</strong> technology assurance across the entire deal lifecycle.
                </p>
            </div>

            <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
                {/* Target Intelligence */}
                <div style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 100%)',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '2px solid var(--color-primary)',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            background: 'var(--color-primary)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <Globe color="white" size={22} />
                        </div>
                        <div>
                            <div style={{ fontSize: '17px', fontWeight: '700' }}>Target Intelligence</div>
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
                    </div>

                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '10px', color: 'var(--color-primary)' }}>
                            Early-Stage Modules:
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
                </div>

                {/* Deep Diligence */}
                <div style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.08) 0%, rgba(17, 24, 39, 0.02) 100%)',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '2px solid var(--color-text-dark)',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            background: 'var(--color-text-dark)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <Lock color="white" size={22} />
                        </div>
                        <div>
                            <div style={{ fontSize: '17px', fontWeight: '700' }}>Deep Diligence</div>
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
                        {['GitHub/GitLab', 'AWS/Azure', 'Jira/Linear', 'Confluence/Notion', 'Dynatrace'].map((src, i) => (
                            <div key={i} style={{
                                fontSize: '10px',
                                background: 'var(--color-text-dark)',
                                color: 'white',
                                padding: '4px 8px',
                                borderRadius: '12px',
                                fontWeight: '500'
                            }}>
                                {src}
                            </div>
                        ))}
                    </div>

                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '10px', color: 'var(--color-text-dark)' }}>
                            Late-Stage Modules:
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {deepDiligenceModules.map((mod, i) => {
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
                                        <IconComponent size={16} color="var(--color-text-dark)" />
                                        <div>
                                            <div style={{ fontSize: '12px', fontWeight: '600' }}>{mod.name}</div>
                                            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>{mod.desc}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: '16px',
            }}>
                <p className="body-text" style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                    <strong>Target Intelligence</strong> informs the search, while <strong>Deep Diligence</strong> verifies the details — providing comprehensive assurance.
                </p>
            </div>
        </div>
    )
}

export default Slide06HowItWorks
