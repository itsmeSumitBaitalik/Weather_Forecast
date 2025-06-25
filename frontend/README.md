# Weather App (React + Vite + TailwindCSS)

A simple weather dashboard built with React, Vite, and TailwindCSS. Enter a city name to get current weather data using the OpenWeatherMap API.

## Features

- Search for weather by city name
- Displays temperature, humidity, wind speed, and weather icon
- Responsive and modern UI with TailwindCSS

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- An OpenWeatherMap API key ([get one here](https://openweathermap.org/api))

### Installation

1. Clone the repository:

   ```sh
   git clone <your-repo-url>
   cd weather_app/frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `frontend` directory and add your OpenWeatherMap API key:

   ```
   VITE_API_KEY=your_openweathermap_api_key
   ```

### Running the App

Start the development server:

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Project Structure

- `src/components/Dashboard.jsx` – Main weather dashboard component
- `src/App.jsx` – App entry point
- `src/index.css` – TailwindCSS styles

## License

MIT
