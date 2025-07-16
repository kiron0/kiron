import { Box, Text, useInput } from "ink";
import open from "open";
import { useEffect, useState } from "react";
import { getPortfolios, TPortfolio } from "../data/projects.js";
import { NavigationContainer } from "./navigation-container.js";

export function Projects({
  goBack,
  goTo,
}: {
  goBack: () => void;
  goTo: (name: string) => void;
}) {
  const [projects, setProjects] = useState<TPortfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getPortfolios()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  useInput((input, key) => {
    if (projects.length > 0) {
      if (key.upArrow)
        setIndex((i) => (i - 1 + projects.length) % projects.length);
      if (key.downArrow) setIndex((i) => (i + 1) % projects.length);
      if (key.return) {
        const url = projects[index]?.sourceCode?.frontend;
        if (url) open(url);
      }
    }
  });

  return (
    <NavigationContainer current="Projects" goBack={goBack} goTo={goTo}>
      {() =>
        loading ? (
          <Box flexDirection="column" padding={1}>
            <Text color="yellow">Loading projects...</Text>
          </Box>
        ) : error ? (
          <Box flexDirection="column" padding={1}>
            <Text color="red">{error}</Text>
            <Text dimColor>Press Esc to go back</Text>
          </Box>
        ) : (
          <Box flexDirection="column" padding={1}>
            <Text bold color="cyan">
              📁 Projects (↑↓←→ to navigate)
            </Text>
            {projects.map((proj, i) => (
              <Box key={proj?.title} flexDirection="column" marginTop={1}>
                <Text color={i === index ? "greenBright" : undefined}>
                  {i === index ? "❯" : " "} {proj?.title}
                </Text>
                {i === index && (
                  <Text color="blue">{proj?.sourceCode?.frontend}</Text>
                )}
              </Box>
            ))}
          </Box>
        )
      }
    </NavigationContainer>
  );
}
