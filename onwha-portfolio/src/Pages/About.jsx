import '../Styles/about.css'

const programs = [
  { name: 'Figma', image: '/images/figma.png' },
  { name: 'Illustrator', image: '/images/illustrator.png' },
  { name: 'Photoshop', image: '/images/photoshop.png' },
  { name: 'After Effects', image: '/images/aftereffects.png' },
  { name: 'InDesign', image: '/images/indesign.png' },
  { name: 'Procreate', image: '/images/procreate.png' },
]

function About() {
  return (
    <main className="page-container">
      <h1>About</h1>

      <div className="about-layout">
        <div className="profile-photo">
          <img src = "/images/profile.png"></img>
          <h2>김가은 &nbsp;&nbsp;&nbsp;Kim Gaeun</h2>
        </div>

        <h1 className="profile-name">
          안녕하세요,{' '}
          <span className="green-highlight">온화{'[誾]'}한</span>{' '}
          디자이너 김가은[誾]입니다.
        </h1>


        <div className="profile-detail">
          <div className="detail-item">
            <h2>Education</h2>
            <p><span className = "detail-year">2022</span>대구남산고 졸업</p>
            <p><span className = "detail-year">2023</span>한양대학교 ERICA 영상디자인학과 입학</p>
            <p><span className = "detail-year">2027</span>한양대학교 ERICA 영상디자인학과 졸업 예정</p>
          </div>

          <div className="detail-item">
            <h2>Scholarship</h2>
            <p><span className = "detail-year">2023</span>성적우수 특별장학</p>
            <p><span className = "detail-year">2024</span>성적우수 특별장학, 한양브레인(성적우수) 학비감면</p>
            <p><span className = "detail-year">2025</span>디자인대학 학부자율장학금</p>
          </div>

          <div className="detail-item experience">
            <h2>Experience</h2>
            <div className="experience-list">
              <p><span className="detail-year">2023</span>한양대학교 디자인대학 Axis 전시 참여</p>
              <p><span className="detail-year">2024</span>한양대학교 디자인대학 Axis 전시 참여</p>
              <p><span className="detail-year">2025</span>아요바{'(주)'}와 연계하여 VITA 템플릿 제작 참여</p>
              <p><span className="detail-year">2025</span>대학생 서비스 디자인학회 크리솔 13-14기</p>
              <p><span className="detail-year">2025</span>한양대학교 영상디자인학과 UXUI Lab 부팀장</p>
              <p><span className="detail-year">2025</span>DESIGN KOREA 2025 잡페어관 전시 {'( in COEX)'}</p>
              <p><span className="detail-year">2025</span>한양대학교 디자인대학 Axis 전시 참여</p>
              <p><span className="detail-year">2026</span>활동 내용 1</p>
              <p><span className="detail-year">2026</span>활동 내용 1</p>
              <p><span className="detail-year">2026</span>활동 내용 1</p>
              <p><span className="detail-year">2026</span>활동 내용 1</p>
              <p><span className="detail-year">2026</span>활동 내용 1</p>
              <p><span className="detail-year">2026</span>활동 내용 1</p>
            </div>
          </div>

          <div className="detail-item award">
            <h2>Awards</h2>
            <p><span className = "detail-year">2023</span>한양대학교 ERICA 2023 혁신 융합 HY-KATHON 특별상(3등) </p>
            <p><span className = "detail-year">2024</span>제3회 양자나노과학연구단 미술공모전 Qubit 유튜브상</p>
            <p><span className = "detail-year">2025</span>한양대학교 ERICA 25-1학기 캡스톤디자인 경진대회 장려상</p>
            <p><span className = "detail-year">2025</span>한양대학교 ERICA 25-2학기 캡스톤디자인 경진대회 장려상</p>
            <p><span className = "detail-year">2025</span>제60회 대한민국디자인전람회 입선</p>
            <p><span className = "detail-year">2025</span>대학생 서비스 디자인 학회 14기 공공서비스디자인 프로젝트 대상</p>
            <p><span className = "detail-year">2026</span>상</p>
            <p><span className = "detail-year">2026</span>상</p>
            <p><span className = "detail-year">2026</span>상</p>
            <p><span className = "detail-year">2026</span>상</p>
            <p><span className = "detail-year">2026</span>상</p>
          </div>

          <div className="detail-item program">
            <h2>Program</h2>

            <div className="program-list">
              {programs.map((program) => (
                <div className="program-item" key={program.name}>
                  <img src={program.image} alt={program.name} title={program.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default About