const getServerUrl = (): string => {
    // Get from localStorage if admin is logged in, otherwise use production
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      return localStorage.getItem('serverUrl') || import.meta.env.VITE_API_URL;
    }
    return import.meta.env.VITE_API_URL;
  };
  
  const apiUrl = getServerUrl();
  export const BASE_URL = apiUrl.replace('/api/posts', '');
  