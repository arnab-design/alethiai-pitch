import React from 'react'

function Slide11Sources() {
    const categories = [
        {
            title: 'Market & Deal Activity',
            sources: ['Refinitiv', 'Dealogic', 'Goldman Sachs', 'PitchBook']
        },
        {
            title: 'Regulatory & Oversight',
            sources: ['SEC', 'EU AI Act', 'DORA', 'GDPR']
        },
        {
            title: 'Technology Intelligence',
            sources: ['BuiltWith', 'Wappalyzer', 'Shodan', 'Censys']
        },
        {
            title: 'Industry Research',
            sources: ['Gartner', 'Forrester', 'McKinsey', 'Bain']
        },
        {
            title: 'Technical Infrastructure',
            sources: ['Datadog', 'AWS', 'Azure', 'GCP']
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-32">
                <h2 className="headline">
                    <span className="highlight">Sources</span> & Market References
                </h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '24px',
                marginBottom: '48px'
            }}>
                {categories.map((category, index) => (
                    <div key={index}>
                        <h3 style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: 'var(--color-primary)',
                            marginBottom: '12px',
                            paddingBottom: '8px',
                            borderBottom: '2px solid var(--color-primary)'
                        }}>
                            {category.title}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {category.sources.map((source, sIndex) => (
                                <li key={sIndex} className="small-text" style={{
                                    padding: '6px 0',
                                    color: 'var(--color-text-secondary)'
                                }}>
                                    {source}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div style={{
                background: 'var(--color-gray-100)',
                padding: '16px 24px',
                borderRadius: '8px'
            }}>
                <p className="small-text" style={{
                    color: 'var(--color-primary)',
                    margin: 0,
                    lineHeight: 1.6
                }}>
                    <strong>Disclaimer:</strong> This presentation contains forward-looking statements and market projections based on publicly available data and third-party research. Actual results may differ materially. All trademarks and company names are the property of their respective owners.
                </p>
            </div>
        </div>
    )
}

export default Slide11Sources
