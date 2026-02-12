import React, { useState } from 'react'
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

  const goToWelcome = () => setPage('welcome');
  const goToProfessional = () => setPage('professional');
  const goToExp = () => setPage('exp');
  const goToProject = () => setPage('project');
  const goToBeta = () => setPage('beta');
  const goToHome = () => setPage('home');
  const goToMaterials = () => setPage('materials');

  return (
    <div className="App">
      {page === 'home' && <Home onBeta={goToBeta}  onMaterials={goToMaterials} />}
      {page === 'welcome' && <Welcome onBeta={goToBeta} onMaterials={goToMaterials} onNext={goToProfessional} onHome={goToHome} formData={formData} updateFormData={updateFormData} />}
      {page === 'professional' && <Professional onBeta={goToBeta} onMaterials={goToMaterials} onNext={goToExp} onHome={goToHome} formData={formData} updateFormData={updateFormData} />}
      {page === 'exp' && <Exp onBeta={goToBeta} onMaterials={goToMaterials} onNext={goToProject} onHome={goToHome} formData={formData} updateFormData={updateFormData} />}
      {page === 'project' && <Project onBeta={goToBeta} onMaterials={goToMaterials} onHome={goToHome} formData={formData} />}
      {page === 'beta' && <Beta onHome={goToHome} onBeta={goToBeta} onMaterials={goToMaterials} onJoinBeta={goToMaterials} />}
      {page === 'materials' && <Material onHome={goToHome} onBeta={goToBeta} onMaterials={goToMaterials} onJoinBeta={goToWelcome} />}
    </div>
  )
}

export default App
