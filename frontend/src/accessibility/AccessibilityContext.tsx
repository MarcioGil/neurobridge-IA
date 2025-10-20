import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { AccessibilityProfile } from '@types/index';

interface AccessibilityContextType {
  profile: Partial<AccessibilityProfile['preferences']> | null;
  updateProfile: (preferences: Partial<AccessibilityProfile['preferences']>) => void;
  announceToScreenReader: (message: string, priority?: 'polite' | 'assertive') => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<Partial<AccessibilityProfile['preferences']> | null>(() => {
    // Carregar preferências do localStorage
    const saved = localStorage.getItem('accessibility-preferences');
    if (saved) {
      return JSON.parse(saved);
    }
    
    // Detectar preferências do sistema
    return {
      highContrast: window.matchMedia('(prefers-contrast: high)').matches,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      fontSize: 'medium',
      screenReader: false,
      keyboardOnly: false,
      audioDescription: false,
      captions: false,
      signLanguage: false,
    };
  });

  const [liveRegion, setLiveRegion] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    // Criar live region para anúncios de screen reader
    const region = document.createElement('div');
    region.setAttribute('role', 'status');
    region.setAttribute('aria-live', 'polite');
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    document.body.appendChild(region);
    setLiveRegion(region);

    return () => {
      document.body.removeChild(region);
    };
  }, []);

  useEffect(() => {
    if (!profile) return;

    // Aplicar preferências ao documento
    const root = document.documentElement;

    // Alto contraste
    if (profile.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Tamanho de fonte
    root.setAttribute('data-font-size', profile.fontSize || 'medium');

    // Movimento reduzido
    if (profile.reducedMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // Salvar no localStorage
    localStorage.setItem('accessibility-preferences', JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (preferences: Partial<AccessibilityProfile['preferences']>) => {
    setProfile(prev => ({ ...prev, ...preferences }));
  };

  const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (!liveRegion) return;
    
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.textContent = message;
    
    // Limpar após 1 segundo
    setTimeout(() => {
      if (liveRegion) {
        liveRegion.textContent = '';
      }
    }, 1000);
  };

  return (
    <AccessibilityContext.Provider value={{ profile, updateProfile, announceToScreenReader }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

