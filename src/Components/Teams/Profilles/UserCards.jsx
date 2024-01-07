import { Image, Avatar, Text, Group } from "@mantine/core";
import { IconBrandLinkedin, IconBrandTwitter, IconPhoneCall, IconAt } from "@tabler/icons-react";
import classes from "./UserInfoIcons.module.css";

export function User1() {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar src="https://i.imgur.com/O1XsR5O.jpg" size={120} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Co-Founder & Business partner
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            Hellen Teri Nagawa
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              hellennagawa@gmail.com
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
              publishing. She has written about how <br />coding is changing her life
              and career, and has expressed interest in learning more about
              programming. <br />She has also commented on other writers’ stories and
              shared her feedback.
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
          src="https://photos.app.goo.gl/5LDdjwHQpFwzABz46"
          size={120}
          radius="md"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Founder / CEO
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
              Namubali Brendah is a Ugandan woman who was admitted to the Master
              of Science in Procurement <br />and Supply Chain Management program at
              Makerere University Business School for the academic year <br />
              2021/20221. She is one of the 23 students who were selected for
              this program out of many applicants
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
