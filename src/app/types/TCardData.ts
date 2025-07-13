import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export enum status {
  AvailableNow = "Available Now",
  ClosedNow = "Tuesdays & Thursdays 5PM-8PM EST",
  Weekend = "Weekends 10AM-4PM EST",
}

export type TCardData = {
  id: number;
  imageUrl: string;
  name: string;
  age: number;
  gender: string;
  status: status;
  tags: string[];
  summary: string;
  details: string;
  rating: string;
  sessions: string;
  helped: string;
  returnRate: string;
  languages: string[];
  available: string[];
  icons: {
    iconClock: IconDefinition;
    iconPhone?: IconDefinition;
    iconBell?: IconDefinition;
    iconArrowUp: IconDefinition;
    iconArrowDown: IconDefinition;
    iconStar: IconDefinition;
    iconSessions: IconDefinition;
    iconHeart: IconDefinition;
    iconUser: IconDefinition;
    iconCalender: IconDefinition;
  };
};
