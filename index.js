const axios = require('axios');

// A function to check for updates in dependencies
async function checkForUpdates() {
  try {
    // Example: Checking for updates on the 'axios' package
    const response = await axios.get('https://registry.npmjs.org/axios');
    const latestVersion = response.data['dist-tags'].latest;

    // Log the news about the update
    console.log(`News: The latest version of 'axios' is ${latestVersion}`);
    console.log(`Your current version in package.json is: ${require('./package.json').dependencies.axios}`);

    // Check if the current version in package.json is outdated
    const currentVersion = require('./package.json').dependencies.axios;
    if (currentVersion !== `^${latestVersion}`) {
      console.log(`Project News: 'axios' was updated to version ${latestVersion} from ${currentVersion}`);
    } else {
      console.log("Project News: No updates for 'axios' at this time.");
    }
  } catch (error) {
    console.error('Error checking for updates:', error);
  }
}

// Call the function to check for updates
checkForUpdates();
