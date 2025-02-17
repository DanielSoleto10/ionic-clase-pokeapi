export interface DogBreedsList {
    count: number; 
    next: string | null; 
    previous: string | null; 
    results: DogBreed[]; 
}

export interface DogBreed {
    name: string; 
    url: string; 
}