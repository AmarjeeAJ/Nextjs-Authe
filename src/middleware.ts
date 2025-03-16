import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware function
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/signup';

    const token = request.cookies.get('token')?.value || '';

    // Redirect logic
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

// Matching routes
export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup'
    ]
};
