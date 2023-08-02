import { parse, string, url } from "valibot";

const URLSchema = string([url()]);

export function isValidURL(url: string) {
  try {
    parse(URLSchema, url);

    return true;
  } catch (error) {
    return false;
  }
}
