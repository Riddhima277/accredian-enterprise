'use client';
import { useState, useRef, useEffect } from 'react';

const SYSTEM_PROMPT = `You are a helpful AI assistant for Accredian Enterprise — a premium enterprise learning & development platform.

Key facts about Accredian Enterprise:
- Offers IIT Delhi & IIM certified programs in: AI & Machine Learning (6-12 months), Data Science & Analytics (4-9 months), Cloud & DevOps (3-6 months), Product Management (4-8 months), Cybersecurity (3-5 months), and Custom L&D programs
- Trusted by 200+ enterprises: Infosys, TCS, Wipro, HCL, Deloitte, Accenture, HDFC Bank, Amazon, Microsoft, Google
- 50,000+ professionals trained, 95% satisfaction rate, 30+ expert instructors
- Delivery modes: live online, self-paced, blended — flexible to team schedules
- Features: real-time analytics dashboard, dedicated L&D specialist per client, hands-on capstone projects, mobile learning app
- Programs co-developed with IIT & IIM faculty
- Dedicated account manager for each enterprise client
- Custom programs can be built around any tech stack or business need
- Typical enterprise onboarding takes 2 weeks from sign-off to batch launch

Keep responses concise (2-4 sentences), friendly, and focused on helping the user understand which program fits their needs. End with a gentle CTA to talk to the team for pricing or custom requirements.`;

const SUGGESTIONS = [
  'Which program suits a data team?',
  'How long is the AI & ML program?',
  'Do you offer IIT certifications?',
  'Can programs be customized?',
];

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Accredian's AI assistant. Ask me anything about our enterprise programs, certifications, delivery modes, or pricing. I'm here to help!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const msgsRef = useRef(null);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput('');
    setShowSuggestions(false);
    setLoading(true);

    const history = messages.filter(m => m.role !== 'initial');
    const newMessages = [...history, { role: 'user', content: userText }];
    setMessages(prev => [...prev, { role: 'user', content: userText }]);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages.filter(m => m.role === 'user' || m.role === 'assistant') }),
      });
      const data = await res.json();
      const reply = data.reply || 'Sorry, I could not get a response. Please try again.';
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Something went wrong. Please try again.' }]);
    }
    setLoading(false);
  };

  return (
    <section id="ai-chat" className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="pill mb-4 block">AI Assistant</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1e6e] mb-3 tracking-tight">
            Ask Anything, Instantly
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Powered by Claude AI — get real answers about programs, certifications, and pricing in seconds.
          </p>
        </div>

        {/* Suggestion chips */}
        {showSuggestions && (
          <div className="flex flex-wrap gap-2 mb-5 justify-center">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-600 bg-white hover:border-[#1a3a8f] hover:text-[#1a3a8f] transition-all cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Chat window */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {/* Topbar */}
          <div className="bg-[#0f1e6e] px-5 py-3 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
            <span className="text-white text-sm font-semibold">Accredian AI Assistant</span>
            <span className="ml-auto text-white/50 text-xs">Powered by Claude</span>
          </div>

          {/* Messages */}
          <div ref={msgsRef} className="p-5 flex flex-col gap-3 min-h-56 max-h-80 overflow-y-auto">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[84%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-[#1a3a8f] text-white self-end rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 self-start rounded-bl-sm'
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="bg-gray-100 self-start px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                {[0, 150, 300].map((d, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 px-4 py-3 flex gap-3 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about programs, pricing, certifications..."
              className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#1a3a8f] focus:ring-2 focus:ring-[#1a3a8f]/10 transition-all"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="bg-[#1a3a8f] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#0f1e6e] disabled:opacity-50 disabled:cursor-not-allowed transition-all border-none cursor-pointer"
            >
              Send
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          AI responses are informational. For pricing & custom quotes, <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="text-[#1a3a8f] underline bg-transparent border-none cursor-pointer text-xs">talk to our team</button>.
        </p>
      </div>
    </section>
  );
}
