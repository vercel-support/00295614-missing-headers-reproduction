import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	const random = Math.random();
	const requestHeaders = new Headers(req.headers);
	requestHeaders.set("X-Custom-Header", "MyCustomHeaderValue" + random);

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
