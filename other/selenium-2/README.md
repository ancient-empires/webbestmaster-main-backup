Automatic test for Viaden media.

urlPostfix - add postfix after url (default: '') - f.e. urlPostfix=?tablet=1
url - push custom url instead default url (default: 'http://gala-bingo/') - f.e. url=http://m.galabingo.com
browser - set browser (default: chrome) - f.e. browser=firefox
list - list of test (default: false, e.g. all tests) - f.e. list=login,logout
host - run on mobile device (default: ''), if use '+host' or 'host=true' - will be run om mobile device


// package.json has dependency "nodemailer" it will be used in future

how to run test on mobile device

1 - download and install: android-server-2.21.0.apk
1.1 - if needed install KiesSetup.exe or Kies_3.2.14113_3.exe
2 - download android SDK
3 - connect device and PC
4 - go to ~sdk\platform-tools\, there you will see 'adb.exe' file
5 - run from cmd 'adb devices' or '$./adb devices' to see list of connected devices, if list is empty install Keis (see 1.1)
6 - run from cmd 'adb forward tcp:8080 tcp:8080' to listen :8080 (use the same port for webdriver host f.e 'http://localhost:8080/wd/hub' )

run webdriver on device and run test with follow constructor

var webDriver = require('selenium-webdriver');
var driver = new webDriver
	.Builder()
	.usingServer('http://localhost:8080/wd/hub') // leave empty ( .usingServer() or with '' ) to use regular port
	.withCapabilities({ browserName: args.browser })
	.build();

done

Appendix

Install apk to device from pc
$./adb -s <serialId> -e install -r  android-server.apk

Start the Android WebDriver application through the UI of the device or by running this command:
$./adb -s <serialId> shell am start -a android.intent.action.MAIN -n org.openqa.selenium.android.app/.MainActivity

You can start the application in debug mode, which has more verbose logs by doing:
$./adb -s <serialId> shell am start -a android.intent.action.MAIN -n org.openqa.selenium.android.app/.MainActivity -e debug true



