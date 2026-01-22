import React from 'react'
import { Linkedin } from 'lucide-react'

import jkImage from '../assets/team/james.png'
import atImage from '../assets/team/arnab.png'
import scImage from '../assets/team/saksham.png'
import pjImage from '../assets/team/prakash.png'
import piImage from '../assets/team/prithvi.png'

function Slide08Team() {
    const team = [
        {
            name: 'Arnab Tagore',
            role: 'CEO',
            credentials: ['10+ years enterprise data leadership', 'Led $100M+ data platforms at top banks', 'University of Toronto'],
            linkedin: 'https://linkedin.com/in/arnabtagore',
            initials: 'AT',
            image: atImage
        },
        {
            name: 'Saksham Chawla',
            role: 'CTO',
            credentials: ['Full Stack Engineer at General Dynamics', 'Ex-US Navy Software Engineer', '2nd-time founder (Ravelon)', 'Virginia Tech CS'],
            linkedin: 'https://linkedin.com/in/schawla2',
            initials: 'SC',
            image: scImage
        },
        {
            name: 'James Kenyon-Brown',
            role: 'CGO',
            credentials: ['RBC Director, Data Strategy', 'Ex-HSBC Global Equity Sales', 'Hong Kong Polytechnic University'],
            linkedin: '#',
            initials: 'JK',
            image: jkImage
        },
        {
            name: 'Prakash Jawahar',
            role: 'Founding Engineer',
            credentials: ['Fannie Mae Software Engineer', 'Ex-Northrop Grumman, Hume Center', 'Virginia Tech CS'],
            linkedin: 'https://linkedin.com/in/prakash-jawahar',
            initials: 'PJ',
            image: pjImage
        },
        {
            name: 'Prithvi Iyer',
            role: 'Founding Engineer',
            credentials: ['ML Engineer', 'AWS Certified ML Specialty', '2nd-time founder (Ravelon)', 'Virginia Tech CS'],
            linkedin: 'https://linkedin.com/in/prithviiyerr',
            initials: 'PI',
            image: piImage
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
                gap: '16px',
                marginBottom: '24px'
            }}>
                {team.map((member, index) => (
                    <div key={index} style={{
                        textAlign: 'center',
                        width: '200px',
                        background: 'var(--color-gray-100)',
                        borderRadius: '16px',
                        padding: '20px 12px'
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
                            fontWeight: '700',
                            overflow: 'hidden',
                            border: '3px solid var(--color-primary)'
                        }}>
                            {member.image ? (
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            ) : (
                                member.initials
                            )}
                        </div>
                        <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '2px', whiteSpace: 'nowrap' }}>{member.name}</div>
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
                    <strong>Combined experience:</strong> Enterprise data at RBC, HSBC, Scotiabank + ML expertise from Georgia Tech + AWS certifications + MIT AI Strategy.
                </p>
            </div>
        </div>
    )
}

export default Slide08Team
