import React from 'react';
import XFlow from '@xrenders/xflow';

const settings = [
  {
    title: '流程控制',
    type: '_group',
    items: [
      {
        title: '开始',
        type: 'Start',
        description: '流程开始节点，用于标记流程的起点',
        icon: {
          type: 'icon-start',
          bgColor: '#17B26A',
        },
        settingSchema: {
          type: 'object',
          properties: {
            name: {
              title: '流程名称',
              type: 'string',
              widget: 'input',
              required: true,
            },
            description: {
              title: '流程描述',
              type: 'string',
              widget: 'textarea',
            },
            variables: {
              title: '流程变量',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: {
                    title: '变量名',
                    type: 'string',
                    required: true,
                  },
                  type: {
                    title: '变量类型',
                    type: 'string',
                    enum: ['string', 'number', 'boolean'],
                    default: 'string',
                  },
                  defaultValue: {
                    title: '默认值',
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
      {
        title: '结束',
        type: 'End',
        description: '流程结束节点，用于标记流程的终点',
        icon: {
          type: 'icon-end',
          bgColor: '#F79009',
        },
        settingSchema: {
          type: 'object',
          properties: {
            output: {
              title: '输出结果',
              type: 'string',
              widget: 'textarea',
            },
          },
        },
      },
    ],
  },
  {
    title: 'AI 能力',
    type: '_group',
    items: [
      {
        title: 'LLM',
        type: 'LLM',
        description: '调用大语言模型回答问题或者对自然语言进行处理',
        icon: {
          type: 'icon-model',
          bgColor: '#6172F3',
        },
        settingSchema: {
          type: 'object',
          properties: {
            model: {
              title: '模型选择',
              type: 'string',
              enum: ['gpt-3.5', 'gpt-4', 'claude-2', 'claude-3'],
              default: 'gpt-3.5',
            },
            temperature: {
              title: '温度',
              type: 'number',
              default: 0.7,
              minimum: 0,
              maximum: 1,
              description: '控制输出的随机性，值越高输出越随机',
            },
            maxTokens: {
              title: '最大Token数',
              type: 'number',
              default: 2000,
              minimum: 1,
              maximum: 4000,
            },
            systemPrompt: {
              title: '系统提示词',
              type: 'string',
              widget: 'textarea',
              description: '设置AI助手的角色和行为',
            },
            stopSequences: {
              title: '停止序列',
              type: 'array',
              items: {
                type: 'string',
              },
              description: '设置停止生成的关键词',
            },
          },
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
        settingSchema: {
          type: 'object',
          properties: {
            prompt: {
              title: '提示词',
              type: 'string',
              widget: 'textarea',
              default: '请帮我完成以下任务：',
            },
            variables: {
              title: '变量替换',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: {
                    title: '变量名',
                    type: 'string',
                    required: true,
                  },
                  value: {
                    title: '变量值',
                    type: 'string',
                  },
                },
              },
            },
            examples: {
              title: '示例',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  input: {
                    title: '输入',
                    type: 'string',
                    widget: 'textarea',
                  },
                  output: {
                    title: '输出',
                    type: 'string',
                    widget: 'textarea',
                  },
                },
              },
            },
          },
        },
      },
    ],
  },
  {
    title: '数据处理',
    type: '_group',
    items: [
      {
        title: '知识库',
        type: 'knowledge',
        description: '允许你从知识库中查询与用户问题相关的文本内容',
        icon: {
          type: 'icon-knowledge',
          bgColor: '#6172F3',
        },
        settingSchema: {
          type: 'object',
          properties: {
            knowledgeBase: {
              title: '知识库选择',
              type: 'string',
              enum: ['产品文档', '技术文档', '用户手册', 'API文档'],
              default: '产品文档',
            },
            searchLimit: {
              title: '检索限制',
              type: 'number',
              default: 5,
              minimum: 1,
              maximum: 10,
            },
            similarity: {
              title: '相似度阈值',
              type: 'number',
              default: 0.7,
              minimum: 0,
              maximum: 1,
              description: '设置检索结果的相似度阈值',
            },
            filters: {
              title: '过滤条件',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: {
                    title: '字段',
                    type: 'string',
                    required: true,
                  },
                  operator: {
                    title: '操作符',
                    type: 'string',
                    enum: ['equals', 'contains', 'greaterThan', 'lessThan'],
                    default: 'equals',
                  },
                  value: {
                    title: '值',
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
      {
        title: '数据转换',
        type: 'transform',
        description: '对数据进行格式转换和处理',
        icon: {
          type: 'icon-transform',
          bgColor: '#F79009',
        },
        settingSchema: {
          type: 'object',
          properties: {
            inputType: {
              title: '输入类型',
              type: 'string',
              enum: ['json', 'text', 'csv', 'xml'],
              default: 'json',
            },
            outputType: {
              title: '输出类型',
              type: 'string',
              enum: ['json', 'text', 'csv', 'xml'],
              default: 'json',
            },
            mapping: {
              title: '字段映射',
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  source: {
                    title: '源字段',
                    type: 'string',
                    required: true,
                  },
                  target: {
                    title: '目标字段',
                    type: 'string',
                    required: true,
                  },
                  transform: {
                    title: '转换规则',
                    type: 'string',
                    widget: 'textarea',
                  },
                },
              },
            },
          },
        },
      },
    ],
  },
];

const initialValues = {
  nodes: [
    {
      id: 'start',
      type: 'Start',
      data: {
        name: 'AI 助手流程',
        description: '一个基于 LLM 的智能助手流程',
        variables: [
          {
            name: 'userInput',
            type: 'string',
            defaultValue: '',
          },
        ],
      },
      position: {
        x: 100,
        y: 200,
      },
    },
    {
      id: 'llm',
      type: 'LLM',
      data: {
        model: 'gpt-3.5',
        temperature: 0.7,
        maxTokens: 2000,
        systemPrompt: '你是一个专业的AI助手，请用简洁专业的语言回答问题。',
      },
      position: {
        x: 400,
        y: 200,
      },
    },
    {
      id: 'knowledge',
      type: 'knowledge',
      data: {
        knowledgeBase: '产品文档',
        searchLimit: 5,
        similarity: 0.7,
      },
      position: {
        x: 700,
        y: 200,
      },
    },
    {
      id: 'end',
      type: 'End',
      data: {
        output: '处理完成',
      },
      position: {
        x: 1000,
        y: 200,
      },
    },
  ],
  edges: [
    {
      id: 'start-llm',
      source: 'start',
      target: 'llm',
    },
    {
      id: 'llm-knowledge',
      source: 'llm',
      target: 'knowledge',
    },
    {
      id: 'knowledge-end',
      source: 'knowledge',
      target: 'end',
    },
  ],
};

const Demo = () => {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <XFlow
        settings={settings}
        initialValues={initialValues}
      />
    </div>
  );
};

export default Demo;
