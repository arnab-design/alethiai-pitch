import React from 'react'
import { DollarSign, AlertTriangle, Shield } from 'lucide-react'

function Slide05MarketContext() {
    return (
        <div className="slide-content">
            <div className="text-center mb-32">
                <h2 className="headline">
                    <span className="highlight">Why Now</span> – The Inflection Point
                </h2>
                <p className="body-text mt-16" style={{ maxWidth: '900px', margin: '16px auto 0' }}>
                    Global <strong>M&A activity is rebounding toward record levels</strong>, and technology has become the critical variable in deal success.
                </p>
            </div>

            <div className="grid-2" style={{ gap: '48px', alignItems: 'start' }}>
                {/* Chart Section */}
                <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '24px' }}>Global M&A Volume (T$)</h3>
                    <div style={{
                        background: 'var(--color-gray-100)',
                        borderRadius: '16px',
                        padding: '32px',
                        position: 'relative',
                        height: '200px'
                    }}>
                        {/* Simple line chart representation */}
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
                            <circle cx="100" cy="30" r="5" fill="var(--color-primary)" />
                            <text x="100" y="20" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-primary)">$3.5T</text>

                            <circle cx="150" cy="70" r="5" fill="var(--color-primary)" />
                            <text x="150" y="85" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-primary)">$2.4T</text>

                            <circle cx="300" cy="20" r="5" fill="var(--color-primary)" />
                            <text x="280" y="15" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-primary)">$3.9T</text>

                            {/* Year labels */}
                            <text x="0" y="115" fontSize="10" fill="#6B6B8C">2018</text>
                            <text x="100" y="115" fontSize="10" fill="#6B6B8C">2021</text>
                            <text x="200" y="115" fontSize="10" fill="#6B6B8C">2024</text>
                            <text x="280" y="115" fontSize="10" fill="#6B6B8C">2026</text>
                        </svg>
                    </div>
                </div>

                {/* Key Points */}
                <div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '24px' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            border: '2px solid var(--color-primary)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <DollarSign color="var(--color-primary)" size={24} />
                        </div>
                        <div>
                            <h4 style={{ fontWeight: '700', marginBottom: '4px' }}>Record M&A volumes are returning</h4>
                            <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                                Projection to $3.9T by 2026 creates unprecedented demand for technology diligence.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '24px' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            border: '2px solid var(--color-primary)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <AlertTriangle color="var(--color-primary)" size={24} />
                        </div>
                        <div>
                            <h4 style={{ fontWeight: '700', marginBottom: '4px' }}>Technology risk is the critical exposure</h4>
                            <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                                Largest driver of valuation risk and post-close value destruction.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            border: '2px solid var(--color-primary)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <Shield color="var(--color-primary)" size={24} />
                        </div>
                        <div>
                            <h4 style={{ fontWeight: '700', marginBottom: '4px' }}>Verification standards are tightening</h4>
                            <p className="small-text" style={{ color: 'var(--color-text-secondary)' }}>
                                Regulatory scrutiny from SEC, EU AI Act, and DORA driving standardized requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="small-text text-center mt-32" style={{ color: 'var(--color-text-light)' }}>
                Sources: Goldman Sachs, Dealogic, Refinitiv, SEC filings
            </p>
        </div>
    )
}

export default Slide05MarketContext
