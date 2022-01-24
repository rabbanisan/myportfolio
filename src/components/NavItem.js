function NavItem(){
    return (
        <ul className="nav-item flex justify-center space-x-10 py-16 ">
					<li>
						<a className="text-white  text-lg text-opacity-60 font-semibold">
							Profile
						</a>
					</li>
					<li>
						<a className="text-white text-lg text-opacity-60 font-semibold">
							Skills
						</a>
					</li>
					<li>
						<a className="text-white text-lg text-opacity-60 font-semibold">
							Projects
						</a>
					</li>
					<li>
						<a className="text-white text-lg text-opacity-60 font-semibold">
							Contact
						</a>
					</li>
				</ul>
    )
}

export default NavItem;