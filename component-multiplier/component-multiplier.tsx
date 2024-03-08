/**
 * Renders multiple instances of a given component, e.g. for testing purposes.
 * @param component - The component to be multiplied.
 * @param multiplier - The number of times the component should be rendered.
 * @returns The multiplied components.
 */
export default function ComponentMultiplier({
	component,
	multiplier,
}: {
	component: JSX.Element;
	multiplier: number;
}) {
	return (
		<>
			{Array.from({ length: multiplier })?.map((_, i) => ({
				...component,
				key: i,
			}))}
		</>
	);
}
