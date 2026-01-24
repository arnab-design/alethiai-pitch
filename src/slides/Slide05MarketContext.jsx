import React from 'react'
import { TrendingUp, Layers, CheckCircle } from 'lucide-react'

function Slide05MarketContext() {
    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Why Now</span> – The Inflection Point
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '900px', margin: '12px auto 0', fontSize: '14px' }}>
                    2026 marks a step-change in M&A intensity, as technology consolidation accelerates and disclosure scrutiny increases globally - forcing diligence to scale with deal volume and verification demands.
                </p>
            </div>

            <div className="grid-2" style={{ gap: '40px', alignItems: 'start' }}>
                {/* Chart Section */}
                <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Global M&A Volume (T$)</h3>
                    <div style={{
                        background: 'var(--color-gray-100)',
                        borderRadius: '16px',
                        padding: '24px',
                        position: 'relative',
                        height: '180px'
                    }}>
                        <svg viewBox="0 0 300 120" style={{ width: '100%', height: '100%' }}>
                            {/* Grid lines */}
                            <line x1="0" y1="30" x2="300" y2="30" stroke="#E8E8EE" strokeDasharray="4" />
                            <line x1="0" y1="60" x2="300" y2="60" stroke="#E8E8EE" strokeDasharray="4" />
                            <line x1="0" y1="90" x2="300" y2="90" stroke="#E8E8EE" strokeDasharray="4" />

                            {/* Solid line (historical) */}
                            <polyline
                                points="0,40 50,35 100,30 150,70 200,50"
                                fill="none"
                                stroke="var(--color-primary)"
                                strokeWidth="3"
                            />

                            {/* Dotted line (forecast) */}
                            <polyline
                                points="200,50 250,35 300,20"
                                fill="none"
                                stroke="var(--color-primary)"
                                strokeWidth="3"
                                strokeDasharray="8,4"
                            />

                            {/* Data points */}
                            <circle cx="100" cy="30" r="4" fill="var(--color-primary)" />
                            <text x="100" y="20" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--color-primary)">$3.5T</text>

                            <circle cx="150" cy="70" r="4" fill="var(--color-primary)" />
                            <text x="150" y="85" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--color-primary)">$2.4T</text>

                            <circle cx="300" cy="20" r="4" fill="var(--color-primary)" />
                            <text x="280" y="15" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--color-primary)">$3.9T</text>

                            {/* Year labels */}
                            <text x="0" y="110" fontSize="9" fill="#6B6B8C">2018</text>
                            <text x="100" y="110" fontSize="9" fill="#6B6B8C">2021</text>
                            <text x="200" y="110" fontSize="9" fill="#6B6B8C">2024</text>
                            <text x="280" y="110" fontSize="9" fill="#6B6B8C">2026</text>
                        </svg>
                    </div>
                </div>

                {/* Key Points */}
                <div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            border: '2px solid var(--color-primary)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <TrendingUp color="var(--color-primary)" size={20} />
                        </div>
                        <div>
                            <h4 style={{ fontWeight: '700', marginBottom: '4px', fontSize: '14px' }}>M&A is surging - 2026 is the breakout year</h4>
                            <p className="small-text" style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>
                                Global M&A hit ~$3T in 2025, and leading banks expect 2026 deal flows to hit all-time record highs.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            border: '2px solid var(--color-primary)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <Layers color="var(--color-primary)" size={20} />
                        </div>
                        <div>
                            <h4 style={{ fontWeight: '700', marginBottom: '4px', fontSize: '14px' }}>Technology is consolidating - 2026 begins the buy cycle</h4>
                            <p className="small-text" style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>
                                The technology landscape is shifting from build to buy, as consolidation and acquihires accelerate into 2026.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            border: '2px solid var(--color-primary)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <CheckCircle color="var(--color-primary)" size={20} />
                        </div>
                        <div>
                            <h4 style={{ fontWeight: '700', marginBottom: '4px', fontSize: '14px' }}>Verification is now mandatory - 2026 triggers the era of proof</h4>
                            <p className="small-text" style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>
                                Disclosure scrutiny is intensifying into 2026, forcing more automated technology verification across deals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                borderLeft: '4px solid var(--color-primary)',
                padding: '16px 20px',
                background: 'var(--color-gray-100)',
                borderRadius: '0 8px 8px 0',
                maxWidth: '900px',
                margin: '24px auto 0'
            }}>
                <p className="body-text" style={{ margin: 0, fontSize: '13px' }}>
                    Traditional manual due diligence cannot keep pace with the intensity of the 2026 deal cycle - Alethi AI provides the automated assurance infrastructure for deal volume, technology complexity, and disclosure scrutiny.
                </p>
            </div>

            <p className="small-text text-center mt-24" style={{ color: 'var(--color-text-light)', fontSize: '10px' }}>
                Sources: Goldman Sachs; Dealogic; Bloomberg; Bloomberg Law; SEC; EU AI Act; DORA; FTC/DOJ.
            </p>
        </div>
    )
}

export default Slide05MarketContext
