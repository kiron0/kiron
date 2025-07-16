import { Box, Text, useApp, useInput } from "ink";
import BigText from "ink-big-text";
import Gradient from "ink-gradient";
import { useState } from "react";
import { About } from "./about.js";
import { Contact } from "./contact.js";
import { Projects } from "./projects.js";

export const menuItems = ["About Me", "Projects", "Contact", "Exit"];

export function App() {
  const { exit } = useApp();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const goBack = () => setSelected(null);
  const goTo = (name: string) => setSelected(name);

  useInput((input, key) => {
    if (selected === null) {
      if (key.upArrow || key.leftArrow)
        setIndex((i) => (i > 0 ? i - 1 : menuItems.length - 1));
      if (key.downArrow || key.rightArrow)
        setIndex((i) => (i + 1) % menuItems.length);
      if (key.return) {
        if (menuItems[index] === "Exit") exit();
        else setSelected(menuItems[index]);
      }
    } else if (key.escape) {
      goBack();
    }
  });

  if (selected === "About Me") return <About goBack={goBack} goTo={goTo} />;
  if (selected === "Projects") return <Projects goBack={goBack} goTo={goTo} />;
  if (selected === "Contact") return <Contact goBack={goBack} goTo={goTo} />;

  return (
    <Box flexDirection="column" padding={1}>
      <Box
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        marginBottom={1}
      >
        <Gradient name="morning">
          <BigText text="T H Kiron" font="block" />
        </Gradient>
        <Text color="gray">Terminal Portfolio CLI ✨</Text>
      </Box>

      <Box marginBottom={1} flexDirection="column">
        <Text color="yellow">Use ↑ ↓ ← → to navigate</Text>
        <Text color="yellow">Press ↵ Enter to select, Esc to go back</Text>
      </Box>

      <Box flexDirection="column">
        {menuItems.map((item, i) => (
          <Text key={item} color={i === index ? "greenBright" : "white"}>
            {i === index ? "❯" : " "} {item}
          </Text>
        ))}
      </Box>
    </Box>
  );
}
