import React from 'react';
import './ver-nav.css';

// Just update this array when you want to add new items or sections
const navSections = [
  {
    items: [
      { label: 'Introduction', href: '/' },
      { label: 'Whose Anchor For?', href: '/whose-anchor-for' },
      { label: 'Tokens', href: '/tokens' }
    ],
  },
  {
    header: 'Components',
    items: [
      { label: 'Overview', href: '/overview' },
      { label: 'Buttons', href: '/buttons' },
      { label: 'Cards', href: '/cards' },
      { label: 'Checkboxes', href: '/checkboxes' },
      { label: 'Chips', href: '/chips' },
      { label: 'Content Pairing', href: '/content-pairing' },
      { label: 'Dialogs', href: '/dialogs' },
      { label: 'Directories', href: '/directories' },
      { label: 'Lists', href: '/lists' },
      { label: 'Menu', href: '/menu' },
      { label: 'Navigation', href: '/navigation' },
      { label: 'Radio Buttons', href: '/radio-buttons' },
      { label: 'Sheets', href: '/sheets' },
      { label: 'Switches', href: '/switches' },
      { label: 'Tabs', href: '/tabs' },
      { label: 'Tables', href: '/tables' },
      { label: 'Text Fields', href: '/text-fields' }
    ],
  }
];

const VerticalNav = () => {
  const currentPath = window.location.pathname;

  return (
    <div class="ver-nav-wrapper">
    <nav className="ver-nav">
      {navSections.map((section, index) => (
        <div key={section.header || index} className="nav-section">
          {section.header && <div className="section-header">{section.header}</div>}
          <ul className="ver-nav-list">
            {section.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`ver-nav-link ${currentPath === item.href ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
    </div>
  );
};

export default VerticalNav;
