# Kintent Collaboration Exercise

Welcome to the Kintent Collaboration Exercise (for Frontend Engineers). 
 
The goal of this project is to simulate our work environment
so all involved can get a sense of what it might be like to work together.
We are a fully remote, distributed team, so it is important that we can 
communicate effectively, and be highly productive using tools 
like Slack and Zoom.

## Table of Contents

- [Kintent Collaboration Exercise](#kintent-collaboration-exercise)
  - [Table of Contents](#table-of-contents)
  - [Expected time commitment](#expected-time-commitment)
  - [What we're looking for](#what-were-looking-for)
  - [Requirements](#requirements)
    - [Application](#application)
    - [Usability](#usability)
    - [Notes](#notes)
    - [Documentation](#documentation)
      - [README](#readme)
  - [Deliverables](#deliverables)
    - [Git commits](#git-commits)
      - [TL;DR](#tldr)
  - [Resources](#resources)
    - [For developers coming from another language](#for-developers-coming-from-another-language)
    - [Setting up your environment](#setting-up-your-environment)
  - [Node documentation](#node-documentation)
  - [Acknowledgements](#acknowledgements)
    - [Emulator Code](#emulator-code)
    - [Create React App](#create-react-app)

Your task is to create a Web version of an [NES](https://en.wikipedia.org/wiki/Nintendo_Entertainment_System)
emulator (specifically built-on [JSNES](https://github.com/bfirsh/jsnes)) that allows folks to run NES games.

The JSNES repo has some sample game files that can be used if needed.

## Expected time commitment

You should accomplish what you can in 3 hours.

## What we're looking for

There are no correct answers or specific things that we expect to see. We're much
more interested in the experience of working with you.

This exercise allows us to:

- See an example of your work
- See how you think through problems
- See how you collaborate as a remote employee
- See how you handle vague requirements
- Give you a chance to evaluate how we work with you remotely
 
 ## Requirements
You should provide a front-end to [JSNES](https://github.com/bfirsh/jsnes) using
[React](https://reactjs.org/).

### Application

The client should be able to perform the following actions using your API:

1. The front-end must be able to render image frames from a running instance of JSNES
2. The front-end must be able to render audio frames from a running instance of JSNES
3. The front-end must be able to send valid user-input to the running instance of JSNES

### Usability

The only expected knowledge of a user is that they know how to play NES games.  The test user is expected
to launch the webapp and be able to start playing a game without needing to read a manual or README.

### Notes
- You are responsible for determining the overall interface to this application, but can ask for design help
  if wanted.
- You are responsible for determining which features of an emulator you implemented and justifying why you
  implemented what you implemented. 

### Documentation

#### README
Please document the following in your `README`:

1. How to run your application on a mac or linux box 
   (I should be able to clone the repo and copy and paste these commands to run)
   1. This _includes_ how to get the instance of JSNES running
4. What was implemented and what wasn’t implemented
5. Why you chose to implement the features you did over the other features
6. What you would choose to work on next
7. A description of how your application behaves with multiple users
   (to the best of your ability) and what logic, if any, you implemented for this

## Deliverables

1. An updated repo (or a pending pull request) with your changes
2. The updated [README](README.md) as 
   [described here.](#readme)

### Git commits

It's important to show your work in this exercise, so we'd like you to commit to the 
repo after each feature you implement. A separate commit is not needed if two 
features are clearly linked. Also, you should make a git commit at ~3 hours regardless
of the state of the code. Feel free to use the commit message to document your
work.

#### TL;DR

- Commit after each feature is implemented
- Work that is tightly linked can share commits
- Commit the code at 3 hours regardless of the working state
- Git commit messages are a good place to add documentation / explanations of
  what's in your commit

## Communication

You will be invited to a Slack channel which you can use to ask questions, or clarify 
your understanding of the assignment. You can also use it to let us know when you're
done and would like us to review your assignment.

## Resources

### For developers coming from another language

*NOTE:* We can't vouch that these are the best resources, but they looked promising based on their contents.

- [I know Java](https://medium.com/@byrne.greg/transitioning-from-java-to-javascript-quick-guide-on-the-basics-you-need-to-immediately-know-ef95140a7d71)
- [I know C, C++, or Python](https://www.wooji-juice.com/blog/javascript-article.html)
- [I know C#](https://docs.microsoft.com/en-us/archive/msdn-magazine/2013/january/javascript-typescript-making-net-developers-comfortable-with-javascript)

### Setting up your environment

- [macOS](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-and-create-a-local-development-environment-on-macos)
   (*NOTE:* Slightly old but steps should still be the same)
- [RedHat flavored linux](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-centos-8)
- [Debian flavored linux](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)
- [For Windows (via WSL 2)](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)

## Node documentation

- [JSNES](https://github.com/bfirsh/jsnes)
  - [Sample ROM files to use](https://github.com/bfirsh/jsnes/tree/master/roms/lj65)
  - [API example](https://github.com/bfirsh/jsnes#usage)
- [JSNES Web UI](https://github.com/bfirsh/jsnes-web) (You're more than welcome to read this repo, but please don't
  use any of the code from the repo)
- [Node](https://nodejs.org/api/)
- [npm](https://docs.npmjs.com/)

## Acknowledgements

### Emulator Code
The assignment uses the excellent [JSNES](https://github.com/bfirsh/jsnes) by [Ben Firshman](https://github.com/bfirsh)
who has also made a GUI available [JSNES Web UI](https://github.com/bfirsh/jsnes-web).

### Create React App
This project was bootstrapped with (Create React App)[https://create-react-app.dev/]
