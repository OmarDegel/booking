
type AuthPayload = {
  token: string;
  user: any;
  expiresIn: number; 
};

const TOKEN_KEY = "token";
const USER_KEY = "user";
const EXPIRY_KEY = "token_expiry";

export const setAuth = ({ token, user, expiresIn }: AuthPayload) => {
  if (!token || !expiresIn) {
    clearAuth();
    return;
  }

  const expiryTime = Date.now() + expiresIn * 1000;

  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(EXPIRY_KEY, expiryTime.toString());

  if (user) {
    try {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch {
      localStorage.removeItem(USER_KEY);
    }
  } else {
    localStorage.removeItem(USER_KEY);
  }
};


export const clearAuth = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(EXPIRY_KEY);
};


export function getToken(): string | null {
  const token = localStorage.getItem(TOKEN_KEY);
  const expiry = localStorage.getItem(EXPIRY_KEY);

  if (!token || !expiry) {
    clearAuth();
    return null;
  }

  if (Date.now() > Number(expiry)) {
    clearAuth();
    return null;
  }

  return token;
}


export function getUser() {
  const token = getToken();
  if (!token) return null;

  const rawUser = localStorage.getItem(USER_KEY);
  if (!rawUser || rawUser === "undefined") return null;

  try {
    return JSON.parse(rawUser);
  } catch {
    return null;
  }
}


export const getAuth = () => {
  const token = getToken();
  const user = getUser();

  if (!token) return { token: null, user: null };

  return { token, user };
};


export const setUser = (user: any) => {
  const token = getToken();
  if (!token || !user) {
    localStorage.removeItem(USER_KEY);
    return;
  }

  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch {
    localStorage.removeItem(USER_KEY);
  }
};