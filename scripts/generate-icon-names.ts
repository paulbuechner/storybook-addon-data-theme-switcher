import * as Icon from "@storybook/icons";

import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Get the current file's path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name of the current file
const __dirname = dirname(__filename);

const outputFilePath = path.resolve(__dirname, "../src/generated/types.ts");

// Step 1: Extract all keys from the Icon namespace
const iconNames = Object.keys(Icon).filter((key) => key.includes("Icon"));

// Step 2: Generate a union type string
const typeDefinition = `
/**
 * Auto-generated file. Do not edit manually.
 */

/**
 * Names of all available icons.
 */
export type IconName = ${iconNames.map((name) => `"${name}"`).join(" | ")};
`;

// Step 3: Write the type definition to types.ts
fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });
fs.writeFileSync(outputFilePath, typeDefinition.trim());

console.log(`Generated types at: ${outputFilePath}`);
