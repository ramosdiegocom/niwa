import { WireframeNav } from "@oss/ui/components/wireframe";
import { ShellTag } from "@/components/wireframe/demo-shell";

export function TopNav(props: React.ComponentProps<typeof WireframeNav>) {
	return (
		<WireframeNav {...props}>
			<div className="flex h-full w-full items-center justify-between border-zinc-900/85 border-b-2 bg-green-200/90 px-4">
				<div className="flex h-full items-center gap-2">
					<ShellTag>Brand</ShellTag>
				</div>
				<nav className="flex h-full items-center gap-2">
					<ShellTag>Nav</ShellTag>
				</nav>
			</div>
		</WireframeNav>
	);
}
