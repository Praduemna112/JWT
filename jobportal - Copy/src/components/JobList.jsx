import React from 'react';
import './JobList.css';

const jobs = [
  { title: 'Software Engineer', company: 'ABC Corp', location: 'New York' },
  { title: 'Java Developer', company: 'XYZ Ltd', location: 'San Francisco' },
  { title: 'Frontend Developer', company: 'Tech Solutions', location: 'Austin' },
];

function JobList() {
  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <div key={index} className="job-item">
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
        </div>
      ))}
    </div>
  );
}

export default JobList;
