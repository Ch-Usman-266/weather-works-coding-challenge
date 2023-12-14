# Server Documentation

The Server API provides endpoints for CRUD operations on tasks.

## Prerequisites

- Node.js (version 14 or above)
- npm (Node Package Manager) or yarn
- PostgresSQL database

## Installation

1. Clone the repository:

```shell
git clone <repository_url>
```

2. Install the dependencies:

```shell
cd server
npm install
```

3. Create a `.env` file in the root directory and set the following environment variables:

```plaintext
NODE_ENV=development
PORT=3000
DB_USER=<your_database_username>
DB_PASSWORD=<your_database_password>
DB_NAME=<your_database_name>
DB_HOST=<your_database_host>
```

Make sure to replace <your_database_username>, <your_database_password>, <your_database_name>, and <your_database_host> with your actual database credentials.

## Database Setup

1. Create a Postgres database using the credentials provided in the `.env` file.

2. Run the database migrations to create the `Task` table:

```shell
npx sequelize-cli db:migrate
```

## Starting the Server

To start the server, run the following command:

```shell
npm dev
```

The server will start running on `http://localhost:3000`.

## API Endpoints

### Get All Tasks

Returns a list of all tasks.

- **URL:** `/api/v1/tasks`
- **Method:** `GET`
- **Response:**
  - `200 OK` on success
  - `500 Internal Server Error` on server error

### Get a Task

Returns a single task by ID.

- **URL:** `/api/v1/tasks/:id`
- **Method:** `GET`
- **Parameters:**
  - `id` - The ID of the task
- **Response:**
  - `200 OK` on success
  - `404 Not Found` if the task is not found
  - `500 Internal Server Error` on server error

### Create a Task

Creates a new task.

- **URL:** `/api/v1/tasks`
- **Method:** `POST`
- **Request Body:**
  - `name` (string, required) - The name of the task
  - `description` (string) - The description of the task
  - `completed` (boolean) - The completion status of the task (default: false)
- **Response:**
  - `201 Created` on success
  - `500 Internal Server Error` on server error

### Update a Task

Updates an existing task by ID.

- **URL:** `/api/v1/tasks/:id`
- **Method:** `PATCH`
- **Parameters:**
  - `id` - The ID of the task
- **Request Body:**
  - `name` (string) - The updated name of the task
  - `description` (string) - The updated description of the task
  - `completed` (boolean) - The updated completion status of the task
- **Response:**
  - `200 OK` on success
  - `404 Not Found` if the task is not found
  - `500 Internal Server Error` on server error

### Delete a Task

Deletes a task by ID.

- **URL:** `/api/v1/tasks/:id`
- **Method:** `DELETE`
- **Parameters:**
  - `id` - The ID of the task
- **Response:**
  - `200 OK` on success
  - `404 Not Found` if the task is not found
  - `500 Internal Server Error` on server error


## Error Handling Middleware

The API includes error handling middleware to handle validation errors and 404 errors for routes that are not defined. The middleware functions are as follows:

### Validation Error Handler

This middleware handles validation errors thrown by the `express-validation` package. If a validation error occurs, it returns a JSON response with the validation error details.

### Not Found Handler

This middleware handles requests for routes that are not defined. It returns a JSON response with an `error` field indicating that the requested route was not found.

Both middleware functions are automatically applied to the API routes.

Certainly! Here are some potential improvements that could be made to the existing project. You can add these to your `README.md` file:

# WeatherWorksClient

WeatherWorksClient is an app for managing tasks. This repository contains the frontend and backend code for the application.

## Prerequisites

Before running the application, make sure you have the following prerequisites installed on your machine:

- Node.js (version 14 or above)
- npm (Node Package Manager)
- PostgreSQL database

## Installation

1. Clone the repository:

```shell
git clone <repository_url>
```

2. Install the dependencies:

```shell
cd WeatherWorksClient
npm install
```

## Configuration

1. Create a `.env` file in the root directory and set the following environment variables:

```plaintext
NODE_ENV=development
PORT=3000
DB_USER=<your_database_username>
DB_PASSWORD=<your_database_password>
DB_NAME=<your_database_name>
DB_HOST=<your_database_host>
```

Make sure to replace `<your_database_username>`, `<your_database_password>`, `<your_database_name>`, and `<your_database_host>` with your actual database credentials.

2. Set up the PostgreSQL database:

   - Create a new database using the credentials specified in the `.env` file.
   - Run the database migrations to create the necessary tables:

   ```shell
   npx sequelize-cli db:migrate
   ```

## Usage

To start the server, run the following command:

```shell
npm start
```

The server will start running on `http://localhost:3000`.

## API Endpoints

The following API endpoints are available:

- `GET /api/v1/tasks` - Get all tasks.
- `GET /api/v1/tasks/:id` - Get a task by ID.
- `POST /api/v1/tasks` - Create a new task.
- `PATCH /api/v1/tasks/:id` - Update a task by ID.
- `DELETE /api/v1/tasks/:id` - Delete a task by ID.

## Future Improvements

Here are several potential enhancements that I would implement in the project, given additional time.

- Implement input validation and data sanitization to improve security.
- Enhance error handling and logging mechanisms for better error reporting and debugging.
- Implement authentication and authorization to restrict access to certain endpoints.
- Add pagination and filtering options to endpoints that return large result sets.
- Write unit tests to ensure the correctness of the code.
- Refactor the code for better organization and modularity.
- Provide detailed API documentation with request and response examples.

