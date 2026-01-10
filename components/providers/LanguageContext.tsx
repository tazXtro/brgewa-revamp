'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, Translation } from '@/lib/translations';

interface LanguageContextType {
    language: Language;
    t: Translation;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');
    const [isLoaded, setIsLoaded] = useState(false);

    // Load language preference from localStorage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'bn')) {
            setLanguage(savedLang);
        }
        setIsLoaded(true);
    }, []);

    // Save changes to localStorage
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('language', language);
        }
    }, [language, isLoaded]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'));
    };

    const t = translations[language];

    // Prevent hydration mismatch by rendering nothing until loaded (or default)
    // For better UX, we could render a loader or just default content.
    // Using a simple mounted check avoids mismatch errors.
    // if (!isLoaded) {
    //     return <>{children}</>;
    // }

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
