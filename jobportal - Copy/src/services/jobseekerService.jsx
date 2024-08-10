import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/jobseekers';

export const getAllJobSeekers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getall`);
        return response.data;
    } catch (error) {
        console.error('Error fetching job seekers:', error);
        throw error;
    }
};

export const createJobSeeker = async (jobSeekerDTO) => {
    try {
        const response = await axios.post(`${BASE_URL}`, jobSeekerDTO);
        return response.data;
    } catch (error) {
        console.error('Error creating job seeker:', error);
        throw error;
    }
};

export const getJobSeekerById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/getbyid/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching job seeker with ID ${id}:`, error);
        throw error;
    }
};

export const updateJobSeeker = async (id, jobSeekerDTO) => {
    try {
        const response = await axios.put(`${BASE_URL}/update/${id}`, jobSeekerDTO);
        return response.data;
    } catch (error) {
        console.error(`Error updating job seeker with ID ${id}:`, error);
        throw error;
    }
};

export const deleteJobSeeker = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/delete/${id}`);
    } catch (error) {
        console.error(`Error deleting job seeker with ID ${id}:`, error);
        throw error;
    }
};
