# Ancient Empires 2

## Synopsis

**Ancient Empires 2** is a thrilling turn-based strategy game. In this sequel of the Ancient Empires 1 game, Galamar and Valadorn united again to fight against the army of darkness and protect the Kingdom of Thorin.

### Levels (Companies mode)

1. Temple Raiders
2. To the Rescue
3. Path of Shadows
4. Reinforcements
5. Escort Duty
6. Northbound
7. Rendezvous
8. Heaven's Fury

## Start game
You must have **Google Chrome** browser installed on your computer in order to run the game. If not, download and install it from [here](https://chrome.google.com).

After you have installed Google Chrome:

1. Run `npm install` to install the dependencies on this server.
2. Run `npm start` to start the game. The game will run at <http://localhost:10002>.
3. Open Google Chrome, and go to <http://localhost:10002> to start the game.

### Turn the game into PWA on localhost

First, you need to install the *development* dependencies using NPM.
```bash
npm install --save-dev
```

Then run
```bash
npm run build-pwa
```
to generate the worker scripts. The generated scripts will be put under the [www](./www/) directory. The files generated will be:

* `pwa-sw.js`
* `pwa-sw-js.map`
* `workbox-<revision>.js`
* `workbox-<revision>.js.map`

where the `<revision>` is the hex-digit hash code representing the workbox revision ID.

Then, run
```bash
npm start
```
in the terminal to start the server. You can start the game on <http://localhost:10002> in Google Chrome.

If you play it for a while, allowing *all* the static files to be cached, then you can see the **Install** button on the address bar, which allows you to install the game as a PWA. This allows you to continue playing it even after you stop the HTTP server running on port 1002.

![Install in Google Chrome](./screenshots/AE2%20Google%20Chrome%20install.png)

After installing, the game will run in a standalone window.

![Home screen in Google Chrome](./screenshots/AE2%20home%20screen%20standalone%20Google%20Chrome.png)