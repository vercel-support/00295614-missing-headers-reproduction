import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	const requestHeaders = new Headers(req.headers);
	requestHeaders.set("X-Custom-Request-Path", req.nextUrl.pathname);

	const response = NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});

	return response;
}

export const config = {
	matcher: "/:path*",
};
