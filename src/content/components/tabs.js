import React, { useState } from 'react';
import Button from '../../buttons/button';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import List, { ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';
import Card from '../../cards/card';

const columnsTabs = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const dataTabs = [
  {
    variant: 'Divider',
    usage: 'Default',
    purpose: 'Used as the default style for tabs, a subtle divider to seperate from its content.'
  },
  {
    variant: 'Elevated',
    usage: 'Multi level',
    purpose: 'Used for when there are multiple levels of tabs.'
  }
];

const columnsTab = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const dataTab = [
  {
    variant: 'Regular',
    usage: 'Default',
    purpose: 'Used as the default font size for tabs.'
  },
  {
    variant: 'Small',
    usage: 'Multi level',
    purpose: 'Used for when there are sub levels of tabs.'
  }
];

const columnsTabElement = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'},
  { header: 'Token', accessor: 'token'}
];

const dataTabElement = [
  {
    element: 'tabs container',
    class: 'tabs-container',
    property: 'border, box-shadow',
    token: 'interactive/border-tertiary-color'
  },
  {
    element: 'tab',
    class: 'tab',
    property: 'backgorund-size',
    token: 'interactive/on-surface'
  },
  {
    element: 'tab label',
    class: 'tab, tab-style-*',
    property: 'color, font-size',
    token: 'interactive/on-surface'
  },
];

const columnsTabState = [
  { header: 'State', accessor: 'state' },
  { header: 'Element', accessor: 'element'},
  { header: 'Property', accessor: 'property'},
  { header: 'Token', accessor: 'token'},
  { header: 'Effect Token', accessor: 'effect' }
];

const dataTabState = [
  {
    state: 'Hover',
    element: 'tab',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'tab',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Pressed',
    element: 'tab',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: '',
    element: 'tab',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Selected',
    element: 'tab',
    property: 'border-bottom',
    token: 'interactive/surface-border',
    effect: ''
  },
  {
    state: 'Disabled',
    element: 'tab',
    property: 'color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: 'Selected.Disabled',
    element: 'tab',
    property: 'color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'tab',
    property: 'border-bottom',
    token: 'interactive/surface-border-disabled',
    effect: ''
  },
];


const Icon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3722 11.678L8.89089 11.7417L10.9121 13.6962L10.172 15.5581L11.9808 14.6736L13.9091 15.5484L13.0452 13.7375L15.1091 11.7417L12.6278 11.678L12 9.79473L11.3722 11.678ZM10.5 10.5L6 10.6154L9.5 14L7.9102 18L12 16L16.4082 18L14.5 14L18 10.6154L13.5 10.5L12 6L10.5 10.5Z"/>
  </svg>
);



export default function ContentCards() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
    <Header tag="h1" textStyle="display-med">Tabs</Header>
    <TextRow textStyle="title-large" colorStyle="default">Tabs organize and support navigation between groups of related content at the same level of hierarchy.
    </TextRow>
    <Tabs onTabChange={(index) => setSelectedTab(index)}>
        <Tab>Usage</Tab>
        <Tab>Style</Tab>
        <Tab>Demo</Tab>
    </Tabs>

    {selectedTab === 0 && (
      <>
      <Header tag="h2" textStyle="headline-med">Container Varients</Header>
      <Row><Table columns={columnsTabs} data={dataTabs} /></Row>
      <Header tag="h3"  textStyle="title-med">Interactive Examples</Header>
      <Row itemsPerRow={2} rowWidth="60">
      <div>
        <Tabs tabsStyle='divider' tabsLevel='sub'>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
        </Tabs>
      </div>
      <div>
        <Tabs tabsStyle='elevated' tabsLevel='sub'>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
        </Tabs>
      </div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Tab Varients</Header>
      <Row><Table columns={columnsTab} data={dataTab} /></Row>
      <Header tag="h3"  textStyle="title-med">Interactive Examples</Header>
      <Row itemsPerRow={2} rowWidth="60">
      <div>
        <Tabs tabStyle='default' tabsLevel='sub'>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
        </Tabs>
      </div>
      <div>
        <Tabs tabStyle='small' tabsLevel='sub'>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
        </Tabs>
      </div>
      </Row>


      <Header tag="h2" textStyle="headline-med">Anatomy</Header>
      <Row itemsPerRow={3} rowWidth="full" >
      <div style={{ border: '1px solid var(--border-tertiary-color)'}}><Image variant="fullwidth" src="/assets/content-tabs/tabs-anatomy.png" alt="tabs anatomy example" /></div>
      <List>
        <ListItem>A. Tab</ListItem>
        <ListItem>B. Tabs Container</ListItem>
        <ListItem>C. Tab label</ListItem>
      </List>
      </Row>
      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Multi-level</Header>
        <TextRow textStyle="body-large" spacing="in-columns">When using multi-level tabs, proceed with caution when mixing tab styles. The general guideline would be to ensure top level tab always remain more visually prominent. For instance, avoid using smaller font size for the top level tabs.</TextRow>
      </div>
      <Image variant="inline" src="/assets/content-tabs/application1.png" alt="tab application example 1" />
      <Image variant="inline" src="/assets/content-tabs/application1.2.png" alt="tab application example 1.2" />
      </Row>

      </>
    )}

    {selectedTab === 1 && (
      <>
        <Header tag="h2" textStyle="headline-med">Elements</Header>
        <Row><Table columns={columnsTabElement} data={dataTabElement} /></Row>
        <Header tag="h2" textStyle="headline-med">States</Header>
        <TextRow textStyle="body-large">How state change affect each tab.</TextRow>
        <Row><Table columns={columnsTabState} data={dataTabState} /></Row>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>
        <LiveDemo
            component={Tabs}
            componentName="Tabs"
            propSchema={{
              tabsStyle: {
                type: 'enum',
                options: ['elevated', 'divider'],
                default: 'divider',
                label: 'Container Style'
              },
              tabStyle: {
                type: 'enum',
                options: ['default', 'small'],
                default: 'default',
                label: 'Tab Style'
              },
            }}
            children={[
              <Tab key="1">Tab One</Tab>,
              <Tab key="2">Tab Two</Tab>,
              <Tab key="3">Tab Three</Tab>
            ]}
          />
      </>
    )}
    </>
  );
}
