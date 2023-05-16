'use client';
import ReactDOM from 'react-dom';

import { SidePanelMenu } from './SidePanelMenu';

interface SidePanelProps {
  onClose: () => void;
}

export function SidePanel({ onClose }: SidePanelProps) {
  return ReactDOM.createPortal(
    <div className="absolute bg-overlay w-screen h-screen">
      <SidePanelMenu onClose={onClose} />
    </div>,
    document.body
  );
}
