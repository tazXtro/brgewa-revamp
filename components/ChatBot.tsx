"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronLeft, Bot, User } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageContext";
import { chatOptions, welcomeMessage, backOption, ChatOption } from "@/lib/chatbotData";

interface Message {
    id: string;
    type: 'bot' | 'user';
    content: string;
    options?: ChatOption[];
}

export default function ChatBot() {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentOptions, setCurrentOptions] = useState<ChatOption[]>(chatOptions);
    const [optionHistory, setOptionHistory] = useState<ChatOption[][]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initialize with welcome message
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{
                id: 'welcome',
                type: 'bot',
                content: language === 'en' ? welcomeMessage.en : welcomeMessage.bn,
                options: chatOptions
            }]);
        }
    }, [language, messages.length]);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleOptionClick = (option: ChatOption) => {
        // Add user message
        const userMessage: Message = {
            id: `user-${Date.now()}`,
            type: 'user',
            content: language === 'en' ? option.label : option.labelBn
        };

        // Add bot response
        const botMessage: Message = {
            id: `bot-${Date.now()}`,
            type: 'bot',
            content: language === 'en' ? option.response : option.responseBn,
            options: option.subOptions
        };

        setMessages(prev => [...prev, userMessage, botMessage]);

        // Update current options
        if (option.subOptions) {
            setOptionHistory(prev => [...prev, currentOptions]);
            setCurrentOptions(option.subOptions);
        }
    };

    const handleBack = () => {
        if (optionHistory.length > 0) {
            const previousOptions = optionHistory[optionHistory.length - 1];
            setOptionHistory(prev => prev.slice(0, -1));
            setCurrentOptions(previousOptions);

            // Add back navigation message
            const userMessage: Message = {
                id: `user-${Date.now()}`,
                type: 'user',
                content: language === 'en' ? backOption.label : backOption.labelBn
            };

            const botMessage: Message = {
                id: `bot-${Date.now()}`,
                type: 'bot',
                content: language === 'en'
                    ? "Sure! Here are the main options:"
                    : "অবশ্যই! এখানে মূল বিকল্পগুলো:",
                options: previousOptions
            };

            setMessages(prev => [...prev, userMessage, botMessage]);
        } else {
            // Go to main menu
            const userMessage: Message = {
                id: `user-${Date.now()}`,
                type: 'user',
                content: language === 'en' ? backOption.label : backOption.labelBn
            };

            const botMessage: Message = {
                id: `bot-${Date.now()}`,
                type: 'bot',
                content: language === 'en' ? welcomeMessage.en : welcomeMessage.bn,
                options: chatOptions
            };

            setMessages(prev => [...prev, userMessage, botMessage]);
            setCurrentOptions(chatOptions);
        }
    };

    const resetChat = () => {
        setMessages([{
            id: 'welcome',
            type: 'bot',
            content: language === 'en' ? welcomeMessage.en : welcomeMessage.bn,
            options: chatOptions
        }]);
        setCurrentOptions(chatOptions);
        setOptionHistory([]);
    };

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${isOpen
                        ? 'bg-destructive text-white rotate-0'
                        : 'bg-primary text-white hover:scale-110'
                    }`}
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            {/* Pulse animation when closed */}
            {!isOpen && (
                <span className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary animate-ping opacity-30 pointer-events-none" />
            )}

            {/* Chat Window */}
            <div
                className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0 pointer-events-none'
                    }`}
            >
                {/* Header */}
                <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Bot size={22} />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-bold text-sm">
                            {language === 'en' ? 'BRGEWA Assistant' : 'বিআরজিইডাব্লিউএ সহকারী'}
                        </h3>
                        <p className="text-xs opacity-80">
                            {language === 'en' ? 'Online • Ready to help' : 'অনলাইন • সাহায্য করতে প্রস্তুত'}
                        </p>
                    </div>
                    <button
                        onClick={resetChat}
                        className="text-xs bg-white/20 px-2 py-1 rounded-lg hover:bg-white/30 transition-colors"
                    >
                        {language === 'en' ? 'Reset' : 'রিসেট'}
                    </button>
                </div>

                {/* Messages Area */}
                <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-muted/30">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex gap-2 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                        >
                            {/* Avatar */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${message.type === 'user'
                                    ? 'bg-secondary text-secondary-foreground'
                                    : 'bg-primary text-primary-foreground'
                                }`}>
                                {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                            </div>

                            {/* Message Bubble */}
                            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${message.type === 'user'
                                    ? 'bg-primary text-primary-foreground rounded-tr-sm'
                                    : 'bg-card border border-border text-foreground rounded-tl-sm shadow-sm'
                                }`}>
                                <p className="whitespace-pre-line">{message.content}</p>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Options Area */}
                <div className="p-3 border-t border-border bg-card max-h-[200px] overflow-y-auto">
                    <div className="flex flex-wrap gap-2">
                        {/* Back button */}
                        {(optionHistory.length > 0 || currentOptions !== chatOptions) && (
                            <button
                                onClick={handleBack}
                                className="px-3 py-2 text-xs rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-colors flex items-center gap-1"
                            >
                                <ChevronLeft size={14} />
                                {language === 'en' ? 'Back' : 'ফিরুন'}
                            </button>
                        )}

                        {/* Current options */}
                        {currentOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleOptionClick(option)}
                                className="px-3 py-2 text-xs rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                {language === 'en' ? option.label : option.labelBn}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
