import React from 'react'

function Slide16IP() {
    const patents = [
        {
            title: 'Public System Scanning Engine',
            description: 'Automated external intelligence gathering and risk signal detection',
            icon: '🌐'
        },
        {
            title: 'VDR Evidence Engine',
            description: 'Intelligent document extraction and claim verification from virtual data rooms',
            icon: '📁'
        },
        {
            title: 'Private System Scanning Engine',
            description: 'Secure internal system analysis with privacy-preserving architecture',
            icon: '🔐'
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>Intellectual Property</span>
                <h2 className="headline">Patents Pending</h2>
            </div>

            <div className="grid-3">
                {patents.map((patent, index) => (
                    <div key={index} className="card" style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '48px', marginBottom: '20px' }}>{patent.icon}</div>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: 'var(--color-primary)' }}>
                            {patent.title}
                        </h3>
                        <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                            {patent.description}
                        </p>
                        <div style={{
                            marginTop: '20px',
                            padding: '8px 16px',
                            background: 'var(--color-gray-200)',
                            borderRadius: '20px',
                            display: 'inline-block',
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--color-text-secondary)'
                        }}>
                            Patent Pending
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slide16IP
