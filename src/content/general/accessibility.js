import React from 'react';
import Header from '../../main/header';
import Image from '../../main/img-block';
import TextRow from '../../main/text-block';
import Row from '../../columns/row';
import { List, ListItem } from '../../lists/list';

export default function ContentAccessibility() {
  return (
    <>
    <Header tag="h1" textStyle="display-med">Accessibility</Header>
    <TextRow textStyle="title-large" colorStyle="default">Accessibility isn't just a feature—it’s a fundamental responsibility. A well-designed system should be inclusive by default, ensuring that everyone, regardless of ability, can navigate, understand, and interact with content.</TextRow>

    <Header tag="h2" textStyle="headline-med">Semantics & ARIA Support (Web)</Header>
    <TextRow textStyle="body-large" colorStyle="default">On the web, semantics matter. Screen readers and assistive technologies rely on properly structured HTML to convey meaning. That’s why components are built using native semantic elements wherever possible—like button, nav, and section—to ensure users receive the correct context.

    When custom behavior is added, ARIA attributes such as aria-label, aria-labelledby, and aria-expanded are applied to preserve accessibility. This helps describe complex components (like dropdowns or icons) in a way that makes sense to non-visual users.</TextRow>
    <Image variant="inline" src="/assets/switch-component-html-preview.png" alt="switch component html preview" />
    <TextRow textStyle="body-small" textColor="caption">Components without text labels like Switch comes with ARIA attributes to preserve accessibility.</TextRow>

    <Header tag="h2" textStyle="headline-med">Colour Contrast & Visual States</Header>
    <TextRow textStyle="body-large" colorStyle="default">High contrast isn’t just a design aesthetic—it’s essential for readability and usability. Anchor’s color tokens are tested to meet or exceed WCAG AA contrast ratios, ensuring text and UI elements remain legible across all themes and backgrounds.

    Interactive components like buttons, links, and form fields include visible states for focus, hover, active, and disabled, providing both visual and programmatic feedback.</TextRow>
    <Image variant="inline" src="/assets/colour-contrast.png" alt="Colour contrast and states" />
    <TextRow textStyle="body-small" textColor="caption">Each component comes with distinctive visual states that meets the WCAG standards.</TextRow>

    <Header tag="h2" textStyle="headline-med">Keyboard Navigation & Focus Management</Header>
    <TextRow textStyle="body-large" colorStyle="default">Every interactive component in Anchor is keyboard-navigable by default. Focus indicators are clearly visible, and focus order follows logical and predictable paths.

    Modals trap focus while open, dropdowns close with Escape, and tabbing between inputs behaves as expected—these small details help users who rely on keyboard interaction navigate with confidence.</TextRow>
    <Image variant="inline" src="/assets/keyboard-nav.png" alt="Keyboard Navigation" />
    <TextRow textStyle="body-small" textColor="caption">In the modal, the natural keyboard navigation starts from the Cancel button for quick access.</TextRow>

    <Header tag="h2" textStyle="headline-med">Mobile Accessibility</Header>
    <TextRow textStyle="body-large" colorStyle="default">On mobile devices, accessibility considerations shift slightly. Touch targets are optimized to meet minimum tap size (48x48dp), and spacing between interactive elements prevents accidental taps. Components support screen readers like VoiceOver (iOS) and TalkBack (Android), and respond appropriately to system font scaling and accessibility settings.

    Even gestures are designed with fallback interactions for users who may not rely on swipe or multi-touch behavior.</TextRow>
    <Image variant="inline" src="/assets/mobile-access.png" alt="Mobile accessibility" />
      <TextRow textStyle="body-small" textColor="caption">Whether visually indicated or not, each touch target should be at least 48x48dp, with a recommended 8dp of spacing to prevent accidental taps on mobile environment</TextRow>

    <Header tag="h2" textStyle="headline-med">Captions, Labels & Contextual Help</Header>
    <TextRow textStyle="body-large" colorStyle="default">Good accessibility also means providing the right information, at the right time. Anchor components support clear labels, placeholders, helper text, and error messages—all programmatically associated with their input elements using aria-describedby and for attributes.

    Tooltips, screen reader-only labels, and persistent hints help ensure users aren’t left guessing, even in complex flows.</TextRow>
    <Image variant="inline" src="/assets/colour-themes.png" alt="Colour themes" />
    </>
  );
}
