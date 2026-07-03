"use client";

import { SiGithub, SiYoutube } from "@icons-pack/react-simple-icons";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@oss/ui/components/dropdown-menu";
import { MailIcon } from "lucide-react";
import type React from "react";

const links = [
	{
		label: "YouTube",
		href: "https://www.youtube.com/watch?v=x70d_rH55J8",
		external: true,
		icon: SiYoutube,
	},
	{
		label: "Email",
		href: "mailto:m@ramosdiego.com",
		external: false,
		icon: MailIcon,
	},
	{
		label: "GitHub",
		href: "https://github.com/ramosdiegocom",
		external: true,
		icon: SiGithub,
	},
];

export function ContactDropdown({ trigger }: { trigger: React.ReactElement }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger render={trigger} />
			<DropdownMenuContent align="center" side="top">
				{links.map((link) => (
					<DropdownMenuItem
						key={link.label}
						render={
							<a
								href={link.href}
								{...(link.external
									? { rel: "noopener noreferrer", target: "_blank" }
									: {})}
							/>
						}
					>
						{link.icon && <link.icon />}
						{link.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
