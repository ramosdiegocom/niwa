import type { RoutePreviewKind } from "@/lib/route-catalog";

const frameClassName =
	"relative h-36 overflow-hidden rounded-xl border-2 border-zinc-900/85 bg-gradient-to-br from-zinc-50 via-sky-50 to-amber-50";

const topNavClassName =
	"absolute inset-x-0 top-0 h-7 border-zinc-900/85 border-b-2 bg-amber-200/90";
const stickyNavClassName =
	"absolute inset-x-3 top-9 h-6 rounded-md border-2 border-zinc-900/75 bg-teal-200/90";
const bottomNavClassName =
	"absolute inset-x-0 bottom-0 h-7 border-zinc-900/85 border-t-2 bg-sky-300/85";
const sidebarClassName =
	"absolute inset-y-0 left-0 z-10 w-11 border-zinc-900/85 border-r-2 bg-orange-200/85";
const sidebarShiftClassName =
	"absolute inset-y-0 right-0 z-10 w-11 border-zinc-900/85 border-l-2 bg-orange-200/85";
const contentAreaClassName =
	"absolute right-3 bottom-3 left-13 rounded-lg border border-zinc-900/45 border-dashed bg-white/85";

export function RoutePreview({ preview }: { preview: RoutePreviewKind }) {
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
				<div className="absolute inset-x-0 top-0 h-6 border-zinc-900/85 border-b-2 bg-teal-300/85" />
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
			<div className="absolute inset-x-0 top-0 h-7 border-zinc-900/85 border-b-2 bg-amber-200/90 md:hidden" />
			<div className="absolute inset-x-0 top-0 hidden h-7 border-zinc-900/85 border-b-2 bg-amber-200/90 md:block" />
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
