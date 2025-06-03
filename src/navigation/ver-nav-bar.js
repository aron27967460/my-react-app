import React, { useState, useEffect } from 'react';
import './ver-nav.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function VerticalNav({
  sections = [],
  activeKey,
  onNavigate,
  isExpanded: controlledExpanded,
  onToggle,
  closeNav,
}) {
  const isControlled = controlledExpanded !== undefined;
  const [internalExpanded, setInternalExpanded] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const isExpanded = isControlled ? controlledExpanded : internalExpanded;

  const handleToggle = () => {
    if (!isControlled) {
      setInternalExpanded(prev => !prev);
    }
    onToggle?.(!isExpanded);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleResize = e => {
      setIsDesktop(e.matches);

      // If going under 1024px, force collapsed
      if (!e.matches && !isControlled) {
        setInternalExpanded(false);
      }
    };

    // Initial sync
    handleResize(mediaQuery);
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [isControlled]);

  return (
    <div className={`ver-nav-wrapper ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}>
      {isDesktop && (
        <button className="nav-toggle-btn" onClick={handleToggle} aria-label="Toggle Nav">
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      )}
      <nav className="ver-nav">
        {sections.map((section, index) => (
          <div key={section.header || index} className="nav-section">
            {isExpanded && section.header && <div className="section-header">{section.header}</div>}
            <ul className="ver-nav-list">
              {section.items.map(item => {
                const isActive = activeKey === item.key;
                const isDisabled = item.disabled;
                const Icon = item.icon;

                return (
                  <li key={item.key}>
                    <button
                      className={`ver-nav-link ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}
                      onClick={() => {
                        if (!isDisabled) {
                          onNavigate?.(item.key);
                          window.location.hash = item.key;
                          window.scrollTo({ top: 0, behavior: 'instant' });
                          if (window.innerWidth < 768) {
                            closeNav?.();
                          }
                        }
                      }}
                      disabled={isDisabled}
                    >
                      {Icon && <Icon className="nav-icon" />}
                      {isExpanded && <span className="nav-label">{item.label}</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
