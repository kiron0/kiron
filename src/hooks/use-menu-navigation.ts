import { menuItems } from "../components/app.js";

export function getNextMenu(current: string): string {
  let idx = menuItems.indexOf(current);
  let nextIdx = (idx + 1) % menuItems.length;
  while (menuItems[nextIdx] === "Exit")
    nextIdx = (nextIdx + 1) % menuItems.length;
  return menuItems[nextIdx];
}

export function getPrevMenu(current: string): string {
  let idx = menuItems.indexOf(current);
  let prevIdx = (idx - 1 + menuItems.length) % menuItems.length;
  while (menuItems[prevIdx] === "Exit")
    prevIdx = (prevIdx - 1 + menuItems.length) % menuItems.length;
  return menuItems[prevIdx];
}
