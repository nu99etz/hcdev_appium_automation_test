require('dotenv').config()
const wdio = require('webdriverio');

const initDriver = async () => {
    const osSpecificOps = {
        'platformName': process.env.APPIUM_PLATFORM_NAME,
        'appium:deviceName': process.env.APPIUM_DEVICE_NAME,
        'appium:app': process.env.APPIUM_APP_LOCATION,
    }
    const opts = {
        port: 4723,
        capabilities: {
            ...osSpecificOps,
            'appium:automationName': process.env.APPIUM_AUTOMATION_NAME,
            'appium:retryBackoffTime': 500
        }
    };

    return await wdio.remote(opts)
}

module.exports = {
    initDriver
}