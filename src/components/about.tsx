import { Box, Text } from "ink";
import { NavigationContainer } from './navigation-container.js';

export function About({ goBack, goTo }: { goBack: () => void; goTo: (name: string) => void }) {
  return (
    <NavigationContainer current="About Me" goBack={goBack} goTo={goTo}>
      {() => (
        <Box flexDirection="column" padding={1} gap={1}>
         <Text bold color="cyan">
        👨‍💻 Toufiq Hasan Kiron
      </Text>
      <Text>
        I'm a proficient full-stack developer interested in coding, coffee, and
        travel. As an aspiring full-stack developer, I'm always eager to take on
        new challenges to augment my skills and field knowledge. My dedication
        and expertise in the field enable me to deliver top-quality work.
      </Text>
      <Text>
        I possess advanced technical skills in JavaScript, TypeScript, React,
        Next.js, and other cutting-edge technologies. I have created numerous
        impressive projects that showcase my expertise in these areas. Feel free
        to explore my portfolio and see for yourself.
      </Text>
        </Box>
      )}
    </NavigationContainer>
  );
}
