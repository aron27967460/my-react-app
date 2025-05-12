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

const columnsElement = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'},
  { header: 'Token', accessor: 'token'}
];

const dataElement = [
  {
    element: 'radio set container',
    class: 'radio-group',
    property: '',
    token: ''
  },
  {
    element: 'radio container',
    class: 'radio-wrapper',
    property: '',
    token: ''
  },
  {
    element: 'radiomark',
    class: 'radiomark',
    property: 'background-size',
    token: 'interactive/on-surface'
  },
  {
    element: 'label',
    class: 'label-text',
    property: 'color',
    token: 'interactive/on-surface'
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
    element: 'radiomark',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: 'Pressed',
    element: 'radiomark',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: 'Focused',
    element: 'radiomark',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: 'Disabled',
    element: 'radiomark',
    property: 'border-color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: 'Selected:Hover',
    element: 'radiomark',
    property: '',
    token: '',
    effect: 'hover-drop-shadow'
  },
  {
    state: 'Selected:Disabled',
    element: 'radiomark',
    property: 'background-color',
    token: 'interactive/surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: '',
    property: 'border-color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  }
];

const Icon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3722 11.678L8.89089 11.7417L10.9121 13.6962L10.172 15.5581L11.9808 14.6736L13.9091 15.5484L13.0452 13.7375L15.1091 11.7417L12.6278 11.678L12 9.79473L11.3722 11.678ZM10.5 10.5L6 10.6154L9.5 14L7.9102 18L12 16L16.4082 18L14.5 14L18 10.6154L13.5 10.5L12 6L10.5 10.5Z"/>
  </svg>
);



export default function ContentRadioButtons() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selected, setSelected] = useState('option1');

  const options = [
    { id: 'option1', label: 'Option 1' },
    { id: 'option2', label: 'Option 2' },
    { id: 'option3', label: 'Option 3'},
  ];


  return (
    <>
    <Header tag="h1" textStyle="display-med">Radio Buttons</Header>
    <TextRow textStyle="title-large" colorStyle="default">Radio buttons allow users to select one option from a set of options.
    </TextRow>
    <Tabs onTabChange={(index) => setSelectedTab(index)}>
        <Tab>Usage</Tab>
        <Tab>Style</Tab>
        <Tab>Demo</Tab>
    </Tabs>

    {selectedTab === 0 && (
      <>
      <Row itemsPerRow={1} rowWidth="full">
      <div style={{border: '1px solid var(--border-tertiary-color)', marginTop: 'var(--spacing-2x)', padding: 'var(--spacing-8x) 0'}}>
        <RadioGroup name="demo" options={options} value={selected} onChange={setSelected}  align="center"/>
      </div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Anatomy</Header>
      <Row itemsPerRow={2} rowWidth="full" >
      <div style={{ border: '1px solid var(--border-tertiary-color)'}}>
      <Image variant="fullwidth" src="/assets/content-radiobuttons/radiobutton-anatomy.png" alt="checkbox anatomy example 1" />
      </div>
      <div>
      <List>
        <ListItem>A. Set Container</ListItem>
        <ListItem>B. Button Container</ListItem>
        <ListItem>C. Radiomark</ListItem>
        <ListItem>D. Label</ListItem>
      </List>
      </div>
      </Row>
      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={4} rowWidth="full">
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Single Select</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Use radio buttons when the user can only choose one option out of multiple options. Do not use radio buttons where there are more that 3 or 4 options. Consider using others.</TextRow>
        </div>
        <Image variant="fullwidth" withMargin="false" src="/assets/content-radiobuttons/single-select-example.png" alt="Radio Button default - application example" />
        <Image variant="fullwidth" withMargin="false" src="/assets/content-radiobuttons/too-many-options-example.png" alt="Radio Button - application example - avoid to use when too many options" />
      </Row>
      <Row itemsPerRow={4} rowWidth="full">
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Multi Select</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Use checkboxes when the user can choose more than one option out of a set of options.</TextRow>
        </div>
        <div>
          <Image variant="fullwidth" withMargin="false" src="/assets/content-radiobuttons/multi-select-example.png" alt="Checkbox - application example" />
        </div>
      </Row>
      <Row itemsPerRow={4} rowWidth="full">
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Simple On and Off</Header>
        <TextRow textStyle="body-large" spacing="in-columns">For simple options such as On v.s. Off (or True v.s. False), I recommand to use the Switch component to condense the user interface.</TextRow>
        </div>
        <div>
          <Image variant="fullwidth" withMargin="false" src="/assets/content-radiobuttons/on-and-off-avoid-example.png" alt="Avoid Radio Button - application example" />
        </div>
        <div>
          <Image variant="fullwidth" withMargin="false" src="/assets/content-radiobuttons/on-and-off-example.png" alt="Switch - application example" />
        </div>
      </Row>

      </>
    )}

    {selectedTab === 1 && (
      <>
        <Header tag="h2" textStyle="headline-med">Elements</Header>
        <Row><Table columns={columnsElement} data={dataElement} /></Row>
        <Header tag="h2" textStyle="headline-med">States</Header>
        <Row><Table columns={columnsState} data={dataState} /></Row>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>
        <LiveDemo
          component={RadioGroup}
          componentName="RadioGroup"
          propSchema={{
            name: {
              type: 'string',
              default: 'Demo-group',
              label: 'Group Name',
            },
            disabled: {
              type: 'boolean',
              default: false,
              label: 'Disabled',
            },
          }}
          previewWidth="100%"
          children={[
            <RadioButton
              key="option1"
              id="option1"
              name="demo-group"
              label="Option 1"
              checked={selected === 'option1'}
              onChange={() => setSelected('option1')}
            />,
            <RadioButton
              key="option2"
              id="option2"
              name="demo-group"
              label="Option 2"
              checked={selected === 'option2'}
              onChange={() => setSelected('option2')}
            />,
            <RadioButton
              key="option3"
              id="option3"
              name="demo-group"
              label="Option 3"
              disabled
              checked={selected === 'option3'}
              onChange={() => setSelected('option3')}
            />,
          ]}
        />
      </>
    )}
    </>
  );
}
