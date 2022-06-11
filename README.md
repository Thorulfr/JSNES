# NES Emulator Frontend Project

## What this is

This web service uses the [JSNES](https://github.com/bfirsh/jsnes)
library to simulate NES games.

This is a solution to the Kintent Collaboration Exercise. Please see
[INSTRUCTIONS.md](INSTRUCTIONS.md) for more details.

## How to run

1. Clone the repository to your local machine.
2. Navigate to the cloned repository and open a terminal window.
3. Run "npm install" from your terminal to install required modules and their dependencies.
4. Run "npm start" from your terminal to initialize a local instance of the application on machine.
5. In your browser, navigate to [localhost:3000](localhost:3000) (or whatever port your machine is configured to serve local projects on).
6. Click the indicated link to start playing!

## Which API were used

This project is actually configured to run entirely client-side -- that is, entirely in your browser -- using files that are served exclusively to the client (well, it will be, once the last bits of code are completed, rendering the emulator functional). It's a bit of a stretch, but the only APIs utilized are the client's HTML5 history API (used by React and the BrowserRouter module to sync rendered React-rendered pages with the URL/address bar) and the browser's AudioContext API (used to render emulator audio).

## What API items are missing

None, as of now! If API calls are required in the future, I'll add and document them as necessary.

## What's implemented

Thus far, only the HTML and CSS are fully functional. The canvas and framework for basic video emulation are in place (as far as I can tell) -- these currently live in the _feature/jsnes_ branch -- but I'm having difficulties mounting and running NES roms. That's next on the to-do list, leading directly to...

## What's next?

There's quite a bit to still be deciphered and coded! But I've got a comprehensive plan of attack, which I'll tackle in the following order:

1. Configure and test the ROM loading functionality (using JSNES's sample _loadBinary_ and _load_ functions as guidelines). Once I can successfully load a client-served ROM, I'll move to step 2.
2. Resample the canvas that serves as the emulator's TV screen to fill a parent container, which will be appropriately sized according to standard breakpoints. I'll do so by calculating the ratio of the standard 256px x 240px NES resolution to the pixel size of the canvas's parent container and reconfiguring the canvas's width and height to fit that container (whilst retaining the same width/height ratio of the original).
3. Assuming I run into speed/framerate issues, I'll configure and test a frame buffer to ensure ROMs are emulated at ~60.098814 (or as close to it as possible).
4. Implement audio using the client's AudioContext API.
5. Assuming I run into audio speed issues, I'll configure and test an audio buffer and ensure that the audio doesn't over/underrun the buffer. This will likely require fine-tuning and refinement even after subsequent steps are completed.
6. Add gamepad (rather than keyboard) functionality as well as custom keymapping.
7. Add more ROMs (in addition to those provided in the original JSNES repository).
8. Convert class components to functional components using _useState_ and _useEffect_ to handle component lifecycles, rather than _didMount_ and _didUpdate_.
9. Convert any and all images to appropriate 8-bit versions of themselves!

## Concurrency Notes

ROM loading will be handled asynchronously to avoid holding up the emulator page's loading process. Images, insofar as they are included (such as the image of the NES controller), will also be loaded asynchronously for the same reasons.

Inasmuch as you can consider buffers as concurrent processes/components, these obviously belong here. As much as possible, I'll configure the buffers to "fill in gaps" if I run into audiovisual underrun issues, hopefully such that the user doesn't even realize the speed discrepancy!
