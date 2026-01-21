import React from 'react'

function Slide12AppendixDivider() {
    return (
        <div className="slide-content slide-appendix-divider text-center flex flex-col items-center justify-center">
            <h2 className="headline-large">Appendix</h2>

            {/* Wave pattern background for visual effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                pointerEvents: 'none'
            }}>
                <svg
                    viewBox="0 0 1440 800"
                    preserveAspectRatio="none"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        opacity: 0.1
                    }}
                >
                    <path
                        fill="white"
                        d="M0,400 C360,300 720,500 1080,400 C1260,350 1350,350 1440,400 L1440,800 L0,800 Z"
                    />
                    <path
                        fill="white"
                        d="M0,500 C360,400 720,600 1080,500 C1260,450 1350,450 1440,500 L1440,800 L0,800 Z"
                        style={{ opacity: 0.5 }}
                    />
                </svg>
            </div>
        </div>
    )
}

export default Slide12AppendixDivider
