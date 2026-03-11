import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { findBestMatch } from '../../utils/chatUtils';
import { faqs } from '../../data/faq';

interface Message {
  text: string;
  isBot: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Olá! Sou o assistente que irá responder dúvidas frequentes. Como posso ajudar? \n1 - Quando é o momento de procurar psicoterapia? \n2 - A psicoterapia é indicada apenas em momentos de sofrimento intenso? \n3 - É possível iniciar psicoterapia mesmo sem saber exatamente o que está acontecendo? \n4 - A psicoterapia envolve aconselhamento ou respostas prontas?\n5 - Quanto tempo dura o processo de psicoterapia? \n6 - Qual é a duração de cada sessão? \n7 - Os atendimentos podem acontecer de forma online? \n8 - Em quais horários acontecem os atendimentos?\n9 - Os atendimentos são realizados por convênios? \n10 - Qual é o valor da sessão?",
      isBot: true
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (message: string) => {
    // Add user message
    setMessages(prev => [...prev, { text: message, isBot: false }]);

    // Find best matching response
    const response = findBestMatch(message, faqs);
    
    // Add bot response with a small delay
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: response,
        isBot: true
      }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-musgo rounded-lg shadow-xl w-[90vw] max-w-[350px] h-[500px] flex flex-col">
          <div className="bg-gold-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className=" text-berge dark:text-white text-sm md:text-base font-poppins font-normal">Dúvidas frequentes</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-neutral-800 dark:bg-gray-900 font-poppins font-normal">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                isBot={message.isBot}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-neutral-900">
            <ChatInput onSend={handleSend} />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="
          bg-musgo
          hover:bg-musgo-escuro
          text-berge
          hover:bg-laranja
          hover:tex-berge
          p-4 rounded-full 
          shadow-lg 
          transition-colors"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}