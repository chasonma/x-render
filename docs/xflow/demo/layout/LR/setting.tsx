export  const settings=[
  {
    title: '开始',
    type: 'Start',
    hidden: true,
    targetHandleHidden: true,
    icon: {
      type: 'icon-start',
      bgColor: '#17B26A',
    },
    settingSchema: {
      type: 'object',
      properties: {
        input: {
          title: '变量一',
          type: 'string',
          widget: 'input',
        },
        select: {
          title: '变量二',
          type: 'string',
          widget: 'select',
          props: {
            options: [
              { label: 'a', value: 'a' },
              { label: 'b', value: 'b' },
              { label: 'c', value: 'c' },
            ],
          },
        },
        radio1: {
          title: '点击单选',
          type: 'string',
          widget: 'radio',
          props: {
            options: [
              { label: '早', value: 'a' },
              { label: '中', value: 'b' },
              { label: '晚', value: 'c' }
            ]
          }
        },
        textarea1: {
          title: '长文本',
          type: 'string',
          widget: 'textArea'
        },
        date1: {
          title: '日期选择',
          type: 'string',
          widget: 'datePicker'
        },
        dateRange1: {
          title: '日期范围',
          type: 'range',
          widget: 'dateRange'
        },
        time1: {
          title: '时间选择',
          type: 'string',
          widget: 'timePicker'
        },
        timeRange1: {
          title: '时间范围',
          type: 'range',
          widget: 'timeRange'
        },
      },
    },
  },
  {
    title: '结束',
    type: 'End',
    hidden: true,
    sourceHandleHidden: true,
    icon: {
      type: 'icon-end',
      bgColor: '#F79009',
    },
    settingSchema: {
      type: "object",
      properties: {
        input: {
          title: '变量一',
          type: 'string',
          widget: 'input',
        },
        select: {
          title: '变量二',
          type: 'string',
          widget: 'select',
          props: {
            options: [
              { label: 'a', value: 'a' },
              { label: 'b', value: 'b' },
              { label: 'c', value: 'c' },
            ],
          },
        },
      }
    }
  },
  {
    title: 'LLM',
    type: 'LLM',
    description: '调用大语言模型回答问题或者对自然语言进行处理',
    icon: {
      type: 'icon-model',
      bgColor: '#6172F3',
    },
  },
  {
    title: 'Prompt',
    type: 'Prompt',
    description: '通过精心设计提示词，提升大语言模型回答效果',
    icon: {
      type: 'icon-prompt',
      bgColor: '#17B26A',
    },
  },
  {
    title: '知识库',
    type: 'knowledge',
    description: '允许你从知识库中查询与用户问题相关的文本内容',
    icon: {
      type: 'icon-knowledge',
      bgColor: '#6172F3',
    },
  },
  {
    title: 'Switch',
    type: 'Switch',
    description: '允许你根据 if/else 条件将 workflow 拆分成两个分支',
    icon: {
      type: 'icon-fenzhi',
      bgColor: '#06AED4',
    },
  },
  {
    title: 'HSF',
    type: 'hsf',
    description: '允许通过 HSF 协议发送服务器请求',
    icon: {
      type: 'icon-hsf',
      bgColor: '#875BF7',
    },
  },
  {
    title: 'Http',
    type: 'http',
    description: '允许通过 HTTP 协议发送服务器请求',
    icon: {
      type: 'icon-http',
      bgColor: '#875BF7',
    },
  },
  {
    title: '代码执行',
    type: 'Code',
    description: '执行一段 Groovy 或 Python 或 NodeJS 代码实现自定义逻辑',
    icon: {
      type: 'icon-code',
      bgColor: '#2E90FA',
    },
  },
  {
    title: '工具',
    type: 'tool',
    description: '允许使用工具能力',
    icon: {
      type: 'icon-gongju',
      bgColor: '#2E90FA',
    },
  },
  {
    title: '工具',
    type: '_group',
    items: [
      {
        title: '代码执行',
        type: 'Code',
        description: '执行一段 Groovy 或 Python 或 NodeJS 代码实现自定义逻辑',
        icon: {
          type: 'icon-code',
          bgColor: '#2E90FA',
        },
      },
      {
        title: '工具',
        type: 'tool',
        description: '允许使用工具能力',
        icon: {
          type: 'icon-gongju',
          bgColor: '#2E90FA',
        },
      },
    ],
  },
];


export const nodes = [
  {
    type: 'Start',
    id: '1',
    position: { x: -35, y: 268 },
  },
  {
    type: 'Switch',
    id: 'b6zsd6w5ah2b209t',
    position: { x: 277.5, y: 268 },
    data: {
      list: [
        {
          _id: 'iawoyh5niyi6zjob',
        },
      ],
    },
  },
  {
    type: 'Code',
    id: '3',
    position: { x: 675, y: 123.75 },
  },
  {
    type: 'tool',
    id: '4',
    position: { x: 686.25, y: 495 },
  },
  {
    type: 'End',
    id: '5',
    position: { x: 1176.2499999999998, y: 281.25 },
  },
];
export const edges = [
  {
    source: '3',
    target: '5',
    id: 'e3-5',
  },
  {
    source: '4',
    target: '5',
    id: 'e4-5',
  },
  {
    id: 'px7fsmha99pju315',
    source: '1',
    target: 'b6zsd6w5ah2b209t',
  },
  {
    type: 'buttonedge',
    source: 'b6zsd6w5ah2b209t',
    sourceHandle: 'iawoyh5niyi6zjob',
    target: '3',
    id: 'xy-edge__b6zsd6w5ah2b209tiawoyh5niyi6zjob-3',
  },
  {
    type: 'buttonedge',
    source: 'b6zsd6w5ah2b209t',
    sourceHandle: 'id_else',
    target: '4',
    id: 'xy-edge__b6zsd6w5ah2b209tid_else-4',
  },
];
