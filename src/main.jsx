import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './sections/Header'
import Intro from './sections/Intro'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Intro />
    <ExperienceSection />
    <ProjectsSection />
    <Footer />
  </StrictMode>,
)
