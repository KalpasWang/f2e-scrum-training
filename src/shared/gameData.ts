import { StageData } from './types';

type GameData = {
  stages: StageData[];
};

const gamData: GameData = {
  stages: [
    {
      name: 'DialogStage',
      text: '勇者！歡迎來到TT資訊王國，我是TT King<br />在正式加入王國的敏捷騎士團以前，需要請你先了解騎士團的<span class="text-primary3">Scrum流程與精神</span><br /><br />請跟隨我一起通過Scrum新手村的挑戰任務吧！',
      roleImg: 'king',
      button: 'default',
      action: '開始任務',
    },
    {
      name: 'DialogStage',
      text: '我是TT資訊王國．敏捷騎士團的軍師小敏<br /><br />用你們的話來說就是<span class="text-primary3">PO</span>，也就是<span class="text-primary3">產品負責人 Product Owner</span><br /><br />PO會負責評估產品代辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標，最後排出<span class="text-primary3">產品待辦清單 Product Backlog。</span>',
      roleImg: 'po',
      button: 'next',
    },
    {
      name: 'DialogStage',
      text: '剛好我手邊有一個「人才招募系統」的案子，我才剛列出了「產品需求清單」<br /><br />既然你都來了，來試試看<span class="text-primary3">調整產品優先度，排出產品代辦清單</span>吧！',
      roleImg: 'poHand',
      button: 'default',
      action: '開始任務',
    },
    {
      name: 'PriorityDnDStage',
      message:
        '請把需求貓貓拖拉到右邊產品代辦清單，並調整代辦的優先度順序～<br />TT王國也推薦使用 <span class="text-primary1">Jira</span> 來做任務的管理喔！',
      messageColor: 'primary2',
      messageImg: 'jira_logo.png',
      roleImg: 'poSit.svg',
      candidates: {
        id: 'candidates',
        items: [
          {
            id: 'item01',
            type: 'purple',
            text: '會員系統(登入、註冊、權限管理)',
            priority: 1,
          },
          {
            id: 'item02',
            type: 'yellow',
            text: '應徵者的線上履歷編輯器',
            priority: 2,
          },
          {
            id: 'item03',
            type: 'purple',
            text: '前台職缺列表(職缺詳細內容、點選可發送應徵意願)',
            priority: 3,
          },
          {
            id: 'item04',
            type: 'yellow',
            text: '後台職缺管理功能(資訊上架、下架、顯示應徵者資料)',
            priority: 4,
          },
        ],
      },
      backlog: {
        id: 'backlog',
        title: '產品代辦清單(Product Backlog)',
        placeholders: ['優先度最高', '優先度高', '優先度中', '優先度低'],
        items: [],
      },
      action: '完成清單',
    },
    {
      name: 'GroupChatStage',
      roles: [
        {
          id: 'po',
          name: 'PO 小敏',
          img: 'po-chat.svg',
          color: 'primary2',
        },
        {
          id: 'sm',
          name: 'SM 小捷',
          img: 'sm-chat.svg',
          color: 'primary3',
        },
        {
          id: 'rd1',
          name: '開發 小碼',
          img: 'rd1-chat.svg',
          color: 'primary1',
        },
        {
          id: 'rd2',
          name: '開發 小扣',
          img: 'rd2-chat.svg',
          color: 'primary1',
        },
      ],
      active: {
        roleIdx: 1,
        text: '嗨！你是新來的前端勇者吧！<br />我是祭司小捷，也就是 <span class="text-primary3">Scrum Master</span>，我的工作主要是促成開發騎士們的協作、引導團隊進行<span class="text-primary3">自省會議</span>，以及提升騎士團團員對Scrum的了解。',
      },
    },
    {
      name: 'GroupChatStage',
      roles: [
        {
          id: 'po',
          name: 'PO 小敏',
          img: 'po-chat.svg',
          color: 'primary2',
        },
        {
          id: 'sm',
          name: 'SM 小捷',
          img: 'sm-chat.svg',
          color: 'primary3',
        },
        {
          id: 'rd1',
          name: '開發 小碼',
          img: 'rd1-chat.svg',
          color: 'primary1',
        },
        {
          id: 'rd2',
          name: '開發 小扣',
          img: 'rd2-chat.svg',
          color: 'primary1',
        },
      ],
      active: {
        roleIdx: 0,
        text: '產品代辦清單好了之後，我們來召集SM和開發騎士們共同召開<span class="text-primary3">短衝規劃會議</span> (Sprint Planning)。',
      },
    },
    {
      name: 'GroupChatStage',
      roles: [
        {
          id: 'po',
          name: 'PO 小敏',
          img: 'po-chat.svg',
          color: 'primary2',
        },
        {
          id: 'sm',
          name: 'SM 小捷',
          img: 'sm-chat.svg',
          color: 'primary3',
        },
        {
          id: 'rd1',
          name: '開發 小碼',
          img: 'rd1-chat.svg',
          color: 'primary1',
        },
        {
          id: 'rd2',
          name: '開發 小扣',
          img: 'rd2-chat.svg',
          color: 'primary1',
        },
      ],
      active: {
        roleIdx: 0,
        text: '<span class="text-primary3">短衝即是一個迭代</span>，具有<span class="text-primary3">固定時間限制</span>，我們會在這個會議中，決定要完成哪些工作事項來到商業需求，<span class="text-primary3">列出短衝待辦清單(Sprint Backlog)</span>，並由開發騎士們在接下來的產品開發週期裡執行。',
      },
    },
    {
      name: 'GroupChatStage',
      roles: [
        {
          id: 'po',
          name: 'PO 小敏',
          img: 'po-chat.svg',
          color: 'primary2',
        },
        {
          id: 'sm',
          name: 'SM 小捷',
          img: 'sm-chat.svg',
          color: 'primary3',
        },
        {
          id: 'rd1',
          name: '開發 小碼',
          img: 'rd1-chat.svg',
          color: 'primary1',
        },
        {
          id: 'rd2',
          name: '開發 小扣',
          img: 'rd2-chat.svg',
          color: 'primary1',
        },
      ],
      active: {
        roleIdx: 1,
        text: '這兩位是小碼和小扣，是團隊裡的開發騎士唷～<br /><br />目前我們團隊一次Sprint是兩週的時間，依照我的觀察，目前團隊可以負擔的<span class="text-primary3">點數(Sprint Point)</span>是20點左右。',
      },
    },
    {
      name: 'GroupChatStage',
      roles: [
        {
          id: 'po',
          name: 'PO 小敏',
          img: 'po-chat.svg',
          color: 'primary2',
        },
        {
          id: 'sm',
          name: 'SM 小捷',
          img: 'sm-chat.svg',
          color: 'primary3',
        },
        {
          id: 'rd1',
          name: '開發 小碼',
          img: 'rd1-chat.svg',
          color: 'primary1',
        },
        {
          id: 'rd2',
          name: '開發 小扣',
          img: 'rd2-chat.svg',
          color: 'primary1',
        },
      ],
      active: {
        roleIdx: 2,
        text: '欸新來的，你應該不知道點數是甚麼意思吧哈哈<br />讓我來跟你介紹一下吧～Sprint Point目的是為了<span class="text-primary3">衡量速度</span>，是用<span class="text-primary3">任務大概將花費的時間來預估出相對的點數。</span>',
      },
    },
    {
      name: 'GroupChatStage',
      roles: [
        {
          id: 'po',
          name: 'PO 小敏',
          img: 'po-chat.svg',
          color: 'primary2',
        },
        {
          id: 'sm',
          name: 'SM 小捷',
          img: 'sm-chat.svg',
          color: 'primary3',
        },
        {
          id: 'rd1',
          name: '開發 小碼',
          img: 'rd1-chat.svg',
          color: 'primary1',
        },
        {
          id: 'rd2',
          name: '開發 小扣',
          img: 'rd2-chat.svg',
          color: 'primary1',
        },
      ],
      active: {
        roleIdx: 3,
        text: '小碼哥說的沒錯，我已經把剛剛討論好的點數標上去囉～<br />你來試著把任務排到短衝清單上吧！<br /><br />BTW，我們平常管理任務是使用<span class="text-primary3">Jira</span>這套軟體，你有時間記得先去註冊和熟悉一下唷！',
      },
    },
    {
      name: 'SprintListDnDStage',
      title: '把待辦清單在點數限制內移動到短衝代辦清單',
      backlog: {
        id: 'backlog',
        title: '產品代辦清單(Product Backlog)',
        items: [
          {
            id: '01',
            type: 'points',
            text: '會員系統(登入、註冊、權限管理)',
            points: 8,
          },
          {
            id: '02',
            type: 'points',
            text: '應徵者的線上履歷編輯器',
            points: 13,
          },
          {
            id: '03',
            type: 'points',
            text: '前台職缺列表(職缺詳細內容、點選可發送應徵意願)',
            points: 5,
          },
          {
            id: '04',
            type: 'points',
            text: '後台職缺管理功能(資訊上架、下架、顯示應徵者資料)',
            points: 8,
          },
        ],
      },
      sprint: {
        id: 'sprint',
        title: '開發騎士的短衝代辦清單',
        items: [],
      },
      limit: '20 點 (5 人)',
      totalPoints: 34,
      maxPoints: 20,
      action: '完成清單',
      exceed: '超過20點！請再調整清單',
    },
    {
      name: 'MessagesStage',
      messages: [
        {
          id: '01',
          avatar: 'avatarRD1',
          text: '等等等等！你都還不知道什麼是Sprint吧！<br />我們來介紹給你吧～等等會考你喔，仔細聽好了！',
          color: 'primary1',
          direction: 'left',
        },
        {
          id: '02',
          avatar: 'avatarRD2',
          text: 'Sprint是一個短衝，開發騎士們會在這期間執行開發。<br />在這段期間內，開發騎士們舉辦每日站立會議(Daily Scrum)以便追蹤成員間的工作狀況。<br /><br />除了每日站立會議，在Sprint結束時，也會舉行<span class="text-primary3">短衝檢視會議(Sprint Review)、短衝自省會議(Sprint Retrospective)。</span>',
          color: 'primary1',
          direction: 'left',
        },
        {
          id: '03',
          avatar: 'newbie',
          text: '什麼會議？？我搞不懂了......',
          color: 'primary3',
          direction: 'right',
        },
      ],
      action: true,
    },
    {
      name: 'SprintMeetingStage',
      items: [
        {
          title: '每日短衝會議',
          subtitle: 'Daily Scrum',
          overview: '每天都要進行的會議，以 15 分鐘為限制',
          list: [
            '昨天為團隊的短衝目標（Sprint Goal）做了那些進度',
            '今天我會如何準備來幫助團隊達到短衝目標',
            '過程中有遇到什麼問題、難題',
          ],
          conclusion: '透過團隊分享，追蹤大家的工作狀況。',
        },
        {
          title: '短衝檢視會議',
          subtitle: 'Sprint Review',
          overview: '用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。',
        },
        {
          title: '短衝自省會議',
          subtitle: 'Sprint Retrospective',
          overview: '團隊在自省會議裡，會共同回顧該短衝歷程發生的事情',
          list: ['好的地方', '可以改進的地方', '如何維持我們已有的成功經驗'],
          conclusion: '優化工作流程、讓團隊有變得更好的機會。',
          bonus: '推薦工具：',
          bonusImage: 'confluence-logo.jpg',
        },
      ],
    },
    {
      name: 'MessagesStage',
      messages: [
        {
          id: '01',
          avatar: 'avatarRD1',
          text: '把我們剛剛提過的各個會議，試著放到Scrum經典的流程圖當中吧！',
          color: 'primary1',
          direction: 'left',
          action: true,
        },
      ],
    },
    {
      name: 'SprintFlowStage',
      items: [
        {
          id: '03',
          text: '短衝規劃會議',
          type: 'meeting',
          order: 1,
        },
        {
          id: '02',
          text: '每日短衝會議',
          type: 'meeting',
          order: 2,
        },
        {
          id: '04',
          text: '短衝檢視會議',
          type: 'meeting',
          order: 3,
        },
        {
          id: '01',
          text: '短衝自省會議',
          type: 'meeting',
          order: 4,
        },
      ],
      candidates: {
        candidate01: {
          id: 'candidate01',
          item: {
            id: '01',
            text: '短衝自省會議',
            type: 'meeting',
            order: 4,
          },
        },
        candidate02: {
          id: 'candidate02',
          item: {
            id: '02',
            text: '每日短衝會議',
            type: 'meeting',
            order: 2,
          },
        },
        candidate03: {
          id: 'candidate03',
          item: {
            id: '03',
            text: '短衝規劃會議',
            type: 'meeting',
            order: 1,
          },
        },
        candidate04: {
          id: 'candidate04',
          item: {
            id: '04',
            text: '短衝檢視會議',
            type: 'meeting',
            order: 3,
          },
        },
      },
      flow: {
        space01: {
          id: 'space01',
          answer: 1,
          item: null,
        },
        space02: {
          id: 'space02',
          answer: 2,
          item: null,
        },
        space03: {
          id: 'space03',
          answer: 3,
          item: null,
        },
        space04: {
          id: 'space04',
          answer: 4,
          item: null,
        },
      },
      failMessage:
        '猴～剛剛沒有認真看齁<br />下圖這樣才是正確的Scrum流程圖喔！',
      successMessage: '厲害喔！答對了！',
      action: '完成挑戰',
      action2: '知道了！',
    },
    {
      name: 'RetroStage',
      message:
        '今天剛好是開發第二騎士團的 Retro，你也來看看 Retro 都該做些什麼吧～',
      button: true,
      show: false,
    },
    {
      name: 'RetroStage',
      message:
        '我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄在 <span class="text-primary1">Confluence</span> 中。 Retro 重點在於『<span class="text-primary1">正面表述</span>』，你也思考看看，哪一些是適合 Retro 的回饋吧～～',
      goods: [
        {
          id: 'good01',
          text: '這次我幫很多人救火欸！',
          truth: false,
        },
        {
          id: 'good02',
          text: '大家在開發上都會互相 Cover，讓任務都可以準時完成！',
          truth: true,
        },
      ],
      bads: [
        {
          id: 'bad01',
          text: '可以記錄這次的開發時間，讓預估團隊點數可以更精準。',
          truth: true,
        },
        {
          id: 'bad02',
          text: '開發預估時間不準確，請後端下次改進，以免影響到我。',
          truth: false,
        },
      ],
      action: '完成挑戰',
      failMessage: '確定不再看一下嗎？',
      show: true,
    },
    {
      name: 'EndingStage',
      text: '恭喜新進勇者通過新手任務<br />歡迎加入開發騎士團！',
      action: '重新開始',
    },
  ],
};

export default gamData;
