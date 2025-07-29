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
import Tooltip from '../../tooltips/tooltip';

const columnsVariant = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const dataVariant = [
  {
    variant: 'Plain',
    usage: 'Common',
    purpose: 'Provide context or usage about the target component',
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
    class: 'tooltip-bubble',
    property: 'background-color, color',
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



export default function ContentTooltips() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
    <Header tag="h1" textStyle="display-med">Tooltips</Header>
    <TextRow textStyle="title-large" colorStyle="default">Tooltips offer quick, clear guidance, helping users understand and act with confidence.</TextRow>
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
      <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}><Tooltip content="Click to add" placement="bottom">
      <Button
        variant="outline"
        iconName="add"
        iconPosition="left"
        compoundLabel=""
      /></Tooltip></div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Common Usage</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Use tooltips when extra context or explanation is needed, such as for an icon button. Avoid using them to repeat information already visible.</TextRow>
      </div>
        <Image variant="" src="/assets/content-tooltips/application1.png" alt="tooltip application example to do" />
        <Image variant="" src="/assets/content-tooltips/application2.png" alt="tooltip application example to avoid" />
      </Row>

      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Information</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Tooltips should be concise and helpful, providing relevant details without revealing personal or sensitive information.</TextRow>
      </div>
        <Image variant="" src="/assets/content-tooltips/application3.png" alt="tooltip application example 2 to do" />
        <Image variant="" src="/assets/content-tooltips/application4.png" alt="tooltip application example 2 to avoid" />
      </Row>

      </>
    )}

    {selectedTab === 1 && (
      <>
        <Header tag="h2" textStyle="headline-med">Elements</Header>
        <Row><Table columns={columnsElement} data={dataElement} /></Row>

        <Header tag="h2" textStyle="headline-med">Anatomy</Header>
        <Row itemsPerRow={3} rowWidth="full" >
        <div>
        <Image variant="fullwidth" src="/assets/content-tooltips/tooltip-anatomy.png" alt="tooltip anatomy example" />
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Plain</Header>
        <List>
          <ListItem title="A. Container"/>
          <ListItem title="B. Supporting text"/>
        </List>
        </div>

        </Row>

      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">
          Live Demo
        </Header>
        <LiveDemo
      component={Tooltip}
      componentName="Tooltip"
      propSchema={{
        content: {
          label: 'Tooltip Text',
          type: 'string',
          default: 'Click to add'
        },
        placement: {
          label: 'Placement',
          type: 'enum',
          options: ['top', 'bottom', 'left', 'right'],
          default: 'bottom'
        },
        delay: {
          label: 'Show Delay (ms)',
          type: 'string',
          default: '150'
        },
        offset: {
          label: 'Offset (px)',
          type: 'string',
          default: '8'
        }
      }}
    >
      <Button variant="outline" iconName="add" iconPosition="left" compoundLabel="">
        Hover me
      </Button>
    </LiveDemo>
      </>
    )}
    </>
  );
}
