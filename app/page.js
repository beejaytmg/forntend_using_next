'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Bijay Tamang - Portfolio</title>
        <meta name="description" content="Portfolio of Bijay Tamang, Full Stack Developer" />
      </Head>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 space-y-8">
        {/* Profile Header */}
        <header className="flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Bijay Tamang</h1>
          <p className="text-lg text-gray-600 italic">CODINGS</p>
        </header>

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Django', level: '100%' },
              { name: 'Python', level: '100%' },
              { name: 'React', level: '69%' },
              { name: 'Javascript', level: '90%' },
              { name: 'Rest Api', level: '100%' },
              { name: 'Next js', level: '90%' },
            ].map((skill, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-green-500 h-2.5 rounded-full" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">Projects</h2>
          
          {/* Blog Project */}
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Blog using django and ckeditor library</h3>
            <p className="text-gray-600 mt-1">Blog page</p>
            <div className="mt-3 flex space-x-4">
              <a 
                href="https://github.com/beejaytmg/blogusingck" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://bijayakumartamang.com.np/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Live Demo
              </a>
            </div>
            <div className="mt-2 text-sm text-gray-500 italic">
              Technologies: Django, Python, HTML/CSS
            </div>
          </div>
          
          {/* ProjectPro */}
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Projectpro</h3>
            <p className="text-gray-600 mt-1">
              Primary Function: ProjectPro is a project management platform designed to help businesses, teams, and freelancers organize their projects, tasks, and team collaboration within a single, unified platform. Each business or team (tenant) gets its own isolated environment, ensuring data privacy and customizability.
            </p>
            <div className="mt-3">
              <a 
                href="https://github.com/beejaytmg/project_for_django_and_react" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                GitHub
              </a>
            </div>
            <div className="mt-2 text-sm text-gray-500 italic">
              Technologies: Django, Python, React, JavaScript, Rest API, Next.js
            </div>
          </div>
          
          {/* Tic Tac Toe AI Project */}
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Tic Tac Toe AI x/o/x</h3>
            <p className="text-gray-600 mt-1">
              A simple Tic Tac Toe game with an AI opponent built using Python and tensorflow keras library. This project includes training datasets, a training notebook, a trained model, and a working website for demonstration.
            </p>
            
            <div className="mt-4 space-y-2">
              <h4 className="font-medium text-gray-800">Features</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Play against an AI that predicts the next move</li>
                <li>Intuitive web interface</li>
                <li>Includes training data and model files for further development</li>
              </ul>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-md">
              <h4 className="font-medium text-gray-800">Model Information</h4>
              <p className="text-sm text-gray-600 mt-1">Model Accuracy: Epoch 378/600 - accuracy: 0.9831 - loss: 0.0669</p>
              <p className="text-sm text-gray-600 mt-1">
                Model Link in Hugging Face: {' '}
                <a 
                  href="https://huggingface.co/beejaytmg/ai_tic_tac_toe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  here
                </a>
              </p>
            </div>
            
            <div className="mt-3">
              <a 
                href="https://github.com/beejaytmg/tictactoe_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">Education</h2>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800">BCA</h3>
            <p className="text-gray-600">Mechi Multiple Campus</p>
            <p className="text-sm text-gray-500 mt-1">Start Date: 8/7/2024 - End Date: Present</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">Experience</h2>
          {/* Add your experience items here */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600 italic">To be added</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">Contact</h2>
          <div className="space-y-2 text-gray-600">
            <p>
              Email: {' '}
              <a 
                href="mailto:mail@bijayakumartamang.com.np" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                mail@bijayakumartamang.com.np
              </a>
            </p>
            <p>Phone: +977 981 4974763</p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.linkedin.com/in/bijay-tamang-82ab03250/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/beejaytmg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;