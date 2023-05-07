import { useState } from "#app";

export const useShortLink = () => useState<ShortLink>("short-links");
