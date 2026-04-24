import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const LEADS_FILE = path.join(process.cwd(), 'leads.json');

function readLeads() {
  try {
    if (!fs.existsSync(LEADS_FILE)) return [];
    return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function writeLeads(leads) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, email, company } = body;

    if (!firstName || !email || !company) {
      return NextResponse.json(
        { error: 'firstName, email, and company are required.' },
        { status: 400 }
      );
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const lead = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    };

    const leads = readLeads();
    leads.push(lead);
    writeLeads(leads);

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const leads = readLeads();
    return NextResponse.json({ count: leads.length, leads });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch leads.' }, { status: 500 });
  }
}
