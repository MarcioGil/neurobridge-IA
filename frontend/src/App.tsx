import React from 'react';
import { AccessibilityProvider } from '@accessibility/AccessibilityContext';
import { Home } from '@pages/Home';

function App() {
  return (
    <AccessibilityProvider>
      <Home />
    </AccessibilityProvider>
  );
}

export default App;

