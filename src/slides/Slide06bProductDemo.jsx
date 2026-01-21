import React from 'react'
import { AlertTriangle, CheckCircle, XCircle, Shield, Cpu, Building, Brain, Server, Users } from 'lucide-react'

function Slide06bProductDemo() {
    const signalRatings = [
        { signal: 'Technology Modernity', rating: 4, icon: Cpu },
        { signal: 'Architecture Quality', rating: 2, icon: Server },
        { signal: 'AI Authenticity', rating: 4, icon: Brain },
        { signal: 'Security Posture', rating: 3, icon: Shield },
        { signal: 'Compliance Readiness', rating: 3, icon: Building }
    ]

    const keyFindings = {
        strengths: [
            'Modern frontend (Next.js v19.2, React 19)',
            'Strong AI integration (OpenAI, Anthropic)',
            '100% CDN cache hit rate'
        ],
        concerns: [
            'Backend architecture unclear',
            'Security headers 55/100 (missing CSP)',
            'FedRAMP status ambiguous'
        ]
    }

    return (
        <div className="slide-content">
            <div className="text-center mb-20">
                <h2 className="headline">
                    <span className="highlight">Sample Output</span> – Target Intelligence Report
                </h2>
                <p className="body-text mt-8" style={{ maxWidth: '600px', margin: '8px auto 0' }}>
                    Real report generated for <strong>Vercel</strong> in ~1 hour from public signals only
                </p>
            </div>

            <div style={{ display: 'flex', gap: '24px', marginBottom: '20px' }}>
                {/* Left: Executive Summary */}
                <div style={{
                    flex: 1,
                    background: 'var(--color-gray-100)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '2px solid var(--color-gray-200)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <h3 style={{ fontSize: '15px', fontWeight: '700', margin: 0 }}>Executive Verdict</h3>
                        <div style={{
                            background: '#F59E0B',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}>
                            <AlertTriangle size={12} />
                            PROCEED WITH CAUTION
                        </div>
                    </div>

                    {/* Signal Ratings */}
                    <div style={{ marginBottom: '16px' }}>
                        {signalRatings.map((item, i) => {
                            const IconComponent = item.icon
                            return (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '6px 0',
                                    borderBottom: i < signalRatings.length - 1 ? '1px solid var(--color-gray-200)' : 'none'
                                }}>
                                    <IconComponent size={14} color="var(--color-primary)" style={{ marginRight: '8px' }} />
                                    <span style={{ flex: 1, fontSize: '12px' }}>{item.signal}</span>
                                    <div style={{ display: 'flex', gap: '2px' }}>
                                        {[1, 2, 3, 4, 5].map(n => (
                                            <div key={n} style={{
                                                width: '12px',
                                                height: '12px',
                                                borderRadius: '2px',
                                                background: n <= item.rating ? 'var(--color-primary)' : 'var(--color-gray-200)'
                                            }} />
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Right: Key Findings */}
                <div style={{ flex: 1 }}>
                    {/* Strengths */}
                    <div style={{
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid #10B981',
                        borderRadius: '10px',
                        padding: '14px',
                        marginBottom: '12px'
                    }}>
                        <h4 style={{
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#10B981',
                            marginBottom: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            <CheckCircle size={14} /> Key Strengths
                        </h4>
                        {keyFindings.strengths.map((item, i) => (
                            <div key={i} style={{ fontSize: '11px', padding: '3px 0', color: 'var(--color-text-dark)' }}>
                                • {item}
                            </div>
                        ))}
                    </div>

                    {/* Concerns */}
                    <div style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid #EF4444',
                        borderRadius: '10px',
                        padding: '14px'
                    }}>
                        <h4 style={{
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#EF4444',
                            marginBottom: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            <XCircle size={14} /> Critical Concerns
                        </h4>
                        {keyFindings.concerns.map((item, i) => (
                            <div key={i} style={{ fontSize: '11px', padding: '3px 0', color: 'var(--color-text-dark)' }}>
                                • {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Report sections preview */}
            <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '20px'
            }}>
                {['1. Investment Thesis', '2. Tech Maturity', '3. Architecture', '4. Security & Compliance', '5. AI Authenticity', '6. Infrastructure', '7. Org & Ecosystem'].map((section, i) => (
                    <div key={i} style={{
                        background: 'var(--color-text-dark)',
                        color: 'white',
                        padding: '6px 14px',
                        borderRadius: '16px',
                        fontSize: '11px',
                        fontWeight: '500'
                    }}>
                        {section}
                    </div>
                ))}
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
                    <strong>148 attributes analyzed</strong> across technology, security, compliance, and organization — all from public signals, before any management calls.
                </p>
            </div>
        </div>
    )
}

export default Slide06bProductDemo
