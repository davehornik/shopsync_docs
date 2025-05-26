import React, { useState, useRef } from 'react';

export default function FaqItem({ index, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();

  const childrenArray = React.Children.toArray(children);
  const title = childrenArray[0]; // první element jako nadpis
  const content = childrenArray.slice(1); // zbytek jako tělo

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <div
        className="faq-summary"
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
      >
        <span className="faq-arrow" />
        <span className="faq-number">{index}.</span>
        <span className="faq-title">{title}</span>
      </div>
      {content.length > 0 && (
        <div
          className="faq-content"
          ref={contentRef}
          style={{
            maxHeight: open ? `${contentRef.current?.scrollHeight}px` : '0px',
            opacity: open ? 1 : 0,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}