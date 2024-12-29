export type EventData = {
  id: number;
  src: string;
  eventName: string;
  alt: string;
};

export interface EventProperties {
  id: number;
  name: string;
  description: string;
  src: string;
  alt: string;
  route: string;
}
