import React from 'react'

function Slide22Vision() {
    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>Vision</span>
                <h2 className="headline">The Future State</h2>
            </div>

            <div className="grid-2" style={{ gap: '48px' }}>
                <div className="card" style={{
                    padding: '40px',
                    background: 'linear-gradient(135deg, #E5FFF9 0%, #F0FFFE 100%)',
                    borderTop: '4px solid var(--color-primary)'
                }}>
                    <div style={{ fontSize: '40px', marginBottom: '20px' }}>📤</div>
                    <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Sell-Side</h3>
                    <p className="subheadline" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>Evidence</p>
                    <p className="body-text" style={{ color: 'var(--color-text-secondary)' }}>
                        Standardized technology evidence packages that accelerate buyer confidence and reduce friction in the sale process.
                    </p>
                </div>

                <div className="card" style={{
                    padding: '40px',
                    background: 'linear-gradient(135deg, #E8F4FF 0%, #F5F9FF 100%)',
                    borderTop: '4px solid #3B82F6'
                }}>
                    <div style={{ fontSize: '40px', marginBottom: '20px' }}>📥</div>
                    <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Buy-Side</h3>
                    <p className="subheadline" style={{ color: '#3B82F6', marginBottom: '16px' }}>Verify</p>
                    <p className="body-text" style={{ color: 'var(--color-text-secondary)' }}>
                        Automated verification that transforms weeks of manual review into days of high-confidence analysis.
                    </p>
                </div>
            </div>

            <div className="card mt-48 text-center" style={{
                padding: '32px',
                background: 'var(--color-gray-100)'
            }}>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                    Common Evidence-Aligned Assurance Layer
                </h4>
                <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                    Bridging the gap between sellers and buyers with standardized, verified technology intelligence
                </p>
            </div>
        </div>
    )
}

export default Slide22Vision
