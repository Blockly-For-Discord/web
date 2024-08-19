const LibInfo = {
  name: 'DiscordJS',
  id: 'discordjs',
  version: 'v0.0.0',
  description: 'discord.js is a powerful Node.js module that allows you to interact with the Discord API very easily.'
};

export const DiscordJSTooblox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Logic',
      categorystyle: 'logic_category',
      contents: [
        {
          type: 'discordjs:aw_block',
          kind: 'block'
        },
        {
          type: 'controls_if',
          kind: 'block'
        },
        {
          type: 'logic_compare',
          kind: 'block',
          fields: {
            OP: 'EQ'
          }
        },
        {
          type: 'logic_operation',
          kind: 'block',
          fields: {
            OP: 'AND'
          }
        },
        {
          type: 'logic_negate',
          kind: 'block'
        },
        {
          type: 'logic_boolean',
          kind: 'block',
          fields: {
            BOOL: 'TRUE'
          }
        },
        {
          type: 'logic_null',
          kind: 'block'
        },
        {
          type: 'logic_ternary',
          kind: 'block'
        }
      ]
    },
    {
      kind: 'category',
      name: 'Loops',
      categorystyle: 'loop_category',
      contents: [
        {
          type: 'controls_repeat_ext',
          kind: 'block',
          inputs: {
            TIMES: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 10
                }
              }
            }
          }
        },
        {
          type: 'controls_whileUntil',
          kind: 'block',
          fields: {
            MODE: 'WHILE'
          }
        },
        {
          type: 'controls_for',
          kind: 'block',
          fields: {
            VAR: {
              name: 'i'
            }
          },
          inputs: {
            FROM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1
                }
              }
            },
            TO: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 10
                }
              }
            },
            BY: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1
                }
              }
            }
          }
        },
        {
          type: 'controls_forEach',
          kind: 'block',
          fields: {
            VAR: {
              name: 'j'
            }
          }
        },
        {
          type: 'controls_flow_statements',
          kind: 'block',
          fields: {
            FLOW: 'BREAK'
          }
        }
      ]
    },
    {
      kind: 'category',
      name: 'Math',
      categorystyle: 'math_category',
      contents: [
        {
          type: 'math_number',
          kind: 'block',
          fields: {
            NUM: 123
          }
        },
        {
          type: 'math_arithmetic',
          kind: 'block',
          fields: {
            OP: 'ADD'
          },
          inputs: {
            A: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1
                }
              }
            },
            B: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1
                }
              }
            }
          }
        },
        {
          type: 'math_single',
          kind: 'block',
          fields: {
            OP: 'ROOT'
          },
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 9
                }
              }
            }
          }
        },
        {
          type: 'math_trig',
          kind: 'block',
          fields: {
            OP: 'SIN'
          },
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 45
                }
              }
            }
          }
        },
        {
          type: 'math_constant',
          kind: 'block',
          fields: {
            CONSTANT: 'PI'
          }
        },
        {
          type: 'math_number_property',
          kind: 'block',
          fields: {
            PROPERTY: 'EVEN'
          },
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0
                }
              }
            }
          }
        },
        {
          type: 'math_round',
          kind: 'block',
          fields: {
            OP: 'ROUND'
          },
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 3.1
                }
              }
            }
          }
        },
        {
          type: 'math_on_list',
          kind: 'block',
          fields: {
            OP: 'SUM'
          }
        },
        {
          type: 'math_modulo',
          kind: 'block',
          inputs: {
            DIVIDEND: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 64
                }
              }
            },
            DIVISOR: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 10
                }
              }
            }
          }
        },
        {
          type: 'math_constrain',
          kind: 'block',
          inputs: {
            VALUE: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50
                }
              }
            },
            LOW: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1
                }
              }
            },
            HIGH: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100
                }
              }
            }
          }
        },
        {
          type: 'math_random_int',
          kind: 'block',
          inputs: {
            FROM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1
                }
              }
            },
            TO: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100
                }
              }
            }
          }
        },
        {
          type: 'math_random_float',
          kind: 'block'
        },
        {
          type: 'math_atan2',
          kind: 'block',
          inputs: {
            X: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1
                }
              }
            },
            Y: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1
                }
              }
            }
          }
        }
      ]
    },
    {
      kind: 'category',
      name: 'Text',
      categorystyle: 'text_category',
      contents: [
        {
          type: 'text',
          kind: 'block',
          fields: {
            TEXT: ''
          }
        },
        {
          type: 'text_join',
          kind: 'block'
        },
        {
          type: 'text_append',
          kind: 'block',
          fields: {
            name: 'item'
          },
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ''
                }
              }
            }
          }
        },
        {
          type: 'text_length',
          kind: 'block',
          inputs: {
            VALUE: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc'
                }
              }
            }
          }
        },
        {
          type: 'discordjs:text_has',
          kind: 'block',
          inputs: {
            in: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'hello world'
                }
              }
            },
            out: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'world'
                }
              }
            }
          }
        },
        {
          type: 'text_isEmpty',
          kind: 'block',
          inputs: {
            VALUE: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ''
                }
              }
            }
          }
        },
        {
          type: 'text_indexOf',
          kind: 'block',
          fields: {
            END: 'FIRST'
          },
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: 'text'
                  }
                }
              }
            },
            FIND: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc'
                }
              }
            }
          }
        },
        {
          type: 'text_charAt',
          kind: 'block',
          fields: {
            WHERE: 'FROM_START'
          },
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: 'text'
                  }
                }
              }
            }
          }
        },
        {
          type: 'text_getSubstring',
          kind: 'block',
          fields: {
            WHERE1: 'FROM_START',
            WHERE2: 'FROM_START'
          },
          inputs: {
            STRING: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: 'text'
                  }
                }
              }
            }
          }
        },
        {
          type: 'text_changeCase',
          kind: 'block',
          fields: {
            CASE: 'UPPERCASE'
          },
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc'
                }
              }
            }
          }
        },
        {
          type: 'text_trim',
          kind: 'block',
          fields: {
            MODE: 'BOTH'
          },
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc'
                }
              }
            }
          }
        },
        {
          type: 'text_count',
          kind: 'block',
          inputs: {
            SUB: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ''
                }
              }
            },
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ''
                }
              }
            }
          }
        },
        {
          type: 'text_replace',
          kind: 'block',
          inputs: {
            FROM: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ''
                }
              }
            },
            TO: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ''
                }
              }
            },
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ''
                }
              }
            }
          }
        },
        {
          type: 'text_reverse',
          kind: 'block',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ''
                }
              }
            }
          }
        }
      ]
    },
    {
      kind: 'category',
      name: 'Lists',
      categorystyle: 'list_category',
      contents: [
        {
          type: 'lists_create_with',
          kind: 'block'
        },
        {
          type: 'lists_repeat',
          kind: 'block',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 5
                }
              }
            }
          }
        },
        {
          type: 'lists_length',
          kind: 'block'
        },
        {
          type: 'lists_isEmpty',
          kind: 'block'
        },
        {
          type: 'lists_indexOf',
          kind: 'block',

          fields: {
            END: 'FIRST'
          },
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: 'list'
                  }
                }
              }
            }
          }
        },
        {
          type: 'lists_getIndex',
          kind: 'block',
          fields: {
            MODE: 'GET',
            WHERE: 'FROM_START'
          },
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: 'list'
                  }
                }
              }
            }
          }
        },
        {
          type: 'lists_setIndex',
          kind: 'block',
          fields: {
            MODE: 'SET',
            WHERE: 'FROM_START'
          },
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: 'list'
                  }
                }
              }
            }
          }
        },
        {
          type: 'lists_getSublist',
          kind: 'block',
          fields: {
            WHERE1: 'FROM_START',
            WHERE2: 'FROM_START'
          },
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: 'list'
                  }
                }
              }
            }
          }
        },
        {
          type: 'lists_split',
          kind: 'block',

          fields: {
            MODE: 'SPLIT'
          },
          inputs: {
            DELIM: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ','
                }
              }
            }
          }
        },
        {
          type: 'lists_sort',
          kind: 'block',

          fields: {
            TYPE: 'NUMERIC',
            DIRECTION: '1'
          }
        },
        {
          type: 'lists_reverse',
          kind: 'block'
        }
      ]
    },
    {
      kind: 'sep'
    },
    {
      kind: 'category',
      name: 'Variables',
      custom: 'VARIABLE',
      categorystyle: 'variable_category'
    },
    {
      kind: 'category',
      name: 'Functions',
      custom: 'PROCEDURE',
      categorystyle: 'procedure_category'
    },
    {
      kind: 'category',
      name: 'Console',
      colour: b4d.color.console,
      contents: [
        {
          text: 'Console',
          kind: 'label'
        },
        {
          type: 'discordjs:console_send',
          kind: 'block',
          inputs: {
            text: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'message'
                }
              }
            }
          }
        },
        {
          text: 'Events',
          kind: 'label'
        },
        {
          type: 'discordjs:console_on_error',
          kind: 'block'
        },
        {
          type: 'discordjs:console_error',
          kind: 'block'
        }
      ]
    },
    {
      kind: 'sep'
    },
    {
      kind: 'category',
      name: 'Base',
      colour: b4d.color.base,
      contents: [
        {
          text: 'Login',
          kind: 'label'
        },
        {
          type: 'discordjs:base_login',
          kind: 'block',
          inputs: {
            token: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'Token here'
                }
              }
            }
          }
        },
        {
          type: 'discordjs:base_login_advanced',
          kind: 'block',
          inputs: {
            token: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'Token here'
                }
              }
            },
            intents: {
              shadow: {
                type: 'lists_create_with'
              }
            }
          }
        },
        {
          text: 'Secrets',
          kind: 'label'
        },
        {
          type: 'discordjs:base_env',
          kind: 'block',
          inputs: {
            var: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'variable_name'
                }
              }
            }
          }
        },
        {
          text: 'Events',
          kind: 'label'
        },
        {
          type: 'discordjs:base_on_login',
          kind: 'block'
        },
        {
          text: 'Actions',
          kind: 'label'
        },
        {
          type: 'discordjs:base_set_status',
          kind: 'block',
          inputs: {
            text: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'Made in b4d!'
                }
              }
            }
          }
        },
        {
          type: 'discordjs:base_shutdown',
          kind: 'block'
        }
      ]
    },
    {
      kind: 'category',
      name: 'Messages',
      colour: b4d.color.message,
      contents: [
        {
          text: 'Events',
          kind: 'label'
        },
        {
          type: 'discordjs:message_on_message',
          kind: 'block'
        },
        {
          text: 'Data',
          kind: 'label'
        },
        {
          type: 'discordjs:message_reference',
          kind: 'block'
        },
        {
          type: 'discordjs:message_content',
          kind: 'block'
        },
        {
          type: 'discordjs:message_channel',
          kind: 'block'
        },
        {
          text: 'Actions',
          kind: 'label'
        },
        {
          type: 'discordjs:message_reply',
          kind: 'block',
          inputs: {
            text: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'Hey!'
                }
              }
            },
            mention: {
              shadow: {
                type: 'logic_boolean',
                fields: {
                  BOOL: 'TRUE'
                }
              }
            },
            message: {
              shadow: {
                type: 'discordjs:message_reference'
              }
            }
          }
        },
        {
          type: 'discordjs:message_send',
          kind: 'block',
          inputs: {
            text: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'Hello!'
                }
              }
            },
            channel: {
              shadow: {
                type: 'discordjs:message_channel'
              }
            }
          }
        },
        {
          type: 'discordjs:message_edit',
          kind: 'block',
          inputs: {
            message: {
              shadow: {
                type: 'discordjs:message_reference'
              }
            },
            content: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'Edit'
                }
              }
            }
          }
        },
        {
          type: 'discordjs:message_react',
          kind: 'block',
          inputs: {
            emoji: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '👍'
                }
              }
            },
            message: {
              shadow: {
                type: 'discordjs:message_reference'
              }
            }
          }
        },
        {
          type: 'discordjs:message_remove_reaction',
          kind: 'block',
          inputs: {
            emoji: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '👍'
                }
              }
            },
            message: {
              shadow: {
                type: 'discordjs:message_reference'
              }
            }
          }
        },
        {
          type: 'discordjs:message_remove_reactions',
          kind: 'block',
          inputs: {
            message: {
              shadow: {
                type: 'discordjs:message_reference'
              }
            }
          }
        },
        {
          type: 'discordjs:message_delete',
          kind: 'block',
          inputs: {
            message: {
              shadow: {
                type: 'discordjs:message_reference'
              }
            }
          }
        }
      ]
    },
    {
      kind: 'category',
      name: 'Components',
      colour: b4d.color.component,
      contents: [
        {
          kind: 'category',
          name: 'Embeds',
          colour: b4d.color.embed,
          contents: [
            {
              text: 'Main block',
              kind: 'label'
            },
            {
              type: 'discordjs:embed_create',
              kind: 'block',
              inputs: {
                name: {
                  shadow: {
                    type: 'text',
                    fields: {
                      TEXT: 'embed1'
                    }
                  }
                }
              }
            },
            {
              text: 'Embed parts',
              kind: 'label'
            },
            {
              text: 'Component',
              kind: 'label'
            }
          ]
        },
        {
          kind: 'category',
          name: 'Polls',
          colour: b4d.color.poll,
          contents: [
            {
              text: 'Create polls',
              kind: 'label'
            },
            {
              type: 'discordjs:poll_create',
              kind: 'block',
              inputs: {
                name: {
                  shadow: {
                    type: 'text',
                    fields: {
                      TEXT: 'poll1'
                    }
                  }
                },
                question: {
                  shadow: {
                    type: 'text',
                    fields: {
                      TEXT: 'question'
                    }
                  }
                },
                time: {
                  shadow: {
                    type: 'math_number',
                    fields: {
                      NUM: 24
                    }
                  }
                },
                multi: {
                  shadow: {
                    type: 'logic_boolean',
                    fields: {
                      BOOL: 'FALSE'
                    }
                  }
                }
              }
            },
            {
              type: 'discordjs:poll_answer',
              kind: 'block',
              inputs: {
                text: {
                  shadow: {
                    type: 'text',
                    fields: {
                      TEXT: 'answer'
                    }
                  }
                },
                emoji: {
                  shadow: {
                    type: 'text',
                    fields: {
                      TEXT: ''
                    }
                  }
                }
              }
            },
            {
              text: 'Component',
              kind: 'label'
            },
            {
              type: 'discordjs:component',
              kind: 'block',
              inputs: {
                poll: {
                  shadow: {
                    type: 'text',
                    fields: {
                      TEXT: 'poll1'
                    }
                  }
                }
              }
            },
            {
              text: 'Actions',
              kind: 'label'
            },
            {
              type: 'discordjs:poll_end',
              kind: 'block',
              inputs: {
                message: {
                  shadow: {
                    type: 'discordjs:message_reference'
                  }
                }
              }
            }
          ]
        }
      ]
    },
    {
      kind: 'category',
      name: 'Channels',
      colour: b4d.color.channel,
      contents: [
        {
          kind: 'label',
          text: 'Get a channel/Category'
        },
        {
          type: 'discordjs:channel_get',
          kind: 'block',
          inputs: {
            in: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ''
                }
              }
            }
          }
        },
        {
          kind: 'label',
          text: 'Data'
        },
        {
          type: 'discordjs:channel_data',
          kind: 'block',
          inputs: {
            channel: {
              shadow: {
                type: 'discordjs:message_channel'
              }
            }
          }
        },
        {
          type: 'discordjs:channel_data_num',
          kind: 'block',
          inputs: {
            channel: {
              shadow: {
                type: 'discordjs:message_channel'
              }
            }
          }
        },
        {
          type: 'discordjs:channel_data_bool',
          kind: 'block',
          inputs: {
            channel: {
              shadow: {
                type: 'discordjs:message_channel'
              }
            }
          }
        },
        {
          type: 'discordjs:channel_category',
          kind: 'block',
          inputs: {
            channel: {
              shadow: {
                type: 'discordjs:message_channel'
              }
            }
          }
        },
        {
          type: 'discordjs:channel_server',
          kind: 'block',
          inputs: {
            channel: {
              shadow: {
                type: 'discordjs:message_channel'
              }
            }
          }
        },
        {
          type: 'discordjs:channel_last_message',
          kind: 'block',
          inputs: {
            channel: {
              shadow: {
                type: 'discordjs:message_channel'
              }
            }
          }
        }
      ]
    }
  ]
};
