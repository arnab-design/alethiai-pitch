import { useState, useEffect, useCallback } from 'react'
import './index.css'

// Import all slides
import Slide01Title from './slides/Slide01Title'
import Slide02Philosophy from './slides/Slide02Philosophy'
import Slide03Problem from './slides/Slide03Problem'
import Slide04Solution from './slides/Slide04Solution'
import Slide05MarketContext from './slides/Slide05MarketContext'
import Slide06ProductEcosystem from './slides/Slide06ProductEcosystem'
import Slide07WedgeSolution from './slides/Slide07WedgeSolution'
import Slide08Team from './slides/Slide08Team'
import Slide09TheAsk from './slides/Slide09TheAsk'
import Slide10ThankYou from './slides/Slide10ThankYou'
import Slide11Sources from './slides/Slide11Sources'
import Slide12AppendixDivider from './slides/Slide12AppendixDivider'
import Slide13ProductDeepDive from './slides/Slide13ProductDeepDive'
import Slide14Architecture from './slides/Slide14Architecture'
import Slide15Governance from './slides/Slide15Governance'
import Slide16IP from './slides/Slide16IP'
import Slide17Competitive from './slides/Slide17Competitive'
import Slide18Roadmap from './slides/Slide18Roadmap'
import Slide19GTM from './slides/Slide19GTM'
import Slide20Pricing from './slides/Slide20Pricing'
import Slide21MarketOpportunity from './slides/Slide21MarketOpportunity'
import Slide22Vision from './slides/Slide22Vision'
import Slide23Closing from './slides/Slide23Closing'

const slides = [
  Slide01Title,
  Slide02Philosophy,
  Slide03Problem,
  Slide04Solution,
  Slide05MarketContext,
  Slide06ProductEcosystem,
  Slide07WedgeSolution,
  Slide08Team,
  Slide09TheAsk,
  Slide10ThankYou,
  Slide11Sources,
  Slide12AppendixDivider,
  Slide13ProductDeepDive,
  Slide14Architecture,
  Slide15Governance,
  Slide16IP,
  Slide17Competitive,
  Slide18Roadmap,
  Slide19GTM,
  Slide20Pricing,
  Slide21MarketOpportunity,
  Slide22Vision,
  Slide23Closing,
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
    }
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
