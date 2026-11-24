export type CategoryIcon = "web" | "pwn" | "reverse" | "crypto" | "forensics" | "osint" | "hardware" | "secure";

export type Category = {
  code: string;
  name: string;
  icon: CategoryIcon;
  description: string;
};

export const CATEGORIES: Category[] = [
  {
    code: "CLS-W01",
    name: "Web",
    icon: "web",
    description:
      "Break web applications and APIs: injection, broken authentication, request forgery and the logic flaws hiding in plain HTTP.",
  },
  {
    code: "CLS-P02",
    name: "Pwn",
    icon: "pwn",
    description: "Exploit native binaries. Corrupt memory, redirect control flow and turn a crash into a shell.",
  },
  {
    code: "CLS-R03",
    name: "Reverse Engineering",
    icon: "reverse",
    description:
      "Take compiled programs apart without the source. Read the assembly, strip the obfuscation, recover the logic.",
  },
  {
    code: "CLS-C04",
    name: "Cryptography",
    icon: "crypto",
    description:
      "Attack ciphers, protocols and their implementations. Weak randomness and misused primitives are fair game.",
  },
  {
    code: "CLS-F05",
    name: "Forensics",
    icon: "forensics",
    description: "Reconstruct what happened from disk images, memory dumps and packet captures, one artifact at a time.",
  },
  {
    code: "CLS-O06",
    name: "OSINT",
    icon: "osint",
    description:
      "Find what is already public. Follow usernames, photos, metadata and old posts until the trail gives up its secret.",
  },
  {
    code: "CLS-H07",
    name: "Hardware",
    icon: "hardware",
    description:
      "Go below the software. Read signals, dump firmware and make sense of the circuits, protocols and chips behind a device.",
  },
  {
    code: "CLS-S08",
    name: "Secure Coding",
    icon: "secure",
    description:
      "Defend instead of attack. Review vulnerable source code, spot the flaw and write the patch that closes it for good.",
  },
];
