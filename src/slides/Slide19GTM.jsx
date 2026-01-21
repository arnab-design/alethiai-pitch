import React from 'react'

function Slide19GTM() {
    const channels = [
        {
            title: 'Direct',
            icon: '🏢',
            targets: 'PE / Corporates',
            description: 'Direct sales to private equity and corporate development teams'
        },
        {
            title: 'Partner',
            icon: '🤝',
            targets: 'Tech DD Firms / Law Firms',
            description: 'Channel partnerships with technology diligence providers and M&A counsel'
        },
        {
            title: 'Software/Infrastructure',
            icon: '🔌',
            targets: 'VDR / GRC Platforms',
            description: 'API integrations with virtual data rooms and governance platforms'
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>Go-To-Market</span>
                <h2 className="headline">Channel Strategy</h2>
            </div>

            <div className="gtm-channels">
                {channels.map((channel, index) => (
                    <div key={index} className="gtm-channel">
                        <div className="channel-icon">{channel.icon}</div>
                        <div className="channel-title">{channel.title}</div>
                        <div style={{
                            color: 'var(--color-primary)',
                            fontWeight: '500',
                            fontSize: '14px',
                            marginBottom: '12px'
                        }}>
                            {channel.targets}
                        </div>
                        <div className="channel-desc">{channel.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slide19GTM
