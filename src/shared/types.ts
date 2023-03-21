export type StageName =
  | 'DialogStage'
  | 'PriorityDnDStage'
  | 'GroupChatStage'
  | 'SprintListDnDStage'
  | 'MessagesStage'
  | 'SprintMeetingStage'
  | 'SprintFlowStage'
  | 'RetroStage'
  | 'EndingStage';

export type BaseItem = {
  id: string;
  type: string;
  text: string;
};

export type PriorityItem = BaseItem & {
  type: 'purple' | 'yellow' | 'dropped_purple' | 'dropped-yellow';
  priority: number;
};

export type PointsItem = BaseItem & {
  type: 'points';
  points: number;
};

export type MeetingItem = BaseItem & {
  type: 'meeting';
  order: number;
};

export type Item = PriorityItem | PointsItem | MeetingItem;

export type MeetingSpace = {
  id: string;
  item: MeetingItem | null;
};
