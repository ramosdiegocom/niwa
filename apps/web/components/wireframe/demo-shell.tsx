import { cn } from "@oss/ui/lib/utils";
import type { ReactNode } from "react";

export function WireframeShell({ children }: { children: ReactNode }) {
	return (
		<div className="bg-[radial-gradient(circle_at_0%_0%,#fef3c7,transparent_45%),radial-gradient(circle_at_100%_100%,#f5f5f4,transparent_50%),linear-gradient(160deg,#fffbeb_0%,#f8fafc_45%,#fefce8_100%)]">
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-size-[24px_24px] opacity-45" />
			<div className="relative">{children}</div>
		</div>
	);
}

export function WireframeSurface({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<section
			className={cn(
				"rounded-2xl border-2 border-zinc-900/80 bg-white/80 p-4 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.75)] backdrop-blur-sm sm:p-6",
				className
			)}
		>
			{children}
		</section>
	);
}

export function ShellTag({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<span
			className={cn(
				"inline-flex h-8 items-center rounded-full border-2 border-zinc-900 bg-white px-3 font-semibold text-xs uppercase tracking-[0.16em]",
				className
			)}
		>
			{children}
		</span>
	);
}

export function WireframeContentScaffold({
	className,
	rows = 18,
}: {
	className?: string;
	rows?: number;
}) {
	const bars = Array.from({ length: rows }, (_, i) => ({
		id: `bar-${rows}-${i}`,
		width: `${100 - ((i % 5) + 1) * 8}%`,
	}));

	return (
		<div
			className={cn(
				"space-y-6 rounded-2xl border-2 border-zinc-900/85 bg-white/85 p-4 shadow-[8px_8px_0_0_rgba(15,23,42,0.08)] sm:p-6",
				className
			)}
		>
			<div className="grid gap-4 sm:grid-cols-3">
				{["Overview", "Panels", "States"].map((label) => (
					<div
						className="rounded-xl border-2 border-zinc-900/70 bg-linear-to-br from-amber-50 via-cyan-50 to-blue-50 p-3"
						key={label}
					>
						<div className="mb-3 h-2 w-20 rounded-full bg-zinc-700/80" />
						<div className="space-y-2">
							<div className="h-2 rounded-full bg-zinc-700/30" />
							<div className="h-2 w-5/6 rounded-full bg-zinc-700/25" />
							<div className="h-2 w-3/4 rounded-full bg-zinc-700/20" />
						</div>
						<div className="mt-4">
							<ShellTag className="h-7 border-zinc-700/85 bg-white/90 px-2 text-[10px] tracking-widest">
								{label}
							</ShellTag>
						</div>
					</div>
				))}
			</div>
			<div className="space-y-2">
				{bars.map((bar) => (
					<div
						className="h-2 rounded-full bg-linear-to-r from-zinc-700/35 via-zinc-700/25 to-zinc-700/15"
						key={bar.id}
						style={{ width: bar.width }}
					/>
				))}
			</div>
		</div>
	);
}
