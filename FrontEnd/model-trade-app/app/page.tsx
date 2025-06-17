import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  redirect("/home");
  return null;
}
