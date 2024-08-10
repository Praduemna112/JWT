// src/services/recruiterService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/recruiters';

export const getAllRecruiters = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getall`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recruiters:', error);
        throw error;
    }
};

export const createRecruiter = async (recruiterDTO) => {
    try {
        const response = await axios.post(`${BASE_URL}/addrecruiter`, recruiterDTO);
        return response.data;
    } catch (error) {
        console.error('Error creating recruiter:', error);
        throw error;
    }
};

export const getRecruiterById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/getbyid/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching recruiter with ID ${id}:`, error);
        throw error;
    }
};

export const updateRecruiter = async (id, recruiterDTO) => {
    try {
        const response = await axios.put(`${BASE_URL}/update/${id}`, recruiterDTO);
        return response.data;
    } catch (error) {
        console.error(`Error updating recruiter with ID ${id}:`, error);
        throw error;
    }
};

export const deleteRecruiter = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/delete/${id}`);
    } catch (error) {
        console.error(`Error deleting recruiter with ID ${id}:`, error);
        throw error;
    }
};
