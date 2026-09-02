import '../Styles/works.css'

function Works() {
  return (
    <main className = "page-container">
      <h1>Works</h1>
      <section className = "works-layout">
        <article className="works-project-1">
          <div className="works-project-visual"><span className = "project-number">project 01</span><span className = "project-name">나를 마주하다</span>"비슷한 영혼은 멀리서도 알아보고 인사를 나눈다."</div>
          <div className="works-project-title">project01</div>
        </article>
        <article className="works-project-2">
          <div className="works-project-visual">02</div>
          <div className="works-project-title">project02</div>
        </article>
        <article className="works-project-3">
          <div className="works-project-visual">03</div>
          <div className="works-project-title">project03</div>
        </article>
        <article className="works-project-4">
          <div className="works-project-visual">04</div>
          <div className="works-project-title">project04</div>
        </article>
        <article className="works-project-5">
          <div className="works-project-visual">05</div>
          <div className="works-project-title">project05</div>
        </article>
      </section>
    </main>
  )
}

export default Works