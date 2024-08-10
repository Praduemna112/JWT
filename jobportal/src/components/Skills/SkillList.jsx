import React, { useEffect, useState } from 'react';
import { getAllSkills } from '../../services/skillService'; // Adjust the import path as needed

const SkillList = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const data = await getAllSkills();
                console.log(data); // Debugging line
                setSkills(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching skills:', error);
                setError('Failed to fetch skills.');
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    if (loading) return <div className="alert alert-info">Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Skill List</h2>
            <ul className="list-group">
                {skills.map(skill => (
                    <li key={skill.skillId} className="list-group-item">
                        {skill.skillName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillList;
