import { Zoom } from "react-awesome-reveal";

const ActivityCard = ({ title, images, isStudentForum }) => {
        return (
        <Zoom 
        duration={2000}>
            <div className="activity-card">
                <h3 className="activity-title">{title}</h3>
                <div className={isStudentForum ? "student-forum" : "activity-images"}>
                    {images.map((img, index) => (
                        <img 
                        key={index}
                        src={img.src} 
                        alt={img.alt} 
                        className={img.className}
                        />
                    ))}
                </div>
            </div>
        </Zoom>
    );
};

export default ActivityCard;