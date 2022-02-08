import Button from "./Button";
import Navbar from "./Navbar";

function HeroSection() {
	return (
		<div className="bg-hero h-[550px]">
			<div className="container mx-auto">
				<Navbar />
				<div className="text-center mt-16">
					<h1 className="text-white text-3xl w-8/12 leading-relaxed font-semibold font-mono mx-auto">
					I'm a teacher,  teaching front-end web development, automation and IoT
					</h1>
					<p className="text-white text-lg text-opacity-60 w-4/12 mx-auto leading-relaxed mt-5">
                        Since 2016  I start programming and graphic design. Since 2020 start teaching, automation and IoT.
                    </p>
					<Button variant="fill-yellow">Know Me</Button>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
