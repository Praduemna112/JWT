// src/services/subscriptionService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/subscriptions';

export const getAllSubscriptions = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getall`);
        return response.data;
    } catch (error) {
        console.error('Error fetching subscriptions:', error);
        throw error;
    }
};

export const createSubscription = async (subscriptionDTO) => {
    try {
        const response = await axios.post(`${BASE_URL}/createsubscription`, subscriptionDTO);
        return response.data;
    } catch (error) {
        console.error('Error creating subscription:', error);
        throw error;
    }
};

export const getSubscriptionById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/getbyid/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching subscription with ID ${id}:`, error);
        throw error;
    }
};

export const updateSubscription = async (id, subscriptionDTO) => {
    try {
        const response = await axios.put(`${BASE_URL}/update/${id}`, subscriptionDTO);
        return response.data;
    } catch (error) {
        console.error(`Error updating subscription with ID ${id}:`, error);
        throw error;
    }
};

export const deleteSubscription = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/delete/${id}`);
    } catch (error) {
        console.error(`Error deleting subscription with ID ${id}:`, error);
        throw error;
    }
};
