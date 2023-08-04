# Table of Contents

1. [Carouser Generator](#carousel-generator)
2. [Coding Challenge #20](#link-to-challenge)
3. [Business Logic](#business-logic)
4. [User Interface](#user-interface)
   1. [Step 1](#step-1)
   2. [Step 2](#step-2)
   2. [Step 3](#step-3)
   3. [Step 4](#step-4)
   4. [Step 5](#step-5)
   5. [Step 6](#step-6)
   6. [Going Further](#going-further)
5. [Getting Started CRA](#getting-started-with-create-react-app)   
   
# carousel-generator
A software tool that allows a user to create a carousel that they can use on a LinkedIn post. It’s essentially going to build a PDF document.

---
## Link to challenge
[Coding Challenge #20 - LinkedIn Carousel Generator](https://codingchallenges.substack.com/p/coding-challenge-20-linkedin-carousel?utm_source=post-email-title&publication_id=1483213&post_id=135523169&isFreemail=true&utm_medium=email)

## Business Logic

Build a software tool that allows a user to create a carousel that they can use on a LinkedIn post.   
Though you don’t have to use it for that - you could use it to generate handouts for your next tech talk - it’s essentially going to build a PDF document.



## User Interface

### Step 1

In this step the goal is to allow the user to preview a slide with some text on it.   
So that means the user should be presented with a GUI that shows a slide preview and a text box.   
When the text is updated the slide preview is updated.

LinkedIn supports multiple sizes, with a common size being the 1080 x 1080 pixel square.   
 The max supported is 4320 x 4320 pixels.   
 For this challenge, stick to a 1080 x 1080 square which will make it feasible to offer a full sized preview on most screens.

### Step 2

In this step the goal is to be able to add a profile image, which will be shown in the top left hand corner and their name that can be shown beneath it.

To do that, add the ability to upload an image as well as to specify name/handle. 

### Step 3

In this step the goal is to set the background and foreground colour as well as the font face and size.   
These will affect all the slides.

### Step 4

In this step the goal is to be able to add a slide and navigate through the slides, with the preview and edit options for the text on each slide.

### Step 5

In this step the goal is to add an image as the background of an individual slide, a high level of transparency is a good idea (or go one step further and make it configurable).

### Step 6

In this step the goal is to export the carousel as a PDF. The PDF should have one page per slide, reflecting the font, color, content and background image added for each slide.

### Going Further

Take this further and add support for PowerPoint and other formats.   
Try to integrate with the LinkedIn API to post it.

---
---
---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
