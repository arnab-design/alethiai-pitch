import React from 'react'
import Logo from '../components/Logo'

function Slide19GTM() {
    const directChannels = [
        'PE Firms',
        'VC Portfolios',
        'Corporate M&A',
        'Family Offices'
    ]

    const partnerChannels = [
        'Investment Banks',
        'Accounting Firms',
        'Law Firms',
        'LP Networks'
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Go-To-Market</span> – Multi-Channel Distribution Model
                </h2>
            </div>

            <div style={{ display: 'flex', gap: '48px', alignItems: 'stretch', maxWidth: '900px', margin: '0 auto' }}>
                {/* Direct Channels */}
                <div style={{ flex: 1 }}>
                    <div style={{
                        background: 'var(--color-gray-100)',
                        borderRadius: '16px',
                        padding: '24px',
                        height: '100%'
                    }}>
                        <h3 style={{
                            color: 'var(--color-primary)',
                            fontWeight: '700',
                            marginBottom: '8px',
                            fontSize: '18px'
                        }}>
                            Direct Channels
                        </h3>
                        <p className="small-text" style={{ color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
                            Targeting PE Firms & VC Portfolios. Focus on <strong>"initial intelligence wedges"</strong> to secure relationships.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {directChannels.map((channel, i) => (
                                <div key={i} style={{
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '13px',
                                    fontWeight: '500'
                                }}>
                                    {channel}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Center Logo */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 32px rgba(0,168,150,0.3)'
                    }}>
                        <span style={{ color: 'white', fontWeight: '800', fontSize: '14px' }}>ALETHI</span>
                    </div>
                </div>

                {/* Partner Channels */}
                <div style={{ flex: 1 }}>
                    <div style={{
                        background: 'var(--color-gray-100)',
                        borderRadius: '16px',
                        padding: '24px',
                        height: '100%'
                    }}>
                        <h3 style={{
                            color: 'var(--color-primary)',
                            fontWeight: '700',
                            marginBottom: '8px',
                            fontSize: '18px'
                        }}>
                            Partner Channels
                        </h3>
                        <p className="small-text" style={{ color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
                            Targeting Banks, Platforms, LP Networks. Focus on <strong>"high-velocity distribution"</strong> via embedded services.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {partnerChannels.map((channel, i) => (
                                <div key={i} style={{
                                    background: 'var(--color-text-dark)',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '13px',
                                    fontWeight: '500'
                                }}>
                                    {channel}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                borderLeft: '4px solid var(--color-primary)',
                padding: '20px 24px',
                background: 'var(--color-gray-100)',
                borderRadius: '0 8px 8px 0',
                maxWidth: '900px',
                margin: '32px auto 0'
            }}>
                <p className="body-text" style={{ margin: 0 }}>
                    A <strong>dual-channel approach</strong> balances high-touch direct sales with scalable partner distribution.
                </p>
            </div>
        </div>
    )
}

export default Slide19GTM
