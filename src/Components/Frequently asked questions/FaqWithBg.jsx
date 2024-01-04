import { Title, Container, Accordion, ThemeIcon, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import classes from './FaqWithBg.module.css';

const placeholder =
  'Services coming soon';

export function FaqWithBg() {
  return (
    <div className={classes.wrapper} id='FAQ'>
      <Container size="sm">
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{ label: { color: 'var(--mantine-color-black)' }, item: { border: 0 } }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>Is SwiftDoc secure</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>How do I provide feedback or suggestions before the launch?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>Can I preschedule appointments before the launch?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>Can I be A beta tester for SwiftDoc?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>What devices can I use to access SwiftDoc services?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}