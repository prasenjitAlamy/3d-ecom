import { NavLink } from "./NavLink";

export const NavLinks = async ({ channel }: { channel: string }) => {
	return (
		<>
			<NavLink href="/products">All</NavLink>

			<NavLink key={1} href={`/categories/${1}`}>
				Navlink
			</NavLink>
		</>
	);
};
