import React, { useState } from 'react';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import { List, ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';

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
  { header: 'Property', accessor: 'property'}
];

const dataTabElement = [
  {
    element: 'tabs container',
    class: 'tabs-container',
    property: 'border, box-shadow'
  },
  {
    element: 'tab',
    class: 'tab',
    property: 'backgorund-size'
  },
  {
    element: 'tab label',
    class: 'tab, tab-style-*',
    property: 'color, font-size'
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


export default function ContentTabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
    <Header tag="h1" textStyle="display-med">Tabs</Header>
    <TextRow textStyle="title-large" colorStyle="default">Tabs help people navigate related content with clarity—switching views without losing context.
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

      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={2}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Multi-level</Header>
        <TextRow textStyle="body-large" spacing="in-columns">When using multi-level tabs, proceed with caution when mixing tab styles. As a basic guideline, consider using bigger font size and/or higher depth (i.e. elevated tab style) for tabs that are higher hierarchy.</TextRow>
      </div>
      </Row>
      <Row itemsPerRow={3}>
      <div>
      <Image variant="fullspan" src="/assets/content-tabs/application1.png" alt="tab application example 1 - Do" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">By default, use elevated style and larger font size for higher level tabs.
      </TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-tabs/application1a.png" alt="tab application example 1a - Caution" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">In the case where the lower level of tabs is more visually prioritized, consider using larger font size.
      </TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-tabs/application1b.png" alt="tab application example 1b - Caution" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Divider and elevated can be mixed when it's visually appropriate to do so.
      </TextRow>
      </div>
      </Row>

      </>
    )}

    {selectedTab === 1 && (
      <>
        <Header tag="h2" textStyle="headline-med">Elements</Header>
        <Row><Table columns={columnsTabElement} data={dataTabElement} /></Row>

        <Header tag="h2" textStyle="headline-med">Anatomy</Header>
        <Row itemsPerRow={3} rowWidth="full" >
        <div style={{ border: '1px solid var(--border-tertiary-color)'}}><Image variant="fullwidth" withMargin="false" src="/assets/content-tabs/tabs-anatomy.png" alt="tabs anatomy example" /></div>
        <List>
          <ListItem title="A. Tab"/>
          <ListItem title="B. Tabs Container"/>
          <ListItem title="C. Tab label"/>
        </List>
        </Row>

        <Header tag="h2" textStyle="headline-med">States</Header>
        <Row><Table columns={columnsTabState} data={dataTabState} /></Row>
        <Row itemsPerRow={4}>
        <Image src="/assets/content-tabs/enabled.png" alt="tab enabled state" withMargin="false"/>
        <Image src="/assets/content-tabs/hover.png" alt="tab hover state" withMargin="false"/>
        <Image src="/assets/content-tabs/pressed.png" alt="tab pressed state" withMargin="false"/>
        <Image src="/assets/content-tabs/focus.png" alt="tab focus state" withMargin="false"/>
        <Image src="/assets/content-tabs/disabled.png" alt="tab disabled state" withMargin="false"/>
        </Row>
        <Row itemsPerRow={4}>
        <Image src="/assets/content-tabs/selected-enabled.png" alt="tab enabled state" withMargin="false"/>
        <Image src="/assets/content-tabs/selected-hover.png" alt="tab selected.hover state" withMargin="false"/>
        <Image src="/assets/content-tabs/selected-pressed.png" alt="tab selected.pressed state" withMargin="false"/>
        <Image src="/assets/content-tabs/selected-focus.png" alt="tab selectd.focus state" withMargin="false"/>
        <Image src="/assets/content-tabs/selected-disabled.png" alt="tab selected.disabled state" withMargin="false"/>
        </Row>
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
