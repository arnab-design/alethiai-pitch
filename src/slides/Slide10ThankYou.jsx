import React from 'react'
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

            <div style={{ position: 'relative', zIndex: 1, paddingTop: '40px' }}>
                <h2 style={{
                    fontSize: '64px',
                    fontWeight: '800',
                    color: 'var(--color-primary)',
                    marginBottom: '24px',
                    letterSpacing: '4px'
                }}>
                    THANK YOU
                </h2>

                <p className="body-text" style={{ fontWeight: '600', maxWidth: '700px', margin: '0 auto 16px', fontSize: '18px' }}>
                    Alethi AI delivers automated assurance for technology due diligence in M&A
                </p>

                <p className="body-text mb-48" style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 64px' }}>
                    Built for investors and advisors who need defensible technology insight at deal speed
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '64px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 6px rgba(0, 168, 150, 0.2)'
                        }}>
                            <Globe color="white" size={28} />
                        </div>
                        <a href="https://www.alethiai.com/" style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '600', fontSize: '18px' }}>
                            https://www.alethiai.com/
                        </a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 6px rgba(0, 168, 150, 0.2)'
                        }}>
                            <Mail color="white" size={28} />
                        </div>
                        <a href="mailto:admin@alethiai.com" style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '600', fontSize: '18px' }}>
                            admin@alethiai.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide10ThankYou
