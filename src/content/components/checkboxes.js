import React, { useState } from 'react';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import { List, ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';
import { Checkbox } from '../../checkboxes/checkbox';

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
    variant: 'Contained',
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
    element: 'container',
    class: 'checkbox-wrapper, wrapper-style-*',
    property: 'border',
    token: 'interactive/surface-border'
  },
  {
    element: 'checkbox',
    class: 'checkmark',
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
    element: 'checkbox',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: 'Pressed',
    element: 'checkbox',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: 'Focused',
    element: 'checkbox',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: 'Disabled',
    element: 'checkbox',
    property: 'background-color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: 'Checked.Hover',
    element: 'checkbox',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: 'Checked.Pressed',
    element: 'checkbox',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: 'Checked.Focused',
    element: 'checkbox',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: 'Checked.Disabled',
    element: 'checkbox',
    property: 'background-color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  }
];


export default function ContentCheckboxes() {
  const [selectedTab, setSelectedTab] = useState(0);
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
      <Row itemsPerRow={3} rowWidth="full">
      <div style={{ border: '1px solid var(--border-tertiary-color)', marginTop: 'var(--spacing-2x)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}>
        <Checkbox label='Label' variant='default'/>
      </div>
      <div style={{ border: '1px solid var(--border-tertiary-color)', marginTop: 'var(--spacing-2x)', padding: 'var(--spacing-8x) 0', textAlign: 'center'}}>
        <Checkbox label='Label' variant='contained'/>
      </div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Default for Multi Select</Header>
        <TextRow textStyle="body-large" spacing="in-columns">When there are multiple options within a set, it is recommended to use the default inline style for organizations.</TextRow>
        </div>
        <div>
          <Image withMargin="false" src="/assets/content-checkboxes/application1.png" alt="Checkbox default - application example" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Default inline styles for to select multipel options out of a set, also use for multi-level (such as a to-do list).</TextRow>
        </div>
      </Row>

      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Standalone</Header>
        <TextRow textStyle="body-large" spacing="in-columns">For standlone option, consider using the alternative contained style for options that require more user's attention.</TextRow>
        </div>
        <div>
          <Image withMargin="false" src="/assets/content-checkboxes/application2.png" alt="Checkbox standalone - application example" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Use outlined style for standalone actions.</TextRow>
        </div>
      </Row>

      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Mixing Styles</Header>
        <TextRow textStyle="body-large" spacing="in-columns">In the situation where there are a various singular and multiple option sets, mixing checkbox styles can become a viable option, particularly if there are prominent options.</TextRow>
        </div>
        <div>
          <Image withMargin="false" src="/assets/content-checkboxes/application3.gif" alt="Checkbox mix with default and standalone - application example" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Within the same section, checkbox styles can be mixed.</TextRow>
        </div>
      </Row>

      </>
    )}

    {selectedTab === 1 && (
      <>
        <Header tag="h2" textStyle="headline-med">Elements</Header>
        <Row><Table columns={columnsElement} data={dataElement} /></Row>

        <Header tag="h2" textStyle="headline-med">Anatomy</Header>
        <Row itemsPerRow={4} rowWidth="full" >
        <div style={{ border: '1px solid var(--border-tertiary-color)'}}>
        <Image variant="fullwidth" withMargin="false" src="/assets/content-checkboxes/checkbox-anatomy.png" alt="checkbox anatomy example 1" />
        </div>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Default</Header>
        <List>
          <ListItem title="A. Container (Visually absent)"/>
          <ListItem title="B. Checkbox"/>
          <ListItem title="C. Label"/>
        </List>
        </div>
        <div style={{ border: '1px solid var(--border-tertiary-color)'}}>
        <Image variant="fullwidth" withMargin="false" src="/assets/content-checkboxes/checkbox2-anatomy.png" alt="checkbox anatomy example 2" />
        </div>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Contained</Header>
        <List>
        <ListItem title="A. Container"/>
        <ListItem title="B. Checkbox"/>
        <ListItem title="C. Label"/>
        </List>
        </div>
        </Row>

        <Header tag="h2" textStyle="headline-med">States</Header>
        <Row><Table columns={columnsState} data={dataState} /></Row>
        <Row itemsPerRow={4}>
        <Image src="/assets/content-checkboxes/hover.png" alt="checkbox hover state" withMargin="false"/>
        <Image src="/assets/content-checkboxes/pressed.png" alt="checkbox pressed state" withMargin="false"/>
        <Image src="/assets/content-checkboxes/focus.png" alt="checkbox focus state" withMargin="false"/>
        <Image src="/assets/content-checkboxes/disabled.png" alt="checkbox disabled state" withMargin="false"/>
        <Image src="/assets/content-checkboxes/selected-hover.png" alt="checkbox checked.hover state" withMargin="false"/>
        <Image src="/assets/content-checkboxes/selected-pressed.png" alt="checkbox checked.pressed state" withMargin="false"/>
        <Image src="/assets/content-checkboxes/selected-focus.png" alt="checkbox checked.focus state" withMargin="false"/>
        <Image src="/assets/content-checkboxes/selected-disabled.png" alt="checkbox checked.disabled state" withMargin="false"/>
        </Row>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>
        <LiveDemo
            component={Checkbox}
            componentName="Checkbox"
            propSchema={{
              variant: {
                label:'Variant',
                type: 'enum',
                options: ['default', 'contained'],
                default: 'default'
              },
              label: {
                label:'Text Label',
                type: 'string',
                default: 'Label'
              },
              disabled: {
                label:'Disabled',
                type: 'boolean',
              },
              hideLabel: {
                label:'Hide Label',
                type: 'boolean',
              },
              noWrapper: {
                label:'No Wrapper',
                type: 'boolean',
              }
            }}
          />
      </>
    )}
    </>
  );
}
