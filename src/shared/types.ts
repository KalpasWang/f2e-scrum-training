import { ButtonType } from '../components/Common';
import {
  DIALOG,
  ENDING,
  GROUP_CHAT,
  MESSAGES,
  PRIORITY_DND,
  RETRO,
  SPRINT_FLOW,
  SPRINT_LIST_DND,
  SPRINT_MEETING,
} from './constants';

// Stages 型別
export type DialogData = {
  name: typeof DIALOG;
  text: string;
  roleImg: string;
  button: ButtonType;
  action?: string;
};

export type PriorityDnDData = {
  name: typeof PRIORITY_DND;
  message: string;
  messageColor: string;
  messageImg: string;
  roleImg: string;
  candidates: {
    id: string;
    items: PriorityItem[];
  };
  backlog: {
    id: string;
    title: string;
    placeholders: string[];
    items: PriorityItem[];
  };
  action: string;
};

export type GroupChatData = {
  name: typeof GROUP_CHAT;
  roles: ChatRole[];
  active: {
    roleIdx: number;
    text: string;
  };
};

export type SprintListDnDData = {
  name: typeof SPRINT_LIST_DND;
  title: string;
  backlog: {
    id: string;
    title: string;
    items: PointsItem[];
  };
  sprint: {
    id: string;
    title: string;
    items: PointsItem[];
  };
  limit: string;
  totalPoints: number;
  maxPoints: number;
  action: string;
  exceed: string;
  zero: string;
};

export type MessagesData = {
  name: typeof MESSAGES;
  messages: AvatarMessage[];
  action?: true;
};

export type SprintMeetingData = {
  name: typeof SPRINT_MEETING;
  items: MeetingIntroItem[];
};

export type SprintFlowData = {
  name: typeof SPRINT_FLOW;
  items: MeetingItem[];
  candidates: {
    candidate01: {
      id: 'candidate01';
      item: MeetingItem | null;
    };
    candidate02: {
      id: 'candidate02';
      item: MeetingItem | null;
    };
    candidate03: {
      id: 'candidate03';
      item: MeetingItem | null;
    };
    candidate04: {
      id: 'candidate04';
      item: MeetingItem | null;
    };
  };
  flow: {
    space01: MeetingSpace;
    space02: MeetingSpace;
    space03: MeetingSpace;
    space04: MeetingSpace;
  };
  failMessage: string;
  successMessage: string;
  action: string;
  action2: string;
};

export type RetroData = {
  name: typeof RETRO;
  message: string;
  button?: true;
  goods?: RetroItem[];
  bads?: RetroItem[];
  action?: string;
  failMessage?: string;
  show: boolean;
};

export type EndingData = {
  name: typeof ENDING;
  text: string;
  action: string;
};

export type StageData =
  | DialogData
  | PriorityDnDData
  | GroupChatData
  | SprintListDnDData
  | MessagesData
  | SprintMeetingData
  | SprintFlowData
  | RetroData
  | EndingData;

export type StageName =
  | typeof DIALOG
  | typeof PRIORITY_DND
  | typeof GROUP_CHAT
  | typeof SPRINT_LIST_DND
  | typeof MESSAGES
  | typeof SPRINT_MEETING
  | typeof SPRINT_FLOW
  | typeof RETRO
  | typeof ENDING;

// Drag & Drop(dnd) 相關項目的型別
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
  answer: number;
  item: MeetingItem | null;
};

/* 其他型別 */

// GroupChatStage 用
export type ChatRole = {
  id: 'po' | 'sm' | 'rd1' | 'rd2';
  name: string;
  img: string;
  color: 'primary1' | 'primary2' | 'primary3';
};

// MessagesStage 用
export type AvatarMessage = {
  id: string;
  avatar: 'avatarRD1' | 'avatarRD2' | 'newbie';
  text: string;
  color: 'primary1' | 'primary2' | 'primary3';
  direction: 'left' | 'right';
  action?: true;
};

// SprintMeetingStage 用
export type MeetingIntroItem = {
  title: string;
  subtitle: string;
  overview: string;
  list?: string[];
  conclusion?: string;
  bonus?: string;
  bonusImage?: string;
};

// RetroStage 用
export type RetroItem = {
  id: string;
  text: string;
  truth: boolean;
};

export type PrimaryColor = 'primary1' | 'primary2' | 'primary3';
export type TextColor = 'assist2' | 'primary2';
