import React from 'react'
import { Clock, AlertTriangle, TrendingUp } from 'lucide-react'

function Slide03Problem() {
    return (
        <div className="slide-content">
            <div className="text-center mb-32">
                <h2 className="headline">
                    <span className="highlight">Problem</span> – Technology Is the Biggest Unverified Risk in M&A
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
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', letterSpacing: '2px' }}>Deal Delays</h3>
                    <p className="small-text" style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>
                        <em>Weeks of slippage</em>
                    </p>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                        Deal timelines are up ~30% since 2010 - and 22% of delays are driven by inadequate diligence technology
                    </p>
                    <p className="small-text" style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>Source: Gartner</p>
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
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', letterSpacing: '2px' }}>Valuation Risk</h3>
                    <p className="small-text" style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>
                        <em>Deals are mispriced</em>
                    </p>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                        Due diligence often ignores as much as 50% of potential merger value
                    </p>
                    <p className="small-text" style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>Source: McKinsey</p>
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
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', letterSpacing: '2px' }}>Escalating Costs</h3>
                    <p className="small-text" style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>
                        <em>Spend increases</em>
                    </p>
                    <p className="small-text" style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                        Post-merger IT integration budgets overrun by 45% on average due to hidden technical debt
                    </p>
                    <p className="small-text" style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>Source: McKinsey & Oxford</p>
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
                    As a result, investors experience <strong>delays, mispricing, and rising costs</strong> because fragmented reviews provide only a partial view of target technology across the deal lifecycle.
                </p>
            </div>
        </div>
    )
}

export default Slide03Problem
