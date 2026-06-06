import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "../button";
import {
	defaultCSSVariables,
	useWireframeConfig,
	type WireframeHideOnOption,
} from "./wireframe-config-provider";

function formatHideOnAttribute(value: WireframeHideOnOption) {
	return value === "none" ? "" : ` hideOn="${value}"`;
}

function formatHideOnLine(value: WireframeHideOnOption) {
	return value === "none" ? "" : `\n    hideOn="${value}"`;
}

export function CodePreview() {
	const { config } = useWireframeConfig();
	const [copied, setCopied] = useState(false);

	const buildCornersCode = () => {
		const corners = [
			{ key: "topLeft", value: config.corners.topLeft },
			{ key: "topRight", value: config.corners.topRight },
			{ key: "bottomLeft", value: config.corners.bottomLeft },
			{ key: "bottomRight", value: config.corners.bottomRight },
		];

		const cornerEntries = corners
			.filter((corner) => corner.value !== "sidebar")
			.map((corner) => `      ${corner.key}: "${corner.value}"`);

		return cornerEntries.length > 0
			? `    corners: {\n${cornerEntries.join(",\n")}\n    },\n`
			: "";
	};

	const generateCode = () => {
		const nonDefaultCssVars = Object.entries(config.cssVariables).filter(
			([key, value]) =>
				(defaultCSSVariables as Record<string, number | undefined>)[key] !==
				value
		);

		const cssVarsCode =
			nonDefaultCssVars.length > 0
				? `    cssVariables: {\n${nonDefaultCssVars
						.map(([key, value]) => `      "${key}": ${value}`)
						.join(",\n")}\n    },\n`
				: "";

		const cornersCode = buildCornersCode();
		const hasConfig = cssVarsCode || cornersCode;
		const configAttr = hasConfig
			? `\n  config={{\n${cssVarsCode}${cornersCode}  }}`
			: "";

		let navSegment: string;
		if (config.navType === "normal") {
			const navParts: string[] = [];
			if (config.showTopNav) {
				navParts.push(
					`<WireframeNav position="top"${formatHideOnAttribute(config.topNavHideOn)}>\n    {/* children */}\n  </WireframeNav>`
				);
			}
			if (config.showBottomNav) {
				navParts.push(
					`<WireframeNav position="bottom"${formatHideOnAttribute(config.bottomNavHideOn)}>\n    {/* children */}\n  </WireframeNav>`
				);
			}
			navSegment = navParts.join("\n  ");
		} else {
			navSegment = `<WireframeStickyNav${formatHideOnAttribute(config.stickyNavHideOn)}>\n     {/* children */}\n  </WireframeStickyNav>`;
		}

		const innerParts: string[] = [navSegment];

		if (config.showLeftSidebar) {
			innerParts.push(
				`<WireframeSidebar\n    collapsed={leftSidebarCollapsed}${formatHideOnLine(config.leftSidebarHideOn)}\n    position="left"\n  >\n    {/* children */}\n  </WireframeSidebar>`
			);
		}
		if (config.showRightSidebar) {
			innerParts.push(
				`<WireframeSidebar\n    collapsed={rightSidebarCollapsed}${formatHideOnLine(config.rightSidebarHideOn)}\n    position="right"\n  >\n    {/* children */}\n  </WireframeSidebar>`
			);
		}
		innerParts.push("{/* children */}");

		return `<Wireframe${configAttr}>\n  ${innerParts.join("\n\n  ")}\n</Wireframe>`;
	};

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(generateCode());
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	return (
		<div className="relative flex flex-1 flex-col">
			<div className="flex items-center justify-between px-6 py-4">
				<h2 className="font-semibold text-xl">Wireframe Configuration</h2>
				<Button onClick={handleCopy} size="sm" variant="secondary">
					{copied ? (
						<>
							<Check className="mr-2 size-4" />
							Copied!
						</>
					) : (
						<>
							<Copy className="mr-2 size-4" />
							Copy
						</>
					)}
				</Button>
			</div>
			<div className="flex-1 overflow-auto px-6 pb-6">
				<pre className="rounded-lg bg-muted p-4 font-mono text-sm">
					<code>{generateCode()}</code>
				</pre>
			</div>
		</div>
	);
}
