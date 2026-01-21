import React from 'react'
import Logo from '../components/Logo'
import { Globe, Mail } from 'lucide-react'

function Slide10ThankYou() {
    return (
        <div className="slide-content text-center" style={{ position: 'relative' }}>
            {/* Wave graphics in corners */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '200px',
                height: '200px',
                background: 'linear-gradient(135deg, rgba(0, 168, 150, 0.1) 0%, transparent 100%)',
                borderRadius: '0 0 100% 0'
            }} />
            <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '200px',
                height: '200px',
                background: 'linear-gradient(315deg, rgba(0, 168, 150, 0.1) 0%, transparent 100%)',
                borderRadius: '100% 0 0 0'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{
                    fontSize: '56px',
                    fontWeight: '800',
                    color: 'var(--color-primary)',
                    marginBottom: '24px',
                    letterSpacing: '2px'
                }}>
                    THANK YOU
                </h2>

                <p className="body-text mb-48" style={{ fontWeight: '600', maxWidth: '600px', margin: '0 auto 48px' }}>
                    Alethi AI delivers automated assurance for technology due diligence in M&A
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Globe color="white" size={24} />
                        </div>
                        <a href="https://www.alethi.ai/" style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '500' }}>
                            https://www.alethi.ai/
                        </a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Mail color="white" size={24} />
                        </div>
                        <a href="mailto:admin@alethi.ai" style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '500' }}>
                            admin@alethi.ai
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide10ThankYou
