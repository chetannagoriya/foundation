import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import AboutImpact from './components/AboutImpact';
import Stories from './components/Stories';
import MapReach from './components/MapReach';
import CallToAction from './components/CallToAction';
import ContactBar from './components/ContactBar';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

// Modals
import DonationModal from './components/DonationModal';
import VolunteerModal from './components/VolunteerModal';
import ReceiptModal from './components/ReceiptModal';
import StoryDetailModal from './components/StoryDetailModal';
import Toast from './components/Toast';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState('general');
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Handle URL changes (/about, /, and clean up any legacy #/about)
  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      // If user comes with #/about or #about, clean the URL to clean /about
      if (hash.includes('about')) {
        window.history.replaceState(null, '', '/about');
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (path === '/about' || path.startsWith('/about')) {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    return () => window.removeEventListener('popstate', handleLocation);
  }, []);

  const handleNavigate = (page) => {
    const targetPath = page === 'about' ? '/about' : '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDonate = (cause = 'general') => {
    setSelectedCause(cause);
    setDonateModalOpen(true);
  };

  const handleDonationSuccess = (data) => {
    setReceiptData(data);
    setToastMessage(`Thank you, ${data.donorName}! Your contribution has been recorded.`);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDonate={() => handleOpenDonate('general')}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'about' ? (
          <AboutPage
            onOpenDonate={() => handleOpenDonate('general')}
            onOpenVolunteer={() => setVolunteerModalOpen(true)}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : (
          <>
            {/* Hero Section: Building a better India, one life at a time */}
            <Hero onOpenDonate={() => handleOpenDonate('general')} />

            {/* 4 Pillars: Education, Health, Nutrition, Empowerment */}
            <Pillars onSelectPillar={(pillarId) => handleOpenDonate(pillarId)} />

            {/* What have we done with your help? */}
            <AboutImpact
              onOpenDonate={() => handleOpenDonate('general')}
              onOpenStory={() => {
                setSelectedStory({
                  title: 'Empowering Remote Classrooms Across Rural India',
                  category: 'Overview Impact',
                  childName: 'Our Students',
                  age: '6-14',
                  location: 'Multi-State Centers',
                  image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
                  summary: 'Celebso Foundation was started with a single learning shelter and has now grown to support over 52,000 children across 18 states in India.',
                  fullStory: 'Through community engagement, trained educators, and corporate social partnerships, we construct eco-friendly learning spaces, distribute learning tablets, provide hot protein-rich mid-day meals, and run pediatric medical vans.',
                  impactAchieved: '52,000+ children enrolled, 15,000+ daily meals served, 280+ health camps.',
                });
              }}
            />

            {/* Learn the stories of those we've already helped */}
            <Stories onSelectStory={(story) => setSelectedStory(story)} />

            {/* We are always where others need help (Stats & India Map) */}
            <MapReach />

            {/* Join our mission! Be the reason someone smiles today */}
            <CallToAction
              onOpenDonate={() => handleOpenDonate('general')}
              onOpenVolunteer={() => setVolunteerModalOpen(true)}
            />

            {/* Contact info & Social bar */}
            <ContactBar />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenDonate={() => handleOpenDonate('general')}
        onNavigate={handleNavigate}
      />

      {/* Interactive Modals */}
      <DonationModal
        isOpen={donateModalOpen}
        initialCause={selectedCause}
        onClose={() => setDonateModalOpen(false)}
        onSuccess={handleDonationSuccess}
      />

      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
        onShowToast={showToast}
      />

      <ReceiptModal
        isOpen={!!receiptData}
        donationData={receiptData}
        onClose={() => setReceiptData(null)}
      />

      <StoryDetailModal
        isOpen={!!selectedStory}
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        onOpenDonate={() => handleOpenDonate(selectedStory?.category?.toLowerCase() || 'general')}
      />

      {/* Toast */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      )}
    </div>
  );
}
