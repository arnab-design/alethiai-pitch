import React from 'react'

function Slide11Sources() {
    const sources = [
        'PwC Global M&A Industry Trends Report 2024',
        'Bain & Company Technology Due Diligence Study',
        'McKinsey & Company: Creating Value from M&A',
        'Gartner: Market Guide for IT Due Diligence',
        'PitchBook: M&A Market Data and Analytics'
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>References</span>
                <h2 className="headline">Sources & References</h2>
            </div>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {sources.map((source, index) => (
                        <li
                            key={index}
                            style={{
                                padding: '16px 24px',
                                borderBottom: index < sources.length - 1 ? '1px solid var(--color-gray-200)' : 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px'
                            }}
                        >
                            <span style={{
                                color: 'var(--color-primary)',
                                fontWeight: '600',
                                fontSize: '14px',
                                minWidth: '24px'
                            }}>
                                {index + 1}.
                            </span>
                            <span className="body-text" style={{ fontSize: '16px' }}>{source}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Slide11Sources
