import React from 'react'

function Slide08Team() {
    const team = [
        {
            name: 'Arnab Tagore',
            role: 'CEO, Founder',
            description: 'Enterprise data architecture, M&A technology strategy',
            initials: 'AT'
        },
        {
            name: 'James Kenyon-Brown',
            role: 'CGO',
            description: 'Investment banking, deal origination',
            initials: 'JK'
        },
        {
            name: 'Saksham Chawla',
            role: 'CTO',
            description: 'Platform engineering, infrastructure',
            initials: 'SC'
        },
        {
            name: 'Prakash Venkataraman',
            role: 'Head of AI',
            description: 'Machine learning, NLP systems',
            initials: 'PV'
        },
        {
            name: 'Prithvi Sharma',
            role: 'CPO',
            description: 'Product strategy, enterprise software',
            initials: 'PS'
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-32">
                <h2 className="headline">
                    <span className="highlight">Team</span> – Operators + Builders
                </h2>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '40px',
                marginBottom: '32px'
            }}>
                {/* First row - 3 members */}
                {team.slice(0, 3).map((member, index) => (
                    <div key={index} style={{ textAlign: 'center', width: '200px' }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)',
                            margin: '0 auto 16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '32px',
                            color: 'white',
                            fontWeight: '600'
                        }}>
                            {member.initials}
                        </div>
                        <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>{member.name}</div>
                        <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>{member.role}</div>
                        <div className="small-text" style={{ color: 'var(--color-text-secondary)' }}>{member.description}</div>
                    </div>
                ))}
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '40px',
                marginBottom: '32px'
            }}>
                {/* Second row - 2 members */}
                {team.slice(3).map((member, index) => (
                    <div key={index} style={{ textAlign: 'center', width: '200px' }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)',
                            margin: '0 auto 16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '32px',
                            color: 'white',
                            fontWeight: '600'
                        }}>
                            {member.initials}
                        </div>
                        <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>{member.name}</div>
                        <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>{member.role}</div>
                        <div className="small-text" style={{ color: 'var(--color-text-secondary)' }}>{member.description}</div>
                    </div>
                ))}
            </div>

            <div style={{
                borderLeft: '4px solid var(--color-primary)',
                padding: '20px 24px',
                background: 'var(--color-gray-100)',
                borderRadius: '0 8px 8px 0',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <p className="body-text" style={{ margin: 0 }}>
                    Alethi AI is built by an <strong>operator-led founding team</strong> with deep experience in enterprise technology, M&A, and machine learning.
                </p>
            </div>
        </div>
    )
}

export default Slide08Team
