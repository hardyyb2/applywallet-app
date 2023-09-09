import {
  AlignJustify,
  ChevronDown,
  ChevronsRight,
  ClipboardCheck,
  Equal,
  Eye,
  EyeOff,
  Files,
  GripHorizontal,
  Languages,
  LucideProps,
  Maximize,
  MoreVertical,
  Palette,
  PanelLeftClose,
  PanelLeftOpen,
  Pencil,
  Plus,
  Settings,
  Trash2,
} from "lucide-react";

const Icons = {
  Plus,
  Settings,
  Trash2,
  Pencil,
  Files,
  ClipboardCheck,
  AlignJustify,
  Eye,
  EyeOff,
  ChevronDown,
  Languages,
  MoreVertical,
  PanelLeftOpen,
  PanelLeftClose,
  ChevronsRight,
  Palette,
  Maximize,
  Equal,
  GripHorizontal,
  CustomHome: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
      focusable="false"
      {...props}
    >
      <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
    </svg>
  ),
};

export { Icons };
