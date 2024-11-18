import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../Config/Firebase";
import ActivityCard from "../ActivityCard";

const Activities = () => {
  const [olahragaImages, setOlahraga] = useState([]);
  const [doaSubuhImages, setDoaSubuhImages] = useState([]);
  const [studentForumImages, setStudentForumImages] = useState([]);

  useEffect(() => {
    const imagesRef = ref(db, "images/");
    get(imagesRef).then((snapshot) => {
      if (snapshot.exists()) {
        const imagesData = snapshot.val();
        setOlahraga([
          {
            src: `data:image/jpeg;base64,${imagesData[1].gambar}`,
            alt: "Morning prayer with seniors",
          },
        ]);
      } else {
        setOlahraga([]);
      }
    });
    get(imagesRef).then((snapshot) => {
      if (snapshot.exists()) {
        const imagesData = snapshot.val();
        setDoaSubuhImages([
          {
            src: `data:image/jpeg;base64,${imagesData[2].gambar}`,
            alt: "Morning prayer with seniors",
          },
        ]);
      } else {
        setDoaSubuhImages([]);
      }
    });

    get(imagesRef).then((snapshot) => {
      if (snapshot.exists()) {
        const imagesData = snapshot.val();
        setStudentForumImages([
          {
            src: `data:image/jpeg;base64,${imagesData[3].gambar}`,
            alt: "Certificate submission",
            className: "forum-image",
          },
          {
            src: `data:image/jpeg;base64,${imagesData[4].gambar}`,
            alt: "Group photo",
            className: "forum-image",
          },
          {
            src: `data:image/jpeg;base64,${imagesData[5].gambar}`,
            alt: "Students in classroom",
            className: "forum-image",
          },
          {
            src: `data:image/jpeg;base64,${imagesData[6].gambar}`,
            alt: "Large group gathering",
            className: "forum-image large",
          },
        ]);
      } else {
        setStudentForumImages([]);
      }
    });
  }, []);

  return (
    <main className="activities">
      <h2 className="section-title">Our Activities</h2>
      <ActivityCard title="Doa Subuh Bersama Senior" images={olahragaImages} />
      <ActivityCard title="Doa Subuh Bersama Senior" images={doaSubuhImages} />
      <ActivityCard
        title="Student Forum"
        isStudentForum={true}
        images={studentForumImages}
      />
    </main>
  );
};

export default Activities;
