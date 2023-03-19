export interface Item {
  id: string;
  type: string;
  text: string;
}

export interface PriorityItem extends Item {
  priority: number;
}

export interface PointsItem extends Item {
  points: number;
}

export interface MeetingItem extends Item {
  order: number;
}

export interface MeetingSpace {
  id: string;
  item: MeetingItem | null;
}
