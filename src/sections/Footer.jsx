import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
      <div className="max-w-[700px] mx-auto px-4 text-center text-sm text-muted">
        <div className="flex justify-center gap-4 mb-2">
          <a
            href="https://github.com/createdbyamir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-icon" />
          </a>
          <a
            href="https://linkedin.com/in/createdbyamir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
          </a>
          <a
            href="mailto:info@createdbyamir.com"
            className="hover:text-accent transition"
          >
            <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
          </a>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Created By Amir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
