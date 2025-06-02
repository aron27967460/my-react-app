import React, { useRef, useState } from 'react';
import Button from '../../buttons/button';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import { List, ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';
import Dialog from '../../dialogs/dialog';


const columnsVariant = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const dataVariant = [
  {
    variant: 'Scrim',
    usage: 'For simple and critical acitons',
    purpose: 'The default dialog style is designed to capture the user’s full attention, helping them focus on critical tasks without distractions.'
  },
  {
    variant: 'Inline',
    usage: 'For less empasized actions',
    purpose: 'For content and actions that don’t demand the user’s full focus, consider using the inline style. This allows users to continue interact with other parts of the interface without interference.'
  },
  {
    variant: 'Fullscreen',
    usage: 'For complex tasks on mobile',
    purpose: 'With less screen real estate on mobile, consider using fullscreen dialog when there handling complex tasks.'
  }
];

const columnsElement = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'}
];

const dataElement = [
  {
    element: 'Dialog Container',
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
    element: 'Heicon Label',
    class: 'dialog-context',
    property: ''
  },
  {
    element: 'Action Wrapper',
    class: 'dialog-actions',
    property: 'color'
  },
];


const columnsWidth = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Spec', accessor: 'spec', flex: 60 }
];

const dataWidth = [
  {
    variant: 'Small',
    spec: 'Width = 20rem'
  },
  {
    variant: 'Medium',
    spec: 'Width = 30rem'
  },
  {
    variant: 'Large',
    spec: 'Width = 40rem'
  },
  {
    variant: 'Fullscreen',
    spec: 'Width = 100vw, Height = 100vh'
  }
];

export default function ContentDialogs() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInline, setIsOpenInline] = useState(false);
  const [isOpenFullscreen, setIsOpenFullscreen] = useState(false);
  const buttonRef = useRef(null);
  const buttonRefInline = useRef(null);
  const buttonRefFullscreen = useRef(null);

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
            variant="scrim"
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
            variant="inline"
            anchorRef={buttonRefInline}
            actions={[
              { label: 'Cancel', onClick: () => setIsOpenInline(false), variant:"text" },
              { label: 'OK', onClick: () => setIsOpenInline(false) },
            ]}
          />
          </div>
          <div style={{border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}>
          <Button ref={buttonRefFullscreen} variant="outline" onClick={() => setIsOpenFullscreen(true)}>Fullscreen Variant</Button>
          <Dialog
            isOpen={isOpenFullscreen}
            onClose={() => setIsOpenFullscreen(false)}
            headline="Dialog Title"
            context="Some context"
            variant="fullscreen"
            anchorRef={buttonRefFullscreen}
            actions={[
              { label: 'Cancel', onClick: () => setIsOpenFullscreen(false), variant:"text" },
              { label: 'OK', onClick: () => setIsOpenFullscreen(false) },
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
          <div>
          <Image variant="fullspan" src="/assets/content-dialogs/application1-example.png" alt="dialog application example 1 - do" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">For critical actions or information, use the scrim variant dialog.</TextRow>
          </div>
        </Row>
        <Row itemsPerRow={3}>
          <div>
            <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Low-Mid Importance</Header>
            <TextRow textStyle="body-large" spacing="in-columns">For low to mid level importance of information or actions, use the inline dialog so users could continue to interact with the rest of the interface.</TextRow>
          </div>
          <div>
          <Image variant="fullspan" src="/assets/content-dialogs/application2-example.png" alt="dialog application example 2 - do" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Use inline dialog for low or mid important informaiton or actions.</TextRow>
          </div>
        </Row>
        <Row itemsPerRow={3}>
          <div>
            <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Complex Tasks</Header>
            <TextRow textStyle="body-large" spacing="in-columns">For complex tasks that require a series of actions. Consider using scrim or fullscreen dialog depending on the screen size. Typically, only use fullscreen dialog for mobile screen size.</TextRow>
          </div>
          <div>
          <Image variant="fullspan" src="/assets/content-dialogs/application3-example.png" alt="dialog application example 3 - full screen dialog on mobile" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">For complex tasks on mobile screens, use the fullscreen variant to give full screen real state.</TextRow>
          </div>
          <div>
          <Image variant="fullspan" src="/assets/content-dialogs/application4-example.png" alt="dialog application example 4 - large dialog with scrim on wide screen size" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">On wider screens such as tablets and desltops, use dialog with scrim. Adjust the dialog's width size as needed.</TextRow>
          </div>
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
            <ListItem title="A. Dialog Container"/>
            <ListItem title="B. Headline"/>
            <ListItem title="C. Contextual Text"/>
            <ListItem title="D. Action Wrapper"/>
            <ListItem title="E. Buttons (refer Button component)"/>
          </List>
          </div>
        </Row>

        <Header tag="h2" textStyle="headline-med">Width Variant</Header>
        <TextRow textStyle="body-large">Note that width property only applies to the scrim and inline variants.</TextRow>
        <Row><Table columns={columnsWidth} data={dataWidth} /></Row>
        </>
      )}

      {selectedTab === 2 && (
        <>
          <Header tag="h2" textStyle="headline-med">Live Demo</Header>

          <LiveDemo
            propSchema={{
              variant: {type: 'enum', options: ['scrim', 'inline', 'fullscreen'], default: 'scrim', label: 'Variant'},
              dialogWidth: {type: 'enum', options: ['small', 'medium', 'large', 'fullscreen'], default: 'small', label: 'Dialog Width'},
              headline: { type: 'string', default: 'Title', label: 'Headline' },
              context: { type: 'string', default: 'These are text that describe the importance and purpose of this dialog.', label: 'Supporting Text'  },
              primaryButtonLabel: { type: 'string', default: 'OK', label: 'Primary Button Label'  },
              secondaryButtonLabel: { type: 'string', default: 'Cancel', label: 'Secondary Button Label' },
            }}

            componentName="Dialog"

            component={({
              variant,
              headline,
              dialogWidth,
              context,
              primaryButtonLabel,
              secondaryButtonLabel
            }) => {

              return (
                <>
                  <Button ref={buttonRef} variant="outline" onClick={() => setIsOpen(true)}>Open Dialog</Button>
                  <Dialog
                    variant={variant}
                    dialogWidth={dialogWidth}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    headline={headline}
                    context={context}
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
