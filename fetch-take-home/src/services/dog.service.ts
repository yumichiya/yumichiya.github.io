import { DogSearch } from "../models/dog.model";

const API_BASE_URL = 'https://frontend-take-home-service.fetch.com';

export const getDogBreeds = async () => {
    const response = await fetch(`${API_BASE_URL}/dogs/breeds`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    return response.json();
};

export const searchDogBreeds = async (dto: DogSearch, dogSort: string, fromPage: number) => {
    let params = new URLSearchParams("");
    if(dto.breeds.length) {
        if(dto.breeds.length > 1) {
            dto.breeds.map(breed => params.append("breeds", breed))
        } else {
            params.append("breeds", dto.breeds[0]);
        }
    }
    if(dto.zipCodes.length) {
        if(dto.zipCodes.length > 1) {
            dto.zipCodes.map(zipCodes => params.append("zipCodes", zipCodes))
        } else {
            params.append("zipCodes", dto.zipCodes[0]);
        }
    }

    if(dto.ageMin) {
        params.append("ageMin", dto.ageMin);
    }
    if(dto.ageMax) {
        params.append("ageMax", dto.ageMax);
    }

    const response = await fetch(`${API_BASE_URL}/dogs/search?size=20&sort=breed:${dogSort}&from=${fromPage}&${params}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    });
    return response.json();
};

export const searchDogs = async (dto: string[]) => {
    const response = await fetch(`${API_BASE_URL}/dogs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(dto)
    });
    return response.json();
};


export const matchDogs = async (dogId: string[]) => {
    const response = await fetch(`${API_BASE_URL}/dogs/match`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(dogId)
    });
    return response.json();
};