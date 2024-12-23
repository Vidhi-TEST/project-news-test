const axios = require('axios');

// A function to check for updates in dependencies
async function checkForUpdates() {
  try {
    const response = await axios.get('https://registry.npmjs.org/axios');
    console.log(`Latest version of axios: ${response.data['dist-tags'].latest}`);
    // Add your logic to generate project news here
  } catch (error) {
    console.error('Error checking for updates:', error);
  }
}

// Run the check
checkForUpdates();
