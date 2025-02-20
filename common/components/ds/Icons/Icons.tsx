import {
  AlignJustify,
  AlignLeft,
  AppWindow,
  Bold,
  BookOpen,
  Briefcase,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronsUpDown,
  ChevronUp,
  Circle,
  CircleDashed,
  CircleDot,
  Clapperboard,
  ClipboardCheck,
  Code,
  createLucideIcon,
  Dot,
  Equal,
  ExternalLink,
  Eye,
  EyeOff,
  Files,
  FileText,
  FolderOpen,
  GripHorizontal,
  GripVertical,
  Hammer,
  Hash,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Highlighter,
  Info,
  Italic,
  Languages,
  Link2,
  List,
  ListOrdered,
  Lock,
  LogIn,
  LogOut,
  Maximize,
  Minimize,
  Minus,
  MinusCircle,
  MoreHorizontal,
  MoreVertical,
  Palette,
  PanelLeftClose,
  PanelLeftOpen,
  PauseCircle,
  Pencil,
  Phone,
  Pilcrow,
  Plus,
  Quote,
  Save,
  Settings,
  SlidersHorizontal,
  Strikethrough,
  Subscript,
  Superscript,
  Text,
  Trash2,
  Underline,
  Unlink,
  UploadCloud,
  UserCircle2,
  X,
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
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Pilcrow,
  Quote,
  Link2,
  Text,
  Unlink,
  ExternalLink,
  Minus,
  List,
  ListOrdered,
  CircleDot,
  Superscript,
  Subscript,
  Highlighter,
  LogIn,
  AlignLeft,
  GripVertical,
  UploadCloud,
  LogOut,
  Save,
  MinusCircle,
  CircleDashed,
  CheckCircle2,
  PauseCircle,
  Circle,
  MoreHorizontal,
  SlidersHorizontal,
  Hammer,
  AppWindow,
  UserCircle2,
  Phone,
  CustomRadio: createLucideIcon("CustomRadio", [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "12",
        fill: "currentColor",
        key: "circle-1",
      },
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "5",
        className: "fill-current",
        key: "circle-2",
      },
    ],
  ]),
  CustomHome: createLucideIcon("CustomHome", [
    [
      "path",
      {
        d: "M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",
        fill: "currentColor",
        key: "custom-home-path",
      },
    ],
  ]),
  Github: createLucideIcon("Github", [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "github-path-1",
      },
    ],
    [
      "path",
      {
        d: "M9 18c-4.51 2-5-2-7-2",
        key: "github-path-2",
      },
    ],
  ]),
  Instagram: createLucideIcon("Instagram", [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "instagram-rect",
      },
    ],
    [
      "path",
      {
        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
        key: "instagram-path",
      },
    ],
    [
      "line",
      {
        x1: "17.5",
        x2: "17.51",
        y1: "6.5",
        y2: "6.5",
        key: "instagram-line",
      },
    ],
  ]),
  Linkedin: createLucideIcon("Linkedin", [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "linkedin-path",
      },
    ],
    [
      "rect",
      {
        width: "4",
        height: "12",
        x: "2",
        y: "9",
        key: "linkedin-rect",
      },
    ],
    [
      "circle",
      {
        cx: "4",
        cy: "4",
        r: "2",
        key: "linkedin-circle",
      },
    ],
  ]),
  FileUpload: createLucideIcon("FileUpload", [
    [
      "path",
      {
        d: "M609.48783,100.59015l-25.44631,6.56209L270.53735,187.9987,245.091,194.56079A48.17927,48.17927,0,0,0,210.508,253.17865L320.849,681.05606a48.17924,48.17924,0,0,0,58.61776,34.58317l.06572-.01695,364.26536-93.93675.06572-.01695a48.17923,48.17923,0,0,0,34.58309-58.6178l-110.341-427.87741A48.17928,48.17928,0,0,0,609.48783,100.59015Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-1",
      },
    ],
    [
      "path",
      {
        d: "M612.94784,114.00532l-30.13945,7.77236L278.68955,200.20385l-30.139,7.77223a34.30949,34.30949,0,0,0-24.6275,41.74308l110.341,427.87741a34.30946,34.30946,0,0,0,41.7431,24.62736l.06572-.01695,364.26536-93.93674.06619-.01707a34.30935,34.30935,0,0,0,24.627-41.7429l-110.341-427.87741A34.30938,34.30938,0,0,0,612.94784,114.00532Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-100",
        key: "file-path-2",
      },
    ],
    [
      "path",
      {
        d: "M590.19,252.56327,405.917,300.08359a8.01411,8.01411,0,0,1-4.00241-15.52046l184.273-47.52033A8.01412,8.01412,0,0,1,590.19,252.56327Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-3",
      },
    ],
    [
      "path",
      {
        d: "M628.955,270.49906,412.671,326.27437a8.01411,8.01411,0,1,1-4.00241-15.52046l216.284-55.77531a8.01411,8.01411,0,0,1,4.00242,15.52046Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-4",
      },
    ],
    [
      "path",
      {
        d: "M620.45825,369.93676l-184.273,47.52032a8.01411,8.01411,0,1,1-4.00242-15.52046l184.273-47.52032a8.01411,8.01411,0,1,1,4.00241,15.52046Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-5",
      },
    ],
    [
      "path",
      {
        d: "M659.22329,387.87255l-216.284,55.77531a8.01411,8.01411,0,1,1-4.00242-15.52046l216.284-55.77531a8.01411,8.01411,0,0,1,4.00242,15.52046Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-6",
      },
    ],
    [
      "path",
      {
        d: "M650.72653,487.31025l-184.273,47.52033a8.01412,8.01412,0,0,1-4.00242-15.52047l184.273-47.52032a8.01411,8.01411,0,0,1,4.00242,15.52046Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-7",
      },
    ],
    [
      "path",
      {
        d: "M689.49156,505.246l-216.284,55.77532a8.01412,8.01412,0,1,1-4.00241-15.52047l216.284-55.77531a8.01411,8.01411,0,0,1,4.00242,15.52046Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-8",
      },
    ],
    [
      "path",
      {
        d: "M374.45884,348.80871l-65.21246,16.817a3.847,3.847,0,0,1-4.68062-2.76146L289.5963,304.81607a3.847,3.847,0,0,1,2.76145-4.68061l65.21247-16.817a3.847,3.847,0,0,1,4.68061,2.76145l14.96947,58.04817A3.847,3.847,0,0,1,374.45884,348.80871Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-9",
      },
    ],
    [
      "path",
      {
        d: "M404.72712,466.1822l-65.21247,16.817a3.847,3.847,0,0,1-4.68062-2.76146l-14.96946-58.04816A3.847,3.847,0,0,1,322.626,417.509l65.21246-16.817a3.847,3.847,0,0,1,4.68062,2.76145l14.96946,58.04817A3.847,3.847,0,0,1,404.72712,466.1822Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-10",
      },
    ],
    [
      "path",
      {
        d: "M434.99539,583.55569l-65.21246,16.817a3.847,3.847,0,0,1-4.68062-2.76145l-14.96946-58.04817a3.847,3.847,0,0,1,2.76145-4.68062l65.21247-16.817a3.847,3.847,0,0,1,4.68061,2.76146l14.96947,58.04816A3.847,3.847,0,0,1,434.99539,583.55569Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-11",
      },
    ],
    [
      "path",
      {
        d: "M863.63647,209.0517H487.31811a48.17928,48.17928,0,0,0-48.125,48.12512V699.05261a48.17924,48.17924,0,0,0,48.125,48.12507H863.63647a48.17924,48.17924,0,0,0,48.125-48.12507V257.17682A48.17928,48.17928,0,0,0,863.63647,209.0517Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-12",
      },
    ],
    [
      "path",
      {
        d: "M863.637,222.90589H487.31811a34.30948,34.30948,0,0,0-34.271,34.27093V699.05261a34.30947,34.30947,0,0,0,34.271,34.27088H863.637a34.30936,34.30936,0,0,0,34.27051-34.27088V257.17682A34.30937,34.30937,0,0,0,863.637,222.90589Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-100",
        key: "file-path-13",
      },
    ],
    [
      "circle",
      {
        cx: "694.19401",
        cy: "614.02963",
        r: "87.85039",
        className: "fill-current",
        key: "file-path-circle",
      },
    ],
    [
      "path",
      {
        d: "M945.18722,701.63087H914.63056V671.07421a11.45875,11.45875,0,0,0-22.9175,0v30.55666H861.1564a11.45875,11.45875,0,0,0,0,22.9175h30.55666V755.105a11.45875,11.45875,0,1,0,22.9175,0V724.54837h30.55666a11.45875,11.45875,0,0,0,0-22.9175Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-100",
        key: "file-path-14",
      },
    ],
    [
      "path",
      {
        d: "M807.00068,465.71551H616.699a8.01412,8.01412,0,1,1,0-16.02823H807.00068a8.01412,8.01412,0,0,1,0,16.02823Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-15",
      },
    ],
    [
      "path",
      {
        d: "M840.05889,492.76314H616.699a8.01412,8.01412,0,1,1,0-16.02823H840.05889a8.01411,8.01411,0,1,1,0,16.02823Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-16",
      },
    ],
    [
      "path",
      {
        d: "M807.00068,586.929H616.699a8.01412,8.01412,0,1,1,0-16.02823H807.00068a8.01411,8.01411,0,0,1,0,16.02823Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-17",
      },
    ],
    [
      "path",
      {
        d: "M840.05889,613.97661H616.699a8.01412,8.01412,0,1,1,0-16.02823H840.05889a8.01412,8.01412,0,1,1,0,16.02823Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-18",
      },
    ],
    [
      "path",
      {
        d: "M574.07028,505.04162H506.72434a3.847,3.847,0,0,1-3.84278-3.84278V441.25158a3.847,3.847,0,0,1,3.84278-3.84278h67.34594a3.847,3.847,0,0,1,3.84278,3.84278v59.94726A3.847,3.847,0,0,1,574.07028,505.04162Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-19",
      },
    ],
    [
      "path",
      {
        d: "M574.07028,626.25509H506.72434a3.847,3.847,0,0,1-3.84278-3.84278V562.46505a3.847,3.847,0,0,1,3.84278-3.84278h67.34594a3.847,3.847,0,0,1,3.84278,3.84278v59.94726A3.847,3.847,0,0,1,574.07028,626.25509Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-20",
      },
    ],
    [
      "path",
      {
        d: "M807.21185,330.781H666.91017a8.01411,8.01411,0,0,1,0-16.02823H807.21185a8.01411,8.01411,0,0,1,0,16.02823Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-21",
      },
    ],
    [
      "path",
      {
        d: "M840.27007,357.82862H666.91017a8.01411,8.01411,0,1,1,0-16.02822h173.3599a8.01411,8.01411,0,0,1,0,16.02822Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-base-content",
        key: "file-path-22",
      },
    ],
    [
      "path",
      {
        d: "M635.85911,390.6071H506.51316a3.847,3.847,0,0,1-3.84277-3.84277V285.81706a3.847,3.847,0,0,1,3.84277-3.84277H635.85911a3.847,3.847,0,0,1,3.84277,3.84277V386.76433A3.847,3.847,0,0,1,635.85911,390.6071Z",
        transform: "translate(-208.9778 -99.05999)",
        className: "fill-current",
        key: "file-path-final",
      },
    ],
  ]),
};

export { Icons };
