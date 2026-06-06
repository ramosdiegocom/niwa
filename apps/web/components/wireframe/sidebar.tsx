"use client";

import {
	WireframeSidebar,
	WireframeSidebarContent,
	WireframeSidebarFooter,
	WireframeSidebarHeader,
	type WireframeSidebarPosition,
} from "@oss/ui/components/wireframe";
import { cn } from "@oss/ui/lib/utils";
import { PanelLeft, PanelLeftClose, PanelRight } from "lucide-react";
import { useState } from "react";
import { ShellTag } from "@/components/wireframe/demo-shell";

const controlClasses =
	"inline-flex size-11 items-center justify-center rounded-full border-2 border-foreground bg-background shadow-[4px_4px_0_0_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

export function Sidebar({ hideOn }: { hideOn?: "mobile" | "desktop" }) {
	const [collapsed, setCollapsed] = useState(false);
	const [position, setPosition] = useState<WireframeSidebarPosition>("left");

	const CollapseIcon = collapsed ? PanelLeft : PanelLeftClose;
	const PositionIcon = position === "left" ? PanelLeft : PanelRight;

	function handleClick() {
		setCollapsed(!collapsed);
	}

	function handlePositionToggle() {
		setPosition(position === "left" ? "right" : "left");
	}

	return (
		<WireframeSidebar
			className="transition-[width] duration-300 ease-out"
			collapsed={collapsed}
			hideOn={hideOn}
			position={position}
		>
			<WireframeSidebarHeader>
				<div
					className={cn(
						"flex h-full w-full items-center border-zinc-900/70 border-b-2 bg-blue-200/85 px-2 transition-all duration-300 ease-out",
						collapsed ? "justify-center" : "justify-between"
					)}
				>
					<div
						className={cn(
							"overflow-hidden transition-all duration-200",
							collapsed
								? "max-w-0 -translate-x-2 opacity-0"
								: "max-w-40 translate-x-0 opacity-100"
						)}
					>
						<ShellTag>Header</ShellTag>
					</div>
					<button
						aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
						className={controlClasses}
						onClick={handleClick}
						title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
						type="button"
					>
						<CollapseIcon
							aria-hidden="true"
							className={position === "right" ? "size-5 rotate-180" : "size-5"}
						/>
					</button>
				</div>
			</WireframeSidebarHeader>
			<WireframeSidebarContent>
				<div className="flex min-h-full w-full flex-col items-center justify-center bg-blue-100/90 px-2">
					<div
						className={cn(
							"flex items-center justify-center overflow-hidden rounded-xl border-2 border-zinc-900/30 border-dashed bg-white/45 transition-all duration-300",
							collapsed ? "h-12 w-12" : "h-20 w-full max-w-44"
						)}
					>
						<div
							className={cn(
								"transition-all duration-200",
								collapsed ? "scale-95 opacity-0" : "scale-100 opacity-100"
							)}
						>
							<ShellTag>Sidebar</ShellTag>
						</div>
					</div>
				</div>
			</WireframeSidebarContent>
			<WireframeSidebarFooter>
				<div
					className={cn(
						"flex h-full w-full items-center border-zinc-900/70 border-t-2 bg-blue-200/85 px-2 transition-all duration-300 ease-out",
						collapsed ? "justify-center" : "justify-between"
					)}
				>
					<div
						className={cn(
							"overflow-hidden transition-all duration-200",
							collapsed
								? "max-w-0 translate-x-2 opacity-0"
								: "max-w-40 translate-x-0 opacity-100"
						)}
					>
						<ShellTag>Footer</ShellTag>
					</div>
					<button
						aria-label={`Move sidebar to the ${position === "left" ? "right" : "left"}`}
						className={controlClasses}
						onClick={handlePositionToggle}
						title={`Sidebar on the ${position}; click to move it to the ${position === "left" ? "right" : "left"}`}
						type="button"
					>
						<PositionIcon aria-hidden="true" className="size-5" />
					</button>
				</div>
			</WireframeSidebarFooter>
		</WireframeSidebar>
	);
}
