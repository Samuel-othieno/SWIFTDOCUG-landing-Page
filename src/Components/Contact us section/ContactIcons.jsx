import React from 'react';
import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';
import PropTypes from 'prop-types';

function ContactIcon({ icon, title, description, ...others }) {
    return (
        <div className={classes.wrapper} {...others}>
            <Box mr="md">
                {React.createElement(icon, { style: { width: rem(24), height: rem(24) } })}
            </Box>

            <div>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    );
}

ContactIcon.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
};

const MOCKDATA = [
    { title: 'Email', description: 'hello@mantine.dev', icon: IconAt },
    { title: 'Phone', description: '+49 (800) 335 35 35', icon: IconPhone },
    { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin },
    { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
];

export function ContactIconsList() {
    const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack>{items}</Stack>;
}
