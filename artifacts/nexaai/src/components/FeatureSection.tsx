import { useState, useRef, useEffect } from 'react';
import ArrowPath from '@/assets/icons/ArrowPath';
import ChartPie from '@/assets/icons/ChartPie';
import LinkIcon from '@/assets/icons/Link';
import ArrowTrendingUp from '@/assets/icons/ArrowTrendingUp';
import CogEightTooth from '@/assets/icons/CogEightTooth';
import CubeSixteenSolid from '@/assets/icons/CubeSixteenSolid';
import ChevronDown from '@/assets/icons/ChevronDown';
import ChevronUp from '@/assets/icons/ChevronUp';

const features = [
  { id: 0, icon: ArrowPath, title: "Intelligent Data Pipeline", desc: "Automate complex ETL flows with AI-driven transformations. Process millions of records with zero manual intervention and guaranteed data quality.", span: "col-span-2" },
  { id: 1, icon: ChartPie, title: "Real-Time Analytics", desc: "Monitor your data streams with live dashboards. Get instant insights as data flows through your pipelines.", span: "col-span-1" },
  { id: 2, icon: LinkIcon, title: "Smart Integrations", desc: "Connect to 150+ data sources out of the box. REST, GraphQL, databases, SaaS tools — all unified.", span: "col-span-1" },
  { id: 3, icon: ArrowTrendingUp, title: "Predictive Modeling", desc: "Built-in ML models surface patterns before they become problems. Proactive intelligence, not reactive reporting.", span: "col-span-2" },
  { id: 4, icon: CogEightTooth, title: "Workflow Automation", desc: "Drag-and-drop workflow builder with conditional logic, branching, and error recovery built in.", span: "col-span-1" },
  { id: 5, icon: CubeSixteenSolid, title: "Enterprise Security", desc: "SOC 2 Type II certified. End-to-end encryption, role-based access, audit logs, and SSO support.", span: "col-span-1" },
];

export default function FeatureSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [accordionIndex, setAccordionIndex] = useState<number>(0);
  const bentoHoverIndex = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    let prevIsMobile = window.innerWidth < 768;
    
    const observer = new ResizeObserver(() => {
      const currentIsMobile = window.innerWidth < 768;
      setIsMobile(currentIsMobile);
      
      if (currentIsMobile && !prevIsMobile) {
        setAccordionIndex(bentoHoverIndex.current);
      }
      if (!currentIsMobile && prevIsMobile) {
        bentoHoverIndex.current = accordionIndex;
        setActiveIndex(accordionIndex);
      }
      prevIsMobile = currentIsMobile;
    });
    
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [accordionIndex]);

  return (
    <section id="features" style={{ padding: '100px 24px', background: 'var(--oceanic-noir)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forsythia)', textAlign: 'center', marginBottom: '16px' }}>Powerful Features</p>
        <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--arctic-powder)', textAlign: 'center', marginBottom: '64px' }}>
          Built for Scale. Designed for Speed.
        </h2>

        {!isMobile ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {features.map((feature) => (
              <div
                key={feature.id}
                onMouseEnter={() => {
                  setActiveIndex(feature.id);
                  bentoHoverIndex.current = feature.id;
                }}
                style={{
                  background: 'var(--nocturnal-expedition)',
                  border: '1px solid rgba(217, 232, 226, 0.15)',
                  borderRadius: '12px',
                  padding: '28px',
                  transition: 'all 180ms cubic-bezier(0,0,0.2,1)',
                  gridColumn: feature.span === 'col-span-2' ? 'span 2' : 'span 1',
                  borderColor: activeIndex === feature.id ? 'var(--forsythia)' : 'rgba(217, 232, 226, 0.15)',
                  boxShadow: activeIndex === feature.id ? '0 0 32px rgba(255,200,1,0.2)' : 'none',
                  transform: activeIndex === feature.id ? 'scale(1.02)' : 'scale(1)',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <feature.icon style={{ width: '32px', height: '32px', color: 'var(--forsythia)', marginBottom: '16px' }} />
                <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.25rem', fontWeight: 700, color: 'var(--arctic-powder)', marginBottom: '12px' }}>{feature.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'var(--mystic-mint)', lineHeight: 1.6, margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {features.map((feature, i) => {
              const isOpen = accordionIndex === feature.id;
              return (
                <div
                  key={feature.id}
                  style={{
                    background: 'var(--nocturnal-expedition)',
                    borderBottom: '1px solid rgba(217, 232, 226, 0.1)',
                    borderLeft: isOpen ? '3px solid var(--forsythia)' : '3px solid transparent',
                    borderTopLeftRadius: i === 0 ? '12px' : 0,
                    borderTopRightRadius: i === 0 ? '12px' : 0,
                    borderBottomLeftRadius: i === features.length - 1 ? '12px' : 0,
                    borderBottomRightRadius: i === features.length - 1 ? '12px' : 0,
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setAccordionIndex(isOpen ? -1 : feature.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '16px 20px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <feature.icon style={{ width: '20px', height: '20px', color: 'var(--forsythia)' }} />
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', fontWeight: 600, color: 'var(--arctic-powder)' }}>{feature.title}</span>
                    </div>
                    {isOpen ? <ChevronUp style={{ width: '20px', height: '20px', color: 'var(--mystic-mint)' }} /> : <ChevronDown style={{ width: '20px', height: '20px', color: 'var(--mystic-mint)' }} />}
                  </button>
                  <div
                    ref={(el) => {
                      if (el) {
                        el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : '0px';
                      }
                    }}
                    style={{
                      maxHeight: '0px',
                      transition: 'max-height 350ms cubic-bezier(0.4,0,0.2,1)',
                    }}
                  >
                    <div
                      style={{
                        padding: '0 20px 20px',
                        fontFamily: 'Inter, sans-serif',
                        color: 'var(--mystic-mint)',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        opacity: isOpen ? 1 : 0,
                        transition: 'opacity 200ms ease-in-out',
                        transitionDelay: isOpen ? '100ms' : '0ms',
                      }}
                    >
                      {feature.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}