const axios = require('axios');

async function checkForUpdates() {
  try {
    const response = await axios.get('https://registry.npmjs.org/axios');
    const latestVersion = response.data['dist-tags'].latest;
    console.log(`Latest version of axios: ${latestVersion}`);
    // Example: Simulating news generation
    console.log(`Project news: axios was updated to version ${latestVersion}`);
  } catch (error) {
    console.error('Error checking for updates:', error);
  }
}

checkForUpdates();
