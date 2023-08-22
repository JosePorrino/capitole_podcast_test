## Capitole Podcast - Musical Podcast Listening App

Welcome to Capitole Podcast! This application allows you to enjoy your favorite musical podcasts in a simple and convenient way. Here, you'll find three exciting views that will immerse you in the world of music and podcasts.

Enjoy the listening experience! 🎧🎶

## Installation

1. Clone this repository to your local machine.
2. Run the command `npm install` to install the dependencies.
3. After installing dependencies, run `npm run dev` to start the development server using Vite.

## Scripts

- `npm run dev`: Start the development server with Vite.
- `npm run build:dev`: Compile the project in development mode.
- `npm run build:prod`: Compile the project in production mode.
- `npm run preview`: Start a server to preview the compiled project.
- `npm test`: Run tests with Jest.
- `npm run test:watch`: Run tests in watch mode with coverage.
- `npm run eslint`: Run ESLint to analyze the code.
- `npm run eslint:fix`: Run ESLint to automatically analyze and fix the code.
- `npm run prettier`: Check code formatting with Prettier.
- `npm run prettier:fix`: Automatically format code according to Prettier rules.
- `npm run prepare`: Install Husky to set up pre-commit hooks.

### Key Features

- **Main View:** Explore a carefully curated list of musical podcasts. Scroll through the options, read descriptions, and choose the podcast that resonates with you.

- **Podcast Details:** Dive into the universe of a particular podcast. Get detailed information about the podcast, its host, and the range of available episodes.

- **Episode Details:** Explore the specifics of a particular episode. Listen to the episode, get information about the guests, and enjoy exclusive content.

### Additional Features and Technologies

- **Linting and Formatting:** This project enforces code quality and consistent formatting using ESLint and Prettier. Husky is set up to automatically run these checks before commits.

- **Routing with React Router DOM:** Navigate seamlessly through different views of the application with the powerful React Router DOM library.

- **Unit Testing with Jest:** Ensure your code's reliability with comprehensive unit tests using the Jest testing framework and React Testing Library.

- **Hexagonal Architecture with Axios:** The project follows a hexagonal architecture pattern for clean separation of concerns, and Axios is utilized for making HTTP requests in a modular way.

- **ITCSS Architecture:** The Inverted Triangle CSS (ITCSS) architecture is employed for maintaining a scalable and maintainable CSS structure.

Certainly, here's the updated section with information about Redux, Sagas, and Toolkit:

markdown
Copy code

### Additional Features and Technologies

- **Linting and Formatting:** This project enforces code quality and consistent formatting using ESLint and Prettier. Husky is set up to automatically run these checks before commits.

- **Routing with React Router DOM:** Navigate seamlessly through different views of the application with the powerful React Router DOM library.

- **Unit Testing with Jest:** Ensure your code's reliability with comprehensive unit tests using the Jest testing framework and React Testing Library.

- **Hexagonal Architecture with Axios:** The project follows a hexagonal architecture pattern for clean separation of concerns, and Axios is utilized for making HTTP requests in a modular way.

- **ITCSS Architecture:** The Inverted Triangle CSS (ITCSS) architecture is employed for maintaining a scalable and maintainable CSS structure.

- **Redux Saga Toolkit:** Manage application state and side effects efficiently with Redux Saga Toolkit, providing a powerful approach to handling asynchronous operations. This includes integrating Redux and Redux Saga libraries to facilitate state management and asynchronous workflows within your application.

### Main View - Requirements:

- Display a list of the top 100 podcasts according to Apple's listing (more info at the end of the document).
- Once the list is retrieved from the external service for the first time, store it locally so that it's only requested again if more than a day has passed since the last request.
- Allow users to filter the displayed podcasts by entering a text string that considers both the podcast titles and the names of their authors.
- Immediate filtering that reacts as the user types the filtering text.
- Clicking on a podcast should navigate the user to the detailed view of that podcast.

### Header - Requirements:

- The application title should act as a link to the main view of the application.
- Whenever a client-side navigation is initiated, display a visual indicator in the top right corner of the page to reflect that the process is underway. The indicator should disappear after the transition to the new view is complete.

### Podcast Detail View - Requirements:

- Display a sidebar with the podcast's image, title, author, and description.
- Show a main section that displays the number of episodes the podcast currently has, along with a list of episodes indicating their title, publication date, and duration.
- Once the detail of a podcast is retrieved from the external service for the first time, store it locally so that it's only requested again if a day has passed since the last request.
- Clicking on an episode title should navigate the user to the detailed view of that episode.

### Episode Detail View - Requirements:

- Display the same sidebar as in the previous view.
- Both the podcast image and title, as well as the author's name, should be links to the podcast's detail view (these components can also have the same links in the previous view).
- Show a main section that displays the podcast's title, description, and a basic audio player (native HTML5) for playing the podcast.
- Take into consideration that some episode descriptions contain HTML, and this should be interpreted (not escaped) when displayed.

## Main Dependencies

- [@reduxjs/toolkit](https://redux-toolkit.js.org/): Library for state management in Redux.
- [axios](https://axios-http.com/): HTTP client for making requests.
- [react](https://reactjs.org/): Core library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): DOM-specific utilities for React.
- [react-redux](https://react-redux.js.org/): Redux integration with React.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): Routing for React applications.
- [redux-saga](https://redux-saga.js.org/): Library for handling side effects in Redux.

## Development Dependencies

- [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/): Jest extensions for DOM testing.
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/): Utilities for testing React components.
- [@testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/): Library for simulating user events in tests.
- [@types/jest](https://www.npmjs.com/package/@types/jest): TypeScript types for Jest.
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript types for Node.js.
- [@types/react](https://www.npmjs.com/package/@types/react): TypeScript types for React.
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): TypeScript types for react-dom.
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin): ESLint rules specific to TypeScript.
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser): TypeScript parser for ESLint.
- [@vitejs/plugin-react](https://vitejs.dev/guide/features.html#react): Vite plugin for React support.
- [eslint](https://eslint.org/): Static code analysis tool.
- [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript): Airbnb style-based ESLint configuration for TypeScript.
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ESLint rules for React hooks.
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): ESLint rules for React Refresh.
- [husky](https://typicode.github.io/husky/#/): Tool to set up Git hooks.
- [jest](https://jestjs.io/): JavaScript testing framework.
- [jest-environment-jsdom](https://jestjs.io/docs/configuration#testenvironment-string): Jest test environment based on JSDOM.
- [jest-transform-stub](https://www.npmjs.com/package/jest-transform-stub): Transformer for static imports in Jest tests.
- [lint-staged](https://github.com/okonet/lint-staged): Run commands only on modified files in Git.
- [prettier](https://prettier.io/): Code formatter.
- [sass](https://sass-lang.com/): CSS preprocessor.
- [ts-jest](https://www.npmjs.com/package/ts-jest): TypeScript adapter for Jest.
- [ts-node](https://www.npmjs.com/package/ts-node): TypeScript execution in Node.js.
- [typescript](https://www.typescriptlang.org/): Superset of JavaScript with static types.
- [vite](https://vitejs.dev/): Fast and reactive web app building.
