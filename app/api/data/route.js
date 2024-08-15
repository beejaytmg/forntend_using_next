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
    
    // Check each response
    if (skills.error || projects.error || education.error || experience.error || contacts.error) {
      throw new Error('One or more endpoints returned an error');
    }

    const response = NextResponse.json({ skills, projects, education, experience, contacts });
    response.headers.set('Cache-Control', 'no-store');
    return response;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
