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
      { label: 'Dialogs', key: 'dialogs'},
      { label: 'Dropdowns', key: 'dropdowns'},
      { label: 'Lists', key: 'lists'},
      { label: 'Radio Buttons', key: 'radio-buttons'},
      { label: 'Side Nav', key: 'side-nav'},
      { label: 'Switches', key: 'switches'},
      { label: 'Tabs', key: 'tabs'},
      { label: 'Text Fields', key: 'text-fields'},
      // { label: 'Content Pairing', key: 'content-pairing', disabled: true },
      // { label: 'Directories', key: 'directories', disabled: true },
      // { label: 'Menu', key: 'menu', disabled: true },
      // { label: 'Sheets', key: 'sheets', disabled: true },
      // { label: 'Tables', key: 'tables', disabled: true }
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
                          window.location.hash = item.key; // update the URL hash
                          window.scrollTo({ top: 0, behavior: 'instant' });
                          if (window.innerWidth < 768) {
                            closeNav?.();
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
