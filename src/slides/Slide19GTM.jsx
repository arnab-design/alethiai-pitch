import React from 'react'

function Slide19GTM() {
    const directChannels = [
        { name: 'Financial Investors', desc: 'Earlier technology risk signals for deal selection', gtm: 'Direct sales to funds' },
        { name: 'Corporate Development', desc: 'Standardize tech assessment across acquisitions', gtm: 'Direct sales to corp dev' },
        { name: 'Portfolio / Operating Teams', desc: 'Continuous visibility into execution and risk', gtm: 'Post-close expansion' }
    ]

    const partnerChannels = [
        { name: 'M&A Advisors, Buy-Side Banks', desc: 'Defensible screening accelerating time-to-LOI', gtm: 'Embedded in advisory workflows' },
        { name: 'Consultants & Tech DD Firms', desc: 'Repeatable technology assurance at scale', gtm: 'White-labeled delivery' },
        { name: 'Virtual Data Room Providers', desc: 'Integrated risk signals within deal platforms', gtm: 'Platform integration' }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-20">
                <h2 className="headline">
                    <span className="highlight">Go-To-Market</span> – Multi-Channel Distribution Model
                </h2>
            </div>

            <div style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #059669 100%)',
                color: 'white',
                padding: '16px 24px',
                borderRadius: '10px',
                maxWidth: '900px',
                margin: '0 auto 24px',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>
                    A multi-channel distribution model positions Alethi AI to <strong>scale sustainably through direct and partner channels</strong> without introducing operational delivery complexity.
                </p>
            </div>

            <div style={{ display: 'flex', gap: '32px', maxWidth: '950px', margin: '0 auto' }}>
                {/* Direct Channels */}
                <div style={{ flex: 1 }}>
                    <div style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                        padding: '12px 16px',
                        borderRadius: '8px 8px 0 0',
                        fontWeight: '700',
                        fontSize: '15px'
                    }}>
                        Direct Channels
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', padding: '8px 16px', background: 'var(--color-gray-100)' }}>
                        Entities that purchase Alethi AI for internal decision-making and delivery
                    </div>
                    <div style={{ background: 'var(--color-gray-100)', borderRadius: '0 0 8px 8px', padding: '12px' }}>
                        {directChannels.map((channel, i) => (
                            <div key={i} style={{
                                padding: '12px',
                                borderBottom: i < directChannels.length - 1 ? '1px solid var(--color-gray-200)' : 'none'
                            }}>
                                <div style={{ fontWeight: '600', fontSize: '13px', marginBottom: '4px' }}>{channel.name}</div>
                                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>{channel.desc}</div>
                                <div style={{ fontSize: '11px', color: 'var(--color-primary)', fontWeight: '500' }}>GTM: {channel.gtm}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partner Channels */}
                <div style={{ flex: 1 }}>
                    <div style={{
                        background: 'var(--color-text-dark)',
                        color: 'white',
                        padding: '12px 16px',
                        borderRadius: '8px 8px 0 0',
                        fontWeight: '700',
                        fontSize: '15px'
                    }}>
                        Partner Channels
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', padding: '8px 16px', background: 'var(--color-gray-100)' }}>
                        Adoption multipliers that embed Alethi AI to enhance deal processes
                    </div>
                    <div style={{ background: 'var(--color-gray-100)', borderRadius: '0 0 8px 8px', padding: '12px' }}>
                        {partnerChannels.map((channel, i) => (
                            <div key={i} style={{
                                padding: '12px',
                                borderBottom: i < partnerChannels.length - 1 ? '1px solid var(--color-gray-200)' : 'none'
                            }}>
                                <div style={{ fontWeight: '600', fontSize: '13px', marginBottom: '4px' }}>{channel.name}</div>
                                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>{channel.desc}</div>
                                <div style={{ fontSize: '11px', color: 'var(--color-primary)', fontWeight: '500' }}>GTM: {channel.gtm}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slide19GTM
