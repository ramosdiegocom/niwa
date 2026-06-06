"use client";

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@oss/ui/components/tabs";
import { CodePreview } from "@oss/ui/components/wireframe/code-preview";
import { ConfigurableWireframe } from "@oss/ui/components/wireframe/configurable-wireframe";
import { LayoutControlsPanel } from "@oss/ui/components/wireframe/layout-controls-panel";
import { WireframeConfigProvider } from "@oss/ui/components/wireframe/wireframe-config-provider";
import { Code2 } from "lucide-react";
import {
	ShellTag,
	WireframeShell,
	WireframeSurface,
} from "@/components/wireframe/demo-shell";

function PlaygroundContent() {
	return (
		<WireframeShell>
			<ConfigurableWireframe>
				<div className="mx-auto max-w-5xl space-y-6 p-4 sm:p-8">
					<WireframeSurface className="space-y-4">
						<div className="flex flex-wrap items-center gap-2">
							<ShellTag>Playground</ShellTag>
							<ShellTag>Configurable</ShellTag>
							<ShellTag>Wireframe</ShellTag>
						</div>
						<h1 className="font-black text-3xl tracking-tight sm:text-5xl">
							Wireframe Playground
						</h1>
					</WireframeSurface>

					<WireframeSurface>
						<Tabs defaultValue="config">
							<TabsList className="mb-4">
								<TabsTrigger value="config">
									<Code2 className="mr-2 size-4" />
									Configuration
								</TabsTrigger>
								<TabsTrigger value="code">Code</TabsTrigger>
							</TabsList>
							<TabsContent value="config">
								<LayoutControlsPanel />
							</TabsContent>
							<TabsContent value="code">
								<CodePreview />
							</TabsContent>
						</Tabs>
					</WireframeSurface>
				</div>
			</ConfigurableWireframe>
		</WireframeShell>
	);
}

export default function PlaygroundPage() {
	return (
		<WireframeConfigProvider>
			<PlaygroundContent />
		</WireframeConfigProvider>
	);
}
