import { WireframeStickyNav } from "@oss/ui/components/wireframe";
import { ShellTag } from "@/components/wireframe/demo-shell";

export function StickyNav() {
	return (
		<WireframeStickyNav>
			<div className="flex h-full w-full items-center justify-center border-zinc-900/80 border-b-2 bg-red-200/90 px-4">
				<ShellTag>Sticky Nav</ShellTag>
			</div>
		</WireframeStickyNav>
	);
}
