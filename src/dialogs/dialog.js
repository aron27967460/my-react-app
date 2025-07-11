import React, { useEffect, useRef, useState } from 'react';
import './dialog.css';
import { createPortal } from 'react-dom';
import Button from '../buttons/button';

const Dialog = ({
  isOpen,
  onClose,
  variant = "scrim",
  dialogWidth = "small",
  anchorRef = null,
  headline,
  icon,
  context,
  body,
  actions,
  children
}) => {
  const isScrim = variant === "scrim";
  const isInline = variant === "inline";
  const isFullscreen = variant === "fullscreen";
  const hasScrim = isScrim || isFullscreen;

  const contentRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const previouslyFocusedElement = useRef(null);

  // Prevent scroll when dialog is open
  useEffect(() => {
    if (isOpen && hasScrim) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, hasScrim]);

  // Restore focus on close
  useEffect(() => {
    if (isOpen && hasScrim) {
      previouslyFocusedElement.current = document.activeElement;
    } else if (!isOpen && previouslyFocusedElement.current && (isScrim || isFullscreen)) {
      previouslyFocusedElement.current.focus();
    }
  }, [isOpen, hasScrim, isScrim, isFullscreen]);

  // Position inline dialog
  useEffect(() => {
    if (!isInline || !anchorRef?.current || !contentRef.current || !isOpen) return;

    const updatePosition = () => {
      const anchorRect = anchorRef.current.getBoundingClientRect();
      const dialog = contentRef.current;

      dialog.style.visibility = 'hidden';
      dialog.style.display = 'block';

      const dialogRect = dialog.getBoundingClientRect();
      const spacing = 16;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const positions = [
        {
          top: anchorRect.bottom + spacing + window.scrollY,
          left: anchorRect.left + window.scrollX,
        },
        {
          top: anchorRect.top - dialogRect.height - spacing + window.scrollY,
          left: anchorRect.left + window.scrollX,
        },
        {
          top: anchorRect.bottom + spacing + window.scrollY,
          left: anchorRect.right - dialogRect.width + window.scrollX,
        },
        {
          top: anchorRect.top - dialogRect.height - spacing + window.scrollY,
          left: anchorRect.right - dialogRect.width + window.scrollX,
        },
      ];

      const bestPosition =
        positions.find(
          (pos) =>
            pos.left >= 0 &&
            pos.left + dialogRect.width <= viewportWidth &&
            pos.top >= 0 &&
            pos.top + dialogRect.height <= viewportHeight
        ) || positions[0];

      setPosition({
        top: bestPosition.top,
        left: bestPosition.left,
      });

      dialog.style.visibility = '';
      dialog.style.display = '';
    };

    updatePosition();

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isInline, anchorRef, isOpen]);

  // Warn if dialogWidth used in fullscreen
  useEffect(() => {
    if (isFullscreen && !["small", "medium", "large"].includes(dialogWidth)) {
      console.warn(
        `[Dialog] The "dialogWidth" prop is ignored when using variant="fullscreen". ` +
        `Current value: "${dialogWidth}". It will be overridden.`
      );
    }
  }, [isFullscreen, dialogWidth]);

  // Dismiss if clicking outside for inline dialogs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        onClose?.();
      }
    };

    const shouldAddListener = isOpen && !hasScrim;
    if (shouldAddListener) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      if (shouldAddListener) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [isOpen, hasScrim, onClose]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Trap focus inside dialog
  useEffect(() => {
    if (!isOpen || !hasScrim || !contentRef.current) return;

    const focusableSelectors = [
      'a[href]',
      'area[href]',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'button:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable]'
    ];

    const contentEl = contentRef.current;
    const focusableEls = Array.from(contentEl.querySelectorAll(focusableSelectors.join(',')))
      .filter(el => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement);

    if (focusableEls.length > 0) {
      focusableEls[0].focus();
    } else {
      contentEl.setAttribute('tabindex', '-1');
      contentEl.focus();
    }

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen, hasScrim]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`dialog-container ${isFullscreen ? 'fullscreen-positioned' : isScrim ? 'with-scrim' : 'inline-positioned'}`}
      role="dialog"
      aria-modal={isScrim || isFullscreen ? "true" : undefined}
      aria-labelledby="dialog-headline"
      onClick={() => {
        if (!isInline) onClose?.();
      }}
      style={isInline ? { top: `${position.top}px`, left: `${position.left}px` } : {}}
    >
      {isScrim && (
        <div className="dialog-scrim" aria-hidden="true" />
      )}
      <div className={`dialog-wrapper ${dialogWidth === 'fullscreen' && variant !== 'fullscreen' ? 'fullscreen-wrapper' : ''}`}>
        <div
          ref={contentRef}
          className={`dialog-content ${isFullscreen ? 'dialog-fullscreen' : `dialog-width-${dialogWidth}`}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children ? (
            children
          ) : (
            <>
              {(headline || icon) && (
                <div className="dialog-headline">
                  {icon && <span className="dialog-headline-icon">{icon}</span>}
                  {headline && <h2 id="dialog-headline" className="dialog-headline-text">{headline}</h2>}
                </div>
              )}
              {context && <div className="dialog-context">{context}</div>}
              {body && <div className="dialog-body">{body}</div>}
              {actions && (
                <div className="dialog-actions">
                  {actions.map((action, i) => (
                    <Button
                      key={i}
                      variant={action.variant || 'outline'}
                      iconName={action.iconName}
                      onClick={action.onClick}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

// Subcomponents for slots
Dialog.Headline = ({ icon, children }) => (
  <div className="dialog-headline">
    {icon && <span className="dialog-icon">{icon}</span>}
    <h2 id="dialog-headline" className="dialog-headline-text">{children}</h2>
  </div>
);

Dialog.Context = ({ children }) => <div className="dialog-context">{children}</div>;
Dialog.Body = ({ children }) => <div className="dialog-body">{children}</div>;
Dialog.Actions = ({ children }) => <div className="dialog-actions">{children}</div>;

export default Dialog;
