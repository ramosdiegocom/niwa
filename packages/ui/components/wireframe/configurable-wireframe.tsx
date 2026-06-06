"use client";

import type React from "react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import {
	Wireframe,
	type WireframeHideOn,
	WireframeNav,
	WireframeSidebar,
	WireframeSidebarContent,
	WireframeSidebarFooter,
	WireframeSidebarHeader,
	WireframeStickyNav,
} from "../wireframe";
import type { WireframeHideOnOption } from "./wireframe-config-provider";
import { useWireframeConfig } from "./wireframe-config-provider";

function getHideOnProp(
	value: WireframeHideOnOption
): WireframeHideOn | undefined {
	return value === "none" ? undefined : value;
}

function formatHideOnAttribute(hideOn: WireframeHideOn | undefined) {
	return hideOn ? ` hideOn="${hideOn}"` : "";
}

function ComponentName({ title, code }: { title: string; code: string }) {
	return (
		<Tooltip>
			<TooltipTrigger>
				<span className="inline-flex h-8 items-center rounded-full border-2 border-zinc-900 bg-white px-3 font-semibold text-xs uppercase tracking-[0.16em]">
					{title}
				</span>
			</TooltipTrigger>
			<TooltipContent>
				<span className="rounded px-1 font-mono text-sm">{code}</span>
			</TooltipContent>
		</Tooltip>
	);
}

function DemoSidebar({
	collapsed,
	hideOn,
	onToggle,
	position,
}: {
	collapsed: boolean;
	hideOn?: WireframeHideOn;
	onToggle: () => void;
	position: "left" | "right";
}) {
	const isLeft = position === "left";
	const code = `<WireframeSidebar position="${position}" collapsed={false}${formatHideOnAttribute(hideOn)} />`;
	const toggleArrow = isLeft === collapsed ? ">" : "<";

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
						"flex h-full w-full items-center justify-between border-zinc-900/70 border-b-2 bg-blue-200/85 px-2 transition-all duration-300 ease-out",
						!isLeft && "flex-row-reverse",
						collapsed && "justify-center"
					)}
				>
					{!collapsed && <ComponentName code={code} title="Header" />}
					<button
						className="inline-flex size-11 items-center justify-center rounded-full border-2 border-zinc-900 bg-white font-black shadow-[4px_4px_0_0_rgba(0,0,0,0.9)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 active:translate-y-0"
						onClick={onToggle}
						type="button"
					>
						{toggleArrow}
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
						{!collapsed && <ComponentName code={code} title="Sidebar" />}
					</div>
				</div>
			</WireframeSidebarContent>
			<WireframeSidebarFooter>
				<div className="flex h-full w-full items-center justify-center border-zinc-900/70 border-t-2 bg-blue-200/85 px-2">
					{!collapsed && <ComponentName code={code} title="Footer" />}
				</div>
			</WireframeSidebarFooter>
		</WireframeSidebar>
	);
}

export function ConfigurableWireframe({
	children,
}: {
	children: React.ReactNode;
}) {
	const { config } = useWireframeConfig();
	const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(false);
	const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(false);
	const topNavHideOn = getHideOnProp(config.topNavHideOn);
	const bottomNavHideOn = getHideOnProp(config.bottomNavHideOn);
	const stickyNavHideOn = getHideOnProp(config.stickyNavHideOn);
	const leftSidebarHideOn = getHideOnProp(config.leftSidebarHideOn);
	const rightSidebarHideOn = getHideOnProp(config.rightSidebarHideOn);

	return (
		<Wireframe
			config={{
				safeAreas: true,
				cssVariables: config.cssVariables,
				corners: config.corners,
			}}
		>
			{/* Render the appropriate nav type */}
			{config.navType === "normal" && (
				<>
					{config.showTopNav && (
						<WireframeNav hideOn={topNavHideOn} position="top">
							<div className="flex h-full w-full items-center justify-between border-zinc-900/85 border-b-2 bg-green-200/90 px-4">
								<ComponentName
									code={`<WireframeNav position="top"${formatHideOnAttribute(topNavHideOn)} />`}
									title="Brand"
								/>
								<ComponentName
									code={`<WireframeNav position="top"${formatHideOnAttribute(topNavHideOn)} />`}
									title="Nav"
								/>
							</div>
						</WireframeNav>
					)}
					{config.showBottomNav && (
						<WireframeNav hideOn={bottomNavHideOn} position="bottom">
							<div className="flex h-full w-full items-center justify-center border-zinc-900/85 border-t-2 bg-purple-300/85 px-4">
								<ComponentName
									code={`<WireframeNav position="bottom"${formatHideOnAttribute(bottomNavHideOn)} />`}
									title="Bottom Nav"
								/>
							</div>
						</WireframeNav>
					)}
				</>
			)}

			{config.navType === "sticky" && (
				<WireframeStickyNav hideOn={stickyNavHideOn}>
					<div className="flex h-full w-full items-center justify-center border-zinc-900/80 border-b-2 bg-red-200/90 px-4">
						<ComponentName
							code={`<WireframeStickyNav${formatHideOnAttribute(stickyNavHideOn)} />`}
							title="Sticky Nav"
						/>
					</div>
				</WireframeStickyNav>
			)}

			{config.showLeftSidebar && (
				<DemoSidebar
					collapsed={leftSidebarCollapsed}
					hideOn={leftSidebarHideOn}
					onToggle={() => setLeftSidebarCollapsed(!leftSidebarCollapsed)}
					position="left"
				/>
			)}

			{config.showRightSidebar && (
				<DemoSidebar
					collapsed={rightSidebarCollapsed}
					hideOn={rightSidebarHideOn}
					onToggle={() => setRightSidebarCollapsed(!rightSidebarCollapsed)}
					position="right"
				/>
			)}

			{children}
		</Wireframe>
	);
}
