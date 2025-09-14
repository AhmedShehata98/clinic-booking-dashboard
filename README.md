# Clinic Booking Dashboard

A comprehensive clinic management system built with Angular 20.2.0. This application helps medical clinics manage doctors, patients, appointments, services, and locations.

## Project Overview

The Clinic Booking Dashboard is designed to streamline clinic operations with an intuitive interface for managing healthcare resources. The application includes features for doctor management, patient records, appointment scheduling, service offerings, and location management.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Project Structure

```
├── src/                      # Source files
│   ├── app/                  # Application code
│   │   ├── components/       # Reusable UI components
│   │   │   ├── doctor-card/  # Doctor card component
│   │   │   ├── modal/        # Modal dialog component
│   │   │   ├── navigation-link/ # Navigation link component
│   │   │   └── patient-card/ # Patient card component
│   │   ├── layouts/          # Layout components
│   │   │   ├── auth-layout/  # Authentication layout
│   │   │   ├── dashboard-layout/ # Main dashboard layout
│   │   │   ├── header/       # Header component
│   │   │   └── sidebar/      # Sidebar navigation component
│   │   ├── models/           # Data models/interfaces
│   │   ├── pages/            # Application pages
│   │   │   ├── add-location/ # Add location page
│   │   │   ├── add-service/  # Add service page
│   │   │   ├── appointments/ # Appointments management page
│   │   │   ├── auth/         # Authentication pages
│   │   │   ├── doctor-details/ # Doctor details page
│   │   │   ├── doctors/      # Doctors listing page
│   │   │   ├── doctors-container/ # Doctors container component
│   │   │   ├── locations/    # Locations management page
│   │   │   ├── new-doctor/   # New doctor creation page
│   │   │   ├── not-found/    # 404 page
│   │   │   ├── overview/     # Dashboard overview page
│   │   │   ├── patients/     # Patients management page
│   │   │   └── services/     # Services management page
│   │   └── resolvers/        # Route resolvers
│   ├── assets/               # Static assets
│   ├── styles.css            # Global styles
│   └── index.html            # Main HTML file
├── public/                   # Public assets
│   ├── doctors/              # Doctor profile images
│   └── images/               # General images
└── ...                       # Configuration files
```

## Application Pages

| Page | Description |
|------|-------------|
| Overview | Main dashboard with clinic statistics and overview |
| Doctors | List of all doctors with their details |
| Doctor Details | Detailed view of a specific doctor |
| New Doctor | Form to add a new doctor |
| Patients | List of all patients |
| Appointments | Appointment management and scheduling |
| Locations | Clinic locations management |
| Services | Medical services offered by the clinic |
| Add Location | Form to add a new clinic location |
| Add Service | Form to add a new medical service |

## Technologies Used

- **Angular 20.2.0**: Frontend framework
- **TailwindCSS 4.1.13**: Utility-first CSS framework
- **RxJS 7.8.0**: Reactive programming library
- **Express 5.1.0**: Server for SSR (Server-Side Rendering)
- **nanoid 5.1.5**: ID generation library

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Project Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

## Contribution Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
