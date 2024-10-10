// lib/session.js
import { cookies } from 'next/headers';
import { getIronSession } from 'next-iron-session';

export const sessionOptions = {
    password: process.env.SESSION_SECRET,
    cookieName: "dsertifkat-session",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};

export async function getIronSession() {
  return withIronSession(cookies(), sessionOptions);
}
