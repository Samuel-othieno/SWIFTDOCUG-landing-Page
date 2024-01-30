import { Title, Container, Accordion, ThemeIcon, rem } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import classes from "./FaqWithBg.module.css";

export function FaqWithBg() {
  return (
    <div className={classes.wrapper} id="FAQ">
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
          styles={{
            label: { color: "var(--mantine-color-black)" },
            item: { border: 0 },
          }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ThemeIcon>
          }
        >
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>Is SwiftDoc secure</Accordion.Control>
            <Accordion.Panel>
              Absolutely. We prioritize your privacy and security. We leverage
              blockchain technology to ensure robust data protection and secure
              management of your medical information.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>
              Can I preschedule appointments before the launch?
            </Accordion.Control>
            <Accordion.Panel>
            Currently, pre-scheduling is not available. We’ll announce when
              this feature becomes accessible. Join our waitlist and stay tuned
              for updates!
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>
              Can I be A beta tester for SwiftDoc?
            </Accordion.Control>
            <Accordion.Panel>
              Yes! You can be among the first to experience SwiftDoc by joining
              our waitlist for beta testing. Simply sign up, and you’ll receive
              notifications with exclusive details on how to participate. We
              value your input in shaping the future of SwiftDoc, and we can’t
              wait to have you on board!
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>
              What devices can I use to access SwiftDoc services?
            </Accordion.Control>
            <Accordion.Panel>
             
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>
              How do I provide feedback or suggestions before the launch?
            </Accordion.Control>
            <Accordion.Panel>
              We value your input! Feel free to share your feedback or
              suggestions by contacting our support team at
              support@swift-doc.com. We appreciate your contribution to making
              SwiftDoc better.
            </Accordion.Panel>
          </Accordion.Item>

        </Accordion>
      </Container>
    </div>
  );
}
