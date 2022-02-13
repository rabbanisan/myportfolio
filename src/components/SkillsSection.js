import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

function SkillsSection() {
    return (
        <section className="py-28 bg-skillSection" id="skills">
            <div className="container mx-auto">
                <SectionTitle>Skills</SectionTitle>
                <SectionParagraph>Some of my abilities </SectionParagraph>
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
                        image={process.env.PUBLIC_URL + '/mysql.svg'}
                        name="MySQL"
                        level="Menengah"
                        imgClassname="h-14"
                    />
                </div>
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard
                        image={process.env.PUBLIC_URL + '/react.svg'}
                        name="React Js"
                        level="Menengah"
                        imgClassname="h-14"
                    />
                </div>
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard
                        image={process.env.PUBLIC_URL + '/nextjs.svg'}
                        name="Next Js"
                        level="Menengah"
                        imgClassname="h-14"
                    />
                </div>
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard
                        image={process.env.PUBLIC_URL + '/tailwindcss-icon.svg'}
                        name="Tailwind Css"
                        level="Menengah"
                        imgClassname="h-14"
                    />
                </div>
                <div className="w-4/12 px-4 pb-8">
                    <SkillCard
                        image={process.env.PUBLIC_URL + '/figma.svg'}
                        name="Figma "
                        level="Menengah"
                        imgClassname="h-14"
                    />
                </div>
        
            </div>
        </section>
    );
}

export default SkillsSection;