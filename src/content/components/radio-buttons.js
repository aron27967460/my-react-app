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
import { Checkbox } from '../../checkboxes/checkbox';
import { RadioGroup, RadioButton} from '../../radio-buttons/radio-button';

const radioPropSchema = {
  name: {
    type: 'string',
    default: 'example-group',
    label: 'Group Name',
  },
  value: {
    type: 'string',
    default: 'a',
    label: 'Selected Value',
  }
};

const columnsVariant = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const dataVariant = [
  {
    variant: 'Default',
    usage: 'Default',
    purpose: 'Used as the default style for checkboxes.'
  },
  {
    variant: 'Border',
    usage: 'Standalone',
    purpose: 'An alternative style for when there is only one singular option out of a set.'
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



export default function ContentRadioButtons() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [value, setValue] = useState('option1');
  return (
    <>
    <Header tag="h1" textStyle="display-med">Checkboxes</Header>
    <TextRow textStyle="title-large" colorStyle="default">Checkboxes allow users to select one or more from a set of options.
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
      <Header tag="h3"  textStyle="title-med">Interactive Examples</Header>
      <Row itemsPerRow={2} rowWidth="full">
      <div style={{ border: '1px solid var(--border-tertiary-color)', marginTop: 'var(--spacing-2x)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}>
        <Checkbox label='Label' variant='default'/>
      </div>
      <div style={{ border: '1px solid var(--border-tertiary-color)', marginTop: 'var(--spacing-2x)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}>
        <Checkbox label='Label' variant='border'/>
      </div>
      </Row>


      <Header tag="h2" textStyle="headline-med">Anatomy</Header>
      <TextRow textStyle="body-large">To be continued...</TextRow>
      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <TextRow textStyle="body-large">To be continued...</TextRow>

      </>
    )}

    {selectedTab === 1 && (
      <>
        <Header tag="h2" textStyle="headline-med">Elements</Header>
        <TextRow textStyle="body-large">To be continued...</TextRow>
        <Header tag="h2" textStyle="headline-med">States</Header>
        <TextRow textStyle="body-large">To be continued...</TextRow>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>
        <LiveDemo
          component={RadioGroup}
          componentName="RadioGroup"
          label="RadioGroup Demo"
          previewWidth="fit-content"
          propSchema={{
            name: { type: 'string', default: 'exampleGroup', label: 'Group Name' },
            value: { type: 'string', default: value, label: 'Selected Value' },
            onChange: {
              type: 'function',
              default: (e) => setValue(e.target.value),
              label: 'onChange',
            },
          }}
          children={[
            <RadioButton key="1" id="opt1" value="option1" label="Option 1" />,
            <RadioButton key="2" id="opt2" value="option2" label="Option 2" />,
            <RadioButton key="3" id="opt3" value="option3" label="Option 3" disabled />,
          ]}
        />
      </>
    )}
    </>
  );
}
