import React, { useState } from 'react';
import Button from '../../buttons/button';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import { List, ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';

const columnsVariant = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const dataVariant = [
  {
    variant: 'Outline',
    usage: 'Primary',
    purpose: 'Used as the primary button style for Anchor. Use outlined buttons for confirming action such as Confirm or Save.',
  },
  {
    variant: 'Text',
    usage: 'Secondary/Tertiary',
    purpose: 'Used as the default secondary button style for Anchor. Use text buttons for actions such as Cancel or Close.'
  },
  {
    variant: 'Underlined',
    usage: 'Secondary/Tertiary',
    purpose: 'An alternative secondary button style after text buttons. Consider using underlined buttons when there are more than 3 buttons for better visual separation.'
  },
  {
    variant: 'Elevated',
    usage: 'Primary',
    purpose: 'Typically used for stand alone actions or fixed overlay button. For example, a back-to-top button on top of content.'
  }
];

const columnsElement = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'},
];

const dataElement = [
  {
    element: 'container',
    class: 'btn',
    property: 'background-color, border',
  },
  {
    element: 'focus layer',
    class: 'focus-layer',
    property: 'border',
  },
  {
    element: 'label text',
    class: 'btn',
    property: 'color'
  },
  {
    element: 'icon',
    class: 'btn-icon',
    property: 'color',
  },
];

const columnsState = [
  { header: 'State', accessor: 'state' },
  { header: 'Element', accessor: 'element'},
  { header: 'Property', accessor: 'property'},
  { header: 'Color Token', accessor: 'token'},
  { header: 'Effect Token', accessor: 'effect' }
];

const dataState = [
  {
    state: 'Hover',
    element: 'container',
    property: 'background-color',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'label text, icon',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Pressed',
    element: 'container',
    property: 'background-color',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: '',
    element: 'label text, icon',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Focused',
    element: 'container',
    property: 'background-color',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'focus layer',
    property: 'border',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'label text, icon',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Disabled',
    element: 'container',
    property: 'border',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'label text, icon',
    property: 'color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
];

const columnsTransition = [
  { header: 'Transition', accessor: 'transition'},
  { header: 'Button Variant', accessor: 'variant'},
  { header: 'Element', accessor: 'element'},
  { header: 'Token', accessor: 'token'},
];

const dataTransition = [
  {
    transition: 'Background Slide',
    variant: 'Outline, Elevated',
    element: 'background',
    token: 'surface → surface-active'
  },
  {
    transition: 'Text Fade',
    variant: 'Text, Underlined',
    element: 'color',
    token: 'on-surface → textfade'
  },
];



export default function ContentButtons() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
    <Header tag="h1" textStyle="display-med">Buttons</Header>
    <TextRow textStyle="title-large" colorStyle="default">Buttons empower people to take actions. From going to the next page to confirming a purchase, they give form to intent, guiding users through choices and interactions.</TextRow>
    <Tabs onTabChange={(index) => setSelectedTab(index)}>
        <Tab>Usage</Tab>
        <Tab>Style</Tab>
        <Tab>Demo</Tab>
    </Tabs>

    {selectedTab === 0 && (
      <>
      <Header tag="h2" textStyle="headline-med">Varients</Header>
      <Row><Table columns={columnsVariant} data={dataVariant} /></Row>
      <Header tag="h3"  textStyle="title-med">Interactive Examples</Header>
      <Row itemsPerRow={4}>
      <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}><Button variant="outline">Outlined</Button></div>
      <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}><Button variant="text">Text</Button></div>
      <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}><Button variant="underline">Underlined</Button></div>
      <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}><Button variant="elevated">Elevated</Button></div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={4}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Primary + Secondary</Header>
        <TextRow textStyle="body-large" spacing="in-columns">The general role when mixing between button styles is to use outlined as the primary actions while employing text style for any secondary or tertiary actions.</TextRow>
      </div>
      <div>
        <Image variant="inline" src="/assets/content-buttons/button-application1.png" alt="button application example 1" />
      </div>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Secondary/Tertiary Only</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Text buttons are used as the default secondary and tertiary button style for Anchor. In situations where there are four or more actions or when buttons are stacked, consider using underlined style for better visual separation.</TextRow>
      </div>
      <div>
        <Image variant="inline" src="/assets/content-buttons/button-application2.gif" alt="button application example 2" />
      </div>
      </Row>
      <Row itemsPerRow={4}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Over Content</Header>
        <TextRow textStyle="body-large" spacing="in-columns">While generally not recommended, when using a button over content, employ the elevated style.</TextRow>
      </div>
      <div>
        <Image variant="inline" src="/assets/content-buttons/button-application3.gif" alt="button application example 3" />
      </div>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Compound Label</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Used as ways to combine key action and information, The goal of a compound label is to reinforce user’s confidence in performing the action by surfacing that most relevant information.</TextRow>
      </div>
      <div>
        <Image variant="inline" src="/assets/content-buttons/button-application4.png" alt="button application example 4" />
      </div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Button Alignment</Header>
      <Row itemsPerRow={3}>
      <TextRow textStyle="body-large" spacing="in-columns">In terms of button alignments. Generally, it depends on where the buttons are situated within the page. Within a container, if the buttons are placed at the bottom right corner, then depending on the orientation of the group (e.g. horizontal vs. vertical), they should be either aligned to the right or bottom.</TextRow>
      <div>
      <div style={{ border: '1px solid var(--border-tertiary-color)', borderRadius: '16px', overflow: 'hidden'}}>
      <Image variant="fullspan" src="/assets/content-buttons/button-alignment.gif" withMargin="false" alt="button alignment" />
      </div>
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Align and order buttons based on their position within the page.</TextRow>
      </div></Row>

      <Header tag="h2" textStyle="headline-med">Label Alignment</Header>
      <Row itemsPerRow={3}>
      <TextRow textStyle="body-large" spacing="in-columns">When it comes to button label alignment in Anchor, they are typically either aligned to the left or center. While mostly with no set rules, when the label strings have significant length difference, it is recommended to align the button labels to the left for better readibility.</TextRow>
      <div>
      <div style={{ border: '1px solid var(--border-tertiary-color)', borderRadius: '16px', overflow: 'hidden'}}>
      <Image variant="fullspan" src="/assets/content-buttons/label-alignment.gif" withMargin="false" alt="button label alignment" />
      </div>
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">For buttons with wide string length difference, consider left align label.</TextRow>
      </div></Row>
      </>
    )}

    {selectedTab === 1 && (
      <>
        <Header tag="h2" textStyle="headline-med">Elements</Header>
        <Row><Table columns={columnsElement} data={dataElement} /></Row>

        <Header tag="h2" textStyle="headline-med">Anatomy</Header>
        <Row itemsPerRow={4} rowWidth="full" >
        <div>
        <Image variant="fullwidth" src="/assets/content-buttons/anatomy1.png" alt="button anatomy example 1" />
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Outlined Button</Header>
        <List>
          <ListItem title="A. Label"/>
          <ListItem title="B. Compound-label (optional)"/>
          <ListItem title="C. Icon (optional)"/>
          <ListItem title="D. Container"/>
        </List>
        </div>
        <div>
        <Image variant="fullwidth" src="/assets/content-buttons/anatomy2.png" alt="button anatomy example 2" />
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Text Button</Header>
        <List>
          <ListItem title="A. Label"/>
          <ListItem title="C. Icon (optional)"/>
        </List>
        </div>
        <div>
        <Image variant="fullwidth" src="/assets/content-buttons/anatomy3.png" alt="button anatomy example 3" />
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Icon Button</Header>
        <List>
          <ListItem title="C. Icon (optional)"/>
          <ListItem title="D. Container"/>
          <ListItem title="A. Label"/>
        </List>
        </div>
        <div>
        <Image variant="fullwidth" src="/assets/content-buttons/anatomy4.png" alt="button anatomy example 4" />
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Elevated Button</Header>
        <List>
          <ListItem title="C. Icon (optional)"/>
          <ListItem title="D. Container"/>
          <ListItem title="A. Label"/>
        </List>
        </div>
        </Row>

        <Header tag="h2" textStyle="headline-med">States</Header>
        <TextRow textStyle="body-large">How state change affect buttons.</TextRow>
        <Row><Table columns={columnsState} data={dataState} /></Row>
        <Row itemsPerRow={4}>
        <Image src="/assets/content-buttons/hover.png" alt="button hover state" withMargin="false"/>
        <Image src="/assets/content-buttons/pressed.png" alt="button pressed state" withMargin="false"/>
        <Image src="/assets/content-buttons/focus.png" alt="button focus state" withMargin="false"/>
        <Image src="/assets/content-buttons/disabled.png" alt="button disabled state" withMargin="false"/>
        </Row>
        <Header tag="h2" textStyle="headline-med">Transition</Header>
        <TextRow textStyle="body-large">Unlike other design systems where component usually have one sole visual transition, Anchor has two types- making distinciton between primary and secondary/tertiary actions through motion.  </TextRow>
        <Row><Table columns={columnsTransition} data={dataTransition} /></Row>
        <TextRow textStyle="title-med">Interactive Examples</TextRow>
        <Row itemsPerRow={4}>
        <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}><Button variant="outline">Background Slide</Button></div>
        <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}><Button variant="text">Text Fade</Button></div>
        </Row>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>
        <LiveDemo
          component={Button}
          componentName="Button"
          propSchema={{
            variant: {
              label:'Button Variant',
              type: 'enum',
              options: ['outline', 'text', 'underline', 'elevated'],
              default: 'outline'
            },
            children: {
              label:'Text Label',
              type: 'string',
              default: 'label'
            },
            iconName: {
              label:'Icon',
              type: 'enum',
              options: ['none','star', 'add', 'arrowRight', 'arrowUp'],
              default: 'none',
            },
            iconPosition: {
              label:'Icon Position',
              type: 'enum',
              options: ['left', 'right'],
              default: 'left'
            },
            compoundLabel: {
              label:'Compound Label',
              type: 'string',
              default: ''
        }
      }}
      />
      </>
    )}
    </>
  );
}
