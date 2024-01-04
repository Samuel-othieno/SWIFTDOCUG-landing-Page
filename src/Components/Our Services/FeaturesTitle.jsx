import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './FeaturesTitle.module.css';

const features = [
    {
        title: 'Virtual Consultations',
        description: 'Connect with top-tier healthcare professionals from the comfort of your home. Expert advice, just a click away.',
    },
    {      
        title: 'Prescription Deliveries',
        description: 'Skip the pharmacy queues! Enjoy the convenience of having your medications delivered right to your doorstep.',
    },
    {
        title: 'Home vaccinations',
        description:
            'Prioritize your health from the comfort of your home. Schedule home vaccinations and safeguard your well-being without the need to travel.',
    },
    {       
        title: 'Doctor Appointments',
        description:
            'Book appointmnets with skilled healthcare professionals at your convenience. Your pathway to in-person care made easy.',
    },
    {       
        title: 'Lab Sample Pickups',
        description:
            'No need to leave home for lab work. Schedule pickups for samples, and our professionals will collect them at yoyr convenience.',
    },
    {       
        title: '24/7 Health Support',
        description:
            'Round-the-clock access to health support. Your health doesn`t follow a schedule, and neither do we.',
    },
];

export function FeaturesTitle() {
    const items = features.map((feature) => (
        
        <div key={feature.title}>

            <Text fz="lg" mt="sm" fw={500}>
                {feature.title}
            </Text>
            <Text c="dimmed" fz="sm">
                {feature.description}
            </Text>
        </div>
    ));

    return (
        <div className={classes.wrapper} id='services'>
            <Title className={classes.title} order={2}>
                Our Services
            </Title>
            <Grid gutter={80}>
                <Grid.Col span={{ base: 12, md: 5 }}>

                    <img 
                    className='h-[100%] w-auto'
                    src="https://d1yei2z3i6k35z.cloudfront.net/5871553/656a231c4a2cb_african-female-doctor-wear-headset-600nw-1766357453.webp" alt="" />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 7 }}>
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
                        {items}
                    </SimpleGrid>
                </Grid.Col>
            </Grid>
        </div>
    );
}