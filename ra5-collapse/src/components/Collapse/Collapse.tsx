import { useState } from 'react';
import './collapse.css';

interface CollapseProps {
  collapsedLabel?: string;
  expandedLabel?: string;
  children: React.ReactNode;
}

export default function Collapse ({ 
  collapsedLabel = 'Развернуть', 
  expandedLabel = 'Свернуть', 
  children 
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse-container">
      <button onClick={toggle} className="collapse-button">
        {isOpen ? expandedLabel : collapsedLabel}
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}
