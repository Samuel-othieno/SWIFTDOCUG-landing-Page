import { useState, useEffect } from "react";
import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Menu,
  rem,
} from "@mantine/core";
import {
  IconPencil,
  IconMessages,
  IconNote,
  IconReportAnalytics,
  IconTrash,
  IconDots,
} from "@tabler/icons-react";

export default function FetchData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const apiUrl = `https://swiftdocug-backend.onrender.com/find-all/`;

    const fetchData = () => {
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Request not granted");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          setUserData(data.Patient);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    };
    fetchData();
  }, []);

  const Serial = 'SU0000000';
  const rows = userData.map((patient, index) => (
    
    <Table.Tr key={index} className="m-[20%]">
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={patient.avatar} color="blue" radius={40} />
          <div>

            <Text fz="sm" fw={500}>
            {Serial}{patient.id}
            </Text>

            <Text fz="sm" fw={500}>
            {patient.username}
            </Text>
            <Text fz="sm" fw={500}>
            {patient.Profile.first_name} {patient.Profile.last_name}           
            </Text>
            <Text c="dimmed" fz="xs">
              {patient.role}
            </Text>
            <Text fz="xs" c="dimmed">
        {patient.Profile.date_of_birth}
        </Text>
          </div>
        </Group>
      </Table.Td>
    
      <Table.Td>
         <Text>{patient.Profile.address}</Text>
      <Text fz="sm" fw={500}>
         {patient.Profile.nationality}         
      </Text>
      </Table.Td>
      <Table.Td>
      <Text fz="sm" fw={500}>
         {patient.Profile.gender}         
      </Text>
      </Table.Td>
      
      <Table.Td>
      <Text fz="sm" fw={500}>
      {patient.Medical_records.allergies}         
      </Text>

      <Text fz="sm" fw={500}>
         {patient.Medical_records.medical_Conditions}
      </Text>

      <Text fz="sm" fw={500}>         
      {patient.Medical_records.immunizations}
      </Text>

      <Text fz="sm" fw={500}>         
         {patient.Medical_records.family_history}
      </Text>
      </Table.Td>



      <Table.Td>
        <Text fz="sm">{patient.email}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm"> {patient.id} / hr</Text>
        <Text fz="xs" c="dimmed">
            {patient.Profile.date_of_birth}
        </Text>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconPencil
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          </ActionIcon>
          <Menu
            transitionProps={{ transition: "pop" }}
            withArrow
            position="bottom-end"
            withinPortal
          >
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={
                  <IconMessages
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
              >
                Appointment
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconNote
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
              >
                 Cancel
              </Menu.Item>
              
              <Menu.Item
                leftSection={
                  <IconReportAnalytics
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
              >
                 {patient.Medical_records.immunizations}
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconTrash
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
                color="red"
              >
                 Delete
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="md">
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
