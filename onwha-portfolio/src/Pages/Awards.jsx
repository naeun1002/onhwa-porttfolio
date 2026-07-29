import { useNavigate } from "react-router-dom";
import '../Styles/awards.css'

function Awards() {
  const navigate = useNavigate();
  return (
    <main className="page-container">
      <h1>Awards</h1>

      <section className="awards-layout">
        <article className="award-card" onClick={() => navigate('/project/meet-me')}>
          <div className="awards-visual award-project-01">
            <div className="award-text">
              <h2 className="award-heading">
                <span className="awards-name">
                  Project 01 | 제3회 양자나노과학연구단 미술공모전 Qubit
                </span>

                <span className="awards-grade">유튜브상</span>
              </h2>

              <p className="project-name">나를 마주하다</p>

              <div className="attribution"><h2>기여도</h2><span>40% (팀 프로젝트 | 기획, 촬영, 그래픽 디자인, 영상 편집)</span></div>
              <div className="tool"><h2>사용툴</h2><span> Adobe Photoshop, Adobe illustrator, Adobe After Effects, Adobe Premiere Pro</span></div>
            </div>
          </div>
        </article>

        <article className="award-card" onClick={() => navigate('/project/goyo')}>
          <div className="awards-visual award-project-02">
            <div className="award-text">
              <h2 className="award-heading">
                <span className="awards-name">
                  Project 02 | 제60회 대한민국디자인전람회
                </span>

                <span className="awards-grade">입선</span>
              </h2>

              <p className="project-name">시 리스팅 앱, 고요</p>
              <div className="attribution"><h2>기여도</h2><span>100% (개인 프로젝트 | 기획, UXUI 디자인, 그래픽 디자인, 전시장 DP, 프로토타입)</span></div>
              <div className="tool"><h2>사용툴</h2><span>Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Figma</span></div>
            </div>
          </div>
        </article>

        <article className="award-card" onClick={() => navigate('/project/artroad')}>
          <div className="awards-visual award-project-03">
            <div className="award-text">
              <h2 className="award-heading">
                <span className="awards-name">
                  Project 03 | 대학생 서비스 디자인 학회 공공서비스디자인 프로젝트
                </span>

                <span className="awards-grade">금상</span>
              </h2>

              <p className="project-name">ARTROAD</p>
              <div className="attribution"><h2>기여도</h2><span>100% (팀 프로젝트 | 기획, UXUI 디자인, 그래픽 디자인)</span></div>
              <div className="tool"><h2>사용툴</h2><span>Figma, Adobe illustrator, Adobe Photoshop</span></div>
            </div>
          </div>
        </article>

        <article className="award-card">
          <div className="awards-visual">
            <div className="award-text">
              <h2 className="award-heading">
                <span className="awards-name">
                  Project 04 | ??
                </span>

                <span className="awards-grade">???</span>
              </h2>

              <p className="project-name">????</p>
            </div>
          </div>
        </article>

        <article className="award-card">
          <div className="awards-visual">
            <div className="award-text">
              <h2 className="award-heading">
                <span className="awards-name">
                  Project 05 | ???
                </span>

                <span className="awards-grade">???</span>
              </h2>

              <p className="project-name">????</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Awards