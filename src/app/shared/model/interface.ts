

export interface Iuser {
    fname: string;
    lname: string;
    email: string;
    contact: number;
    id: number;

}

export interface Icar {
    brand: string;
    model: string;
    year: number;
    price: number;
    fuelType: string;
    color: string;
    mileage: number;
}

export interface Ibike {

    brand: string;
    model: string;
    year: number;
    price: number;
    fuelType: string;
    color: string;
    mileage: number;
}

export interface Imobile {

    brand: string;
    model: string;
    price: number;
    ram: string;
    storage: string;
    id: number;
}

export interface Ilaptop {
    brand: string;
    model: string;
    price: number;
    ram: string;
    storage: string;
    processor: string;
    id: number;
}

export interface Ibooks {
    title: string;
    author: string;
    price: number;
    language: string;
    publishedYear: number;
    id: number;
}

export interface Imovies {
    title: string;
    director: string;
    genre: string;
    releaseYear: number;
    rating: number;
    language: string;
    id: number;
}

export interface Igames {
    title: string;
    genre: string;
    platform: string;
    releaseYear: number;
    rating: number;
    developer: string;
    id: number;
}

export interface ITV {
    brand: string;
    model: string;
    screenSize: string;
    displayType: string;
    resolution: string;
    price: number;
    id: number;
}

export interface Iwatch {
    brand: string;
    model: string;
    type: string;
    display: string;
    price: number;
    waterResistance: string;
    id: number;
}

export interface Isimcard {
    brand: string;
    planName: string;
    price: number;
    validity: string;
    data: string;
    calls: string;
    sms: string;
    id: number;
}

export interface Ifroot {
    name: string;
    color: string;
    pricePerKg: number;
    season: string;
    id: number;
}

export interface Ivag {
    name: string;
    color: string;
    pricePerKg: number;
    season: string;
    id: number;
}

export interface Igrocery {
    name: string;
    category: string;
    quantity: string;
    price: number;
    id: number;
}