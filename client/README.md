# Client

Client is a React application that allows users to perform CRUD operations on tasks. It utilizes Chakra UI for styling and Axios for API requests.

## Prerequisites

Before running the project, make sure you have the following software installed on your computer:

- Node.js (version 14.15.4 or higher)
- NPM (version 7.6.0 or higher)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the project dependencies:

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root of the project directory.
2. Add the following lines to the `.env` file:

```
PORT=8000
REACT_APP_BASE_URL=<your_api_baseurl>
```

## Usage

To run the project locally, use the following command:

```bash
npm start
```

This will start the development server and open the app in your default browser. If the app doesn't automatically open, navigate to `http://localhost:3000` in your browser.

## Building the Project

To build the project for production, use the following command:

```bash
npm run build
```

This will create a `build` directory in the root of the project, containing the optimized and minified production-ready files. You can then deploy these files to your web server.

## API Methods

The following API methods are available in this project:

- `getAllTasks`: Retrieves all tasks from the API.
- `createTask`: Creates a new task.
- `getTaskById`: Retrieves a specific task by ID.
- `updateTask`: Updates a task with new data.
- `deleteTask`: Deletes a task.

These methods are defined in the `api.ts` file.

## Future Improvements

Here are several potential enhancements that I would implement in the project, given additional time.

- Error handling for graceful error display and recovery.
- Loading states for improved user feedback during data fetching.
- Form validation for ensuring valid and complete user input.
- Pagination or infinite scrolling for better performance with large data sets.
- Client-side routing for multi-page navigation and organization.
- Responsive design for optimal display across different devices.
- Code refactoring and optimization for improved performance and readability.
- Accessibility improvements for a more inclusive user experience.
