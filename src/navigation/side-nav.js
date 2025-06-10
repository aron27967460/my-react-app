import React from 'react';
import './side-nav.css';

const SideNav = ({
  sections = [],
  activeKey,
  onNavigate,
  navStyle = 'flat',
  isCollapsed = false,
  userAvatar = null,
  userLabel = null,
  height = '100vh',
}) => {
  return (
    <nav
      className={`ver-nav nav-style-${navStyle} ${isCollapsed ? 'collapsed' : 'expanded'}`}
      aria-label="Primary navigation"
      style={{ height }}
    >
      {(userAvatar || userLabel) && (
        <div className={`nav-user-profile ${isCollapsed ? 'collapsed' : ''}`}>
          {userAvatar && <div className="nav-avatar">{userAvatar}</div>}
          {!isCollapsed && userLabel && (
            <div className="nav-user-label">{userLabel}</div>
          )}
        </div>
      )}

      {sections.map((section, index) => {
        const sectionId = section.header ? `section-${index}` : undefined;
        const alignClass = section.align === 'bottom' ? 'align-bottom' : 'align-top';

        return (
          <div key={section.header || index} className={`section ${alignClass}`}>
            <div className="section-inner">
              {section.header && !isCollapsed && (
                <h2 className="nav-section-header" id={sectionId}>
                  {section.header}
                </h2>
              )}
              <ul
                className="ver-nav-list"
                {...(sectionId ? { 'aria-labelledby': sectionId } : {})}
                role="list"
              >
                {section.items.map((item) => {
                  const isActive = activeKey === item.key;
                  const isDisabled = item.disabled;

                  return (
                    <li key={item.key} role="none">
                      <button
                        className={`nav-item ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''} ${
                          isCollapsed ? 'collapsed' : ''
                        }`}
                        role="menuitem"
                        aria-current={isActive ? 'page' : undefined}
                        aria-disabled={isDisabled || undefined}
                        disabled={isDisabled}
                        onClick={() => {
                          if (!isDisabled) {
                            onNavigate?.(item.key);
                          }
                        }}
                      >
                        {item.avatar ? (
                          <span className="nav-avatar" aria-hidden="true">
                            {item.avatar}
                          </span>
                        ) : item.icon ? (
                          <span className="nav-icon" aria-hidden="true">
                            {item.icon}
                          </span>
                        ) : null}
                        <span className="nav-label">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default SideNav;
