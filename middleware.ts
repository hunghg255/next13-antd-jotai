import { NextResponse } from 'next/server';

// Check auth from server side here
export function middleware() {
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/sign-in', '/sign-up', '/information', '/forgot-password'],
// };
