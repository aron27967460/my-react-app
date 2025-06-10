import React from 'react';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Row from '../../columns/row';
import Card from '../../cards/card';

const ContentComponent = ({ setActiveSection }) => {
  return (
    <>
    <Header tag="h1" textStyle="display-med">Overview</Header>
    <TextRow textStyle="title-large" colorStyle="default">Components are the foundational building blocks of the design system. By reusing components, we can create a consistent visual and functional experience across products.</TextRow>
    <Header tag="h2" textStyle="headline-med">Components</Header>
    <TextRow textStyle="body-large" colorStyle="default">You can browse the components here. As I continue to work on Anchor, more components will beome available.</TextRow>
    <Row gap="4x" itemsPerRow={4}>
      <Card label="Buttons" imgPreview="/assets/component-preview/button.png" navKey="buttons" onNavigate={setActiveSection}/>
      <Card label="Cards" imgPreview="/assets/component-preview/card.png" navKey="cards" onNavigate={setActiveSection}/>
      <Card label="Checkboxes" imgPreview="/assets/component-preview/checkbox.png" navKey="checkboxes" onNavigate={setActiveSection} />
      <Card label="Chips" imgPreview="/assets/component-preview/chip.png" navKey="chips" onNavigate={setActiveSection}/>
      <Card label="Dialogs" imgPreview="/assets/component-preview/dialog.png" navKey="dialogs" onNavigate={setActiveSection}/>
      <Card label="Dropdowns" imgPreview="/assets/component-preview/dropdown.png" navKey="dropdowns" onNavigate={setActiveSection}/>
      <Card label="Lists" imgPreview="/assets/component-preview/list.png" navKey="lists" onNavigate={setActiveSection}/>
      <Card label="Radio Buttons" imgPreview="/assets/component-preview/radio-button.png" navKey="radio-buttons" onNavigate={setActiveSection}/>
      <Card label="Side Nav" imgPreview="/assets/component-preview/side-nav.png" navKey="side-nav" onNavigate={setActiveSection}/>
      <Card label="Switches" imgPreview="/assets/component-preview/switch.png" navKey="switches" onNavigate={setActiveSection}/>
      <Card label="Tabs" imgPreview="/assets/component-preview/tabs.png" navKey="tabs" onNavigate={setActiveSection}/>
      <Card label="Text Fields" imgPreview="/assets/component-preview/text-field.png" navKey="text-fields" onNavigate={setActiveSection}/>
    </Row>
    </>
  );
};

export default ContentComponent;
