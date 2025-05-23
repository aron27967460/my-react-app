import React, { useState } from 'react';
import Button from '../../buttons/button';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';
import List, { ListItem } from '../../lists/list';
import { Chip } from '../../chips/chip';


const columnsVariant = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const dataVariant = [
  {
    variant: 'Contextual',
    usage: 'Contextual info, actions',
    purpose: 'Reflects current state or context, possibly interactive.'
  },
  {
    variant: 'Selectable',
    usage: 'Persistent toggle',
    purpose: 'Always shown; select/deselect filters.'
  },
  {
    variant: 'Deletable',
    usage: 'User-generated tag',
    purpose: 'Created by user input; deletable.'
  }
];

const columnsElement = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'}
];

const dataElement = [
  {
    element: 'container',
    class: 'chip',
    property: 'backgorund-size'
  },
  {
    element: 'container',
    class: 'chip',
    property: 'border-color'
  },
  {
    element: 'icon',
    class: 'chip-icon',
    property: 'color'
  },
  {
    element: 'label',
    class: 'chip-label',
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
    element: 'chip',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'chip label',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Pressed',
    element: 'chip',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: '',
    element: 'label',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Selected',
    element: 'chip',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'label',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Selected:Hover',
    element: 'chip',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'hover-drop-shadow'
  },
  {
    state: 'Selected:Pressed',
    element: 'chip',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: 'Disabled',
    element: 'chip',
    property: 'border-color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'chip',
    property: 'background-color',
    token: 'interactive/surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'label',
    property: 'color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: 'Selected.Disabled',
    element: 'chip',
    property: 'border-color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'label',
    property: 'color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
];


const Icon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3722 11.678L8.89089 11.7417L10.9121 13.6962L10.172 15.5581L11.9808 14.6736L13.9091 15.5484L13.0452 13.7375L15.1091 11.7417L12.6278 11.678L12 9.79473L11.3722 11.678ZM10.5 10.5L6 10.6154L9.5 14L7.9102 18L12 16L16.4082 18L14.5 14L18 10.6154L13.5 10.5L12 6L10.5 10.5Z"/>
  </svg>
);



export default function ContentChips() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
    <Header tag="h1" textStyle="display-med">Chips</Header>
    <TextRow textStyle="title-large" colorStyle="default">Chips help people make selections, filter content, or apply changes.
    </TextRow>
    <Tabs onTabChange={(index) => setSelectedTab(index)}>
        <Tab>Usage</Tab>
        <Tab>Style</Tab>
        <Tab>Demo</Tab>
    </Tabs>

    {selectedTab === 0 && (
      <>
      <Header tag="h2" textStyle="headline-med">Varients</Header>
      <Row><Table columns={columnsVariant} data={dataVariant} /></Row>
      <Header tag="h3"  textStyle="title-med">Examples</Header>
      <Row itemsPerRow={4} rowWidth="full">
        <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-1x) var(--spacing-1x)'}}>
          <Image variant="fullwidth" src="/assets/content-chips/context.png" alt="chip - contextual variant" />
          <TextRow textStyle="body-small" textColor="caption" spacing="in-columns">Contextual Variant</TextRow>
        </div>
        <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-1x) var(--spacing-1x)'}}>
          <Image variant="fullwidth" src="/assets/content-chips/selectable.png" alt="chip - selectable variant" />
          <TextRow textStyle="body-small" textColor="caption" spacing="in-columns">Selectable Variant</TextRow>
        </div>
        <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-1x) var(--spacing-1x)'}}>
          <Image variant="fullwidth" src="/assets/content-chips/removable.png" alt="chip - removable variant" />
          <TextRow textStyle="body-small" textColor="caption" spacing="in-columns">Removable Variant</TextRow>
        </div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Contextual</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Contextual chips are used to represent relevant actions and dynamic information. They appear in the UI to assist users in completing their tasks.</TextRow>
        </div>
        <div>
          <Image withMargin="false" src="/assets/content-chips/context-example.png" alt="context chip - application example" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Contextual chips can be both interactive and static depending on their content.</TextRow>
        </div>
      </Row>

      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Selectable</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Selectable chips are persistent elements to help users to filter content. Each chip should present relevant description in regards to users' intent.</TextRow>
        </div>
        <div>
          <Image withMargin="false" src="/assets/content-chips/selectable-example.png" alt="selectable chip - application example" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Selectable chips can be toggle on and off based on users interaction.</TextRow>
        </div>
      </Row>

      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Removable</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Removable chips are user-generated info to assist users in completing their relevant task on hand. Each chip should be individaully removable.</TextRow>
        </div>
        <div>
          <Image withMargin="false" src="/assets/content-chips/removable-example.png" alt="removable chip - application example" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Removable chips are input generated by the users.</TextRow>
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
          <div style={{ border: '1px solid var(--border-tertiary-color)'}}><Image variant="fullwidth" src="/assets/content-chips/chips-anatomy.png" alt="chip anatomy example" /></div>
          <List>
            <ListItem>A. Chip container</ListItem>
            <ListItem>B. Leading icon (Variant dependant, optional)</ListItem>
            <ListItem>C. Label</ListItem>
            <ListItem>D. Trailing icon (Removable variant)</ListItem>
          </List>
        </Row>

        <Header tag="h2" textStyle="headline-med">States</Header>
        <Row><Table columns={columnsState} data={dataState} /></Row>
        <Row itemsPerRow={4}>
        <Image src="/assets/content-chips/hover.png" alt="chip state" withMargin="false"/>
        <Image src="/assets/content-chips/pressed.png" alt="chip pressed state" withMargin="false"/>
        <Image src="/assets/content-chips/focus.png" alt="chip focus state" withMargin="false"/>
        <Image src="/assets/content-chips/disabled.png" alt="chip disabled state" withMargin="false"/>
        <Image src="/assets/content-chips/selected-hover.png" alt="chip selected.hover state" withMargin="false"/>
        <Image src="/assets/content-chips/selected-pressed.png" alt="chip selected.pressed state" withMargin="false"/>
        <Image src="/assets/content-chips/selected-focus.png" alt="chip selected.focus state" withMargin="false"/>
        <Image src="/assets/content-chips/selected-disabled.png" alt="chip selected.disabled state" withMargin="false"/>
        </Row>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>
        <LiveDemo
            component={Chip}
            componentName="Chip"
            propSchema={{
              label: {
                label:'Text Label',
                type: 'string',
                default: 'Label'
              },
              iconName: {
                label:'Icon Name',
                type: 'enum',
                options: ['none','star', 'add', 'check'],
                default: 'none',
              },
              disabled: {
                label:'Disabled',
                type: 'boolean',
              },
              interactionVariant: {
                label:'Variant',
                type: 'enum',
                options: ['contextual', 'removable', 'selectable'],
                default: 'contextual'
              }
            }}
          />
      </>
    )}
    </>
  );
}
