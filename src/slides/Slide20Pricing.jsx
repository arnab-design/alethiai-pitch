import React from 'react'

function Slide20Pricing() {
    const products = [
        {
            name: 'Origination',
            price: '$100k/yr',
            traditional: '$300k+/yr',
            description: 'Subscription for pre-LOI screening'
        },
        {
            name: 'Deal Assurance',
            price: '$150k/deal',
            traditional: '$500k+/deal',
            description: 'Per-transaction deep diligence'
        },
        {
            name: 'Value Realization',
            price: '$200k/yr',
            traditional: '$600k+/yr',
            description: 'Continuous post-deal monitoring'
        }
    ]

    return (
        <div className="slide-content">
            <div className="text-center mb-48">
                <span className="label mb-8" style={{ display: 'block' }}>Business & Pricing Model</span>
                <h2 className="headline">60-75% Cost Advantage</h2>
            </div>

            <div className="grid-3">
                {products.map((product, index) => (
                    <div key={index} className="card" style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{product.name}</h3>
                        <p className="small-text mb-16" style={{ color: 'var(--color-text-secondary)' }}>
                            {product.description}
                        </p>

                        <div style={{
                            padding: '24px',
                            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                            borderRadius: '12px',
                            color: 'white',
                            marginBottom: '16px'
                        }}>
                            <div style={{ fontSize: '28px', fontWeight: '800' }}>{product.price}</div>
                            <div style={{ fontSize: '12px', opacity: 0.8 }}>Alethi AI</div>
                        </div>

                        <div style={{
                            padding: '12px',
                            background: 'var(--color-gray-100)',
                            borderRadius: '8px',
                            textDecoration: 'line-through',
                            color: 'var(--color-text-light)'
                        }}>
                            <div style={{ fontSize: '16px' }}>{product.traditional}</div>
                            <div style={{ fontSize: '11px' }}>Traditional</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slide20Pricing
