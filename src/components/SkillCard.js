function SkillCard({ image, name, level, imgClassname}) {

    const addImgClassname = imgClassname ? `${imgClassname}` : "";

    return (
        <div className="bg-white shadow-card rounded-lg flex items-center p-6">
            <img src={image} className={`mr-6 ${addImgClassname}`}/>
            <div>
                <h4 className="text-lg font-semibold font-sans">{name}</h4>
                <p className="text-sm font-semibold font-sans text-gray-400 mt-1">{level}</p>
            </div>
        </div>
    );
}

export default SkillCard;