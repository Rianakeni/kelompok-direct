import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const CurrentMember = () => {
  const [desc, setDesc] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const descRef = ref(db, "desc/");
    onValue(descRef, (snapshot) => {
      const data = snapshot.val();
      setDesc(data);
    });
  }, []);

  return (
    <div className="container">
      <main className="content">
        <section className="section">
          <img src="../images/image.png" alt="Officer" className="image" />
          <div class="text">
            <h2>OFFICER</h2>
            <div class="columns">
              <div>
                <h3>Ketua</h3>
                <ul>
                  <li>
                    Mengarahkan seluruh kegiatan dan mengambil keputusan utama.
                  </li>
                  <li>Bertindak sebagai wajah organisasi.</li>
                </ul>
                <h3>Wakil Ketua</h3>
                <ul>
                  <li>Membantu dan menggantikan Ketua bila diperlukan.</li>
                  <li>Memastikan kelancaran kegiatan.</li>
                </ul>
              </div>
              <div>
                <h3>Sekretaris</h3>
                <ul>
                  <li>Mengelola dokumen dan komunikasi.</li>
                  <li>Mencatat rapat dan menyimpan arsip.</li>
                </ul>
              </div>
              <div>
                <h3>Bendahara</h3>
                <ul>
                  <li>Mengatur dan melaporkan keuangan.</li>
                  <li>Memastikan penggunaan dana sesuai anggaran.</li>
                </ul>
                <h3>Wakil Bendahara</h3>
                <ul>
                  <li>Membantu Bendahara dan menggantikannya bila perlu.</li>
                  <li>
                    Menyimpan catatan tambahan dan membantu laporan keuangan.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section reverse">
          <img
            src="./images/parlem.jpeg"
            alt="Parliamentary"
            className="image"
          />
          <div className="text">
            <h2>PARLIAMENTARY</h2>
            <p>{desc.parlem}</p>
          </div>
        </section>
        <section className="section">
          <img
            src="./images/kerohanian.jpeg"
            alt="Spiritual"
            className="image"
          />
          <div className="text">
            <h2>SPIRITUAL</h2>
            <p>{desc.spiritual}</p>
          </div>
        </section>
        <section className="section reverse">
          <img src="./images/edu.jpeg" alt="Education" className="image" />
          <div className="text">
            <h2>EDUCATION</h2>
            <p>{desc.education}</p>
          </div>
        </section>
        <section className="section">
          <img src="./images/PR.jpeg" alt="Public Relation" className="image" />
          <div className="text">
            <h2>PUBLIC RELATION</h2>
            <p>{desc.PR}</p>
          </div>
        </section>
        <section className="section reverse">
          <img src="./images/mulmed.jpeg" alt="Multimedia" className="image" />
          <div className="text">
            <h2>MULTIMEDIA</h2>
            <p>{desc.mulmed}</p>
          </div>
        </section>
        <section className="section">
          <img
            src="./images/icon.jpg"
            alt="Public Relation"
            className="image"
          />
          <div className="text">
            <h2>SPORT</h2>
            <p>{desc.sport}</p>
          </div>
        </section>
        <section className="section reverse">
          <img
            src="./images/angkatan.jpeg"
            alt="Multimedia"
            className="image"
          />
          <div className="text">
            <h2>SENAT ANGKATAN</h2>
            <p>{desc.senat}</p>
          </div>
        </section>
        <section className="advisor-section">
          <div className="advisor-cards">
            <div className="advisor-card">
              <img
                src="./images/maamRaissa.jpeg"
                alt="Advisor 1"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Advisor</h3>
                <p className="advisor-role">Raisa M. Maringka M.Kom</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/sirRolly.jpeg"
                alt="Advisor 2"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Advisor</h3>
                <p className="advisor-role">Rolly Lontaan M.Kom.</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/sirGreenm.jpeg"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Advisor</h3>
                <p className="advisor-role">Green A. Sandag, S.Kom., M.S. </p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/sirGreens.jpeg"
                alt="Advisor 4"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Advisor</h3>
                <p className="advisor-role">Green Mandias, S.Kom., M.Cs.</p>
              </div>
            </div>
            <div className="advisor-president">
              <img
                src="./images/wayne.jpg"
                alt="Advisor 4"
                className="advisor-image"
              />
              <h3 className="advisor-name">Wayne Lamansiang</h3>
              <p className="advisor-role">President</p>
            </div>
          </div>
        </section>
        <section className="advisor-section">
          <div className="advisor-cards">
            <div className="advisor-card">
              <img
                src="./images/ekei.JPG"
                alt="Treasurer"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Treasurer</h3>
                <p className="advisor-role">Ekklesia Dondokambey</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/fran.JPG"
                alt="Advisor 2"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Vice Treasurer</h3>
                <p className="advisor-role">Franklyn Hosang</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/riana.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Vice President</h3>
                <p className="advisor-role">Riana Keni</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/memey.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Secretary</h3>
                <p className="advisor-role">Meilyan Siwy</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/winky.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Spiritual</h3>
                <p className="advisor-role"> Winky Warriki</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/mic.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Spiritual</h3>
                <p className="advisor-role">Miceflona Londah</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/deeva.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Education</h3>
                <p className="advisor-role">Deeva Lolong</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/kia.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Education</h3>
                <p className="advisor-role">Hizkia Palar</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/marvel.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Education</h3>
                <p className="advisor-role">Marvel Sompotan</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/given.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Education</h3>
                <p className="advisor-role">Given Pantow</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/lis.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Education</h3>
                <p className="advisor-role">Fahrunnisa Cahyani</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/eben.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Sport</h3>
                <p className="advisor-role">Hizkia Modest</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/icon.jpg"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Sport</h3>
                <p className="advisor-role">Mike Puluntumbage</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/icon.jpg"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Public Relation</h3>
                <p className="advisor-role">Vallerie Salindeho</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/icon.jpg"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Public Relation</h3>
                <p className="advisor-role">Larry Tene</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/icon.jpg"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Public Relation</h3>
                <p className="advisor-role">Immanuela Griffin</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/icon.jpg"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Public Relation</h3>
                <p className="advisor-role">Amelia Sugiharto</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/icon.jpg"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Multimedia</h3>
                <p className="advisor-role">Tiara Mamuaya</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/icon.jpg"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Multimedia</h3>
                <p className="advisor-role">Djay Nikijuluw</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/icon.jpg"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Multimedia</h3>
                <p className="advisor-role">Victoria Palilingan</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/amanda.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Parliamentary</h3>
                <p className="advisor-role">Amanda Mamesag</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/christa.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Parliamentary</h3>
                <p className="advisor-role">Christa Tumbel</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/mita.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Parliamentary</h3>
                <p className="advisor-role">Shelomitha Wowor</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/hil.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Parliamentary</h3>
                <p className="advisor-role">Hillary Lumeno</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/timy.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Senat Angkatan</h3>
                <p className="advisor-role">Timoty Manoppo</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/icon.jpg"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Senat Angkatan</h3>
                <p className="advisor-role">Lovely Kaawoan</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/van.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Senat Angkatan</h3>
                <p className="advisor-role">Vanessa Sahetapy</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/deeva.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Senat Angkatan</h3>
                <p className="advisor-role">Deeva Lolong</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/kia.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Senat Angkatan</h3>
                <p className="advisor-role">Hizkia Palar</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/icon.jpg"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Senat Angkatan</h3>
                <p className="advisor-role">Jane Madagaji</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/belinda.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Senat Angkatan</h3>
                <p className="advisor-role"> Belinda Pangalo</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/gina.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Senat Angkatan</h3>
                <p className="advisor-role">Georgina Mamahit</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/lov.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Senat Angkatan</h3>
                <p className="advisor-role">Lovely Tololiu</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/kyra.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Senat Angkatan</h3>
                <p className="advisor-role">Kyra Pakasi</p>
              </div>
            </div>
            <div className="advisor-card">
              <img
                src="./images/new.JPG"
                alt="Advisor 3"
                className="advisor-image"
              />
              <div className="advisor-info">
                <h3 className="advisor-name">Senat Angkatan</h3>
                <p className="advisor-role">Newguinea Panglila</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CurrentMember;
