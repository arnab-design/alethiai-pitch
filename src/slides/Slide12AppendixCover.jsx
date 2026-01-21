import React from 'react'

function Slide12AppendixCover() {
    return (
        <div className="slide-content" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Wave Pattern Left Side */}
            <div style={{
                position: 'absolute',
                left: '-50px',
                top: '-100px',
                width: '400px',
                height: '800px',
                opacity: 0.9
            }}>
                <svg viewBox="0 0 300 600" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                        <path
                            key={i}
                            d={`M${50 + i * 25},0 Q${100 + i * 25},150 ${70 + i * 25},300 Q${40 + i * 25},450 ${80 + i * 25},600`}
                            fill="none"
                            stroke={i % 2 === 0 ? "var(--color-primary)" : "#39A9A6"}
                            strokeWidth="3"
                            opacity={0.3 + (i * 0.06)}
                        />
                    ))}
                </svg>
            </div>

            <h1 style={{
                fontSize: '72px',
                fontWeight: '800',
                color: 'var(--color-text-dark)',
                letterSpacing: '8px',
                position: 'relative',
                zIndex: 1
            }}>
                APPENDIX
            </h1>
        </div>
    )
}

export default Slide12AppendixCover
