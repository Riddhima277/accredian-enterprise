'use client';
import { useState } from 'react';

const INITIAL = { firstName: '', lastName: '', email: '', company: '', teamSize: '', program: '', message: '' };

export default function LeadForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.company) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="pill mb-4 block">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1e6e] mb-4 tracking-tight">
            Talk to Our Enterprise Team
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Fill in your details and we'll get in touch within 24 hours.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#0f1e6e] mb-2">Thank you!</h3>
              <p className="text-gray-500">Our enterprise team will reach out within 24 hours.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-[#1a3a8f] font-semibold text-sm border-none bg-transparent cursor-pointer hover:underline"
              >
                Submit another inquiry →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">First Name *</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Rahul" className="form-input" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Last Name</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Sharma" className="form-input" />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Work Email *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="rahul@company.com" className="form-input" />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company Name *</label>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp" className="form-input" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Team Size</label>
                  <select name="teamSize" value={form.teamSize} onChange={handleChange} className="form-input">
                    <option value="">Select size</option>
                    <option>1–50</option>
                    <option>51–200</option>
                    <option>201–500</option>
                    <option>500+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Program of Interest</label>
                  <select name="program" value={form.program} onChange={handleChange} className="form-input">
                    <option value="">Select program</option>
                    <option>AI & Machine Learning</option>
                    <option>Data Science</option>
                    <option>Cloud & DevOps</option>
                    <option>Product Management</option>
                    <option>Cybersecurity</option>
                    <option>Custom Program</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message (Optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your team's learning goals..."
                  className="form-input resize-none"
                />
              </div>

              {errorMsg && (
                <div className="mb-4 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm font-medium">
                  {errorMsg}
                </div>
              )}
              {status === 'error' && (
                <div className="mb-4 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm font-medium">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#1a3a8f] text-white rounded-xl py-4 font-bold text-base hover:bg-[#0f1e6e] transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed border-none cursor-pointer"
              >
                {status === 'loading' ? 'Submitting...' : 'Submit & Get a Free Consultation →'}
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">🔒 Your data is safe. No spam, ever.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
