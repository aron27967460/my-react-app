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
import { Switch } from '../../switches/switch';

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
  { header: 'Property', accessor: 'property'}
];

const dataElement = [
  {
    element: 'container',
    class: 'switch',
    property: ''
  },
  {
    element: 'track',
    class: 'track',
    property: 'border-color'
  },
  {
    element: '',
    class: '',
    property: 'background-size'
  },
  {
    element: 'toggle',
    class: 'toggle',
    property: 'background-color'
  },
  {
    element: '',
    class: '',
    property: 'height & width'
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
    element: 'toggle',
    property: 'height & width',
    token: '',
    effect: ''
  },
  {
    state: 'Pressed',
    element: 'toggle',
    property: 'height & width',
    token: '',
    effect: ''
  },
  {
    state: 'Focused',
    element: 'toggle',
    property: 'height & width',
    token: '',
    effect: ''
  },
  {
    state: 'Disabled',
    element: 'track',
    property: 'border-color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'toggle',
    property: 'background-color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: 'Checked',
    element: 'track',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'toggle',
    property: 'background-color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'toggle',
    property: 'width & height',
    token: '',
    effect: ''
  },
  {
    state: '',
    element: 'toggle',
    property: 'transformX',
    token: '',
    effect: ''
  },
  {
    state: 'Checked:Hover',
    element: 'toggle',
    property: 'height & width',
    token: '',
    effect: ''
  },
  {
    state: '',
    element: 'track',
    property: '',
    token: '',
    effect: 'hover-drop-shadow'
  },
  {
    state: 'Checked:Pressed',
    element: 'toggle',
    property: 'height & width',
    token: '',
    effect: ''
  },
  {
    state: 'Checked:Focused',
    element: 'toggle',
    property: 'height & width',
    token: '',
    effect: ''
  },
  {
    state: 'Checked.Disabled',
    element: 'track',
    property: 'border-color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'track',
    property: 'background-color',
    token: 'interactive/surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'toggle',
    property: 'background-color',
    token: 'interactive/on-surface-disabled',
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
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState('option1');

  const [isOn, setIsOn] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const options = [
    { id: 'option1', label: 'Option 1' },
    { id: 'option2', label: 'Option 2' },
    { id: 'option3', label: 'Option 3'},
  ];


  return (
    <>
    <Header tag="h1" textStyle="display-med">Switches</Header>
    <TextRow textStyle="title-large" colorStyle="default">Switches enable quick, confident choices—turning settings on or off with a single tap.
    </TextRow>
    <Tabs onTabChange={(index) => setSelectedTab(index)}>
        <Tab>Usage</Tab>
        <Tab>Style</Tab>
        <Tab>Demo</Tab>
    </Tabs>

    {selectedTab === 0 && (
      <>
      <Row itemsPerRow={1} rowWidth="full">
      <div style={{border: '1px solid var(--border-tertiary-color)', marginTop: 'var(--spacing-2x)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}>
      <Switch
        checked={isOn}
        onChange={(nextValue) => setIsOn(nextValue)}
        ariaLabel="Enable dark mode"
        disabled={false}
        />
      </div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Common Usage</Header>
        <TextRow textStyle="body-large" spacing="in-columns">By default, switches are best to use for simple binary on and off actions (e.g., settings). By tapping on switch, changes will immediately apply.</TextRow>
        </div>
        <div>
          <Image variant="fullspan" withMargin="false" src="/assets/content-switches/application1-example.png" alt="Switch - application example" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Use switch for simple binary actions, for instance on and off.</TextRow>
        </div>
      </Row>

      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Avoid Using for Explicit Consent</Header>
        <TextRow textStyle="body-large" spacing="in-columns">While switches technically work, they imply a default choice—so in contexts requiring explicit consent, a neutral-starting input like a checkbox is more appropriate.</TextRow>
        </div>
        <div>
          <Image variant="fullspan" withMargin="false" src="/assets/content-switches/application2-example.png" alt="Switch - application example 2" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Avoid using switch for input that requires neutral-starting point.</TextRow>
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
        <div>
        <div style={{ border: '1px solid var(--border-tertiary-color)'}}>
        <Image variant="fullwidth" src="/assets/content-switches/switch-off-anatomy.png" alt="switch off anatomy example" />
        </div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Switch - Off</Header>
        <List>
          <ListItem>A. Track</ListItem>
          <ListItem>B. Toggle</ListItem>
        </List>
        </div>
        <div>
        <div style={{ border: '1px solid var(--border-tertiary-color)'}}>
        <Image variant="fullwidth" src="/assets/content-switches/switch-on-anatomy.png" alt="switch on anatomy example" />
        </div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Switch - On</Header>
        <List>
          <ListItem>A. Track</ListItem>
          <ListItem>B. Toggle</ListItem>
        </List>
        </div>
        </Row>

        <Header tag="h2" textStyle="headline-med">States</Header>
        <Row><Table columns={columnsState} data={dataState} /></Row>
        <Row itemsPerRow={4}>
        <Image src="/assets/content-switches/hover.png" alt="switch hover state" withMargin="false"/>
        <Image src="/assets/content-switches/pressed.png" alt="switch pressed state" withMargin="false"/>
        <Image src="/assets/content-switches/focus.png" alt="switch focus state" withMargin="false"/>
        <Image src="/assets/content-switches/disabled.png" alt="switch disabled state" withMargin="false"/>
        <Image src="/assets/content-switches/checked-hover.png" alt="switch checked.hover state" withMargin="false"/>
        <Image src="/assets/content-switches/checked-pressed.png" alt="switch checked.pressed state" withMargin="false"/>
        <Image src="/assets/content-switches/checked-focus.png" alt="switch checked.focus state" withMargin="false"/>
        <Image src="/assets/content-switches/checked-disabled.png" alt="switch checked.disabled state" withMargin="false"/>
        </Row>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>
        <LiveDemo
          component={Switch}
          componentName="Switch"
          propSchema={{
            checked: {
              type: 'boolean',
              default: false,
              label: 'Checked',
            },
            disabled: {
              type: 'boolean',
              default: false,
              label: 'Disabled',
            },
            ariaLabel: {
              type: 'string',
              default: 'Toggle switch',
              label: 'ARIA Label',
            },
          }}
        />
      </>
    )}
    </>
  );
}
