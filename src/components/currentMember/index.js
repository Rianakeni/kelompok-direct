const CurrentMember = () => {
  return (
    <div className="container">
      <header className="header">
        <img src="../images/logocssa.png" alt="CSSA Logo" className="logo" />
        <nav className="nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#members" className="nav-link">
            Our Member
          </a>
        </nav>
      </header>
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
            <p>
              Parliamentary atau Divisi Acara bertanggung jawab untuk
              merencanakan dan mengorganisir acara, berkoordinasi dengan pihak
              terkait, mengelola anggaran, serta memastikan pelaksanaan acara
              berjalan lancar. Mereka juga harus mengatasi masalah yang muncul
              selama acara berlangsung dan melakukan evaluasi serta menyusun
              laporan akhir setelah acara selesai. Peran ini memastikan setiap
              detail acara dipersiapkan dan diimplementasikan dengan baik untuk
              mencapai tujuan yang telah ditetapkan.
            </p>
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
            <p>
              Divisi Kerohanian bertanggung jawab untuk merencanakan dan
              melaksanakan kegiatan keagamaan dan spiritual dalam organisasi.
              Mereka mengoordinasikan acara seperti doa bersama, ceramah, dan
              peringatan hari-hari besar keagamaan. Divisi ini juga menyediakan
              dukungan moral dan spiritual bagi anggota, serta memastikan bahwa
              nilai-nilai spiritual dan etika diterapkan dalam semua aktivitas
              organisasi. Mereka berperan penting dalam membangun dan menjaga
              suasana yang harmonis dan penuh makna dalam lingkungan organisasi.
            </p>
          </div>
        </section>
        <section className="section reverse">
          <img src="./images/edu.jpeg" alt="Education" className="image" />
          <div className="text">
            <h2>EDUCATION</h2>
            <p>
              Divisi Pendidikan bertugas menyusun dan menyelenggarakan program
              pendidikan. Divisi ini juga mengembangkan bahan ajar serta
              memastikan program yang diselenggarakan relevan dan berkualitas.
              Tujuannya adalah mendukung pengembangan pribadi dan profesional
              baik mahasiswa dan anggota organisasi yang ada.
            </p>
          </div>
        </section>
        <section className="section">
          <img src="./images/PR.jpeg" alt="Public Relation" className="image" />
          <div className="text">
            <h2>PUBLIC RELATION</h2>
            <p>
              Divisi Public Relation bertugas membangun dan memelihara citra
              positif organisasi melalui komunikasi dengan publik dan media.
              Mereka mengelola hubungan dengan media. Selain itu, divisi ini
              juga berperan dalam menangani krisis komunikasi dan memastikan
              pesan organisasi disampaikan secara konsisten dan efektif.
            </p>
          </div>
        </section>
        <section className="section reverse">
          <img src="./images/mulmed.jpeg" alt="Multimedia" className="image" />
          <div className="text">
            <h2>MULTIMEDIA</h2>
            <p>
              Divisi Multimedia bertanggung jawab untuk membuat, mengelola, dan
              memproduksi konten visual dan audio untuk organisasi. Mereka
              menghasilkan materi promosi seperti video, foto, dan desain grafis
              untuk berbagai platform. Selain itu, divisi ini juga memastikan
              bahwa semua konten multimedia mencerminkan citra dan pesan
              organisasi secara konsisten dan menarik.
            </p>
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
            <p>
              Divisi Sport bertanggung jawab untuk merencanakan,
              menyelenggarakan, dan mengawasi semua kegiatan olahraga. Mereka
              mengatur jadwal latihan, kompetisi, dan acara olahraga lainnya,
              serta memastikan semua kegiatan berjalan lancar dan sesuai standar
              keselamatan. Selain itu, divisi ini juga berperan dalam
              mempromosikan gaya hidup sehat.
            </p>
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
            <p>
              Divisi Perwakilan Angkatan bertugas untuk menjembatani komunikasi
              antara mahasiswa dan fakultas. Mereka mengkoordinasikan kegiatan
              angkatan, menyampaikan aspirasi dan feedback mahasiswa kepada
              CSSA, serta memastikan kepentingan dan kebutuhan angkatan
              diakomodasi dengan baik.
            </p>
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
