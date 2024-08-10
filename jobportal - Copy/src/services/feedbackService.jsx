import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/feedbacks';

export const getAllFeedbacks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getall`);
        return response.data;
    } catch (error) {
        console.error('Error fetching feedbacks:', error);
        throw error;
    }
};

export const createFeedback = async (feedbackDTO) => {
    try {
        const response = await axios.post(`${BASE_URL}/createfeedback`, feedbackDTO);
        return response.data;
    } catch (error) {
        console.error('Error creating feedback:', error);
        throw error;
    }
};

export const getFeedbackById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/getbyid/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching feedback with ID ${id}:`, error);
        throw error;
    }
};

export const updateFeedback = async (id, feedbackDTO) => {
    try {
        const response = await axios.put(`${BASE_URL}/update/${id}`, feedbackDTO);
        return response.data;
    } catch (error) {
        console.error(`Error updating feedback with ID ${id}:`, error);
        throw error;
    }
};

export const deleteFeedback = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/delete/${id}`);
    } catch (error) {
        console.error(`Error deleting feedback with ID ${id}:`, error);
        throw error;
    }
};
