export type RoutePreviewKind =
	| "responsive-sidebar"
	| "sidebar-bottom"
	| "sticky-sidebar-bottom"
	| "top-bottom"
	| "header-sticky-sidebar"
	| "sticky-layers"
	| "playground";

export type RouteCatalogItem = {
	href: string;
	title: string;
	description: string;
	preview: RoutePreviewKind;
};

export const routeCatalog = [
	{
		href: "/playground",
		title: "Playground",
		description:
			"Interactive controls for tuning wireframe shell, navigation, and content layout options before copying the generated code.",
		preview: "playground",
	},
	{
		href: "/layout2",
		title: "Common Layout",
		description:
			"Sticky top bar with static sidebar and bottom nav around nested scroll regions. Useful for dashboards with persistent context plus deep in-page scrolling.",
		preview: "sticky-sidebar-bottom",
	},
	{
		href: "/layout5",
		title: "Header + Sticky Nav + Sidebar",
		description:
			"Header plus sticky nav and sidebar. Useful for content-heavy pages that keep section controls pinned while users scan long documents.",
		preview: "header-sticky-sidebar",
	},
] as const satisfies readonly RouteCatalogItem[];
