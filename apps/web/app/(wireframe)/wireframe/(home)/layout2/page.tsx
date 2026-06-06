import { Wireframe } from "@oss/ui/components/wireframe";
import { NestedScrollScene } from "@/components/wireframe/example-scenes";

export default function Page() {
	return (
		<Wireframe
			config={{
				corners: {
					topLeft: "navbar",
				},
			}}
		>
			<NestedScrollScene />
		</Wireframe>
	);
}
