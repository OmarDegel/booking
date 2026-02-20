
export const setAuth = ({ token, user }: { token: string; user: any }) => {
  if (!token) {
    console.warn("No token provided to setAuth");
    return;
  }

  localStorage.setItem("token", token);

  if (!user) {
    localStorage.removeItem("user");
  } else {
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      console.error("Failed to stringify user for localStorage:", e);
    }
  }
};

export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getAuth = () => {
  const token = localStorage.getItem("token");

  let user = null;
  const rawUser = localStorage.getItem("user");
  if (rawUser && rawUser !== "undefined") {
    try {
      user = JSON.parse(rawUser);
    } catch (e) {
      console.error("Invalid JSON in localStorage for user:", e);
      user = null;
    }
  }

  return { token, user };
};

export const setUser = (user: any) => {
  if (!user) {
    localStorage.removeItem("user");
    return;
  }
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (e) {
    console.error("Failed to stringify user for localStorage:", e);
  }
};

export function getUser() {
  const rawUser = localStorage.getItem("user");
  if (!rawUser || rawUser === "undefined") return null;

  try {
    return JSON.parse(rawUser);
  } catch (e) {
    console.error("Invalid JSON in localStorage for user:", e);
    return null;
  }
}

export function getToken() {
  const token = localStorage.getItem("token");
  return token || null;
}