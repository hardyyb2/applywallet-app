import { forwardRef } from "react";

import {
  AlignJustify,
  Bold,
  BookOpen,
  Briefcase,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronsUpDown,
  ChevronUp,
  Clapperboard,
  ClipboardCheck,
  Code,
  Dot,
  Equal,
  Eye,
  EyeOff,
  Files,
  FileText,
  FolderOpen,
  GripHorizontal,
  Hash,
  Info,
  Italic,
  Languages,
  Lock,
  Maximize,
  Minimize,
  MoreVertical,
  Palette,
  PanelLeftClose,
  PanelLeftOpen,
  Pencil,
  Plus,
  Settings,
  Strikethrough,
  Trash2,
  Underline,
  X,
  type LucideProps,
} from "lucide-react";

const Icons = {
  AlignJustify,
  BookOpen,
  Briefcase,
  ChevronDown,
  ChevronsRight,
  Clapperboard,
  ClipboardCheck,
  Equal,
  Eye,
  EyeOff,
  Files,
  GripHorizontal,
  Languages,
  Lock,
  Maximize,
  MoreVertical,
  Palette,
  PanelLeftClose,
  PanelLeftOpen,
  Pencil,
  Plus,
  Settings,
  Trash2,
  Minimize,
  FolderOpen,
  FileText,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Info,
  Hash,
  Calendar,
  X,
  Check,
  Dot,
  ChevronsUpDown,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  CustomHome: forwardRef<SVGSVGElement, LucideProps>(function CustomHome(
    { ...props },
    ref,
  ) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
        focusable="false"
        ref={ref}
        {...props}
      >
        <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
      </svg>
    );
  }),
};

export { Icons };
