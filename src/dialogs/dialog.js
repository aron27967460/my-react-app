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

  useEffect(() => {
    if (!isInline || !anchorRef?.current || !contentRef.current || !isOpen) return;

    const updatePosition = () => {
      const anchorRect = anchorRef.current.getBoundingClientRect();
      const dialog = contentRef.current;

      // Temporarily make dialog visible to measure it
      dialog.style.visibility = 'hidden';
      dialog.style.display = 'block';

      const dialogRect = dialog.getBoundingClientRect();
      const spacing = 16;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const positions = [
        {
          name: 'bottom-left',
          top: anchorRect.bottom + spacing + window.scrollY,
          left: anchorRect.left + window.scrollX,
        },
        {
          name: 'top-left',
          top: anchorRect.top - dialogRect.height - spacing + window.scrollY,
          left: anchorRect.left + window.scrollX,
        },
        {
          name: 'bottom-right',
          top: anchorRect.bottom + spacing + window.scrollY,
          left: anchorRect.right - dialogRect.width + window.scrollX,
        },
        {
          name: 'top-right',
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

      // Restore visibility
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

  useEffect(() => {
    if (isFullscreen && dialogWidth !== "small" && dialogWidth !== "medium" && dialogWidth !== "large") {
      console.warn(
        `[Dialog] The "dialogWidth" prop is ignored when using variant="fullscreen". ` +
        `Current value: "${dialogWidth}". It will be overridden.`
      );
    }
  }, [isFullscreen, dialogWidth]);


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
      style={
        isInline
          ? { top: `${position.top}px`, left: `${position.left}px` }
          : {}
      }
    >
    {isScrim && (
       <div className="dialog-scrim" aria-hidden="true" />
     )}
     <div className={`dialog-wrapper ${
       dialogWidth === 'fullscreen' && variant !== 'fullscreen' ? 'fullscreen-wrapper' : ''
     }`}>
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
                {headline && <h2 className="dialog-headline-text">{headline}</h2>}
              </div>
            )}
            {context && <div className="dialog-context">{context}</div>}

            {body && <div className="dialog-body">{body}</div>}

            {actions && (
              <div className="dialog-actions">
                {actions.map((action, i) => (
                  <Button
                    key={i}
                    variant={action.variant || 'outline'} // your default is 'outline'
                    iconName={action.iconName}            // optional, supports star, add, etc.
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

// Slot-based subcomponents for more control
const DialogHeadline = ({ icon, children }) => (
  <div className="dialog-headline">
    {icon && <span className="dialog-icon">{icon}</span>}
    <h2 id="dialog-headline" className="dialog-headline-text">{children}</h2>
  </div>
);

const DialogContext = ({ children }) => (
  <div className="dialog-context">{children}</div>
);

const DialogBody = ({ children }) => (
  <div className="dialog-body">{children}</div>
);

const DialogActions = ({ children }) => (
  <div className="dialog-actions">{children}</div>
);

Dialog.Headline = DialogHeadline;
Dialog.Context = DialogContext;
Dialog.Body = DialogBody;
Dialog.Actions = DialogActions;

export default Dialog;
