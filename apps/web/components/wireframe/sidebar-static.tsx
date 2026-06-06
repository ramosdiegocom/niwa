import {
	WireframeSidebar,
	WireframeSidebarContent,
	WireframeSidebarFooter,
} from "@oss/ui/components/wireframe";
import { ShellTag } from "@/components/wireframe/demo-shell";

export function SidebarStatic() {
	return (
		<WireframeSidebar collapsed={false} hideOn="mobile" position="left">
			<WireframeSidebarContent>
				<div className="flex min-h-full w-full items-center justify-center bg-blue-100/90">
					<div className="flex h-full items-center justify-center">
						<ShellTag>Sidebar</ShellTag>
					</div>
				</div>
			</WireframeSidebarContent>
			<WireframeSidebarFooter>
				<div className="flex h-full w-full items-center justify-center border-zinc-900/70 border-t-2 bg-blue-200/85">
					<div className="flex h-full items-center justify-center">
						<ShellTag>Footer</ShellTag>
					</div>
				</div>
			</WireframeSidebarFooter>
		</WireframeSidebar>
	);
}
