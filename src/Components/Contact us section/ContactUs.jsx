import React from 'react';
import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
  } from '@mantine/core';
  import { IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram, IconBrandFacebook} from '@tabler/icons-react';
  import { ContactIconsList } from './ContactIcons';
  import classes from './ContactUs.module.css';
import { ButtonProgress } from '../Buttons/ButtonProgress';
  
  const social = [IconBrandTwitter, IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram];

  const urls = ["https://x.com/swiftdocug?s=11&t=4ujeDMdfHJUCFdpRtiKOvA", "https://www.linkedin.com/company/swiftdoc/", "https://www.Facebook.com/", "https://www.Instagram.com/"]
  
  export function ContactUs() {
    const icons = social.map((Icon, index) => (
      <ActionIcon key={index} size={28} className={classes.social} variant="transparent" component='a' href={urls[index]} target='blank'>
        <Icon size="1.4rem" stroke={1.5} />
      </ActionIcon>
    ));
  
    return (
      <div className={classes.wrapper} id='contacts'>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
            Do you want to get in touch with us?
            </Text>
  
            <ContactIconsList />
  
            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
            <h1 className='text-white font-semibold text-center'>Join our 100+ pals on our waitlist!</h1>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to join the waitlist"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
  
            <Group justify="flex-end" mt="md">
              <ButtonProgress/>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    );
  }