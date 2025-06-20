# The Blyde Guest Directory

Welcome to The Blyde Guest Directory, a high-performance, interactive web application designed to enhance the experience for guests at The Blyde. This project aims to provide a vibrant, sophisticated, and welcoming digital guide for families, couples, and businesses, primarily in Gauteng, focusing on luxury accommodations, local experiences, restaurants, and shops.

## Project Overview

This application is built with a Python Flask backend and a React frontend (using Vite), designed for easy deployment and maintenance. It features dynamic unit displays, interactive elements like virtual tours and testimonials, and a responsive design for various devices.

## Features

*   **Dynamic Unit Displays**: Units are loaded from a `units.json` file, allowing for easy updates without code changes.
*   **Interactive Elements**: Engage users with virtual tours, testimonials, and a unit-finder quiz.
*   **Responsive Design**: Optimized for seamless viewing across desktops, tablets, and mobile devices.
*   **Vibrant & Sophisticated UI**: A luxury-focused aesthetic with high-quality unit photos and vibrant colors.
*   **Easy Unit Updates**: Manage unit information simply by modifying `units.json`.

## Technology Stack

*   **Frontend**: React.js (with Vite) for a fast and modern user interface.
*   **Backend**: Python Flask for serving data and handling backend logic.
*   **Styling**: CSS for custom styling.
*   **Deployment**: Google Cloud Platform (GCP) services:
    *   **Cloud Build**: For continuous integration and deployment (CI/CD).
    *   **Cloud Run**: For hosting the containerized application.
    *   **Container Registry (or Artifact Registry)**: For storing Docker images.
*   **Containerization**: Docker for packaging the application.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

*   Node.js (LTS version recommended)
*   Python 3.x
*   Docker Desktop
*   Google Cloud SDK (gcloud CLI)
*   Git

### Local Development

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/the-blyde-guest-directory.git
    cd the-blyde-guest-directory
    ```

2.  **Install Frontend Dependencies:**

    ```bash
    npm install
    ```

3.  **Install Backend Dependencies:**

    ```bash
    pip install -r requirements.txt # (Assuming you have a requirements.txt for Flask dependencies)
    ```

4.  **Run the Frontend Development Server:**

    ```bash
    npm run dev
    ```

    This will typically start the React app on `http://localhost:5173` (or similar).

5.  **Run the Backend Flask Server:**

    ```bash
    # Navigate to your Flask app directory if it's separate, e.g., cd backend
    python app.py # (Assuming your main Flask app file is app.py)
    ```

    Ensure your Flask app is configured to serve the `index.html` from the React build output.

### Project Structure

```
.dockerignore
.env.local
.gitignore
App.tsx
Dockerfile
README.md
cloudbuild.yaml
components/ # React components
index.html
index.tsx
metadata.json
package.json
tsconfig.json
types.ts
vite.config.ts
```

## Deployment to Google Cloud Run

This project is set up for continuous deployment using Google Cloud Build and Cloud Run.

### `Dockerfile`

The `Dockerfile` defines how your application is containerized. It includes steps to build the React frontend, install backend dependencies, and set up an Nginx server to serve the static React files and proxy API requests to the Flask backend.

### `cloudbuild.yaml`

The `cloudbuild.yaml` file orchestrates the CI/CD pipeline:

1.  **Install Dependencies & Run Tests**: Uses `npm ci` and `npm test` to ensure all tests pass before building the Docker image.
2.  **Build Docker Image**: Builds the Docker image using the `Dockerfile`, tagging it with the `$PROJECT_ID` and `$BUILD_ID` for traceability.
3.  **Push to Container Registry**: Pushes the built image to Google Container Registry.
4.  **Deploy to Cloud Run**: Deploys the new image to the `the-blyde-guest-directory` service on Cloud Run.

### Automated Deployment Setup

To set up automated deployments:

1.  **Connect Repository**: In Google Cloud Console, navigate to Cloud Build -> Triggers.
2.  **Create Trigger**: Create a new trigger, connecting it to your GitHub repository.
3.  **Configure Trigger**: Set the event to `Push to a branch` (e.g., `main`), specify the `cloudbuild.yaml` file location, and ensure the Cloud Build service account has necessary permissions (Cloud Run Admin, Service Account User, Storage Admin).

Every push to the configured branch will automatically trigger a build, test, and deployment process.

## Environment Variables

Environment variables for the React application should be handled during the build process (e.g., using Vite's `import.meta.env` and `.env` files). For the Cloud Run service, sensitive environment variables should be managed securely using Google Cloud Secret Manager and mounted as environment variables in the Cloud Run service configuration.

## Contributing

Feel free to fork the repository, open issues, and submit pull requests.
