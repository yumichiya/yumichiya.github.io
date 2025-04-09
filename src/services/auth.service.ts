import { User } from "../models/user.model";

const API_BASE_URL = 'https://frontend-take-home-service.fetch.com';

export const getUser = async (userData: User) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        console.log('Failed to login user');
        return false;
    }
    console.log('Login successful');
    return true;
};