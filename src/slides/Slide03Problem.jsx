import React from 'react'
import { Clock, AlertTriangle, TrendingUp } from 'lucide-react'

function Slide03Problem() {
    return (
        <div className="slide-content">
            <div className="text-center mb-32">
                <h2 className="headline">
                    <span className="highlight">Problem</span> – Technology is the Biggest Unverified Risk in M&A
                </h2>
                <p className="body-text mt-16" style={{ maxWidth: '900px', margin: '16px auto 0' }}>
                    Technology diligence today is <strong>slow, fragmented, and expensive</strong>, leaving investors without a dependable view of the systems and risks underpinning enterprise value.
                </p>
            </div>

            <p className="label mb-16 text-center">Why Traditional Technology Diligence Fails</p>

            <div className="grid-3 mb-32">
                <div className="card" style={{ background: '#F7F7F9', textAlign: 'center' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'var(--color-primary)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                    }}>
                        <Clock color="white" size={32} />
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Deal Delays</h3>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        <strong>Weeks of slippage</strong> as manual technology diligence slows decisions and extends deal timelines.
                    </p>
                </div>

                <div className="card" style={{ background: '#F7F7F9', textAlign: 'center' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'var(--color-primary)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                    }}>
                        <AlertTriangle color="white" size={32} />
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Valuation Risk</h3>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        <strong>Deals are mispriced</strong> as qualitative diligence approaches miss material technical risks and hidden costs.
                    </p>
                </div>

                <div className="card" style={{ background: '#F7F7F9', textAlign: 'center' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'var(--color-primary)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                    }}>
                        <TrendingUp color="white" size={32} />
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Escalating Costs</h3>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                        <strong>Spend increases</strong> as fragmented diligence workflows and multiple suppliers drive higher costs.
                    </p>
                </div>
            </div>

            <div style={{
                borderLeft: '4px solid var(--color-primary)',
                padding: '20px 24px',
                background: 'var(--color-gray-100)',
                borderRadius: '0 8px 8px 0',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <p className="body-text" style={{ margin: 0 }}>
                    As a result, investors experience <strong>delays, mispricing, and rising costs</strong> that erode deal returns and create unnecessary risk exposure.
                </p>
            </div>
        </div>
    )
}

export default Slide03Problem
