import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Welcome from './components/Welcome'
import Professional from './components/Professional'
import Exp from './components/Exp'
import Project from './components/project'
import Beta from './components/Beta'
import Material from './components/Material'

function App() {
  const [page, setPage] = useState('home');
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    address: '',
    pincode: '',
    mobile: '',
    brandName: '',
    serviceCategory: '',
    experience: '',
    location: '',
    aboutYou: '',
    projectsCompleted: '',
    manageAtTime: '',
    projectScale: '',
    averageDuration: '',
    teamStructure: ''
  });

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };
  // Sync state with URL hash for browser back/forward support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      // Map hash back to internal page names if needed
      if (['welcome', 'professional', 'exp', 'project', 'beta', 'home', 'materials'].includes(hash)) {
        setPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const goToWelcome = () => window.location.hash = 'welcome';
  const goToProfessional = () => window.location.hash = 'professional';
  const goToExp = () => window.location.hash = 'exp';
  const goToProject = () => window.location.hash = 'project';
  const goToBeta = () => window.location.hash = 'beta';
  const goToHome = () => window.location.hash = 'home';
  const goToMaterials = () => window.location.hash = 'materials';

  return (
    <div className="App">
      {page === 'home' && <Home onBeta={goToBeta} onMaterials={goToMaterials} onJoinBeta={goToWelcome} />}
      {page === 'welcome' && <Welcome onBeta={goToBeta} onMaterials={goToMaterials} onNext={goToProfessional} onHome={goToHome} formData={formData} updateFormData={updateFormData} />}
      {page === 'professional' && <Professional onBeta={goToBeta} onMaterials={goToMaterials} onNext={goToExp} onHome={goToHome} formData={formData} updateFormData={updateFormData} />}
      {page === 'exp' && <Exp onBeta={goToBeta} onMaterials={goToMaterials} onNext={goToProject} onHome={goToHome} formData={formData} updateFormData={updateFormData} />}
      {page === 'project' && <Project onBeta={goToBeta} onMaterials={goToMaterials} onHome={goToHome} formData={formData} />}
      {page === 'beta' && <Beta onHome={goToHome} onBeta={goToBeta} onMaterials={goToMaterials} onJoinBeta={goToWelcome} />}
      {page === 'materials' && <Material onHome={goToHome} onBeta={goToBeta} onMaterials={goToMaterials} onJoinBeta={goToWelcome} />}
    </div>
  )
}

export default App
