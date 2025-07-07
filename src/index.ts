import open from "open";

(async (): Promise<void> => {
  try {
    await open("https://kiron.dev");
  } catch (error) {
    process.exit(1);
  }
})();
