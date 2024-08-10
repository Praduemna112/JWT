import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/joblistings';

export const getAllJobListings = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/gatall`);
        return response.data;
    } catch (error) {
        console.error('Error fetching job listings:', error);
        throw error;
    }
};

export const createJobListing = async (jobListingDTO) => {
    try {
        const response = await axios.post(`${BASE_URL}/createjoblisting`, jobListingDTO);
        return response.data;
    } catch (error) {
        console.error('Error creating job listing:', error);
        throw error;
    }
};

export const getJobListingById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/getbyid/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching job listing with ID ${id}:`, error);
        throw error;
    }
};

export const updateJobListing = async (id, jobListingDTO) => {
    try {
        const response = await axios.put(`${BASE_URL}/update/${id}`, jobListingDTO);
        return response.data;
    } catch (error) {
        console.error(`Error updating job listing with ID ${id}:`, error);
        throw error;
    }
};

export const deleteJobListing = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/delete/${id}`);
    } catch (error) {
        console.error(`Error deleting job listing with ID ${id}:`, error);
        throw error;
    }
};
