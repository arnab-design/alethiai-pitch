import React from 'react'

function Slide02Philosophy() {
    return (
        <div className="slide-content" style={{ position: 'relative' }}>
            {/* Left wave graphic */}
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '60px',
                background: 'linear-gradient(180deg, var(--color-primary) 0%, var(--color-accent) 50%, var(--color-primary) 100%)',
                maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 60 800\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30,0 Q60,100 30,200 Q0,300 30,400 Q60,500 30,600 Q0,700 30,800 L0,800 L0,0 Z\' fill=\'black\'/%3E%3C/svg%3E")',
                WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 60 800\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30,0 Q60,100 30,200 Q0,300 30,400 Q60,500 30,600 Q0,700 30,800 L0,800 L0,0 Z\' fill=\'black\'/%3E%3C/svg%3E")',
                maskSize: 'cover',
                WebkitMaskSize: 'cover'
            }} />

            <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p className="body-text mb-32" style={{ fontSize: '20px', lineHeight: 1.8, fontStyle: 'italic' }}>
                    In Greek mythology, <em>Aletheia</em> embodied revealed truth, holding a mirror to the hidden and scales to measure what endures. To encounter her was to see with clarity.
                </p>

                <p className="body-text" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                    <strong style={{ color: 'var(--color-primary)' }}>Alethi AI</strong> carries this principle into technology, bringing transparency to opaque systems and verifying the truth that determines value in the intelligence era.
                </p>
            </div>
        </div>
    )
}

export default Slide02Philosophy
