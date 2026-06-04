"use client";

import { buttonVariants } from "@oss/ui/components/button";
import { ButtonGroup } from "@oss/ui/components/button-group";
import { Code2, Github, LayoutGrid } from "lucide-react";
import Link from "next/link";

export function RoutesButton() {
	return (
		<div className="fixed right-[calc(env(safe-area-inset-right)+1rem)] bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-1000 inline-flex items-center">
			<ButtonGroup>
				<Link
					aria-label="Open playground"
					className={buttonVariants({ size: "lg" })}
					data-slot="button"
					href="/wireframe/playground"
				>
					<Code2 />
					Playground
				</Link>
				<Link
					aria-label="Open layouts"
					className={buttonVariants({ size: "lg" })}
					data-slot="button"
					href="/wireframe"
				>
					<LayoutGrid />
					Layout
				</Link>
				<Link
					aria-label="View on GitHub"
					className={buttonVariants({ size: "lg" })}
					data-slot="button"
					href="https://github.com/diegoramoz/wireframe"
					rel="noopener noreferrer"
					target="_blank"
				>
					<Github />
					GitHub
				</Link>
			</ButtonGroup>
		</div>
	);
}
