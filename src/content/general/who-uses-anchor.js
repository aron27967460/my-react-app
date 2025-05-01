import React from 'react';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Row from '../../columns/row';
import Card from '../../cards/card';

export default function ContentWhoUsesAnchor() {
  return (
    <>
    <Header tag="h1" textStyle="display-med">Whose Anchor For?</Header>
    <TextRow textStyle="title-large" colorStyle="default">While Anchor is developed purely from personal exploration. Anyone can access and leverage the components and guidelines.</TextRow>
    <Header tag="h2" textStyle="headline-med">Utilizing Anchor on Figma</Header>
    <TextRow textStyle="body-large" colorStyle="default">Being a designer myself, one of the primary goal for me was to empower other designers to easily leverage Anchor in their work with ease. Besides coming up with reusable components, I also provide guidelines on both when to use these components and how to use them in Figma.</TextRow>
    <Row itemsPerRow={4}>
      <Card label="Figma Kit →" imgPreview="/assets/figma-icon.png" href="https://www.figma.com/community/file/1476306041311160406/anchor-design-system"/>
    </Row>
    <Header tag="h2" textStyle="headline-med">Developing with Anchor</Header>
    <TextRow textStyle="body-large" colorStyle="default">For people who look to use Anchor in development, you can access my github to utilize the source code. You can also use Dev mode on Figma to view the spec of the components, but please be aware that some components are designed in ways to accommodate the technical limitation of Figma.</TextRow>
    <Row itemsPerRow={4}>
      <Card label="Github →" imgPreview="/assets/github-icon.png" href="https://github.com/aron27967460/my-react-app.git"/>
    </Row>
    </>
  );
}
