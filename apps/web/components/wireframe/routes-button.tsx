"use client";

import { Button } from "@oss/ui/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@oss/ui/components/dropdown-menu";
import { Code2, ExternalLink, Github, LayoutGrid, Menu } from "lucide-react";
import Link from "next/link";

export function RoutesButton() {
	return (
		<div className="fixed right-[calc(env(safe-area-inset-right)+1rem)] bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-1000">
			<DropdownMenu>
				<DropdownMenuTrigger
					render={
						<Button
							aria-label="Open wireframe routes"
							size="icon-lg"
							type="button"
						>
							<Menu />
						</Button>
					}
				/>
				<DropdownMenuContent align="end" side="top">
					<DropdownMenuItem render={<Link href="/wireframe/playground" />}>
						<Code2 />
						Playground
					</DropdownMenuItem>
					<DropdownMenuItem render={<Link href="/wireframe" />}>
						<LayoutGrid />
						Layout
					</DropdownMenuItem>
					<DropdownMenuItem
						render={
							<Link
								href="https://github.com/diegoramoz/wireframe"
								rel="noopener noreferrer"
								target="_blank"
							/>
						}
					>
						<Github />
						GitHub
						<ExternalLink />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
