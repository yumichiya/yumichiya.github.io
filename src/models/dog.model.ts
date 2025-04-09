export interface DogBreed {
    value: string; 
    name: string;
}

export interface Dog {
    age: number;
    breed: string;
    id: string;
    img: string;
    name: string;
    zip_code: string;
    favorited: boolean;
}

export interface DogBreedResult {
    next: string;
    prev: string;
    resultIds: string[];
    total: number;
}

export interface DogSearch {
    breeds: string[];
    zipCodes: string[];
    ageMin: string;
    ageMax: string;
}

export interface MatchDogResult {
    match: string;
}