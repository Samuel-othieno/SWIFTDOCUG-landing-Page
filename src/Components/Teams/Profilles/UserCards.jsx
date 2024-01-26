import {Avatar, Text, Group } from "@mantine/core";
import {
  IconPhoneCall,
  IconAt,
} from "@tabler/icons-react";
import classes from "./UserInfoIcons.module.css";

export function User1() {
  return (
    <div>
      <Group wrap="nowrap">
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
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              +256 (763) 520984
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <Text fz="xs" c="dimmed">
              Hellen Teri Nagawa is a writer on Medium, a platform for online
              publishing. She has written about how <br />
              coding is changing her life and career, and has expressed interest
              in learning more about programming. <br />
              She has also commented on other writers’ stories and shared her
              feedback.
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
      <Group wrap="nowrap">
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
            Namubali Brendah
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed" component="a">
              <a href="namubalibrendah@gmail.com">namubalibrendah@gmail.com</a>
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              +256 (781) 202892
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <Text fz="xs" c="dimmed">
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
