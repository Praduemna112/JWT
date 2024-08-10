import React, { useEffect, useState } from 'react';
import { getAllRecruiters } from '../../services/recruiterService';

const RecruiterList = () => {
    const [recruiters, setRecruiters] = useState([]);

    useEffect(() => {
        fetchRecruiters();
    }, []);

    const fetchRecruiters = async () => {
        try {
            const data = await getAllRecruiters();
            setRecruiters(data);
        } catch (error) {
            console.error('Error fetching recruiters:', error);
        }
    };

    return (
        <div>
            <h2>Recruiter List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Location</th>
                        <th>Industry</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {recruiters.map((recruiter) => (
                        <tr key={recruiter.recruiterId}>
                            <td>{recruiter.recruiterId}</td>
                            <td>{recruiter.companyName}</td>
                            <td>{recruiter.recruiterEmail}</td>
                            <td>{recruiter.recruiterPassword}</td>
                            <td>{recruiter.companyLocation}</td>
                            <td>{recruiter.companyIndustry}</td>
                            <td>
                                <a href={recruiter.companyWebsite} target="_blank" rel="noopener noreferrer">
                                    {recruiter.companyWebsite}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecruiterList;
