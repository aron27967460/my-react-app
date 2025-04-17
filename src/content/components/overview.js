import React, { useState } from 'react';
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
      <Card label="Cards" imgPreview="/assets/component-preview/card.png" navKey="cards" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Checkboxes" imgPreview="/assets/component-preview/checkbox.png" navKey="checkboxes" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Chips" imgPreview="/assets/component-preview/chip.png" navKey="chips" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Content Pairing" imgPreview="/assets/component-preview/content-pairing.png" navKey="content-pairing" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Dialogs" imgPreview="/assets/component-preview/dialog.png" navKey="dialogs" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Directories" imgPreview="/assets/component-preview/directories.png" navKey="directories" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Lists" imgPreview="/assets/component-preview/list.png" navKey="lists" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Menu" imgPreview="/assets/component-preview/menu.png" navKey="menu" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Navigation" imgPreview="/assets/component-preview/navigation.png" navKey="navigation" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Radio Buttons" imgPreview="/assets/component-preview/radio-button.png" navKey="radio-buttons" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Sheets" imgPreview="/assets/component-preview/sheet.png" navKey="sheets" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Switches" imgPreview="/assets/component-preview/switch.png" navKey="switches" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Tabs" imgPreview="/assets/component-preview/tabs.png" navKey="tabs" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Tables" imgPreview="/assets/component-preview/table.png" navKey="tables" onNavigate={setActiveSection} disabled='true'/>
      <Card label="Text Fields" imgPreview="/assets/component-preview/text-field.png" navKey="text-fields" onNavigate={setActiveSection} disabled='true'/>
    </Row>
    </>
  );
};

export default ContentComponent;
