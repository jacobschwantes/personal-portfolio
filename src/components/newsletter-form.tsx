"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import confetti from "canvas-confetti";
import { useRef, useState } from "react";

// TODO: store in local storage if already subscribed
export function NewsletterSubscribeForm() {
	const [subscribed, setSubscribed] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const buttonCoordinates = buttonRef.current?.getBoundingClientRect();
		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;
		confetti({
			particleCount: 100,
			spread: 70,
			origin: {
				x:
					(buttonCoordinates?.left + buttonRef.current?.clientWidth / 2) /
					windowWidth,
				y:
					(buttonCoordinates?.top + buttonRef.current?.clientHeight / 2) /
					windowHeight,
			},
		});
		setSubscribed(true);
	};
	return subscribed ? (
		<p className="text-zinc-600 dark:text-zinc-300">
			Thank you for subscribing!
		</p>
	) : (
		<form onSubmit={handleSubscribe} className="flex flex-col gap-5">
			<p className="text-zinc-600 dark:text-zinc-300 ">
				Get notified when I publish new things.
			</p>
			<div className="flex w-full max-w-sm items-center space-x-2">
				<Input className="text-white" type="email" placeholder="Email" />
				<Button ref={buttonRef} type="submit">
					Subscribe
				</Button>
			</div>
		</form>
	);
}
