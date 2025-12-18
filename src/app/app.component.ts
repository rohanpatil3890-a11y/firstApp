import { Component } from '@angular/core';
import { Ibike, Ibooks, Icar, Ifroot, Igames, Igrocery, Ilaptop, Imobile, Imovies, Isimcard, ITV, Iuser, Ivag, Iwatch } from './shared/model/interface';
import { posts } from './shared/const/post';
import { Iposts } from './shared/model/post';
import { Icars } from './shared/model/cars';
import { Cars } from './shared/const/cars';
import { Ipost } from './shared/model/jsonPost';
import { jsonPost } from './shared/const/json';
import { Iprod } from './shared/model/product';
import { products } from './shared/const/product';
import { Ipost2 } from './shared/model/post2';
import { posts2 } from './shared/const/post2';
import { Idev } from './shared/model/dev';
import { dev } from './shared/const/dev';
import { Imovie } from './shared/model/movie';
import { moviePosts } from './shared/const/movie';
import { Idev2 } from './shared/model/dev2';
import { educationPosts } from './shared/const/dev2';
import { IBike } from './shared/model/bike';
import { Bikes } from './shared/const/bike';
// import { mobiles } from './shared/const/mobile';
import { IMobile } from './shared/model/mobile';
import { Mobiles } from './shared/const/mobile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Card';

  post : Array<Iposts> = posts 

  Car : Array<Icars> = Cars

  Prod : Array<Iprod> = products

  JsonP : Array<Ipost> = jsonPost

  Post2 : Array<Ipost2> = posts2

  Dev : Array<Idev> = dev

  movie : Array<Imovie> = moviePosts

  edu : Array<Idev2> = educationPosts

  Bike : Array<IBike> =  Bikes

  Mobile : Array<IMobile> = Mobiles
  



  list  = "List"


   skills : Array<string> = ["HTML","CSS","JAVASCRIPT","ANGULAR","NODE.JS"]

   programmingLanguages: Array<string> = ["C", "C++", "Java", "Python", "TypeScript"];
   tools: Array<string> = ["Git", "GitHub", "VS Code", "Postman", "Docker"];
   softSkills: Array<string> = ["Communication", "Teamwork", "Problem Solving", "Time Management"];
   fruits: Array<string> = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
   cars: Array<string> = ["BMW", "Audi", "Mercedes", "Toyota", "Tesla"];
   bikes: Array<string> = ["Honda", "Yamaha", "Bajaj", "TVS", "Royal Enfield"];
   popularBikes: Array<string> = ["Splendor", "Pulsar", "Apache", "R15", "Classic 350"];
   brands: Array<string> = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];
   carBrands: Array<string> = ["BMW", "Audi", "Mercedes", "Toyota", "Tata"];

    users :  Array<Iuser> =[
  {
    fname: "Jhon",
    lname: "Doi",
    email: "rjhondoi@gmail.com",
    contact: 1234567890,
    id: 123
  },
  {
    fname: "May",
    lname: "Doi",
    email: "maydoi@gmail.com",
    contact: 9876543210,
    id: 124
  },
  {
    fname: "Rohan",
    lname: "Patil",
    email: "rohanpatil@gmail.com",
    contact: 9123456789,
    id: 125
  },
  {
    fname: "Amit",
    lname: "Sharma",
    email: "amitsharma@gmail.com",
    contact: 9988776655,
    id: 126
  },
  {
    fname: "Sneha",
    lname: "Kulkarni",
    email: "snehakulkarni@gmail.com",
    contact: 8899776655,
    id: 127
  }
];

    carB : Array<Icar> =[
  {
    brand: "Toyota",
    model: "Fortuner",
    year: 2023,
    price: 3500000,
    fuelType: "Diesel",
    color: "White",
    mileage: 14
  },
  {
    brand: "Honda",
    model: "City",
    year: 2022,
    price: 1200000,
    fuelType: "Petrol",
    color: "Black",
    mileage: 18
  },
  {
    brand: "Hyundai",
    model: "Creta",
    year: 2024,
    price: 1800000,
    fuelType: "Petrol",
    color: "Red",
    mileage: 17
  },
  {
    brand: "Tata",
    model: "Harrier",
    year: 2023,
    price: 2200000,
    fuelType: "Diesel",
    color: "Grey",
    mileage: 16
  },
  {
    brand: "Tesla",
    model: "Model 3",
    year: 2024,
    price: 4200000,
    fuelType: "Electric",
    color: "Blue",
    mileage: 0
  }
];

bikeO : Array<Ibike> =[
  {
    brand: "Royal Enfield",
    model: "Classic 350",
    year: 2023,
    price: 215000,
    fuelType: "Petrol",
    color: "Black",
    mileage: 35
  },
  {
    brand: "Bajaj",
    model: "Pulsar NS200",
    year: 2022,
    price: 165000,
    fuelType: "Petrol",
    color: "Red",
    mileage: 36
  },
  {
    brand: "TVS",
    model: "Apache RTR 160",
    year: 2024,
    price: 145000,
    fuelType: "Petrol",
    color: "Blue",
    mileage: 45
  },
  {
    brand: "Yamaha",
    model: "MT 15",
    year: 2023,
    price: 170000,
    fuelType: "Petrol",
    color: "Grey",
    mileage: 48
  },
  {
    brand: "Hero",
    model: "Splendor Plus",
    year: 2022,
    price: 80000,
    fuelType: "Petrol",
    color: "Silver",
    mileage: 70
  }
];

 mobiles : Array<Imobile> = [
  {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 95000,
    ram: "12GB",
    storage: "256GB",
    id: 201
  },
  {
    brand: "Apple",
    model: "iPhone 15",
    price: 80000,
    ram: "6GB",
    storage: "128GB",
    id: 202
  },
  {
    brand: "OnePlus",
    model: "OnePlus 12",
    price: 70000,
    ram: "16GB",
    storage: "512GB",
    id: 203
  },
  {
    brand: "Xiaomi",
    model: "Redmi Note 13 Pro",
    price: 28000,
    ram: "8GB",
    storage: "256GB",
    id: 204
  },
  {
    brand: "Vivo",
    model: "Vivo V30",
    price: 33000,
    ram: "12GB",
    storage: "256GB",
    id: 205
  }
];

 laptops : Array<Ilaptop> = [
  {
    brand: "Dell",
    model: "Inspiron 15",
    price: 65000,
    ram: "16GB",
    storage: "512GB SSD",
    processor: "Intel i5 12th Gen",
    id: 301
  },
  {
    brand: "HP",
    model: "Pavilion 14",
    price: 62000,
    ram: "16GB",
    storage: "1TB SSD",
    processor: "Intel i5 13th Gen",
    id: 302
  },
  {
    brand: "Lenovo",
    model: "IdeaPad Slim 5",
    price: 58000,
    ram: "16GB",
    storage: "512GB SSD",
    processor: "AMD Ryzen 5",
    id: 303
  },
  {
    brand: "Apple",
    model: "MacBook Air M2",
    price: 115000,
    ram: "8GB",
    storage: "256GB SSD",
    processor: "Apple M2",
    id: 304
  },
  {
    brand: "Asus",
    model: "Vivobook 15",
    price: 54000,
    ram: "8GB",
    storage: "512GB SSD",
    processor: "Intel i3 12th Gen",
    id: 305
  }
];

books : Array<Ibooks> = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    language: "English",
    publishedYear: 2018,
    id: 401
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 350,
    language: "English",
    publishedYear: 1988,
    id: 402
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 399,
    language: "English",
    publishedYear: 1997,
    id: 403
  },
  {
    title: "Ikigai",
    author: "Héctor García",
    price: 420,
    language: "English",
    publishedYear: 2016,
    id: 404
  },
  {
    title: "Bhagavad Gita",
    author: "Vyasa",
    price: 250,
    language: "Sanskrit",
    publishedYear: -500,
    id: 405
  }
];

 movies : Array<Imovies> = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    releaseYear: 2010,
    rating: 8.8,
    language: "English",
    id: 501
  },
  {
    title: "3 Idiots",
    director: "Rajkumar Hirani",
    genre: "Drama / Comedy",
    releaseYear: 2009,
    rating: 8.4,
    language: "Hindi",
    id: 502
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    releaseYear: 2014,
    rating: 8.6,
    language: "English",
    id: 503
  },
  {
    title: "Bahubali: The Beginning",
    director: "S. S. Rajamouli",
    genre: "Action / Fantasy",
    releaseYear: 2015,
    rating: 8.0,
    language: "Telugu",
    id: 504
  },
  {
    title: "KGF: Chapter 1",
    director: "Prashanth Neel",
    genre: "Action / Drama",
    releaseYear: 2018,
    rating: 8.2,
    language: "Kannada",
    id: 505
  }
];

 games : Array<Igames> = [
  {
    title: "God of War",
    genre: "Action / Adventure",
    platform: "PlayStation",
    releaseYear: 2018,
    rating: 9.5,
    developer: "Santa Monica Studio",
    id: 601
  },
  {
    title: "PUBG: Battlegrounds",
    genre: "Battle Royale",
    platform: "PC / Mobile",
    releaseYear: 2017,
    rating: 8.2,
    developer: "Krafton",
    id: 602
  },
  {
    title: "GTA V",
    genre: "Action / Open World",
    platform: "PC / PlayStation / Xbox",
    releaseYear: 2013,
    rating: 9.6,
    developer: "Rockstar Games",
    id: 603
  },
  {
    title: "Minecraft",
    genre: "Sandbox / Survival",
    platform: "PC / Mobile / Console",
    releaseYear: 2011,
    rating: 9.0,
    developer: "Mojang",
    id: 604
  },
  {
    title: "Call of Duty: Warzone",
    genre: "FPS",
    platform: "PC / Console",
    releaseYear: 2020,
    rating: 8.4,
    developer: "Infinity Ward",
    id: 605
  }
];

tvBrands : Array<ITV> = [
  {
    brand: "Samsung",
    model: "Crystal 4K UHD",
    screenSize: "55 inch",
    displayType: "LED",
    resolution: "4K",
    price: 52000,
    id: 801
  },
  {
    brand: "LG",
    model: "OLED C2",
    screenSize: "65 inch",
    displayType: "OLED",
    resolution: "4K",
    price: 185000,
    id: 802
  },
  {
    brand: "Sony",
    model: "Bravia X90K",
    screenSize: "55 inch",
    displayType: "LED",
    resolution: "4K",
    price: 140000,
    id: 803
  },
  {
    brand: "OnePlus",
    model: "Y1S Pro",
    screenSize: "50 inch",
    displayType: "QLED",
    resolution: "4K",
    price: 42000,
    id: 804
  },
  {
    brand: "Mi",
    model: "X Pro",
    screenSize: "43 inch",
    displayType: "LED",
    resolution: "4K",
    price: 32000,
    id: 805
  }
];

watches : Array<Iwatch> = [
  {
    brand: "Apple",
    model: "Watch Series 9",
    type: "Smart Watch",
    display: "OLED",
    price: 45000,
    waterResistance: "50m",
    id: 901
  },
  {
    brand: "Samsung",
    model: "Galaxy Watch 6",
    type: "Smart Watch",
    display: "AMOLED",
    price: 38000,
    waterResistance: "50m",
    id: 902
  },
  {
    brand: "Noise",
    model: "ColorFit Pro 4",
    type: "Smart Watch",
    display: "AMOLED",
    price: 3500,
    waterResistance: "5ATM",
    id: 903
  },
  {
    brand: "Fossil",
    model: "Gen 6",
    type: "Smart Watch",
    display: "AMOLED",
    price: 24000,
    waterResistance: "30m",
    id: 904
  },
  {
    brand: "Titan",
    model: "Edge",
    type: "Analog",
    display: "Analog Dial",
    price: 12000,
    waterResistance: "30m",
    id: 905
  }
];

simCards : Array<Isimcard> = [
  {
    brand: "Jio",
    planName: "True 5G Unlimited",
    price: 299,
    validity: "28 Days",
    data: "1.5GB/day",
    calls: "Unlimited",
    sms: "100/day",
    id: 1101
  },
  {
    brand: "Airtel",
    planName: "Unlimited Plus",
    price: 319,
    validity: "30 Days",
    data: "2GB/day",
    calls: "Unlimited",
    sms: "100/day",
    id: 1102
  },
  {
    brand: "Vi",
    planName: "Hero Unlimited",
    price: 299,
    validity: "28 Days",
    data: "1GB/day",
    calls: "Unlimited",
    sms: "100/day",
    id: 1103
  },
  {
    brand: "BSNL",
    planName: "Value Recharge",
    price: 187,
    validity: "28 Days",
    data: "2GB/day",
    calls: "Unlimited",
    sms: "100/day",
    id: 1104
  },
  {
    brand: "Airtel",
    planName: "Annual Plan",
    price: 1799,
    validity: "365 Days",
    data: "24GB Total",
    calls: "Unlimited",
    sms: "100/day",
    id: 1105
  }
];

fruit : Array<Ifroot> = [
  {
    name: "Apple",
    color: "Red",
    pricePerKg: 180,
    season: "Winter",
    id: 1301
  },
  {
    name: "Banana",
    color: "Yellow",
    pricePerKg: 60,
    season: "All Season",
    id: 1302
  },
  {
    name: "Mango",
    color: "Yellow",
    pricePerKg: 250,
    season: "Summer",
    id: 1303
  },
  {
    name: "Orange",
    color: "Orange",
    pricePerKg: 120,
    season: "Winter",
    id: 1304
  },
  {
    name: "Grapes",
    color: "Green",
    pricePerKg: 90,
    season: "Winter",
    id: 1305
  }
];

vegetables : Array<Ivag> = [
  {
    name: "Potato",
    color: "Brown",
    pricePerKg: 40,
    season: "All Season",
    id: 1401
  },
  {
    name: "Tomato",
    color: "Red",
    pricePerKg: 60,
    season: "Winter",
    id: 1402
  },
  {
    name: "Onion",
    color: "Red",
    pricePerKg: 35,
    season: "All Season",
    id: 1403
  },
  {
    name: "Carrot",
    color: "Orange",
    pricePerKg: 80,
    season: "Winter",
    id: 1404
  },
  {
    name: "Cauliflower",
    color: "White",
    pricePerKg: 50,
    season: "Winter",
    id: 1405
  }
];

grocery : Array<Igrocery> = [
  {
    name: "Rice",
    category: "Grains",
    quantity: "5 kg",
    price: 320,
    id: 1501
  },
  {
    name: "Wheat Flour",
    category: "Grains",
    quantity: "10 kg",
    price: 450,
    id: 1502
  },
  {
    name: "Sugar",
    category: "Essentials",
    quantity: "2 kg",
    price: 90,
    id: 1503
  },
  {
    name: "Cooking Oil",
    category: "Essentials",
    quantity: "1 L",
    price: 160,
    id: 1504
  },
  {
    name: "Tea Powder",
    category: "Beverages",
    quantity: "500 g",
    price: 280,
    id: 1505
  }
];


}
