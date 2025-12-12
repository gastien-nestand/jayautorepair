import { type ContactInquiry, type InsertContactInquiry, type User, type InsertUser, type Service, type Car, type Testimonial } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  
  getServices(): Promise<Service[]>;
  getCars(): Promise<Car[]>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactInquiries: Map<string, ContactInquiry>;
  private services: Service[];
  private cars: Car[];
  private testimonials: Testimonial[];

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    
    this.services = [
      {
        id: "1",
        name: "Engine Diagnostics",
        description: "State-of-the-art diagnostic equipment to quickly identify engine issues. We pinpoint problems accurately, saving you time and money on unnecessary repairs.",
        icon: "settings",
      },
      {
        id: "2",
        name: "Oil Changes",
        description: "Keep your engine running smoothly with our quick and thorough oil change service. We use premium oils and filters to extend your engine's life.",
        icon: "droplets",
      },
      {
        id: "3",
        name: "Brake Service",
        description: "Your safety is our priority. From brake pad replacement to complete system overhauls, we ensure your brakes perform when you need them most.",
        icon: "disc",
      },
      {
        id: "4",
        name: "Transmission Repair",
        description: "Expert transmission diagnostics and repair for both automatic and manual vehicles. We restore smooth shifting and reliable performance.",
        icon: "wrench",
      },
      {
        id: "5",
        name: "AC Repair",
        description: "Stay cool with our comprehensive AC service. From refrigerant recharge to compressor replacement, we handle all climate control needs.",
        icon: "snowflake",
      },
      {
        id: "6",
        name: "Tire Rotation & Alignment",
        description: "Extend tire life and improve handling with professional rotation and precision alignment. We ensure even wear and optimal vehicle control.",
        icon: "circle",
      },
      {
        id: "7",
        name: "Full Vehicle Inspections",
        description: "Comprehensive multi-point inspections to catch issues before they become expensive problems. Perfect for pre-purchase or routine maintenance.",
        icon: "clipboard",
      },
    ];
    
    this.cars = [
      {
        id: "1",
        make: "Toyota",
        model: "Camry SE",
        year: 2021,
        price: 24995,
        mileage: 32000,
        features: ["Backup Camera", "Bluetooth", "Lane Assist", "Apple CarPlay"],
        image: "/car1.jpg",
      },
      {
        id: "2",
        make: "Honda",
        model: "CR-V EX",
        year: 2020,
        price: 27500,
        mileage: 41000,
        features: ["All-Wheel Drive", "Sunroof", "Heated Seats", "Remote Start"],
        image: "/car2.jpg",
      },
      {
        id: "3",
        make: "Ford",
        model: "F-150 XLT",
        year: 2019,
        price: 35900,
        mileage: 55000,
        features: ["4x4", "Towing Package", "Crew Cab", "Bed Liner"],
        image: "/car3.jpg",
      },
      {
        id: "4",
        make: "Chevrolet",
        model: "Malibu LT",
        year: 2022,
        price: 22750,
        mileage: 18000,
        features: ["Turbo Engine", "Android Auto", "Rear Cross Traffic Alert"],
        image: "/car4.jpg",
      },
      {
        id: "5",
        make: "Nissan",
        model: "Rogue SV",
        year: 2021,
        price: 26400,
        mileage: 28000,
        features: ["ProPILOT Assist", "Panoramic Sunroof", "360 Camera"],
        image: "/car5.jpg",
      },
      {
        id: "6",
        make: "Hyundai",
        model: "Tucson SEL",
        year: 2022,
        price: 28995,
        mileage: 15000,
        features: ["Turbo", "Blind Spot Monitor", "Wireless Charging", "LED Lights"],
        image: "/car6.jpg",
      },
    ];
    
    this.testimonials = [
      {
        id: "1",
        name: "Michael Rodriguez",
        rating: 5,
        text: "Jay Auto Repair saved me from an expensive mistake. They diagnosed my engine issue when two other shops couldn't. Honest pricing and excellent work!",
        service: "Engine Repair",
      },
      {
        id: "2",
        name: "Sarah Thompson",
        rating: 5,
        text: "Bought my Honda CR-V from Jay's and couldn't be happier. The inspection report was thorough, and they even fixed a small issue before delivery at no extra cost.",
        service: "Car Purchase",
      },
      {
        id: "3",
        name: "David Chen",
        rating: 5,
        text: "I've been bringing all my family's cars here for 3 years. They're fast, fair, and always explain what needs to be done without the upsell pressure.",
        service: "Regular Maintenance",
      },
      {
        id: "4",
        name: "Jennifer Martinez",
        rating: 5,
        text: "My brakes were squealing terribly. Jay's team had me in and out in under two hours, and the price was exactly what they quoted. True professionals!",
        service: "Brake Service",
      },
      {
        id: "5",
        name: "Robert Williams",
        rating: 5,
        text: "The transmission in my truck was slipping. Other shops wanted $4000+, but Jay Auto fixed it for half that. Still running perfect a year later.",
        service: "Transmission Repair",
      },
      {
        id: "6",
        name: "Amanda Foster",
        rating: 5,
        text: "Best auto shop experience ever! They treated me with respect, explained everything clearly, and my AC is blowing ice cold again. Highly recommend!",
        service: "AC Repair",
      },
    ];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const contactInquiry: ContactInquiry = {
      ...inquiry,
      id,
      createdAt: new Date(),
    };
    this.contactInquiries.set(id, contactInquiry);
    return contactInquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async getServices(): Promise<Service[]> {
    return this.services;
  }

  async getCars(): Promise<Car[]> {
    return this.cars;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonials;
  }
}

export const storage = new MemStorage();
