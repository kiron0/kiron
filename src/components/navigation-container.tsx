import { Text, useInput } from 'ink';
import { ReactNode } from 'react';
import { getNextMenu, getPrevMenu } from '../hooks/use-menu-navigation.js';

interface NavigationContainerProps {
  current: string;
  goBack: () => void;
  goTo: (name: string) => void;
  children: (nav: { goBack: () => void; goTo: (name: string) => void }) => ReactNode;
}

export function NavigationContainer({ current, goBack, goTo, children }: NavigationContainerProps) {
  useInput((input, key) => {
    if (key.escape) goBack();
    if (key.rightArrow) goTo(getNextMenu(current));
    if (key.leftArrow) goTo(getPrevMenu(current));
  });

  return (
    <>
      {children({ goBack, goTo })}
      <Text dimColor>Press ESC to go back</Text>
    </>
  );
}
