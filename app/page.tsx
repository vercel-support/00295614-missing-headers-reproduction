import { headers } from "next/headers";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
	return (await headers()).get("x-custom-header");
}
