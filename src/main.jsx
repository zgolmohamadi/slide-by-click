import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from 'react-query';
import { FETCH_CONFIG, QUERY_CACHE } from './config/index.js';

// const queryClient = new QueryClient();

const queryClient = new QueryClient({
  defaultOptions: FETCH_CONFIG,
  queryCache: QUERY_CACHE
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
