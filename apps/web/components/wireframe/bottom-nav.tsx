import { WireframeNav } from "@oss/ui/components/wireframe";
import { ShellTag } from "@/components/wireframe/demo-shell";

export function BottomNav(
	props: Omit<React.ComponentProps<typeof WireframeNav>, "position">
) {
	return (
		<WireframeNav position="bottom" {...props}>
			<div className="flex h-full w-full items-center justify-center border-zinc-900/85 border-t-2 bg-purple-300/85 px-4">
				<div className="flex h-full w-full items-center justify-center">
					<ShellTag>Bottom Nav</ShellTag>
				</div>
			</div>
		</WireframeNav>
	);
}
