import { WireframeNav } from "@oss/ui/components/wireframe";
import type { ReactNode } from "react";
import { BottomNav } from "@/components/wireframe/bottom-nav";
import {
	ShellTag,
	WireframeContentScaffold,
	WireframeShell,
	WireframeSurface,
} from "@/components/wireframe/demo-shell";
import { Sidebar } from "@/components/wireframe/sidebar";
import { SidebarStatic } from "@/components/wireframe/sidebar-static";
import { StickyNav } from "@/components/wireframe/sticky-nav";
import { TopNav } from "@/components/wireframe/top-nav";

function SceneFrame({
	children,
	title,
	tags,
	rows = 22,
}: {
	children?: ReactNode;
	title: string;
	tags: string[];
	rows?: number;
}) {
	return (
		<WireframeShell>
			<div className="relative min-h-screen">
				{children}
				<main className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
					<WireframeSurface className="mb-6 space-y-4 sm:mb-8">
						<div className="flex flex-wrap items-center gap-2">
							{tags.map((tag) => (
								<ShellTag key={tag}>{tag}</ShellTag>
							))}
						</div>
						<h1 className="font-black text-2xl tracking-tight sm:text-4xl">
							{title}
						</h1>
					</WireframeSurface>
					<WireframeContentScaffold rows={rows} />
				</main>
			</div>
		</WireframeShell>
	);
}

export function ResponsiveSidebarScene() {
	return (
		<SceneFrame
			tags={["Responsive Nav", "Sidebar"]}
			title="Responsive Navigation + Sidebar"
		>
			<TopNav hideOn="mobile" />
			<BottomNav hideOn="desktop" />
			<Sidebar hideOn="mobile" />
		</SceneFrame>
	);
}

export function HeaderStickySidebarScene() {
	return (
		<SceneFrame
			rows={24}
			tags={["Header", "Sticky Nav", "Sidebar"]}
			title="Header + Sticky Layers"
		>
			<div className="flex h-(--top-nav-height) w-full items-center justify-center border-zinc-900/80 border-b-2 bg-green-300/85">
				<ShellTag>Header</ShellTag>
			</div>
			<StickyNav />
			<Sidebar />
		</SceneFrame>
	);
}

export function NestedScrollScene() {
	const regionABars = Array.from({ length: 12 }, (_, i) => ({
		id: `region-a-${i}`,
		width: `${95 - (i % 4) * 10}%`,
	}));
	const deepRegionBars = Array.from({ length: 10 }, (_, i) => ({
		id: `deep-region-${i}`,
		width: `${88 - (i % 3) * 12}%`,
	}));
	const regionBBars = Array.from({ length: 12 }, (_, i) => ({
		id: `region-b-${i}`,
		width: `${94 - (i % 5) * 8}%`,
	}));
	const horizontalCards = Array.from(
		{ length: 10 },
		(_, i) => `horizontal-card-${i}`
	);

	return (
		<WireframeShell>
			<WireframeNav position="top">
				<div className="flex h-full items-center justify-center border-zinc-900/80 border-b-2 bg-green-200/90 px-4">
					<ShellTag>Top Nav</ShellTag>
				</div>
			</WireframeNav>
			<SidebarStatic />
			<BottomNav />
			<main className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:py-8">
				<WireframeSurface className="space-y-4">
					<div className="flex flex-wrap items-center gap-2">
						<ShellTag>Sticky Nav</ShellTag>
						<ShellTag>Nested Scroll</ShellTag>
						<ShellTag>Static Sidebar</ShellTag>
					</div>
					<h1 className="font-black text-2xl tracking-tight sm:text-4xl">
						Nested Scroll Regions
					</h1>
				</WireframeSurface>

				<section className="h-144 space-y-5 overflow-y-auto rounded-2xl border-2 border-zinc-900/80 bg-white/85 p-4 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.75)] sm:p-6">
					<div className="h-56 space-y-4 overflow-y-auto rounded-xl border-2 border-zinc-900/75 bg-linear-to-br from-green-50 to-blue-50 p-4">
						<div className="flex items-center gap-2">
							<ShellTag className="h-7 bg-green-100 px-2 text-[10px]">
								Region A
							</ShellTag>
						</div>
						{regionABars.map((bar) => (
							<div
								className="h-2 rounded-full bg-zinc-700/25"
								key={bar.id}
								style={{ width: bar.width }}
							/>
						))}
					</div>

					<div className="h-72 space-y-4 overflow-y-auto rounded-xl border-2 border-zinc-900/75 bg-linear-to-br from-emerald-50 to-lime-50 p-4">
						<div className="flex items-center gap-2">
							<ShellTag className="h-7 bg-emerald-100 px-2 text-[10px]">
								Region B
							</ShellTag>
						</div>
						<div className="h-40 space-y-3 overflow-y-auto rounded-lg border-2 border-zinc-900/65 bg-white/80 p-3">
							<ShellTag className="h-7 bg-purple-100 px-2 text-[10px]">
								Deep Region
							</ShellTag>
							{deepRegionBars.map((bar) => (
								<div
									className="h-2 rounded-full bg-zinc-700/20"
									key={bar.id}
									style={{ width: bar.width }}
								/>
							))}
						</div>
						{regionBBars.map((bar) => (
							<div
								className="h-2 rounded-full bg-zinc-700/25"
								key={bar.id}
								style={{ width: bar.width }}
							/>
						))}
					</div>

					<div className="overflow-x-auto rounded-xl border-2 border-zinc-900/75 bg-linear-to-br from-blue-50 to-red-50 p-4">
						<div className="mb-3">
							<ShellTag className="h-7 bg-red-100 px-2 text-[10px]">
								Horizontal Region
							</ShellTag>
						</div>
						<div className="flex gap-3">
							{horizontalCards.map((cardId) => (
								<div
									className="h-24 w-40 shrink-0 rounded-lg border-2 border-zinc-900/70 bg-white/85"
									key={cardId}
								/>
							))}
						</div>
					</div>
				</section>
			</main>
		</WireframeShell>
	);
}
