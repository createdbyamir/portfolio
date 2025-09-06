import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
      <div className="max-w-[700px] mx-auto px-4 text-center  text-muted">
        <p className='mb-3 text-lg'>Interested in working together? Let’s connect!</p>
        <div className="flex justify-center gap-4 mb-2">
          <a
            href="https://github.com/createdbyamir"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 hover:text-accent transition"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-icon" />
          </a>
          <a
            href="https://linkedin.com/in/createdbyamir"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 hover:text-accent transition"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
          </a>
          <a
            href="mailto:info@createdbyamir.com"
            className="opacity-80 hover:opacity-100 hover:text-accent transition"
          >
            <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
          </a>
        </div>
        <p className="text-sm text-muted opacity-60">
          © {new Date().getFullYear()} Created By Amir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
