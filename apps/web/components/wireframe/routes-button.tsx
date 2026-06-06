"use client";

import { buttonVariants } from "@oss/ui/components/button";
import { Github, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function RoutesButton() {
	const pathname = usePathname();
	const showHomeButton = pathname !== "/wireframe";

	return (
		<div className="fixed right-[calc(env(safe-area-inset-right)+1rem)] bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-1000 flex items-center gap-2">
			{showHomeButton ? (
				<Link
					aria-label="Open layout gallery"
					className={buttonVariants({ size: "icon-lg" })}
					href="/wireframe"
				>
					<Home />
				</Link>
			) : null}
			<Link
				aria-label="Open GitHub repository"
				className={buttonVariants({ size: "icon-lg" })}
				href="https://github.com/diegoramoz/wireframe"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Github />
			</Link>
		</div>
	);
}
