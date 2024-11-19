const ActivityCard = ({ title, images, isStudentForum }) => {
  return (
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
  );
};

export default ActivityCard;
