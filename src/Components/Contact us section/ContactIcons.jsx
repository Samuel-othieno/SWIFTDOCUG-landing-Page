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
    { title: 'Email', description: 'swiftdoc@gmail.com', icon: IconAt },
    { title: 'Phone', description: '+256781202892', icon: IconPhone },
    { title: 'Address', description: 'Kampala, Uganda', icon: IconMapPin },
    { title: 'Working hours', description: '24/7', icon: IconSun },
];

export function ContactIconsList() {
    const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack>{items}</Stack>;
}
