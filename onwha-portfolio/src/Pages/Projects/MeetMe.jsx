import "../../Styles/meetMe.css";

function MeetMe() {

  return (
    <main className="meetMe-page">
        <section id="meetMe-story-01" className="meetMe-first-page">
            <div className="meetMe-first-content">
                <p className="meetMe-award-label">
                제3회 양자나노과학연구단 미술공모전 Qubit 유튜브상
                </p>

                <h1 className="project-name">나를 마주하다</h1>

                <p className="meetMe-summary">
                시각이라는 한계를통해 외면만을 끊임없이 탐구하도록 프로그래밍된 우리는 역설적으로 그 무엇도 관찰하지 않는 상태에서 더 많은 가능성을 인지할 수 있습니다. 때문에, 작품속의 '나'는 0과 1사이, 어디인지 모르지만 분명히
                존재하며  그 누구도 관찰 할 수 없는 꿈속에서 수많은 가능성을 경험합니다. 
                서사의 끝에서 '나'는 자신과 '인'을 공유하는 양자컴퓨터를 발견하고 또다른 
                '나'를 마주합니다. 그런 우리에게 양자역학(Qbit)은 그 무엇보다 가까운
                존재일지 모릅니다.
                </p>
            </div>

            <a href="#meetMe-story-02" className="meetMe-move meetMe-down" aria-label="다음 화면">
                <span></span>
            </a>
        </section>

      <section id="meetMe-story-02" className="meetMe-second-page">
        <a href="#meetMe-story-01" className="meetMe-move meetMe-up" aria-label="이전 화면으로 이동">
          <span></span>
        </a>

        <h1>Still Cut</h1>

        <p>미국의 물리학자 '매튜 P.A 피셔'는 2017년, 논문 「우리는 양자 컴퓨터인가? 아니면 단지 똑똑한 로봇에 불과한가?」에서 인간의 두뇌와 양자컴퓨터의 유사성에 대한 연구결과를 발표했습니다.
          시선을 통해 하나의 이미지로 관찰되는 우리의 모습 또한 사실 수많은 원자와 '인'으로 이루어져 있으며 끊임없는 사고의 연속과 현상의 중첩으로 구성되어 있습니다.
        </p>
        <div className="meetMe-still-image">
            <img src="/images/stillcut01.png"/>
        </div>

        <a href="#meetMe-story-03" className="meetMe-move meetMe-down" aria-label="다음 화면으로 이동">
          <span></span>
        </a>
      </section>

      <section id="meetMe-story-03" className="meetMe-third-page">
        <a href="#meetMe-story-02" className="meetMe-move meetMe-up" aria-label="이전 화면으로 이동">
          <span></span>
        </a>

        <h1>Still Cut</h1>

        <p>미국의 물리학자 '매튜 P.A 피셔'는 2017년, 논문 「우리는 양자 컴퓨터인가? 아니면 단지 똑똑한 로봇에 불과한가?」에서 인간의 두뇌와 양자컴퓨터의 유사성에 대한 연구결과를 발표했습니다.
          시선을 통해 하나의 이미지로 관찰되는 우리의 모습 또한 사실 수많은 원자와 '인'으로 이루어져 있으며 끊임없는 사고의 연속과 현상의 중첩으로 구성되어 있습니다.
        </p>

        <div className="meetMe-still-image">
            <img src="/images/stillcut02.png"/>
        </div>

        <a href="#meetMe-story-04" className="meetMe-move meetMe-down" aria-label="다음 화면으로 이동">
          <span></span>
        </a>
      </section>

      <section id="meetMe-story-04" className="meetMe-fourth-page">
        <a href="#meetMe-story-03" className="meetMe-move meetMe-up" aria-label="이전 화면으로 이동">
          <span></span>
        </a>

        <h1>Still Cut</h1>

        <p>미국의 물리학자 '매튜 P.A 피셔'는 2017년, 논문 「우리는 양자 컴퓨터인가? 아니면 단지 똑똑한 로봇에 불과한가?」에서 인간의 두뇌와 양자컴퓨터의 유사성에 대한 연구결과를 발표했습니다.
          시선을 통해 하나의 이미지로 관찰되는 우리의 모습 또한 사실 수많은 원자와 '인'으로 이루어져 있으며 끊임없는 사고의 연속과 현상의 중첩으로 구성되어 있습니다.
        </p>

        <div className="meetMe-still-image">
            <img src="/images/stillcut03.png"/>
        </div>

        <a className="meetMe-video-link" href ="https://www.youtube.com/watch?v=FlTJySunPWo&t=1s" target="_blank">https://www.youtube.com/watch?v=FlTJySunPWo&t=1s</a>

        <a href="#meetMe-story-award" className="meetMe-move meetMe-down" aria-label="다음 화면으로 이동">
          <span></span>
        </a>
      </section>

      <section id="meetMe-story-award" className="meetMe-fifth-page">
        <a href="#meetMe-story-04" className="meetMe-move meetMe-up" aria-label="이전 화면으로 이동">
          <span></span>
        </a>

        <div className="meetMe-award">
            <h1>Award & Exhibition</h1>
            <p className="meetMe-award-text">
                제3회 양자나노과학연구단 미술공모전 'Qubit'에서 유튜브상을 수상하였으며,<br />
                2025년 10월 11일부터 10월 30일까지 아트린 뮤지움 초청으로 동일 작품을 전시하였습니다.
            </p>
            <div className="meetMe-award-gallery">
                <div className="gallery-item">
                    <img src="/images/meetMe-award01.png" alt="수상 이미지 1" />
                </div>
                <div className="gallery-item">
                    <img src="/images/meetMe-award02.png" alt="수상 이미지 2" />
                </div>
                <div className="gallery-item award-card">
                    <img src="/images/meetMe-award03.png" alt="전시확인서" />
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}

export default MeetMe;