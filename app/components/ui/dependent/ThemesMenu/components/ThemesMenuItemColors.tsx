import { Flex } from "app/components/ui/isolated/common";

const ThemesMenuItemColors = () => {
  return (
    <Flex className="h-4 gap-1">
      <span className="w-2 rounded bg-primary"></span>
      <span className="w-2 rounded bg-secondary"></span>
      <span className="w-2 rounded bg-accent"></span>
      <span className="w-2 rounded bg-neutral"></span>
    </Flex>
  );
};

export { ThemesMenuItemColors };
