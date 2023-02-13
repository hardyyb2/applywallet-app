import { Flex } from "@/components/isolated/common";

const ThemesMenuItemColors = () => {
  return (
    <Flex className="gap-1 h-4">
      <span className="w-2 rounded bg-primary"></span>
      <span className="w-2 rounded bg-secondary"></span>
      <span className="w-2 rounded bg-accent"></span>
      <span className="w-2 rounded bg-neutral"></span>
    </Flex>
  );
};

export { ThemesMenuItemColors };
