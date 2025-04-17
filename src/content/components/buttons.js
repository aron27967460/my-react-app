import React, { useState } from 'react';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import List, { ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';

const columns = [
  { header: 'Variant', accessor: 'variant', flex: 1 },
  { header: 'Usage', accessor: 'usage', flex: 1 },
  { header: 'Purpose', accessor: 'purpose', flex: 3 }
];

const data = [
  {
    variant: 'Outline',
    usage: 'Primary',
    purpose: 'Used as the primary button style for Anchor. Use outlined buttons for confirming action such as Confirm or Save.'
  },
  {
    variant: 'Text',
    usage: 'Secondary/Tertiary',
    purpose: 'Used as the default secondary button style for Anchor. Use text buttons for actions such as Cancel or Close.'
  },
  {
    variant: 'Underlined',
    usage: 'Secondary/Tertiary',
    purpose: 'An alternative secondary button style after text buttons. Consider using underlined buttons when there are more than 3 buttons for better visual separation.'
  },
  {
    variant: 'Elevated',
    usage: 'Primary',
    purpose: 'Typically used for stand alone actions or fixed overlay button. For example, a back-to-top button on top of content.'
  }
];


export default function ContentButtons() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
    <Header tag="h1" textStyle="display-med">Buttons</Header>
    <TextRow textStyle="title-large" colorStyle="default">Buttons empower people to take actions. From going to the next page to confirming a purchase. buttons are designed to capture people’s intent.</TextRow>
    <Tabs onTabChange={(index) => setSelectedTab(index)}>
        <Tab>Usage</Tab>
        <Tab>Style</Tab>
    </Tabs>
    {selectedTab === 0 && (
      <>
      <Header tag="h2" textStyle="headline-med">Varients</Header>
      <Row><Table columns={columns} data={data} /></Row>
      <Header tag="h2" textStyle="headline-med">Anatomy</Header>
      <Row itemsPerRow={4} rowWidth="full" >
      <div>
      <Image variant="fullwidth" src="/assets/anatomy1.png" alt="button anatomy example 1" />
      <TextRow textStyle="body-large-emphasized" spacing="in-columns">Outlined Button</TextRow>
      <List>
        <ListItem>A. Label</ListItem>
        <ListItem>B. Compound-label (optional)</ListItem>
        <ListItem>C. Icon (optional)</ListItem>
        <ListItem>D. Container</ListItem>
      </List>
      </div>
      <div>
      <Image variant="fullwidth" src="/assets/anatomy2.png" alt="button anatomy example 2" />
      <TextRow textStyle="body-large-emphasized" spacing="in-columns">Text Button</TextRow>
      <List>
        <ListItem>A. Label</ListItem>
        <ListItem>C. Icon (optional)</ListItem>
      </List>
      </div>
      <div>
      <Image variant="fullwidth" src="/assets/anatomy3.png" alt="button anatomy example 3" />
      <TextRow textStyle="body-large-emphasized" spacing="in-columns">Icon Button</TextRow>
      <List>
        <ListItem>C. Icon</ListItem>
        <ListItem>D. Container</ListItem>
        <ListItem>A. Label</ListItem>
      </List>
      </div>
      <div>
      <Image variant="fullwidth" src="/assets/anatomy4.png" alt="button anatomy example 4" />
      <TextRow textStyle="body-large-emphasized" spacing="in-columns">Elevated Button</TextRow>
      <List>
        <ListItem>C. Icon (optional)</ListItem>
        <ListItem>D. Container</ListItem>
        <ListItem>A. Label</ListItem>
      </List>
      </div>
      </Row>
      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={2} rowWidth="60">
      <div>
        <TextRow textStyle="body-large-emphasized" spacing="in-columns">Primary + Secondary</TextRow>
        <TextRow textStyle="body-large" spacing="in-columns">The general role when mixing between button styles is to use outlined as the primary actions while employing text style for any secondary or tertiary actions.</TextRow>
      </div>
      <div>
        <Image variant="inline" src="/assets/button-application1.png" alt="button application example 1" />
      </div>
      </Row>
      <Row itemsPerRow={2} rowWidth="60">
      <div>
        <TextRow textStyle="body-large-emphasized" spacing="in-columns">Secondary/Tertiary Only</TextRow>
        <TextRow textStyle="body-large" spacing="in-columns">Generally, text buttons are used as the default secondary and tertiary button style for Anchor. However, in situations where there are four or more actions or when buttons are stacked, consider using underlined style as alternative for better visual separation.</TextRow>
      </div>
      <div>
        <Image variant="inline" src="/assets/button-application2.png" alt="button application example 2" />
      </div>
      </Row>
      <Row itemsPerRow={2} rowWidth="60">
      <div>
        <TextRow textStyle="body-large-emphasized" spacing="in-columns">Over Content</TextRow>
        <TextRow textStyle="body-large" spacing="in-columns">While generally not recommended, when using a button over content, employ the elevated style.</TextRow>
      </div>
      <div>
        <Image variant="inline" src="/assets/button-application3.png" alt="button application example 3" />
      </div>
      </Row>
      <Row itemsPerRow={2} rowWidth="60">
      <div>
        <TextRow textStyle="body-large-emphasized" spacing="in-columns">Compound Label</TextRow>
        <TextRow textStyle="body-large" spacing="in-columns">Used as ways to combine key action and information, The goal of a compound label is to reinforce user’s confidence in performing the action by surfacing that most relevant information.</TextRow>
      </div>
      <div>
        <Image variant="inline" src="/assets/button-application4.png" alt="button application example 4" />
      </div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Button Alignment</Header>
      <Row itemsPerRow={2} rowWidth="60">
      <TextRow textStyle="body-large" spacing="in-columns">In terms of button alignments. Generally, it depends on where the buttons are situated within the page. Within a container, if the buttons are placed at the bottom right corner, then depending on the orientation of the group (e.g. horizontal vs. vertical), they should be either aligned to the right or bottom.</TextRow>
      <Image variant="inline" src="/assets/button-alignment.png" alt="button alignment" /></Row>

      <Header tag="h2" textStyle="headline-med">Label Alignment</Header>
      <Row itemsPerRow={2} rowWidth="60">
      <TextRow textStyle="body-large" spacing="in-columns">When it comes to button label alignment in Anchor, they are typically either aligned to the left or center. While mostly with no set rules, when the label strings have significant length difference, it is recommended to align the button labels to the left for better readibility.</TextRow>
      <Image variant="inline" src="/assets/label-alignment.png" alt="button label alignment" /></Row>
      </>
    )}

    {selectedTab === 1 && (
      <>
        <Header tag="h2">Style</Header>
        <TextRow textStyle="body-large">You can define style specs and token usage here.</TextRow>
      </>
    )}
    </>
  );
}
