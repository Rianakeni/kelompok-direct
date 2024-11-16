import ActivityCard from "../ActivityCard";
const Activities = () => {
  return (
    <main className="activities">
      <h2 className="section-title">Our Activities</h2>
      <ActivityCard
        title="Olahraga Bersama Dosen FILKOM"
        images={[
          {
            src: "img/olahraga.jpg",
            alt: "Sports activity with professors 1",
          },
          {
            src: "img/olahraga.jpg",
            alt: "Sports activity with professors 2",
          },
        ]}
      />
      <ActivityCard
        title="Doa Subuh Bersama Senior"
        images={[
          { src: "/img/doa-subuh.jpg", alt: "Morning prayer with seniors" },
        ]}
      />
      <ActivityCard
        title="Student Forum"
        isStudentForum={true}
        images={[
          {
            src: "img/sertifikat.jpg",
            alt: "Certificate submission",
            className: "forum-image",
          },
          {
            src: "img/cssa1.JPG",
            alt: "Group photo",
            className: "forum-image",
          },
          {
            src: "img/student.jpg",
            alt: "Students in classroom",
            className: "forum-image",
          },
          {
            src: "img/cssa2.JPG",
            alt: "Large group gathering",
            className: "forum-image large",
          },
        ]}
      />
    </main>
  );
};

export default Activities;
