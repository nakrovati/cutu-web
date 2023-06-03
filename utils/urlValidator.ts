import { z } from "zod";

export function isValidURL(url: string) {
  const urlSchema = z.string().url();

  try {
    urlSchema.parse(url);

    return true;
  } catch (error) {
    return false;
  }
}
