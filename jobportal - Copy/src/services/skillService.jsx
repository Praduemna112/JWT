import axios from 'axios';

// Replace with your backend URL
const BASE_URL = 'http://localhost:8080/api/skills';

// Get all skills
export const getAllSkills = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getall`);
        return response.data;
    } catch (error) {
        console.error('Error fetching skills:', error);
        throw error;
    }
};

// Get skill by ID
export const getSkillById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/get/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching skill with ID ${id}:`, error);
        throw error;
    }
};

// Create a new skill
export const createSkill = async (skillDTO) => {
    try {
        const response = await axios.post(`${BASE_URL}/createskill`, skillDTO);
        return response.data;
    } catch (error) {
        console.error('Error creating skill:', error);
        throw error;
    }
};

// Update an existing skill
export const updateSkill = async (id, skillDTO) => {
    try {
        const response = await axios.put(`${BASE_URL}/update/${id}`, skillDTO);
        return response.data;
    } catch (error) {
        console.error(`Error updating skill with ID ${id}:`, error);
        throw error;
    }
};

// Delete a skill
export const deleteSkill = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/delete/${id}`);
    } catch (error) {
        console.error(`Error deleting skill with ID ${id}:`, error);
        throw error;
    }
};
