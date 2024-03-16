# Vacation Plans

Our solution provides a comprehensive way to manage employee vacations within the company. It includes a detailed calendar with all holidays marked, allowing employees and administrators to easily plan and track vacation days. The system provides essential information such as holiday titles, descriptions, locations, and date ranges, ensuring efficient management of employee time off. With this solution, companies can streamline the vacation planning process, minimize scheduling conflicts, and enhance overall productivity.

## 📚 Table of Contents

* [Getting Started](#-getting-started)
* [Prerequisites](#-prerequisites)
* [Installation and Configuration](#-installation-and-configuration)
* [Running the Project](#-running-the-project)
* [Project Access](#-project-access)
* [Running Tests](#-running-tests)
* [Built With](#-built-with)
* [Author](#-author)
* [License](#-license)

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Check **[Installation and Configuration](#-installation-and-configuration)** to know how to deploy the project.

## 📋 Prerequisites

- Node.js
- npm (package manager)

## 🔧 Installation and Configuration

1. Clone the repository:
   ```bash
   git clone https://github.com/eduardouglas99/vacation-plan.git

2. Navigate to the project directory:
   ```bash
   cd vacation-plan

3. Install dependencies:
   ```bash
   npm install

4. Start JSON Server:
   The project requires a JSON server to provide simulated data. Make sure you have JSON Server installed globally or locally in the project. To start the JSON server, run the following command:
   ```bash
   json-server --watch server/api/db.json --port 3003

## ⚙️ Running the Project

1. Start the Project in Development Environment:
   After starting the JSON Server, you can start the project in a local development environment. Use the following command:
   ```bash
   npm run dev
   # or
   yarn dev

2. Build the Project for Production:
   Before deploying the project in a production environment, you need to build it. Use the following command to create an optimized version for production:
   ```bash
   npm run build
   # or
   yarn build

3. Start the Project in Production Environment:
   After building the project, you can start the local production server. Use the following command:
   ```bash
   npm start
   # or
   yarn start

## 🌐 Project Access

After successfully executing the above steps, the project will be accessible locally at http://localhost:3000. You can open this URL in a web browser to view the project in action.

## ⚙️ Running Tests

npm test

## 🛠️ Built With

Mention the tools you used to create your project

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/) - React framework for production
- [Styled Components](https://styled-components.com/) - CSS styling in React components
- [React Icons](https://react-icons.github.io/react-icons/) - Icons for React
- [Date-fns](https://date-fns.org/) - Date manipulation in JavaScript
- [jsPDF](https://github.com/MrRio/jsPDF) - JavaScript library for PDF generation
- [React Day Picker](https://react-day-picker.js.org/) - React component for date selection
- [React Hook Form](https://react-hook-form.com/) - React library for forms
- [Zod](https://github.com/colinhacks/zod) - Data schema validation in TypeScript
- [React Multi Select Component](https://www.npmjs.com/package/react-multi-select-component) - React component for multiple selection
- [React Responsive](https://www.npmjs.com/package/react-responsive) - React component for responsiveness

## 📌 Version

We use Git for version control. For available versions, see the tags in this repository [tags in this repository](https://github.com/eduardouglas99/vacation-plan.git). 

## ✒️ Author

* **Eduardo Caetano** - *Front-end Developer* - [eduardouglas99](https://github.com/eduardouglas99)

## 📄 License

This project is licensed under the (your license) - see the [LICENSE.md](https://github.com/usuario/projeto/licenca) file for details.