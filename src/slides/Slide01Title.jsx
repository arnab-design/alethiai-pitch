import React from 'react'
import Logo from '../components/Logo'

function Slide01Title() {
    return (
        <div className="slide-content" style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Wave Pattern Right Side */}
            <div style={{
                position: 'absolute',
                right: '-100px',
                top: '-100px',
                width: '600px',
                height: '800px',
                opacity: 0.8
            }}>
                <svg viewBox="0 0 400 600" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                    {/* Multiple flowing wave lines */}
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <path
                            key={i}
                            d={`M${50 + i * 30},0 Q${100 + i * 30},150 ${70 + i * 30},300 Q${40 + i * 30},450 ${80 + i * 30},600`}
                            fill="none"
                            stroke={i % 2 === 0 ? "var(--color-primary)" : "#E8E8EE"}
                            strokeWidth="2"
                            opacity={0.3 + (i * 0.07)}
                        />
                    ))}
                </svg>
            </div>

            {/* Content */}
            <div style={{ maxWidth: '700px', position: 'relative', zIndex: 1 }}>
                <Logo className="mb-32" />

                <h1 style={{
                    fontSize: '42px',
                    fontWeight: '700',
                    lineHeight: 1.2,
                    color: 'var(--color-primary)',
                    marginBottom: '24px'
                }}>
                    <em>Technology Intelligence</em> That Closes Deals
                </h1>

                <p className="body-text" style={{ fontSize: '18px', color: 'var(--color-text-secondary)' }}>
                    Agentic AI that continuously uncovers, verifies, and tracks technology risk across the deal lifecycle.
                </p>
            </div>
        </div>
    )
}

export default Slide01Title
