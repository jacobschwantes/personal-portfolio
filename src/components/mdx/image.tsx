"use client";

import { useState } from "react";

export default function FullScreenImage(
	props: React.ComponentProps<"img"> & { caption?: string }
) {
	const [isFullScreen, setIsFullScreen] = useState(false);

	return (
		<div className="flex flex-col">
			<div
				className={` ${
					isFullScreen
						? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
						: "cursor-zoom-in" // Add cursor-zoom-in class when not in full screen
				}`}
				onClick={() => setIsFullScreen(!isFullScreen)}
			>
				<img
					className={`${
						isFullScreen
							? "max-h-screen max-w-full object-contain cursor-zoom-out" // Add cursor-zoom-out class when in full screen
							: "relative mb-0 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 w-full aspect-video rounded-2xl object-cover overflow-hidden"
					}`}
					src={props.src}
					alt={props.alt}
					{...props}
					style={{ pointerEvents: isFullScreen ? "none" : "auto" }}
				/>
				{isFullScreen && (
					<>
						<button
							className="absolute top-4 right-4 text-white text-2xl font-bold z-60"
							onClick={(e) => {
								e.stopPropagation();
								setIsFullScreen(false);
							}}
						>
							✕
						</button>
						<style jsx global>{`
							body {
								overflow: hidden;
							}
						`}</style>
					</>
				)}
			</div>
			{props.caption && (
				<p className="text-zinc-500 dark:text-zinc-400 text-sm text-center">
					{props.caption}
				</p>
			)}
		</div>
	);
}
