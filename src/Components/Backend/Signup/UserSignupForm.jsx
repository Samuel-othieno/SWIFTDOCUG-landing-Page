import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

function UserSignupForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [medicalCondition, setMedicalCondition] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const [allergies, setAllergies] = useState("");
  const [immunization, setImmunization] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");
  const [notes, setNotes] = useState("");
  const [durations, setDurations] = useState("");
const [mediacations, setMedacations] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const submiteSignupForm = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://swiftdocug-backend.onrender.com/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            email,
            role,
            mediacations,
            medicalCondition,
            password,
            familyHistory,
            firstName,
            lastName,
            gender,
            dateOfBirth,
            address,
            allergies,
            durations,
            nationality,
            notes,
            immunization,
          }),
        }
      );

      if (!response.ok) {
        setError("User not created, Please try again later.");
        return;
      }

      console.log(
        
      );
    } catch (error) {
      console.error("Error during sign up:", error);

      setError("An error occurred during sign up. Please try again later. We apologise for all inconveniences caused.");
    }
  };
  
  return (
    <>
       <Modal opened={opened} onClose={close} title="Authentication">
       <form onSubmit={submiteSignupForm} class>

        <input name="First Name" id="First Name" autoComplete="First Name" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Last Name" id="Last Name" autoComplete="Last Name" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="userName" id="userName" autoComplete="userName" placeholder="userName" value={userName} onChange={(e)=>setUserName(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="email" id="email" autoComplete="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="password" id="password" autoComplete="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Gender" id="Gender" autoComplete="Gender" placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Date of Birth" id="Date of Birth" autoComplete="Date of Birth" placeholder="Date of Birth" value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Nationality" id="Nationality" autoComplete="Nationality" placeholder="Nationality" value={nationality} onChange={(e)=>setNationality(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Address" id="Address" autoComplete="Address" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Role" id="Role" autoComplete="Role" placeholder="Role" value={role} onChange={(e)=>setRole(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Family History" id="Family History" autoComplete="Family History" placeholder="Family History" value={familyHistory} onChange={(e)=>setFamilyHistory(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Allergies" id="Allergies" autoComplete="Allergies" placeholder="Allergies" value={allergies} onChange={(e)=>setAllergies(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Immunizations" id="Immunizations" autoComplete="Immunizations" placeholder="Immunizations" value={immunization} onChange={(e)=>setImmunization(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Medical Conditions" id="Medical Conditions" autoComplete="Medical Conditions" placeholder="Medical Conditions" value={medicalCondition} onChange={(e)=>setMedicalCondition(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Medication" id="Medication" autoComplete="Medication" placeholder="Medication" value={mediacations} onChange={(e)=>setMedacations(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Duration" id="Duration" autoComplete="Duration" placeholder="Duration" value={durations} onChange={(e)=>setDurations(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>

        <input name="Notes" id="Notes" autoComplete="Notes" placeholder="Notes" value={notes} onChange={(e)=>setNotes(e.target.value)} required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"/>
        
        <input
            type="submit"
            value="Login"
            className="flex-none h-auto rounded-md bg-blue-500 px-3.5 py-2.5 md:text-sm text-[0.8rem] font-semibold text-white hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
       </form>
      </Modal>

      <Button onClick={open} fullWidth radius="md" justify="center"  className="bg-blue-950 cursor-pointer outline-none border-0 border-none">Join Now</Button>

    </>
  )

}
export default UserSignupForm;
