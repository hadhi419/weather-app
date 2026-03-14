import axios from "axios";

export const checkAuth = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/me", {
      withCredentials: true,
    });
    return res.data;
  } catch {
    return { loggedIn: false };
  }
};

export const login = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/auth0";
};

export const logout = () => {
  try {
    window.location.href = "http://localhost:8080/logout";
  } catch (error) {
    console.error("Logout failed:", error);
  } finally {
    window.location.href = "http://localhost:5173/dashboard";
  }
};
