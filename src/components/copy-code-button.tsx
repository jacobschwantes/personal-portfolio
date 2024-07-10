"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
export function CopyCodeButton({ code }: { code: string }) {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Button onClick={copyToClipboard} variant="outline" size="icon">
			{copied ? <CheckIcon /> : <CopyIcon />}
		</Button>
	);
}
