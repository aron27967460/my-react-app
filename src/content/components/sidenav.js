import React, { useState } from 'react';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import { List, ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';
import SideNav from '../../navigation/side-nav';
import { TextField } from '../../textfields/textfield';
import { ReactComponent as PersonIcon } from '../../assets/icons/person.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';
import { ReactComponent as SettingIcon } from '../../assets/icons/setting.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';
import { Avatar } from '../../avatars/avatar';

const navSections = [
  {
    header: 'Main',
    align: 'top',
    items: [
      { key: 'home', label: 'Home', icon: <HomeIcon /> },
      { key: 'users', label: 'Users', icon: <PersonIcon /> },
      { key: 'stars', label: 'Favourites', icon: <StarIcon /> },
      { key: 'add', label: 'Create', icon: <AddIcon /> },
      { key: 'download', label: 'Downloads', icon: <DownloadIcon /> }
    ],
  },
  {
    header: 'More',
    align: 'bottom',
    items: [
      { key: 'setting', label: 'Setting', icon: <SettingIcon /> },
    ],
  },
];


const columnsVariant = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const dataVariant = [
  {
    variant: 'Flat',
    usage: 'Default',
    purpose: 'Default style.'
  },
  {
    variant: 'Elevated',
    usage: 'Alternative',
    purpose: 'An alternative style for more immersive experience.'
  }
];

const columnsNavState = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const dataNavState = [
  {
    variant: 'Expanded',
    usage: 'For tablet and desktop experience',
    purpose: 'Allows more options to be shown.'
  },
  {
    variant: 'Collapsed',
    usage: 'For minimized UI',
    purpose: 'Trades options to allow more screen real estate for users to consume main content.'
  }
];

const columnsElement = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'}
];

const dataElement = [
  {
    element: 'navigation wrapper',
    class: 'ver-nav, nav-style-${navStyle}',
    property: ''
  },
  {
    element: 'user profile',
    class: 'nav-user-profile, nav-user-profile-content',
    property: 'background-color'
  },
  {
    element: 'section header',
    class: 'nav-section-header',
    property: ''
  },
  {
    element: 'navigation item',
    class: 'nav-item',
    property: 'background-size, background-color'
  },
  {
    element: 'item label',
    class: 'nav-label',
    property: 'color, font-weight'
  },
  {
    element: 'item icon',
    class: 'nav-icon',
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
    element: 'nav item',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'item label',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'item icon',
    property: 'fill',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Pressed',
    element: 'nav item',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: '',
    element: 'item label',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'item icon',
    property: 'fill',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Disabled',
    element: 'item label',
    property: 'color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'item icon',
    property: 'fill',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: 'Active',
    element: 'nav item',
    property: 'background-color, border-right',
    token: 'interactive/surface-secondary',
    effect: ''
  },
  {
    state: '',
    element: 'item label',
    property: 'font-weight',
    token: 'font-weight-medium',
    effect: ''
  }
];



export default function ContentSideNav() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeKey, setActiveKey] = useState('home');


  const [textValue, setTextValue] = useState(""); // State for storing input value

  const handleChange = (e) => {
    setTextValue(e.target.value); // Update input value on change
  };


  return (
    <>
    <Header tag="h1" textStyle="display-med">Side Nav</Header>
    <TextRow textStyle="title-large" colorStyle="default">Side Nav provide access to primary destinations within an app/service, particularly in tablet and desktop screens.
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

        <div style={{backgroundColor: 'var(--background-secondary-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 'var(--spacing-2x)'}}>
        <SideNav
          sections={navSections}
          activeKey={activeKey}
          onNavigate={setActiveKey}
          userAvatar={<Avatar src="../../assets/aron.jpeg" alt="Aron Chen" fallback="AC" size={40} />}
          userLabel="Aron Chen"
          height="60vh"
        />
        </div>

        <div style={{backgroundColor: 'var(--background-secondary-color)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <SideNav
          sections={navSections}
          activeKey={activeKey}
          onNavigate={setActiveKey}
          navStyle='elevated'
          userAvatar={<Avatar src="../../assets/aron.jpeg" alt="Aron Chen" fallback="AC" size={40} />}
          userLabel="Aron Chen"
          height="60vh"
        />
        </div>

      </Row>

      <Header tag="h2" textStyle="headline-med">Navigation States</Header>
      <Row><Table columns={columnsNavState} data={dataNavState} /></Row>

      <Row itemsPerRow={3} rowWidth="full">

        <div style={{backgroundColor: 'var(--background-secondary-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 'var(--spacing-2x)'}}>
        <SideNav
          sections={navSections}
          activeKey={activeKey}
          onNavigate={setActiveKey}
          userAvatar={<Avatar src="../../assets/aron.jpeg" alt="Aron Chen" fallback="AC" size={40} />}
          userLabel="Aron Chen"
          height="60vh"
        />
        </div>

        <div style={{backgroundColor: 'var(--background-secondary-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 'var(--spacing-2x)'}}>
        <SideNav
          sections={navSections}
          activeKey={activeKey}
          onNavigate={setActiveKey}
          userAvatar={<Avatar src="../../assets/aron.jpeg" alt="Aron Chen" fallback="AC" size={40} />}
          userLabel="Aron Chen"
          height="60vh"
          isCollapsed
        />
        </div>

      </Row>

      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Choosing Styles</Header>
        <TextRow textStyle="body-large" spacing="in-columns">By default, the flat style separates the navigation from the content using a divider. For a more immersive experience, consider using the elevated style, which allows the background to bleed through the vertical navigation bar.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-vernav/application1.png" alt="vertical navigation application example 1 - flat style" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">By default, Side Nav is fixed to the left side of the viewport, with a divider on its right.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-vernav/application2.png" alt="vertical navigation example 2 - elevated style" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">When using the elevated style, it allows for a more immersive experience, with the content bleeding through the rest of the screen.</TextRow>
      </div>
      </Row>

      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Active State</Header>
        <TextRow textStyle="body-large" spacing="in-columns">When an navigation item is selected, the label should be bolded with a bar indicator on the side. The background can be optionally applied for visual emphasis.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-vernav/application3.png" alt="vertical navigation application example 3 - active state" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Active item should have bolded label, bar indicator and an optional grey backgorund color.</TextRow>
      </div>
      </Row>

      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Pushover or Scrim overlay</Header>
        <TextRow textStyle="body-large" spacing="in-columns">On narrower screens where the collapsed variant is used, two configurations can be applied when expanding the vertical navigation bar: pushover or scrim overlay. Use scrim overlay with caution, as it prevents users from interacting with the main content.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-vernav/application4.png" alt="vertical navigation application example 4 - collapsed style" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Pushover reconfigures the screen layout by pushing the main content to the right.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-vernav/application5.png" alt="vertical navigation example 5 - expanded style" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Scrim overlay disables interaction with the rest of the screen, allowing users to focus solely on navigation.</TextRow>
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
        <Image withMargin="false" variant="fullwidth" src="/assets/content-vernav/vernav-anatomy1.png" alt="side nav anatomy expanded example" />
        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Side Nav - Expanded Variant</Header>
        <List>
          <ListItem title="A. Wrapper"/>
          <ListItem title="B. User Profile"/>
          <ListItem title="C. Avatar"/>
          <ListItem title="D. User Title"/>
          <ListItem title="E. Section Header"/>
          <ListItem title="F. Nav Item"/>
          <ListItem title="G. Nav Item Icon"/>
          <ListItem title="H. Nav Item Label"/>
        </List>
        </div>
        </Row>

        <Row itemsPerRow={3} rowWidth="full">
        <Image withMargin="false" variant="fullwidth" src="/assets/content-vernav/vernav-anatomy2.png" alt="side nav anatomy collapsed example" />

        <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Side Nav - Collapsed Variant</Header>
        <List>
          <ListItem title="A. Wrapper"/>
          <ListItem title="B. User Profile"/>
          <ListItem title="C. Avatar"/>
          <ListItem title="F. Nav Item"/>
          <ListItem title="G. Nav Item Icon"/>
          <ListItem title="H. Nav Item Label"/>
        </List>
        </div>
        </Row>

        <Header tag="h2" textStyle="headline-med">States</Header>
        <Row><Table columns={columnsState} data={dataState} /></Row>
        <Row itemsPerRow={4}>
        <Image src="/assets/content-vernav/enabled.png" alt="navigation item enabled state" withMargin="false"/>
        <Image src="/assets/content-vernav/hover.png" alt="navigation item hover state" withMargin="false"/>
        <Image src="/assets/content-vernav/pressed.png" alt="navigation item pressed state" withMargin="false"/>
        <Image src="/assets/content-vernav/active.png" alt="navigation item active state" withMargin="false"/>
        <Image src="/assets/content-vernav/disabled.png" alt="navigation item disabled state" withMargin="false"/>
        </Row>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>

        <LiveDemo
          component={SideNav}
          componentName="Side Nav"
          propSchema={{
            navStyle: { type: 'enum', label: 'Style', options: ['flat', 'elevated'], default: 'flat' },
            isCollapsed: {type: 'boolean', label: 'Collapsed', default: false},
            height: { type: 'string', default: '100vh', label: 'Height'}
          }}
        >
          {(props) => (
            <SideNav
              {...props}
              sections={navSections}
              activeKey={activeKey}
              onNavigate={setActiveKey}
              userAvatar={<Avatar src="../../assets/aron.jpeg" alt="Aron Chen" fallback="AC" size={40} />}
              userLabel="Aron Chen"
            />
          )}
        </LiveDemo>
      </>
    )}
    </>
  );
}
