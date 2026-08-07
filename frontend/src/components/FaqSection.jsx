import React, { useState, useEffect, useRef } from 'react';
import { Plus, X } from 'lucide-react';
import lottie from 'lottie-web';
import worldcupAnimationData from '../lottie/Worldcup 2026 Football Animation.json';

function LottieAnimation({ animationData }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let anim = null;
    try {
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      });

      const applySlice = () => {
        const svgEl = containerRef.current?.querySelector('svg');
        if (svgEl) {
          svgEl.setAttribute('preserveAspectRatio', 'xMidYMid slice');
        }
      };

      anim.addEventListener('DOMLoaded', applySlice);
      setTimeout(applySlice, 50);
    } catch (err) {
      console.warn('Lottie animation render error:', err);
    }

    return () => {
      if (anim) anim.destroy();
    };
  }, [animationData]);

  return (
    <div
      ref={containerRef}
      className="faq-lottie-container"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '28px',
        overflow: 'hidden'
      }}
    />
  );
}

const faqData = [
  {
    id: '01',
    number: '01.',
    question: 'What kind of projects do you usually work on?',
    answer:
      "I mainly focus on website design, product UI/UX, and brand identity. However, I'm open to exploring creative collaborations that align with my design principles."
  },
  {
    id: '02',
    number: '02.',
    question: 'How do you start a new project with clients?',
    answer:
      'We begin with a discovery call to understand your goals, target audience, and scope. From there, we define a timeline, milestones, and move into research and wireframing.'
  },
  {
    id: '03',
    number: '03.',
    question: 'What tools do you use for your design process?',
    answer:
      'My core stack includes Figma for UI/UX and prototyping, Adobe CC (Illustrator, Photoshop, After Effects) for visual identity and motion, and modern web frameworks for development.'
  },
  {
    id: '04',
    number: '04.',
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on scope. A full brand identity or website design usually takes between 3 to 6 weeks from initial kickoff to final handoff.'
  },
  {
    id: '05',
    number: '05.',
    question: 'Are you available for freelance or collaboration?',
    answer:
      'Yes! I am currently accepting select freelance projects, agency retainer roles, and creative design collaborations.'
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState('01');

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-grid">
        {/* Left Column: Heading & Football Lottie Animation */}
        <div className="faq-left-col">
          <div className="badge-selected">
            <span className="dot-red" />
            <span className="badge-selected-text">Frequently asked questions</span>
          </div>

          <h2 className="faq-heading-statement">
            Want to know something?
          </h2>

          <div className="faq-image-box">
            <LottieAnimation animationData={worldcupAnimationData} />
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="faq-right-col">
          <div className="faq-accordion-list">
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`faq-accordion-card ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleFaq(item.id)}
                >
                  <div className="faq-card-header">
                    <div className="faq-question-row">
                      <span className="faq-number">{item.number}</span>
                      <h3 className="faq-question-text">{item.question}</h3>
                    </div>

                    <button
                      className="faq-toggle-btn"
                      aria-label="Toggle Question"
                    >
                      {isOpen ? (
                        <X size={20} strokeWidth={2.2} />
                      ) : (
                        <Plus size={20} strokeWidth={2.2} />
                      )}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="faq-card-body">
                      <p className="faq-answer-text">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
