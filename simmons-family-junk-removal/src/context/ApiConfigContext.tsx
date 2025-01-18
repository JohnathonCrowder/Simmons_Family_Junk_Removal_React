import React, { createContext, useContext, useState } from "react";

const LOCAL_BACKEND = "http://localhost:5000/api/posts";
const DEPLOYED_BACKEND =
  "https://simmonsfamilyjunkremoval-backend.onrender.com/api/posts";
const LS_KEY = "apiBackend";

interface ApiConfigContextType {
  apiUrl: string;
  isLocal: boolean;
  toggleBackend: () => void;
}

const ApiConfigContext = createContext<ApiConfigContextType | undefined>(
  undefined
);

export const ApiConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [apiUrl, setApiUrl] = useState(() => {
    const saved = localStorage.getItem(LS_KEY);
    return saved === "local" ? LOCAL_BACKEND : DEPLOYED_BACKEND;
  });

  const isLocal = apiUrl === LOCAL_BACKEND;

  const toggleBackend = () => {
    const newUrl = isLocal ? DEPLOYED_BACKEND : LOCAL_BACKEND;
    setApiUrl(newUrl);
    localStorage.setItem(LS_KEY, isLocal ? "deployed" : "local");
  };

  return (
    <ApiConfigContext.Provider value={{ apiUrl, isLocal, toggleBackend }}>
      {children}
    </ApiConfigContext.Provider>
  );
};

export const useApiConfig = () => {
  const context = useContext(ApiConfigContext);
  if (context === undefined) {
    throw new Error("useApiConfig must be used within an ApiConfigProvider");
  }
  return context;
};
