// Function to get location from coordinates and render country
const whereAmI = async function (lat, lng) {
    try {
        // Part 1: Reverse geocoding
        // Construct the URL for reverse geocoding
        const geoResponse = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

        // Check if response is ok
        if (!geoResponse.ok) {
            throw new Error(`Geocoding failed: ${geoResponse.status}`);
        }

        // Parse the JSON response
        const geoData = await geoResponse.json();

        // Extract location data
        const city = geoData.city || 'Unknown City';
        const country = geoData.country || 'Unknown Country';

        // Log the location
        console.log(`You are in ${city}, ${country}`);

        // Part 2: Fetch and render country details
        // Use country name to fetch country details from the countries API
        const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${country}`);

        // Check if response is ok
        if (!countryResponse.ok) {
            throw new Error(`Country API request failed: ${countryResponse.status}`);
        }

        // Parse the JSON response
        const countryData = await countryResponse.json();
        
        // Log country details
        console.log(`Country Details: ${JSON.stringify(countryData[0], null, 2)}`);

    } catch (error) {
        // Log errors to the console
        console.error(`Error: ${error.message}`);
    }
};

// Test data
whereAmI(52.508, 13.381); // Berlin, Germany
whereAmI(19.037, 72.873); // Mumbai, India
whereAmI(-33.933, 18.474); // Cape Town, South Africa
