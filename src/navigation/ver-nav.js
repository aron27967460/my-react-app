import React from 'react';
import './ver-nav.css';

const navSections = [
  {
    items: [
      { label: 'Introduction', key: 'introduction' },
      { label: 'Whose Anchor For?', key: 'whose-anchor-for' },
      { label: 'Tokens', key: 'tokens' }
    ],
  },
  {
    header: 'Components',
    items: [
      { label: 'Overview', key: 'overview' },
      { label: 'Buttons', key: 'buttons' },
      { label: 'Cards', key: 'cards'},
      { label: 'Checkboxes', key: 'checkboxes'},
      { label: 'Chips', key: 'chips'},
      { label: 'Radio Buttons', key: 'radio-buttons'},
      { label: 'Switches', key: 'switches'},
      { label: 'Tabs', key: 'tabs'},
      { label: 'Content Pairing', key: 'content-pairing', disabled: true },
      { label: 'Dialogs', key: 'dialogs', disabled: true },
      { label: 'Directories', key: 'directories', disabled: true },
      { label: 'Lists', key: 'lists', disabled: true },
      { label: 'Menu', key: 'menu', disabled: true },
      { label: 'Navigation', key: 'navigation', disabled: true },
      { label: 'Sheets', key: 'sheets', disabled: true },
      { label: 'Tables', key: 'tables', disabled: true },
      { label: 'Text Fields', key: 'text-fields', disabled: true }
    ],
  },
];

const VerticalNav = ({ activeSection, onNavigate, isOpen, closeNav }) => {
  return (
    <div className={`ver-nav-wrapper ${isOpen ? 'is-open' : ''}`}>
      <nav className="ver-nav">
        {navSections.map((section, index) => (
          <div key={section.header || index} className="nav-section">
            {section.header && <div className="section-header">{section.header}</div>}
            <ul className="ver-nav-list">
              {section.items.map((item) => {
                const isActive = activeSection === item.key;
                const isDisabled = item.disabled;

                return (
                  <li key={item.key}>
                    <button
                      className={`ver-nav-link ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}

                      onClick={() => {
                        if (!isDisabled) {
                          onNavigate(item.key);
                          window.scrollTo({ top: 0, behavior: 'instant' });
                          if (window.innerWidth < 768) {
                            closeNav?.(); // only close if on mobile
                          }
                        }
                      }}
                      disabled={isDisabled}
                    >
                      {item.label}
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
};

export default VerticalNav;
