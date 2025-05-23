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
import { Dropdown } from '../../dropdowns/dropdown';

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Banana", value: "Banana" },
  { label: "Cherry", value: "Cherry" },
];

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
    variant: 'Inline',
    usage: 'Default',
    purpose: 'Used as the default style for dropdown.'
  },
  {
    variant: 'Stacked',
    usage: 'For compact horizontal space',
    purpose: 'An alternative style when there is a lack of horizontal space.'
  }
];

const columnsElement = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'},
];

const dataElement = [
  {
    element: 'label container',
    class: 'dropdown-label-style',
    property: 'border',
  },
  {
    element: 'label container',
    class: 'dropdown-label-style',
    property: 'background-size',
  },
  {
    element: 'label',
    class: 'dropdown-label',
    property: 'color',
  },
  {
    element: 'dropdown button',
    class: 'dropdown-button',
    property: 'background-size',
  },
  {
    element: 'button label',
    class: 'dropdown-label-text',
    property: 'color',
  },
  {
    element: 'dropwdown indicator',
    class: 'dropdown-icon',
    property: 'fill, transform',
  },
  {
    element: 'list container',
    class: 'dropdown-list',
    property: '',
  },
  {
    element: 'list item container',
    class: 'dropdown-item',
    property: 'background-color',
  },
  {
    element: 'list item label',
    class: 'dropdown-item-label',
    property: 'color',
  },
  {
    element: 'list item checkbox',
    class: 'checkbox',
    property: 'background-size',
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
    element: 'label container',
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
    state: 'Pressed',
    element: 'label container',
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
    state: 'Focused.Open',
    element: 'dropdown indicator',
    property: 'transform',
    token: '',
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
    state: '',
    element: 'label container',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: 'Disabled',
    element: 'label container',
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
  {
    state: '',
    element: 'dropdown button container',
    property: 'border-color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'dropdown button label',
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



export default function ContentDropdowns() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState('');

  const dropdownOptions = [
    { label: 'Apples', value: 'Apples' },
    { label: 'Oranges', value: 'Oranges' },
    { label: 'Bananas', value: 'Bananas' },
  ];

  const propSchema = {
    label: { type: 'string', default: 'Fruits', label: 'Label' },
    placeholder: { type: 'string', default: 'Select fruit...', label: 'Placeholder' },
    width: { type: 'string', default: '200px', label: 'Width' },
    multiple: { type: 'boolean', default: false, label: 'Multi-select' },
    labelStyle: {
      type: 'enum',
      options: ['stacked', 'inline'],
      default: 'stacked',
      label: 'Label Style'
    },
    hideLabel: { type: 'boolean', default: false, label: 'Hide Label' },
  };


  return (
    <>
    <Header tag="h1" textStyle="display-med">Dropdowns</Header>
    <TextRow textStyle="title-large" colorStyle="default">Dropdowns present choices—helping users fill forms, filter content, and sort results with focused intent.
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
      <Header tag="h3"  textStyle="title-med">Interactive Examples</Header>
      <Row itemsPerRow={3} rowWidth="full">
        <div style={{border: '1px solid var(--border-tertiary-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', height:'200px'}}>
        <Dropdown
          label="Fruits"
          options={options}
          value={selected}
          onChange={setSelected}
          labelStyle="inline"
        />
        </div>
        <div style={{border: '1px solid var(--border-tertiary-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', height:'200px'}}>
        <Dropdown
          label="Fruits"
          options={options}
          value={selected}
          onChange={setSelected}
          labelStyle="stacked"
        />
        </div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Applications</Header>

      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">General Usage</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Consider using dropdowns when there are many options to select from a set of options.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-dropdowns/application1-example.png" alt="dropdown application example 1 - do" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Use dropdowns when there are many options to select from a set of options.</TextRow>
      </div>
      </Row>

      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Alternative Components</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Consider using radio buttons or checkboxes when there are only 2 or 3 options. This allows users choose their option(s) without the extra interaction.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-dropdowns/application2-example.png" alt="dropdown application example 2 - do" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Consider using radio buttons or checkboxes when there are fewer options.</TextRow>
      </div>
      </Row>

      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Use Multi Select with Caution</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Only use multi-select dropdown when users do not necessarily need to see all options. Otherwise, consider using chips for glancing and simplified interaction.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-dropdowns/application3-example.png" alt="dropdown application example 3 - do" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">In certain usage, consider using chips than employing a multi-select dropdown.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-dropdowns/application4-example.png" alt="dropdown application example 4 - caution" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">If the list is long, be caustious of using dropdown.</TextRow>
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
        <Image variant="fullwidth" src="/assets/content-dropdowns/dropdown-anatomy1.png" alt="dropdown anatomy example 1" />
        </div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Dropdown - Collapsed</Header>
        <List>
          <ListItem>A. Label</ListItem>
          <ListItem>B. Label Container</ListItem>
          <ListItem>C. Input</ListItem>
          <ListItem>D. Dropdown Indicator</ListItem>
          <ListItem>E. Input Container</ListItem>
        </List>
        </div>
        <div>
        <div style={{ border: '1px solid var(--border-tertiary-color)'}}>
        <Image variant="fullwidth" src="/assets/content-dropdowns/dropdown-anatomy2.png" alt="dropdown anatomy example 2" />
        </div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Dropdown - Expanded</Header>
        <List>
        <ListItem>F. List Container</ListItem>
        <ListItem>G. List Item Container</ListItem>
        <ListItem>H. Item Label</ListItem>
        <ListItem>I. Checkbox (Only for multi select)</ListItem>
        </List>
        </div>
        </Row>

        <Header tag="h2" textStyle="headline-med">States</Header>
        <Row><Table columns={columnsState} data={dataState} /></Row>
        <Row itemsPerRow={4}>
        <Image src="/assets/content-dropdowns/hover.png" alt="dropdown hover state" withMargin="false"/>
        <Image src="/assets/content-dropdowns/pressed.png" alt="dropdown pressed state" withMargin="false"/>
        <Image src="/assets/content-dropdowns/focus.png" alt="dropdown focus state" withMargin="false"/>
        <Image src="/assets/content-dropdowns/disabled.png" alt="dropdown disabled state" withMargin="false"/>
        </Row>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>

        <LiveDemo
          component={Dropdown}
          componentName="Dropdown"
          propSchema={propSchema}
          previewWidth="300px"
        >
          {(props) => (
            <Dropdown
              {...props}
              value={value}
              onChange={setValue}
              options={dropdownOptions}
            />
          )}
        </LiveDemo>
      </>
    )}
    </>
  );
}
