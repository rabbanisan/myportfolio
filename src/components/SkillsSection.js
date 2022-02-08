import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

function SkillsSection() {
    return (
        <section className="py-28 bg-skillSection" id="skills">
            <div className="container mx-auto">
                <SectionTitle>Skills</SectionTitle>
                <SectionParagraph>Some Of My Abilities </SectionParagraph>
            </div>
            <div className="flex flex-wrap justify-center mt-20 mx-48">
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard
                        image={process.env.PUBLIC_URL + '/javascript.svg'}
                        name="JavaScript"
                        level="Menengah"
                        imgClassname="h-14 rounded-full"
                    />
                </div>
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard
                        image={process.env.PUBLIC_URL + '/react.svg'}
                        name="React JS"
                        level="Menengah"
                        imgClassname="h-14"
                    />
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;