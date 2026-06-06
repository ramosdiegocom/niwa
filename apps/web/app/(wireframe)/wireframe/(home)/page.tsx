import Link from "next/link";
import {
	ShellTag,
	WireframeShell,
	WireframeSurface,
} from "@/components/wireframe/demo-shell";
import { RoutePreview } from "@/components/wireframe/route-preview";
import { routeCatalog } from "@/lib/route-catalog";

export default function NavigationPage() {
	return (
		<WireframeShell>
			<main className="mx-auto max-w-6xl p-4 sm:p-8">
				<WireframeSurface className="mb-6 space-y-4 sm:mb-8">
					<div className="flex items-center justify-between gap-3">
						<ShellTag>Wireframe</ShellTag>
						<div className="hidden items-center gap-2 sm:flex">
							<ShellTag className="border-zinc-700/70">Patterns</ShellTag>
							<ShellTag className="border-zinc-700/70">Layouts</ShellTag>
						</div>
					</div>
					<h1 className="font-black text-2xl tracking-tight sm:text-4xl">
						Wireframe Route Gallery
					</h1>
				</WireframeSurface>

				<section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
					{routeCatalog.map((item) => (
						<Link href={`/wireframe${item.href}`} key={item.href}>
							<article className="group flex h-full flex-col gap-4 rounded-2xl border-2 border-zinc-900/80 bg-white/85 p-4 shadow-[0_12px_28px_-18px_rgba(15,23,42,0.7)] transition-transform hover:-translate-y-1">
								<RoutePreview preview={item.preview} />
								<div className="space-y-2">
									<h2 className="font-extrabold text-xl leading-tight">
										{item.title}
									</h2>
									<p className="font-mono text-[11px] text-zinc-600 uppercase tracking-[0.16em]">
										{item.href}
									</p>
								</div>
								<div className="flex items-center gap-2">
									<ShellTag className="h-7 border-zinc-700/80 bg-blue-50 px-2 text-[10px] tracking-[0.12em]">
										{item.preview}
									</ShellTag>
								</div>
							</article>
						</Link>
					))}
				</section>
			</main>
		</WireframeShell>
	);
}
