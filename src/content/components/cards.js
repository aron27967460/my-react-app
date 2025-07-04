import React, { useState } from 'react';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import { List, ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';
import Card from '../../cards/card';

const columns = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const data = [
  {
    variant: 'Flat',
    usage: 'Default',
    purpose: 'Used as the default style for cards, flat card comes with a bottom border.'
  },
  {
    variant: 'Elevated',
    usage: 'Primary',
    purpose: 'Used for further visual saparation and emphasis.'
  }
];

const columnsCard = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'},
];

const dataCard = [
  {
    element: 'card container',
    class: 'card',
    property: 'background-size',
  },
  {
    element: 'image',
    class: 'smart-image, smart-image-bg',
    property: 'background-image',
  },
  {
    element: 'text container',
    class: 'label-wrapper',
    property: 'padding',
  },
  {
    element: 'label',
    class: 'label',
    property: 'color',
  },
  {
    element: 'tag',
    class: 'tag',
    property: 'color',
  },
];

const columnsCardState = [
  { header: 'State', accessor: 'state' },
  { header: 'Element', accessor: 'element'},
  { header: 'Property', accessor: 'property'},
  { header: 'Token', accessor: 'token'},
  { header: 'Effect Token', accessor: 'effect' }
];

const dataCardState = [
  {
    state: 'Hover',
    element: 'card container',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'label-wrapper',
    property: 'padding',
    token: 'spacing-2x',
    effect: ''
  },
  {
    state: '',
    element: 'label, tag',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Pressed',
    element: 'card container',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: '',
    element: 'label-wrapper',
    property: 'padding',
    token: 'spacing-2x',
    effect: ''
  },
  {
    state: '',
    element: 'label, tag',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Focus',
    element: 'card container',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'label-wrapper',
    property: 'padding',
    token: 'spacing-2x',
    effect: ''
  },
  {
    state: '',
    element: 'label, tag',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Disabled',
    element: 'card container',
    property: 'border',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'label, tag',
    property: 'color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
];


export default function ContentCards() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
    <Header tag="h1" textStyle="display-med">Cards</Header>
    <TextRow textStyle="title-large" colorStyle="default">Cards present relevant content and actions together in a single place, often serving as gateways to deeper level of navigation and further information.
    </TextRow>
    <Tabs onTabChange={(index) => setSelectedTab(index)}>
        <Tab>Usage</Tab>
        <Tab>Style</Tab>
        <Tab>Demo</Tab>
    </Tabs>

    {selectedTab === 0 && (
      <>
      <Header tag="h2" textStyle="headline-med">Varients</Header>
      <Row><Table columns={columns} data={data} /></Row>
      <Header tag="h3"  textStyle="title-med">Interactive Examples</Header>
      <Row itemsPerRow={4}>
      <div><Card cardStyle="default" imgPreview="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" label="Default - Flat"/></div>
      <div><Card cardStyle="elevated" imgPreview="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" label="Elevated Variant"/></div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">One Style Per Group</Header>
        <TextRow textStyle="body-large" spacing="in-columns">While there aren't no roles on when to use which style of cards, it's best to avoid mixing the two styles to avoid causing confusion.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-cards/application1.2.png" alt="card application example 1 - don't" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">As a general guideline, avoid mixing card styles.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-cards/application1.png" alt="card application example 1 - do" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Use the same style of cards within the same set for better visual consistency.</TextRow>
      </div>
      </Row>
      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Flex v.s. Fixed Width</Header>
        <TextRow textStyle="body-large" spacing="in-columns">By default, cards have a fixed height and flexible width to fill up the available space. Depending on the content, you may want to assign a fixed width to the card using the 'cardWidth' property. For instance, you may have images that's best displayed at certain width.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-cards/application2.png" alt="card application example 2 - Default" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Using flexible width allows cards to automatically adjust and fill the available horizontal space.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-cards/application2.2.png" alt="card application example 2 - Try" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">There may be cases where cards could benefit from having a fixed width to optimize image viewing.</TextRow>
      </div>
      </Row>

      </>
    )}

    {selectedTab === 1 && (
      <>
        <Header tag="h2" textStyle="headline-med">Elements</Header>
        <Row><Table columns={columnsCard} data={dataCard} /></Row>

        <Header tag="h2" textStyle="headline-med">Anatomy</Header>
        <Row itemsPerRow={3} rowWidth="full" >
        <div style={{ border: '1px solid var(--border-tertiary-color)'}}><Image variant="fullwidth" withMargin="false" src="/assets/content-cards/card-anatomy.png" alt="card anatomy example" /></div>
        <List>
          <ListItem title="A. Card container"/>
          <ListItem title="B. Image"/>
          <ListItem title="C. Tag (optional)"/>
          <ListItem title="D. Title"/>
        </List>
        </Row>

        <Header tag="h2" textStyle="headline-med">States</Header>
        <Row><Table columns={columnsCardState} data={dataCardState} /></Row>
        <Row itemsPerRow={4}>
        <Image src="/assets/content-cards/hover.png" alt="card hover state" withMargin="false"/>
        <Image src="/assets/content-cards/pressed.png" alt="card pressed state" withMargin="false"/>
        <Image src="/assets/content-cards/focus.png" alt="card focus state" withMargin="false"/>
        <Image src="/assets/content-cards/disabled.png" alt="card disabled state" withMargin="false"/>
        </Row>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>
        <LiveDemo
          component={Card}
          componentName="Card"
          propSchema={{
            cardStyle: {
              label:'Card Style',
              type: 'enum',
              options: ['default', 'elevated'],
              default: 'default'
            },
            label: {
              label:'Text Label',
              type: 'string',
              default: 'Card label'
            },
            imgPreview: {
              label:'Image',
              type: 'string',
              default: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
            },
            tag: {
              label:'Tag',
              type: 'string',
              default: 'Card Tag'
            },
            cardWidth:{
              label: 'Card Width',
              type: 'string',
              default: '280px'
            },
            disabled: {
              label:'Disabled',
              type: 'boolean',
            }
      }}
      />
      </>
    )}
    </>
  );
}
