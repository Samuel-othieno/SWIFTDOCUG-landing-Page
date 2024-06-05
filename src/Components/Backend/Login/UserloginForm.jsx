import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Tooltip} from "@mantine/core";

function UserloginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const submitForm = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      const response = await fetch(
        "https://swiftdocug-backend.onrender.com/login",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        setError("Invalid credentials. Please try again.");
        return;
      }

      const data = await response.json();
      localStorage.setItem("jwt", data.token);

      console.log("Logged in successfully:", data);
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login. Please try again later.");
    }
  };

  return (
    <>
      <Drawer
      overlayProps={{ backgroundOpacity: 0.6, blur: 7}}
        offset={20}
        transitionProps={{ transition: 'slide-left', duration: 300, timingFunction: 'ease' }}
        radius="lg"
        position="right"
        opened={opened}
        onClose={close}
        title="Login"
      >
        <form onSubmit={submitForm}>
          <input
          data-autofocus
            required
            autoComplete="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"
          />

          <input
            required
            autoComplete="password"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-2 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm sm:leading-6 text-[0.7rem]"
          />

          <input
            type="submit"
            value="Login"
            className="flex-none h-auto rounded-md bg-blue-500 px-3.5 py-2.5 md:text-sm text-[0.8rem] font-semibold text-white hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          />

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </Drawer>
      <Tooltip label="Use your email or password to login">
      <Button onClick={open} variant="filled" color="red">Login</Button>
      </Tooltip>
    </>
  );
}

export default UserloginForm;