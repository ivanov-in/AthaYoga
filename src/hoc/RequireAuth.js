import React from "react";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = false;

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return children;
};
