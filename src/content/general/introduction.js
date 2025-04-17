import React from 'react';
import Image from '../../main/img-block';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Row from '../../columns/row';
import Card from '../../cards/card';

export default function ContentIntroduction() {
  return (
    <>
      <Image variant="fullspan" withMargin="false" src="/assets/hero-banner.png" alt="hero banner" />
      <Header tag="h1" textStyle="display-large">Anchor</Header>
      <TextRow textStyle="title-large" colorStyle="default">Design System made by Aron Chen.</TextRow>
      <TextRow textStyle="title-large" colorStyle="default">
        Passionate of design system, Anchor is a personal project I developed with the aim to create a personal design system with my own style.
      </TextRow>
      <Header tag="h2" textStyle="headline-med">Guiding Principles</Header>
      <Row itemsPerRow={3} rowWidth="60">
      <div>
        <TextRow textStyle="title-large" spacing="in-columns">Clear-cut</TextRow>
        <TextRow textStyle="body-large" colorStyle="default" spacing="in-columns">Anchor elements are clean and simple- allowing people to better focus on content that matters to them.</TextRow>
      </div>
      <div>
        <TextRow textStyle="title-large" spacing="in-columns">Coevolve</TextRow>
        <TextRow textStyle="body-large" colorStyle="default" spacing="in-columns">Anchor is a platform for growth, regardless of your role or purposes. Any feedback or thoughts, I would love to hear them!</TextRow>
      </div>
      <div>
        <TextRow textStyle="title-large" spacing="in-columns">Accessible</TextRow>
        <TextRow textStyle="body-large" colorStyle="default" spacing="in-columns">From component usage to prototyping in Figma, Anchor should be truly accessible to everyone.</TextRow>
      </div>
      </Row>
      <Header tag="h2" textStyle="headline-med">Resources</Header>
      <Row itemsPerRow={4}>
        <Card label="Figma Kit →" imgPreview="/assets/figma-icon.png" href="https://www.figma.com/community/file/1476306041311160406/anchor-design-system"/>
        <Card label="Github →" imgPreview="/assets/github-icon.png" href="/" disabled="true"/>
      </Row>
    </>
  );
}
