import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";
function Navbar() {
	return (
		<div className="navbar bg-blue-600">
			<div className="container flex mx-auto items-center">
				<div className="w-3/12">
					<Logo />
				</div>
				<div className="w-6/12">
					<Nav />
				</div>
				<div className="w-3/12">
					<Button />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
