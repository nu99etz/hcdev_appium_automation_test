const { byValueKey, byText } = require('appium-flutter-finder');

const authProcess = async (driver, username, password = '123456') => {
    
    const buttonFinder = byValueKey("btnLogin");
    const inputUsername = byValueKey("usernameKey")
    const inputPassword = byValueKey("passwordKey")

    await driver.elementSendKeys(inputUsername, username)
    await driver.elementSendKeys(inputPassword, password)
    
    await driver.elementClick(buttonFinder);
}

module.exports = {
    authProcess
}