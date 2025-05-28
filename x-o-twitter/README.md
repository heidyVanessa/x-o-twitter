# x-o-twitter

## Overview
x-o-twitter is a social media application that allows users to post updates, like posts, and retweet content. The application is built using React and integrates with Supabase for backend services, including user authentication and data storage.

## Features
- User authentication (login and registration)
- Create, edit, and delete posts
- Like posts
- Retweet functionality
- Responsive design

## Project Structure
```
x-o-twitter
├── src
│   ├── componentes
│   │   ├── rt          # Retweet component
│   │   ├── likes       # Likes component
│   │   ├── posts       # Posts component
│   │   └── auth        # Authentication component
│   ├── supabase        # Supabase client
│   ├── App.jsx         # Main application component
│   └── index.js        # Entry point of the application
├── package.json         # Project dependencies and scripts
├── README.md            # Project documentation
└── .env                 # Environment variables
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd x-o-twitter
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add your Supabase URL and API keys:
     ```
     SUPABASE_URL=<your-supabase-url>
     SUPABASE_ANON_KEY=<your-supabase-anon-key>
     ```

## Usage
1. Start the development server:
   ```
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.