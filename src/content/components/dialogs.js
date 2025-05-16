import React, { useEffect, useRef, useState } from 'react';
import Button from '../../buttons/button';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import List, { ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';
import Dialog from '../../dialogs/dialog';
import { TextField } from '../../textfields/textfield';


const columnsVariant = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const dataVariant = [
  {
    variant: 'Scrim',
    usage: 'Default',
    purpose: 'The default dialog style is designed to capture the user’s full attention, helping them focus on critical tasks without distractions.'
  },
  {
    variant: 'Inline',
    usage: 'For less empasized actions',
    purpose: 'For content and actions that don’t demand the user’s full focus, consider using the inline style. This allows users to continue interact with other parts of the interface without interference.'
  }
];

const columnsElement = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'}
];

const dataElement = [
  {
    element: 'Dialog wrapper',
    class: 'dialog-content',
    property: 'width'
  },
  {
    element: 'Headline',
    class: 'dialog-headline-text ',
    property: 'font-size'
  },
  {
    element: 'Headline Icon',
    class: 'dialog-headline-icon ',
    property: ''
  },
  {
    element: 'Heicon label',
    class: 'dialog-context',
    property: ''
  },
  {
    element: 'Button wrapper',
    class: 'dialog-actions',
    property: 'color'
  },
];

const columnsState = [
  { header: 'State', accessor: 'state' },
  { header: 'Element', accessor: 'element'},
  { header: 'Property', accessor: 'property'},
  { header: 'Token', accessor: 'token'},
  { header: 'Effect Token', accessor: 'effect' }
];

const dataState = [
  {
    state: 'Hover',
    element: 'label container',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'text label',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'icon label',
    property: 'fill',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Pressed',
    element: 'label container',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: '',
    element: 'text label',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'icon label',
    property: 'fill',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Focused',
    element: 'label container',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'text label',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'icon label',
    property: 'fill',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Disabled',
    element: 'label container',
    property: 'border-color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'text label',
    property: 'color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'icon label',
    property: 'fill',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: 'Placeholder',
    element: 'text-field-input',
    property: 'color',
    token: 'interactive/placeholder-text-color',
    effect: ''
  },
  {
    state: 'Filled',
    element: 'text-field-input',
    property: 'background-color',
    token: 'interactive/on-surface',
    effect: ''
  },
];

const Icon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3722 11.678L8.89089 11.7417L10.9121 13.6962L10.172 15.5581L11.9808 14.6736L13.9091 15.5484L13.0452 13.7375L15.1091 11.7417L12.6278 11.678L12 9.79473L11.3722 11.678ZM10.5 10.5L6 10.6154L9.5 14L7.9102 18L12 16L16.4082 18L14.5 14L18 10.6154L13.5 10.5L12 6L10.5 10.5Z"/>
  </svg>
);

export default function ContentDialogs() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInline, setIsOpenInline] = useState(false);
  const buttonRef = useRef(null);
  const buttonRefInline = useRef(null);

  const dialogProps = {
    isOpen: {
      type: 'boolean',
      default: true,
      label: 'Open'
    },
    hasScrim: {
      type: 'boolean',
      default: true,
      label: 'Scrim'
    },
    headline: {
      type: 'string',
      default: 'This is a headline',
      label: 'Headline'
    },
    context: {
      type: 'string',
      default: 'This is a short message with some context.',
      label: 'Context'
    },
  };

  const [textValue, setTextValue] = useState(""); // State for storing input value

  const handleChange = (e) => {
    setTextValue(e.target.value); // Update input value on change
  };

  return (
    <>
      <Header tag="h1" textStyle="display-med">Dialogs</Header>
      <TextRow textStyle="title-large" colorStyle="default">Dialogs provide prompts in a user flow. They can require an action, communicate information for making decisions, or help users accomplish a focused task.
      </TextRow>
      <Tabs onTabChange={(index) => setSelectedTab(index)}>
        <Tab>Usage</Tab>
        <Tab>Style</Tab>
        <Tab>Demo</Tab>
      </Tabs>

      {selectedTab === 0 && (
        <>
        <Header tag="h2" textStyle="headline-med">Variants</Header>
        <Row><Table columns={columnsVariant} data={dataVariant} /></Row>
        <Header tag="h3"  textStyle="title-med">Interactive Examples</Header>
        <Row itemsPerRow={3} rowWidth="full">
          <div style={{border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}>
          <Button ref={buttonRef} variant="outline" onClick={() => setIsOpen(true)}>Scrim Variant</Button>
          <Dialog
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            headline="Dialog Title"
            context="Some context"
            hasScrim={true}
            anchorRef={buttonRef}
            actions={[
              { label: 'Cancel', onClick: () => setIsOpen(false), variant:"text" },
              { label: 'OK', onClick: () => setIsOpen(false) },
            ]}
          />
          </div>
          <div style={{border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}>
          <Button ref={buttonRefInline} variant="outline" onClick={() => setIsOpenInline(true)}>Inline Variant</Button>
          <Dialog
            isOpen={isOpenInline}
            onClose={() => setIsOpenInline(false)}
            headline="Dialog Title"
            context="Some context"
            hasScrim={false}
            anchorRef={buttonRefInline}
            actions={[
              { label: 'Cancel', onClick: () => setIsOpenInline(false), variant:"text" },
              { label: 'OK', onClick: () => setIsOpenInline(false) },
            ]}
          />
          </div>
        </Row>

        <Header tag="h2" textStyle="headline-med">Applications</Header>
        <Row itemsPerRow={3}>
          <div>
            <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">High Importance</Header>
            <TextRow textStyle="body-large" spacing="in-columns">For critical actions or high importance information, use the scrim variant to demand users' full attention.</TextRow>
          </div>
          <Image variant="inline" src="/assets/content-dialogs/application1-example.png" alt="dialog application example 1 - do" />
        </Row>
        <Row itemsPerRow={3}>
          <div>
            <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Low-Mid Importance</Header>
            <TextRow textStyle="body-large" spacing="in-columns">For low to mid importance information or actions, use the inline dialog so users could continue to interact with the rest of the interface.</TextRow>
          </div>
          <Image variant="inline" src="/assets/content-dialogs/application2-example.png" alt="dialog application example 2 - do" />
        </Row>
        </>
      )}

      {selectedTab === 1 && (
        <>
        <Header tag="h2" textStyle="headline-med">Elements</Header>
        <Row><Table columns={columnsElement} data={dataElement} /></Row>

        <Header tag="h2" textStyle="headline-med">Anatomy</Header>
        <Row itemsPerRow={3} rowWidth="full" >
          <div style={{ border: '1px solid var(--border-tertiary-color)'}}>
          <Image variant="fullwidth" src="/assets/content-dialogs/dialog-anatomy.png" alt="dialog anatomy example" />
          </div>
          <div>
          <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Dialog</Header>
          <List>
            <ListItem>A. Dialog Container</ListItem>
            <ListItem>B. Headline</ListItem>
            <ListItem>C. Contextual Text</ListItem>
            <ListItem>D. Action Wrapper</ListItem>
            <ListItem>E. Buttons (refer Button component)</ListItem>
          </List>
          </div>
        </Row>
        </>
      )}

      {selectedTab === 2 && (
        <>
          <Header tag="h2" textStyle="headline-med">Live Demo</Header>

          <LiveDemo
            propSchema={{
              dialogWidth: {type: 'enum', options: ['small', 'med', 'large'], default: 'small', label: 'Dialog Width'},
              headline: { type: 'string', default: 'Title', label: 'Headline' },
              context: { type: 'string', default: 'These are text that describe the importance and purpose of this dialog.', label: 'Supporting Text'  },
              hasScrim: { type: 'boolean', default: true, label: 'Show Scrim'  },
              primaryButtonLabel: { type: 'string', default: 'OK', label: 'Primary Button Label'  },
              secondaryButtonLabel: { type: 'string', default: 'Cancel', label: 'Secondary Button Label' },
            }}

            component={({
              headline,
              dialogWidth,
              context,
              hasScrim,
              primaryButtonLabel,
              secondaryButtonLabel
            }) => {

              return (
                <>
                  <Button ref={buttonRef} variant="outline" onClick={() => setIsOpen(true)}>Open Dialog</Button>
                  <Dialog
                    dialogWidth={dialogWidth}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    headline={headline}
                    context={context}
                    hasScrim={hasScrim}
                    anchorRef={buttonRef}
                    actions={[
                      { label: secondaryButtonLabel || 'Cancel', onClick: () => setIsOpen(false), variant:"text" },
                      { label: primaryButtonLabel || 'OK', onClick: () => setIsOpen(false) },
                    ]}
                  />
                </>
              )
            }}

          />
        </>
      )}
    </>
  );
}
