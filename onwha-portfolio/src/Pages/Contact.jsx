import '../Styles/contact.css'

function Contact() {
  return (
    <main className="page-container contact-page">
      <h1>Contact</h1>

      <section className="contact-info">

        <div className="contact-item"><span>Mobile</span>010.6730.2585</div>

        <div className="contact-item">
          <span>Email</span><a href="judy1103@hanyang.ac.kr">judy1103@hanyang.ac.kr</a>
        </div>

        <div className="contact-item">
          <span>Instagram</span>
          <a
            href="https://www.instagram.com/ooonhwa_?igsh=MWsyb2d0ODNxc2diYg=="
            target="_blank"
            rel="noreferrer"
          >
            @ooonhwa_
          </a>
        </div>

        <div className="contact-item">
          <span>Link</span>
          <a
            href="https://notefolio.net/oonhwa"
            target="_blank"
            rel="noreferrer"
          >
          https://notefolio.net/oonhwa
          </a>
        </div>
      </section>
    </main>
  )
}

export default Contact