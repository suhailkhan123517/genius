"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0ad58003-6860-473d-a2cc-ceeba8d1531c");
  }, []);

  return null;
};
