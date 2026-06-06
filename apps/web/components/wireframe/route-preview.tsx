import type { RoutePreviewKind } from "@/lib/route-catalog";

const frameClassName =
	"relative h-36 overflow-hidden rounded-xl border-2 border-zinc-900/85 bg-gradient-to-br from-zinc-50 via-green-50 to-purple-50";

const topNavClassName =
	"absolute inset-x-0 top-0 h-7 border-zinc-900/85 border-b-2 bg-green-200/90";
const stickyNavClassName =
	"absolute inset-x-3 top-9 h-6 rounded-md border-2 border-zinc-900/75 bg-red-200/90";
const bottomNavClassName =
	"absolute inset-x-0 bottom-0 h-7 border-zinc-900/85 border-t-2 bg-purple-300/85";
const sidebarClassName =
	"absolute inset-y-0 left-0 z-10 w-11 border-zinc-900/85 border-r-2 bg-blue-200/85";
const sidebarShiftClassName =
	"absolute inset-y-0 right-0 z-10 w-11 border-zinc-900/85 border-l-2 bg-blue-200/85";
const contentAreaClassName =
	"absolute right-3 bottom-3 left-13 rounded-lg border border-zinc-900/45 border-dashed bg-white/85";

export function RoutePreview({ preview }: { preview: RoutePreviewKind }) {
	if (preview === "playground") {
		return (
			<div className={frameClassName}>
				<div className={topNavClassName} />
				<div className="absolute top-10 right-3 left-3 grid gap-2 sm:grid-cols-[1fr_1.35fr]">
					<div className="space-y-2 rounded-lg border-2 border-zinc-900/65 bg-white/90 p-2">
						<div className="h-2 w-14 rounded-full bg-zinc-800/70" />
						{["83%", "75%", "100%"].map((width) => (
							<div className="flex items-center gap-2" key={width}>
								<div className="size-2 rounded-full bg-blue-400" />
								<div
									className="h-2 rounded-full bg-zinc-700/25"
									style={{ width }}
								/>
							</div>
						))}
					</div>
					<div className="rounded-lg border-2 border-zinc-900/65 bg-slate-950 p-2">
						<div className="mb-2 h-2 w-16 rounded-full bg-green-300/85" />
						<div className="space-y-1.5">
							<div className="h-1.5 w-5/6 rounded-full bg-purple-300/70" />
							<div className="h-1.5 w-2/3 rounded-full bg-red-300/70" />
							<div className="h-1.5 w-3/4 rounded-full bg-blue-300/70" />
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (preview === "top-bottom") {
		return (
			<div className={frameClassName}>
				<div className={topNavClassName} />
				<div className={bottomNavClassName} />
				<div className="absolute inset-x-4 top-10 bottom-10 rounded-lg border border-zinc-900/45 border-dashed bg-white/85" />
			</div>
		);
	}

	if (preview === "sidebar-bottom") {
		return (
			<div className={frameClassName}>
				<div className={sidebarClassName} />
				<div className={bottomNavClassName} />
				<div className={contentAreaClassName} />
			</div>
		);
	}

	if (preview === "sticky-sidebar-bottom") {
		return (
			<div className={frameClassName}>
				<div className={topNavClassName} />
				<div className={sidebarClassName} />
				<div className={bottomNavClassName} />
				<div className="absolute top-9 right-3 bottom-10 left-13 rounded-lg border border-zinc-900/45 border-dashed bg-white/85" />
			</div>
		);
	}

	if (preview === "header-sticky-sidebar") {
		return (
			<div className={frameClassName}>
				<div className="absolute inset-x-0 top-0 h-6 border-zinc-900/85 border-b-2 bg-green-300/85" />
				<div className={topNavClassName} style={{ top: "1.5rem" }} />
				<div className={sidebarClassName} style={{ top: "3.25rem" }} />
				<div className="absolute top-14 right-3 bottom-3 left-13 rounded-lg border border-zinc-900/45 border-dashed bg-white/85" />
			</div>
		);
	}

	if (preview === "sticky-layers") {
		return (
			<div className={frameClassName}>
				<div className={topNavClassName} />
				<div className={stickyNavClassName} />
				<div className={sidebarClassName} />
				<div className={bottomNavClassName} />
			</div>
		);
	}

	return (
		<div className={frameClassName}>
			<div className="absolute inset-x-0 top-0 h-7 border-zinc-900/85 border-b-2 bg-green-200/90 md:hidden" />
			<div className="absolute inset-x-0 top-0 hidden h-7 border-zinc-900/85 border-b-2 bg-green-200/90 md:block" />
			<div className="md:hidden">
				<div className={bottomNavClassName} />
			</div>
			<div className="hidden md:block">
				<div className={sidebarShiftClassName} />
			</div>
			<div className="absolute top-10 right-3 bottom-10 left-3 rounded-lg border border-zinc-900/45 border-dashed bg-white/85 md:right-13 md:left-3" />
		</div>
	);
}
