import { NextRequest, NextResponse } from "next/server";

const KB = [
  { patterns: ["ai", "machine learning", "ml", "deep learning", "llm"], reply: "Our AI & Machine Learning program runs 6-12 months, co-certified by IIT Delhi. Covers Python, ML algorithms, deep learning, and LLMs with live projects. Our most popular program! Talk to our team for a custom cohort plan?" },
  { patterns: ["data science", "data analytics", "analytics", "data", "statistics"], reply: "Our Data Science program (4-9 months) is IIM certified, covering EDA, ML, Power BI and Tableau. Teams leave with real capstone projects. Talk to us for a demo!" },
  { patterns: ["cloud", "devops", "aws", "azure", "gcp", "kubernetes", "docker"], reply: "Our Cloud & DevOps program (3-6 months) covers AWS, Azure, GCP, CI/CD, Docker and Kubernetes. We are an official AWS Partner. Reach out to check batch availability!" },
  { patterns: ["product", "product management", "pm"], reply: "Our Product Management program (4-8 months) is IIM certified covering strategy, roadmapping, and agile. Great for upskilling engineers into PM roles!" },
  { patterns: ["cyber", "cybersecurity", "security"], reply: "Our Cybersecurity program (3-5 months) is EC-Council aligned covering network security, ethical hacking, and compliance. Talk to us for a tailored plan!" },
  { patterns: ["price", "pricing", "cost", "fee", "how much", "budget"], reply: "Pricing depends on team size and duration. We offer flexible per-seat and enterprise-wide licensing. Fill the contact form and our team will respond with a quote within 24 hours!" },
  { patterns: ["certificate", "certification", "iit", "iim", "credential"], reply: "Yes! Programs are co-certified by IIT Delhi and IIM Kozhikode. Learners get verified digital certificates upon completion!" },
  { patterns: ["duration", "long", "months", "time", "weeks"], reply: "Durations: AI & ML (6-12 months), Data Science (4-9 months), Cloud & DevOps (3-6 months), Product Management (4-8 months), Cybersecurity (3-5 months)." },
  { patterns: ["online", "offline", "mode", "delivery", "live", "self-paced", "blended"], reply: "We support live online, self-paced, and blended delivery. All modes include our mobile app and real-time dashboard!" },
  { patterns: ["start", "begin", "get started", "enroll", "onboard"], reply: "Fill out the contact form and our L&D specialist will reach out within 24 hours. From agreement to first batch is just 2 weeks!" },
  { patterns: ["hello", "hi", "hey", "namaste"], reply: "Hi! Welcome to Accredian Enterprise. Ask me about our programs, certifications, pricing, or delivery modes!" },
  { patterns: ["thank", "thanks", "great", "awesome"], reply: "You are welcome! Fill out the contact form when ready and our team will reach out within 24 hours!" },
];

const FALLBACK = "Great question! Our enterprise team can give you the most accurate answer. Fill out the contact form and someone will reach out within 24 hours. Anything else I can help with?";

function getReply(text: string): string {
  const t = text.toLowerCase();
  for (const item of KB) {
    if (item.patterns.some(p => t.includes(p))) return item.reply;
  }
  return FALLBACK;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    const lastUser = [...messages].reverse().find((m: any) => m.role === "user");
    if (!lastUser) return NextResponse.json({ reply: FALLBACK });
    await new Promise(r => setTimeout(r, 600));
    return NextResponse.json({ reply: getReply(lastUser.content) });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
