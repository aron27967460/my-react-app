import React from 'react';
import './ver-nav.css';

const navSections = [
  {
    items: [
      { label: 'Introduction', key: 'introduction' },
      { label: 'Whose Anchor For?', key: 'whose-anchor-for' },
      { label: 'Tokens', key: 'tokens'}
    ],
  },
  {
    header: 'Components',
    items: [
      { label: 'Overview', key: 'overview' },
      { label: 'Buttons', key: 'buttons' },
      { label: 'Cards', key: 'cards', disabled: true  },
      { label: 'Checkboxes', key: 'checkboxes', disabled: true  },
      { label: 'Chips', key: 'chips', disabled: true  },
      { label: 'Content Pairing', key: 'content-pairing', disabled: true  },
      { label: 'Dialogs', key: 'dialogs', disabled: true },
      { label: 'Directories', key: 'directories', disabled: true  },
      { label: 'Lists', key: 'lists', disabled: true  },
      { label: 'Menu', key: 'menu', disabled: true  },
      { label: 'Navigation', key: 'navigation', disabled: true  },
      { label: 'Radio Buttons', key: 'radio-buttons', disabled: true  },
      { label: 'Sheets', key: 'sheets', disabled: true  },
      { label: 'Switches', key: 'switches', disabled: true  },
      { label: 'Tabs', key: 'tabs', disabled: true  },
      { label: 'Tables', key: 'tables', disabled: true  },
      { label: 'Text Fields', key: 'text-fields', disabled: true }
    ],
  }
];

const VerticalNav = ({ activeSection, onNavigate }) => {
  return (
    <div className="ver-nav-wrapper">
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
                      onClick={() => !isDisabled && onNavigate(item.key)}
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
