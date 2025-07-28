import React from 'react';
import Header from '../../main/header';
import Image from '../../main/img-block';
import TextRow from '../../main/text-block';
import Row from '../../columns/row';

export default function ContentColours() {
  return (
    <>
    <Header tag="h1" textStyle="display-med">Colours & Themes</Header>
    <TextRow textStyle="title-large" colorStyle="default">Colour enables a design system to adapt to different environments—like light and dark mode—through layered token values. It ensures sufficient contrast, legibility, and accessibility across all contexts, while also offering a powerful way to express brand personality.</TextRow>
    <Header tag="h2" textStyle="headline-med">Black and White</Header>
    <TextRow textStyle="body-large" colorStyle="default">The foundational colors for Anchor are black and white—though, as my partner likes to remind me, they're technically shades. This monochrome scheme reflects a clear-cut design philosophy: letting content take center stage while keeping interface elements understated and subtle.</TextRow>
    <Image variant="inline" src="/assets/primary-secondary-colours.png" alt="black and white schemes" />
    <TextRow textStyle="body-small" textColor="caption">Main colour palettes for Anchor Design System.</TextRow>
    <Header tag="h2" textStyle="headline-med">Colour Tokens</Header>
    <TextRow textStyle="body-large" colorStyle="default">With tokens, each color is assigned one or more roles within the design system, broadly categorized into static and interactive elements.</TextRow>
    <TextRow textStyle="body-large" colorStyle="default">
    Static elements—such as titles or body text—do not have interaction states. Their roles are straightforward and typically follow clear, descriptive naming (e.g., title-text). Interactive elements, by contrast, are used in components with multiple states, like buttons or checkboxes. Instead of assigning component-specific names, a semantic naming approach—such as surface and on-surface—is used. This keeps the token system relatively simple while still flexible enough to support a wide range of components.
    </TextRow>
    <Row itemsPerRow={4} rowWidth="full" >
    <div>
    <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Surface</Header>
    <TextRow textStyle="body-large" colorStyle="default" spacing="in-column">
    Used for backgrounds and large, low-emphasis areas of the UI.</TextRow>
    </div>

    <div>
    <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns"> On Surface</Header>
    <TextRow textStyle="body-large" colorStyle="default" spacing="in-column">
    Applied to elements layered on a surface, such as text and icons.</TextRow>
    </div>

    <div>
    <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Surface Border</Header>
    <TextRow textStyle="body-large" colorStyle="default" spacing="in-column">
    Used when a surface includes a border to distinguish sections or containers.</TextRow>
    </div>

    <div>
    <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Active</Header>
    <TextRow textStyle="body-large" colorStyle="default" spacing="in-column">
    Tokens ending in -active indicate interactive states such as hover, focus, or pressed.</TextRow>
    </div>
    </Row>

    <Image variant="inline" src="/assets/colour-tokens.png" alt="Colour tokens for Anchor" />

    <Image variant="inline" src="/assets/interactive-colour-token-demo.png" alt="Demostration on colour token for interactive elements" />
    <TextRow textStyle="body-small" textColor="caption">Colour token examples for Anchor components.</TextRow>

    <Header tag="h2" textStyle="headline-med">Themes</Header>
    <TextRow textStyle="body-large" colorStyle="default">With each colour token defined, it's possible to create multiple color themes. The most common example is dark mode (yes, we have one too—check the side menu bar!), which is becoming increasingly relevant as operating systems like macOS, Windows, and Chrome support appearance settings that automatically switch themes throughout the day.</TextRow>

    <Image variant="inline" src="/assets/colour-themes.png" alt="Colour themes" />
    <TextRow textStyle="body-small" textColor="caption">Colour themes for light and dark modes.</TextRow>
    </>
  );
}
