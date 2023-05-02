import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;
  
  // If it's the root path, just render it
  if (path === "/") {
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!session && (path === "/protected" || path === "/home")) {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (session && (path === "/login" || path === "/register")) {
    return NextResponse.redirect(new URL("/protected", req.url));
  }
  return NextResponse.next();
  // Lines 17 to 24 do the following:
  // 1. Get the session from the request
  // 2. If there's no session and the path is /protected, redirect to /login
  // 3. If there's a session and the path is /login, redirect to /protected
  // 4. If there's a session and the path is /register, redirect to /protected
  // 5. If there's a session and the path is /home, redirect to /home
  // 6. Otherwise, render the page
  // Explain further, which page is being rendered in part 6?
  // The page that is being rendered is the page that the user is trying to access
  // If the user is trying to access the login page, then the login page will be rendered
  // If the user is trying to access the register page, then the register page will be rendered
  // If the user is trying to access the home page, then the home page will be rendered
  // If the user is trying to access the protected page, then the protected page will be rendered
}
