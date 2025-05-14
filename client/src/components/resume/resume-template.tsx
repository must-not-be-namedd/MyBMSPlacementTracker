import React, { forwardRef } from 'react';
import { Card } from "@/components/ui/card";

interface ResumeTemplateProps {
  data: {
    fullName: string;
    email: string;
    phone: string;
    education: string;
    skills: string;
    experience: string;
    projects: string;
  };
}

export const ResumeTemplate = forwardRef<HTMLDivElement, ResumeTemplateProps>(
  ({ data }, ref) => {
    const skills = data.skills.split(',').map(skill => skill.trim());
    
    return (
      <Card 
        className="bg-white shadow-lg p-8 mx-auto" 
        ref={ref}
        style={{
          width: '100%',
          maxWidth: '794px', // A4 width in pixels
          minHeight: '1123px', // A4 height in pixels
          boxSizing: 'border-box',
          breakInside: 'avoid',
          pageBreakInside: 'avoid',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {/* Header/Contact Info */}
        <div className="border-b-2 border-gray-300 pb-4 mb-6">
          <h1 
            className="text-4xl font-bold text-gray-800"
            style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}
          >
            {data.fullName}
          </h1>
          <div className="flex flex-wrap gap-x-6 text-gray-600 mt-2">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {data.email}
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {data.phone}
            </span>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 
            className="text-2xl font-bold mb-3"
            style={{ color: '#1e3a8a', borderBottom: '1px solid #e5e7eb', paddingBottom: '0.25rem' }}
          >
            Education
          </h2>
          <div className="ml-1 text-gray-700">
            {data.education.split('\n').map((edu, index) => (
              <p key={index} className="mb-1" style={{ lineHeight: '1.5' }}>{edu}</p>
            ))}
          </div>
        </div>
        
        {/* Skills */}
        <div className="mb-6">
          <h2 
            className="text-2xl font-bold mb-3"
            style={{ color: '#1e3a8a', borderBottom: '1px solid #e5e7eb', paddingBottom: '0.25rem' }}
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-full text-sm"
                style={{ 
                  backgroundColor: '#e0f2fe', 
                  color: '#0369a1',
                  display: 'inline-block',
                  marginBottom: '0.5rem'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Experience (if any) */}
        {data.experience && (
          <div className="mb-6">
            <h2 
              className="text-2xl font-bold mb-3"
              style={{ color: '#1e3a8a', borderBottom: '1px solid #e5e7eb', paddingBottom: '0.25rem' }}
            >
              Experience
            </h2>
            <div className="ml-1 text-gray-700">
              {data.experience.split('\n').map((exp, index) => (
                <p key={index} className="mb-1" style={{ lineHeight: '1.5' }}>{exp}</p>
              ))}
            </div>
          </div>
        )}
        
        {/* Projects */}
        {data.projects && (
          <div className="mb-6">
            <h2 
              className="text-2xl font-bold mb-3"
              style={{ color: '#1e3a8a', borderBottom: '1px solid #e5e7eb', paddingBottom: '0.25rem' }}
            >
              Projects
            </h2>
            <div className="ml-1 text-gray-700">
              {data.projects.split('\n').map((project, index) => (
                <p key={index} className="mb-1" style={{ lineHeight: '1.5' }}>{project}</p>
              ))}
            </div>
          </div>
        )}
        
        {/* Footer */}
        <div 
          className="text-center text-gray-500 text-sm mt-8 pt-4"
          style={{ 
            borderTop: '1px solid #e5e7eb',
            position: 'relative',
            marginTop: 'auto'
          }}
        >
          Generated by BMS College Placement Statistics Platform | {new Date().toLocaleDateString()}
        </div>
      </Card>
    );
  }
);

ResumeTemplate.displayName = 'ResumeTemplate';