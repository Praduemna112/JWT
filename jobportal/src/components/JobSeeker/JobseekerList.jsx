import React, { useEffect, useState } from 'react';
import { getAllJobSeekers } from '../../services/jobseekerService'; // Adjust import path if needed
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const JobseekerList = () => {
    const [jobSeekers, setJobSeekers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const fetchJobSeekers = async () => {
            try {
                const data = await getAllJobSeekers();
                setJobSeekers(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching job seekers:', error);
                setError('Failed to fetch job seekers.');
                setLoading(false);
            }
        };

        fetchJobSeekers();
    }, []);

    if (loading) return <div className="alert alert-info">Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    if (jobSeekers.length === 0) {
        return <div className="alert alert-warning">No job seekers found</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Job Seeker List</h2>
            <button className="btn btn-primary mb-3" onClick={() => navigate('/')}>Back to Home</button>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Mobile Number</th>
                        <th>Profile Summary</th>
                        <th>Experience (Years)</th>
                    </tr>
                </thead>
                <tbody>
                    {jobSeekers.map((jobSeeker) => (
                        <tr key={jobSeeker.jobSeekerId}>
                            <td>{jobSeeker.jobSeekerId}</td>
                            <td>{jobSeeker.jobSeekerFullName}</td>
                            <td>{jobSeeker.jobSeekerMobileNumber}</td>
                            <td>{jobSeeker.jobSeekerProfileSummary}</td>
                            <td>{jobSeeker.jobSeekerExperience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JobseekerList;
