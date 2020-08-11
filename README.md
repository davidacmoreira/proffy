# Proffy

Proffy is a platform to connect teachers and students. Teachers can register in the platform, add classes of all kinds of subjects and the schedule that they will be available. The students can find a teacher to have a class in a specific subject, and in a convenient day / hour.

This project was developed using **Node.js** to *Backend Server*, **React** to *Frontend Web*, and **React Native** to *Frontend Mobile*. Also used: **TypeScript**, **SQLite**, **knex.js**, **Expo** and more.


## Prerequirements

### Node.js

Install the latest stable version (LTS - Long Term Support) of [**Node.js**](https://nodejs.org/en/download/package-manager/).

Execute the command `node -v` to check if is already installed.

### Expo-CLI (or Android/iOS Emulator)

To test the use of the mobile interface you need an emulator of Android/iOS system, or you can use [**Expo-CLI**](https://docs.expo.io/workflow/expo-cli/).

In case of using **Expo-CLI**, you also need to install [**Expo**](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) app in the Android mobile device or [**Expo Client**](https://apps.apple.com/us/app/expo-client/id982107779) app in the iOS mobile device.


## Install

The project have tree main directories: `server`, `web` and `mobile`.

To install all the packages you need to run `npm install` inside each directory.


## Run

To execute the *Backend Server* and use the API, run `npm start` or `npm run dev`. 

To execute the *Frontend Web* and use the web interface, run `npm start`. Wait for opnening a tab in the browser with the interface.

To execute the *Frontend Mobile* and use the mobile interface, run `npm start`. Wait for opening a tab in the browser with a *QR code*, that you need to scan with your mobile device, using the **Expo** app. You also need to be connected to the same network, in both devices.

> **NOTES:**
> * The *Frontend Web* and *Frontend Mobile* depend on the *Backend Server* to execute operations that need access to the datatbase, and will show some errors if you try to done some of those operations without the *Backend Server* running.
> * When the **Expo-CLI** start running and connecting with the mobile device, if you get some error like: *Error: ENOSPC: System limit for number of file watchers reached*, try this [solution](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details).
> * If you are using *Windows* and run into problems connecting the **Explo** app in mobile device with the running **Expo-CLI**, try to turn off the *Windows Firewall* for your private network.


## Acknowledgments

I developed part of this project during the [Next Level Week 2 - Booster](https://github.com/Rocketseat/nlw-02-omnistack) (by [Rockeseat](https://rocketseat.com.br/) and [Diego Fernandes](https://github.com/diego3g)).


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
