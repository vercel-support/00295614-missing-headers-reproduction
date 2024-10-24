import { headers } from "next/headers";

export const dynamic = "force-static";

/** Add your relevant code here for the issue to reproduce */
export default function Home({ params: { locale } }) {
	return `middleware header: ${headers().get("X-Custom-Request-Path")}, from params: ${locale}`;
}
