"use client";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";
export function CommentsSection() {
	const pathname = usePathname();
	useEffect(() => {
		console.log(pathname);
		if (pathname.includes("blog") && pathname !== "/blog") {
			document.documentElement.style.setProperty("--show-utterances", "block");
		} else {
			document.documentElement.style.setProperty("--show-utterances", "none");
		}
	}, [pathname]);

	return (
		<Script
			id="utterances"
			src="https://utteranc.es/client.js"
			// @ts-ignore
			repo="jacobschwantes/comments"
			issue-term="pathname"
			theme="github-light"
			crossorigin="anonymous"
			async
		/>
	);
}
