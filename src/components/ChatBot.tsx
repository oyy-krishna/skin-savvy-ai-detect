
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, MessageCircle, X } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm here to help you with any questions about skin conditions, image requirements, or how to use our app. How can I assist you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages(prev => [...prev, { text: input, isBot: false }]);
      
      // Simulate bot response
      setTimeout(() => {
        const response = getBotResponse(input);
        setMessages(prev => [...prev, { text: response, isBot: true }]);
      }, 1000);
      
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full p-4 w-14 h-14 bg-medical-blue hover:bg-medical-blue/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96">
          <div className="p-4 border-b flex justify-between items-center bg-medical-blue text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="font-medium">AI Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-medical-blue/90 text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <ScrollArea className="h-96 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-medical-blue text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button onClick={handleSend} className="bg-medical-blue hover:bg-medical-blue/90">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('image') || lowerInput.includes('upload')) {
    return "For best results, please ensure your images are: \n1. Well-lit and clear\n2. Focused on the skin area of concern\n3. Taken from a close but reasonable distance\n4. Without any filters or edits";
  }
  
  if (lowerInput.includes('result') || lowerInput.includes('accuracy')) {
    return "Our AI provides an initial assessment, but please remember that this is not a medical diagnosis. Always consult with a healthcare professional for proper medical advice.";
  }
  
  if (lowerInput.includes('help') || lowerInput.includes('how')) {
    return "To use our app:\n1. Upload a clear image of your skin concern\n2. Wait for the AI analysis\n3. Review the results and heatmap\n4. Use our 'Find Doctor' feature if you need professional consultation";
  }

  return "I'm here to help! You can ask me about:\n- Image upload requirements\n- How to use the app\n- Understanding results\n- Finding a doctor";
};

export default ChatBot;
