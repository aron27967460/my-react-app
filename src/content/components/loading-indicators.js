import React, { useState } from 'react';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import { List, ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';
import LoadingIndicator from '../../loading/loading-indicator';


const columnsVariant = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const dataVariant = [
  {
    variant: 'Sequential',
    usage: 'Default',
    purpose: 'Anticipated quick loading time.'
  },
  {
    variant: 'Pulsing',
    usage: 'Slower loading',
    purpose: 'Subtle motion and slowered paced for longer time loading.'
  }
];


const columnsElement = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'}
];

const dataElement = [
  {
    element: 'wrapper',
    class: 'loading-indicator',
    property: ''
  },
  {
    element: 'oval',
    class: 'dot',
    property: 'color'
  },
  {
    element: '',
    class: 'dot',
    property: 'height, width'
  },
  {
    element: '',
    class: 'dot',
    property: 'top, left'
  },
  {
    element: 'center oval',
    class: 'center-dot',
    property: 'width, height'
  },
  {
    element: 'outer ovall',
    class: 'dot-*',
    property: 'height, width'
  },
  {
    element: '',
    class: 'dot-*',
    property: 'top, left'
  },
];

const columnsState = [
  { header: 'Variant', accessor: 'variant' },
  { header: 'Steps', accessor: 'step', flex:15},
  { header: 'Progress', accessor: 'progress', flex:15},
  { header: 'Element', accessor: 'element'},
  { header: 'Transition', accessor: 'transition' }
];

const dataState = [
  {
    variant: 'Sequential (3s)',
    step: '0',
    progress: '0%',
    element: '',
    transition: ''
  },
  {
    variant: '',
    step: '1',
    progress: '6%',
    element: 'dot-0, center-dot',
    transition: 'translate, scale'
  },
  {
    variant: '',
    step: '2',
    progress: '12%',
    element: 'dot-1, center-dot',
    transition: 'translate, scale'
  },
  {
    variant: '',
    step: '3',
    progress: '18%',
    element: 'dot-2, center-dot',
    transition: 'translate, scale'
  },
  {
    variant: '',
    step: '4',
    progress: '24%',
    element: 'dot-3, center-dot',
    transition: 'translate, scale'
  },
  {
    variant: '',
    step: '5',
    progress: '30%',
    element: 'dot-4, center-dot',
    transition: 'translate, scale'
  },
  {
    variant: '',
    step: '6',
    progress: '36%',
    element: 'dot-5, center-dot',
    transition: 'translate, scale'
  },
  {
    variant: '',
    step: '7',
    progress: '42%',
    element: 'dot-6, center-dot',
    transition: 'translate, scale'
  },
  {
    variant: '',
    step: '8',
    progress: '48%',
    element: 'dot-7, center-dot',
    transition: 'translate, scale'
  },
  {
    variant: '',
    step: '9',
    progress: '65%',
    element: '',
    transition: ''
  },
  {
    variant: '',
    step: '10',
    progress: '85%',
    element: 'dot-*, center-dot',
    transition: 'translate, scale'
  },
  {
    variant: '',
    step: '11',
    progress: '100%',
    element: '',
    transition: ''
  },
  {
    variant: 'Pulsing (5s)',
    step: '0',
    progress: '0%',
    element: '',
    transition: ''
  },
  {
    variant: '',
    step: '1',
    progress: '20%',
    element: 'dot-*, center-dot',
    transition: 'translate, scale'
  },
  {
    variant: '',
    step: '2',
    progress: '50%',
    element: '',
    transition: ''
  },
  {
    variant: '',
    step: '3',
    progress: '80%',
    element: 'dot-*, center-dot',
    transition: 'translate, scale'
  },
  {
    variant: '',
    step: '4',
    progress: '100%',
    element: '',
    transition: ''
  }
];



export default function ContentLoadingIndicators() {
  const [selectedTab, setSelectedTab] = useState(0);


  return (
    <>
    <Header tag="h1" textStyle="display-med">Loading Indicators</Header>
    <TextRow textStyle="title-large" colorStyle="default">Loading indicators show the system is working, setting expectations during brief or unknown waits.
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
      <Row itemsPerRow={3} rowWidth="full">

        <div style={{backgroundColor: 'var(--background-secondary-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 'var(--spacing-10x)'}}>
        <LoadingIndicator />
        </div>

        <div style={{backgroundColor: 'var(--background-secondary-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 'var(--spacing-10x)'}}>
        <LoadingIndicator variant="pulsing"/>
        </div>

      </Row>

      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={3}>

      <div >
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Choosing Variants</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Use the sequential variant for shorter loading durations (≤500ms) to convey quick progress. For longer or indeterminate durations (&gt;500ms), use the pulsing variant to avoid repetitive motion and signal slower loading. Whenever possible, include supporting text to help set user expectations.
        </TextRow>
      </div>

      <div>
      <div style={{borderRadius: '16px', overflow: 'hidden'}}>
      <Image withMargin='false' variant="fullspan" src="/assets/content-loadingindicators/application1.gif" alt="loading indicator application example 1 - sequential variant" />
      </div>
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Use the sequential variant when loading time is expected to be short.</TextRow>
      </div>

      <div>
      <div style={{borderRadius: '16px', overflow: 'hidden'}}>
      <Image withMargin='false' variant="fullspan" src="/assets/content-loadingindicators/application2.gif" alt="vertical navigation example 2 - pulsing vairant" />
      </div>
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Use the pulsing variant for longer or indeterminate loading durations. Whenever possible, include supporting text to inform users and set expectations.</TextRow>
      </div>

      </Row>

      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Responsive Scale</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Depending on the screen size and available space, the loading indicator readjusts to remain proportional in size.</TextRow>
      </div>
      <div>
      <div style={{borderRadius: '16px', overflow: 'hidden'}}>
      <Image withMargin='false' variant="fullspan" src="/assets/content-loadingindicators/application3.gif" alt="loading indicator application example 3 - responsive size" />
      </div>
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">The loading indicator resizes to fit the available space.</TextRow>
      </div>
      </Row>

      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Use In Component</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Include loading indicators in components to inform users about a task’s progress without occupying too much space, allowing them to continue with other actions while waiting.</TextRow>
      </div>

      <div>
      <div style={{borderRadius: '16px', overflow: 'hidden'}}>
      <Image withMargin='false' variant="fullspan" src="/assets/content-loadingindicators/application4.gif" alt="vertical navigation example 4 - loading indicator within a chip" />
      </div>
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">A contextual chip can include a loading indicator when information takes time to load—though ideally, it shouldn’t be needed!</TextRow>
      </div>

      <div>
      <div style={{borderRadius: '16px', overflow: 'hidden'}}>
      <Image withMargin='false' variant="fullspan" src="/assets/content-loadingindicators/application5.gif" alt="vertical navigation example 5 - loading indicator within a button" />
      </div>
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Include loading indicator in a button to represent a sequence of actions leading to completion.</TextRow>
      </div>
      </Row>
      </>
    )}

    {selectedTab === 1 && (
      <>
        <Header tag="h2" textStyle="headline-med">Elements</Header>
        <Row><Table columns={columnsElement} data={dataElement} /></Row>


        <Header tag="h2" textStyle="headline-med">Anatomy</Header>
        <Row itemsPerRow={3} rowWidth="full">
        <Image withMargin="false" variant="fullwidth" src="/assets/content-loadingindicators/loadingIndicator-anatomy.png" alt="side nav anatomy expanded example" />
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Loading Indicator</Header>
        <List>
          <ListItem title="A. Outer Oval"/>
          <ListItem title="B. Center Oval"/>
        </List>
        </div>
        </Row>


        <Header tag="h2" textStyle="headline-med">Transition Details</Header>
        <Row><Table columns={columnsState} data={dataState} /></Row>
        <Row itemsPerRow={1} rowWidth="60">
        <Image src="/assets/content-loadingindicators/transition-sequential.png" alt="Transition detail for sequential variant" withMargin="false"/>
        <Image src="/assets/content-loadingindicators/transition-pulsing.png" alt="Transition detail for pulsing variant" withMargin="false"/>
        </Row>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>
        <LiveDemo
          component={LoadingIndicator}
          componentName="LoadingIndicator"
          label="Loading indicator"
          previewWidth="200px"
          propSchema={{
            size: {
              type: 'string',
              label: 'Size',
              default: '48',
            },
            color: {
              type: 'string',
              label: 'Colour',
              default: 'var(--on-surface)',
            },
            variant: {
              type: 'enum',
              label: 'Variant',
              default: 'sequential',
              options: ['sequential', 'pulsing'],
            },
          }}
        />
      </>
    )}
    </>
  );
}
