import React from 'react'

function Slide23Closing() {
    return (
        <div className="slide-content" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Central Wave Pattern */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '500px',
                height: '400px',
                opacity: 0.8
            }}>
                <svg viewBox="0 0 400 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                        <path
                            key={i}
                            d={`M${30 + i * 30},0 Q${80 + i * 30},75 ${50 + i * 30},150 Q${20 + i * 30},225 ${60 + i * 30},300`}
                            fill="none"
                            stroke={i % 2 === 0 ? "var(--color-primary)" : "#39A9A6"}
                            strokeWidth="2.5"
                            opacity={0.25 + (i * 0.05)}
                        />
                    ))}
                </svg>
            </div>

            <div style={{
                position: 'relative',
                zIndex: 1,
                maxWidth: '700px',
                textAlign: 'center'
            }}>
                <p style={{
                    fontSize: '12px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.8
                }}>
                    <strong>Disclaimer:</strong> This document is provided for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. The information contained herein is confidential and proprietary to Alethi AI and may not be reproduced, distributed, or disclosed without the prior written consent of Alethi AI. All projections, estimates, and forward-looking statements are based on current expectations and are subject to change.
                </p>
            </div>
        </div>
    )
}

export default Slide23Closing
