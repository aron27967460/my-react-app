
import React, { useState } from 'react';
import './App.css';

/* Loading different components */
import Masthead from './navigation/masthead';
import Footer from './navigation/footer';
import VerticalNav from './navigation/ver-nav';
import Header from './main/header';
import MainContentModule from './main/main-content-module';
// import Row from './columns/row';
import TextRow from './main/text-block';
import Scrim from './main/scrim';

/* Different content page */
/* General Section */
import ContentIntroduction from './content/general/introduction';
import ContentWhoUsesAnchor from './content/general/who-uses-anchor';
import ContentTokens from './content/general/tokens';

/* Component Section */
import ContentComponent from './content/components/overview';
import ContentButtons from './content/components/buttons';
import ContentCards from './content/components/cards';
import ContentCheckboxes from './content/components/checkboxes';
import ContentChips from './content/components/chips';
import ContentDialogs from './content/components/dialogs';
import ContentDropdowns from './content/components/dropdowns';
import ContentLists from './content/components/lists';
import ContentRadioButtons from './content/components/radio-buttons';
import ContentSwitches from './content/components/switches';
import ContentTabs from './content/components/tabs';
import ContentTextFields from './content/components/textfields';
//As more content being writtern, more pages will be imported to keep App.js clean

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    return window.location.hash?.replace('#', '') || 'introduction';
  });
  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return <ContentIntroduction />;

      /* Anchor for Who section */
      case 'whose-anchor-for':
        return <ContentWhoUsesAnchor />;

      /* Token section */
      case 'tokens':
        return <ContentTokens />;

      /* Component Overview */
      case 'overview':
        return <ContentComponent setActiveSection={setActiveSection} />;

      /* Buttons section */
      case 'buttons':
        return <ContentButtons />;

      /* Card section */
      case 'cards':
        return <ContentCards />;

      /* Checkbox section */
      case 'checkboxes':
        return <ContentCheckboxes />;

      /* Chip section */
      case 'chips':
        return <ContentChips  />;

      /* Content Pairing section */
      case 'content-pairing':
        return (
          <>
            <Header tag="h1" textStyle="display-med">Content Pairing</Header>
            <TextRow textStyle="title-large" colorStyle="default">Coming soon...</TextRow>
          </>
        );

      /* Dialog section */
      case 'dialogs':
        return <ContentDialogs />;

      /* Directories section */
      case 'directories':
        return (
          <>
            <Header tag="h1" textStyle="display-med">Directories</Header>
            <TextRow textStyle="title-large" colorStyle="default">Coming soon...</TextRow>
          </>
        );

      /* Dropdown section */
      case 'dropdowns':
        return <ContentDropdowns  />;

      /* List section */
      case 'lists':
        return <ContentLists  />;

      /* Menu section */
      case 'menu':
        return (
          <>
            <Header tag="h1" textStyle="display-med">Menu</Header>
            <TextRow textStyle="title-large" colorStyle="default">Coming soon...</TextRow>
          </>
        );

      /* Navigation section */
      case 'navigation':
        return (
          <>
            <Header tag="h1" textStyle="display-med">Navigation</Header>
            <TextRow textStyle="title-large" colorStyle="default">Coming soon...</TextRow>
          </>
        );

      /* Radio Button section */
      case 'radio-buttons':
        return <ContentRadioButtons />;

      /* Sheet section */
      case 'sheets':
      return (
        <>
          <Header tag="h1" textStyle="display-med">Sheets</Header>
          <TextRow textStyle="title-large" colorStyle="default">Coming soon...</TextRow>
        </>
      );

      /* Switch section */
      case 'switches':
        return <ContentSwitches />;

      /* Tab section */
      case 'tabs':
        return <ContentTabs />;

      /* Tables section */
      case 'tables':
        return (
          <>
            <Header tag="h1" textStyle="display-med">Tables</Header>
            <TextRow textStyle="title-large" colorStyle="default">Coming soon...</TextRow>
          </>
        );

      /* Text Field section */
      case 'text-fields':
        return <ContentTextFields />;

      default:
        return (
          <Header tag="h1" textStyle="display-med">Coming soon...</Header>
        );
    }
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

  const closeNav = () => {
  setIsNavOpen(false);
  };

  return (
    <div className="App">
      <Masthead onToggleMenu={toggleNav} />
      <VerticalNav activeSection={activeSection} onNavigate={setActiveSection} isOpen={isNavOpen} closeNav={closeNav}/>
      <Scrim isVisible={isNavOpen} onClick={toggleNav}/ >
        <MainContentModule>
          {renderContent()}
          <Footer />
        </MainContentModule>
    </div>
  );
}

export default App;
