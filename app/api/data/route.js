import { NextResponse } from 'next/server';

export async function GET() {
  const endpoints = [
    'https://bijayakumartamang.com.np/api/skills/',
    'https://bijayakumartamang.com.np/api/projects/',
    'https://bijayakumartamang.com.np/api/education/',
    'https://bijayakumartamang.com.np/api/experience/',
    'https://bijayakumartamang.com.np/api/contacts/'
  ];

  try {
    const responses = await Promise.all(endpoints.map(url => fetch(url)));
    const [skills, projects, education, experience, contacts] = await Promise.all(responses.map(res => res.json()));

    return NextResponse.json({ skills, projects, education, experience, contacts });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}