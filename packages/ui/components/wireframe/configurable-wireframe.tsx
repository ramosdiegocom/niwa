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
				<span className="rounded bg-background px-2 py-0.5 font-semibold">
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
	const title = isLeft ? "Left Sidebar" : "Right Sidebar";
	const code = `<WireframeSidebar position="${position}" collapsed={false}${formatHideOnAttribute(hideOn)} />`;
	const toggleArrow = isLeft === collapsed ? "→" : "←";

	return (
		<WireframeSidebar collapsed={collapsed} hideOn={hideOn} position={position}>
			<div className="min-h-full bg-blue-200 p-4 dark:bg-blue-900">
				<div
					className={cn(
						"mb-4 flex items-center justify-between",
						!isLeft && "flex-row-reverse",
						collapsed && "justify-center"
					)}
				>
					{!collapsed && <ComponentName code={code} title={title} />}
					<button
						className="p-2 hover:underline"
						onClick={onToggle}
						type="button"
					>
						{toggleArrow}
					</button>
				</div>
				{!collapsed && <div className="h-250 border border-border" />}
			</div>
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
							<div className="flex h-full items-center justify-center bg-green-200 px-4 dark:bg-green-900">
								<ComponentName
									code={`<WireframeNav position="top"${formatHideOnAttribute(topNavHideOn)} />`}
									title="Top Navigation"
								/>
							</div>
						</WireframeNav>
					)}
					{config.showBottomNav && (
						<WireframeNav hideOn={bottomNavHideOn} position="bottom">
							<div className="flex h-full items-center justify-center bg-purple-200 px-4 dark:bg-purple-900">
								<ComponentName
									code={`<WireframeNav position="bottom"${formatHideOnAttribute(bottomNavHideOn)} />`}
									title="Bottom Navigation"
								/>
							</div>
						</WireframeNav>
					)}
				</>
			)}

			{config.navType === "sticky" && (
				<WireframeStickyNav hideOn={stickyNavHideOn}>
					<div className="flex h-full items-center justify-center bg-rose-200 px-4 dark:bg-rose-900">
						<ComponentName
							code={`<WireframeStickyNav${formatHideOnAttribute(stickyNavHideOn)} />`}
							title="Sticky Navigation"
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
