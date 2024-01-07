import React from 'react';
import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './FeaturesCards.module.css';

const mockdata = [
    {
        title: 'Get Started',
        description:
            'Download and install the app from your appstore or google playstore. Create your account, complete your profile, and verify your details',
        icon: IconGauge,
    },
    {
        title: 'Explore & Schedule',
        description:
            'Explore available services like virtual consultations and prescription deliveries. Schedule appointments at your convenienece with our flexible options.',
        icon: IconUser,
    },
    {
        title: 'Connect & Manage',
        description:
            'Connect with healthcare professionals fro expert advice. Easily manage prescriptions, schedule lab services, and monitor your health virtually!',
        icon: IconCookie,
    },
];

export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.blue[6]}
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            <Group justify="center">
                
                <Badge variant="filled" size="lg">
                    What awaits you
                </Badge>
            </Group>
             <p className="mt-6 text-lg leading-8 text-black">
            We understand the importance of your time and well-being. With SwiftDoc, quality healthcare is at your fingertips giving you the freedom to prioritize your health without compromising your schedule.
            </p>
            <Title order={2} className={classes.title} ta="center" mt="sm">
                 Very Easy to use, Just Following 3 Steps
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Your spot in the future of healthcare? Secure it now. 
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    );
}