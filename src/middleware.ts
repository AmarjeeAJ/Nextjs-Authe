// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//     const path = request.nextUrl.pathname
//     const isPublishPath =  path === '/login' || path === '/signup'

//     const token =  request.cookies.get('token') ?.value || ''

//     if (isPublicPath && token) {
//         return.NextResponse.redire
//     }

 
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher:[
//     '/',
//     '/profile',
//     'login',
//     '/signup'
// ]
// }