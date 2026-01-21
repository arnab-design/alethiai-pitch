import React from 'react'
import { Linkedin } from 'lucide-react'

function Slide08Team() {
    const team = [
        {
            name: 'Arnab Tagore',
            role: 'CEO, Founder',
            credentials: ['Ex-McKinsey Digital', '15+ years enterprise data architecture', 'Led tech DD for $2B+ in transactions'],
            linkedin: '#',
            initials: 'AT'
        },
        {
            name: 'James Kenyon-Brown',
            role: 'CGO',
            credentials: ['Ex-Goldman Sachs', '10+ years investment banking', 'Originated $500M+ in deals'],
            linkedin: '#',
            initials: 'JK'
        },
        {
            name: 'Saksham Chawla',
            role: 'CTO',
            credentials: ['Ex-Amazon AWS', 'Built systems at 100K+ TPS', 'Stanford CS'],
            linkedin: '#',
            initials: 'SC'
        },
        {
            name: 'Prakash Venkataraman',
            role: 'Head of AI',
            credentials: ['Ex-Google Research', 'Published 20+ ML papers', 'PhD Machine Learning'],
            linkedin: '#',
            initials: 'PV'
        },
        {
            name: 'Prithvi Sharma',
            role: 'CPO',
            credentials: ['Ex-Palantir', 'Shipped enterprise products at scale', 'IIT Delhi + Wharton MBA'],
            linkedin: '#',
            initials: 'PS'
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Team</span> – Operators Who've Done This Before
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '700px', margin: '12px auto 0' }}>
                    Built by founders with <strong>direct experience</strong> in M&A technology, enterprise systems, and machine learning.
                </p>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '24px',
                marginBottom: '24px'
            }}>
                {/* First row - 3 members */}
                {team.slice(0, 3).map((member, index) => (
                    <div key={index} style={{
                        textAlign: 'center',
                        width: '200px',
                        background: 'var(--color-gray-100)',
                        borderRadius: '16px',
                        padding: '20px 16px'
                    }}>
                        <div style={{
                            width: '72px',
                            height: '72px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                            margin: '0 auto 12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            color: 'white',
                            fontWeight: '700'
                        }}>
                            {member.initials}
                        </div>
                        <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '2px' }}>{member.name}</div>
                        <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '13px', marginBottom: '10px' }}>{member.role}</div>
                        <div style={{ textAlign: 'left' }}>
                            {member.credentials.map((cred, i) => (
                                <div key={i} style={{
                                    fontSize: '11px',
                                    color: 'var(--color-text-secondary)',
                                    padding: '3px 0',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '6px'
                                }}>
                                    <span style={{ color: 'var(--color-primary)', fontWeight: '700' }}>•</span>
                                    {cred}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
                marginBottom: '24px'
            }}>
                {/* Second row - 2 members */}
                {team.slice(3).map((member, index) => (
                    <div key={index} style={{
                        textAlign: 'center',
                        width: '200px',
                        background: 'var(--color-gray-100)',
                        borderRadius: '16px',
                        padding: '20px 16px'
                    }}>
                        <div style={{
                            width: '72px',
                            height: '72px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                            margin: '0 auto 12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            color: 'white',
                            fontWeight: '700'
                        }}>
                            {member.initials}
                        </div>
                        <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '2px' }}>{member.name}</div>
                        <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '13px', marginBottom: '10px' }}>{member.role}</div>
                        <div style={{ textAlign: 'left' }}>
                            {member.credentials.map((cred, i) => (
                                <div key={i} style={{
                                    fontSize: '11px',
                                    color: 'var(--color-text-secondary)',
                                    padding: '3px 0',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '6px'
                                }}>
                                    <span style={{ color: 'var(--color-primary)', fontWeight: '700' }}>•</span>
                                    {cred}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                borderLeft: '4px solid var(--color-primary)',
                padding: '16px 20px',
                background: 'var(--color-gray-100)',
                borderRadius: '0 8px 8px 0',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <p className="body-text" style={{ margin: 0, fontSize: '15px' }}>
                    <strong>Combined experience:</strong> $2B+ in M&A transactions, 50+ years in enterprise tech, top-tier backgrounds from McKinsey, Goldman, Amazon, Google, and Palantir.
                </p>
            </div>
        </div>
    )
}

export default Slide08Team
