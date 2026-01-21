import React from 'react'
import { Globe, ArrowRight, FileText, Clock, CheckCircle } from 'lucide-react'

function Slide06HowItWorks() {
    const reportSections = [
        'Investment Thesis & Verdict',
        'Technology Maturity',
        'Architecture & Modularity',
        'Security & Compliance',
        'AI Authenticity',
        'Infrastructure Maturity',
        'Organization & Ecosystem'
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">How It Works</span> – From Domain to Due Diligence in Hours
                </h2>
            </div>

            {/* Input → Output Flow */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '32px',
                marginBottom: '32px'
            }}>
                {/* Input */}
                <div style={{
                    background: 'var(--color-gray-100)',
                    borderRadius: '16px',
                    padding: '24px',
                    textAlign: 'center',
                    width: '200px'
                }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'var(--color-primary)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px'
                    }}>
                        <Globe color="white" size={32} />
                    </div>
                    <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>Input</div>
                    <div style={{
                        background: 'white',
                        border: '2px solid var(--color-gray-200)',
                        borderRadius: '8px',
                        padding: '8px 12px',
                        fontFamily: 'monospace',
                        fontSize: '14px'
                    }}>
                        vercel.com
                    </div>
                </div>

                {/* Arrow with time */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        background: 'var(--color-primary)',
                        padding: '12px 24px',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'white',
                        fontWeight: '600'
                    }}>
                        <Clock size={18} />
                        ~4 hours
                        <ArrowRight size={18} />
                    </div>
                    <div style={{
                        fontSize: '12px',
                        color: 'var(--color-text-secondary)',
                        marginTop: '8px'
                    }}>
                        vs. 4 weeks traditional
                    </div>
                </div>

                {/* Output */}
                <div style={{
                    background: 'var(--color-gray-100)',
                    borderRadius: '16px',
                    padding: '24px',
                    width: '320px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: 'var(--color-primary)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <FileText color="white" size={24} />
                        </div>
                        <div>
                            <div style={{ fontWeight: '700', fontSize: '16px' }}>Output</div>
                            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>M&A Tech DD Report</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {reportSections.map((section, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '12px',
                                color: 'var(--color-text-dark)'
                            }}>
                                <CheckCircle size={14} color="var(--color-primary)" />
                                {section}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats row */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '48px',
                marginBottom: '24px'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--color-primary)' }}>148</div>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Attributes Analyzed</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--color-primary)' }}>0</div>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>VDR Access Needed</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--color-primary)' }}>100%</div>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Evidence-Linked</div>
                </div>
            </div>

            <div style={{
                borderLeft: '4px solid var(--color-primary)',
                padding: '16px 20px',
                background: 'var(--color-gray-100)',
                borderRadius: '0 8px 8px 0',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <p className="body-text" style={{ margin: 0, fontSize: '14px' }}>
                    <strong>Stage 1:</strong> Automated public signal analysis. No access to target systems required. Reports delivered before the first call.
                </p>
            </div>
        </div>
    )
}

export default Slide06HowItWorks
