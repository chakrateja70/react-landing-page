import './index.css'

const Contact = () => (
  <div className="contact-container">
    <h1 className="contact-heading">Contact us</h1>

    <p>Feel free to reach out to us</p>

    <ul className="social-media-section">
      <li className="item">
        <a href="https://chat.whatsapp.com/CIG1F249G2a30OooPEkpC0">
          <img
            src="https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png"
            className="logo"
            alt="whatsapp-logo"
          />
        </a>
        Whatsapp
      </li>
      <li className="item">
        <a href="https://www.linkedin.com/company/the-pwn-experts-india/posts/?feedView=all">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hM-Oqitw2GhTwPQpfxvG-F-0xSgMO_l2vg&s"
            className="logo"
            alt="Linkedin-logo"
          />
        </a>
        linkedin
      </li>
      <li className="item">
        <a href="https://discord.com/invite/VBcYuHhqzj">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmber3nWqyb4o6MR4KFsVE7Ce9LqDmRCtCFg&s"
            className="logo"
            alt="Discrad-logo"
          />
        </a>
        Discard
      </li>
      <li className="item">
        <a href="https://github.com/thepwnexperts">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62HQkLx-ADmuPXiSm_EDBTLloKE6NZawG5w&s"
            className="logo"
            alt="Github-logo"
          />
        </a>
        GitHub
      </li>
    </ul>
  </div>
)

export default Contact
