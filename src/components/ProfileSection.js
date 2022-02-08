import OrderedList from "./OrderedList";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

function ProfileSection() {
	return (
		<section className="py-28" id="profile">
			<div className="container mx-auto">
				<SectionTitle>Profile</SectionTitle>
				<SectionParagraph>Know me briefly</SectionParagraph>
                <div className="flex w-8/12 mx-auto mt-14">
                    <div className="w-4/12">
                        <img src={process.env.PUBLIC_URL + '/profile-photo.png'} className="w-full"/>
                    </div>
                    <div className="w-8/12 px-10">
                        <p className="text-lg leading-relaxed">
                            Hi, I'm Bani, I'm a teacher at Yadika Soreang Vocational High School,🚀 from Indonesia , currently teaching Frontend Web Development, Freelancer (You can reach me via email :D ) 👨🏽‍💻, Beside's programming, most of my free time i spend with my little family 👪, i enjoy gaming 🕹️ and watching movies 📽️
                        </p>
                        <OrderedList/>
                    </div>
                </div>
			</div>
		</section>
	);
}

export default ProfileSection;
