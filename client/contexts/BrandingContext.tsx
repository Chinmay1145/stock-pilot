import React, { createContext, useContext, useState, useEffect } from 'react';

interface BrandingConfig {
  companyName: string;
  logoUrl?: string;
  primaryColor: string;
  accentColor: string;
  favicon?: string;
  customCSS?: string;
  headerBackgroundColor?: string;
  sidebarBackgroundColor?: string;
  textColor?: string;
  buttonStyle?: 'rounded' | 'square' | 'pill';
}

interface BrandingContextType {
  branding: BrandingConfig;
  updateBranding: (config: Partial<BrandingConfig>) => void;
  resetToDefault: () => void;
  isCustomized: boolean;
}

const defaultBranding: BrandingConfig = {
  companyName: 'StockPilot',
  primaryColor: '#8b5cf6', // hsl(236 100% 50%)
  accentColor: '#06b6d4', // hsl(195 100% 50%)
  buttonStyle: 'rounded'
};

const BrandingContext = createContext<BrandingContextType | undefined>(undefined);

export function useBranding() {
  const context = useContext(BrandingContext);
  if (context === undefined) {
    throw new Error('useBranding must be used within a BrandingProvider');
  }
  return context;
}

interface BrandingProviderProps {
  children: React.ReactNode;
}

export function BrandingProvider({ children }: BrandingProviderProps) {
  const [branding, setBranding] = useState<BrandingConfig>(defaultBranding);
  const [isCustomized, setIsCustomized] = useState(false);

  useEffect(() => {
    // Load branding from localStorage
    const savedBranding = localStorage.getItem('stockpilot-branding');
    if (savedBranding) {
      try {
        const config = JSON.parse(savedBranding);
        setBranding({ ...defaultBranding, ...config });
        setIsCustomized(true);
        applyBrandingToDOM({ ...defaultBranding, ...config });
      } catch (error) {
        console.error('Failed to parse branding config:', error);
      }
    } else {
      applyBrandingToDOM(defaultBranding);
    }
  }, []);

  const applyBrandingToDOM = (config: BrandingConfig) => {
    const root = document.documentElement;
    
    // Convert hex to HSL for CSS custom properties
    const hexToHsl = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0, s = 0, l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }

      return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
    };

    // Apply colors to CSS custom properties
    if (config.primaryColor) {
      root.style.setProperty('--primary', hexToHsl(config.primaryColor));
    }
    if (config.accentColor) {
      root.style.setProperty('--accent', hexToHsl(config.accentColor));
    }
    if (config.headerBackgroundColor) {
      root.style.setProperty('--header-bg', config.headerBackgroundColor);
    }
    if (config.sidebarBackgroundColor) {
      root.style.setProperty('--sidebar-bg', config.sidebarBackgroundColor);
    }
    if (config.textColor) {
      root.style.setProperty('--text-color', config.textColor);
    }

    // Apply favicon
    if (config.favicon) {
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (favicon) {
        favicon.href = config.favicon;
      }
    }

    // Apply custom CSS
    if (config.customCSS) {
      let styleElement = document.getElementById('custom-branding-css');
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'custom-branding-css';
        document.head.appendChild(styleElement);
      }
      styleElement.textContent = config.customCSS;
    }

    // Update page title
    if (config.companyName && config.companyName !== 'StockPilot') {
      document.title = `${config.companyName} - Inventory Intelligence`;
    }
  };

  const updateBranding = (newConfig: Partial<BrandingConfig>) => {
    const updatedBranding = { ...branding, ...newConfig };
    setBranding(updatedBranding);
    setIsCustomized(true);
    
    // Save to localStorage
    localStorage.setItem('stockpilot-branding', JSON.stringify(updatedBranding));
    
    // Apply to DOM
    applyBrandingToDOM(updatedBranding);
  };

  const resetToDefault = () => {
    setBranding(defaultBranding);
    setIsCustomized(false);
    localStorage.removeItem('stockpilot-branding');
    applyBrandingToDOM(defaultBranding);
    
    // Reset page title
    document.title = 'StockPilot - Inventory Intelligence';
    
    // Remove custom CSS
    const styleElement = document.getElementById('custom-branding-css');
    if (styleElement) {
      styleElement.remove();
    }
  };

  return (
    <BrandingContext.Provider
      value={{
        branding,
        updateBranding,
        resetToDefault,
        isCustomized
      }}
    >
      {children}
    </BrandingContext.Provider>
  );
}
