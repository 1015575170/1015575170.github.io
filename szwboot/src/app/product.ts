export class Price {
    Price: number;
    unit: string;
}


export class Product {
    
    category: string;
    pricing: Price;
    features: string[];
    action: string;
}