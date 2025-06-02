import React, { useState } from 'react';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import { List, ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';
import { RadioGroup, RadioButton} from '../../radio-buttons/radio-button';


const columnsElement = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'},
];

const dataElement = [
  {
    element: 'radio set container',
    class: 'radio-group',
    property: ''
  },
  {
    element: 'radio container',
    class: 'radio-wrapper',
    property: ''
  },
  {
    element: 'radiomark',
    class: 'radiomark',
    property: 'background-size'
  },
  {
    element: 'label',
    class: 'label-text',
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

      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Single Select</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Use radio buttons when the user can only choose one option out of multiple options. Avoid using radio buttons where there are too many options, instead, consider using the Dropdown component.</TextRow>
        </div>
        <div>
        <Image variant="fullwidth" withMargin="false" src="/assets/content-radiobuttons/single-select-example.png" alt="Radio Button default - application example" />
        <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Use radio buttons for selecting one option out of a few options.</TextRow>
        </div>
        <div>
        <Image variant="fullwidth" withMargin="false" src="/assets/content-radiobuttons/too-many-options-example.png" alt="Radio Button - application example - avoid to use when too many options" />
        <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">When there are too many options, consider using the dropdown component instead.</TextRow>
        </div>
      </Row>
      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Multi Select</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Use checkboxes when the user can choose more than one option out of a set of options.</TextRow>
        </div>
        <div>
          <Image variant="fullwidth" withMargin="false" src="/assets/content-radiobuttons/multi-select-example.png" alt="Checkbox - application example" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Use checkboxes for multi-select.</TextRow>
        </div>
      </Row>
      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Simple On and Off</Header>
        <TextRow textStyle="body-large" spacing="in-columns">For simple options such as On v.s. Off (or True v.s. False), consider using the Switch component to condense the user interface.</TextRow>
        </div>
        <div>
          <Image variant="fullwidth" withMargin="false" src="/assets/content-radiobuttons/on-and-off-avoid-example.png" alt="Avoid Radio Button - application example" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Use radio buttons with caution for binary actions.</TextRow>
        </div>
        <div>
          <Image variant="fullwidth" withMargin="false" src="/assets/content-radiobuttons/on-and-off-example.png" alt="Switch - application example" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Use switch instead of simply binary actions.</TextRow>
        </div>
      </Row>

      </>
    )}

    {selectedTab === 1 && (
      <>
        <Header tag="h2" textStyle="headline-med">Elements</Header>
        <Row><Table columns={columnsElement} data={dataElement} /></Row>

        <Header tag="h2" textStyle="headline-med">Anatomy</Header>
        <Row itemsPerRow={2} rowWidth="full" >
        <div style={{ border: '1px solid var(--border-tertiary-color)'}}>
        <Image variant="fullwidth" src="/assets/content-radiobuttons/radiobutton-anatomy.png" alt="checkbox anatomy example 1" />
        </div>
        <div>
        <List>
          <ListItem title="A. Set Container"/>
          <ListItem title="B. Button Container"/>
          <ListItem title="C. Radiomark"/>
          <ListItem title="D. Label"/>
        </List>
        </div>
        </Row>

        <Header tag="h2" textStyle="headline-med">States</Header>
        <Row><Table columns={columnsState} data={dataState} /></Row>
        <Row itemsPerRow={4}>
        <Image src="/assets/content-radiobuttons/hover.png" alt="radio button state" withMargin="false"/>
        <Image src="/assets/content-radiobuttons/pressed.png" alt="radio button pressed state" withMargin="false"/>
        <Image src="/assets/content-radiobuttons/focus.png" alt="radio button focus state" withMargin="false"/>
        <Image src="/assets/content-radiobuttons/disabled.png" alt="radio button disabled state" withMargin="false"/>
        <Image src="/assets/content-radiobuttons/selected-hover.png" alt="radio button selected.hover state" withMargin="false"/>
        <Image src="/assets/content-radiobuttons/selected-pressed.png" alt="radio button selected.pressed state" withMargin="false"/>
        <Image src="/assets/content-radiobuttons/selected-focus.png" alt="radio button selected.focus state" withMargin="false"/>
        <Image src="/assets/content-radiobuttons/selected-disabled.png" alt="radio button selected.disabled state" withMargin="false"/>
        </Row>
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
