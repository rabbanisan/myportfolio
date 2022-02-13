function SkillCard({ image, name, level, className, imgClassname}) {

    const addImgClassName = imgClassname ? `${imgClassname}` : "";
    const addClassName = className ? `${className}` : "";

    return (
        <div className={`bg-white shadow-card rounded-lg flex items-center p-6 ${addClassName}`}>
            <img src={image} className={`mr-6 ${addImgClassName}`}/>
            <div>
                <h4 className="text-lg font-semibold font-sans">{name}</h4>
                <p className="text-sm font-semibold font-sans text-gray-400 mt-1">{level}</p>
            </div>
        </div>
    );
}

export default SkillCard;