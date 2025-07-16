import { Box, Text, useInput } from "ink";
import open from "open";
import { useState } from "react";
import { NavigationContainer } from './navigation-container.js';

export function Contact({ goBack, goTo }: { goBack: () => void; goTo: (name: string) => void }) {
  const contacts = [
    { label: "Email: hello@kiron.dev", action: () => open("mailto:hello@kiron.dev") },
    { label: "LinkedIn: https://linkedin.com/in/toufiq-hasan-kiron", action: () => open("https://linkedin.com/in/toufiq-hasan-kiron") },
    { label: "GitHub: https://github.com/kiron0", action: () => open("https://github.com/kiron0") },
    { label: "Twitter: https://twitter.com/hashtagkiron", action: () => open("https://twitter.com/hashtagkiron") },
  ];
  const [index, setIndex] = useState(0);

  useInput((input, key) => {
    if (key.upArrow) setIndex(i => (i - 1 + contacts.length) % contacts.length);
    if (key.downArrow) setIndex(i => (i + 1) % contacts.length);
    if (key.return) contacts[index].action();
  });

  return (
    <NavigationContainer current="Contact" goBack={goBack} goTo={goTo}>
      {() => (
        <Box flexDirection="column" padding={1}>
          <Text bold color="cyan">📬 Contact</Text>
          {contacts.map((c, i) => (
            <Text key={c.label} color={i === index ? "greenBright" : undefined}>
              {i === index ? "❯" : "  "} {c.label}
            </Text>
          ))}
        </Box>
      )}
    </NavigationContainer>
  );
}
