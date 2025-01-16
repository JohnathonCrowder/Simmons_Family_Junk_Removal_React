const getServerUrl = (): string => {
  // Use the environment variable as the default
  return localStorage.getItem('serverUrl') || import.meta.env.VITE_API_URL;
};

const apiUrl = getServerUrl();
export const BASE_URL = apiUrl.replace('/api/posts', '');