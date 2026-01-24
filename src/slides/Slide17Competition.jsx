import React from 'react'
import { Check, Minus } from 'lucide-react'

function Slide17Competition() {
    const solutions = [
        {
            name: 'Target Search Intelligence',
            alethi: 'Automated, Independent',
            services: 'Relationship-based',
            signalTools: 'Signal-assisted',
            opsTools: '—'
        },
        {
            name: 'Preliminary Tech Diligence',
            alethi: 'Automated, Non-notifying',
            services: 'Target-notifying',
            signalTools: 'Target-observable',
            opsTools: '—'
        },
        {
            name: 'Confirmatory Tech DD',
            alethi: 'Automated, Audit-grade',
            services: 'Questionnaire-based',
            signalTools: '—',
            opsTools: '—'
        },
        {
            name: 'Pre-Close Integration Blueprint',
            alethi: 'Automated, Execution-ready',
            services: 'Assumption-based',
            signalTools: '—',
            opsTools: '—'
        },
        {
            name: 'Post-Close Integration Tracker',
            alethi: 'Automated, Outcome-linked',
            services: 'Self-reported',
            signalTools: '—',
            opsTools: 'Operational metrics'
        },
        {
            name: 'Compliance & Risk Monitoring',
            alethi: 'Automated, Continuous',
            services: 'Periodic reviews',
            signalTools: 'Fragmented alerts',
            opsTools: 'System-scoped'
        }
    ]

    const renderCell = (value, isAlethi = false) => {
        if (value === '—') {
            return <span style={{ color: '#9CA3AF' }}>—</span>
        }
        return (
            <span style={{
                color: isAlethi ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                fontWeight: isAlethi ? '600' : '400',
                fontSize: '12px'
            }}>
                {value}
            </span>
        )
    }

    return (
        <div className="slide-content">
            <div className="text-center mb-16">
                <h2 className="headline">
                    <span className="highlight">Competitive Advantage</span> – Differentiation Across the Deal Lifecycle
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '900px', margin: '12px auto 0', fontSize: '14px' }}>
                    Traditional technology due diligence covers the deal lifecycle through <strong>fragmented services and point tools</strong>, but is not designed for automated, continuous verification of technology risk and value.
                </p>
            </div>

            <div style={{ maxWidth: '950px', margin: '0 auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                    <thead>
                        <tr style={{ background: 'var(--color-gray-100)' }}>
                            <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: '700', borderBottom: '2px solid var(--color-gray-200)' }}>Solution</th>
                            <th style={{ padding: '12px 8px', textAlign: 'center', fontWeight: '700', borderBottom: '2px solid var(--color-primary)', color: 'var(--color-primary)', background: 'rgba(0,168,150,0.1)' }}>Alethi AI</th>
                            <th style={{ padding: '12px 8px', textAlign: 'center', fontWeight: '600', borderBottom: '2px solid var(--color-gray-200)', color: 'var(--color-text-secondary)' }}>Services-Led Tech DD</th>
                            <th style={{ padding: '12px 8px', textAlign: 'center', fontWeight: '600', borderBottom: '2px solid var(--color-gray-200)', color: 'var(--color-text-secondary)' }}>Tech Signal Tools</th>
                            <th style={{ padding: '12px 8px', textAlign: 'center', fontWeight: '600', borderBottom: '2px solid var(--color-gray-200)', color: 'var(--color-text-secondary)' }}>Post-Close Ops Tools</th>
                        </tr>
                    </thead>
                    <tbody>
                        {solutions.map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                <td style={{ padding: '10px 8px', fontWeight: '500' }}>{row.name}</td>
                                <td style={{ padding: '10px 8px', textAlign: 'center', background: 'rgba(0,168,150,0.05)' }}>{renderCell(row.alethi, true)}</td>
                                <td style={{ padding: '10px 8px', textAlign: 'center' }}>{renderCell(row.services)}</td>
                                <td style={{ padding: '10px 8px', textAlign: 'center' }}>{renderCell(row.signalTools)}</td>
                                <td style={{ padding: '10px 8px', textAlign: 'center' }}>{renderCell(row.opsTools)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div style={{ display: 'flex', gap: '24px', marginTop: '16px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                    <div><strong>Services-Led:</strong> Deloitte · EY · Accenture · AlixPartners · West Monroe</div>
                    <div><strong>Signal Tools:</strong> BuiltWith · SimilarTech · HGI · StackShare · Wappalyzer</div>
                    <div><strong>Ops Tools:</strong> Datadog · ServiceNow · Snyk · New Relic · Splunk</div>
                </div>
            </div>

            <div style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #059669 100%)',
                color: 'white',
                padding: '18px 24px',
                borderRadius: '10px',
                maxWidth: '900px',
                margin: '20px auto 0',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>
                    Alethi AI replaces episodic, disclosure-dependent diligence with a <strong>continuous assurance layer</strong> that delivers independent, audit-grade, execution-ready technology verification from origination through to post-close operations.
                </p>
            </div>

            <p className="small-text text-center" style={{ marginTop: '12px', color: 'var(--color-text-secondary)' }}>
                — = not designed to support this stage
            </p>
        </div>
    )
}

export default Slide17Competition
