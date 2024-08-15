'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
export default function Home() {
  const [data, setData] = useState({
    skills: [],
    projects: [],
    education: [],
    experience: [],
    contacts: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
      </header>

      <main className="container mx-auto p-4">
         {/* Profile Picture Section */}
         <section className="mb-8 text-center">
           <div className="inline-block w-24 h-24 relative">
             <Image
               src="/profile.jpg"
               alt="Profile Picture"
               width={100}
               height={100}
               className="rounded-full border-4 border-blue-600 shadow-lg object-cover"
             />
           </div>
           <h2 className="text-2xl font-semibold mt-4">Bijay Tamang</h2>
           <p className="text-gray-600">CODINGS</p>
         </section>

        {/* Rest of the sections remain unchanged */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills.map((skill) => (
              <li key={skill.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">{skill.name}</h3>
                <div className="mt-2 bg-gray-200 rounded">
                  <div 
                    className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded"
                    style={{width: `${skill.proficiency}%`}}
                  >
                    {skill.proficiency}%
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project) => (
              <div key={project.id} className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <div className="mt-4 space-x-2">
                  <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                  <a href={project.live_demo_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
                </div>
                <div className="mt-2">
                  <strong>Technologies:</strong> {project.technology.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <ul className="space-y-4">
            {data.education.map((edu) => (
              <li key={edu.id} className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-lg">{edu.institution}</p>
                <p>Start Date: {new Date(edu.start_date).toLocaleDateString()}</p>
                <p>End Date: {edu.end_date ? new Date(edu.end_date).toLocaleDateString() : 'Present'}</p>
                {edu.description && <p className="mt-2">{edu.description}</p>}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <ul className="space-y-4">
            {data.experience.map((exp) => (
              <li key={exp.id} className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">{exp.job_title}</h3>
                <p className="text-lg">{exp.company}</p>
                <p>Start Date: {new Date(exp.start_date).toLocaleDateString()}</p>
                <p>End Date: {exp.end_date ? new Date(exp.end_date).toLocaleDateString() : 'Present'}</p>
                <p className="mt-2">Responsibilities: {exp.responsibilities}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          {data.contacts.length > 0 && (
            <div className="bg-white p-4 rounded shadow">
              <p>Email: {data.contacts[0].email}</p>
              <p>Phone: {data.contacts[0].phone}</p>
              <div className="mt-4">
                {data.contacts[0].linkedin && (
                  <a href={data.contacts[0].linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">LinkedIn</a>
                )}
                {data.contacts[0].github && (
                  <a href={data.contacts[0].github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">GitHub</a>
                )}
                {data.contacts[0].twitter && (
                  <a href={data.contacts[0].twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
                )}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}