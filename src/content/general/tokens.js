import React from 'react';
import Header from '../../main/header';
import Image from '../../main/img-block';
import TextRow from '../../main/text-block';
import Row from '../../columns/row';

export default function ContentTokens() {
  return (
    <>
    <Header tag="h1" textStyle="display-med">Tokens</Header>
    <TextRow textStyle="title-large" colorStyle="default">Tokens are a great way to develop a scalable and flexible design system. You can use specify token values such as color, spacing, and typography.</TextRow>
    <Header tag="h2" textStyle="headline-med">Why Use Tokens?</Header>
    <TextRow textStyle="body-large" colorStyle="default">Employing tokens into a design system brings various benefit. First of all, they ensure the stylistic consistency across different components and empower the design team to create a synchronized experience. From a development perspective, it prevents errors and improve efficiency when developers can accruately capture the design specifications. In addition, tokens also provide the flexibility to partially update the products.</TextRow>
    <Header tag="h2" textStyle="headline-med">Defining Token Structure</Header>
    <Row itemsPerRow={1} rowWidth="65">
    <TextRow textStyle="body-large" colorStyle="default" spacing="in-columns">Depending on individual needs, token structures can vary. For a complex structure, it may include structure such as primitive tokens, semantic tokens and component-specific tokens. Below is an example from Figma. </TextRow>
    <Image variant="fullspan" src="/assets/figma-token-example.png" alt="token structure example from Figma" />
    <TextRow textStyle="body-large" colorStyle="default" spacing="in-columns">Note that not every design system requires all these layers. It's important to identify what you're aiming to achieve with the tokens and establish the structure to your liking. For Anchor, since the purpose of the design system was for my own design work, along with my clear-cut guiding principle, I've employed a more simplified structure without the component-specific tokens.</TextRow>
    <Image variant="fullspan" src="/assets/tokens.png" alt="token structure" />
    </Row>
    </>
  );
}
