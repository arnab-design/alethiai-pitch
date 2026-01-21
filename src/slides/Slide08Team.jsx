import React from 'react'

function Slide08Team() {
    const team = [
        {
            name: 'Arnab Tagore',
            role: 'CEO',
            initials: 'AT'
        },
        {
            name: 'James Kenyon-Brown',
            role: 'CGO',
            initials: 'JK'
        },
        {
            name: 'Saksham Chawla',
            role: 'CTO',
            initials: 'SC'
        },
        {
            name: 'Andrew Chaffee',
            role: 'Head of AI',
            initials: 'AC'
        },
        {
            name: 'Theodore Aronson',
            role: 'CPO',
            initials: 'TA'
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>The Team</span>
                <h2 className="headline">
                    <span className="highlight">Meet the Team</span>
                </h2>
            </div>

            <div className="grid-5">
                {team.map((member, index) => (
                    <div key={index} className="team-member">
                        <div className="team-photo">{member.initials}</div>
                        <div className="team-name">{member.name}</div>
                        <div className="team-role">{member.role}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slide08Team
