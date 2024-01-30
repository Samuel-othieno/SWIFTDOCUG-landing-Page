import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
// import image from './image.svg';
import classes from './FaqWithImage.module.css';

export function ServicesImg() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
          <img
            className="h-[100%] w-auto"
            src="https://d1yei2z3i6k35z.cloudfront.net/5871553/656a231c4a2cb_african-female-doctor-wear-headset-600nw-1766357453.webp"
            alt=""
          />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
            Our Services
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.item} value="Virtual Consultations">
                <Accordion.Control>Virtual Consultations</Accordion.Control>
                <Accordion.Panel>Connect with top-tier healthcare professionals from the comfort of your home. Expert advice, just a click away.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="Prescription Deliveries">
                <Accordion.Control>Prescription Deliveries</Accordion.Control>
                <Accordion.Panel>Skip the pharmacy queues! Enjoy the convenience of having your medications delivered right to your doorstep.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="Home vaccinations">
                <Accordion.Control>Home vaccinations</Accordion.Control>
                <Accordion.Panel>Prioritize your health from the comfort of your home. Schedule home vaccinations and safeguard your well-being without the need to travel.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="Doctor Appointments">
                <Accordion.Control>
                Doctor Appointments
                </Accordion.Control>
                <Accordion.Panel>Book appointmnets with skilled healthcare professionals at your convenience. Your pathway to in-person care made easy.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="Lab Sample Pickups">
                <Accordion.Control>
                 Lab Sample Pickups
                </Accordion.Control>
                <Accordion.Panel>
                No need to leave home for lab work. Schedule pickups for samples, and our professionals will collect them at yoyr convenience.
                </Accordion.Panel>
              </Accordion.Item>
              
               <Accordion.Item className={classes.item} value="Health Support">
                <Accordion.Control>
                24/7 Health Support 
                </Accordion.Control>
                <Accordion.Panel>
                Round-the-clock access to health support. Your health doesn`t follow a schedule, and neither do we.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}