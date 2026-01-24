import { useState, useEffect, useCallback } from 'react'
import './index.css'

// Import all slides - REORDERED FOR PRE-SEED NARRATIVE
// Core pitch (slides 1-12)
import Slide01Title from './slides/Slide01Title'
import Slide03Problem from './slides/Slide03Problem'
import Slide04Solution from './slides/Slide04Solution'
import Slide06HowItWorks from './slides/Slide06HowItWorks'  // NEW: Concrete input→output
import Slide06ProductEcosystem from './slides/Slide06ProductEcosystem' // NEW: Unifying Workflows
import Slide06bProductDemo from './slides/Slide06bProductDemo'  // NEW: Sample Vercel report
import Slide21MarketOpportunity from './slides/Slide21MarketOpportunity'  // Market size
import Slide05MarketContext from './slides/Slide05MarketContext'  // Why Now
import Slide07WedgeSolution from './slides/Slide07WedgeSolution'  // Wedge strategy
import Slide17Competition from './slides/Slide17Competition'  // Competitive advantage
import Slide08Team from './slides/Slide08Team'
import Slide09bRoadmap from './slides/Slide09bRoadmap'  // NEW: 12-Month Plan
import Slide09TheAsk from './slides/Slide09TheAsk'
import Slide10ThankYou from './slides/Slide10ThankYou'

// Appendix (detailed materials)
import Slide12AppendixCover from './slides/Slide12AppendixCover'
import Slide02Philosophy from './slides/Slide02Philosophy'  // Moved to appendix
import Slide13ProductDeepDive from './slides/Slide13ProductDeepDive'
import Slide14Architecture from './slides/Slide14Architecture'
import Slide15Governance from './slides/Slide15Governance'
import Slide16IPDefensibility from './slides/Slide16IPDefensibility'
import Slide18Roadmap from './slides/Slide18Roadmap'
import Slide19GTM from './slides/Slide19GTM'
import Slide20Pricing from './slides/Slide20Pricing'
import Slide22Vision from './slides/Slide22Vision'
import Slide11Sources from './slides/Slide11Sources'
import Slide23Closing from './slides/Slide23Closing'

const slides = [
  // ===== CORE PITCH (13 slides) =====
  Slide01Title,           // 1. Title
  Slide03Problem,         // 2. Problem - immediate pain
  Slide04Solution,        // 3. Solution - our answer
  Slide06HowItWorks,      // 4. How It Works - domain → report flow
  Slide06bProductDemo,    // 5. Product Demo - sample Vercel report
  Slide07WedgeSolution,   // 6. Wedge Strategy - land with 'Preliminary Tech Diligence'
  Slide06ProductEcosystem,// 7. Product Vision - unifying the workflow
  Slide21MarketOpportunity, // 8. Market - $12B TAM
  Slide05MarketContext,   // 9. Why Now - timing
  Slide17Competition,     // 10. Competitive advantage
  Slide08Team,            // 11. Team - why us
  Slide09bRoadmap,        // 12. 12-Month Plan - what we deliver
  Slide09TheAsk,          // 13. The Ask - use of funds
  Slide10ThankYou,        // 14. Thank You

  // ===== APPENDIX =====
  Slide12AppendixCover,   // 12. Appendix divider
  Slide02Philosophy,      // 13. Philosophy (moved from early deck)
  Slide13ProductDeepDive, // 14. Product details
  Slide14Architecture,    // 15. Architecture
  Slide15Governance,      // 16. Governance
  Slide16IPDefensibility, // 17. IP defensibility
  Slide18Roadmap,         // 18. Roadmap
  Slide19GTM,             // 19. GTM
  Slide20Pricing,         // 20. Pricing
  Slide22Vision,          // 21. Vision
  Slide11Sources,         // 22. Sources
  Slide23Closing,         // 23. Closing
]

function App() {
  // Initialize state from URL hash
  const getInitialSlide = () => {
    const hash = window.location.hash
    const match = hash.match(/#slide-(\d+)/)
    if (match) {
      const slideIndex = parseInt(match[1], 10) - 1
      if (slideIndex >= 0 && slideIndex < slides.length) {
        return slideIndex
      }
    }
    return 0
  }

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide)

  // Update URL hash when slide changes
  const updateHash = (index) => {
    window.location.hash = `#slide-${index + 1}`
  }

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
      updateHash(index)
    }
  }, [])

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      const match = hash.match(/#slide-(\d+)/)
      if (match) {
        const slideIndex = parseInt(match[1], 10) - 1
        if (slideIndex >= 0 && slideIndex < slides.length) {
          setCurrentSlide(slideIndex)
        }
      } else if (hash === '') {
        setCurrentSlide(0)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1)
  }, [currentSlide, goToSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          e.preventDefault()
          nextSlide()
          break
        case 'ArrowLeft':
        case 'Backspace':
          e.preventDefault()
          prevSlide()
          break
        case 'Home':
          e.preventDefault()
          goToSlide(0)
          break
        case 'End':
          e.preventDefault()
          goToSlide(slides.length - 1)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, goToSlide])

  const progress = ((currentSlide + 1) / slides.length) * 100

  return (
    <div className="presentation">
      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Slides */}
      {slides.map((SlideComponent, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <SlideComponent />
          <div className="slide-footer">
            <div className="logo logo-small">
              <span className="logo-letter">A</span>
              <span className="logo-letter">L</span>
              <div className="logo-e">
                <span className="logo-e-bar"></span>
                <span className="logo-e-bar"></span>
                <span className="logo-e-bar"></span>
              </div>
              <span className="logo-letter">T</span>
              <span className="logo-letter">H</span>
              <span className="logo-letter">I</span>
              <span className="logo-ai">AI</span>
            </div>
            <span>Confidential · Pre-Seed · January 2026</span>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="nav-controls">
        <button
          className="nav-btn"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          ←
        </button>
        <span className="nav-indicator">
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          className="nav-btn"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default App
