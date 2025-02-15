import { Flex } from "~/components/ds/Flex";

const ThemesMenuItemColors = () => {
  return (
    <Flex className="h-4 gap-1">
      <span className="bg-primary w-2 rounded-xs"></span>
      <span className="bg-secondary w-2 rounded-xs"></span>
      <span className="bg-accent w-2 rounded-xs"></span>
      <span className="bg-neutral w-2 rounded-xs"></span>
    </Flex>
  );
};

export { ThemesMenuItemColors };
