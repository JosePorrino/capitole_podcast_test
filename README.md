## Capitole Podcast - Musical Podcast Listening App

Welcome to Capitole Podcast! This application allows you to enjoy your favorite musical podcasts in a simple and convenient way. Here, you'll find three exciting views that will immerse you in the world of music and podcasts.

Enjoy the listening experience! 🎧🎶

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

- **Redux Saga Toolkit:** Manage application state and side effects efficiently with Redux Saga Toolkit, providing a powerful approach to handling asynchronous operations.

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

### Development and Production Modes

To suit your needs, Capitole Podcast offers two operational modes:

- **Development Mode:** In this mode, assets are served without minification, making debugging and development easier. Files can be concatenated if desired.

- **Production Mode:** When switching to production mode, assets are served concatenated and minified, optimizing performance and application loading. Enjoy a more efficient experience while exploring your favorite podcasts.

### Scripts

This package provides several scripts that you can use to perform various tasks:

- `dev`: Start the development server using Vite.
- `build`: Build the project by transpiling TypeScript code with TypeScript Compiler (`tsc`) and then bundling with Vite.
- `lint`: Lint the TypeScript and TypeScript React code using ESLint and specific rules for TypeScript (`@typescript-eslint/eslint-plugin`).
- `preview`: Start a server to preview the production build of your project using Vite.

### Dependencies

This package has the following dependencies:

- `react` (^18.2.0): A JavaScript library for building user interfaces.
- `react-dom` (^18.2.0): A package that provides DOM-specific methods for React.

### Dev Dependencies

In addition to the dependencies, this package also has the following dev dependencies:

- `@types/react` (^18.2.15): Type declarations for React.
- `@types/react-dom` (^18.2.7): Type declarations for React DOM.
- `@typescript-eslint/eslint-plugin` (^6.0.0): ESLint plugin for TypeScript.
- `@typescript-eslint/parser` (^6.0.0): TypeScript parser for ESLint.
- `@vitejs/plugin-react` (^4.0.3): Vite plugin for React integration.
- `eslint` (^8.45.0): A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- `eslint-plugin-react-hooks` (^4.6.0): ESLint plugin for enforcing the Rules of Hooks in React.
- `eslint-plugin-react-refresh` (^0.4.3): ESLint plugin for React Refresh.
- `typescript` (^5.0.2): A superset of JavaScript that adds static types to the language.
- `vite` (^4.4.5): A fast build tool and development server that streamlines the development experience.

### License

This package does not specify a license. Make sure to refer to the package's documentation or source code to determine the licensing terms.
