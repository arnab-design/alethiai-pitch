import React from 'react'
import { Globe, ArrowRight, FileText, Clock, CheckCircle, Zap, Lock } from 'lucide-react'

function Slide06HowItWorks() {
    const stage1Sections = [
        'Investment Thesis & Verdict',
        'Technology Maturity',
        'Architecture Assessment',
        'Security & Compliance',
        'AI Authenticity',
        'Infrastructure Analysis',
        'Organization & Ecosystem'
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-20">
                <h2 className="headline">
                    <span className="highlight">How It Works</span> – From Domain to Due Diligence in 1 Hour
                </h2>
            </div>

            {/* Two-stage flow */}
            <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
                {/* Stage 1 */}
                <div style={{
                    flex: 1,
                    background: 'var(--color-gray-100)',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '2px solid var(--color-primary)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <div style={{
                            background: 'var(--color-primary)',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '700'
                        }}>
                            STAGE 1
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: '600' }}>Public Signal Analysis</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: 'var(--color-primary)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Globe color="white" size={24} />
                        </div>
                        <div>
                            <div style={{ fontFamily: 'monospace', fontSize: '16px', fontWeight: '600' }}>vercel.com</div>
                            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Just enter a domain</div>
                        </div>
                        <div style={{
                            background: 'var(--color-primary)',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '13px'
                        }}>
                            <Zap size={14} />
                            ~1 hour
                        </div>
                    </div>

                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>
                        <strong>No access required.</strong> Automated scan of 148 public signals.
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {stage1Sections.map((section, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                fontSize: '10px',
                                background: 'white',
                                padding: '4px 8px',
                                borderRadius: '12px',
                                color: 'var(--color-text-dark)'
                            }}>
                                <CheckCircle size={10} color="var(--color-primary)" />
                                {section}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrow */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowRight size={24} color="var(--color-primary)" />
                </div>

                {/* Stage 2 */}
                <div style={{
                    flex: 1,
                    background: 'var(--color-gray-100)',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '2px dashed var(--color-gray-300)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <div style={{
                            background: 'var(--color-text-dark)',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '700'
                        }}>
                            STAGE 2
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: '600' }}>Private Data Augmentation</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: 'var(--color-text-dark)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Lock color="white" size={24} />
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                            When target grants access, insights are <strong>augmented</strong> with private data
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {['GitHub/GitLab', 'AWS/Azure/GCP', 'Jira', 'Confluence/Notion'].map((source, i) => (
                            <div key={i} style={{
                                fontSize: '11px',
                                background: 'var(--color-text-dark)',
                                color: 'white',
                                padding: '6px 10px',
                                borderRadius: '16px'
                            }}>
                                {source}
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '12px',
                        fontSize: '11px',
                        color: 'var(--color-primary)',
                        fontWeight: '600'
                    }}>
                        → Deeper code analysis, dependency audit, full compliance verification
                    </div>
                </div>
            </div>

            {/* Bottom stats */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '48px',
                marginBottom: '16px'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--color-primary)' }}>1 hr</div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Stage 1 Delivery</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--color-primary)' }}>148</div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Attributes Analyzed</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--color-primary)' }}>0</div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>VDR Access Needed</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--color-text-dark)' }}>4 wks</div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Traditional Consultants</div>
                </div>
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
                    <strong>Stage 1 reports delivered before the first management call.</strong> No target cooperation required — just enter a domain.
                </p>
            </div>
        </div>
    )
}

export default Slide06HowItWorks
