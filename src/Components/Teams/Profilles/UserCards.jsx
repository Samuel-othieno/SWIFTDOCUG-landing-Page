import { Avatar, Text, Group } from "@mantine/core";
import { IconBrandLinkedin, IconAt } from "@tabler/icons-react";
import classes from "./UserInfoIcons.module.css";

export function User1() {
  return (
    <div>
      <Group wrap="nowrap" className="flex flex-col md:flex-row">
        <Avatar src="https://i.imgur.com/O1XsR5O.jpg" size={120} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Co-Founder
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            Hellen Teri Nagawa
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              <a href="x.com">hellennagawa@gmail.com</a>
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconBrandLinkedin
              stroke={1.5}
              size="1.2rem"
              className={classes.icon}
            />
            <Text fz="xs" c="dimmed">
              <a href="https://www.linkedin.com/in/hellen-teri-nagawa-09ab06241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <Text fz="xs">
              Hellen Teri Nagawa holds a Bachelor's degree in Business
              Adminstration from Makerer University. <br />
              she has gained invaluable entrepreneurial knowledge from
              particating in various Bootcmps such as <br />
              the 2023 OVO susTech$Africa organized by Thomas Moore University
              of applied Sciences in collabration <br />
              with Makerere University. She is dedicated to creating the
              sustainable change she wants to see Uganda's <br />
              Healthcare system.
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}

export function User2() {
  return (
    <div>
      <Group wrap="nowrap" className="flex flex-col md:flex-row">
        <Avatar
          src="https://lh3.googleusercontent.com/pw/ABLVV87uNCtUdpX1CWP0xAMpWcvWnfQPuX89NonZywooWG4seC8yRPRYQvGCwphjPoalOwbI78B6y0hFFUxqE1f0UEOkwwipONCwWrnVC-zNTPVPYlyyrEw4kiflukFCnqC7sXKn49jKCUGFUlSyR9WV-j5H=w810-h1204-s-no-gm?authuser=0"
          size={120}
          radius="md"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Founder
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            Brendah Namubali
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed" component="a">
              <a href="namubalibrendah@gmail.com">brendahkizza1@gmail.com</a>
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconBrandLinkedin
              stroke={1.5}
              size="1rem"
              className={classes.icon}
            />
            <Text fz="xs" c="dimmed">
             <a href="https://www.linkedin.com/in/brendah-namubali-b227b915b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a>
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <Text fz="xs">
              Brendah Namubali is a passionate entrepreneur with a vision for
              accessible and innovative healthcare. <br /> Armed with a
              Bachelor's degree in Business Administration and currently
              finalizing a MSc. in Investment <br /> Management and Banking, She
              brings a unique blend of business acumen, financial expertise, and{" "}
              <br />
              entrepreneurship experience to the realm of telemedicine. Through
              SwiftDoc, Brendah channels an <br />
              unwavering passion for leveraging technology for societal good,
              envisioning a revolutionary shift in <br />
              healthcare accessibility and a positive change in
              health practices.
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
