export const API_URL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8000/api'
    : `https://pixabay.com/api/?key=${
        process.env.REACT_APP_PIXADAY_PUBLIC_KEY
      }`;
