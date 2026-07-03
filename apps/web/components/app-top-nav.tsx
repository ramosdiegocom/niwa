import { WireframeNav } from "@oss/ui/components/wireframe";
import { LogoSphere } from "./logo-sphere";

export function AppTopNav() {
	return (
		<WireframeNav
			className="flex items-center justify-between border-b bg-background px-4"
			hideOn="mobile"
			position="top"
		>
			<div className="flex items-center">
				<LogoSphere />
				<div>
					<div className="font-bold text-sm">Diego Ramos</div>
					<div className="font-medium text-xs">Full-Stack Engineer</div>
				</div>
			</div>

			<div className="flex items-center gap-1">
				<a
					className="rounded-md px-3 py-2 transition-colors hover:bg-muted"
					href="https://www.youtube.com/watch?v=x70d_rH55J8"
					rel="noopener noreferrer"
					target="_blank"
				>
					YouTube
				</a>
				<a
					className="rounded-md px-3 py-2 transition-colors hover:bg-muted"
					href="mailto:m@ramosdiego.com"
				>
					Email
				</a>
				<a
					className="rounded-md px-3 py-2 transition-colors hover:bg-muted"
					href="https://github.com/ramosdiegocom"
					rel="noopener noreferrer"
					target="_blank"
				>
					GitHub
				</a>
			</div>
		</WireframeNav>
	);
}
