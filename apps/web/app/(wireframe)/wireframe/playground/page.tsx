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
	WireframeShell,
	WireframeSurface,
} from "@/components/wireframe/demo-shell";

function PlaygroundContent() {
	return (
		<WireframeShell>
			<ConfigurableWireframe>
				<div className="mx-auto max-w-5xl space-y-6 p-4 sm:p-8">
					<WireframeSurface>
						<h1 className="mb-4 font-black text-3xl tracking-tight sm:text-5xl">
							Wireframe Playground
						</h1>
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
