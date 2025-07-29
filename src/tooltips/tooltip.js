import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './tooltip.css';

const Tooltip = ({
  children,
  content,
  placement = 'top',
  delay = 300,
  offset = 8
}) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [finalPlacement, setFinalPlacement] = useState(placement);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);
  const tooltipId = useRef(`tooltip-${Math.random().toString(36).slice(2)}`);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hideTooltip = () => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  // Calculate and update position
  useEffect(() => {
    if (!visible || !triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipEl = tooltipRef.current;
    const tooltipRect = tooltipEl.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const placements = {
      top: {
        top: triggerRect.top - tooltipRect.height - offset,
        left:
          triggerRect.left +
          triggerRect.width / 2 -
          tooltipRect.width / 2
      },
      bottom: {
        top: triggerRect.bottom + offset,
        left:
          triggerRect.left +
          triggerRect.width / 2 -
          tooltipRect.width / 2
      },
      left: {
        top:
          triggerRect.top +
          triggerRect.height / 2 -
          tooltipRect.height / 2,
        left: triggerRect.left - tooltipRect.width - offset
      },
      right: {
        top:
          triggerRect.top +
          triggerRect.height / 2 -
          tooltipRect.height / 2,
        left: triggerRect.right + offset
      }
    };

    // Pick best placement that fits
    const order = [placement, 'top', 'bottom', 'right', 'left'];
    let chosen = placement;

    for (let p of order) {
      const pos = placements[p];
      if (
        pos.left >= 0 &&
        pos.left + tooltipRect.width <= vw &&
        pos.top >= 0 &&
        pos.top + tooltipRect.height <= vh
      ) {
        chosen = p;
        setPosition(pos);
        break;
      }
    }
    setFinalPlacement(chosen);
  }, [visible, placement, offset]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      ref={triggerRef}
      className="tooltip-trigger"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {React.cloneElement(children, { 'aria-describedby': tooltipId.current })}
      {visible &&
        createPortal(
          <div
            ref={tooltipRef}
            id={tooltipId.current}
            role="tooltip"
            className={`tooltip-bubble tooltip-${finalPlacement}`}
            style={{
              position: 'fixed',
              top: `${position.top}px`,
              left: `${position.left}px`
            }}
          >
            {content}
          </div>,
          document.body
        )}
    </div>
  );
};

export default Tooltip;
