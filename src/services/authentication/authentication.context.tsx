import React, { useState, createContext, ReactNode } from "react";
import { loginRequest } from "./authentication.service";

interface AuthContextType {
  user: any;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string,repeatedPassword:string) => void;
  onLogout: () => void;
}

export const AuthenticationContext =
  createContext<AuthContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const AuthenticationContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    loginRequest(email, password)
      .then((user: any) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((err: any) => {
        setError(err.message);
        setIsLoading(false);
      });  
  };

  const onRegister = (email:string, password:string, repeatedPassword:string) => {
    if(password !== repeatedPassword){
      setError("Error: Passwords do not match");
      return;
    }
  }

  const onLogout = () => {
    return null
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        isAuthenticated: !!user,
        onLogin,
        onRegister,
        onLogout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};