import { type LucideIcon } from "lucide-react";

import { Icons } from "~/components/ds/Icons";

import { type DrNodeDataType } from "@/types/flowbuilder";

type CombinedType = `${DrNodeDataType["type"]}:${DrNodeDataType["subType"]}`;

export const customNodeIcon: Record<CombinedType, LucideIcon> = {
  "file:layout": Icons.FileText,
  "file:page": Icons.FileText,
  "file:component": Icons.FileText,
  "file:test": Icons.FileText,
  "file:utils": Icons.FileText,
  "file:types": Icons.FileText,
  "file:root": Icons.FileText,
  "file:nested": Icons.FileText,
  "file:dynamic": Icons.FileText,
  "file:dynamic-catch-all": Icons.FileText,
  "file:route-group": Icons.FileText,
  "file:no-route-group": Icons.FileText,
  "folder:layout": Icons.FileText,
  "folder:page": Icons.FileText,
  "folder:component": Icons.FolderOpen,
  "folder:test": Icons.FolderOpen,
  "folder:utils": Icons.FolderOpen,
  "folder:types": Icons.FolderOpen,
  "folder:root": Icons.FolderOpen,
  "folder:nested": Icons.FolderOpen,
  "folder:dynamic": Icons.FolderOpen,
  "folder:dynamic-catch-all": Icons.FolderOpen,
  "folder:route-group": Icons.FolderOpen,
  "folder:no-route-group": Icons.FolderOpen,
};
