declare interface ShortLink {
  shortUrl: string;
  initialUrl: string;
  dateCreated: string;
}

declare type NewShortLink = Pick<ShortLink, "initialUrl" | "dateCreated">;
