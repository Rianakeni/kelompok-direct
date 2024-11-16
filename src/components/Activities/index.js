import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import ActivityCard from "../ActivityCard";
const Activities = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const imagesRef = ref(db, "images/");
    onValue(imagesRef, (snapshot) => {
      const data = snapshot.val();
      setImages(data);
    });
  }, []);
  return (
    <main className="activities">
      <h2 className="section-title">Our Activities</h2>
      <ActivityCard title="Olahraga Bersama Dosen FILKOM">
        {images.map((item) => (
          <img
            key={item.id}
            src={`data:image/jpeg;base64,${item.gambar}`}
            alt={`Activity ${item.id}`}
          />
        ))}
      </ActivityCard>
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
