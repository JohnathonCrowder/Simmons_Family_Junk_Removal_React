import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = 'http://localhost:5000/api/reviews';

// Arrays of sample data
const names = [
    'John Smith', 'Mary Johnson', 'David Wilson', 'Sarah Davis', 'Michael Brown',
    'Jennifer Garcia', 'James Miller', 'Lisa Anderson', 'Robert Taylor', 'Jessica Martinez',
    'William Thomas', 'Elizabeth White', 'Richard Jackson', 'Susan Harris', 'Joseph Clark',
    'Margaret Lewis', 'Charles Lee', 'Patricia Walker', 'Thomas Hall', 'Barbara Young',
    'Daniel Martinez', 'Linda Robinson', 'Paul Scott', 'Karen Phillips', 'Mark Evans',
    'Sandra Torres', 'Steven King', 'Michelle Wright', 'Kevin Hill', 'Laura Adams'
];

const cities = [
    'Springfield', 'Nixa', 'Ozark', 'Republic', 'Willard',
    'Strafford', 'Rogersville', 'Battlefield', 'Pleasant Hope', 'Fair Grove',
    'Marshfield', 'Clever', 'Bolivar', 'Buffalo', 'Ash Grove'
];

const reviewSites = ['google', 'yelp', 'facebook'];

const reviewTemplates = [
    "Absolutely incredible service! The team at Simmons Family Junk Removal was professional and efficient. They cleared out my entire LOCATION basement in no time.",
    "Called them for same-day service in LOCATION, and they didn't disappoint. The crew was friendly and made the whole process stress-free.",
    "Best junk removal service in LOCATION! They handled everything with care and professionalism. Fair pricing and excellent customer service.",
    "Great experience with Simmons Family Junk Removal. They helped clear out my parent's home in LOCATION. Very compassionate and thorough service.",
    "The team showed up on time and got straight to work. They removed all our renovation debris from our LOCATION home without any hassle.",
    "Five-star service! They cleaned out our garage in LOCATION, and I couldn't be happier with the results. Professional and efficient.",
    "Outstanding customer service! From scheduling to completion, everything was seamless. They cleaned out our LOCATION property quickly.",
    "Highly recommend this company! They removed old furniture from our LOCATION house and were super careful not to damage anything.",
    "Fantastic experience! They cleared out years of accumulated junk from our LOCATION storage unit. Fast, friendly, and fairly priced.",
    "These guys are amazing! They helped us clear out an entire house in LOCATION after a move. Very professional and courteous team."
];

// Helper Functions
const getRandomItem = (array: string[]): string => {
    return array[Math.floor(Math.random() * array.length)];
};

const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const generateReview = () => {
    const name = getRandomItem(names);
    const city = getRandomItem(cities);
    const reviewSite = getRandomItem(reviewSites);
    let review = getRandomItem(reviewTemplates).replace('LOCATION', city);

    return {
        name,
        city,
        reviewSite,
        review
    };
};

const generateReviews = async (count: number) => {
    console.log(`Starting to generate ${count} reviews...`);
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < count; i++) {
        try {
            const reviewData = generateReview();
            const response = await axios.post(BASE_URL, reviewData);
            successCount++;
            console.log(`Generated review ${i + 1}/${count}: ${reviewData.name} from ${reviewData.city}`);
            
            await delay(100);
        } catch (error) {
            errorCount++;
            if (error instanceof Error) {
                console.error(`Error generating review ${i + 1}:`, 
                    axios.isAxiosError(error) 
                        ? error.response?.data || error.message 
                        : error.message
                );
            } else {
                console.error(`Error generating review ${i + 1}:`, 'An unknown error occurred');
            }
        }
    }

    // Final report
    console.log('\nGeneration Complete!');
    console.log(`Successfully generated: ${successCount} reviews`);
    console.log(`Failed to generate: ${errorCount} reviews`);

    // Verify final count
    try {
        const response = await axios.get(BASE_URL);
        console.log(`Total reviews in database: ${response.data.length}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error verifying final count:', 
                axios.isAxiosError(error) 
                    ? error.response?.data || error.message 
                    : error.message
            );
        } else {
            console.error('Error verifying final count:', 'An unknown error occurred');
        }
    }
};

// Run the script
generateReviews(100);