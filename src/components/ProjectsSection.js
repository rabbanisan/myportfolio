import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

function SkillsSection() {
    return (
        <section className="py-28" id="projects">
            <div className="">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Some of my projects</SectionParagraph>
            </div>
        </section>
    );
}

export default SkillsSection;