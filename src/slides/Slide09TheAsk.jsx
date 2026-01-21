import React from 'react'
import { Target, DollarSign, Shield, TrendingUp } from 'lucide-react'

function Slide09TheAsk() {
    const allocation = [
        { category: 'Team', amount: 'USD 0.73M', percent: '73%', capability: 'Engineering, GTM, Operations' },
        { category: 'Product Ops', amount: 'USD 0.15M', percent: '15%', capability: 'Infrastructure, Tools, Data' },
        { category: 'Infrastructure', amount: 'USD 0.08M', percent: '8%', capability: 'Cloud, Security, Compliance' },
        { category: 'Contingency', amount: 'USD 0.04M', percent: '4%', capability: 'Operating buffer' }
    ]

    const milestones = [
        { quarter: 'Q2 2026', milestone: '3 LOI-backed pilots', why: 'Demand validation', icon: Target },
        { quarter: 'Q3 2026', milestone: 'First paying customer', why: 'Revenue signal', icon: DollarSign },
        { quarter: 'Q4 2026', milestone: 'SOC 2 certification', why: 'Enterprise-ready', icon: Shield },
        { quarter: 'Q4 2026', milestone: 'Series A positioning', why: 'Next round prep', icon: TrendingUp }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">The Ask</span> – $1M Pre-Seed to Product-Market Fit
                </h2>
            </div>

            <div className="grid-2" style={{ gap: '40px', alignItems: 'start' }}>
                {/* 12-Month Milestones */}
                <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: 'var(--color-primary)' }}>12-Month Milestones</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {milestones.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px 16px',
                                    background: 'var(--color-gray-100)',
                                    borderRadius: '10px',
                                    borderLeft: '4px solid var(--color-primary)'
                                }}>
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '8px',
                                        background: 'var(--color-primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <IconComponent size={18} color="white" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: '600', fontSize: '14px' }}>{item.milestone}</div>
                                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{item.why}</div>
                                    </div>
                                    <div style={{
                                        background: 'white',
                                        padding: '4px 10px',
                                        borderRadius: '12px',
                                        fontSize: '11px',
                                        fontWeight: '600',
                                        color: 'var(--color-primary)',
                                        border: '1px solid var(--color-primary)'
                                    }}>
                                        {item.quarter}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Allocation Table */}
                <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: 'var(--color-primary)' }}>Use of Proceeds</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ textAlign: 'left', padding: '10px 8px', fontSize: '12px', fontWeight: '600' }}>Category</th>
                                <th style={{ textAlign: 'right', padding: '10px 8px', fontSize: '12px', fontWeight: '600' }}>Amount</th>
                                <th style={{ textAlign: 'left', padding: '10px 8px', fontSize: '12px', fontWeight: '600' }}>Capability</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allocation.map((row, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                    <td style={{ padding: '10px 8px', fontSize: '13px', fontWeight: '500' }}>{row.category}</td>
                                    <td style={{ padding: '10px 8px', fontSize: '13px', textAlign: 'right' }}>
                                        <span style={{ fontWeight: '600' }}>{row.amount}</span>
                                        <span style={{ color: 'var(--color-primary)', marginLeft: '6px', fontSize: '12px' }}>({row.percent})</span>
                                    </td>
                                    <td style={{ padding: '10px 8px', fontSize: '12px', color: 'var(--color-text-secondary)' }}>{row.capability}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Total */}
                    <div style={{
                        marginTop: '16px',
                        padding: '12px 16px',
                        background: 'var(--color-primary)',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <span style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>Total Raise</span>
                        <span style={{ color: 'white', fontWeight: '800', fontSize: '20px' }}>$1,000,000</span>
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
                <p className="body-text" style={{ margin: 0, fontSize: '14px' }}>
                    This funding gives us <strong>12 months of runway</strong> to convert pilots to paying customers and position for <strong>Series A at $3-5M</strong>.
                </p>
            </div>
        </div>
    )
}

export default Slide09TheAsk
