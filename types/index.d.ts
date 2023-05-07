declare interface ShortLink {
  shortURL: string;
  initialURL: string;
  dateCreated: string;
}

declare type NewShortLink = Pick<ShortLink, "initialURL" | "dateCreated">;
