import React from 'react'

function Slide11Sources() {
    const categories = [
        {
            title: 'Market & Deal Activity',
            sources: ['Goldman Sachs', 'Dealogic', 'S&P Global Market Intelligence', 'MSCI', 'PitchBook']
        },
        {
            title: 'Technology Diligence & Cost Benchmarks',
            sources: ['McKinsey', 'Bain', 'BCG', 'Deloitte', 'PwC', 'EY']
        },
        {
            title: 'Regulatory & Oversight Frameworks',
            sources: ['U.S. Securities and Exchange Commission (SEC)', 'EU Artificial Intelligence Act', 'Digital Operational Resilience Act (DORA)', 'U.S. Federal Trade Commission (FTC)', 'U.S. Department of Justice (DOJ)']
        },
        {
            title: 'Technology Signal Ecosystem (Contextual)',
            sources: ['BuiltWith', 'SimilarTech', 'StackShare', 'Wappalyzer']
        },
        {
            title: 'Security & Operations Ecosystem (Contextual)',
            sources: ['Datadog', 'ServiceNow', 'Snyk', 'New Relic', 'Splunk']
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-24">
                <h2 className="headline">
                    <span className="highlight">Sources</span> & Market References
                </h2>
                <p className="body-text mt-12" style={{ maxWidth: '900px', margin: '12px auto 0', fontSize: '14px' }}>
                    External sources support market sizing, cost benchmarks, regulatory context, and industry conditions referenced in this deck.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '16px',
                marginBottom: '32px'
            }}>
                {categories.map((category, index) => (
                    <div key={index}>
                        <h3 style={{
                            fontSize: '12px',
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
                                    padding: '4px 0',
                                    color: 'var(--color-text-secondary)',
                                    fontSize: '11px'
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
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                    lineHeight: 1.6,
                    fontSize: '12px'
                }}>
                    Alethi AI product architecture, workflows, and evidence-linked intelligence outputs are internally developed. All financial outcomes are illustrative and do not represent guaranteed results.
                </p>
            </div>
        </div>
    )
}

export default Slide11Sources
