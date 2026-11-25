import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My fridge locks at midnight like it pays rent, so I have to negotiate with an appliance for my own leftovers.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
