import React, { useState } from 'react';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import { Avatar } from '../../avatars/avatar';
import { List, ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';
import { Switch } from '../../switches/switch';
import { Checkbox } from '../../checkboxes/checkbox';
import { ReactComponent as ChevronIcon } from '../../assets/icons/chevronRight.svg';
import { ReactComponent as PersonIcon } from '../../assets/icons/person.svg';



const columnsElement = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'}
];

const dataElement = [
  {
    element: 'list',
    class: 'list',
    property: ''
  },
  {
    element: 'list item',
    class: 'list-item',
    property: 'background-color, padding'
  },
  {
    element: 'item title',
    class: 'list-itme-title',
    property: 'color'
  },
  {
    element: 'supporting text',
    class: 'list-item-support',
    property: 'color'
  },
  {
    element: 'input control (e.g., switch)',
    class: 'list-item-left, list-item-right',
    property: ''
  },
  {
    element: 'icon',
    class: 'list-item-left, list-item-right',
    property: 'fill'
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
    element: 'list-item-wrapper.interactiveHighlight',
    property: 'background color',
    token: 'background-secondary-color',
    effect: ''
  },
  {
    state: '',
    element: 'title & support text',
    property: 'text-shadow',
    token: '',
    effect: 'hover-drop-shadow'
  },
  {
    state: 'Pressed',
    element: 'list-item-wrapper.interactiveHighlight',
    property: 'background color',
    token: 'background-secondary-color',
    effect: ''
  },
  {
    state: 'Focused',
    element: 'list-item-wrapper.interactiveHighlight',
    property: 'background color',
    token: 'background-secondary-color',
    effect: ''
  },
  {
    state: 'Disabled',
    element: 'list-item-title',
    property: 'color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  ,
  {
    state: '',
    element: 'list-item-support',
    property: 'color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'list-item-right/list-item-left',
    property: 'fill (if icon defined)',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
];


export default function ContentLists() {
  const [selectedTab, setSelectedTab] = useState(0);

  const [isOn, setIsOn] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(false);



  return (
    <>
    <Header tag="h1" textStyle="display-med">Lists</Header>
    <TextRow textStyle="title-large" colorStyle="default">Lists are a groups of options or actions presented in a vertical arrangement.
    </TextRow>
    <Tabs onTabChange={(index) => setSelectedTab(index)}>
        <Tab>Usage</Tab>
        <Tab>Style</Tab>
        <Tab>Demo</Tab>
    </Tabs>

    {selectedTab === 0 && (
      <>
      <Header tag="h2" textStyle="headline-med">Interactive Examples</Header>
      <TextRow textStyle="body-large" colorStyle="default">Depending on the usage, different input controls, icons and avatars can be inserted in either the leading or trailing spot from the list item content. Below are some of the interactive examples.</TextRow>
      <Row itemsPerRow={3} rowWidth="full">
      <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-0x) var(--spacing-2x)', display: 'flex', justifyContent: 'center', alignItems: 'center', height:'280px'}}>
      <List vPadding="1p5x" interactiveHighlight>
        <ListItem title="Item with Switch" supportText="This is a list item with switch"  trailing={<Switch checked={isOn} onChange={(nextValue) => setIsOn(nextValue)}/>}/>
        <ListItem title="Item with Switch" supportText="This is a list item with switch" trailing={<Switch checked={isOn2} onChange={(nextValue) => setIsOn2(nextValue)}/>}/>
        <ListItem title="Item with Switch" supportText="This is a list item with switch" trailing={<Switch checked={isOn3} onChange={(nextValue) => setIsOn3(nextValue)}/>}/>
      </List>
      </div>

      <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-0x) var(--spacing-2x)', display: 'flex', justifyContent: 'center', alignItems: 'center', height:'280px'}}>
      <List vPadding="1p5x" interactiveHighlight>
        <ListItem as="a"  href="/" title="Item with Icon" supportText="This is a list item with icon" trailing={<ChevronIcon fill="black"/>}/>
        <ListItem as="a"  href="/"title="Item with Icon" supportText="This is a list item with icon" trailing={<ChevronIcon fill="black"/>}/>
        <ListItem as="a"  href="/"title="Item with Icon" supportText="This is a list item with icon" trailing={<ChevronIcon fill="black"/>}/>
      </List>
      </div>

      <div style={{ border: '1px solid var(--border-tertiary-color)', padding: '0 var(--spacing-2x)', display: 'flex', justifyContent: 'center', alignItems: 'center', height:'280px'}}>
      <List vPadding="1x" interactiveHighlight>
        <ListItem title="Item with Checkbox" supportText="This is a list item with checkbox" trailing={<Checkbox id="checkbox-1"/>}/>
        <ListItem title="Item with Checkbox" supportText="This is a list item with checkbox" trailing={<Checkbox id="checkbox-2"/>}/>
        <ListItem title="Item with Checkbox" supportText="This is a list item with checkbox" trailing={<Checkbox id="checkbox-3"/>}/>
      </List>
      </div>
      </Row>

      <Row itemsPerRow={3} rowWidth="full">
      <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-0x) var(--spacing-2x)', display: 'flex', justifyContent: 'center', alignItems: 'center', height:'280px'}}>
      <List vPadding="1p5x" interactiveHighlight>
        <ListItem as="a" href="/" title="Item with Avatar" supportText="This is a list item with avatar" leading={<Avatar src={"/assets/aron.jpeg"} alt={"Aron Chen"} fallback={"AC"}/>}/>
        <ListItem as="a" href="/" title="Item with Avatar" supportText="This is a list item with avatar" leading={<Avatar src={"/assets/aron.jpeg"} alt={"Aron Chen"} fallback={"AC"}/>}/>
        <ListItem as="a" href="/" title="Item with Avatar" supportText="This is a list item with avatar" leading={<Avatar src={"/assets/aron.jpeg"} alt={"Aron Chen"} fallback={"AC"}/>}/>
      </List>
      </div>

      <div style={{ border: '1px solid var(--border-tertiary-color)', padding: 'var(--spacing-0x) var(--spacing-2x)', display: 'flex', justifyContent: 'center', alignItems: 'center', height:'280px'}}>
      <List vPadding="1p5x" interactiveHighlight>
        <ListItem as="a"  href="/" title="Item with Icon" supportText="This is a list item with icon" leading={<PersonIcon fill="black"/>}/>
        <ListItem as="a"  href="/"title="Item with Icon" supportText="This is a list item with icon" leading={<PersonIcon fill="black"/>}/>
        <ListItem as="a"  href="/"title="Item with Icon" supportText="This is a list item with icon" leading={<PersonIcon fill="black"/>}/>
      </List>
      </div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">General Guideline</Header>
        <TextRow textStyle="body-large" spacing="in-columns">By default, each list item within the same set should consist of the same elements (e.g., avatars, photos, input controls, icons).</TextRow>
        </div>
        <div>
          <Image variant="fullspan" withMargin="false" src="/assets/content-lists/application1.png" alt="List - application example1" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Use the same composition across all list items.</TextRow>
        </div>
      </Row>

      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Tailored Spacing</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Depending on the content, adjust the vertical spacing between list items.</TextRow>
        </div>
        <div>
          <Image variant="fullspan" withMargin="false" src="/assets/content-lists/application2.png" alt="List - application example 2" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Avoid using a switch for inputs that require a neutral starting point.</TextRow>
        </div>
      </Row>

      <Row itemsPerRow={3}>
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Interactive States</Header>
        <TextRow textStyle="body-large" spacing="in-columns">Depending on usage, apply interactive states (e.g., hover, pressed) to list items. On desktop, ensure appropriate cursor responses for different interactions.</TextRow>
        </div>
        <div>
          <Image variant="fullspan" withMargin="false" src="/assets/content-lists/application3.png" alt="List - application example 3" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">List items that are interactive should reflect clear visual indications and states.</TextRow>
        </div>
        <div>
          <Image variant="fullspan" withMargin="false" src="/assets/content-lists/application4.png" alt="List - application example 4" />
          <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Static list items should have a regular cursor response like other text elements.</TextRow>
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
        <Image withMargin="false" variant="fullwidth" src="/assets/content-lists/list-anatomy.png" alt="list anatomy example" />
        <List>
          <ListItem title="A. Leading Slot - Avatar (optional)"/>
          <ListItem title="B. Container"/>
          <ListItem title="C. List Item Title"/>
          <ListItem title="D. Supporting Text (optional)"/>
          <ListItem title="E. Trailing Slot - Checkbox (optional)"/>
          <ListItem title="F. Leading Slot - Switch (optional)"/>
          <ListItem title="G. Trailing Slot - Icon (optional)"/>
        </List>
        </Row>

        <Header tag="h2" textStyle="headline-med">States</Header>
        <Row><Table columns={columnsState} data={dataState} /></Row>
        <Row itemsPerRow={4}>
        <Image src="/assets/content-lists/hover.png" alt="list hover state" withMargin="false"/>
        <Image src="/assets/content-lists/pressed.png" alt="list pressed state" withMargin="false"/>
        <Image src="/assets/content-lists/focus.png" alt="list focus state" withMargin="false"/>
        <Image src="/assets/content-lists/disabled.png" alt="list disabled state" withMargin="false"/>
        </Row>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>
        <LiveDemo
            component={List}
            componentName="Lists"
            propSchema={{
              vPadding: {
                type: 'enum',
                options: ['0x', '1x', '1p5x', '2x'],
                default: '1p5x',
                label: 'Vertical Spacing'
              },
              interactiveHighlight: {
                type: 'boolean',
                default: false,
                label: 'Interactive Highlight',
              }
            }}
            children={[
              <ListItem title="List Item" supportText="This is a supporting text for an item"/>,
              <ListItem title="List Item" supportText="This is a supporting text for an item"/>,
              <ListItem title="List Item" supportText="This is a supporting text for an item"/>,
            ]}
          />
      </>
    )}
    </>
  );
}
