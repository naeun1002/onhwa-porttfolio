import "../../Styles/goyo.css";

const competitors = [
  {
    id: "millie",
    name: "밀리의 서재",
    symbol: "M",
    logo: "/images/milliy-logo.png",
  },
  {
    id: "ridi",
    name: "리디북스",
    symbol: "R",
    logo: "/images/readybooks-logo.png",
  },
  {
    id: "yes24",
    name: "예스24",
    symbol: "crema",
    logo: "/images/yes24-logo.png",
  },
  {
    id: "kyobo",
    name: "교보eBook",
    symbol: "K",
    logo: "/images/kyoboEbook-logo.png",
  },
  {
    id: "willa",
    name: "윌라",
    symbol: "윌라",
    logo: "/images/willa-logo.png",
  },
  {
    id: "goyo",
    name: "고요",
    symbol: "◆",
    logo: "/images/goyo-logo.png",
  },
];

const comparisonRows = [
  {
    title: "직관적인 심볼",
    emphasized: true,
    values: ["×", "×", "×", "×", "×", "○"],
  },
  {
    title: "플로우리스트 제작",
    emphasized: true,
    values: ["×", "×", "×", "×", "×", "○"],
  },
  {
    title: "필기 기능",
    emphasized: false,
    values: ["○", "×", "○", "○", "○", "○"],
  },
  {
    title: "리딩 서비스",
    emphasized: false,
    values: ["○", "○", "○", "○", "○", "○"],
  },
  {
    title: "관심사 분석",
    emphasized: true,
    values: ["×", "×", "×", "×", "×", "○"],
  },
  {
    title: "SNS 공유",
    emphasized: false,
    values: ["○", "○", "×", "×", "○", "○"],
  },
];

const positioningItems = [
  {
    id: "ridi",
    name: "리디북스",
    symbol: "R",
    logo: "/images/readybooks-logo.png",
    x: 29,
    y: 42,
  },
  {
    id: "millie",
    name: "밀리의 서재",
    symbol: "M",
    logo: "/images/milliy-logo.png",
    x: 43,
    y: 34,
  },
  {
    id: "yes24",
    name: "예스24",
    symbol: "crema",
    logo: "/images/yes24-logo.png",
    x: 45,
    y: 60,
  },
  {
    id: "kyobo",
    name: "교보eBook",
    symbol: "K",
    logo: "/images/kyoboEbook-logo.png",
    x: 37,
    y: 74,
  },
  {
    id: "willa",
    name: "윌라",
    symbol: "윌라",
    logo: "/images/willa-logo.png",
    x: 68,
    y: 57,
  },
  {
    id: "goyo",
    name: "고요",
    symbol: "◆",
    logo: "/images/goyo-logo.png",
    x: 75,
    y: 24,
  },
];

function Goyo() {
  return (
    <main className="goyo-page">
      <section className="goyo-intro">

      </section>

      <section className="goyo-overview">
        <div className="goyo-page-title-01">
          <p>Overview</p>
        </div>
        <h1 className="goyo-intro-header">
          늘 같은 방법으로 지루한 책 읽기,{" "}
          <span className="goyo-highlight">독서에도 새로운 길</span>&nbsp;&nbsp;이 필요해요
        </h1>
        <div className="goyo-intro-detail">
          <p>
            일반적으로 독서 하면, 시간을 내서 긴 글을 집중하여 읽어야하는 활동으로 떠오른다고 생각합니다. <br />
            이를 기반으로 현대인의 성향과 맞는 '쉽고 편리하게 독서를 할 수 있는 방법은 없을까' 고민하게 되었고, <br /><br />
            그래서 저는 짧지만 생각의 범위가 넓은 시집을 중심으로 색다른 방식의 독서의 길을 열고자 합니다.
          </p>
        </div>
        <div className="goyo-quote-area">
          <div className="goyo-quote goyo-quote-text goyo-intro-quote01">
            <p>언제 어디서든 편리하게 독서를 할 수 있었으면 좋겠는데</p>
          </div>

          <div className="goyo-quote goyo-quote-text goyo-intro-quote02">
            <p>
              책을 깊게 이해하기 위해선 필기가 필순데.. 이것 저것 챙기기 번거로워
            </p>
          </div>

          <div className="goyo-quote goyo-quote-text goyo-intro-quote03">
            <p>책은 길어서 시간 내어 읽기에 부담이 돼.. 방법이 없을까</p>
          </div>

          <div className="goyo-quote goyo-quote-text goyo-intro-quote04">
            <p>친구들 사이에서 시집이 유행이던데 나도 한번 읽어볼까?</p>
          </div>

          <div className="goyo-quote goyo-quote-text goyo-intro-quote05">
            <p>책을 읽는 것이 중요한데...</p>
          </div>

          <div
            className="goyo-quote goyo-quote-deco goyo-intro-quote06"
            aria-hidden="true"
          />

          <div
            className="goyo-quote goyo-quote-deco goyo-intro-quote07"
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="goyo-target">
        <div className="goyo-title-02">
          <h1>Target Analysis</h1>
        </div>
        <div className="goyo-target-detail">
          <p>타겟 유저층의 특성을 파악했어요.</p>
        </div>
        <div className="goyo-analysis">
          <div className="goyo-analysis-01">
            <div className="goyo-analysis-num">
              <p className="num">01</p>
              <p className="title">MZ세대는 짧은 글을 선호하는 경향이 있고</p>
            </div>
            <div className="goyo-analysis-detail">
              전문가들은 <span className="goyo-analysis-detail-highlight">시 장르가 젊은 세대가 선호하는 짧은 글</span>인데다가 읽기
              쉬운 서정시는 MZ세대의 감정을 위로하는 역할을 하기 때문에 인기를
              끄는 것으로 보고 있다.
            </div>
            <div className="goyo-analysis-detail-from">
              <p>(기사) “그런걸 누가 봐요” 하던 2030…요즘 꽂힌 ‘○스타그램’ 뭐길래</p>
            </div>
          </div>

          <div className="goyo-analysis-02">
            <div className="goyo-analysis-num">
              <p className="num">02</p>
              <p className="title">직관적인 이해와 자의적인 해석을 원하며</p>
            </div>
            <div className="goyo-analysis-detail">
              출판업계에서 <span className="goyo-analysis-detail-highlight"> “시는 MZ세대에게 활자로 된 ‘숏폼’”</span>이라며 “비교적 짧
              은 호흡으로 읽을 수 있을 뿐만 아니라 <span className="goyo-analysis-detail-highlight"> 직관적인 이해와 자의적인 해석</span>
              이 가능해 호응을 얻는다”고 분석했다.
            </div>
            <div className="goyo-analysis-detail-from">
              <p>(기사) '숏폼' 같은 詩에 빠진 2030</p>
            </div>
          </div>

          <div className="goyo-analysis-03">
            <div className="goyo-analysis-num">
              <p className="num">03</p>
              <p className="title">언제 어디서든 편하게 할 수 있는 독서를 선호함</p>
            </div>
            <div className="goyo-analysis-detail">
              20대는 전자책 이용자가 늘면서 타 연령에 비해 독서율이 높은 수치로
              나타나 눈길을 끌고 있다. ∙∙∙ <span className="goyo-analysis-detail-highlight">"전자책은 언제 어디서든 편하게 읽을 수
              있어 선호하고,</span>인데다가 읽기 ∙∙∙
            </div>
            <div className="goyo-analysis-detail-from">
              <p>(기사) 유독 높은 20대 독서율, 이유는</p>
            </div>
          </div>
        </div>

        <div className="goyo-target-next">
          <h1 className="goyo-target-next-title">
            Insight
          </h1>
          <p className="goyo-target-next-detail">
            시집을 직관적으로 나타낸 독서 앱을 통해<br />
            언제 어디서든 독서가 가능하도록 하자
          </p>
        </div>
      </section>

      <section className="goyo-fieldResearch">
        <div className="goyo-fieldResearch-inner">
          <div className="goyo-fieldResearch-heading">
            <div className="goyo-title-02">
              <h1>Field Research</h1>
            </div>

            <div className="goyo-fieldResearch-detail">
              <p>
                다양한 온라인 독서 서비스를 분석하여,
                <br />
                고요의 타깃시장 안 목표 지점을 설정했습니다.
              </p>
            </div>
          </div>

          <div className="goyo-fieldResearch-content">
            <article className="goyo-research-panel goyo-competitor-panel">
              <h3 className="goyo-research-panel-title">
                Competitor Analysis
              </h3>

              <div className="goyo-research-card goyo-competitor-card">
                <div className="goyo-competitor-table-wrap">
                  <table className="goyo-competitor-table">
                    <thead>
                      <tr>
                        <th className="goyo-feature-heading">
                          기능/서비스
                        </th>

                        {competitors.map((competitor) => (
                          <th
                            key={competitor.id}
                            className={
                              competitor.id === "goyo"
                                ? "goyo-competitor-heading is-goyo"
                                : "goyo-competitor-heading"
                            }
                          >
                            <div
                              className={`goyo-text-logo ${competitor.id}`}
                            >
                              <img
                                src={competitor.logo}
                                alt={`${competitor.name} 로고`}
                              />
                            </div>

                            <span>{competitor.name}</span>
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.title}>
                          <th
                            className={
                              row.emphasized
                                ? "goyo-feature-name is-emphasized"
                                : "goyo-feature-name"
                            }
                          >
                            {row.title}
                          </th>

                          {row.values.map((value, index) => (
                            <td
                              key={`${row.title}-${competitors[index].id}`}
                              className={[
                                value === "○"
                                  ? "is-circle"
                                  : "is-cross",
                                competitors[index].id === "goyo"
                                  ? "is-goyo"
                                  : "",
                              ]
                                .filter(Boolean)
                                .join(" ")}
                            >
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            <article className="goyo-research-panel goyo-positioning-panel">
              <h3 className="goyo-research-panel-title">
                Positioning Map
              </h3>

              <div className="goyo-research-card goyo-positioning-card">
                <div className="goyo-position-map">
                  <span className="goyo-map-label goyo-map-label-top">
                    편리성 높음
                  </span>

                  <span className="goyo-map-label goyo-map-label-bottom">
                    편리성 낮음
                  </span>

                  <span className="goyo-map-label goyo-map-label-left">
                    자유도 낮음
                  </span>

                  <span className="goyo-map-label goyo-map-label-right">
                    자유도 높음
                  </span>

                  <span className="goyo-map-axis goyo-map-axis-horizontal" />
                  <span className="goyo-map-axis goyo-map-axis-vertical" />

                  <span className="goyo-map-circle goyo-map-circle01" />
                  <span className="goyo-map-circle goyo-map-circle02" />
                  <span className="goyo-map-circle goyo-map-circle03" />

                  {positioningItems.map((item) => (
                    <div
                      key={item.id}
                      className={
                        item.id === "goyo"
                          ? "goyo-map-item is-goyo"
                          : "goyo-map-item"
                      }
                      style={{
                        left: `${item.x}%`,
                        top: `${item.y}%`,
                      }}
                    >
                      <div
                        className={`goyo-map-logo ${item.id}`}
                      >
                        <img
                          src={item.logo}
                          alt={`${item.name} 로고`}
                        />
                      </div>

                      <span className="goyo-map-item-name">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="goyo-persona01">
        <div className="goyo-persona01-inner">
          <div className="goyo-persona01-heading">
            <div className="goyo-title-02"><h1>Persona</h1></div>
            <p>유저 리서치를 바탕으로 퍼소나를 설정했습니다.</p>
          </div>

          <div className="goyo-persona01-content">
            <article className="goyo-persona-profile">
              <img className="goyo-persona-photo" src="/images/persona1.png" alt="이수빈 페르소나"/>
              <div className="goyo-persona-profile-top">
                <div className="goyo-persona-name"><strong>이수빈</strong><span>대학생 24세</span></div>
                <div className="goyo-persona-tags"><span>#감성적</span><span>#효율적</span><span>#소극적</span></div>
              </div>

              <div className="goyo-persona-profile-bottom">
                <section className="goyo-persona-story">
                  <h3>User Story</h3>
                  <p>독서는 시간을 내야만 즐길 수 있는 취미라 생각해 부담스러운 취미로 느껴져서 책과의 거리가 점차 멀어지고 있다. 그러나 시를 읽을 때는 분석부터 해야 한다는 어려움 때문에 더욱 부담을 느낀다.</p>
                </section>

                <div className="goyo-persona-points">
                  <section><h3>Pain Point</h3><ul><li>부담되지 않는 독서</li><li>어렵게 다가오는 시집</li><li>감상문 기록의 어려움</li></ul></section>
                  <section><h3>Needs</h3><ul><li>직관적인 기능</li><li>시집 재구성 기능</li><li>감상문 작성 기능</li></ul></section>
                </div>

                <section className="goyo-persona-personality">
                  <h3>Personality</h3>
                  <div className="goyo-personality-row"><span>모바일 사용 스킬</span><i style={{ "--value": "88%" }} /></div>
                  <div className="goyo-personality-row"><span>평소 독서량</span><i style={{ "--value": "30%" }} /></div>
                  <div className="goyo-personality-row"><span>독서 관심도</span><i style={{ "--value": "52%" }} /></div>
                </section>
              </div>
            </article>

            <article className="goyo-persona-journey">
              <h2>“독서가 부담이 되지 않았으면 좋겠어요”</h2>

              <div className="goyo-journey-stage-row">
                <span className="goyo-journey-side-title">STAGE</span>
                <div className="goyo-journey-stage">새로운 방법 모색</div>
                <div className="goyo-journey-stage">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스 탐색</div>
                <div className="goyo-journey-stage">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스 검색</div>
                <div className="goyo-journey-stage">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스 이용</div>
                <div className="goyo-journey-stage">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스 종료 후</div>
              </div>

              <div className="goyo-journey-text-row">
                <span className="goyo-journey-side-title">ACTIVITY</span>
                <p>부담이 되지 않는 독서를 시작해보고자 함</p>
                <p>자신이 처한 상황을 잘 대처할 수 있는 서비스를 찾기 시작함</p>
                <p>시집으로 이루어진 <br /> E-book을 발견</p>
                <p>독서를 자주 하지 않는 사람도 접근하기 쉬운 방식의 시집 구성을 접함</p>
                <p>독서가 끝난 후의 활동</p>
              </div>

              <div className="goyo-journey-feeling">
                <span className="goyo-journey-side-title">THINKING<br />FEELING</span>
                <div className="goyo-feeling-chart">
                  <svg viewBox="0 0 1000 250" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="goyoFeelingFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#56c6c1" stopOpacity="0.38" />
                        <stop offset="100%" stopColor="#56c6c1" stopOpacity="0.04" />
                      </linearGradient>
                    </defs>
                    <polygon points="0,195 200,195 400,130 600,130 800,55 1000,55 1000,250 0,250" fill="url(#goyoFeelingFill)" />
                    <polyline points="0,195 200,195 400,130 600,130 800,55 1000,55" fill="none" stroke="#16b8b2" strokeWidth="5" />
                  </svg>

                  <div className="goyo-feeling-point point01"><span>독서가 일상 속에서 부담이 되지 않았으면 좋겠어</span><b>☹️</b></div>
                  <div className="goyo-feeling-point point02"><span>E-book을 사용하면 <br /> 간단히 읽기 좋겠다</span><b>☹️</b></div>
                  <div className="goyo-feeling-point point03"><span>시는 이해하기 어려운 <br /> 문학이 아닐까?</span><b>😐</b></div>
                  <div className="goyo-feeling-point point04"><span>직관적인 설명으로 <br /> 이해하기 쉬워</span><b>🙂</b></div>
                  <div className="goyo-feeling-point point05"><span>독서 후 감상문 작성까지 마칠 수 있었어</span><b>😆</b></div>
                </div>
              </div>

              <div className="goyo-journey-text-row goyo-journey-needs">
                <span className="goyo-journey-side-title">NEEDS</span>
                <p>독서는 시간을 내야 하는 취미라 부담이 됨</p>
                <p>간단히 즐길 수 있는 독서</p>
                <p>어려운 문학으로 느껴지는 시집</p>
                <p>짧은 시간 안에 감상문도 함께 작성하고 싶음</p>
                <p>독서에 흥미를 붙이고 더 깊이 있는 독서가 가능해짐</p>
              </div>

              <div className="goyo-journey-text-row goyo-journey-opportunity">
                <span className="goyo-journey-side-title">OPPOR-<br />TUNITY</span>
                <p>독서를 시작하려 하지만 부담스러움</p>
                <p>비교적 짧은 문학인 시를 이용한 독서 플랫폼</p>
                <p>시의 흐름을 직관적으로 나타내어 이해를 도움</p>
                <p>시집 재구성 기능과 간단한 감상문 작성 기능</p>
                <p>독서에 흥미를 가지는 데 도움을 주게 됨</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="goyo-persona02">
        <div className="goyo-persona01-inner">
          <div className="goyo-persona01-heading">
            <div className="goyo-title-02">
              <h1>Persona</h1>
            </div>
            <p>유저 리서치를 바탕으로 퍼소나를 설정했습니다.</p>
          </div>

          <div className="goyo-persona01-content">
            <article className="goyo-persona-profile goyo-persona-profile02">
              <img className="goyo-persona-photo" src="/images/persona2.png" alt="최민정 페르소나"/>
              <div className="goyo-persona-profile-top">
                <div className="goyo-persona-name">
                  <strong>최민정</strong>
                  <span>회사원 32세</span>
                </div>

                <div className="goyo-persona-tags">
                  <span>#현실적</span>
                  <span>#실용적</span>
                  <span>#독립적</span>
                </div>
              </div>

              <div className="goyo-persona-profile-bottom">
                <section className="goyo-persona-story">
                  <h3>User Story</h3>
                  <p>
                    출퇴근 때 매번 시청할 영상도 마땅하지 않고, 이동 시간에 딱 맞는
                    영상도 없으며 숏폼 영상이 지루해지기 시작했다. E-book을 활용해도
                    원하는 책을 빠르게 고르는 것이 어려울 뿐더러 긴 글을 이동 시간
                    내에 쭉 집중해서 읽는 것도 어려웠다.
                  </p>
                </section>

                <div className="goyo-persona-points">
                  <section>
                    <h3>Pain Point</h3>
                    <ul>
                      <li>함께하는 독서</li>
                      <li>간단한 독서 활동</li>
                      <li>모호한 시 장르</li>
                    </ul>
                  </section>

                  <section>
                    <h3>Needs</h3>
                    <ul>
                      <li>SNS 공유 기능</li>
                      <li>시 낭독 기능</li>
                      <li>시 카테고리 기능</li>
                    </ul>
                  </section>
                </div>

                <section className="goyo-persona-personality">
                  <h3>Personality</h3>

                  <div className="goyo-personality-row">
                    <span>모바일 사용 스킬</span>
                    <i style={{ "--value": "78%" }} />
                  </div>

                  <div className="goyo-personality-row">
                    <span>평소 독서량</span>
                    <i style={{ "--value": "62%" }} />
                  </div>

                  <div className="goyo-personality-row">
                    <span>독서 관심도</span>
                    <i style={{ "--value": "92%" }} />
                  </div>
                </section>
              </div>
            </article>

            <article className="goyo-persona-journey goyo-persona-journey02">
              <h2>“어디서든 가능한 독서를 하고싶어요”</h2>

              <div className="goyo-journey-stage-row">
                <span className="goyo-journey-side-title">STAGE</span>

                <div className="goyo-journey-stage">
                  <span>새로운 방법 모색</span>
                </div>
                <div className="goyo-journey-stage">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스 탐색</span>
                </div>
                <div className="goyo-journey-stage">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스 검색</span>
                </div>
                <div className="goyo-journey-stage">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스 이용</span>
                </div>
                <div className="goyo-journey-stage">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스 종료 후</span>
                </div>
              </div>

              <div className="goyo-journey-text-row">
                <span className="goyo-journey-side-title">ACTIVITY</span>
                <p>어디서든 가능한 독서를 시작해보고자 함</p>
                <p>자신이 처한 상황을 잘 대처할 수 있는 E-book 서비스를 찾기 시작함</p>
                <p>시집으로 이루어진 <br /> E-book을 발견</p>
                <p>사용이 편리한 방식의 시집 구성을 접하게 됨</p>
                <p>독서가 끝난 후의 활동</p>
              </div>

              <div className="goyo-journey-feeling">
                <span className="goyo-journey-side-title">
                  THINKING
                  <br />
                  FEELING
                </span>

                <div className="goyo-feeling-chart">
                  <svg viewBox="0 0 1000 250" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="goyoFeelingFill02" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#56c6c1" stopOpacity="0.38" />
                        <stop offset="100%" stopColor="#56c6c1" stopOpacity="0.04" />
                      </linearGradient>
                    </defs>

                    <polygon
                      points="0,105 200,105 400,180 600,180 800,45 1000,45 1000,250 0,250"
                      fill="url(#goyoFeelingFill02)"
                    />

                    <polyline
                      points="0,105 200,105 400,180 600,180 800,45 1000,45"
                      fill="none"
                      stroke="#16b8b2"
                      strokeWidth="5"
                    />
                  </svg>

                  <div className="goyo-feeling-point point01">
                    <span>언제 어디서든 가능한 <br /> 독서를 하고 싶어</span>
                    <b>😐</b>
                  </div>

                  <div className="goyo-feeling-point point02">
                    <span>E-book을 활용해도 원하는 책을 빠르게 고르기 어렵지 않을까?</span>
                    <b>☹️</b>
                  </div>

                  <div className="goyo-feeling-point point03">
                    <span>시는 짧으니까 출퇴근 시간에 간단히 읽기 <br /> 좋을 것 같아</span>
                    <b>☹️</b>
                  </div>

                  <div className="goyo-feeling-point point04">
                    <span>다양한 카테고리로 시가 분류되어 골라 <br /> 읽기 수월했어</span>
                    <b>😆</b>
                  </div>

                  <div className="goyo-feeling-point point05">
                    <span>다른 사람들과 원하는 시나 시 구절을 공유할 수 있었어</span>
                    <b>😆</b>
                  </div>
                </div>
              </div>

              <div className="goyo-journey-text-row goyo-journey-needs">
                <span className="goyo-journey-side-title">NEEDS</span>
                <p>이동 시간에 쉽고 빠르게 할 수 있는 독서를 원함</p>
                <p>간단히 즐길 수 있는 독서</p>
                <p>원하는 분위기의 시를 빠르게 선택하고 싶음</p>
                <p>다양한 사람들과 시나 시 구절을 공유하고 싶음</p>
                <p>서비스에 만족하고 다른 사람들에게 소개하고 싶어짐</p>
              </div>

              <div className="goyo-journey-text-row goyo-journey-opportunity">
                <span className="goyo-journey-side-title">
                  OPPOR-
                  <br />
                  TUNITY
                </span>

                <p>독서를 시작하려 하지만 환경이 맞지 않음</p>
                <p>비교적 짧은 문학인 시를 이용한 독서 플랫폼을 만듦</p>
                <p>분위기에 따라 다양한 카테고리로 분류</p>
                <p>시 스크랩 기능과 시 구절 SNS 공유 기능</p>
                <p>언제 어디서든 간단한 독서가 가능해짐</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="goyo-userNeed">
        <div className="goyo-userNeed-inner">
          <div className="goyo-userNeed-heading">
            <div className="goyo-title-02"><h1>User Needs</h1></div>
            <p>리서치를 통해 고요의 핵심 기능을 도출했어요.</p>
          </div>

          <div className="goyo-userNeed-list">
            <article className="goyo-userNeed-item userNeed01">
              <div className="goyo-userNeed-request">
                <p>내가 원하는 시들만<br />모아서 보고 싶어요</p>
              </div>
              <div className="goyo-userNeed-connector"><span /></div>
              <div className="goyo-userNeed-solution">
                <img className="goyo-userNeed-icon" src = "/images/folderIcon.png"></img>
                <p><strong>플레이리스트 기능</strong>을<br />이용한 시집 재구성 기능</p>
              </div>
            </article>

            <article className="goyo-userNeed-item userNeed02">
              <div className="goyo-userNeed-request">
                <p>시에 더 쉽게 접근할 수<br />있길 바라요</p>
              </div>
              <div className="goyo-userNeed-connector"><span /></div>
              <div className="goyo-userNeed-solution">
                <img className="goyo-userNeed-icon" src = "/images/loopIcon.png"></img>
                <p><strong>산 메타포</strong>를 이용하여 시를<br />직관적으로 나타낸 기능</p>
              </div>
            </article>

            <article className="goyo-userNeed-item userNeed03">
              <div className="goyo-userNeed-request">
                <p>다른 사람들과도 함께하는<br />독서를 하고 싶어요</p>
              </div>
              <div className="goyo-userNeed-connector"><span /></div>
              <div className="goyo-userNeed-solution">
                <img className="goyo-userNeed-icon" src = "/images/snsIcon.png"></img>
                <p>시 구절을 스크랩하여<br /><strong>SNS에 공유</strong>할 수 있는 기능</p>
              </div>
            </article>
          </div>
        </div>
      </section>


      <section className="goyo-serviceDesign">
        <div className="goyo-serviceDesign-inner">

          <div className="goyo-serviceDesign-heading">
            <div className="goyo-title-02">
              <h1>Service Design</h1>
            </div>

            <p>
              고요는 산 위에 서서 마음을 다스리고 감정을 되새기는 시의 공간이라는 의미를 담고 있습니다.
              <br />
              색다른 독서를 경험하고자 하는 사용자를 위한 시집을 재구성하고 나만의 시집을 만들 수 있어요.
            </p>
          </div>

          <div className="goyo-serviceDesign-content">

            <div className="goyo-serviceDesign-left">

              <div className="goyo-brand-row">

                <article className="goyo-brand-block goyo-iconGrid-block">
                  <h3>ICON GRID</h3>

                  <div className="goyo-iconGrid-box">
                    <img
                      className="goyo-iconGrid-img"
                      src="/images/goyoIconGrid.png"
                      alt="고요 아이콘 그리드"
                    />
                  </div>
                </article>

                <article className="goyo-brand-block goyo-appIcon-block">
                  <h3>APP ICON</h3>

                  <div className="goyo-appIcon-box">
                    <img
                      className="goyo-appIcon-img"
                      src="/images/goyoAppIcon.png"
                      alt="고요 앱 아이콘"
                    />
                  </div>
                </article>

                <article className="goyo-brand-block goyo-logoConcept-block">
                  <h3>LOGO CONCEPT</h3>

                  <div className="goyo-logoConcept">

                    <div className="goyo-logoFormula">

                      <div className="goyo-formula-item">
                        <img
                          src="/images/goyoLogoConceptFolder.png"
                          alt="Folder"
                        />
                        <span>Folder</span>
                      </div>

                      <b>+</b>

                      <div className="goyo-formula-item">
                        <img
                          src="/images/goyoLogoConceptMountain.png"
                          alt="Mountain"
                        />
                        <span>Mountain</span>
                      </div>

                      <b>=</b>

                      <div className="goyo-formula-result">
                        <img
                          src="/images/goyoLogoConceptIcon.png"
                          alt="고요 로고"
                        />
                      </div>

                    </div>

                    <p>
                      폴더와 산을 결합한 형상으로,
                      <br />
                      고요만의 정체성을 로고에 담아냈습니다.
                    </p>
                  </div>
                </article>

              </div>

              <article className="goyo-color-block">
                <h3>COLOR</h3>

                <div className="goyo-mainColors">
                  <img
                    src="/images/goyoColorSetMain.png"
                    alt="고요 메인 컬러"
                  />
                  <span>MAIN</span>
                </div>

                <div className="goyo-grayColors">
                  <img
                    src="/images/goyoColorSetBlack.png"
                    alt="고요 그레이 컬러"
                  />
                </div>
              </article>

            </div>

            <aside className="goyo-graphics">
              <h3>GRAPHICS</h3>

              <div className="goyo-graphics-grid">

                <article className="goyo-graphic-card">
                  <img
                    className="goyo-graphic-image"
                    src="/images/goyoGraphicsGurung.png"
                    alt="구릉 그래픽"
                  />
                  <h4>구릉</h4>
                  <p>감정이 다양한 시</p>
                </article>

                <article className="goyo-graphic-card">
                  <img
                    className="goyo-graphic-image"
                    src="/images/goyoGraphicsGowon.png"
                    alt="고원 그래픽"
                  />
                  <h4>고원</h4>
                  <p>감정이 고조된 시</p>
                </article>

                <article className="goyo-graphic-card">
                  <img
                    className="goyo-graphic-image"
                    src="/images/goyoGraphicsPyungwon.png"
                    alt="평원 그래픽"
                  />
                  <h4>평원</h4>
                  <p>감정이 안정된 시</p>
                </article>

                <article className="goyo-graphic-card">
                  <img
                    className="goyo-graphic-image"
                    src="/images/goyoGraphicsGosan.png"
                    alt="고산 그래픽"
                  />
                  <h4>고산</h4>
                  <p>급격한 변화가 있는 시</p>
                </article>

              </div>
            </aside>

          </div>
        </div>
      </section>

      <section className="goyo-appDesign">
        <img src="/images/goyoAppDesign01.png" alt="고요 앱 디자인" />
        <img src="/images/goyoAppDesign02.png" alt="고요 앱 디자인" />
        <img src="/images/goyoAppDesign03.png" alt="고요 앱 디자인" />
      </section>

      <section className="goyo-home">
        <div className="goyo-Home-inner">
          <div className="goyo-title-02">
            <h1>Home</h1>
          </div>
          <div className="goyo-home-detail">
            <h1>책장에 꽂힌 책들을 스와이프 해, 하나씩 내용을 확인해 보세요</h1>
            <p>책장에서 책을 고를 때 하나씩 넘겨보며 원하는 책을 고르 듯이 고요에서는 전자책과는 다른, 종이책만의 감성을 담았습니다.</p>
          </div>
          <img className="goyo-home-image goyo-home-image01" src="/images/goyoDetailImage/goyoHomeImage01.png" alt="고요의 능선 찾기 화면"/>
        <img
          className="goyo-home-image goyo-home-image02"
          src="/images/goyoDetailImage/goyoHomeImage02.png"
          alt="고요 홈 화면"
        />
        <img
          className="goyo-home-image goyo-home-image03"
          src="/images/goyoDetailImage/goyoHomeImage03.png"
          alt="고요 시 상세 화면"
        />
        </div>
        
      </section>

      <section className="goyo-archive">

      </section>

      <section className="goyo-coustomize">

      </section>

      <section className="goyo-favorites">

      </section>

      <section className="goyo-flowlist">

      </section>

      <section className="goyo-award">

      </section>
    </main>
  );
}

export default Goyo;