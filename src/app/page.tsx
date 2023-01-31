import { Typography } from "@/components/isolated/common";
import { Button } from "@/components/isolated/wrapped";
import { Inter } from "@next/font/google";
import Image from "next/image";

import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Typography>Hello</Typography>
      <Button color="primary" variant="link">
        hey there
      </Button>
    </main>
  );
}
