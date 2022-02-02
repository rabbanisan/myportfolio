import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";
function Navbar() {
	return (
		<div className="flex items-center">
			<div className="w-3/12">
				<Logo/>
			</div>
			<div className="w-6/12">
				<Nav/>
			</div>
			<div className="w-3/12 text-center">
				<Button variant="outline-yellow">Contact</Button>
			</div>
		</div>
	);
}

export default Navbar;
