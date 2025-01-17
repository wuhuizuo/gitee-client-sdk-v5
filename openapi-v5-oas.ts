export default {
  "openapi": "3.1.1",
  "info": {
    "title": "Gitee Open API",
    "version": "5.4.86"
  },
  "servers": [
    {
      "url": "https://gitee.com/api"
    },
    {
      "url": "http://gitee.com/api"
    }
  ],
  "tags": [
    {
      "name": "Checks",
      "description": "Operations about Checks"
    },
    {
      "name": "Repositories",
      "description": "Operations about Repositories"
    },
    {
      "name": "Issues",
      "description": "Operations about Issues"
    },
    {
      "name": "Git Data",
      "description": "Operations about Git Data"
    },
    {
      "name": "Labels",
      "description": "Operations about Labels"
    },
    {
      "name": "Milestones",
      "description": "Operations about Milestones"
    },
    {
      "name": "Miscellaneous",
      "description": "Operations about Miscellaneous"
    },
    {
      "name": "Pull Requests",
      "description": "Operations about Pull Requests"
    },
    {
      "name": "Webhooks",
      "description": "Operations about Webhooks"
    },
    {
      "name": "Activity",
      "description": "Operations about Activities"
    },
    {
      "name": "Users",
      "description": "Operations about Users"
    },
    {
      "name": "Organizations",
      "description": "Operations about Organizations"
    },
    {
      "name": "Enterprises",
      "description": "Operations about Enterprises"
    },
    {
      "name": "Gists",
      "description": "Operations about Gists"
    },
    {
      "name": "Search",
      "description": "Operations about Searches"
    },
    {
      "name": "Emails",
      "description": "Operations about Emails"
    }
  ],
  "paths": {
    "/v5/repos/:owner/:repo/check-runs": {
      "post": {
        "tags": [
          "Checks"
        ],
        "summary": "创建检查项",
        "description": "创建检查项",
        "operationId": "postV5ReposOwnerRepoCheckRuns",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "actions[description]",
                  "actions[identifier]",
                  "actions[label]",
                  "head_sha",
                  "name",
                  "output[annotations][annotation_level]",
                  "output[annotations][end_line]",
                  "output[annotations][message]",
                  "output[annotations][path]",
                  "output[annotations][start_line]",
                  "output[images][alt]",
                  "output[images][image_url]",
                  "output[summary]",
                  "output[title]"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "pull_request_id": {
                    "type": "integer",
                    "description": "PullRequest ID",
                    "format": "int32"
                  },
                  "details_url": {
                    "type": "string",
                    "description": "详情链接"
                  },
                  "status": {
                    "type": "string",
                    "description": "状态",
                    "default": "queued",
                    "enum": [
                      "queued",
                      "in_progress",
                      "completed"
                    ]
                  },
                  "started_at": {
                    "type": "string",
                    "description": "开始时间",
                    "format": "date-time"
                  },
                  "conclusion": {
                    "type": "string",
                    "description": "结论",
                    "enum": [
                      "neutral",
                      "success",
                      "failure",
                      "cancelled",
                      "action_required",
                      "timed_out",
                      "skipped"
                    ]
                  },
                  "completed_at": {
                    "type": "string",
                    "description": "完成时间",
                    "format": "date-time"
                  },
                  "output[title]": {
                    "type": "string",
                    "description": "标题"
                  },
                  "output[summary]": {
                    "type": "string",
                    "description": "概论"
                  },
                  "output[text]": {
                    "type": "string",
                    "description": "详细信息"
                  },
                  "output[annotations][path]": {
                    "type": "array",
                    "description": "路径",
                    "items": {
                      "type": "string"
                    }
                  },
                  "output[annotations][start_line]": {
                    "type": "array",
                    "description": "开始行",
                    "items": {
                      "type": "integer",
                      "format": "int32"
                    }
                  },
                  "output[annotations][end_line]": {
                    "type": "array",
                    "description": "结束行",
                    "items": {
                      "type": "integer",
                      "format": "int32"
                    }
                  },
                  "output[annotations][start_column]": {
                    "type": "array",
                    "description": "开始列",
                    "items": {
                      "type": "integer",
                      "format": "int32"
                    }
                  },
                  "output[annotations][end_column]": {
                    "type": "array",
                    "description": "结束列",
                    "items": {
                      "type": "integer",
                      "format": "int32"
                    }
                  },
                  "output[annotations][annotation_level]": {
                    "type": "array",
                    "description": "注释级别",
                    "items": {
                      "type": "string"
                    },
                    "enum": [
                      "notice",
                      "warning",
                      "failure"
                    ]
                  },
                  "output[annotations][message]": {
                    "type": "array",
                    "description": "注释信息",
                    "items": {
                      "type": "string"
                    }
                  },
                  "output[annotations][title]": {
                    "type": "array",
                    "description": "标题",
                    "items": {
                      "type": "string"
                    }
                  },
                  "output[annotations][raw_details]": {
                    "type": "array",
                    "description": "详情内容",
                    "items": {
                      "type": "string"
                    }
                  },
                  "output[images][alt]": {
                    "type": "array",
                    "description": "注释",
                    "items": {
                      "type": "string"
                    }
                  },
                  "output[images][image_url]": {
                    "type": "array",
                    "description": "URL",
                    "items": {
                      "type": "string"
                    }
                  },
                  "output[images][caption]": {
                    "type": "array",
                    "description": "描述",
                    "items": {
                      "type": "string"
                    }
                  },
                  "actions[label]": {
                    "type": "array",
                    "description": "文本",
                    "items": {
                      "type": "string"
                    }
                  },
                  "actions[description]": {
                    "type": "array",
                    "description": "描述",
                    "items": {
                      "type": "string"
                    }
                  },
                  "actions[identifier]": {
                    "type": "array",
                    "description": "标识",
                    "items": {
                      "type": "string"
                    }
                  },
                  "name": {
                    "type": "string",
                    "description": "名字"
                  },
                  "head_sha": {
                    "type": "string",
                    "description": "提交的 sha 值（必须是完整的）"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CheckRun"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/check-runs/:check_run_id": {
      "get": {
        "tags": [
          "Checks"
        ],
        "summary": "获取检查项详情",
        "description": "获取检查项详情",
        "operationId": "getV5ReposOwnerRepoCheckRunsCheckRunId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "check_run_id",
            "in": "path",
            "description": "检查项 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CheckRun"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "Checks"
        ],
        "summary": "更新检查项",
        "description": "更新检查项",
        "operationId": "patchV5ReposOwnerRepoCheckRunsCheckRunId",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "check_run_id",
            "in": "path",
            "description": "检查项 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "required": [
                  "actions[description]",
                  "actions[identifier]",
                  "actions[label]",
                  "output[annotations][annotation_level]",
                  "output[annotations][end_line]",
                  "output[annotations][message]",
                  "output[annotations][path]",
                  "output[annotations][start_line]",
                  "output[images][alt]",
                  "output[images][image_url]",
                  "output[summary]",
                  "output[title]"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "pull_request_id": {
                    "type": "integer",
                    "description": "关联 pull_request 的 ID",
                    "format": "int32"
                  },
                  "details_url": {
                    "type": "string",
                    "description": "详情链接"
                  },
                  "status": {
                    "type": "string",
                    "description": "状态",
                    "default": "queued",
                    "enum": [
                      "queued",
                      "in_progress",
                      "completed"
                    ]
                  },
                  "started_at": {
                    "type": "string",
                    "description": "开始时间",
                    "format": "date-time"
                  },
                  "conclusion": {
                    "type": "string",
                    "description": "结论",
                    "enum": [
                      "neutral",
                      "success",
                      "failure",
                      "cancelled",
                      "action_required",
                      "timed_out",
                      "skipped"
                    ]
                  },
                  "completed_at": {
                    "type": "string",
                    "description": "完成时间",
                    "format": "date-time"
                  },
                  "output[title]": {
                    "type": "string",
                    "description": "标题"
                  },
                  "output[summary]": {
                    "type": "string",
                    "description": "概论"
                  },
                  "output[text]": {
                    "type": "string",
                    "description": "详细信息"
                  },
                  "output[annotations][path]": {
                    "type": "array",
                    "description": "路径",
                    "items": {
                      "type": "string"
                    }
                  },
                  "output[annotations][start_line]": {
                    "type": "array",
                    "description": "开始行",
                    "items": {
                      "type": "integer",
                      "format": "int32"
                    }
                  },
                  "output[annotations][end_line]": {
                    "type": "array",
                    "description": "结束行",
                    "items": {
                      "type": "integer",
                      "format": "int32"
                    }
                  },
                  "output[annotations][start_column]": {
                    "type": "array",
                    "description": "开始列",
                    "items": {
                      "type": "integer",
                      "format": "int32"
                    }
                  },
                  "output[annotations][end_column]": {
                    "type": "array",
                    "description": "结束列",
                    "items": {
                      "type": "integer",
                      "format": "int32"
                    }
                  },
                  "output[annotations][annotation_level]": {
                    "type": "array",
                    "description": "注释级别",
                    "items": {
                      "type": "string"
                    },
                    "enum": [
                      "notice",
                      "warning",
                      "failure"
                    ]
                  },
                  "output[annotations][message]": {
                    "type": "array",
                    "description": "注释信息",
                    "items": {
                      "type": "string"
                    }
                  },
                  "output[annotations][title]": {
                    "type": "array",
                    "description": "标题",
                    "items": {
                      "type": "string"
                    }
                  },
                  "output[annotations][raw_details]": {
                    "type": "array",
                    "description": "详情内容",
                    "items": {
                      "type": "string"
                    }
                  },
                  "output[images][alt]": {
                    "type": "array",
                    "description": "注释",
                    "items": {
                      "type": "string"
                    }
                  },
                  "output[images][image_url]": {
                    "type": "array",
                    "description": "URL",
                    "items": {
                      "type": "string"
                    }
                  },
                  "output[images][caption]": {
                    "type": "array",
                    "description": "描述",
                    "items": {
                      "type": "string"
                    }
                  },
                  "actions[label]": {
                    "type": "array",
                    "description": "文本",
                    "items": {
                      "type": "string"
                    }
                  },
                  "actions[description]": {
                    "type": "array",
                    "description": "描述",
                    "items": {
                      "type": "string"
                    }
                  },
                  "actions[identifier]": {
                    "type": "array",
                    "description": "标识",
                    "items": {
                      "type": "string"
                    }
                  },
                  "name": {
                    "type": "string",
                    "description": "名字"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CheckRun"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/check-runs/:check_run_id/annotations": {
      "get": {
        "tags": [
          "Checks"
        ],
        "summary": "获取检查项代码注释",
        "description": "获取检查项代码注释",
        "operationId": "getV5ReposOwnerRepoCheckRunsCheckRunIdAnnotations",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "check_run_id",
            "in": "path",
            "description": "检查项 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CheckAnnotation"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/commits/:ref/check-runs": {
      "get": {
        "tags": [
          "Checks"
        ],
        "summary": "获取某个提交的检查项",
        "description": "获取某个提交的检查项",
        "operationId": "getV5ReposOwnerRepoCommitsRefCheckRuns",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "ref",
            "in": "path",
            "description": "分支名\\标签名\\sha 值",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "pull_request_id",
            "in": "query",
            "description": "关联 pull request 的 ID",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 0
            }
          },
          {
            "name": "check_name",
            "in": "query",
            "description": "检查项名称",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "检查项状态",
            "schema": {
              "type": "string",
              "enum": [
                "expected",
                "queued",
                "in_progress",
                "completed"
              ]
            }
          },
          {
            "name": "filter",
            "in": "query",
            "description": "最新的\\全部",
            "schema": {
              "type": "string",
              "default": "latest",
              "enum": [
                "all",
                "latest"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CheckRun"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/branches": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取所有分支",
        "description": "获取所有分支",
        "operationId": "getV5ReposOwnerRepoBranches",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序字段",
            "schema": {
              "type": "string",
              "default": "name",
              "enum": [
                "name",
                "updated"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "排序方向",
            "schema": {
              "type": "string",
              "default": "asc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Branch"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "创建分支",
        "description": "创建分支",
        "operationId": "postV5ReposOwnerRepoBranches",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "branch_name",
                  "refs"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "refs": {
                    "type": "string",
                    "description": "起点名称，默认：master",
                    "default": "master"
                  },
                  "branch_name": {
                    "type": "string",
                    "description": "新创建的分支名称"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompleteBranch"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/branches/:branch": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取单个分支",
        "description": "获取单个分支",
        "operationId": "getV5ReposOwnerRepoBranchesBranch",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "branch",
            "in": "path",
            "description": "分支名称",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompleteBranch"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/branches/:branch/protection": {
      "put": {
        "tags": [
          "Repositories"
        ],
        "summary": "设置分支保护",
        "description": "设置分支保护",
        "operationId": "putV5ReposOwnerRepoBranchesBranchProtection",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "branch",
            "in": "path",
            "description": "分支名称",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompleteBranch"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Repositories"
        ],
        "summary": "取消保护分支的设置",
        "description": "取消保护分支的设置",
        "operationId": "deleteV5ReposOwnerRepoBranchesBranchProtection",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "branch",
            "in": "path",
            "description": "分支名称",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "取消保护分支的设置",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/branches/:wildcard/setting": {
      "put": {
        "tags": [
          "Repositories"
        ],
        "summary": "更新保护分支规则",
        "description": "更新保护分支规则",
        "operationId": "putV5ReposOwnerRepoBranchesWildcardSetting",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "wildcard",
            "in": "path",
            "description": "分支/通配符",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "merger",
                  "mode",
                  "pusher"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "new_wildcard": {
                    "type": "string",
                    "description": "新分支/通配符 (为空不修改)"
                  },
                  "pusher": {
                    "type": "string",
                    "description": "可推送代码成员。developer：仓库管理员和开发者；admin：仓库管理员；none：禁止任何人合并; 用户：个人的地址 path（多个用户用 ';' 隔开）",
                    "default": "admin"
                  },
                  "merger": {
                    "type": "string",
                    "description": "可合并 Pull Request 成员。developer：仓库管理员和开发者；admin：仓库管理员；none：禁止任何人合并; 用户：个人的地址 path（多个用户用 ';' 隔开）",
                    "default": "admin"
                  },
                  "mode": {
                    "type": "string",
                    "description": "模式。standard: 标准模式，review: 评审模式",
                    "default": "standard",
                    "enum": [
                      "standard",
                      "review"
                    ]
                  },
                  "escapse_protect_branch_list": {
                    "type": "array",
                    "description": "不受规则影响的分支列表，以英文逗号分隔，形如：['a', 'b']",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProtectionRule"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Repositories"
        ],
        "summary": "删除保护分支规则",
        "description": "删除保护分支规则",
        "operationId": "deleteV5ReposOwnerRepoBranchesWildcardSetting",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "wildcard",
            "in": "path",
            "description": "分支/通配符",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProtectionRule"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/branches/setting/new": {
      "put": {
        "tags": [
          "Repositories"
        ],
        "summary": "新建保护分支规则",
        "description": "新建保护分支规则",
        "operationId": "putV5ReposOwnerRepoBranchesSettingNew",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "merger",
                  "mode",
                  "pusher",
                  "wildcard"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "wildcard": {
                    "type": "string",
                    "description": "分支/通配符"
                  },
                  "pusher": {
                    "type": "string",
                    "description": "可推送代码成员。developer：仓库管理员和开发者；admin：仓库管理员；none：禁止任何人合并; 用户：个人的地址 path（多个用户用 ';' 隔开）",
                    "default": "admin"
                  },
                  "merger": {
                    "type": "string",
                    "description": "可合并 Pull Request 成员。developer：仓库管理员和开发者；admin：仓库管理员；none：禁止任何人合并; 用户：个人的地址 path（多个用户用 ';' 隔开）",
                    "default": "admin"
                  },
                  "mode": {
                    "type": "string",
                    "description": "模式。standard: 标准模式，review: 评审模式",
                    "default": "standard",
                    "enum": [
                      "standard",
                      "review"
                    ]
                  },
                  "escapse_protect_branch_list": {
                    "type": "array",
                    "description": "不受规则影响的分支列表，以英文逗号分隔，形如：['a', 'b']",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProtectionRule"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/tags": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "列出仓库所有的 tags",
        "description": "列出仓库所有的 tags",
        "operationId": "getV5ReposOwnerRepoTags",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序字段",
            "schema": {
              "type": "string",
              "default": "name",
              "enum": [
                "name",
                "updated"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "排序方向",
            "schema": {
              "type": "string",
              "default": "asc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Tag"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "创建一个仓库的 Tag",
        "description": "创建一个仓库的 Tag",
        "operationId": "postV5ReposOwnerRepoTags",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "refs",
                  "tag_name"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "refs": {
                    "type": "string",
                    "description": "起点名称，默认：master",
                    "default": "master"
                  },
                  "tag_name": {
                    "type": "string",
                    "description": "新创建的标签名称"
                  },
                  "tag_message": {
                    "type": "string",
                    "description": "Tag 描述，默认为空"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tag"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/comments": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库的 Commit 评论",
        "description": "获取仓库的 Commit 评论",
        "operationId": "getV5ReposOwnerRepoComments",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "order",
            "in": "query",
            "description": "排序顺序：asc(default),desc",
            "schema": {
              "type": "string",
              "default": "asc"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Note"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/commits/:ref/comments": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取单个 Commit 的评论",
        "description": "获取单个 Commit 的评论",
        "operationId": "getV5ReposOwnerRepoCommitsRefComments",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ref",
            "in": "path",
            "description": "Commit 的 Reference",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Note"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/comments/:id": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库的某条 Commit 评论",
        "description": "获取仓库的某条 Commit 评论",
        "operationId": "getV5ReposOwnerRepoCommentsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "评论的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Note"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "delete": {
        "tags": [
          "Repositories"
        ],
        "summary": "删除 Commit 评论",
        "description": "删除 Commit 评论",
        "operationId": "deleteV5ReposOwnerRepoCommentsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "评论的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除 Commit 评论",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Repositories"
        ],
        "summary": "更新 Commit 评论",
        "description": "更新 Commit 评论",
        "operationId": "patchV5ReposOwnerRepoCommentsId",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "评论的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "required": [
                  "body"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "body": {
                    "type": "string",
                    "description": "评论的内容"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Note"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/commits/:sha/comments": {
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "创建 Commit 评论",
        "description": "创建 Commit 评论",
        "operationId": "postV5ReposOwnerRepoCommitsShaComments",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sha",
            "in": "path",
            "description": "评论的 sha 值",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "body"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "body": {
                    "type": "string",
                    "description": "评论的内容"
                  },
                  "path": {
                    "type": "string",
                    "description": "文件的相对路径"
                  },
                  "position": {
                    "type": "integer",
                    "description": "Diff 的相对行数",
                    "format": "int32"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Note"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/issues/comments": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取仓库所有 Issue 的评论",
        "description": "获取仓库所有 Issue 的评论",
        "operationId": "getV5ReposOwnerRepoIssuesComments",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "Either created or updated. Default: created",
            "schema": {
              "type": "string",
              "default": "created",
              "enum": [
                "created",
                "updated"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "Either asc or desc. Ignored without the sort parameter.",
            "schema": {
              "type": "string",
              "default": "asc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "Only comments updated at or after this time are returned.\n                                                                                            This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Note"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/issues/:number/comments": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取仓库某个 Issue 所有的评论",
        "description": "获取仓库某个 Issue 所有的评论",
        "operationId": "getV5ReposOwnerRepoIssuesNumberComments",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "Only comments updated at or after this time are returned.\n                                                                                            This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "order",
            "in": "query",
            "description": "排序顺序：asc(default),desc",
            "schema": {
              "type": "string",
              "default": "asc"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Note"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "post": {
        "tags": [
          "Issues"
        ],
        "summary": "创建某个 Issue 评论",
        "description": "创建某个 Issue 评论",
        "operationId": "postV5ReposOwnerRepoIssuesNumberComments",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "body"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "body": {
                    "type": "string",
                    "description": "The contents of the comment."
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Note"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/issues/comments/:id": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取仓库 Issue 某条评论",
        "description": "获取仓库 Issue 某条评论",
        "operationId": "getV5ReposOwnerRepoIssuesCommentsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "评论的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Note"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "delete": {
        "tags": [
          "Issues"
        ],
        "summary": "删除 Issue 某条评论",
        "description": "删除 Issue 某条评论",
        "operationId": "deleteV5ReposOwnerRepoIssuesCommentsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "评论的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除 Issue 某条评论",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Issues"
        ],
        "summary": "更新 Issue 某条评论",
        "description": "更新 Issue 某条评论",
        "operationId": "patchV5ReposOwnerRepoIssuesCommentsId",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "评论的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "required": [
                  "body"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "body": {
                    "type": "string",
                    "description": "The contents of the comment."
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Note"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/commits": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "仓库的所有提交",
        "description": "仓库的所有提交",
        "operationId": "getV5ReposOwnerRepoCommits",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sha",
            "in": "query",
            "description": "提交起始的 SHA 值或者分支名。默认：仓库的默认分支",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "path",
            "in": "query",
            "description": "包含该文件的提交",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "author",
            "in": "query",
            "description": "提交作者的邮箱或个人空间地址 (username/login)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "提交的起始时间，时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "until",
            "in": "query",
            "description": "提交的最后时间，时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/RepoCommit"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "提交多个文件变更",
        "description": "提交多个文件变更",
        "operationId": "postV5ReposOwnerRepoCommits",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/postV5ReposOwnerRepoCommits"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RepoCommitWithFiles"
                }
              }
            }
          }
        },
        "x-codegen-request-body-name": "V5ReposOwnerRepoCommits"
      }
    },
    "/v5/repos/:owner/:repo/commits/:sha": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "仓库的某个提交",
        "description": "仓库的某个提交",
        "operationId": "getV5ReposOwnerRepoCommitsSha",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sha",
            "in": "path",
            "description": "提交的 SHA 值或者分支名",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RepoCommitWithFiles"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/compare/:base...{head}": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "Commits 对比",
        "description": "Commits 对比\n 返回的 commits 数量限制在 100 以内",
        "operationId": "getV5ReposOwnerRepoCompareBase...Head",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "base",
            "in": "path",
            "description": "对比的起点。Commit SHA、分支名或标签名",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "head",
            "in": "path",
            "description": "对比的终点。Commit SHA、分支名或标签名",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "straight",
            "in": "query",
            "description": "是否直对比。默认 false",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "suffix",
            "in": "query",
            "description": "按照文件后缀过滤文件，如 `.txt`。只影响 `files`",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Compare"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/keys": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库已部署的公钥",
        "description": "获取仓库已部署的公钥",
        "operationId": "getV5ReposOwnerRepoKeys",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/SSHKey"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "为仓库添加公钥",
        "description": "为仓库添加公钥",
        "operationId": "postV5ReposOwnerRepoKeys",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "key",
                  "title"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "key": {
                    "type": "string",
                    "description": "公钥内容"
                  },
                  "title": {
                    "type": "string",
                    "description": "公钥名称"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SSHKey"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/keys/available": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库可部署的公钥",
        "description": "获取仓库可部署的公钥",
        "operationId": "getV5ReposOwnerRepoKeysAvailable",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/SSHKeyBasic"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/keys/enable/:id": {
      "put": {
        "tags": [
          "Repositories"
        ],
        "summary": "启用仓库公钥",
        "description": "启用仓库公钥",
        "operationId": "putV5ReposOwnerRepoKeysEnableId",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "公钥 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "已启用",
            "content": {}
          },
          "403": {
            "description": "没有启用权限",
            "content": {}
          }
        }
      },
      "delete": {
        "tags": [
          "Repositories"
        ],
        "summary": "停用仓库公钥",
        "description": "停用仓库公钥",
        "operationId": "deleteV5ReposOwnerRepoKeysEnableId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "公钥 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "已停用",
            "content": {}
          },
          "404": {
            "description": "没有相关公钥",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/keys/:id": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库的单个公钥",
        "description": "获取仓库的单个公钥",
        "operationId": "getV5ReposOwnerRepoKeysId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "公钥 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SSHKey"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Repositories"
        ],
        "summary": "删除一个仓库公钥",
        "description": "删除一个仓库公钥",
        "operationId": "deleteV5ReposOwnerRepoKeysId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "公钥 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除一个仓库公钥",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/readme": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库 README",
        "description": "获取仓库 README",
        "operationId": "getV5ReposOwnerRepoReadme",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ref",
            "in": "query",
            "description": "分支、tag 或 commit。默认：仓库的默认分支 (通常是 master)",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Content"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/contents(/:path)": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库具体路径下的内容",
        "description": "获取仓库具体路径下的内容",
        "operationId": "getV5ReposOwnerRepoContents(Path)",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "path",
            "in": "path",
            "description": "文件的路径",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ref",
            "in": "query",
            "description": "分支、tag 或 commit。默认：仓库的默认分支 (通常是 master)",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Content"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/contents/:path": {
      "put": {
        "tags": [
          "Repositories"
        ],
        "summary": "更新文件",
        "description": "更新文件",
        "operationId": "putV5ReposOwnerRepoContentsPath",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "path",
            "in": "path",
            "description": "文件的路径",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "content",
                  "message",
                  "sha"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "content": {
                    "type": "string",
                    "description": "文件内容，要用 base64 编码"
                  },
                  "sha": {
                    "type": "string",
                    "description": "文件的 Blob SHA，可通过 [获取仓库具体路径下的内容] API 获取"
                  },
                  "message": {
                    "type": "string",
                    "description": "提交信息"
                  },
                  "branch": {
                    "type": "string",
                    "description": "分支名称。默认为仓库对默认分支"
                  },
                  "committer[name]": {
                    "type": "string",
                    "description": "Committer 的名字，默认为当前用户的名字"
                  },
                  "committer[email]": {
                    "type": "string",
                    "description": "Committer 的邮箱，默认为当前用户的邮箱"
                  },
                  "author[name]": {
                    "type": "string",
                    "description": "Author 的名字，默认为当前用户的名字"
                  },
                  "author[email]": {
                    "type": "string",
                    "description": "Author 的邮箱，默认为当前用户的邮箱"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CommitContent"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "新建文件",
        "description": "新建文件",
        "operationId": "postV5ReposOwnerRepoContentsPath",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "path",
            "in": "path",
            "description": "文件的路径",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "content",
                  "message"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "content": {
                    "type": "string",
                    "description": "文件内容，要用 base64 编码"
                  },
                  "message": {
                    "type": "string",
                    "description": "提交信息"
                  },
                  "branch": {
                    "type": "string",
                    "description": "分支名称。默认为仓库对默认分支"
                  },
                  "committer[name]": {
                    "type": "string",
                    "description": "Committer 的名字，默认为当前用户的名字"
                  },
                  "committer[email]": {
                    "type": "string",
                    "description": "Committer 的邮箱，默认为当前用户的邮箱"
                  },
                  "author[name]": {
                    "type": "string",
                    "description": "Author 的名字，默认为当前用户的名字"
                  },
                  "author[email]": {
                    "type": "string",
                    "description": "Author 的邮箱，默认为当前用户的邮箱"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CommitContent"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Repositories"
        ],
        "summary": "删除文件",
        "description": "删除文件",
        "operationId": "deleteV5ReposOwnerRepoContentsPath",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "path",
            "in": "path",
            "description": "文件的路径",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sha",
            "in": "query",
            "description": "文件的 Blob SHA，可通过 [获取仓库具体路径下的内容] API 获取",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "message",
            "in": "query",
            "description": "提交信息",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "branch",
            "in": "query",
            "description": "分支名称。默认为仓库对默认分支",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "committer[name]",
            "in": "query",
            "description": "Committer 的名字，默认为当前用户的名字",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "committer[email]",
            "in": "query",
            "description": "Committer 的邮箱，默认为当前用户的邮箱",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "author[name]",
            "in": "query",
            "description": "Author 的名字，默认为当前用户的名字",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "author[email]",
            "in": "query",
            "description": "Author 的邮箱，默认为当前用户的邮箱",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CommitContent"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/blame/:path": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "Blame",
        "description": "Blame",
        "operationId": "getV5ReposOwnerRepoBlamePath",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "path",
            "in": "path",
            "description": "文件的路径（1 MB 以内的文件文件）",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ref",
            "in": "query",
            "description": "分支、tag 或 commit。默认：仓库的默认分支（通常是 master）",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Blame"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/raw/:path": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取 raw 文件（100MB 以内）",
        "description": "获取 raw 文件（100MB 以内）",
        "operationId": "getV5ReposOwnerRepoRawPath",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "path",
            "in": "path",
            "description": "文件的路径",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ref",
            "in": "query",
            "description": "分支、tag 或 commit。默认：仓库的默认分支（通常是 master）",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "获取 raw 文件（100MB 以内）",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/zipball": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "下载仓库 zip",
        "description": "下载仓库 zip",
        "operationId": "getV5ReposOwnerRepoZipball",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ref",
            "in": "query",
            "description": "分支、tag 或 commit。默认：仓库的默认分支 (通常是 master)",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "下载仓库 zip",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/tarball": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "下载仓库 tar.gz",
        "description": "下载仓库 tar.gz",
        "operationId": "getV5ReposOwnerRepoTarball",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ref",
            "in": "query",
            "description": "分支、tag 或 commit。默认：仓库的默认分支 (通常是 master)",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "下载仓库 tar.gz",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/git/blobs/:sha": {
      "get": {
        "tags": [
          "Git Data"
        ],
        "summary": "获取文件 Blob",
        "description": "获取文件 Blob",
        "operationId": "getV5ReposOwnerRepoGitBlobsSha",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sha",
            "in": "path",
            "description": "文件的 Blob SHA，可通过 [获取仓库具体路径下的内容] API 获取",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Blob"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/git/trees/:sha": {
      "get": {
        "tags": [
          "Git Data"
        ],
        "summary": "获取目录 Tree",
        "description": "获取目录 Tree",
        "operationId": "getV5ReposOwnerRepoGitTreesSha",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sha",
            "in": "path",
            "description": "可以是分支名 (如 master)、Commit 或者目录 Tree 的 SHA 值",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "recursive",
            "in": "query",
            "description": "赋值为 1 递归获取目录",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tree"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          },
          "422": {
            "description": "SHA 值必须为 Commit 或 Tree 的",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/git/gitee_metrics": {
      "get": {
        "tags": [
          "Git Data"
        ],
        "summary": "获取 Gitee 指数",
        "description": "获取 Gitee 指数",
        "operationId": "getV5ReposOwnerRepoGitGiteeMetrics",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GiteeMetrics"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/issues": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "仓库的所有 Issues",
        "description": "仓库的所有 Issues",
        "operationId": "getV5ReposOwnerRepoIssues",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "state",
            "in": "query",
            "description": "Issue 的状态：open（开启的）, progressing(进行中), closed（关闭的）, rejected（拒绝的）。默认：open",
            "schema": {
              "type": "string",
              "default": "open",
              "enum": [
                "open",
                "progressing",
                "closed",
                "rejected",
                "all"
              ]
            }
          },
          {
            "name": "labels",
            "in": "query",
            "description": "用逗号分开的标签。如：bug,performance",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序依据：创建时间 (created)，更新时间 (updated_at)。默认：created_at",
            "schema": {
              "type": "string",
              "default": "created",
              "enum": [
                "created",
                "updated"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "排序方式：升序 (asc)，降序 (desc)。默认：desc",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "起始的更新时间，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "schedule",
            "in": "query",
            "description": "计划开始日期，格式：20181006T173008+80-20181007T173008+80（区间），或者 -20181007T173008+80（小于 20181007T173008+80），或者 20181006T173008+80-（大于 20181006T173008+80），要求时间格式为 20181006T173008+80",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "deadline",
            "in": "query",
            "description": "计划截止日期，格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "created_at",
            "in": "query",
            "description": "任务创建时间，格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "finished_at",
            "in": "query",
            "description": "任务完成时间，即任务最后一次转为已完成状态的时间点。格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "milestone",
            "in": "query",
            "description": "根据里程碑标题。none 为没里程碑的，*为所有带里程碑的",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "assignee",
            "in": "query",
            "description": "用户的 username。none 为没指派者，*为所有带有指派者的",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "creator",
            "in": "query",
            "description": "创建 Issues 的用户 username",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "program",
            "in": "query",
            "description": "所属项目名称。none 为没有所属项目，*为所有带所属项目的",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Issue"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/issues/:number": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "仓库的某个 Issue",
        "description": "仓库的某个 Issue",
        "operationId": "getV5ReposOwnerRepoIssuesNumber",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Issue"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/issues": {
      "post": {
        "tags": [
          "Issues"
        ],
        "summary": "创建 Issue",
        "description": "创建 Issue",
        "operationId": "postV5ReposOwnerIssues",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "title"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "repo": {
                    "type": "string",
                    "description": "仓库路径 (path)"
                  },
                  "title": {
                    "type": "string",
                    "description": "Issue 标题"
                  },
                  "issue_type": {
                    "type": "string",
                    "description": "企业自定义任务类型，非企业默认任务类型为“任务”"
                  },
                  "body": {
                    "type": "string",
                    "description": "Issue 描述"
                  },
                  "assignee": {
                    "type": "string",
                    "description": "Issue 负责人的个人空间地址"
                  },
                  "collaborators": {
                    "type": "string",
                    "description": "Issue 协助者的个人空间地址，以 , 分隔"
                  },
                  "milestone": {
                    "type": "integer",
                    "description": "里程碑序号",
                    "format": "int32"
                  },
                  "labels": {
                    "type": "string",
                    "description": "用逗号分开的标签，名称要求长度在 2-20 之间且非特殊字符。如：bug,performance"
                  },
                  "program": {
                    "type": "string",
                    "description": "项目 ID"
                  },
                  "security_hole": {
                    "type": "boolean",
                    "description": "是否是私有 issue(默认为 false)"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Issue"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/issues/:number": {
      "patch": {
        "tags": [
          "Issues"
        ],
        "summary": "更新 Issue",
        "description": "更新 Issue",
        "operationId": "patchV5ReposOwnerIssuesNumber",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "repo": {
                    "type": "string",
                    "description": "仓库路径 (path)"
                  },
                  "title": {
                    "type": "string",
                    "description": "Issue 标题"
                  },
                  "state": {
                    "type": "string",
                    "description": "Issue 状态，open（开启的）、progressing（进行中）、closed（关闭的）",
                    "enum": [
                      "open",
                      "progressing",
                      "closed"
                    ]
                  },
                  "body": {
                    "type": "string",
                    "description": "Issue 描述"
                  },
                  "assignee": {
                    "type": "string",
                    "description": "Issue 负责人的个人空间地址"
                  },
                  "collaborators": {
                    "type": "string",
                    "description": "Issue 协助者的个人空间地址，以 , 分隔"
                  },
                  "milestone": {
                    "type": "integer",
                    "description": "里程碑序号",
                    "format": "int32"
                  },
                  "labels": {
                    "type": "string",
                    "description": "用逗号分开的标签，名称要求长度在 2-20 之间且非特殊字符。如：bug,performance"
                  },
                  "program": {
                    "type": "string",
                    "description": "项目 ID"
                  },
                  "security_hole": {
                    "type": "boolean",
                    "description": "是否是私有 issue(默认为 false)"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Issue"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/issues/:number/pull_requests": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取 issue 关联的 Pull Requests",
        "description": "获取 issue 关联的 Pull Requests",
        "operationId": "getV5ReposOwnerIssuesNumberPullRequests",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "query",
            "description": "仓库路径 (path)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PullRequest"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/issues/:number/operate_logs": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取某个 Issue 下的操作日志",
        "description": "获取某个 Issue 下的操作日志",
        "operationId": "getV5ReposOwnerIssuesNumberOperateLogs",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "query",
            "description": "仓库路径 (path)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "按递增 (asc) 或递减 (desc) 排序，默认：递减",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "desc",
                "asc"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/OperateLog"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/labels": {
      "get": {
        "tags": [
          "Labels"
        ],
        "summary": "获取仓库所有任务标签",
        "description": "获取仓库所有任务标签",
        "operationId": "getV5ReposOwnerRepoLabels",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Label"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Labels"
        ],
        "summary": "创建仓库任务标签",
        "description": "创建仓库任务标签",
        "operationId": "postV5ReposOwnerRepoLabels",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "color",
                  "name"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "name": {
                    "type": "string",
                    "description": "标签名称"
                  },
                  "color": {
                    "type": "string",
                    "description": "标签颜色。为 6 位的数字，如：000000"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Label"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/labels/:name": {
      "get": {
        "tags": [
          "Labels"
        ],
        "summary": "根据标签名称获取单个标签",
        "description": "根据标签名称获取单个标签",
        "operationId": "getV5ReposOwnerRepoLabelsName",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "name",
            "in": "path",
            "description": "标签名称",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Label"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Labels"
        ],
        "summary": "删除一个仓库任务标签",
        "description": "删除一个仓库任务标签",
        "operationId": "deleteV5ReposOwnerRepoLabelsName",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "name",
            "in": "path",
            "description": "标签名称",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除一个仓库任务标签",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/labels/:original_name": {
      "patch": {
        "tags": [
          "Labels"
        ],
        "summary": "更新一个仓库任务标签",
        "description": "更新一个仓库任务标签",
        "operationId": "patchV5ReposOwnerRepoLabelsOriginalName",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "original_name",
            "in": "path",
            "description": "标签原有名称",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "name": {
                    "type": "string",
                    "description": "标签新名称"
                  },
                  "color": {
                    "type": "string",
                    "description": "标签新颜色"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Label"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/issues/:number/labels": {
      "get": {
        "tags": [
          "Labels"
        ],
        "summary": "获取仓库任务的所有标签",
        "description": "获取仓库任务的所有标签",
        "operationId": "getV5ReposOwnerRepoIssuesNumberLabels",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Label"
                  }
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "Labels"
        ],
        "summary": "替换 Issue 所有标签",
        "description": "替换 Issue 所有标签\n 需要在请求的 body 里填上数组，元素为标签的名字。如：[\"performance\", \"bug\"]",
        "operationId": "putV5ReposOwnerRepoIssuesNumberLabels",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Label"
                  }
                }
              }
            }
          }
        },
        "x-codegen-request-body-name": "body"
      },
      "post": {
        "tags": [
          "Labels"
        ],
        "summary": "创建 Issue 标签",
        "description": "创建 Issue 标签\n 需要在请求的 body 里填上数组，元素为标签的名字。如：[\"performance\", \"bug\"]",
        "operationId": "postV5ReposOwnerRepoIssuesNumberLabels",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Label"
                  }
                }
              }
            }
          }
        },
        "x-codegen-request-body-name": "body"
      },
      "delete": {
        "tags": [
          "Labels"
        ],
        "summary": "删除 Issue 所有标签",
        "description": "删除 Issue 所有标签",
        "operationId": "deleteV5ReposOwnerRepoIssuesNumberLabels",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除 Issue 所有标签",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/issues/:number/labels/:name": {
      "delete": {
        "tags": [
          "Labels"
        ],
        "summary": "删除 Issue 标签",
        "description": "删除 Issue 标签",
        "operationId": "deleteV5ReposOwnerRepoIssuesNumberLabelsName",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "name",
            "in": "path",
            "description": "标签名称 (批量删除用英文逗号分隔，如：bug,feature)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除 Issue 标签",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/project_labels": {
      "get": {
        "tags": [
          "Labels"
        ],
        "summary": "获取仓库所有标签",
        "description": "获取仓库所有标签",
        "operationId": "getV5ReposOwnerRepoProjectLabels",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectLabel"
                  }
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "Labels"
        ],
        "summary": "替换所有仓库标签",
        "description": "替换所有仓库标签",
        "operationId": "putV5ReposOwnerRepoProjectLabels",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectLabel"
                  }
                }
              }
            }
          }
        },
        "x-codegen-request-body-name": "body"
      },
      "post": {
        "tags": [
          "Labels"
        ],
        "summary": "添加仓库标签",
        "description": "添加仓库标签",
        "operationId": "postV5ReposOwnerRepoProjectLabels",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectLabel"
                  }
                }
              }
            }
          }
        },
        "x-codegen-request-body-name": "body"
      },
      "delete": {
        "tags": [
          "Labels"
        ],
        "summary": "删除仓库标签",
        "description": "删除仓库标签",
        "operationId": "deleteV5ReposOwnerRepoProjectLabels",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "标签名数组，如：[\"feat\", \"bug\"]",
          "content": {
            "*/*": {}
          },
          "required": true
        },
        "responses": {
          "204": {
            "description": "删除仓库标签",
            "content": {}
          }
        },
        "x-codegen-request-body-name": "body"
      }
    },
    "/v5/repos/:owner/:repo/milestones": {
      "get": {
        "tags": [
          "Milestones"
        ],
        "summary": "获取仓库所有里程碑",
        "description": "获取仓库所有里程碑",
        "operationId": "getV5ReposOwnerRepoMilestones",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "state",
            "in": "query",
            "description": "里程碑状态：open, closed, all。默认：open",
            "schema": {
              "type": "string",
              "default": "open",
              "enum": [
                "open",
                "closed",
                "all"
              ]
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序方式：due_on",
            "schema": {
              "type": "string",
              "default": "due_on",
              "enum": [
                "due_on"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "升序 (asc) 或是降序 (desc)。默认：asc",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Milestone"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Milestones"
        ],
        "summary": "创建仓库里程碑",
        "description": "创建仓库里程碑",
        "operationId": "postV5ReposOwnerRepoMilestones",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "due_on",
                  "title"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "title": {
                    "type": "string",
                    "description": "里程碑标题"
                  },
                  "state": {
                    "type": "string",
                    "description": "里程碑状态：open, closed, all。默认：open",
                    "default": "open",
                    "enum": [
                      "open",
                      "closed",
                      "all"
                    ]
                  },
                  "description": {
                    "type": "string",
                    "description": "里程碑具体描述"
                  },
                  "due_on": {
                    "type": "string",
                    "description": "里程碑的截止日期",
                    "format": "date"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Milestone"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/milestones/:number": {
      "get": {
        "tags": [
          "Milestones"
        ],
        "summary": "获取仓库单个里程碑",
        "description": "获取仓库单个里程碑",
        "operationId": "getV5ReposOwnerRepoMilestonesNumber",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "里程碑序号 (id)",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Milestone"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Milestones"
        ],
        "summary": "删除仓库单个里程碑",
        "description": "删除仓库单个里程碑",
        "operationId": "deleteV5ReposOwnerRepoMilestonesNumber",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "里程碑序号 (id)",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除仓库单个里程碑",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Milestones"
        ],
        "summary": "更新仓库里程碑",
        "description": "更新仓库里程碑",
        "operationId": "patchV5ReposOwnerRepoMilestonesNumber",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "里程碑序号 (id)",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "required": [
                  "due_on",
                  "title"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "title": {
                    "type": "string",
                    "description": "里程碑标题"
                  },
                  "state": {
                    "type": "string",
                    "description": "里程碑状态：open, closed, all。默认：open",
                    "default": "open",
                    "enum": [
                      "open",
                      "closed",
                      "all"
                    ]
                  },
                  "description": {
                    "type": "string",
                    "description": "里程碑具体描述"
                  },
                  "due_on": {
                    "type": "string",
                    "description": "里程碑的截止日期",
                    "format": "date"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Milestone"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/license": {
      "get": {
        "tags": [
          "Miscellaneous"
        ],
        "summary": "获取一个仓库使用的开源许可协议",
        "description": "获取一个仓库使用的开源许可协议",
        "operationId": "getV5ReposOwnerRepoLicense",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "获取一个仓库使用的开源许可协议",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pages": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取 Pages 信息",
        "description": "获取 Pages 信息",
        "operationId": "getV5ReposOwnerRepoPages",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "获取 Pages 信息",
            "content": {}
          }
        }
      },
      "put": {
        "tags": [
          "Repositories"
        ],
        "summary": "上传设置 Pages SSL 证书和域名",
        "description": "上传设置 Pages SSL 证书和域名",
        "operationId": "putV5ReposOwnerRepoPages",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "domain"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "domain": {
                    "type": "string",
                    "description": "自定义域名"
                  },
                  "ssl_certificate_crt": {
                    "type": "string",
                    "description": "证书文件内容（需进行 BASE64 编码）"
                  },
                  "ssl_certificate_key": {
                    "type": "string",
                    "description": "私钥文件内容（需进行 BASE64 编码）"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "上传设置 Pages SSL 证书和域名",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pages/builds": {
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "请求建立 Pages",
        "description": "请求建立 Pages",
        "operationId": "postV5ReposOwnerRepoPagesBuilds",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "请求建立 Pages",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取用户的某个仓库",
        "description": "获取用户的某个仓库",
        "operationId": "getV5ReposOwnerRepo",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Project"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Repositories"
        ],
        "summary": "删除一个仓库",
        "description": "删除一个仓库",
        "operationId": "deleteV5ReposOwnerRepo",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除一个仓库",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Repositories"
        ],
        "summary": "更新仓库设置",
        "description": "更新仓库设置",
        "operationId": "patchV5ReposOwnerRepo",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "required": [
                  "name"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "name": {
                    "type": "string",
                    "description": "仓库名称"
                  },
                  "description": {
                    "type": "string",
                    "description": "仓库描述"
                  },
                  "homepage": {
                    "type": "string",
                    "description": "主页 (eg: https://gitee.com)"
                  },
                  "has_issues": {
                    "type": "boolean",
                    "description": "允许提 Issue 与否。默认：允许 (true)",
                    "default": true
                  },
                  "has_wiki": {
                    "type": "boolean",
                    "description": "提供 Wiki 与否。默认：提供 (true)",
                    "default": true
                  },
                  "can_comment": {
                    "type": "boolean",
                    "description": "允许用户对仓库进行评论。默认：允许 (true)",
                    "default": true
                  },
                  "issue_comment": {
                    "type": "boolean",
                    "description": "允许对“关闭”状态的 Issue 进行评论。默认：不允许 (false)"
                  },
                  "security_hole_enabled": {
                    "type": "boolean",
                    "description": "这个 Issue 涉及到安全/隐私问题，提交后不公开此 Issue（可见范围：仓库成员，企业成员）"
                  },
                  "private": {
                    "type": "boolean",
                    "description": "仓库公开或私有。"
                  },
                  "path": {
                    "type": "string",
                    "description": "更新仓库路径"
                  },
                  "default_branch": {
                    "type": "string",
                    "description": "更新默认分支"
                  },
                  "pull_requests_enabled": {
                    "type": "boolean",
                    "description": "接受 pull request，协作开发"
                  },
                  "online_edit_enabled": {
                    "type": "boolean",
                    "description": "是否允许仓库文件在线编辑"
                  },
                  "lightweight_pr_enabled": {
                    "type": "boolean",
                    "description": "是否接受轻量级 pull request"
                  },
                  "merge_enabled": {
                    "type": "boolean",
                    "description": "是否开启 merge 合并方式，默认为开启"
                  },
                  "squash_enabled": {
                    "type": "boolean",
                    "description": "是否开启 squash 合并方式，默认为开启"
                  },
                  "rebase_enabled": {
                    "type": "boolean",
                    "description": "是否开启 rebase 合并方式，默认为开启"
                  },
                  "default_merge_method": {
                    "type": "string",
                    "description": "选择默认合并 Pull Request 的方式，分别为 merge squash rebase",
                    "enum": [
                      "merge",
                      "squash",
                      "rebase"
                    ]
                  },
                  "issue_template_source": {
                    "type": "string",
                    "description": "Issue 模版来源 project: 使用仓库 Issue Template 作为模版；enterprise: 使用企业工作项作为模版",
                    "enum": [
                      "project",
                      "enterprise"
                    ]
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Project"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/reviewer": {
      "put": {
        "tags": [
          "Repositories"
        ],
        "summary": "修改代码审查设置",
        "description": "修改代码审查设置",
        "operationId": "putV5ReposOwnerRepoReviewer",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "assignees",
                  "assignees_number",
                  "testers",
                  "testers_number"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "assignees": {
                    "type": "string",
                    "description": "审查人员 username，可多个，半角逗号分隔，如：(username1,username2)"
                  },
                  "testers": {
                    "type": "string",
                    "description": "测试人员 username，可多个，半角逗号分隔，如：(username1,username2)"
                  },
                  "assignees_number": {
                    "type": "integer",
                    "description": "最少审查人数",
                    "format": "int32"
                  },
                  "testers_number": {
                    "type": "integer",
                    "description": "最少测试人数",
                    "format": "int32"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Project"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/push_config": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库推送规则设置",
        "description": "获取仓库推送规则设置",
        "operationId": "getV5ReposOwnerRepoPushConfig",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectPushConfig"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "Repositories"
        ],
        "summary": "修改仓库推送规则设置",
        "description": "修改仓库推送规则设置",
        "operationId": "putV5ReposOwnerRepoPushConfig",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "restrict_push_own_commit": {
                    "type": "boolean",
                    "description": "启用只能推送自己的提交（所推送提交中的邮箱必须与推送者所设置的提交邮箱一致）"
                  },
                  "restrict_author_email_suffix": {
                    "type": "boolean",
                    "description": "启用只允许指定邮箱域名后缀的提交"
                  },
                  "author_email_suffix": {
                    "type": "string",
                    "description": "指定邮箱域名的后缀"
                  },
                  "restrict_commit_message": {
                    "type": "boolean",
                    "description": "启用提交信息正则表达式校验"
                  },
                  "commit_message_regex": {
                    "type": "string",
                    "description": "用于验证提交信息的正则表达式"
                  },
                  "restrict_file_size": {
                    "type": "boolean",
                    "description": "启用限制单文件大小"
                  },
                  "max_file_size": {
                    "type": "integer",
                    "description": "限制单文件大小（MB）",
                    "format": "int32"
                  },
                  "except_manager": {
                    "type": "boolean",
                    "description": "仓库管理员不受上述规则限制"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectPushConfig"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/contributors": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库贡献者",
        "description": "获取仓库贡献者",
        "operationId": "getV5ReposOwnerRepoContributors",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "贡献者类型",
            "schema": {
              "type": "string",
              "default": "committers",
              "enum": [
                "authors",
                "committers"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Contributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/clear": {
      "put": {
        "tags": [
          "Repositories"
        ],
        "summary": "清空一个仓库",
        "description": "清空一个仓库",
        "operationId": "putV5ReposOwnerRepoClear",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "清空仓库成功",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/collaborators": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库的所有成员",
        "description": "获取仓库的所有成员",
        "operationId": "getV5ReposOwnerRepoCollaborators",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectMember"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/collaborators/:username": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "判断用户是否为仓库成员",
        "description": "判断用户是否为仓库成员",
        "operationId": "getV5ReposOwnerRepoCollaboratorsUsername",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "用户为仓库成员",
            "content": {}
          }
        }
      },
      "put": {
        "tags": [
          "Repositories"
        ],
        "summary": "添加仓库成员或更新仓库成员权限",
        "description": "添加仓库成员或更新仓库成员权限",
        "operationId": "putV5ReposOwnerRepoCollaboratorsUsername",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "permission"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "permission": {
                    "type": "string",
                    "description": "成员权限：拉代码 (pull)，推代码 (push)，管理员 (admin)。默认：push",
                    "default": "push",
                    "enum": [
                      "pull",
                      "push",
                      "admin"
                    ]
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectMember"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Repositories"
        ],
        "summary": "移除仓库成员",
        "description": "移除仓库成员",
        "operationId": "deleteV5ReposOwnerRepoCollaboratorsUsername",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "移除仓库成员",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/collaborators/:username/permission": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "查看仓库成员的权限",
        "description": "查看仓库成员的权限",
        "operationId": "getV5ReposOwnerRepoCollaboratorsUsernamePermission",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectMemberPermission"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/forks": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "查看仓库的 Forks",
        "description": "查看仓库的 Forks",
        "operationId": "getV5ReposOwnerRepoForks",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序方式：fork 的时间 (newest, oldest)，star 的人数 (stargazers)",
            "schema": {
              "type": "string",
              "default": "newest",
              "enum": [
                "newest",
                "oldest",
                "stargazers"
              ]
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Project"
                  }
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "Fork 一个仓库",
        "description": "Fork 一个仓库",
        "operationId": "postV5ReposOwnerRepoForks",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "organization": {
                    "type": "string",
                    "description": "组织空间完整地址，不填写默认 Fork 到用户个人空间地址"
                  },
                  "name": {
                    "type": "string",
                    "description": "fork 后仓库名称。默认：源仓库名称"
                  },
                  "path": {
                    "type": "string",
                    "description": "fork 后仓库地址。默认：源仓库地址"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Project"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/baidu_statistic_key": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库的百度统计 key",
        "description": "获取仓库的百度统计 key",
        "operationId": "getV5ReposOwnerRepoBaiduStatisticKey",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "获取仓库的百度统计 key",
            "content": {}
          }
        }
      },
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "设置/更新仓库的百度统计 key",
        "description": "设置/更新仓库的百度统计 key",
        "operationId": "postV5ReposOwnerRepoBaiduStatisticKey",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "key": {
                    "type": "string",
                    "description": "通过百度统计页面获取的 hm.js? 后面的 key"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "设置/更新仓库的百度统计 key",
            "content": {}
          }
        }
      },
      "delete": {
        "tags": [
          "Repositories"
        ],
        "summary": "删除仓库的百度统计 key",
        "description": "删除仓库的百度统计 key",
        "operationId": "deleteV5ReposOwnerRepoBaiduStatisticKey",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除仓库的百度统计 key",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/traffic-data": {
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取最近 30 天的七日以内访问量",
        "description": "获取最近 30 天的七日以内访问量",
        "operationId": "postV5ReposOwnerRepoTrafficData",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "start_day": {
                    "type": "string",
                    "description": "访问量的开始时间，默认今天，格式：yyyy-MM-dd"
                  },
                  "end_day": {
                    "type": "string",
                    "description": "访问量的结束时间，默认七天前，格式：yyyy-MM-dd"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectTrafficData"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/languages": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "仓库代码语言字节数",
        "description": "仓库代码语言字节数",
        "operationId": "getV5ReposOwnerRepoLanguages",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectLanguage"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls": {
      "get": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "获取 Pull Request 列表",
        "description": "获取 Pull Request 列表",
        "operationId": "getV5ReposOwnerRepoPulls",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "state",
            "in": "query",
            "description": "可选。Pull Request 状态",
            "schema": {
              "type": "string",
              "default": "open",
              "enum": [
                "open",
                "closed",
                "merged",
                "all"
              ]
            }
          },
          {
            "name": "head",
            "in": "query",
            "description": "可选。Pull Request 提交的源分支。格式：branch 或者：username:branch",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "base",
            "in": "query",
            "description": "可选。Pull Request 提交目标分支的名称。",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "可选。排序字段，默认按创建时间",
            "schema": {
              "type": "string",
              "default": "created",
              "enum": [
                "created",
                "updated",
                "popularity",
                "long-running"
              ]
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "可选。起始的更新时间，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "可选。升序/降序",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "milestone_number",
            "in": "query",
            "description": "可选。里程碑序号 (id)",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "labels",
            "in": "query",
            "description": "用逗号分开的标签。如：bug,performance",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "author",
            "in": "query",
            "description": "可选。PR 创建者用户名",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "assignee",
            "in": "query",
            "description": "可选。评审者用户名",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "tester",
            "in": "query",
            "description": "可选。测试者用户名",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PullRequest"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "创建 Pull Request",
        "description": "创建 Pull Request",
        "operationId": "postV5ReposOwnerRepoPulls",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "base",
                  "head",
                  "title"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "title": {
                    "type": "string",
                    "description": "必填。Pull Request 标题"
                  },
                  "head": {
                    "type": "string",
                    "description": "必填。Pull Request 提交的源分支。格式：branch (master) 或者：path_with_namespace:branch (oschina/gitee:master)"
                  },
                  "base": {
                    "type": "string",
                    "description": "必填。Pull Request 提交目标分支的名称"
                  },
                  "body": {
                    "type": "string",
                    "description": "可选。Pull Request 内容"
                  },
                  "milestone_number": {
                    "type": "integer",
                    "description": "可选。里程碑序号 (id)",
                    "format": "int32"
                  },
                  "labels": {
                    "type": "string",
                    "description": "用逗号分开的标签，名称要求长度在 2-20 之间且非特殊字符。如：bug,performance"
                  },
                  "issue": {
                    "type": "string",
                    "description": "可选。Pull Request 的标题和内容可以根据指定的 Issue Id 自动填充"
                  },
                  "assignees": {
                    "type": "string",
                    "description": "可选。审查人员 username，可多个，半角逗号分隔，如：(username1,username2), 注意：当仓库代码审查设置中已设置【指派审查人员】则此选项无效"
                  },
                  "testers": {
                    "type": "string",
                    "description": "可选。测试人员 username，可多个，半角逗号分隔，如：(username1,username2), 注意：当仓库代码审查设置中已设置【指派测试人员】则此选项无效"
                  },
                  "assignees_number": {
                    "type": "integer",
                    "description": "可选。最少审查人数",
                    "format": "int32"
                  },
                  "testers_number": {
                    "type": "integer",
                    "description": "可选。最少测试人数",
                    "format": "int32"
                  },
                  "ref_pull_request_numbers": {
                    "type": "string",
                    "description": "可选。依赖的当前仓库下的 PR 编号，置空则清空依赖的 PR。如：17,18,19"
                  },
                  "prune_source_branch": {
                    "type": "boolean",
                    "description": "可选。合并 PR 后是否删除源分支，默认 false（不删除）"
                  },
                  "close_related_issue": {
                    "type": "boolean",
                    "description": "可选，合并后是否关闭关联的 Issue，默认根据仓库配置设置"
                  },
                  "draft": {
                    "type": "boolean",
                    "description": "是否设置为草稿"
                  },
                  "squash": {
                    "type": "boolean",
                    "description": "接受 Pull Request 时使用扁平化（Squash）合并"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PullRequest"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number": {
      "get": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "获取单个 Pull Request",
        "description": "获取单个 Pull Request",
        "operationId": "getV5ReposOwnerRepoPullsNumber",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PullRequest"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "更新 Pull Request 信息",
        "description": "更新 Pull Request 信息",
        "operationId": "patchV5ReposOwnerRepoPullsNumber",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "title": {
                    "type": "string",
                    "description": "可选。Pull Request 标题"
                  },
                  "body": {
                    "type": "string",
                    "description": "可选。Pull Request 内容"
                  },
                  "state": {
                    "type": "string",
                    "description": "可选。Pull Request 状态",
                    "enum": [
                      "closed",
                      "open"
                    ]
                  },
                  "milestone_number": {
                    "type": "integer",
                    "description": "可选。里程碑序号 (id)",
                    "format": "int32"
                  },
                  "labels": {
                    "type": "string",
                    "description": "用逗号分开的标签，名称要求长度在 2-20 之间且非特殊字符。如：bug,performance"
                  },
                  "assignees_number": {
                    "type": "integer",
                    "description": "可选。最少审查人数",
                    "format": "int32"
                  },
                  "testers_number": {
                    "type": "integer",
                    "description": "可选。最少测试人数",
                    "format": "int32"
                  },
                  "ref_pull_request_numbers": {
                    "type": "string",
                    "description": "可选。依赖的当前仓库下的 PR 编号，置空则清空依赖的 PR。如：17,18,19"
                  },
                  "close_related_issue": {
                    "type": "boolean",
                    "description": "可选，合并后是否关闭关联的 Issue，默认根据仓库配置设置"
                  },
                  "draft": {
                    "type": "boolean",
                    "description": "是否设置为草稿"
                  },
                  "squash": {
                    "type": "boolean",
                    "description": "接受 Pull Request 时使用扁平化（Squash）合并"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PullRequest"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number/operate_logs": {
      "get": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "获取某个 Pull Request 的操作日志",
        "description": "获取某个 Pull Request 的操作日志",
        "operationId": "getV5ReposOwnerRepoPullsNumberOperateLogs",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "按递增 (asc) 或递减 (desc) 排序，默认：递减",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "desc",
                "asc"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/OperateLog"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number/commits": {
      "get": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "获取某 Pull Request 的所有 Commit 信息。最多显示 250 条 Commit",
        "description": "获取某 Pull Request 的所有 Commit 信息。最多显示 250 条 Commit",
        "operationId": "getV5ReposOwnerRepoPullsNumberCommits",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PullRequestCommits"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number/files": {
      "get": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "Pull Request Commit 文件列表。最多显示 300 条 diff",
        "description": "Pull Request Commit 文件列表。最多显示 300 条 diff",
        "operationId": "getV5ReposOwnerRepoPullsNumberFiles",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PullRequestFiles"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number/merge": {
      "get": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "判断 Pull Request 是否已经合并",
        "description": "判断 Pull Request 是否已经合并",
        "operationId": "getV5ReposOwnerRepoPullsNumberMerge",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "Pull Request 已经合并",
            "content": {}
          },
          "404": {
            "description": "Pull Request 未合并或不存在",
            "content": {}
          }
        }
      },
      "put": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "合并 Pull Request",
        "description": "合并 Pull Request",
        "operationId": "putV5ReposOwnerRepoPullsNumberMerge",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "merge_method": {
                    "type": "string",
                    "description": "可选。合并 PR 的方法，merge（合并所有提交）、squash（扁平化分支合并）和 rebase（变基并合并）。默认为 merge。",
                    "default": "merge",
                    "enum": [
                      "merge",
                      "squash",
                      "rebase"
                    ]
                  },
                  "prune_source_branch": {
                    "type": "boolean",
                    "description": "可选。合并 PR 后是否删除源分支，默认 false（不删除）"
                  },
                  "title": {
                    "type": "string",
                    "description": "可选。合并标题，默认为 PR 的标题"
                  },
                  "description": {
                    "type": "string",
                    "description": "可选。合并描述，默认为 \"Merge pull request !{pr_id} from {author}/:source_branch\"，与页面显示的默认一致。"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "合并 Pull Request",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number/review": {
      "post": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "处理 Pull Request 审查",
        "description": "处理 Pull Request 审查",
        "operationId": "postV5ReposOwnerRepoPullsNumberReview",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "force": {
                    "type": "boolean",
                    "description": "是否强制审查通过（默认否），只对管理员生效"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "处理 Pull Request 审查",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number/test": {
      "post": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "处理 Pull Request 测试",
        "description": "处理 Pull Request 测试",
        "operationId": "postV5ReposOwnerRepoPullsNumberTest",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "force": {
                    "type": "boolean",
                    "description": "是否强制测试通过（默认否），只对管理员生效"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "处理 Pull Request 测试",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number/assignees": {
      "post": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "指派用户审查 Pull Request",
        "description": "指派用户审查 Pull Request",
        "operationId": "postV5ReposOwnerRepoPullsNumberAssignees",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "assignees"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "assignees": {
                    "type": "string",
                    "description": "用户的个人空间地址，以 , 分隔"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PullRequest"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "取消用户审查 Pull Request",
        "description": "取消用户审查 Pull Request",
        "operationId": "deleteV5ReposOwnerRepoPullsNumberAssignees",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "assignees",
            "in": "query",
            "description": "用户的个人空间地址，以 , 分隔",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PullRequest"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "重置 Pull Request 审查 的状态",
        "description": "重置 Pull Request 审查 的状态",
        "operationId": "patchV5ReposOwnerRepoPullsNumberAssignees",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "reset_all": {
                    "type": "boolean",
                    "description": "是否重置所有审查人，默认：false，只对管理员生效"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PullRequest"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number/testers": {
      "post": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "指派用户测试 Pull Request",
        "description": "指派用户测试 Pull Request",
        "operationId": "postV5ReposOwnerRepoPullsNumberTesters",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "testers"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "testers": {
                    "type": "string",
                    "description": "用户的个人空间地址，以 , 分隔"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PullRequest"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "取消用户测试 Pull Request",
        "description": "取消用户测试 Pull Request",
        "operationId": "deleteV5ReposOwnerRepoPullsNumberTesters",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "testers",
            "in": "query",
            "description": "用户的个人空间地址，以 , 分隔",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PullRequest"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "重置 Pull Request 测试 的状态",
        "description": "重置 Pull Request 测试 的状态",
        "operationId": "patchV5ReposOwnerRepoPullsNumberTesters",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "reset_all": {
                    "type": "boolean",
                    "description": "是否重置所有测试人，默认：false，只对管理员生效"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PullRequest"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number/issues": {
      "get": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "获取 Pull Request 关联的 issues",
        "description": "获取 Pull Request 关联的 issues",
        "operationId": "getV5ReposOwnerRepoPullsNumberIssues",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "number",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Issue"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number/comments": {
      "get": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "获取某个 Pull Request 的所有评论",
        "description": "获取某个 Pull Request 的所有评论",
        "operationId": "getV5ReposOwnerRepoPullsNumberComments",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "可选。升序/降序",
            "schema": {
              "type": "string",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "comment_type",
            "in": "query",
            "description": "可选。筛选评论类型。代码行评论/pr 普通评论",
            "schema": {
              "type": "string",
              "enum": [
                "diff_comment",
                "pr_comment"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PullRequestComments"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "提交 Pull Request 评论",
        "description": "提交 Pull Request 评论",
        "operationId": "postV5ReposOwnerRepoPullsNumberComments",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "body"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "body": {
                    "type": "string",
                    "description": "必填。评论内容"
                  },
                  "commit_id": {
                    "type": "string",
                    "description": "可选。PR 代码评论的 commit id"
                  },
                  "path": {
                    "type": "string",
                    "description": "可选。PR 代码评论的文件名"
                  },
                  "position": {
                    "type": "integer",
                    "description": "可选。PR 代码评论 diff 中的行数",
                    "format": "int32"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PullRequestComments"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number/labels": {
      "get": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "获取某个 Pull Request 的所有标签",
        "description": "获取某个 Pull Request 的所有标签",
        "operationId": "getV5ReposOwnerRepoPullsNumberLabels",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Label"
                  }
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "替换 Pull Request 所有标签",
        "description": "替换 Pull Request 所有标签\n 需要在请求的 body 里填上数组，元素为标签的名字。如：[\"performance\", \"bug\"]",
        "operationId": "putV5ReposOwnerRepoPullsNumberLabels",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Label"
                  }
                }
              }
            }
          }
        },
        "x-codegen-request-body-name": "body"
      },
      "post": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "创建 Pull Request 标签",
        "description": "创建 Pull Request 标签\n 需要在请求的 body 里填上数组，元素为标签的名字。如：[\"performance\", \"bug\"]",
        "operationId": "postV5ReposOwnerRepoPullsNumberLabels",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Label"
                  }
                }
              }
            }
          }
        },
        "x-codegen-request-body-name": "body"
      }
    },
    "/v5/repos/:owner/:repo/pulls/:number/labels/:name": {
      "delete": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "删除 Pull Request 标签",
        "description": "删除 Pull Request 标签",
        "operationId": "deleteV5ReposOwnerRepoPullsNumberLabelsName",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "第几个 PR，即本仓库 PR 的序数",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "name",
            "in": "path",
            "description": "标签名称 (批量删除用英文逗号分隔，如：bug,feature)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除 Pull Request 标签",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/pulls/comments/:id": {
      "get": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "获取 Pull Request 的某个评论",
        "description": "获取 Pull Request 的某个评论",
        "operationId": "getV5ReposOwnerRepoPullsCommentsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PullRequestComments"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "删除评论",
        "description": "删除评论",
        "operationId": "deleteV5ReposOwnerRepoPullsCommentsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "评论的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除评论",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Pull Requests"
        ],
        "summary": "编辑评论",
        "description": "编辑评论",
        "operationId": "patchV5ReposOwnerRepoPullsCommentsId",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "评论的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "required": [
                  "body"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "body": {
                    "type": "string",
                    "description": "必填。评论内容"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PullRequestComments"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/releases": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库的所有 Releases",
        "description": "获取仓库的所有 Releases",
        "operationId": "getV5ReposOwnerRepoReleases",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "可选。升序/降序。不填为升序",
            "schema": {
              "type": "string",
              "enum": [
                "asc",
                "desc"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Release"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "创建仓库 Release",
        "description": "创建仓库 Release",
        "operationId": "postV5ReposOwnerRepoReleases",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "body",
                  "name",
                  "tag_name",
                  "target_commitish"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "tag_name": {
                    "type": "string",
                    "description": "Tag 名称，提倡以 v 字母为前缀做为 Release 名称，例如 v1.0 或者 v2.3.4"
                  },
                  "name": {
                    "type": "string",
                    "description": "Release 名称"
                  },
                  "body": {
                    "type": "string",
                    "description": "Release 描述"
                  },
                  "prerelease": {
                    "type": "boolean",
                    "description": "是否为预览版本。默认：false（非预览版本）"
                  },
                  "target_commitish": {
                    "type": "string",
                    "description": "分支名称或者 commit SHA, 默认是当前默认分支"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Release"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/releases/:id": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库的单个 Releases",
        "description": "获取仓库的单个 Releases",
        "operationId": "getV5ReposOwnerRepoReleasesId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "发行版本的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Release"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Repositories"
        ],
        "summary": "删除仓库 Release",
        "description": "删除仓库 Release",
        "operationId": "deleteV5ReposOwnerRepoReleasesId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除仓库 Release",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Repositories"
        ],
        "summary": "更新仓库 Release",
        "description": "更新仓库 Release",
        "operationId": "patchV5ReposOwnerRepoReleasesId",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "required": [
                  "body",
                  "name",
                  "tag_name"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "tag_name": {
                    "type": "string",
                    "description": "Tag 名称，提倡以 v 字母为前缀做为 Release 名称，例如 v1.0 或者 v2.3.4"
                  },
                  "name": {
                    "type": "string",
                    "description": "Release 名称"
                  },
                  "body": {
                    "type": "string",
                    "description": "Release 描述"
                  },
                  "prerelease": {
                    "type": "boolean",
                    "description": "是否为预览版本。默认：false（非预览版本）"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Release"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/releases/latest": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库的最后更新的 Release",
        "description": "获取仓库的最后更新的 Release",
        "operationId": "getV5ReposOwnerRepoReleasesLatest",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Release"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/releases/tags/:tag": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "根据 Tag 名称获取仓库的 Release",
        "description": "根据 Tag 名称获取仓库的 Release",
        "operationId": "getV5ReposOwnerRepoReleasesTagsTag",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "tag",
            "in": "path",
            "description": "Tag 名称",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Release"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/releases/:release_id/attach_files": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库下的指定 Release 的所有附件",
        "description": "获取仓库下的指定 Release 的所有附件",
        "operationId": "getV5ReposOwnerRepoReleasesReleaseIdAttachFiles",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "release_id",
            "in": "path",
            "description": "发行版本的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "可选：升序/降序，默认为升序",
            "schema": {
              "type": "string",
              "enum": [
                "asc",
                "desc"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/AttachFile"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "上传附件到仓库指定 Release",
        "description": "上传附件到仓库指定 Release",
        "operationId": "postV5ReposOwnerRepoReleasesReleaseIdAttachFiles",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "release_id",
            "in": "path",
            "description": "发行版本的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "required": [
                  "file"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "file": {
                    "type": "string",
                    "description": "上传的文件",
                    "format": "binary"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AttachFile"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/releases/:release_id/attach_files/:attach_file_id": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取仓库下指定 Release 的单个附件",
        "description": "获取仓库下指定 Release 的单个附件",
        "operationId": "getV5ReposOwnerRepoReleasesReleaseIdAttachFilesAttachFileId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "release_id",
            "in": "path",
            "description": "发行版本的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "attach_file_id",
            "in": "path",
            "description": "发行版本下的附件 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AttachFile"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Repositories"
        ],
        "summary": "删除仓库下指定 Release 的指定附件",
        "description": "删除仓库下指定 Release 的指定附件",
        "operationId": "deleteV5ReposOwnerRepoReleasesReleaseIdAttachFilesAttachFileId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "release_id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "attach_file_id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除仓库下指定 Release 的指定附件",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/releases/:release_id/attach_files/:attach_file_id/download": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "下载指定 Release 的单个附件",
        "description": "下载指定 Release 的单个附件",
        "operationId": "getV5ReposOwnerRepoReleasesReleaseIdAttachFilesAttachFileIdDownload",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "release_id",
            "in": "path",
            "description": "发行版本的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "attach_file_id",
            "in": "path",
            "description": "发行版本下的附件 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "下载指定 Release 的单个附件",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/hooks": {
      "get": {
        "tags": [
          "Webhooks"
        ],
        "summary": "列出仓库的 WebHooks",
        "description": "列出仓库的 WebHooks",
        "operationId": "getV5ReposOwnerRepoHooks",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Hook"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Webhooks"
        ],
        "summary": "创建一个仓库 WebHook",
        "description": "创建一个仓库 WebHook",
        "operationId": "postV5ReposOwnerRepoHooks",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "url"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "url": {
                    "type": "string",
                    "description": "远程 HTTP URL"
                  },
                  "encryption_type": {
                    "type": "integer",
                    "description": "加密类型：0: 密码，1: 签名密钥",
                    "format": "int32",
                    "enum": [
                      "0",
                      "1"
                    ]
                  },
                  "password": {
                    "type": "string",
                    "description": "请求 URL 时会带上该密码，防止 URL 被恶意请求"
                  },
                  "push_events": {
                    "type": "boolean",
                    "description": "Push 代码到仓库",
                    "default": true
                  },
                  "tag_push_events": {
                    "type": "boolean",
                    "description": "提交 Tag 到仓库"
                  },
                  "issues_events": {
                    "type": "boolean",
                    "description": "创建/关闭 Issue"
                  },
                  "note_events": {
                    "type": "boolean",
                    "description": "评论了 Issue/代码等等"
                  },
                  "merge_requests_events": {
                    "type": "boolean",
                    "description": "合并请求和合并后"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Hook"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/hooks/:id": {
      "get": {
        "tags": [
          "Webhooks"
        ],
        "summary": "获取仓库单个 WebHook",
        "description": "获取仓库单个 WebHook",
        "operationId": "getV5ReposOwnerRepoHooksId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "Webhook 的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Hook"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Webhooks"
        ],
        "summary": "删除一个仓库 WebHook",
        "description": "删除一个仓库 WebHook",
        "operationId": "deleteV5ReposOwnerRepoHooksId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "Webhook 的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除一个仓库 WebHook",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Webhooks"
        ],
        "summary": "更新一个仓库 WebHook",
        "description": "更新一个仓库 WebHook",
        "operationId": "patchV5ReposOwnerRepoHooksId",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "Webhook 的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "required": [
                  "url"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "url": {
                    "type": "string",
                    "description": "远程 HTTP URL"
                  },
                  "encryption_type": {
                    "type": "integer",
                    "description": "加密类型：0: 密码，1: 签名密钥",
                    "format": "int32",
                    "enum": [
                      "0",
                      "1"
                    ]
                  },
                  "password": {
                    "type": "string",
                    "description": "请求 URL 时会带上该密码，防止 URL 被恶意请求"
                  },
                  "push_events": {
                    "type": "boolean",
                    "description": "Push 代码到仓库",
                    "default": true
                  },
                  "tag_push_events": {
                    "type": "boolean",
                    "description": "提交 Tag 到仓库"
                  },
                  "issues_events": {
                    "type": "boolean",
                    "description": "创建/关闭 Issue"
                  },
                  "note_events": {
                    "type": "boolean",
                    "description": "评论了 Issue/代码等等"
                  },
                  "merge_requests_events": {
                    "type": "boolean",
                    "description": "合并请求和合并后"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Hook"
                }
              }
            }
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/hooks/:id/tests": {
      "post": {
        "tags": [
          "Webhooks"
        ],
        "summary": "测试 WebHook 是否发送成功",
        "description": "测试 WebHook 是否发送成功",
        "operationId": "postV5ReposOwnerRepoHooksIdTests",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "Webhook 的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "测试发送成功",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/stargazers": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出 star 了仓库的用户",
        "description": "列出 star 了仓库的用户",
        "operationId": "getV5ReposOwnerRepoStargazers",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectStargazers"
                  }
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/subscribers": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出 watch 了仓库的用户",
        "description": "列出 watch 了仓库的用户",
        "operationId": "getV5ReposOwnerRepoSubscribers",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectWatchers"
                  }
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/events": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出仓库的所有动态",
        "description": "列出仓库的所有动态",
        "operationId": "getV5ReposOwnerRepoEvents",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "prev_id",
            "in": "query",
            "description": "滚动列表的最后一条记录的 id",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "滚动列表每页的数量，最大为 100",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Event"
                  }
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/notifications": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出一个仓库里的通知",
        "description": "列出一个仓库里的通知",
        "operationId": "getV5ReposOwnerRepoNotifications",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "unread",
            "in": "query",
            "description": "是否只获取未读消息，默认：否",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "participating",
            "in": "query",
            "description": "是否只获取自己直接参与的消息，默认：否",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "筛选指定类型的通知，all：所有，event：事件通知，referer：@ 通知",
            "schema": {
              "type": "string",
              "default": "all",
              "enum": [
                "all",
                "event",
                "referer"
              ]
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "只获取在给定时间后更新的消息，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "before",
            "in": "query",
            "description": "只获取在给定时间前更新的消息，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ids",
            "in": "query",
            "description": "指定一组通知 ID，以 , 分隔",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserNotificationList"
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "put": {
        "tags": [
          "Activity"
        ],
        "summary": "标记一个仓库里的通知为已读",
        "description": "标记一个仓库里的通知为已读",
        "operationId": "putV5ReposOwnerRepoNotifications",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "ids": {
                    "type": "string",
                    "description": "指定一组通知 ID，以 , 分隔"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "205": {
            "description": "执行成功",
            "content": {}
          },
          "403": {
            "description": "没有权限",
            "content": {}
          }
        }
      }
    },
    "/v5/repos/:owner/:repo/open": {
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "开通 Gitee Go",
        "description": "开通 Gitee Go",
        "operationId": "postV5ReposOwnerRepoOpen",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库 path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "开通 Gitee Go",
            "content": {}
          }
        }
      }
    },
    "/v5/user/keys": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "列出授权用户的所有公钥",
        "description": "列出授权用户的所有公钥",
        "operationId": "getV5UserKeys",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/SSHKey"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Users"
        ],
        "summary": "添加一个公钥",
        "description": "添加一个公钥",
        "operationId": "postV5UserKeys",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "key",
                  "title"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "key": {
                    "type": "string",
                    "description": "公钥内容"
                  },
                  "title": {
                    "type": "string",
                    "description": "公钥名称"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SSHKey"
                }
              }
            }
          },
          "400": {
            "description": "数据不合法",
            "content": {}
          }
        }
      }
    },
    "/v5/user/keys/:id": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "获取一个公钥",
        "description": "获取一个公钥",
        "operationId": "getV5UserKeysId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "公钥 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SSHKey"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "delete": {
        "tags": [
          "Users"
        ],
        "summary": "删除一个公钥",
        "description": "删除一个公钥",
        "operationId": "deleteV5UserKeysId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "公钥 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "执行成功",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/user/orgs": {
      "get": {
        "tags": [
          "Organizations"
        ],
        "summary": "列出授权用户所属的组织",
        "description": "列出授权用户所属的组织",
        "operationId": "getV5UserOrgs",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "admin",
            "in": "query",
            "description": "只列出授权用户管理的组织",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Group"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/user/issues": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取授权用户的所有 Issues",
        "description": "获取授权用户的所有 Issues",
        "operationId": "getV5UserIssues",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter",
            "in": "query",
            "description": "筛选参数：授权用户负责的 (assigned)，授权用户创建的 (created)，包含前两者的 (all)。默认：assigned",
            "schema": {
              "type": "string",
              "default": "assigned",
              "enum": [
                "assigned",
                "created",
                "all"
              ]
            }
          },
          {
            "name": "state",
            "in": "query",
            "description": "Issue 的状态：open（开启的）, progressing(进行中), closed（关闭的）, rejected（拒绝的）。默认：open",
            "schema": {
              "type": "string",
              "default": "open",
              "enum": [
                "open",
                "progressing",
                "closed",
                "rejected",
                "all"
              ]
            }
          },
          {
            "name": "labels",
            "in": "query",
            "description": "用逗号分开的标签。如：bug,performance",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序依据：创建时间 (created)，更新时间 (updated_at)。默认：created_at",
            "schema": {
              "type": "string",
              "default": "created",
              "enum": [
                "created",
                "updated"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "排序方式：升序 (asc)，降序 (desc)。默认：desc",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "起始的更新时间，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "schedule",
            "in": "query",
            "description": "计划开始日期，格式：20181006T173008+80-20181007T173008+80（区间），或者 -20181007T173008+80（小于 20181007T173008+80），或者 20181006T173008+80-（大于 20181006T173008+80），要求时间格式为 20181006T173008+80",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "deadline",
            "in": "query",
            "description": "计划截止日期，格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "created_at",
            "in": "query",
            "description": "任务创建时间，格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "finished_at",
            "in": "query",
            "description": "任务完成时间，即任务最后一次转为已完成状态的时间点。格式同上",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Issue"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/user/repos": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "列出授权用户的所有仓库",
        "description": "列出授权用户的所有仓库",
        "operationId": "getV5UserRepos",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "visibility",
            "in": "query",
            "description": "公开 (public)、私有 (private) 或者所有 (all)，默认：所有 (all)",
            "schema": {
              "type": "string",
              "enum": [
                "private",
                "public",
                "all"
              ]
            }
          },
          {
            "name": "affiliation",
            "in": "query",
            "description": "owner(授权用户拥有的仓库)、collaborator(授权用户为仓库成员)、organization_member(授权用户为仓库所在组织并有访问仓库权限)、enterprise_member(授权用户所在企业并有访问仓库权限)、admin(所有有权限的，包括所管理的组织中所有仓库、所管理的企业的所有仓库)。\n                                     可以用逗号分隔符组合。如：owner, organization_member 或 owner, collaborator, organization_member",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "筛选用户仓库：其创建 (owner)、个人 (personal)、其为成员 (member)、公开 (public)、私有 (private)，不能与 visibility 或 affiliation 参数一并使用，否则会报 422 错误",
            "schema": {
              "type": "string",
              "enum": [
                "all",
                "owner",
                "personal",
                "member",
                "public",
                "private"
              ]
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序方式：创建时间 (created)，更新时间 (updated)，最后推送时间 (pushed)，仓库所属与名称 (full_name)。默认：full_name",
            "schema": {
              "type": "string",
              "default": "full_name",
              "enum": [
                "created",
                "updated",
                "pushed",
                "full_name"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "如果 sort 参数为 full_name，用升序 (asc)。否则降序 (desc)",
            "schema": {
              "type": "string",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "q",
            "in": "query",
            "description": "搜索关键字",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Project"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "创建一个仓库",
        "description": "创建一个仓库",
        "operationId": "postV5UserRepos",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "name"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "name": {
                    "type": "string",
                    "description": "仓库名称"
                  },
                  "description": {
                    "type": "string",
                    "description": "仓库描述"
                  },
                  "homepage": {
                    "type": "string",
                    "description": "主页 (eg: https://gitee.com)"
                  },
                  "has_issues": {
                    "type": "boolean",
                    "description": "允许提 Issue 与否。默认：允许 (true)",
                    "default": true
                  },
                  "has_wiki": {
                    "type": "boolean",
                    "description": "提供 Wiki 与否。默认：提供 (true)",
                    "default": true
                  },
                  "can_comment": {
                    "type": "boolean",
                    "description": "允许用户对仓库进行评论。默认：允许 (true)",
                    "default": true
                  },
                  "auto_init": {
                    "type": "boolean",
                    "description": "值为 true 时则会用 README 初始化仓库。默认：不初始化 (false)"
                  },
                  "gitignore_template": {
                    "type": "string",
                    "description": "Git Ignore 模版",
                    "enum": [
                      "Actionscript",
                      "Ada",
                      "Agda",
                      "Android",
                      "Anjuta",
                      "Ansible",
                      "AppEngine",
                      "AppceleratorTitanium",
                      "ArchLinuxPackages",
                      "Archives",
                      "Autotools",
                      "Backup",
                      "Bazaar",
                      "BricxCC",
                      "C",
                      "C++",
                      "CFWheels",
                      "CMake",
                      "CUDA",
                      "CVS",
                      "CakePHP",
                      "Calabash",
                      "ChefCookbook",
                      "Clojure",
                      "Cloud9",
                      "CodeIgniter",
                      "CodeKit",
                      "CommonLisp",
                      "Composer",
                      "Concrete5",
                      "Coq",
                      "CraftCMS",
                      "D",
                      "DM",
                      "Dart",
                      "DartEditor",
                      "Delphi",
                      "Diff",
                      "Dreamweaver",
                      "Dropbox",
                      "Drupal",
                      "EPiServer",
                      "Eagle",
                      "Eclipse",
                      "EiffelStudio",
                      "Elisp",
                      "Elixir",
                      "Elm",
                      "Emacs",
                      "Ensime",
                      "Erlang",
                      "Espresso",
                      "ExpressionEngine",
                      "ExtJs",
                      "Fancy",
                      "Finale",
                      "FlexBuilder",
                      "Flutter",
                      "ForceDotCom",
                      "Fortran",
                      "FuelPHP",
                      "GPG",
                      "GWT",
                      "Gcov",
                      "GitBook",
                      "Go",
                      "Godot",
                      "Gradle",
                      "Grails",
                      "Haskell",
                      "IGORPro",
                      "Idris",
                      "Images",
                      "JBoss",
                      "JDeveloper",
                      "JENKINS_HOME",
                      "JEnv",
                      "Java",
                      "Jekyll",
                      "JetBrains",
                      "Joomla",
                      "Julia",
                      "KDevelop4",
                      "Kate",
                      "KiCad",
                      "Kohana",
                      "Kotlin",
                      "LabVIEW",
                      "Laravel",
                      "Lazarus",
                      "Leiningen",
                      "LemonStand",
                      "LibreOffice",
                      "Lilypond",
                      "Linux",
                      "Lithium",
                      "Lua",
                      "LyX",
                      "MATLAB",
                      "Magento",
                      "Maven",
                      "Mercurial",
                      "Mercury",
                      "MetaProgrammingSystem",
                      "Metals",
                      "MicrosoftOffice",
                      "MiniProgram",
                      "ModelSim",
                      "Momentics",
                      "MonoDevelop",
                      "Nanoc",
                      "NetBeans",
                      "Nim",
                      "Ninja",
                      "Node",
                      "NotepadPP",
                      "OCaml",
                      "Objective-C",
                      "Octave",
                      "Opa",
                      "OpenCart",
                      "OracleForms",
                      "Otto",
                      "PSoCCreator",
                      "Packer",
                      "Patch",
                      "Perl",
                      "Phalcon",
                      "PlayFramework",
                      "Plone",
                      "Prestashop",
                      "Processing",
                      "PuTTY",
                      "PureScript",
                      "Python",
                      "Qooxdoo",
                      "Qt",
                      "R",
                      "ROS",
                      "Rails",
                      "Raku",
                      "Redcar",
                      "Redis",
                      "RhodesRhomobile",
                      "Ruby",
                      "Rust",
                      "SBT",
                      "SCons",
                      "SVN",
                      "Sass",
                      "Scala",
                      "Scheme",
                      "Scrivener",
                      "Sdcc",
                      "SeamGen",
                      "SketchUp",
                      "SlickEdit",
                      "Smalltalk",
                      "Stata",
                      "Stella",
                      "SublimeText",
                      "SugarCRM",
                      "Swift",
                      "Symfony",
                      "SymphonyCMS",
                      "SynopsysVCS",
                      "Tags",
                      "TeX",
                      "Terraform",
                      "TextMate",
                      "Textpattern",
                      "TortoiseGit",
                      "TurboGears2",
                      "Typo3",
                      "Umbraco",
                      "Unity",
                      "UnrealEngine",
                      "VVVV",
                      "Vagrant",
                      "Vim",
                      "VirtualEnv",
                      "Virtuoso",
                      "VisualStudio",
                      "VisualStudioCode",
                      "Waf",
                      "WebMethods",
                      "Windows",
                      "WordPress",
                      "Xcode",
                      "XilinxISE",
                      "Xojo",
                      "Yeoman",
                      "Yii",
                      "ZendFramework",
                      "Zephir",
                      "macOS"
                    ]
                  },
                  "license_template": {
                    "type": "string",
                    "description": "License 模版",
                    "enum": [
                      "MulanPSL-2.0",
                      "0BSD",
                      "AFL-3.0",
                      "AGPL-3.0",
                      "Apache-2.0",
                      "Artistic-2.0",
                      "BSD-2-Clause",
                      "BSD-3-Clause",
                      "BSD-3-Clause-Clear",
                      "BSD-4-Clause",
                      "BSL-1.0",
                      "CC-BY-4.0",
                      "CC-BY-SA-4.0",
                      "CC0-1.0",
                      "CECILL-2.1",
                      "CERN-OHL-P-2.0",
                      "CERN-OHL-S-2.0",
                      "CERN-OHL-W-2.0",
                      "ECL-2.0",
                      "EPL-1.0",
                      "EPL-2.0",
                      "EUPL-1.1",
                      "EUPL-1.2",
                      "GFDL-1.3",
                      "GPL-2.0",
                      "GPL-3.0",
                      "ISC",
                      "LGPL-2.1",
                      "LGPL-3.0",
                      "LPPL-1.3c",
                      "MIT",
                      "MIT-0",
                      "MPL-2.0",
                      "MS-PL",
                      "MS-RL",
                      "MulanPSL-1.0",
                      "MulanPubL-1.0",
                      "MulanPubL-2.0",
                      "NCSA",
                      "ODbL-1.0",
                      "OFL-1.1",
                      "OSL-3.0",
                      "PostgreSQL",
                      "UPL-1.0",
                      "Unlicense",
                      "Vim",
                      "WTFPL",
                      "Zlib"
                    ]
                  },
                  "path": {
                    "type": "string",
                    "description": "仓库路径"
                  },
                  "private": {
                    "type": "boolean",
                    "description": "目前仅支持私有",
                    "default": true
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Project"
                }
              }
            }
          }
        }
      }
    },
    "/v5/user": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "获取授权用户的资料",
        "description": "获取授权用户的资料",
        "operationId": "getV5User",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDetail"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Users"
        ],
        "summary": "更新授权用户的资料",
        "description": "更新授权用户的资料",
        "operationId": "patchV5User",
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "name": {
                    "type": "string",
                    "description": "昵称"
                  },
                  "blog": {
                    "type": "string",
                    "description": "微博链接"
                  },
                  "weibo": {
                    "type": "string",
                    "description": "博客站点"
                  },
                  "bio": {
                    "type": "string",
                    "description": "自我介绍"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          }
        }
      }
    },
    "/v5/user/followers": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "列出授权用户的关注者",
        "description": "列出授权用户的关注者",
        "operationId": "getV5UserFollowers",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserBasic"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/user/following": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "列出授权用户正关注的用户",
        "description": "列出授权用户正关注的用户",
        "operationId": "getV5UserFollowing",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserBasic"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/user/namespaces": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "列出授权用户所有的 Namespace",
        "description": "列出授权用户所有的 Namespace",
        "operationId": "getV5UserNamespaces",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "mode",
            "in": "query",
            "description": "参与方式：project(所有参与仓库的 namepsce)、intrant(所加入的 namespace)、all(包含前两者)，默认 (intrant)",
            "schema": {
              "type": "string",
              "enum": [
                "project",
                "intrant",
                "all"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Namespace"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/user/namespace": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "获取授权用户的一个 Namespace",
        "description": "获取授权用户的一个 Namespace",
        "operationId": "getV5UserNamespace",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "path",
            "in": "query",
            "description": "Namespace path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Namespace"
                }
              }
            }
          }
        }
      }
    },
    "/v5/user/starred": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出授权用户 star 了的仓库",
        "description": "列出授权用户 star 了的仓库",
        "operationId": "getV5UserStarred",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "根据仓库创建时间 (created) 或最后推送时间 (updated) 进行排序，默认：创建时间",
            "schema": {
              "type": "string",
              "default": "created",
              "enum": [
                "created",
                "last_push"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "按递增 (asc) 或递减 (desc) 排序，默认：递减",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Project"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/user/subscriptions": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出授权用户 watch 了的仓库",
        "description": "列出授权用户 watch 了的仓库",
        "operationId": "getV5UserSubscriptions",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "根据仓库创建时间 (created) 或最后推送时间 (updated) 进行排序，默认：创建时间",
            "schema": {
              "type": "string",
              "default": "created",
              "enum": [
                "created",
                "last_push"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "按递增 (asc) 或递减 (desc) 排序，默认：递减",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Project"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/user/enterprises": {
      "get": {
        "tags": [
          "Enterprises"
        ],
        "summary": "列出授权用户所属的企业",
        "description": "列出授权用户所属的企业",
        "operationId": "getV5UserEnterprises",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "admin",
            "in": "query",
            "description": "只列出授权用户管理的企业",
            "schema": {
              "type": "boolean",
              "default": true
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/EnterpriseBasic"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/user/memberships/orgs": {
      "get": {
        "tags": [
          "Organizations"
        ],
        "summary": "列出授权用户在所属组织的成员资料",
        "description": "列出授权用户在所属组织的成员资料",
        "operationId": "getV5UserMembershipsOrgs",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "active",
            "in": "query",
            "description": "根据成员是否已激活进行筛选资料，缺省返回所有资料",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/GroupMember"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/user/memberships/orgs/:org": {
      "get": {
        "tags": [
          "Organizations"
        ],
        "summary": "获取授权用户在一个组织的成员资料",
        "description": "获取授权用户在一个组织的成员资料",
        "operationId": "getV5UserMembershipsOrgsOrg",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupMember"
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "delete": {
        "tags": [
          "Organizations"
        ],
        "summary": "退出一个组织",
        "description": "退出一个组织",
        "operationId": "deleteV5UserMembershipsOrgsOrg",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "执行成功",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Organizations"
        ],
        "summary": "更新授权用户在一个组织的成员资料",
        "description": "更新授权用户在一个组织的成员资料",
        "operationId": "patchV5UserMembershipsOrgsOrg",
        "parameters": [
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "remark": {
                    "type": "string",
                    "description": "在组织中的备注信息"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupMember"
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/user/following/:username": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "检查授权用户是否关注了一个用户",
        "description": "检查授权用户是否关注了一个用户",
        "operationId": "getV5UserFollowingUsername",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "已关注",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "put": {
        "tags": [
          "Users"
        ],
        "summary": "关注一个用户",
        "description": "关注一个用户",
        "operationId": "putV5UserFollowingUsername",
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "执行成功",
            "content": {}
          }
        }
      },
      "delete": {
        "tags": [
          "Users"
        ],
        "summary": "取消关注一个用户",
        "description": "取消关注一个用户",
        "operationId": "deleteV5UserFollowingUsername",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "执行成功",
            "content": {}
          }
        }
      }
    },
    "/v5/user/starred/:owner/:repo": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "检查授权用户是否 star 了一个仓库",
        "description": "检查授权用户是否 star 了一个仓库",
        "operationId": "getV5UserStarredOwnerRepo",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "已经 star 了仓库",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "put": {
        "tags": [
          "Activity"
        ],
        "summary": "star 一个仓库",
        "description": "star 一个仓库",
        "operationId": "putV5UserStarredOwnerRepo",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "执行成功",
            "content": {}
          },
          "400": {
            "description": "数据不合法",
            "content": {}
          }
        }
      },
      "delete": {
        "tags": [
          "Activity"
        ],
        "summary": "取消 star 一个仓库",
        "description": "取消 star 一个仓库",
        "operationId": "deleteV5UserStarredOwnerRepo",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "执行成功",
            "content": {}
          }
        }
      }
    },
    "/v5/user/subscriptions/:owner/:repo": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "检查授权用户是否 watch 了一个仓库",
        "description": "检查授权用户是否 watch 了一个仓库",
        "operationId": "getV5UserSubscriptionsOwnerRepo",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "已经 watch 了仓库",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "put": {
        "tags": [
          "Activity"
        ],
        "summary": "watch 一个仓库",
        "description": "watch 一个仓库",
        "operationId": "putV5UserSubscriptionsOwnerRepo",
        "parameters": [
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "watch_type"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "watch_type": {
                    "type": "string",
                    "description": "watch 策略，watching: 关注所有动态，ignoring: 关注但不提醒动态",
                    "default": "watching",
                    "enum": [
                      "watching",
                      "ignoring"
                    ]
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "204": {
            "description": "执行成功",
            "content": {}
          },
          "400": {
            "description": "数据不合法",
            "content": {}
          }
        }
      },
      "delete": {
        "tags": [
          "Activity"
        ],
        "summary": "取消 watch 一个仓库",
        "description": "取消 watch 一个仓库",
        "operationId": "deleteV5UserSubscriptionsOwnerRepo",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "执行成功",
            "content": {}
          }
        }
      }
    },
    "/v5/gists": {
      "get": {
        "tags": [
          "Gists"
        ],
        "summary": "获取代码片段",
        "description": "获取代码片段",
        "operationId": "getV5Gists",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "起始的更新时间，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Code"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Gists"
        ],
        "summary": "创建代码片段",
        "description": "创建代码片段",
        "operationId": "postV5Gists",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "description",
                  "files"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "files": {
                    "type": "object",
                    "description": "Hash 形式的代码片段文件名以及文件内容。如：{ \"file1.txt\": { \"content\": \"String file contents\" } }"
                  },
                  "description": {
                    "type": "string",
                    "description": "代码片段描述，1~30 个字符"
                  },
                  "public": {
                    "type": "boolean",
                    "description": "公开/私有，默认：私有"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CodeForksHistory"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/gists/starred": {
      "get": {
        "tags": [
          "Gists"
        ],
        "summary": "获取用户 Star 的代码片段",
        "description": "获取用户 Star 的代码片段",
        "operationId": "getV5GistsStarred",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "起始的更新时间，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Code"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/gists/:gist_id/comments": {
      "get": {
        "tags": [
          "Gists"
        ],
        "summary": "获取代码片段的评论",
        "description": "获取代码片段的评论",
        "operationId": "getV5GistsGistIdComments",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "gist_id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CodeComment"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Gists"
        ],
        "summary": "增加代码片段的评论",
        "description": "增加代码片段的评论",
        "operationId": "postV5GistsGistIdComments",
        "parameters": [
          {
            "name": "gist_id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "body"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "body": {
                    "type": "string",
                    "description": "评论内容"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CodeComment"
                }
              }
            }
          }
        }
      }
    },
    "/v5/gists/:gist_id/comments/:id": {
      "get": {
        "tags": [
          "Gists"
        ],
        "summary": "获取单条代码片段的评论",
        "description": "获取单条代码片段的评论",
        "operationId": "getV5GistsGistIdCommentsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "gist_id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "评论的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CodeComment"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Gists"
        ],
        "summary": "删除代码片段的评论",
        "description": "删除代码片段的评论",
        "operationId": "deleteV5GistsGistIdCommentsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "gist_id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "评论的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除代码片段的评论",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Gists"
        ],
        "summary": "修改代码片段的评论",
        "description": "修改代码片段的评论",
        "operationId": "patchV5GistsGistIdCommentsId",
        "parameters": [
          {
            "name": "gist_id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "评论的 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "required": [
                  "body"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "body": {
                    "type": "string",
                    "description": "评论内容"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CodeComment"
                }
              }
            }
          }
        }
      }
    },
    "/v5/gists/:id": {
      "get": {
        "tags": [
          "Gists"
        ],
        "summary": "获取单条代码片段",
        "description": "获取单条代码片段",
        "operationId": "getV5GistsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CodeForksHistory"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Gists"
        ],
        "summary": "删除指定代码片段",
        "description": "删除指定代码片段",
        "operationId": "deleteV5GistsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除指定代码片段",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Gists"
        ],
        "summary": "修改代码片段",
        "description": "修改代码片段",
        "operationId": "patchV5GistsId",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "files": {
                    "type": "object",
                    "description": "Hash 形式的代码片段文件名以及文件内容。如：{ \"file1.txt\": { \"content\": \"String file contents\" } }"
                  },
                  "description": {
                    "type": "string",
                    "description": "代码片段描述，1~30 个字符"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CodeForksHistory"
                }
              }
            }
          }
        }
      }
    },
    "/v5/gists/:id/commits": {
      "get": {
        "tags": [
          "Gists"
        ],
        "summary": "获取代码片段的 commit",
        "description": "获取代码片段的 commit",
        "operationId": "getV5GistsIdCommits",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CodeForksHistory"
                }
              }
            }
          }
        }
      }
    },
    "/v5/gists/:id/star": {
      "get": {
        "tags": [
          "Gists"
        ],
        "summary": "判断代码片段是否已 Star",
        "description": "判断代码片段是否已 Star",
        "operationId": "getV5GistsIdStar",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "判断代码片段是否已 Star",
            "content": {}
          }
        }
      },
      "put": {
        "tags": [
          "Gists"
        ],
        "summary": "Star 代码片段",
        "description": "Star 代码片段",
        "operationId": "putV5GistsIdStar",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Star 代码片段",
            "content": {}
          }
        }
      },
      "delete": {
        "tags": [
          "Gists"
        ],
        "summary": "取消 Star 代码片段",
        "description": "取消 Star 代码片段",
        "operationId": "deleteV5GistsIdStar",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "取消 Star 代码片段",
            "content": {}
          }
        }
      }
    },
    "/v5/gists/:id/forks": {
      "get": {
        "tags": [
          "Gists"
        ],
        "summary": "获取 Fork 了指定代码片段的列表",
        "description": "获取 Fork 了指定代码片段的列表",
        "operationId": "getV5GistsIdForks",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CodeForks"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Gists"
        ],
        "summary": "Fork 代码片段",
        "description": "Fork 代码片段",
        "operationId": "postV5GistsIdForks",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "代码片段的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Fork 代码片段",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/orgs": {
      "get": {
        "tags": [
          "Organizations"
        ],
        "summary": "列出用户所属的组织",
        "description": "列出用户所属的组织",
        "operationId": "getV5UsersUsernameOrgs",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Group"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/users/organization": {
      "post": {
        "tags": [
          "Organizations"
        ],
        "summary": "创建组织",
        "description": "创建组织",
        "operationId": "postV5UsersOrganization",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "name",
                  "org"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "name": {
                    "type": "string",
                    "description": "组织名称"
                  },
                  "org": {
                    "type": "string",
                    "description": "组织的路径 (path/login)"
                  },
                  "description": {
                    "type": "string",
                    "description": "组织描述"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Group"
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/repos": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取某个用户的公开仓库",
        "description": "获取某个用户的公开仓库",
        "operationId": "getV5UsersUsernameRepos",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "用户创建的仓库 (owner)，用户个人仓库 (personal)，用户为仓库成员 (member)，所有 (all)。默认：所有 (all)",
            "schema": {
              "type": "string",
              "default": "all",
              "enum": [
                "all",
                "owner",
                "personal",
                "member"
              ]
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序方式：创建时间 (created)，更新时间 (updated)，最后推送时间 (pushed)，仓库所属与名称 (full_name)。默认：full_name",
            "schema": {
              "type": "string",
              "default": "full_name",
              "enum": [
                "created",
                "updated",
                "pushed",
                "full_name"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "如果 sort 参数为 full_name，用升序 (asc)。否则降序 (desc)",
            "schema": {
              "type": "string",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Project"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/users/:username": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "获取一个用户",
        "description": "获取一个用户",
        "operationId": "getV5UsersUsername",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserInfo"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/followers": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "列出指定用户的关注者",
        "description": "列出指定用户的关注者",
        "operationId": "getV5UsersUsernameFollowers",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserBasic"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/following": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "列出指定用户正在关注的用户",
        "description": "列出指定用户正在关注的用户",
        "operationId": "getV5UsersUsernameFollowing",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserBasic"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/following/:target_user": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "检查指定用户是否关注目标用户",
        "description": "检查指定用户是否关注目标用户",
        "operationId": "getV5UsersUsernameFollowingTargetUser",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "target_user",
            "in": "path",
            "description": "目标用户的用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "已关注目标用户",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/keys": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "列出指定用户的所有公钥",
        "description": "列出指定用户的所有公钥",
        "operationId": "getV5UsersUsernameKeys",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/SSHKeyBasic"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/starred": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出用户 star 了的仓库",
        "description": "列出用户 star 了的仓库",
        "operationId": "getV5UsersUsernameStarred",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "prev_id",
            "in": "query",
            "description": "滚动列表的最后一条记录的 id",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "滚动列表每页的数量，最大为 100",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "根据仓库创建时间 (created) 或最后推送时间 (updated) 进行排序，默认：创建时间",
            "schema": {
              "type": "string",
              "default": "created",
              "enum": [
                "created",
                "last_push"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "按递增 (asc) 或递减 (desc) 排序，默认：递减",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Project"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/subscriptions": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出用户 watch 了的仓库",
        "description": "列出用户 watch 了的仓库",
        "operationId": "getV5UsersUsernameSubscriptions",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "prev_id",
            "in": "query",
            "description": "滚动列表的最后一条记录的 id",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "滚动列表每页的数量，最大为 100",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "根据仓库创建时间 (created) 或最后推送时间 (updated) 进行排序，默认：创建时间",
            "schema": {
              "type": "string",
              "default": "created",
              "enum": [
                "created",
                "last_push"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "按递增 (asc) 或递减 (desc) 排序，默认：递减",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Project"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/received_events": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出一个用户收到的动态",
        "description": "列出一个用户收到的动态",
        "operationId": "getV5UsersUsernameReceivedEvents",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "prev_id",
            "in": "query",
            "description": "滚动列表的最后一条记录的 id",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "滚动列表每页的数量，最大为 100",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Event"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/received_events/public": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出一个用户收到的公开动态",
        "description": "列出一个用户收到的公开动态",
        "operationId": "getV5UsersUsernameReceivedEventsPublic",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "prev_id",
            "in": "query",
            "description": "滚动列表的最后一条记录的 id",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "滚动列表每页的数量，最大为 100",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Event"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/events": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出用户的动态",
        "description": "列出用户的动态",
        "operationId": "getV5UsersUsernameEvents",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "prev_id",
            "in": "query",
            "description": "滚动列表的最后一条记录的 id",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "滚动列表每页的数量，最大为 100",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Event"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/events/public": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出用户的公开动态",
        "description": "列出用户的公开动态",
        "operationId": "getV5UsersUsernameEventsPublic",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "prev_id",
            "in": "query",
            "description": "滚动列表的最后一条记录的 id",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "滚动列表每页的数量，最大为 100",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Event"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/users/:username/events/orgs/:org": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出用户所属组织的动态",
        "description": "列出用户所属组织的动态",
        "operationId": "getV5UsersUsernameEventsOrgsOrg",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "prev_id",
            "in": "query",
            "description": "滚动列表的最后一条记录的 id",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "滚动列表每页的数量，最大为 100",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Event"
                  }
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/orgs/:org": {
      "get": {
        "tags": [
          "Organizations"
        ],
        "summary": "获取一个组织",
        "description": "获取一个组织",
        "operationId": "getV5OrgsOrg",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupDetail"
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Organizations"
        ],
        "summary": "更新授权用户所管理的组织资料",
        "description": "更新授权用户所管理的组织资料",
        "operationId": "patchV5OrgsOrg",
        "parameters": [
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "email": {
                    "type": "string",
                    "description": "组织公开的邮箱地址"
                  },
                  "location": {
                    "type": "string",
                    "description": "组织所在地"
                  },
                  "name": {
                    "type": "string",
                    "description": "组织名称"
                  },
                  "description": {
                    "type": "string",
                    "description": "组织简介"
                  },
                  "html_url": {
                    "type": "string",
                    "description": "组织站点"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupDetail"
                }
              }
            }
          },
          "400": {
            "description": "数据不合法",
            "content": {}
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/orgs/:org/members": {
      "get": {
        "tags": [
          "Organizations"
        ],
        "summary": "列出一个组织的所有成员",
        "description": "列出一个组织的所有成员",
        "operationId": "getV5OrgsOrgMembers",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "role",
            "in": "query",
            "description": "根据角色筛选成员",
            "schema": {
              "type": "string",
              "default": "all",
              "enum": [
                "all",
                "admin",
                "member"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserBasic"
                  }
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/orgs/:org/followers": {
      "get": {
        "tags": [
          "Organizations"
        ],
        "summary": "列出指定组织的所有关注者",
        "description": "列出指定组织的所有关注者",
        "operationId": "getV5OrgsOrgFollowers",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/GroupFollowers"
                  }
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/orgs/:org/issues": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取当前用户某个组织的 Issues",
        "description": "获取当前用户某个组织的 Issues",
        "operationId": "getV5OrgsOrgIssues",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter",
            "in": "query",
            "description": "筛选参数：授权用户负责的 (assigned)，授权用户创建的 (created)，包含前两者的 (all)。默认：assigned",
            "schema": {
              "type": "string",
              "default": "assigned",
              "enum": [
                "assigned",
                "created",
                "all"
              ]
            }
          },
          {
            "name": "state",
            "in": "query",
            "description": "Issue 的状态：open（开启的）, progressing(进行中), closed（关闭的）, rejected（拒绝的）。默认：open",
            "schema": {
              "type": "string",
              "default": "open",
              "enum": [
                "open",
                "progressing",
                "closed",
                "rejected",
                "all"
              ]
            }
          },
          {
            "name": "labels",
            "in": "query",
            "description": "用逗号分开的标签。如：bug,performance",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序依据：创建时间 (created)，更新时间 (updated_at)。默认：created_at",
            "schema": {
              "type": "string",
              "default": "created",
              "enum": [
                "created",
                "updated"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "排序方式：升序 (asc)，降序 (desc)。默认：desc",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "起始的更新时间，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "schedule",
            "in": "query",
            "description": "计划开始日期，格式：20181006T173008+80-20181007T173008+80（区间），或者 -20181007T173008+80（小于 20181007T173008+80），或者 20181006T173008+80-（大于 20181006T173008+80），要求时间格式为 20181006T173008+80",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "deadline",
            "in": "query",
            "description": "计划截止日期，格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "created_at",
            "in": "query",
            "description": "任务创建时间，格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "finished_at",
            "in": "query",
            "description": "任务完成时间，即任务最后一次转为已完成状态的时间点。格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Issue"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/orgs/:org/repos": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取一个组织的仓库",
        "description": "获取一个组织的仓库",
        "operationId": "getV5OrgsOrgRepos",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "筛选仓库的类型，可以是 all, public, private。默认：all",
            "schema": {
              "type": "string",
              "default": "all",
              "enum": [
                "all",
                "public",
                "private"
              ]
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Project"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "创建组织仓库",
        "description": "创建组织仓库",
        "operationId": "postV5OrgsOrgRepos",
        "parameters": [
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "name"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "name": {
                    "type": "string",
                    "description": "仓库名称"
                  },
                  "description": {
                    "type": "string",
                    "description": "仓库描述"
                  },
                  "homepage": {
                    "type": "string",
                    "description": "主页 (eg: https://gitee.com)"
                  },
                  "has_issues": {
                    "type": "boolean",
                    "description": "允许提 Issue 与否。默认：允许 (true)",
                    "default": true
                  },
                  "has_wiki": {
                    "type": "boolean",
                    "description": "提供 Wiki 与否。默认：提供 (true)",
                    "default": true
                  },
                  "can_comment": {
                    "type": "boolean",
                    "description": "允许用户对仓库进行评论。默认：允许 (true)",
                    "default": true
                  },
                  "public": {
                    "type": "integer",
                    "description": "仓库开源类型。0(私有), 1(外部开源), 2(内部开源)，注：与 private 互斥，以 public 为主。",
                    "format": "int32",
                    "enum": [
                      "0",
                      "1",
                      "2"
                    ]
                  },
                  "private": {
                    "type": "boolean",
                    "description": "仓库公开或私有。默认：公开 (false)，注：与 public 互斥，以 public 为主。"
                  },
                  "auto_init": {
                    "type": "boolean",
                    "description": "值为 true 时则会用 README 初始化仓库。默认：不初始化 (false)"
                  },
                  "gitignore_template": {
                    "type": "string",
                    "description": "Git Ignore 模版",
                    "enum": [
                      "Actionscript",
                      "Ada",
                      "Agda",
                      "Android",
                      "Anjuta",
                      "Ansible",
                      "AppEngine",
                      "AppceleratorTitanium",
                      "ArchLinuxPackages",
                      "Archives",
                      "Autotools",
                      "Backup",
                      "Bazaar",
                      "BricxCC",
                      "C",
                      "C++",
                      "CFWheels",
                      "CMake",
                      "CUDA",
                      "CVS",
                      "CakePHP",
                      "Calabash",
                      "ChefCookbook",
                      "Clojure",
                      "Cloud9",
                      "CodeIgniter",
                      "CodeKit",
                      "CommonLisp",
                      "Composer",
                      "Concrete5",
                      "Coq",
                      "CraftCMS",
                      "D",
                      "DM",
                      "Dart",
                      "DartEditor",
                      "Delphi",
                      "Diff",
                      "Dreamweaver",
                      "Dropbox",
                      "Drupal",
                      "EPiServer",
                      "Eagle",
                      "Eclipse",
                      "EiffelStudio",
                      "Elisp",
                      "Elixir",
                      "Elm",
                      "Emacs",
                      "Ensime",
                      "Erlang",
                      "Espresso",
                      "ExpressionEngine",
                      "ExtJs",
                      "Fancy",
                      "Finale",
                      "FlexBuilder",
                      "Flutter",
                      "ForceDotCom",
                      "Fortran",
                      "FuelPHP",
                      "GPG",
                      "GWT",
                      "Gcov",
                      "GitBook",
                      "Go",
                      "Godot",
                      "Gradle",
                      "Grails",
                      "Haskell",
                      "IGORPro",
                      "Idris",
                      "Images",
                      "JBoss",
                      "JDeveloper",
                      "JENKINS_HOME",
                      "JEnv",
                      "Java",
                      "Jekyll",
                      "JetBrains",
                      "Joomla",
                      "Julia",
                      "KDevelop4",
                      "Kate",
                      "KiCad",
                      "Kohana",
                      "Kotlin",
                      "LabVIEW",
                      "Laravel",
                      "Lazarus",
                      "Leiningen",
                      "LemonStand",
                      "LibreOffice",
                      "Lilypond",
                      "Linux",
                      "Lithium",
                      "Lua",
                      "LyX",
                      "MATLAB",
                      "Magento",
                      "Maven",
                      "Mercurial",
                      "Mercury",
                      "MetaProgrammingSystem",
                      "Metals",
                      "MicrosoftOffice",
                      "MiniProgram",
                      "ModelSim",
                      "Momentics",
                      "MonoDevelop",
                      "Nanoc",
                      "NetBeans",
                      "Nim",
                      "Ninja",
                      "Node",
                      "NotepadPP",
                      "OCaml",
                      "Objective-C",
                      "Octave",
                      "Opa",
                      "OpenCart",
                      "OracleForms",
                      "Otto",
                      "PSoCCreator",
                      "Packer",
                      "Patch",
                      "Perl",
                      "Phalcon",
                      "PlayFramework",
                      "Plone",
                      "Prestashop",
                      "Processing",
                      "PuTTY",
                      "PureScript",
                      "Python",
                      "Qooxdoo",
                      "Qt",
                      "R",
                      "ROS",
                      "Rails",
                      "Raku",
                      "Redcar",
                      "Redis",
                      "RhodesRhomobile",
                      "Ruby",
                      "Rust",
                      "SBT",
                      "SCons",
                      "SVN",
                      "Sass",
                      "Scala",
                      "Scheme",
                      "Scrivener",
                      "Sdcc",
                      "SeamGen",
                      "SketchUp",
                      "SlickEdit",
                      "Smalltalk",
                      "Stata",
                      "Stella",
                      "SublimeText",
                      "SugarCRM",
                      "Swift",
                      "Symfony",
                      "SymphonyCMS",
                      "SynopsysVCS",
                      "Tags",
                      "TeX",
                      "Terraform",
                      "TextMate",
                      "Textpattern",
                      "TortoiseGit",
                      "TurboGears2",
                      "Typo3",
                      "Umbraco",
                      "Unity",
                      "UnrealEngine",
                      "VVVV",
                      "Vagrant",
                      "Vim",
                      "VirtualEnv",
                      "Virtuoso",
                      "VisualStudio",
                      "VisualStudioCode",
                      "Waf",
                      "WebMethods",
                      "Windows",
                      "WordPress",
                      "Xcode",
                      "XilinxISE",
                      "Xojo",
                      "Yeoman",
                      "Yii",
                      "ZendFramework",
                      "Zephir",
                      "macOS"
                    ]
                  },
                  "license_template": {
                    "type": "string",
                    "description": "License 模版",
                    "enum": [
                      "MulanPSL-2.0",
                      "0BSD",
                      "AFL-3.0",
                      "AGPL-3.0",
                      "Apache-2.0",
                      "Artistic-2.0",
                      "BSD-2-Clause",
                      "BSD-3-Clause",
                      "BSD-3-Clause-Clear",
                      "BSD-4-Clause",
                      "BSL-1.0",
                      "CC-BY-4.0",
                      "CC-BY-SA-4.0",
                      "CC0-1.0",
                      "CECILL-2.1",
                      "CERN-OHL-P-2.0",
                      "CERN-OHL-S-2.0",
                      "CERN-OHL-W-2.0",
                      "ECL-2.0",
                      "EPL-1.0",
                      "EPL-2.0",
                      "EUPL-1.1",
                      "EUPL-1.2",
                      "GFDL-1.3",
                      "GPL-2.0",
                      "GPL-3.0",
                      "ISC",
                      "LGPL-2.1",
                      "LGPL-3.0",
                      "LPPL-1.3c",
                      "MIT",
                      "MIT-0",
                      "MPL-2.0",
                      "MS-PL",
                      "MS-RL",
                      "MulanPSL-1.0",
                      "MulanPubL-1.0",
                      "MulanPubL-2.0",
                      "NCSA",
                      "ODbL-1.0",
                      "OFL-1.1",
                      "OSL-3.0",
                      "PostgreSQL",
                      "UPL-1.0",
                      "Unlicense",
                      "Vim",
                      "WTFPL",
                      "Zlib"
                    ]
                  },
                  "path": {
                    "type": "string",
                    "description": "仓库路径"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Project"
                }
              }
            }
          }
        }
      }
    },
    "/v5/orgs/:org/memberships/:username": {
      "get": {
        "tags": [
          "Organizations"
        ],
        "summary": "获取授权用户所属组织的一个成员",
        "description": "获取授权用户所属组织的一个成员",
        "operationId": "getV5OrgsOrgMembershipsUsername",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupMember"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "put": {
        "tags": [
          "Organizations"
        ],
        "summary": "增加或更新授权用户所管理组织的成员",
        "description": "增加或更新授权用户所管理组织的成员",
        "operationId": "putV5OrgsOrgMembershipsUsername",
        "parameters": [
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "role": {
                    "type": "string",
                    "description": "设置用户在组织的角色",
                    "default": "member",
                    "enum": [
                      "admin",
                      "member"
                    ]
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupMember"
                }
              }
            }
          },
          "400": {
            "description": "数据不合法",
            "content": {}
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "delete": {
        "tags": [
          "Organizations"
        ],
        "summary": "移除授权用户所管理组织中的成员",
        "description": "移除授权用户所管理组织中的成员",
        "operationId": "deleteV5OrgsOrgMembershipsUsername",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "执行成功",
            "content": {}
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/orgs/:org/events": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出组织的公开动态",
        "description": "列出组织的公开动态",
        "operationId": "getV5OrgsOrgEvents",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "org",
            "in": "path",
            "description": "组织的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "prev_id",
            "in": "query",
            "description": "滚动列表的最后一条记录的 id",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "滚动列表每页的数量，最大为 100",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Event"
                  }
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/issues": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取当前授权用户的所有 Issues",
        "description": "获取当前授权用户的所有 Issues",
        "operationId": "getV5Issues",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter",
            "in": "query",
            "description": "筛选参数：授权用户负责的 (assigned)，授权用户创建的 (created)，包含前两者的 (all)。默认：assigned",
            "schema": {
              "type": "string",
              "default": "assigned",
              "enum": [
                "assigned",
                "created",
                "all"
              ]
            }
          },
          {
            "name": "state",
            "in": "query",
            "description": "Issue 的状态：open（开启的）, progressing(进行中), closed（关闭的）, rejected（拒绝的）。默认：open",
            "schema": {
              "type": "string",
              "default": "open",
              "enum": [
                "open",
                "progressing",
                "closed",
                "rejected",
                "all"
              ]
            }
          },
          {
            "name": "labels",
            "in": "query",
            "description": "用逗号分开的标签。如：bug,performance",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序依据：创建时间 (created)，更新时间 (updated_at)。默认：created_at",
            "schema": {
              "type": "string",
              "default": "created",
              "enum": [
                "created",
                "updated"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "排序方式：升序 (asc)，降序 (desc)。默认：desc",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "起始的更新时间，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "schedule",
            "in": "query",
            "description": "计划开始日期，格式：20181006T173008+80-20181007T173008+80（区间），或者 -20181007T173008+80（小于 20181007T173008+80），或者 20181006T173008+80-（大于 20181006T173008+80），要求时间格式为 20181006T173008+80",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "deadline",
            "in": "query",
            "description": "计划截止日期，格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "created_at",
            "in": "query",
            "description": "任务创建时间，格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "finished_at",
            "in": "query",
            "description": "任务完成时间，即任务最后一次转为已完成状态的时间点。格式同上",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Issue"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/issues": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取某个企业的所有 Issues",
        "description": "获取某个企业的所有 Issues",
        "operationId": "getV5EnterprisesEnterpriseIssues",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "state",
            "in": "query",
            "description": "Issue 的状态：open（开启的）, progressing(进行中), closed（关闭的）, rejected（拒绝的）。默认：open",
            "schema": {
              "type": "string",
              "default": "open",
              "enum": [
                "open",
                "progressing",
                "closed",
                "rejected",
                "all"
              ]
            }
          },
          {
            "name": "labels",
            "in": "query",
            "description": "用逗号分开的标签。如：bug,performance",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序依据：创建时间 (created)，更新时间 (updated_at)。默认：created_at",
            "schema": {
              "type": "string",
              "default": "created",
              "enum": [
                "created",
                "updated"
              ]
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "排序方式：升序 (asc)，降序 (desc)。默认：desc",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "起始的更新时间，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "schedule",
            "in": "query",
            "description": "计划开始日期，格式：20181006T173008+80-20181007T173008+80（区间），或者 -20181007T173008+80（小于 20181007T173008+80），或者 20181006T173008+80-（大于 20181006T173008+80），要求时间格式为 20181006T173008+80",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "deadline",
            "in": "query",
            "description": "计划截止日期，格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "created_at",
            "in": "query",
            "description": "任务创建时间，格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "finished_at",
            "in": "query",
            "description": "任务完成时间，即任务最后一次转为已完成状态的时间点。格式同上",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "milestone",
            "in": "query",
            "description": "根据里程碑标题。none 为没里程碑的，*为所有带里程碑的",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "assignee",
            "in": "query",
            "description": "用户的 username。none 为没指派者，*为所有带有指派者的",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "creator",
            "in": "query",
            "description": "创建 Issues 的用户 username",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "program",
            "in": "query",
            "description": "所属项目名称。none 为没所属有项目的，*为所有带所属项目的",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Issue"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise": {
      "get": {
        "tags": [
          "Enterprises"
        ],
        "summary": "获取一个企业",
        "description": "获取一个企业",
        "operationId": "getV5EnterprisesEnterprise",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EnterpriseBasic"
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/members": {
      "get": {
        "tags": [
          "Enterprises"
        ],
        "summary": "列出企业的所有成员",
        "description": "列出企业的所有成员",
        "operationId": "getV5EnterprisesEnterpriseMembers",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "role",
            "in": "query",
            "description": "根据角色筛选成员",
            "schema": {
              "type": "string",
              "default": "all",
              "enum": [
                "all",
                "admin",
                "member"
              ]
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/EnterpriseMember"
                  }
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "post": {
        "tags": [
          "Enterprises"
        ],
        "summary": "添加或邀请企业成员",
        "description": "添加或邀请企业成员",
        "operationId": "postV5EnterprisesEnterpriseMembers",
        "parameters": [
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "username": {
                    "type": "string",
                    "description": "需要邀请的用户名 (username/login)，username,email 至少填写一个"
                  },
                  "email": {
                    "type": "string",
                    "description": "要添加邮箱地址，若该邮箱未注册则自动创建帐号。username,email 至少填写一个"
                  },
                  "role": {
                    "type": "string",
                    "description": "企业角色：member => 普通成员，outsourced => 外包成员，admin => 管理员",
                    "default": "member",
                    "enum": [
                      "admin",
                      "member",
                      "outsourced"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "description": "企业成员真实姓名（备注）"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "执行成功",
            "content": {}
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/members/search": {
      "get": {
        "tags": [
          "Enterprises"
        ],
        "summary": "获取企业成员信息 (通过用户名/邮箱)",
        "description": "获取企业成员信息 (通过用户名/邮箱)",
        "operationId": "getV5EnterprisesEnterpriseMembersSearch",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "query_type",
            "in": "query",
            "description": "查询类型：username/email",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "query_value",
            "in": "query",
            "description": "查询值",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EnterpriseMember"
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/week_reports/:id/comments": {
      "get": {
        "tags": [
          "Enterprises"
        ],
        "summary": "某个周报评论列表",
        "description": "某个周报评论列表",
        "operationId": "getV5EnterprisesEnterpriseWeekReportsIdComments",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "周报 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Note"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/week_reports/:id/comment": {
      "post": {
        "tags": [
          "Enterprises"
        ],
        "summary": "评论周报",
        "description": "评论周报",
        "operationId": "postV5EnterprisesEnterpriseWeekReportsIdComment",
        "parameters": [
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "周报 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "body"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "body": {
                    "type": "string",
                    "description": "评论的内容"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Note"
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/week_reports/:report_id/comments/:id": {
      "delete": {
        "tags": [
          "Enterprises"
        ],
        "summary": "删除周报某个评论",
        "description": "删除周报某个评论",
        "operationId": "deleteV5EnterprisesEnterpriseWeekReportsReportIdCommentsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "report_id",
            "in": "path",
            "description": "周报 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "评论 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "删除周报某个评论",
            "content": {}
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/users/:username/week_reports": {
      "get": {
        "tags": [
          "Enterprises"
        ],
        "summary": "个人周报列表",
        "description": "个人周报列表",
        "operationId": "getV5EnterprisesEnterpriseUsersUsernameWeekReports",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/WeekReport"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/week_reports": {
      "get": {
        "tags": [
          "Enterprises"
        ],
        "summary": "企业成员周报列表",
        "description": "企业成员周报列表",
        "operationId": "getV5EnterprisesEnterpriseWeekReports",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "username",
            "in": "query",
            "description": "用户名 (username/login)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "year",
            "in": "query",
            "description": "周报所属年",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "week_index",
            "in": "query",
            "description": "周报所属周",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "date",
            "in": "query",
            "description": "周报日期 (格式：2019-03-25)",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/WeekReport"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/week_reports/:id": {
      "get": {
        "tags": [
          "Enterprises"
        ],
        "summary": "周报详情",
        "description": "周报详情",
        "operationId": "getV5EnterprisesEnterpriseWeekReportsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "周报 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WeekReport"
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/week_report/:id": {
      "patch": {
        "tags": [
          "Enterprises"
        ],
        "summary": "编辑周报",
        "description": "编辑周报",
        "operationId": "patchV5EnterprisesEnterpriseWeekReportId",
        "parameters": [
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "周报 ID",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "required": [
                  "content"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "content": {
                    "type": "string",
                    "description": "周报内容"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WeekReport"
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/week_report": {
      "post": {
        "tags": [
          "Enterprises"
        ],
        "summary": "新建周报",
        "description": "新建周报",
        "operationId": "postV5EnterprisesEnterpriseWeekReport",
        "parameters": [
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "content",
                  "week_index",
                  "year"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "year": {
                    "type": "integer",
                    "description": "周报所属年",
                    "format": "int32"
                  },
                  "content": {
                    "type": "string",
                    "description": "周报内容"
                  },
                  "week_index": {
                    "type": "integer",
                    "description": "周报所属周",
                    "format": "int32"
                  },
                  "date": {
                    "type": "string",
                    "description": "周报日期 (格式：2019-03-25)"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WeekReport"
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/issues/:number": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取企业的某个 Issue",
        "description": "获取企业的某个 Issue",
        "operationId": "getV5EnterprisesEnterpriseIssuesNumber",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Issue"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "Issues"
        ],
        "summary": "更新企业的某个 Issue",
        "description": "更新企业的某个 Issue",
        "operationId": "patchV5EnterprisesEnterpriseIssuesNumber",
        "parameters": [
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "title": {
                    "type": "string",
                    "description": "Issue 标题"
                  },
                  "state": {
                    "type": "string",
                    "description": "Issue 状态，open（开启的）、progressing（进行中）、closed（关闭的）",
                    "enum": [
                      "open",
                      "progressing",
                      "closed"
                    ]
                  },
                  "body": {
                    "type": "string",
                    "description": "Issue 描述"
                  },
                  "assignee": {
                    "type": "string",
                    "description": "Issue 负责人的个人空间地址"
                  },
                  "collaborators": {
                    "type": "string",
                    "description": "Issue 协助者的个人空间地址，以 , 分隔"
                  },
                  "milestone": {
                    "type": "integer",
                    "description": "里程碑序号",
                    "format": "int32"
                  },
                  "labels": {
                    "type": "string",
                    "description": "用逗号分开的标签，名称要求长度在 2-20 之间且非特殊字符。如：bug,performance"
                  },
                  "program": {
                    "type": "string",
                    "description": "项目 ID"
                  },
                  "security_hole": {
                    "type": "boolean",
                    "description": "是否是私有 issue(默认为 false)"
                  },
                  "branch": {
                    "type": "string",
                    "description": "分支名称，传空串表示取消关联分支"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Issue"
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/issues/:number/pull_requests": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取企业 issue 关联的 Pull Requests",
        "description": "获取企业 issue 关联的 Pull Requests",
        "operationId": "getV5EnterprisesEnterpriseIssuesNumberPullRequests",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PullRequest"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/issues/:number/comments": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取企业某个 Issue 所有评论",
        "description": "获取企业某个 Issue 所有评论",
        "operationId": "getV5EnterprisesEnterpriseIssuesNumberComments",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Note"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/issues/:number/labels": {
      "get": {
        "tags": [
          "Issues"
        ],
        "summary": "获取企业某个 Issue 所有标签",
        "description": "获取企业某个 Issue 所有标签",
        "operationId": "getV5EnterprisesEnterpriseIssuesNumberLabels",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "path",
            "description": "Issue 编号 (区分大小写，无需添加 # 号)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Label"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/labels": {
      "get": {
        "tags": [
          "Labels"
        ],
        "summary": "获取企业所有标签",
        "description": "获取企业所有标签",
        "operationId": "getV5EnterprisesEnterpriseLabels",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Label"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/labels/:name": {
      "get": {
        "tags": [
          "Labels"
        ],
        "summary": "获取企业某个标签",
        "description": "获取企业某个标签",
        "operationId": "getV5EnterprisesEnterpriseLabelsName",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "name",
            "in": "path",
            "description": "标签名称",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Label"
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/repos": {
      "get": {
        "tags": [
          "Repositories"
        ],
        "summary": "获取企业的所有仓库",
        "description": "获取企业的所有仓库",
        "operationId": "getV5EnterprisesEnterpriseRepos",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "search",
            "in": "query",
            "description": "搜索字符串",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "筛选仓库的类型，可以是 all, public, internal, private。默认：all",
            "schema": {
              "type": "string",
              "default": "all",
              "enum": [
                "all",
                "public",
                "internal",
                "private"
              ]
            }
          },
          {
            "name": "direct",
            "in": "query",
            "description": "只获取直属仓库，默认：false",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Project"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Repositories"
        ],
        "summary": "创建企业仓库",
        "description": "创建企业仓库",
        "operationId": "postV5EnterprisesEnterpriseRepos",
        "parameters": [
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "name"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "name": {
                    "type": "string",
                    "description": "仓库名称"
                  },
                  "description": {
                    "type": "string",
                    "description": "仓库描述"
                  },
                  "homepage": {
                    "type": "string",
                    "description": "主页 (eg: https://gitee.com)"
                  },
                  "has_issues": {
                    "type": "boolean",
                    "description": "允许提 Issue 与否。默认：允许 (true)",
                    "default": true
                  },
                  "has_wiki": {
                    "type": "boolean",
                    "description": "提供 Wiki 与否。默认：提供 (true)",
                    "default": true
                  },
                  "can_comment": {
                    "type": "boolean",
                    "description": "允许用户对仓库进行评论。默认：允许 (true)",
                    "default": true
                  },
                  "auto_init": {
                    "type": "boolean",
                    "description": "值为 true 时则会用 README 初始化仓库。默认：不初始化 (false)"
                  },
                  "gitignore_template": {
                    "type": "string",
                    "description": "Git Ignore 模版",
                    "enum": [
                      "Actionscript",
                      "Ada",
                      "Agda",
                      "Android",
                      "Anjuta",
                      "Ansible",
                      "AppEngine",
                      "AppceleratorTitanium",
                      "ArchLinuxPackages",
                      "Archives",
                      "Autotools",
                      "Backup",
                      "Bazaar",
                      "BricxCC",
                      "C",
                      "C++",
                      "CFWheels",
                      "CMake",
                      "CUDA",
                      "CVS",
                      "CakePHP",
                      "Calabash",
                      "ChefCookbook",
                      "Clojure",
                      "Cloud9",
                      "CodeIgniter",
                      "CodeKit",
                      "CommonLisp",
                      "Composer",
                      "Concrete5",
                      "Coq",
                      "CraftCMS",
                      "D",
                      "DM",
                      "Dart",
                      "DartEditor",
                      "Delphi",
                      "Diff",
                      "Dreamweaver",
                      "Dropbox",
                      "Drupal",
                      "EPiServer",
                      "Eagle",
                      "Eclipse",
                      "EiffelStudio",
                      "Elisp",
                      "Elixir",
                      "Elm",
                      "Emacs",
                      "Ensime",
                      "Erlang",
                      "Espresso",
                      "ExpressionEngine",
                      "ExtJs",
                      "Fancy",
                      "Finale",
                      "FlexBuilder",
                      "Flutter",
                      "ForceDotCom",
                      "Fortran",
                      "FuelPHP",
                      "GPG",
                      "GWT",
                      "Gcov",
                      "GitBook",
                      "Go",
                      "Godot",
                      "Gradle",
                      "Grails",
                      "Haskell",
                      "IGORPro",
                      "Idris",
                      "Images",
                      "JBoss",
                      "JDeveloper",
                      "JENKINS_HOME",
                      "JEnv",
                      "Java",
                      "Jekyll",
                      "JetBrains",
                      "Joomla",
                      "Julia",
                      "KDevelop4",
                      "Kate",
                      "KiCad",
                      "Kohana",
                      "Kotlin",
                      "LabVIEW",
                      "Laravel",
                      "Lazarus",
                      "Leiningen",
                      "LemonStand",
                      "LibreOffice",
                      "Lilypond",
                      "Linux",
                      "Lithium",
                      "Lua",
                      "LyX",
                      "MATLAB",
                      "Magento",
                      "Maven",
                      "Mercurial",
                      "Mercury",
                      "MetaProgrammingSystem",
                      "Metals",
                      "MicrosoftOffice",
                      "MiniProgram",
                      "ModelSim",
                      "Momentics",
                      "MonoDevelop",
                      "Nanoc",
                      "NetBeans",
                      "Nim",
                      "Ninja",
                      "Node",
                      "NotepadPP",
                      "OCaml",
                      "Objective-C",
                      "Octave",
                      "Opa",
                      "OpenCart",
                      "OracleForms",
                      "Otto",
                      "PSoCCreator",
                      "Packer",
                      "Patch",
                      "Perl",
                      "Phalcon",
                      "PlayFramework",
                      "Plone",
                      "Prestashop",
                      "Processing",
                      "PuTTY",
                      "PureScript",
                      "Python",
                      "Qooxdoo",
                      "Qt",
                      "R",
                      "ROS",
                      "Rails",
                      "Raku",
                      "Redcar",
                      "Redis",
                      "RhodesRhomobile",
                      "Ruby",
                      "Rust",
                      "SBT",
                      "SCons",
                      "SVN",
                      "Sass",
                      "Scala",
                      "Scheme",
                      "Scrivener",
                      "Sdcc",
                      "SeamGen",
                      "SketchUp",
                      "SlickEdit",
                      "Smalltalk",
                      "Stata",
                      "Stella",
                      "SublimeText",
                      "SugarCRM",
                      "Swift",
                      "Symfony",
                      "SymphonyCMS",
                      "SynopsysVCS",
                      "Tags",
                      "TeX",
                      "Terraform",
                      "TextMate",
                      "Textpattern",
                      "TortoiseGit",
                      "TurboGears2",
                      "Typo3",
                      "Umbraco",
                      "Unity",
                      "UnrealEngine",
                      "VVVV",
                      "Vagrant",
                      "Vim",
                      "VirtualEnv",
                      "Virtuoso",
                      "VisualStudio",
                      "VisualStudioCode",
                      "Waf",
                      "WebMethods",
                      "Windows",
                      "WordPress",
                      "Xcode",
                      "XilinxISE",
                      "Xojo",
                      "Yeoman",
                      "Yii",
                      "ZendFramework",
                      "Zephir",
                      "macOS"
                    ]
                  },
                  "license_template": {
                    "type": "string",
                    "description": "License 模版",
                    "enum": [
                      "MulanPSL-2.0",
                      "0BSD",
                      "AFL-3.0",
                      "AGPL-3.0",
                      "Apache-2.0",
                      "Artistic-2.0",
                      "BSD-2-Clause",
                      "BSD-3-Clause",
                      "BSD-3-Clause-Clear",
                      "BSD-4-Clause",
                      "BSL-1.0",
                      "CC-BY-4.0",
                      "CC-BY-SA-4.0",
                      "CC0-1.0",
                      "CECILL-2.1",
                      "CERN-OHL-P-2.0",
                      "CERN-OHL-S-2.0",
                      "CERN-OHL-W-2.0",
                      "ECL-2.0",
                      "EPL-1.0",
                      "EPL-2.0",
                      "EUPL-1.1",
                      "EUPL-1.2",
                      "GFDL-1.3",
                      "GPL-2.0",
                      "GPL-3.0",
                      "ISC",
                      "LGPL-2.1",
                      "LGPL-3.0",
                      "LPPL-1.3c",
                      "MIT",
                      "MIT-0",
                      "MPL-2.0",
                      "MS-PL",
                      "MS-RL",
                      "MulanPSL-1.0",
                      "MulanPubL-1.0",
                      "MulanPubL-2.0",
                      "NCSA",
                      "ODbL-1.0",
                      "OFL-1.1",
                      "OSL-3.0",
                      "PostgreSQL",
                      "UPL-1.0",
                      "Unlicense",
                      "Vim",
                      "WTFPL",
                      "Zlib"
                    ]
                  },
                  "path": {
                    "type": "string",
                    "description": "仓库路径"
                  },
                  "private": {
                    "type": "integer",
                    "description": "仓库开源类型。0(私有), 1(外部开源), 2(内部开源)。默认：0",
                    "format": "int32",
                    "default": "0",
                    "enum": [
                      "0",
                      "1",
                      "2"
                    ]
                  },
                  "outsourced": {
                    "type": "boolean",
                    "description": "值为 true 值为外包仓库，false 值为内部仓库。默认：内部仓库 (false)"
                  },
                  "project_creator": {
                    "type": "string",
                    "description": "负责人的 username"
                  },
                  "members": {
                    "type": "string",
                    "description": "用逗号分开的仓库成员。如：member1,member2"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Project"
                }
              }
            }
          }
        }
      }
    },
    "/v5/enterprises/:enterprise/members/:username": {
      "get": {
        "tags": [
          "Enterprises"
        ],
        "summary": "获取企业的一个成员",
        "description": "获取企业的一个成员",
        "operationId": "getV5EnterprisesEnterpriseMembersUsername",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EnterpriseMember"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "put": {
        "tags": [
          "Enterprises"
        ],
        "summary": "修改企业成员权限或备注",
        "description": "修改企业成员权限或备注",
        "operationId": "putV5EnterprisesEnterpriseMembersUsername",
        "parameters": [
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "role": {
                    "type": "string",
                    "description": "企业角色：member => 普通成员，outsourced => 外包成员，admin => 管理员",
                    "default": "member",
                    "enum": [
                      "admin",
                      "member",
                      "outsourced"
                    ]
                  },
                  "active": {
                    "type": "boolean",
                    "description": "是否可访问企业资源，默认：是。（若选否则禁止该用户访问企业资源）",
                    "default": true
                  },
                  "name": {
                    "type": "string",
                    "description": "企业成员真实姓名（备注）"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EnterpriseMember"
                }
              }
            }
          },
          "400": {
            "description": "数据不合法",
            "content": {}
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "delete": {
        "tags": [
          "Enterprises"
        ],
        "summary": "移除企业成员",
        "description": "移除企业成员",
        "operationId": "deleteV5EnterprisesEnterpriseMembersUsername",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "username",
            "in": "path",
            "description": "用户名 (username/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "执行成功",
            "content": {}
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/gitignore/templates": {
      "get": {
        "tags": [
          "Miscellaneous"
        ],
        "summary": "列出可使用的 .gitignore 模板",
        "description": "列出可使用的 .gitignore 模板",
        "operationId": "getV5GitignoreTemplates",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "列出可使用的 .gitignore 模板",
            "content": {}
          }
        }
      }
    },
    "/v5/gitignore/templates/:name": {
      "get": {
        "tags": [
          "Miscellaneous"
        ],
        "summary": "获取一个 .gitignore 模板",
        "description": "获取一个 .gitignore 模板",
        "operationId": "getV5GitignoreTemplatesName",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "name",
            "in": "path",
            "description": ".gitignore 模板名",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "Actionscript",
                "Ada",
                "Agda",
                "Android",
                "Anjuta",
                "Ansible",
                "AppEngine",
                "AppceleratorTitanium",
                "ArchLinuxPackages",
                "Archives",
                "Autotools",
                "Backup",
                "Bazaar",
                "BricxCC",
                "C",
                "C++",
                "CFWheels",
                "CMake",
                "CUDA",
                "CVS",
                "CakePHP",
                "Calabash",
                "ChefCookbook",
                "Clojure",
                "Cloud9",
                "CodeIgniter",
                "CodeKit",
                "CommonLisp",
                "Composer",
                "Concrete5",
                "Coq",
                "CraftCMS",
                "D",
                "DM",
                "Dart",
                "DartEditor",
                "Delphi",
                "Diff",
                "Dreamweaver",
                "Dropbox",
                "Drupal",
                "EPiServer",
                "Eagle",
                "Eclipse",
                "EiffelStudio",
                "Elisp",
                "Elixir",
                "Elm",
                "Emacs",
                "Ensime",
                "Erlang",
                "Espresso",
                "ExpressionEngine",
                "ExtJs",
                "Fancy",
                "Finale",
                "FlexBuilder",
                "Flutter",
                "ForceDotCom",
                "Fortran",
                "FuelPHP",
                "GPG",
                "GWT",
                "Gcov",
                "GitBook",
                "Go",
                "Godot",
                "Gradle",
                "Grails",
                "Haskell",
                "IGORPro",
                "Idris",
                "Images",
                "JBoss",
                "JDeveloper",
                "JENKINS_HOME",
                "JEnv",
                "Java",
                "Jekyll",
                "JetBrains",
                "Joomla",
                "Julia",
                "KDevelop4",
                "Kate",
                "KiCad",
                "Kohana",
                "Kotlin",
                "LabVIEW",
                "Laravel",
                "Lazarus",
                "Leiningen",
                "LemonStand",
                "LibreOffice",
                "Lilypond",
                "Linux",
                "Lithium",
                "Lua",
                "LyX",
                "MATLAB",
                "Magento",
                "Maven",
                "Mercurial",
                "Mercury",
                "MetaProgrammingSystem",
                "Metals",
                "MicrosoftOffice",
                "MiniProgram",
                "ModelSim",
                "Momentics",
                "MonoDevelop",
                "Nanoc",
                "NetBeans",
                "Nim",
                "Ninja",
                "Node",
                "NotepadPP",
                "OCaml",
                "Objective-C",
                "Octave",
                "Opa",
                "OpenCart",
                "OracleForms",
                "Otto",
                "PSoCCreator",
                "Packer",
                "Patch",
                "Perl",
                "Phalcon",
                "PlayFramework",
                "Plone",
                "Prestashop",
                "Processing",
                "PuTTY",
                "PureScript",
                "Python",
                "Qooxdoo",
                "Qt",
                "R",
                "ROS",
                "Rails",
                "Raku",
                "Redcar",
                "Redis",
                "RhodesRhomobile",
                "Ruby",
                "Rust",
                "SBT",
                "SCons",
                "SVN",
                "Sass",
                "Scala",
                "Scheme",
                "Scrivener",
                "Sdcc",
                "SeamGen",
                "SketchUp",
                "SlickEdit",
                "Smalltalk",
                "Stata",
                "Stella",
                "SublimeText",
                "SugarCRM",
                "Swift",
                "Symfony",
                "SymphonyCMS",
                "SynopsysVCS",
                "Tags",
                "TeX",
                "Terraform",
                "TextMate",
                "Textpattern",
                "TortoiseGit",
                "TurboGears2",
                "Typo3",
                "Umbraco",
                "Unity",
                "UnrealEngine",
                "VVVV",
                "Vagrant",
                "Vim",
                "VirtualEnv",
                "Virtuoso",
                "VisualStudio",
                "VisualStudioCode",
                "Waf",
                "WebMethods",
                "Windows",
                "WordPress",
                "Xcode",
                "XilinxISE",
                "Xojo",
                "Yeoman",
                "Yii",
                "ZendFramework",
                "Zephir",
                "macOS"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "获取一个 .gitignore 模板",
            "content": {}
          }
        }
      }
    },
    "/v5/gitignore/templates/:name/raw": {
      "get": {
        "tags": [
          "Miscellaneous"
        ],
        "summary": "获取一个 .gitignore 模板原始文件",
        "description": "获取一个 .gitignore 模板原始文件",
        "operationId": "getV5GitignoreTemplatesNameRaw",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "name",
            "in": "path",
            "description": ".gitignore 模板名",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "Actionscript",
                "Ada",
                "Agda",
                "Android",
                "Anjuta",
                "Ansible",
                "AppEngine",
                "AppceleratorTitanium",
                "ArchLinuxPackages",
                "Archives",
                "Autotools",
                "Backup",
                "Bazaar",
                "BricxCC",
                "C",
                "C++",
                "CFWheels",
                "CMake",
                "CUDA",
                "CVS",
                "CakePHP",
                "Calabash",
                "ChefCookbook",
                "Clojure",
                "Cloud9",
                "CodeIgniter",
                "CodeKit",
                "CommonLisp",
                "Composer",
                "Concrete5",
                "Coq",
                "CraftCMS",
                "D",
                "DM",
                "Dart",
                "DartEditor",
                "Delphi",
                "Diff",
                "Dreamweaver",
                "Dropbox",
                "Drupal",
                "EPiServer",
                "Eagle",
                "Eclipse",
                "EiffelStudio",
                "Elisp",
                "Elixir",
                "Elm",
                "Emacs",
                "Ensime",
                "Erlang",
                "Espresso",
                "ExpressionEngine",
                "ExtJs",
                "Fancy",
                "Finale",
                "FlexBuilder",
                "Flutter",
                "ForceDotCom",
                "Fortran",
                "FuelPHP",
                "GPG",
                "GWT",
                "Gcov",
                "GitBook",
                "Go",
                "Godot",
                "Gradle",
                "Grails",
                "Haskell",
                "IGORPro",
                "Idris",
                "Images",
                "JBoss",
                "JDeveloper",
                "JENKINS_HOME",
                "JEnv",
                "Java",
                "Jekyll",
                "JetBrains",
                "Joomla",
                "Julia",
                "KDevelop4",
                "Kate",
                "KiCad",
                "Kohana",
                "Kotlin",
                "LabVIEW",
                "Laravel",
                "Lazarus",
                "Leiningen",
                "LemonStand",
                "LibreOffice",
                "Lilypond",
                "Linux",
                "Lithium",
                "Lua",
                "LyX",
                "MATLAB",
                "Magento",
                "Maven",
                "Mercurial",
                "Mercury",
                "MetaProgrammingSystem",
                "Metals",
                "MicrosoftOffice",
                "MiniProgram",
                "ModelSim",
                "Momentics",
                "MonoDevelop",
                "Nanoc",
                "NetBeans",
                "Nim",
                "Ninja",
                "Node",
                "NotepadPP",
                "OCaml",
                "Objective-C",
                "Octave",
                "Opa",
                "OpenCart",
                "OracleForms",
                "Otto",
                "PSoCCreator",
                "Packer",
                "Patch",
                "Perl",
                "Phalcon",
                "PlayFramework",
                "Plone",
                "Prestashop",
                "Processing",
                "PuTTY",
                "PureScript",
                "Python",
                "Qooxdoo",
                "Qt",
                "R",
                "ROS",
                "Rails",
                "Raku",
                "Redcar",
                "Redis",
                "RhodesRhomobile",
                "Ruby",
                "Rust",
                "SBT",
                "SCons",
                "SVN",
                "Sass",
                "Scala",
                "Scheme",
                "Scrivener",
                "Sdcc",
                "SeamGen",
                "SketchUp",
                "SlickEdit",
                "Smalltalk",
                "Stata",
                "Stella",
                "SublimeText",
                "SugarCRM",
                "Swift",
                "Symfony",
                "SymphonyCMS",
                "SynopsysVCS",
                "Tags",
                "TeX",
                "Terraform",
                "TextMate",
                "Textpattern",
                "TortoiseGit",
                "TurboGears2",
                "Typo3",
                "Umbraco",
                "Unity",
                "UnrealEngine",
                "VVVV",
                "Vagrant",
                "Vim",
                "VirtualEnv",
                "Virtuoso",
                "VisualStudio",
                "VisualStudioCode",
                "Waf",
                "WebMethods",
                "Windows",
                "WordPress",
                "Xcode",
                "XilinxISE",
                "Xojo",
                "Yeoman",
                "Yii",
                "ZendFramework",
                "Zephir",
                "macOS"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "获取一个 .gitignore 模板原始文件",
            "content": {}
          }
        }
      }
    },
    "/v5/licenses": {
      "get": {
        "tags": [
          "Miscellaneous"
        ],
        "summary": "列出可使用的开源许可协议",
        "description": "列出可使用的开源许可协议",
        "operationId": "getV5Licenses",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "列出可使用的开源许可协议",
            "content": {}
          }
        }
      }
    },
    "/v5/licenses/:license": {
      "get": {
        "tags": [
          "Miscellaneous"
        ],
        "summary": "获取一个开源许可协议",
        "description": "获取一个开源许可协议",
        "operationId": "getV5LicensesLicense",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "license",
            "in": "path",
            "description": "协议名称",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "MulanPSL-2.0",
                "0BSD",
                "AFL-3.0",
                "AGPL-3.0",
                "Apache-2.0",
                "Artistic-2.0",
                "BSD-2-Clause",
                "BSD-3-Clause",
                "BSD-3-Clause-Clear",
                "BSD-4-Clause",
                "BSL-1.0",
                "CC-BY-4.0",
                "CC-BY-SA-4.0",
                "CC0-1.0",
                "CECILL-2.1",
                "CERN-OHL-P-2.0",
                "CERN-OHL-S-2.0",
                "CERN-OHL-W-2.0",
                "ECL-2.0",
                "EPL-1.0",
                "EPL-2.0",
                "EUPL-1.1",
                "EUPL-1.2",
                "GFDL-1.3",
                "GPL-2.0",
                "GPL-3.0",
                "ISC",
                "LGPL-2.1",
                "LGPL-3.0",
                "LPPL-1.3c",
                "MIT",
                "MIT-0",
                "MPL-2.0",
                "MS-PL",
                "MS-RL",
                "MulanPSL-1.0",
                "MulanPubL-1.0",
                "MulanPubL-2.0",
                "NCSA",
                "ODbL-1.0",
                "OFL-1.1",
                "OSL-3.0",
                "PostgreSQL",
                "UPL-1.0",
                "Unlicense",
                "Vim",
                "WTFPL",
                "Zlib"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "获取一个开源许可协议",
            "content": {}
          }
        }
      }
    },
    "/v5/licenses/:license/raw": {
      "get": {
        "tags": [
          "Miscellaneous"
        ],
        "summary": "获取一个开源许可协议原始文件",
        "description": "获取一个开源许可协议原始文件",
        "operationId": "getV5LicensesLicenseRaw",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "license",
            "in": "path",
            "description": "协议名称",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "MulanPSL-2.0",
                "0BSD",
                "AFL-3.0",
                "AGPL-3.0",
                "Apache-2.0",
                "Artistic-2.0",
                "BSD-2-Clause",
                "BSD-3-Clause",
                "BSD-3-Clause-Clear",
                "BSD-4-Clause",
                "BSL-1.0",
                "CC-BY-4.0",
                "CC-BY-SA-4.0",
                "CC0-1.0",
                "CECILL-2.1",
                "CERN-OHL-P-2.0",
                "CERN-OHL-S-2.0",
                "CERN-OHL-W-2.0",
                "ECL-2.0",
                "EPL-1.0",
                "EPL-2.0",
                "EUPL-1.1",
                "EUPL-1.2",
                "GFDL-1.3",
                "GPL-2.0",
                "GPL-3.0",
                "ISC",
                "LGPL-2.1",
                "LGPL-3.0",
                "LPPL-1.3c",
                "MIT",
                "MIT-0",
                "MPL-2.0",
                "MS-PL",
                "MS-RL",
                "MulanPSL-1.0",
                "MulanPubL-1.0",
                "MulanPubL-2.0",
                "NCSA",
                "ODbL-1.0",
                "OFL-1.1",
                "OSL-3.0",
                "PostgreSQL",
                "UPL-1.0",
                "Unlicense",
                "Vim",
                "WTFPL",
                "Zlib"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "获取一个开源许可协议原始文件",
            "content": {}
          }
        }
      }
    },
    "/v5/markdown": {
      "post": {
        "tags": [
          "Miscellaneous"
        ],
        "summary": "渲染 Markdown 文本",
        "description": "渲染 Markdown 文本",
        "operationId": "postV5Markdown",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "text"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "text": {
                    "type": "string",
                    "description": "Markdown 文本"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "渲染 Markdown 文本",
            "content": {}
          }
        }
      }
    },
    "/v5/enterprise/:enterprise/pull_requests": {
      "get": {
        "tags": [
          "Enterprises"
        ],
        "summary": "企业 Pull Request 列表",
        "description": "企业 Pull Request 列表",
        "operationId": "getV5EnterpriseEnterprisePullRequests",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "enterprise",
            "in": "path",
            "description": "企业的路径 (path/login)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "issue_number",
            "in": "query",
            "description": "可选。Issue 编号 (区分大小写，无需添加 # 号)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "query",
            "description": "可选。仓库路径 (path)",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "program_id",
            "in": "query",
            "description": "可选。项目 ID",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "state",
            "in": "query",
            "description": "可选。Pull Request 状态",
            "schema": {
              "type": "string",
              "default": "open",
              "enum": [
                "open",
                "closed",
                "merged",
                "all"
              ]
            }
          },
          {
            "name": "head",
            "in": "query",
            "description": "可选。Pull Request 提交的源分支。格式：branch 或者：username:branch",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "base",
            "in": "query",
            "description": "可选。Pull Request 提交目标分支的名称。",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "可选。排序字段，默认按创建时间",
            "schema": {
              "type": "string",
              "default": "created",
              "enum": [
                "created",
                "updated",
                "popularity",
                "long-running"
              ]
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "可选。起始的更新时间，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "direction",
            "in": "query",
            "description": "可选。升序/降序",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "milestone_number",
            "in": "query",
            "description": "可选。里程碑序号 (id)",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "labels",
            "in": "query",
            "description": "用逗号分开的标签。如：bug,performance",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PullRequest"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/networks/:owner/:repo/events": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出仓库的所有公开动态",
        "description": "列出仓库的所有公开动态",
        "operationId": "getV5NetworksOwnerRepoEvents",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "path",
            "description": "仓库所属空间地址 (企业、组织或个人的地址 path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "repo",
            "in": "path",
            "description": "仓库路径 (path)",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "prev_id",
            "in": "query",
            "description": "滚动列表的最后一条记录的 id",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "滚动列表每页的数量，最大为 100",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Event"
                  }
                }
              }
            }
          },
          "403": {
            "description": "没有权限",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/search/repositories": {
      "get": {
        "tags": [
          "Search"
        ],
        "summary": "搜索仓库",
        "description": "搜索仓库",
        "operationId": "getV5SearchRepositories",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "q",
            "in": "query",
            "description": "搜索关键字",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "owner",
            "in": "query",
            "description": "筛选指定空间地址 (企业、组织或个人的地址 path) 的仓库",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "fork",
            "in": "query",
            "description": "是否搜索含 fork 的仓库，默认：否",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "language",
            "in": "query",
            "description": "筛选指定语言的仓库",
            "schema": {
              "type": "string",
              "enum": [
                "Java",
                "JavaScript",
                "HTML",
                "CSS",
                "Python",
                "Shell",
                "C",
                "C++",
                "PHP",
                "TypeScript",
                "C#",
                "Go",
                "Objective-C",
                "Android",
                "Ruby",
                "Assembly",
                "Swift",
                "NodeJS",
                "Perl",
                "Dart",
                "Lua",
                "Matlab",
                "Rust",
                "PowerShell",
                "Scala",
                "Groovy",
                "XSLT",
                "Verilog",
                "R",
                "QML",
                "Docker",
                "Pascal",
                "CoffeeScript",
                "FORTRAN",
                "Erlang",
                "ActionScript",
                "Emacs Lisp",
                "Smalltalk",
                "Delphi",
                "VHDL",
                "TeX/LaTeX",
                "ASP",
                "M",
                "Visual Basic",
                "Clojure",
                "Common Lisp",
                "Haskell",
                "Awk",
                "LiveScript",
                "Elixir",
                "Scheme",
                "Julia",
                "OCaml",
                "Puppet",
                "AutoHotkey",
                "Ada",
                "Standard ML",
                "D",
                "Arduino",
                "Logos",
                "Prolog",
                "VimL",
                "Haxe",
                "ColdFusion",
                "Vala",
                "Coq",
                "Scilab",
                "Racket",
                "Slash",
                "Eiffel",
                "eC",
                "DOT",
                "Nemerle",
                "wechat",
                "Crystal",
                "Kotlin",
                "SQL",
                "Lisp",
                "XML",
                "C/C++",
                "HTML/CSS",
                "易语言",
                "汇编",
                "other",
                "Pawn",
                "Zephir",
                "YAML"
              ]
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序字段，last_push_at(更新时间)、stars_count(收藏数)、forks_count(Fork 数)、watches_count(关注数)，默认为最佳匹配",
            "schema": {
              "type": "string",
              "enum": [
                "last_push_at",
                "stars_count",
                "forks_count",
                "watches_count"
              ]
            }
          },
          {
            "name": "order",
            "in": "query",
            "description": "排序顺序：desc(default)、asc",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Project"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/search/issues": {
      "get": {
        "tags": [
          "Search"
        ],
        "summary": "搜索 Issues",
        "description": "搜索 Issues",
        "operationId": "getV5SearchIssues",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "q",
            "in": "query",
            "description": "搜索关键字",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "repo",
            "in": "query",
            "description": "筛选指定仓库 (path, e.g. oschina/git-osc) 的 issues",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "language",
            "in": "query",
            "description": "筛选指定语言的 issues",
            "schema": {
              "type": "string",
              "enum": [
                "Java",
                "JavaScript",
                "HTML",
                "CSS",
                "Python",
                "Shell",
                "C",
                "C++",
                "PHP",
                "TypeScript",
                "C#",
                "Go",
                "Objective-C",
                "Android",
                "Ruby",
                "Assembly",
                "Swift",
                "NodeJS",
                "Perl",
                "Dart",
                "Lua",
                "Matlab",
                "Rust",
                "PowerShell",
                "Scala",
                "Groovy",
                "XSLT",
                "Verilog",
                "R",
                "QML",
                "Docker",
                "Pascal",
                "CoffeeScript",
                "FORTRAN",
                "Erlang",
                "ActionScript",
                "Emacs Lisp",
                "Smalltalk",
                "Delphi",
                "VHDL",
                "TeX/LaTeX",
                "ASP",
                "M",
                "Visual Basic",
                "Clojure",
                "Common Lisp",
                "Haskell",
                "Awk",
                "LiveScript",
                "Elixir",
                "Scheme",
                "Julia",
                "OCaml",
                "Puppet",
                "AutoHotkey",
                "Ada",
                "Standard ML",
                "D",
                "Arduino",
                "Logos",
                "Prolog",
                "VimL",
                "Haxe",
                "ColdFusion",
                "Vala",
                "Coq",
                "Scilab",
                "Racket",
                "Slash",
                "Eiffel",
                "eC",
                "DOT",
                "Nemerle",
                "wechat",
                "Crystal",
                "Kotlin",
                "SQL",
                "Lisp",
                "XML",
                "C/C++",
                "HTML/CSS",
                "易语言",
                "汇编",
                "other",
                "Pawn",
                "Zephir",
                "YAML"
              ]
            }
          },
          {
            "name": "label",
            "in": "query",
            "description": "筛选指定标签的 issues",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "state",
            "in": "query",
            "description": "筛选指定状态的 issues, open(开启)、closed(完成)、rejected(拒绝)",
            "schema": {
              "type": "string",
              "enum": [
                "open",
                "progressing",
                "closed",
                "rejected"
              ]
            }
          },
          {
            "name": "author",
            "in": "query",
            "description": "筛选指定创建者 (username/login) 的 issues",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "assignee",
            "in": "query",
            "description": "筛选指定负责人 (username/login) 的 issues",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序字段，created_at(创建时间)、last_push_at(更新时间)、notes_count(评论数)，默认为最佳匹配",
            "schema": {
              "type": "string",
              "enum": [
                "created_at",
                "updated_at",
                "notes_count"
              ]
            }
          },
          {
            "name": "order",
            "in": "query",
            "description": "排序顺序：desc(default)、asc",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Issue"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/search/users": {
      "get": {
        "tags": [
          "Search"
        ],
        "summary": "搜索用户",
        "description": "搜索用户",
        "operationId": "getV5SearchUsers",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "q",
            "in": "query",
            "description": "搜索关键字",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "排序字段，joined_at(注册时间)，默认为最佳匹配",
            "schema": {
              "type": "string",
              "enum": [
                "joined_at"
              ]
            }
          },
          {
            "name": "order",
            "in": "query",
            "description": "排序顺序：desc(default)、asc",
            "schema": {
              "type": "string",
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/notifications/count": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "获取授权用户的通知数",
        "description": "获取授权用户的通知数",
        "operationId": "getV5NotificationsCount",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "unread",
            "in": "query",
            "description": "是否只获取未读消息，默认：否",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回数据",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserNotificationCount"
                }
              }
            }
          }
        }
      }
    },
    "/v5/notifications/threads": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出授权用户的所有通知",
        "description": "列出授权用户的所有通知",
        "operationId": "getV5NotificationsThreads",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "unread",
            "in": "query",
            "description": "是否只获取未读消息，默认：否",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "participating",
            "in": "query",
            "description": "是否只获取自己直接参与的消息，默认：否",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "筛选指定类型的通知，all：所有，event：事件通知，referer：@ 通知",
            "schema": {
              "type": "string",
              "default": "all",
              "enum": [
                "all",
                "event",
                "referer"
              ]
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "只获取在给定时间后更新的消息，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "before",
            "in": "query",
            "description": "只获取在给定时间前更新的消息，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ids",
            "in": "query",
            "description": "指定一组通知 ID，以 , 分隔",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回数据",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserNotificationList"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "Activity"
        ],
        "summary": "标记所有通知为已读",
        "description": "标记所有通知为已读",
        "operationId": "putV5NotificationsThreads",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "ids": {
                    "type": "string",
                    "description": "指定一组通知 ID，以 , 分隔"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "205": {
            "description": "执行成功",
            "content": {}
          }
        }
      }
    },
    "/v5/notifications/threads/:id": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "获取一条通知",
        "description": "获取一条通知",
        "operationId": "getV5NotificationsThreadsId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "通知的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserNotification"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Activity"
        ],
        "summary": "标记一条通知为已读",
        "description": "标记一条通知为已读",
        "operationId": "patchV5NotificationsThreadsId",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "通知的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "205": {
            "description": "执行成功",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/notifications/messages": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "列出授权用户的所有私信",
        "description": "列出授权用户的所有私信",
        "operationId": "getV5NotificationsMessages",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "unread",
            "in": "query",
            "description": "是否只显示未读私信，默认：否",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "since",
            "in": "query",
            "description": "只获取在给定时间后更新的私信，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "before",
            "in": "query",
            "description": "只获取在给定时间前更新的私信，要求时间格式为 ISO 8601",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "ids",
            "in": "query",
            "description": "指定一组私信 ID，以 , 分隔",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "当前的页码",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "per_page",
            "in": "query",
            "description": "每页的数量，最大为 100",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserMessageList"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "Activity"
        ],
        "summary": "标记所有私信为已读",
        "description": "标记所有私信为已读",
        "operationId": "putV5NotificationsMessages",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "ids": {
                    "type": "string",
                    "description": "指定一组私信 ID，以 , 分隔"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "205": {
            "description": "执行成功",
            "content": {}
          }
        }
      },
      "post": {
        "tags": [
          "Activity"
        ],
        "summary": "发送私信给指定用户",
        "description": "发送私信给指定用户",
        "operationId": "postV5NotificationsMessages",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "required": [
                  "content",
                  "username"
                ],
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  },
                  "username": {
                    "type": "string",
                    "description": "用户名 (username/login)"
                  },
                  "content": {
                    "type": "string",
                    "description": "私信内容"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserMessage"
                }
              }
            }
          },
          "400": {
            "description": "数据不合法",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/notifications/messages/:id": {
      "get": {
        "tags": [
          "Activity"
        ],
        "summary": "获取一条私信",
        "description": "获取一条私信",
        "operationId": "getV5NotificationsMessagesId",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "私信的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserMessage"
                }
              }
            }
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": [
          "Activity"
        ],
        "summary": "标记一条私信为已读",
        "description": "标记一条私信为已读",
        "operationId": "patchV5NotificationsMessagesId",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "私信的 ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string",
                    "description": "用户授权码"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "205": {
            "description": "执行成功",
            "content": {}
          },
          "404": {
            "description": "没有相关数据",
            "content": {}
          }
        }
      }
    },
    "/v5/emails": {
      "get": {
        "tags": [
          "Emails"
        ],
        "summary": "获取授权用户的全部邮箱",
        "description": "获取授权用户的全部邮箱",
        "operationId": "getV5Emails",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "返回格式",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserEmail"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v5/emojis": {
      "get": {
        "tags": [
          "Miscellaneous"
        ],
        "summary": "列出可使用的 Emoji",
        "description": "列出可使用的 Emoji",
        "operationId": "getV5Emojis",
        "parameters": [
          {
            "name": "access_token",
            "in": "query",
            "description": "用户授权码",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "列出可使用的 Emoji",
            "content": {}
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "CheckRun": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "head_sha": {
            "type": "string",
            "description": "提交 sha 值"
          },
          "url": {
            "type": "string",
            "description": "api 路由"
          },
          "html_url": {
            "type": "string",
            "description": "页面路由"
          },
          "details_url": {
            "type": "string",
            "description": "外部详情路由"
          },
          "status": {
            "type": "string",
            "description": "状态"
          },
          "conclusion": {
            "type": "string",
            "description": "结论"
          },
          "started_at": {
            "type": "string",
            "description": "开始时间"
          },
          "completed_at": {
            "type": "string",
            "description": "完成事件"
          },
          "output": {
            "type": "object",
            "properties": {},
            "description": "详情"
          },
          "name": {
            "type": "string",
            "description": "检查名"
          }
        },
        "description": "获取某个提交的检查项"
      },
      "CheckAnnotation": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string",
            "description": "文件路径"
          },
          "start_line": {
            "type": "integer",
            "description": "开始行",
            "format": "int32"
          },
          "end_line": {
            "type": "integer",
            "description": "结束行",
            "format": "int32"
          },
          "start_column": {
            "type": "integer",
            "description": "开始列",
            "format": "int32"
          },
          "end_column": {
            "type": "integer",
            "description": "结束列",
            "format": "int32"
          },
          "annotation_level": {
            "type": "string",
            "description": "注释级别"
          },
          "title": {
            "type": "string",
            "description": "标题"
          },
          "message": {
            "type": "string",
            "description": "信息"
          },
          "raw_details": {
            "type": "string",
            "description": "详情"
          },
          "blob_href": {
            "type": "string",
            "description": "文件路由"
          }
        },
        "description": "获取检查项代码注释"
      },
      "Branch": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "commit": {
            "type": "string"
          },
          "protected": {
            "type": "boolean"
          },
          "protection_url": {
            "type": "string"
          }
        },
        "description": "获取所有分支"
      },
      "CompleteBranch": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "commit": {
            "type": "string"
          },
          "_links": {
            "type": "string"
          },
          "protected": {
            "type": "boolean"
          },
          "protection_url": {
            "type": "string"
          }
        },
        "description": "创建分支"
      },
      "ProtectionRule": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "project_id": {
            "type": "integer",
            "format": "int32"
          },
          "wildcard": {
            "type": "string"
          },
          "pushers": {
            "type": "object",
            "properties": {}
          },
          "mergers": {
            "type": "object",
            "properties": {}
          },
          "contexts": {
            "type": "array",
            "description": "检查项列表",
            "items": {
              "type": "string"
            }
          },
          "strict": {
            "type": "boolean",
            "description": "是否严格检查"
          },
          "mode": {
            "type": "string",
            "description": "模式 standard: 标准模式，review: 评审模式"
          },
          "escapse_protect_branch_list": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "不受规则影响的分支列表，以英文逗号分隔，形如：['a', 'b']"
          }
        },
        "description": "删除保护分支规则"
      },
      "Tag": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "message": {
            "type": "string"
          },
          "commit": {
            "type": "string"
          },
          "tagger": {
            "$ref": "#/components/schemas/GitUser"
          }
        },
        "description": "创建一个仓库的 Tag"
      },
      "GitUser": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "date": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      "Note": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "body": {
            "type": "string"
          },
          "body_html": {
            "type": "string"
          },
          "user": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "source": {
            "type": "string"
          },
          "target": {
            "type": "object",
            "properties": {}
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          },
          "in_reply_to_id": {
            "type": "integer",
            "format": "int32"
          },
          "in_reply_to_user": {
            "$ref": "#/components/schemas/UserBasic"
          }
        },
        "description": "获取企业某个 Issue 所有评论"
      },
      "UserBasic": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "remark": {
            "type": "string",
            "description": "企业备注名"
          },
          "followers_url": {
            "type": "string"
          },
          "following_url": {
            "type": "string"
          },
          "gists_url": {
            "type": "string"
          },
          "starred_url": {
            "type": "string"
          },
          "subscriptions_url": {
            "type": "string"
          },
          "organizations_url": {
            "type": "string"
          },
          "repos_url": {
            "type": "string"
          },
          "events_url": {
            "type": "string"
          },
          "received_events_url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "member_role": {
            "type": "string"
          }
        },
        "description": "列出一个组织的所有成员"
      },
      "RepoCommit": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "sha": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "comments_url": {
            "type": "string"
          },
          "commit": {
            "type": "string"
          },
          "author": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "committer": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "parents": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "description": "仓库的所有提交"
      },
      "postV5ReposOwnerRepoCommits": {
        "required": [
          "actions",
          "branch",
          "message"
        ],
        "type": "object",
        "properties": {
          "access_token": {
            "type": "string",
            "description": "用户授权码"
          },
          "branch": {
            "type": "string",
            "description": "变更的目标分支名。创建新分支时需提供 `start_branch` 参数"
          },
          "message": {
            "type": "string",
            "description": "提交信息"
          },
          "actions": {
            "type": "array",
            "items": {
              "required": [
                "action",
                "path"
              ],
              "type": "object",
              "properties": {
                "action": {
                  "type": "string",
                  "description": "文件操作：`create`, `delete`, `move`, `update`, `chmod`"
                },
                "path": {
                  "type": "string",
                  "description": "文件路径"
                },
                "previous_path": {
                  "type": "string",
                  "description": "原文件路径，文件重命名 `move` 时使用"
                },
                "content": {
                  "type": "string",
                  "description": "文件内容"
                },
                "encoding": {
                  "type": "string",
                  "description": "文件内容编码 `text` 或者 `base64`"
                },
                "last_commit_id": {
                  "type": "string",
                  "description": "文件最近一次提交的 SHA"
                },
                "execute_filemode": {
                  "type": "boolean",
                  "description": "是否添加文件可执行标志"
                }
              }
            }
          },
          "start_branch": {
            "type": "string",
            "description": "分支起地点。新建分支时使用，更新分支时可选"
          },
          "author": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "description": "Author 的名字，默认为当前用户的名字"
              },
              "email": {
                "type": "string",
                "description": "Author 的邮箱，默认为当前用户的邮箱"
              }
            }
          }
        },
        "description": "提交多个文件变更"
      },
      "RepoCommitWithFiles": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "sha": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "comments_url": {
            "type": "string"
          },
          "commit": {
            "type": "string"
          },
          "author": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "committer": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "parents": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "stats": {
            "type": "string"
          },
          "files": {
            "type": "array",
            "description": "文件列表",
            "items": {
              "$ref": "#/components/schemas/DiffFile"
            }
          },
          "truncated": {
            "type": "boolean",
            "description": "文件列表是否被截断"
          }
        },
        "description": "仓库的某个提交"
      },
      "DiffFile": {
        "type": "object",
        "properties": {
          "sha": {
            "type": "string"
          },
          "filename": {
            "type": "string",
            "description": "文件路径"
          },
          "status": {
            "type": "string",
            "description": "文件状态"
          },
          "additions": {
            "type": "integer",
            "description": "新增行数",
            "format": "int32"
          },
          "deletions": {
            "type": "integer",
            "description": "删除行数",
            "format": "int32"
          },
          "changes": {
            "type": "integer",
            "description": "变更行数",
            "format": "int32"
          },
          "blob_url": {
            "type": "string",
            "description": "blob 链接"
          },
          "raw_url": {
            "type": "string",
            "description": "raw 链接"
          },
          "content_url": {
            "type": "string",
            "description": "content 链接"
          },
          "patch": {
            "type": "string",
            "description": "patch"
          },
          "truncated": {
            "type": "boolean",
            "description": "patch 内容是否被截断"
          }
        }
      },
      "Compare": {
        "type": "object",
        "properties": {
          "base_commit": {
            "$ref": "#/components/schemas/RepoCommit"
          },
          "merge_base_commit": {
            "$ref": "#/components/schemas/RepoCommit"
          },
          "commits": {
            "type": "array",
            "description": "commits 数量限制在 100 以内",
            "items": {
              "$ref": "#/components/schemas/RepoCommit"
            }
          },
          "files": {
            "type": "array",
            "description": "文件列表",
            "items": {
              "$ref": "#/components/schemas/DiffFile"
            }
          },
          "truncated": {
            "type": "boolean",
            "description": "文件列表是否被截断"
          }
        },
        "description": "Commits 对比\n 返回的 commits 数量限制在 100 以内"
      },
      "SSHKey": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "key": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          }
        },
        "description": "获取一个公钥"
      },
      "SSHKeyBasic": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "key": {
            "type": "string"
          }
        },
        "description": "列出指定用户的所有公钥"
      },
      "Content": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          },
          "encoding": {
            "type": "string"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "name": {
            "type": "string"
          },
          "path": {
            "type": "string"
          },
          "content": {
            "type": "string"
          },
          "sha": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "download_url": {
            "type": "string"
          },
          "_links": {
            "type": "string"
          }
        },
        "description": "获取仓库具体路径下的内容"
      },
      "CommitContent": {
        "type": "object",
        "properties": {
          "content": {
            "$ref": "#/components/schemas/ContentBasic"
          },
          "commit": {
            "$ref": "#/components/schemas/Commit"
          }
        },
        "description": "删除文件"
      },
      "ContentBasic": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "path": {
            "type": "string"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "sha": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "download_url": {
            "type": "string"
          },
          "_links": {
            "type": "string"
          }
        }
      },
      "Commit": {
        "type": "object",
        "properties": {
          "sha": {
            "type": "string"
          },
          "author": {
            "$ref": "#/components/schemas/GitUser"
          },
          "committer": {
            "$ref": "#/components/schemas/GitUser"
          },
          "message": {
            "type": "string"
          },
          "tree": {
            "type": "string"
          },
          "parents": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "Blame": {
        "type": "object",
        "properties": {
          "commit": {
            "$ref": "#/components/schemas/Commit"
          },
          "lines": {
            "type": "array",
            "description": "代码行",
            "items": {
              "type": "string"
            }
          }
        },
        "description": "Blame"
      },
      "Blob": {
        "type": "object",
        "properties": {
          "sha": {
            "type": "string"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "url": {
            "type": "string"
          },
          "content": {
            "type": "string"
          },
          "encoding": {
            "type": "string"
          }
        },
        "description": "获取文件 Blob"
      },
      "Tree": {
        "type": "object",
        "properties": {
          "sha": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "tree": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "truncated": {
            "type": "boolean"
          }
        },
        "description": "获取目录 Tree"
      },
      "GiteeMetrics": {
        "type": "object",
        "properties": {
          "data": {
            "type": "string"
          },
          "total_score": {
            "type": "integer",
            "format": "int32"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "repo": {
            "$ref": "#/components/schemas/ProjectBasic"
          }
        },
        "description": "获取 Gitee 指数"
      },
      "ProjectBasic": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "full_name": {
            "type": "string"
          },
          "human_name": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "namespace": {
            "$ref": "#/components/schemas/NamespaceMini"
          },
          "path": {
            "type": "string",
            "description": "仓库路径"
          },
          "name": {
            "type": "string",
            "description": "仓库名称"
          },
          "owner": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "assigner": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "description": {
            "type": "string",
            "description": "仓库描述"
          },
          "private": {
            "type": "boolean",
            "description": "是否私有"
          },
          "public": {
            "type": "boolean",
            "description": "是否公开"
          },
          "internal": {
            "type": "boolean",
            "description": "是否内部开源"
          },
          "fork": {
            "type": "boolean",
            "description": "是否是 fork 仓库"
          },
          "html_url": {
            "type": "string"
          },
          "ssh_url": {
            "type": "string"
          }
        }
      },
      "NamespaceMini": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "namespace id",
            "format": "int32"
          },
          "type": {
            "type": "string",
            "description": "namespace 类型，企业：Enterprise，组织：Group，用户：null"
          },
          "name": {
            "type": "string",
            "description": "namespace 名称"
          },
          "path": {
            "type": "string",
            "description": "namespace 路径"
          },
          "html_url": {
            "type": "string",
            "description": "namespace 地址"
          }
        }
      },
      "Issue": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "url": {
            "type": "string"
          },
          "repository_url": {
            "type": "string"
          },
          "labels_url": {
            "type": "string"
          },
          "comments_url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "parent_url": {
            "type": "string"
          },
          "number": {
            "type": "string",
            "description": "唯一标识"
          },
          "parent_id": {
            "type": "integer",
            "description": "上级 id",
            "format": "int32"
          },
          "depth": {
            "type": "integer",
            "description": "所在层级",
            "format": "int32"
          },
          "state": {
            "type": "string",
            "description": "状态"
          },
          "title": {
            "type": "string",
            "description": "标题"
          },
          "body": {
            "type": "string",
            "description": "描述"
          },
          "body_html": {
            "type": "string",
            "description": "描述 html 格式"
          },
          "user": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "labels": {
            "type": "array",
            "description": "标签",
            "items": {
              "$ref": "#/components/schemas/Label"
            }
          },
          "assignee": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "collaborators": {
            "type": "array",
            "description": "协作者",
            "items": {
              "$ref": "#/components/schemas/UserBasic"
            }
          },
          "repository": {
            "$ref": "#/components/schemas/Project"
          },
          "milestone": {
            "$ref": "#/components/schemas/Milestone"
          },
          "created_at": {
            "type": "string",
            "description": "创建时间",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "description": "更新时间",
            "format": "date-time"
          },
          "plan_started_at": {
            "type": "string",
            "description": "计划开始时间",
            "format": "date-time"
          },
          "deadline": {
            "type": "string",
            "description": "结束时间",
            "format": "date-time"
          },
          "finished_at": {
            "type": "string",
            "description": "完成时间",
            "format": "date-time"
          },
          "scheduled_time": {
            "type": "integer",
            "description": "预计工期",
            "format": "int32"
          },
          "comments": {
            "type": "integer",
            "description": "评论数量",
            "format": "int32"
          },
          "priority": {
            "type": "integer",
            "description": "优先级 (0: 不指定 1: 不重要 2: 次要 3: 主要 4: 严重)",
            "format": "int32"
          },
          "issue_type_detail": {
            "$ref": "#/components/schemas/IssueType"
          },
          "program": {
            "$ref": "#/components/schemas/ProgramBasic"
          },
          "security_hole": {
            "type": "boolean",
            "description": "是否为私有 issue"
          },
          "issue_state_detail": {
            "$ref": "#/components/schemas/IssueState"
          },
          "branch": {
            "type": "string",
            "description": "关联分支"
          }
        },
        "description": "搜索 Issues"
      },
      "Label": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "color": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "repository_id": {
            "type": "integer",
            "format": "int32"
          },
          "url": {
            "type": "string"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          }
        },
        "description": "获取企业某个标签"
      },
      "Project": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "full_name": {
            "type": "string"
          },
          "human_name": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "namespace": {
            "$ref": "#/components/schemas/NamespaceMini"
          },
          "path": {
            "type": "string",
            "description": "仓库路径"
          },
          "name": {
            "type": "string",
            "description": "仓库名称"
          },
          "owner": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "assigner": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "description": {
            "type": "string",
            "description": "仓库描述"
          },
          "private": {
            "type": "boolean",
            "description": "是否私有"
          },
          "public": {
            "type": "boolean",
            "description": "是否公开"
          },
          "internal": {
            "type": "boolean",
            "description": "是否内部开源"
          },
          "fork": {
            "type": "boolean",
            "description": "是否是 fork 仓库"
          },
          "html_url": {
            "type": "string"
          },
          "ssh_url": {
            "type": "string"
          },
          "forks_url": {
            "type": "string"
          },
          "keys_url": {
            "type": "string"
          },
          "collaborators_url": {
            "type": "string"
          },
          "hooks_url": {
            "type": "string"
          },
          "branches_url": {
            "type": "string"
          },
          "tags_url": {
            "type": "string"
          },
          "blobs_url": {
            "type": "string"
          },
          "stargazers_url": {
            "type": "string"
          },
          "contributors_url": {
            "type": "string"
          },
          "commits_url": {
            "type": "string"
          },
          "comments_url": {
            "type": "string"
          },
          "issue_comment_url": {
            "type": "string"
          },
          "issues_url": {
            "type": "string"
          },
          "pulls_url": {
            "type": "string"
          },
          "milestones_url": {
            "type": "string"
          },
          "notifications_url": {
            "type": "string"
          },
          "labels_url": {
            "type": "string"
          },
          "releases_url": {
            "type": "string"
          },
          "recommend": {
            "type": "boolean",
            "description": "是否是推荐仓库"
          },
          "gvp": {
            "type": "boolean",
            "description": "是否是 GVP 仓库"
          },
          "homepage": {
            "type": "string",
            "description": "主页"
          },
          "language": {
            "type": "string",
            "description": "语言"
          },
          "forks_count": {
            "type": "integer",
            "description": "仓库 fork 数量",
            "format": "int32"
          },
          "stargazers_count": {
            "type": "integer",
            "description": "仓库 star 数量",
            "format": "int32"
          },
          "watchers_count": {
            "type": "integer",
            "description": "仓库 watch 数量",
            "format": "int32"
          },
          "default_branch": {
            "type": "string",
            "description": "默认分支"
          },
          "open_issues_count": {
            "type": "integer",
            "description": "开启的 issue 数量",
            "format": "int32"
          },
          "has_issues": {
            "type": "boolean",
            "description": "是否开启 issue 功能"
          },
          "has_wiki": {
            "type": "boolean",
            "description": "是否开启 Wiki 功能"
          },
          "issue_comment": {
            "type": "boolean",
            "description": "是否允许用户对“关闭”状态的 Issue 进行评论"
          },
          "can_comment": {
            "type": "boolean",
            "description": "是否允许用户对仓库进行评论"
          },
          "pull_requests_enabled": {
            "type": "boolean",
            "description": "是否接受 Pull Request，协作开发"
          },
          "has_page": {
            "type": "boolean",
            "description": "是否开启了 Pages"
          },
          "license": {
            "type": "string",
            "description": "开源许可"
          },
          "outsourced": {
            "type": "boolean",
            "description": "仓库类型（内部/外包）"
          },
          "project_creator": {
            "type": "string",
            "description": "仓库创建者的 username"
          },
          "members": {
            "type": "array",
            "description": "仓库成员的 username",
            "items": {
              "type": "string"
            }
          },
          "pushed_at": {
            "type": "string",
            "description": "最近一次代码推送时间",
            "format": "date-time"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          },
          "parent": {
            "$ref": "#/components/schemas/Project"
          },
          "paas": {
            "type": "string"
          },
          "stared": {
            "type": "boolean",
            "description": "是否 star"
          },
          "watched": {
            "type": "boolean",
            "description": "是否 watch"
          },
          "relation": {
            "type": "string",
            "description": "当前用户相对于仓库的角色"
          },
          "assignees_number": {
            "type": "integer",
            "description": "代码审查设置，审查人数",
            "format": "int32"
          },
          "testers_number": {
            "type": "integer",
            "description": "代码审查设置，测试人数",
            "format": "int32"
          },
          "assignee": {
            "type": "array",
            "description": "代码审查设置，审查人员",
            "items": {
              "$ref": "#/components/schemas/UserBasic"
            }
          },
          "testers": {
            "type": "array",
            "description": "代码审查设置，测试人员",
            "items": {
              "$ref": "#/components/schemas/UserBasic"
            }
          },
          "status": {
            "type": "string",
            "description": "仓库状态"
          },
          "programs": {
            "type": "array",
            "description": "仓库所属的项目",
            "items": {
              "$ref": "#/components/schemas/ProgramBasic"
            }
          },
          "enterprise": {
            "$ref": "#/components/schemas/NamespaceMini"
          },
          "project_labels": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ProjectLabel"
            }
          },
          "issue_template_source": {
            "type": "string",
            "description": "Issue 模版来源 project: 使用仓库 Issue Template 作为模版；enterprise: 使用企业工作项作为模版"
          }
        },
        "description": "搜索仓库"
      },
      "ProgramBasic": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "项目 id",
            "format": "int32"
          },
          "name": {
            "type": "string",
            "description": "项目名称"
          },
          "description": {
            "type": "string",
            "description": "项目描述"
          },
          "assignee": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "author": {
            "$ref": "#/components/schemas/UserBasic"
          }
        }
      },
      "ProjectLabel": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "name": {
            "type": "string"
          },
          "ident": {
            "type": "string"
          }
        },
        "description": "替换所有仓库标签"
      },
      "Milestone": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "number": {
            "type": "integer",
            "format": "int32"
          },
          "repository_id": {
            "type": "integer",
            "format": "int32"
          },
          "state": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "open_issues": {
            "type": "integer",
            "format": "int32"
          },
          "closed_issues": {
            "type": "integer",
            "format": "int32"
          },
          "due_on": {
            "type": "string",
            "format": "date"
          }
        },
        "description": "更新仓库里程碑"
      },
      "IssueType": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "任务类型 ID",
            "format": "int32"
          },
          "title": {
            "type": "string",
            "description": "任务类型的名称"
          },
          "template": {
            "type": "string",
            "description": "任务类型模板"
          },
          "ident": {
            "type": "string",
            "description": "唯一标识符"
          },
          "color": {
            "type": "string",
            "description": "颜色"
          },
          "is_system": {
            "type": "boolean",
            "description": "是否系统默认类型"
          },
          "created_at": {
            "type": "string",
            "description": "任务类型创建时间",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "description": "任务类型更新时间",
            "format": "date-time"
          }
        }
      },
      "IssueState": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "任务状态 ID",
            "format": "int32"
          },
          "title": {
            "type": "string",
            "description": "任务状态的名称"
          },
          "color": {
            "type": "string",
            "description": "任务状态的颜色"
          },
          "icon": {
            "type": "string",
            "description": "任务状态的 Icon"
          },
          "command": {
            "type": "string",
            "description": "任务状态的 指令"
          },
          "serial": {
            "type": "integer",
            "description": "任务状态的 排序",
            "format": "int32"
          },
          "created_at": {
            "type": "string",
            "description": "任务状态创建时间",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "description": "任务状态更新时间",
            "format": "date-time"
          }
        }
      },
      "PullRequest": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "diff_url": {
            "type": "string"
          },
          "patch_url": {
            "type": "string"
          },
          "issue_url": {
            "type": "string"
          },
          "commits_url": {
            "type": "string"
          },
          "review_comments_url": {
            "type": "string"
          },
          "review_comment_url": {
            "type": "string"
          },
          "comments_url": {
            "type": "string"
          },
          "number": {
            "type": "integer",
            "format": "int32"
          },
          "close_related_issue": {
            "type": "integer",
            "format": "int32"
          },
          "prune_branch": {
            "type": "boolean"
          },
          "state": {
            "type": "string"
          },
          "assignees_number": {
            "type": "integer",
            "format": "int32"
          },
          "testers_number": {
            "type": "integer",
            "format": "int32"
          },
          "assignees": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserAssignee"
            }
          },
          "testers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserAssignee"
            }
          },
          "api_reviewers_number": {
            "type": "integer",
            "format": "int32"
          },
          "api_reviewers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserAssignee"
            }
          },
          "milestone": {
            "$ref": "#/components/schemas/Milestone"
          },
          "labels": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Label"
            }
          },
          "locked": {
            "type": "boolean"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          },
          "closed_at": {
            "type": "string",
            "format": "date-time"
          },
          "draft": {
            "type": "boolean"
          },
          "merged_at": {
            "type": "string",
            "format": "date-time"
          },
          "mergeable": {
            "type": "boolean"
          },
          "can_merge_check": {
            "type": "boolean"
          },
          "_links": {
            "type": "string"
          },
          "user": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "ref_pull_requests": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/RefPullRequest"
            }
          },
          "title": {
            "type": "string"
          },
          "body": {
            "type": "string"
          },
          "body_html": {
            "type": "string"
          },
          "head": {
            "type": "string"
          },
          "base": {
            "type": "string"
          }
        },
        "description": "企业 Pull Request 列表"
      },
      "UserAssignee": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "remark": {
            "type": "string",
            "description": "企业备注名"
          },
          "followers_url": {
            "type": "string"
          },
          "following_url": {
            "type": "string"
          },
          "gists_url": {
            "type": "string"
          },
          "starred_url": {
            "type": "string"
          },
          "subscriptions_url": {
            "type": "string"
          },
          "organizations_url": {
            "type": "string"
          },
          "repos_url": {
            "type": "string"
          },
          "events_url": {
            "type": "string"
          },
          "received_events_url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "member_role": {
            "type": "string"
          },
          "assignee": {
            "type": "boolean",
            "description": "是否默认指派审查"
          },
          "code_owner": {
            "type": "boolean",
            "description": "是否 CodeOwner 指派审查"
          },
          "accept": {
            "type": "boolean",
            "description": "是否审查通过"
          }
        }
      },
      "RefPullRequest": {
        "type": "object",
        "properties": {
          "number": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "state": {
            "type": "string"
          }
        }
      },
      "OperateLog": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "icon": {
            "type": "string"
          },
          "user": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "target": {
            "type": "string"
          },
          "content": {
            "type": "string"
          },
          "link_target": {
            "type": "object",
            "properties": {}
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "action_type": {
            "type": "string"
          }
        },
        "description": "获取某个 Pull Request 的操作日志"
      },
      "ProjectPushConfig": {
        "type": "object",
        "properties": {
          "restrict_push_own_commit": {
            "type": "boolean"
          },
          "restrict_author_email_suffix": {
            "type": "boolean"
          },
          "author_email_suffix": {
            "type": "string"
          },
          "restrict_commit_message": {
            "type": "boolean"
          },
          "commit_message_regex": {
            "type": "string"
          },
          "restrict_file_size": {
            "type": "boolean"
          },
          "max_file_size": {
            "type": "integer",
            "format": "int32"
          },
          "except_manager": {
            "type": "boolean"
          }
        },
        "description": "修改仓库推送规则设置"
      },
      "Contributor": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "contributions": {
            "type": "integer",
            "format": "int32"
          }
        },
        "description": "获取仓库贡献者"
      },
      "ProjectMember": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "remark": {
            "type": "string",
            "description": "企业备注名"
          },
          "followers_url": {
            "type": "string"
          },
          "following_url": {
            "type": "string"
          },
          "gists_url": {
            "type": "string"
          },
          "starred_url": {
            "type": "string"
          },
          "subscriptions_url": {
            "type": "string"
          },
          "organizations_url": {
            "type": "string"
          },
          "repos_url": {
            "type": "string"
          },
          "events_url": {
            "type": "string"
          },
          "received_events_url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "member_role": {
            "type": "string"
          },
          "permissions": {
            "type": "string"
          }
        },
        "description": "添加仓库成员或更新仓库成员权限"
      },
      "ProjectMemberPermission": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "remark": {
            "type": "string",
            "description": "企业备注名"
          },
          "followers_url": {
            "type": "string"
          },
          "following_url": {
            "type": "string"
          },
          "gists_url": {
            "type": "string"
          },
          "starred_url": {
            "type": "string"
          },
          "subscriptions_url": {
            "type": "string"
          },
          "organizations_url": {
            "type": "string"
          },
          "repos_url": {
            "type": "string"
          },
          "events_url": {
            "type": "string"
          },
          "received_events_url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "member_role": {
            "type": "string"
          },
          "permission": {
            "type": "string"
          }
        },
        "description": "查看仓库成员的权限"
      },
      "ProjectTrafficData": {
        "type": "object",
        "properties": {
          "counts": {
            "type": "array",
            "description": "每天的访问量数据集",
            "items": {
              "$ref": "#/components/schemas/ProjectTrafficDataDesc"
            }
          },
          "summary": {
            "$ref": "#/components/schemas/ProjectTrafficDataSummary"
          }
        },
        "description": "获取最近 30 天的七日以内访问量"
      },
      "ProjectTrafficDataDesc": {
        "type": "object",
        "properties": {
          "bucket": {
            "type": "integer",
            "description": "日期，10 位日期时间戳",
            "format": "int32"
          },
          "ip": {
            "type": "integer",
            "description": "浏览次数",
            "format": "int32"
          },
          "pull": {
            "type": "integer",
            "description": "拉取次数",
            "format": "int32"
          },
          "push": {
            "type": "integer",
            "description": "推送次数",
            "format": "int32"
          },
          "download_zip": {
            "type": "integer",
            "description": "每天的 ZIP 包下载次数",
            "format": "int32"
          }
        }
      },
      "ProjectTrafficDataSummary": {
        "type": "object",
        "properties": {
          "ip": {
            "type": "integer",
            "description": "浏览次数",
            "format": "int32"
          },
          "pull": {
            "type": "integer",
            "description": "拉取次数",
            "format": "int32"
          },
          "push": {
            "type": "integer",
            "description": "推送次数",
            "format": "int32"
          },
          "download_zip": {
            "type": "integer",
            "description": "每天的 ZIP 包下载次数",
            "format": "int32"
          }
        }
      },
      "ProjectLanguage": {
        "type": "object",
        "properties": {
          "languages": {
            "type": "object",
            "properties": {},
            "description": "编程语言及对应的字节数"
          }
        },
        "description": "仓库代码语言字节数"
      },
      "PullRequestCommits": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "sha": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "comments_url": {
            "type": "string"
          },
          "commit": {
            "type": "string"
          },
          "author": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "committer": {
            "type": "string"
          },
          "parents": {
            "$ref": "#/components/schemas/CommitParentsBasic"
          }
        },
        "description": "获取某 Pull Request 的所有 Commit 信息。最多显示 250 条 Commit"
      },
      "CommitParentsBasic": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "sha": {
            "type": "string",
            "description": "第一个父级 commit 的 sha 值（即将废弃）"
          },
          "shas": {
            "type": "array",
            "description": "全部父级 commit 的 sha 值",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "PullRequestFiles": {
        "type": "object",
        "properties": {
          "sha": {
            "type": "string"
          },
          "filename": {
            "type": "string"
          },
          "status": {
            "type": "string"
          },
          "additions": {
            "type": "string"
          },
          "deletions": {
            "type": "string"
          },
          "blob_url": {
            "type": "string"
          },
          "raw_url": {
            "type": "string"
          },
          "patch": {
            "type": "string"
          }
        },
        "description": "Pull Request Commit 文件列表。最多显示 300 条 diff"
      },
      "PullRequestComments": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "path": {
            "type": "string"
          },
          "position": {
            "type": "string"
          },
          "original_position": {
            "type": "string"
          },
          "new_line": {
            "type": "string"
          },
          "commit_id": {
            "type": "string"
          },
          "original_commit_id": {
            "type": "string"
          },
          "user": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          },
          "body": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "pull_request_url": {
            "type": "string"
          },
          "_links": {
            "type": "string"
          },
          "comment_type": {
            "type": "string"
          },
          "in_reply_to_id": {
            "type": "integer",
            "format": "int32"
          }
        },
        "description": "编辑评论"
      },
      "Release": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "tag_name": {
            "type": "string"
          },
          "target_commitish": {
            "type": "string"
          },
          "prerelease": {
            "type": "boolean"
          },
          "name": {
            "type": "string"
          },
          "body": {
            "type": "string"
          },
          "author": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "assets": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "description": "更新仓库 Release"
      },
      "AttachFile": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "name": {
            "type": "string"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "uploader": {
            "$ref": "#/components/schemas/UserMini"
          },
          "browser_download_url": {
            "type": "string"
          }
        },
        "description": "上传附件到仓库指定 Release"
      },
      "UserMini": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "remark": {
            "type": "string",
            "description": "企业备注名"
          }
        }
      },
      "Hook": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "url": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "result": {
            "type": "string"
          },
          "project_id": {
            "type": "integer",
            "format": "int32"
          },
          "result_code": {
            "type": "integer",
            "format": "int32"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "push_events": {
            "type": "boolean"
          },
          "tag_push_events": {
            "type": "boolean"
          },
          "issues_events": {
            "type": "boolean"
          },
          "note_events": {
            "type": "boolean"
          },
          "merge_requests_events": {
            "type": "boolean"
          }
        },
        "description": "更新一个仓库 WebHook"
      },
      "ProjectStargazers": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "remark": {
            "type": "string",
            "description": "企业备注名"
          },
          "followers_url": {
            "type": "string"
          },
          "following_url": {
            "type": "string"
          },
          "gists_url": {
            "type": "string"
          },
          "starred_url": {
            "type": "string"
          },
          "subscriptions_url": {
            "type": "string"
          },
          "organizations_url": {
            "type": "string"
          },
          "repos_url": {
            "type": "string"
          },
          "events_url": {
            "type": "string"
          },
          "received_events_url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "member_role": {
            "type": "string"
          },
          "star_at": {
            "type": "string",
            "format": "date-time"
          }
        },
        "description": "列出 star 了仓库的用户"
      },
      "ProjectWatchers": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "remark": {
            "type": "string",
            "description": "企业备注名"
          },
          "followers_url": {
            "type": "string"
          },
          "following_url": {
            "type": "string"
          },
          "gists_url": {
            "type": "string"
          },
          "starred_url": {
            "type": "string"
          },
          "subscriptions_url": {
            "type": "string"
          },
          "organizations_url": {
            "type": "string"
          },
          "repos_url": {
            "type": "string"
          },
          "events_url": {
            "type": "string"
          },
          "received_events_url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "member_role": {
            "type": "string"
          },
          "watch_at": {
            "type": "string",
            "format": "date-time"
          }
        },
        "description": "列出 watch 了仓库的用户"
      },
      "Event": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "type": {
            "type": "string"
          },
          "actor": {
            "$ref": "#/components/schemas/UserMini"
          },
          "repo": {
            "$ref": "#/components/schemas/ProjectMini"
          },
          "org": {
            "$ref": "#/components/schemas/GroupBasic"
          },
          "public": {
            "type": "boolean"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "payload": {
            "type": "object",
            "properties": {},
            "description": "不同类型动态的内容"
          }
        },
        "description": "列出仓库的所有公开动态"
      },
      "ProjectMini": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "full_name": {
            "type": "string"
          },
          "human_name": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "namespace": {
            "$ref": "#/components/schemas/NamespaceMini"
          }
        }
      },
      "GroupBasic": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          }
        }
      },
      "UserNotificationList": {
        "type": "object",
        "properties": {
          "total_count": {
            "type": "integer",
            "format": "int32"
          },
          "list": {
            "type": "array",
            "description": "通知列表",
            "items": {
              "$ref": "#/components/schemas/UserNotification"
            }
          }
        },
        "description": "列出授权用户的所有通知"
      },
      "UserNotification": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "content": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "unread": {
            "type": "boolean"
          },
          "mute": {
            "type": "boolean"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "actor": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "repository": {
            "$ref": "#/components/schemas/ProjectBasic"
          },
          "subject": {
            "$ref": "#/components/schemas/UserNotificationSubject"
          },
          "namespaces": {
            "type": "array",
            "description": "通知次级关联对象",
            "items": {
              "$ref": "#/components/schemas/UserNotificationNamespace"
            }
          }
        },
        "description": "获取一条通知"
      },
      "UserNotificationSubject": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "latest_comment_url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "UserNotificationNamespace": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "Group": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          },
          "repos_url": {
            "type": "string"
          },
          "events_url": {
            "type": "string"
          },
          "members_url": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "follow_count": {
            "type": "integer",
            "format": "int32"
          }
        },
        "description": "创建组织"
      },
      "UserDetail": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "remark": {
            "type": "string",
            "description": "企业备注名"
          },
          "followers_url": {
            "type": "string"
          },
          "following_url": {
            "type": "string"
          },
          "gists_url": {
            "type": "string"
          },
          "starred_url": {
            "type": "string"
          },
          "subscriptions_url": {
            "type": "string"
          },
          "organizations_url": {
            "type": "string"
          },
          "repos_url": {
            "type": "string"
          },
          "events_url": {
            "type": "string"
          },
          "received_events_url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "member_role": {
            "type": "string"
          },
          "blog": {
            "type": "string"
          },
          "weibo": {
            "type": "string"
          },
          "bio": {
            "type": "string"
          },
          "public_repos": {
            "type": "integer",
            "format": "int32"
          },
          "public_gists": {
            "type": "integer",
            "format": "int32"
          },
          "followers": {
            "type": "integer",
            "description": "关注用户的人数",
            "format": "int32"
          },
          "following": {
            "type": "integer",
            "description": "用户关注的人数",
            "format": "int32"
          },
          "stared": {
            "type": "integer",
            "description": "用户收藏仓库数",
            "format": "int32"
          },
          "watched": {
            "type": "integer",
            "description": "用户关注仓库数",
            "format": "int32"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          },
          "email": {
            "type": "string"
          }
        },
        "description": "获取授权用户的资料"
      },
      "User": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "remark": {
            "type": "string",
            "description": "企业备注名"
          },
          "followers_url": {
            "type": "string"
          },
          "following_url": {
            "type": "string"
          },
          "gists_url": {
            "type": "string"
          },
          "starred_url": {
            "type": "string"
          },
          "subscriptions_url": {
            "type": "string"
          },
          "organizations_url": {
            "type": "string"
          },
          "repos_url": {
            "type": "string"
          },
          "events_url": {
            "type": "string"
          },
          "received_events_url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "member_role": {
            "type": "string"
          },
          "blog": {
            "type": "string"
          },
          "weibo": {
            "type": "string"
          },
          "bio": {
            "type": "string"
          },
          "public_repos": {
            "type": "integer",
            "format": "int32"
          },
          "public_gists": {
            "type": "integer",
            "format": "int32"
          },
          "followers": {
            "type": "integer",
            "description": "关注用户的人数",
            "format": "int32"
          },
          "following": {
            "type": "integer",
            "description": "用户关注的人数",
            "format": "int32"
          },
          "stared": {
            "type": "integer",
            "description": "用户收藏仓库数",
            "format": "int32"
          },
          "watched": {
            "type": "integer",
            "description": "用户关注仓库数",
            "format": "int32"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          }
        },
        "description": "搜索用户"
      },
      "Namespace": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "namespace id",
            "format": "int32"
          },
          "type": {
            "type": "string",
            "description": "namespace 类型，企业：Enterprise，组织：Group，用户：null"
          },
          "name": {
            "type": "string",
            "description": "namespace 名称"
          },
          "path": {
            "type": "string",
            "description": "namespace 路径"
          },
          "html_url": {
            "type": "string",
            "description": "namespace 地址"
          },
          "parent": {
            "$ref": "#/components/schemas/NamespaceMini"
          }
        },
        "description": "获取授权用户的一个 Namespace"
      },
      "EnterpriseBasic": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "企业 ID",
            "format": "int32"
          },
          "path": {
            "type": "string",
            "description": "企业命名空间"
          },
          "name": {
            "type": "string",
            "description": "企业名称"
          },
          "url": {
            "type": "string",
            "description": "企业地址"
          },
          "avatar_url": {
            "type": "string",
            "description": "企业头像地址"
          }
        },
        "description": "获取一个企业"
      },
      "GroupMember": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "active": {
            "type": "boolean"
          },
          "remark": {
            "type": "string"
          },
          "role": {
            "type": "string"
          },
          "organization_url": {
            "type": "string"
          },
          "organization": {
            "$ref": "#/components/schemas/Group"
          },
          "user": {
            "$ref": "#/components/schemas/UserMini"
          }
        },
        "description": "增加或更新授权用户所管理组织的成员"
      },
      "Code": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "forks_url": {
            "type": "string"
          },
          "commits_url": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "public": {
            "type": "boolean"
          },
          "owner": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "user": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "files": {
            "type": "string"
          },
          "truncated": {
            "type": "boolean"
          },
          "html_url": {
            "type": "string"
          },
          "comments": {
            "type": "integer",
            "format": "int32"
          },
          "comments_url": {
            "type": "string"
          },
          "git_pull_url": {
            "type": "string"
          },
          "git_push_url": {
            "type": "string"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          }
        },
        "description": "获取用户 Star 的代码片段"
      },
      "CodeForksHistory": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "forks_url": {
            "type": "string"
          },
          "commits_url": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "public": {
            "type": "boolean"
          },
          "owner": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "user": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "files": {
            "type": "string"
          },
          "truncated": {
            "type": "boolean"
          },
          "html_url": {
            "type": "string"
          },
          "comments": {
            "type": "integer",
            "format": "int32"
          },
          "comments_url": {
            "type": "string"
          },
          "git_pull_url": {
            "type": "string"
          },
          "git_push_url": {
            "type": "string"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          },
          "forks": {
            "type": "string"
          },
          "history": {
            "type": "string"
          }
        },
        "description": "获取代码片段的 commit"
      },
      "CodeComment": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "body": {
            "type": "string"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          }
        },
        "description": "修改代码片段的评论"
      },
      "CodeForks": {
        "type": "object",
        "properties": {
          "user": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "url": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          }
        },
        "description": "获取 Fork 了指定代码片段的列表"
      },
      "UserInfo": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          },
          "remark": {
            "type": "string",
            "description": "企业备注名"
          },
          "followers_url": {
            "type": "string"
          },
          "following_url": {
            "type": "string"
          },
          "gists_url": {
            "type": "string"
          },
          "starred_url": {
            "type": "string"
          },
          "subscriptions_url": {
            "type": "string"
          },
          "organizations_url": {
            "type": "string"
          },
          "repos_url": {
            "type": "string"
          },
          "events_url": {
            "type": "string"
          },
          "received_events_url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "member_role": {
            "type": "string"
          },
          "blog": {
            "type": "string"
          },
          "weibo": {
            "type": "string"
          },
          "bio": {
            "type": "string"
          },
          "public_repos": {
            "type": "integer",
            "format": "int32"
          },
          "public_gists": {
            "type": "integer",
            "format": "int32"
          },
          "followers": {
            "type": "integer",
            "description": "关注用户的人数",
            "format": "int32"
          },
          "following": {
            "type": "integer",
            "description": "用户关注的人数",
            "format": "int32"
          },
          "stared": {
            "type": "integer",
            "description": "用户收藏仓库数",
            "format": "int32"
          },
          "watched": {
            "type": "integer",
            "description": "用户关注仓库数",
            "format": "int32"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          },
          "company": {
            "type": "string"
          },
          "profession": {
            "type": "string"
          },
          "wechat": {
            "type": "string"
          },
          "qq": {
            "type": "string"
          },
          "linkedin": {
            "type": "string"
          },
          "email": {
            "type": "string"
          }
        },
        "description": "获取一个用户"
      },
      "GroupDetail": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "login": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "avatar_url": {
            "type": "string"
          },
          "repos_url": {
            "type": "string"
          },
          "events_url": {
            "type": "string"
          },
          "members_url": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "follow_count": {
            "type": "integer",
            "format": "int32"
          },
          "type": {
            "type": "string"
          },
          "location": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "html_url": {
            "type": "string"
          },
          "public": {
            "type": "boolean"
          },
          "enterprise": {
            "type": "string"
          },
          "members": {
            "type": "integer",
            "format": "int32"
          },
          "public_repos": {
            "type": "integer",
            "format": "int32"
          },
          "private_repos": {
            "type": "integer",
            "format": "int32"
          },
          "owner": {
            "$ref": "#/components/schemas/UserMini"
          }
        },
        "description": "更新授权用户所管理的组织资料"
      },
      "GroupFollowers": {
        "type": "object",
        "properties": {
          "self": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "followed_at": {
            "type": "string",
            "format": "date-time"
          }
        },
        "description": "列出指定组织的所有关注者"
      },
      "EnterpriseMember": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "active": {
            "type": "boolean"
          },
          "remark": {
            "type": "string"
          },
          "role": {
            "type": "string"
          },
          "outsourced": {
            "type": "boolean"
          },
          "enterprise": {
            "$ref": "#/components/schemas/EnterpriseBasic"
          },
          "user": {
            "$ref": "#/components/schemas/UserMini"
          }
        },
        "description": "修改企业成员权限或备注"
      },
      "WeekReport": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "content": {
            "type": "string"
          },
          "content_html": {
            "type": "string"
          },
          "year": {
            "type": "integer",
            "format": "int32"
          },
          "month": {
            "type": "integer",
            "format": "int32"
          },
          "week_index": {
            "type": "integer",
            "format": "int32"
          },
          "week_begin": {
            "type": "string",
            "format": "date"
          },
          "week_end": {
            "type": "string",
            "format": "date"
          },
          "created_at": {
            "type": "string",
            "description": "创建时间",
            "format": "date-time"
          },
          "updated_at": {
            "type": "string",
            "description": "更新时间",
            "format": "date-time"
          },
          "user": {
            "$ref": "#/components/schemas/UserMini"
          }
        },
        "description": "新建周报"
      },
      "UserNotificationCount": {
        "type": "object",
        "properties": {
          "total_count": {
            "type": "integer",
            "description": "通知总数",
            "format": "int32"
          },
          "notification_count": {
            "type": "integer",
            "description": "通知数量",
            "format": "int32"
          },
          "message_count": {
            "type": "integer",
            "description": "私信数量",
            "format": "int32"
          }
        },
        "description": "获取授权用户的通知数"
      },
      "UserMessageList": {
        "type": "object",
        "properties": {
          "total_count": {
            "type": "integer",
            "format": "int32"
          },
          "list": {
            "type": "array",
            "description": "私信列表",
            "items": {
              "$ref": "#/components/schemas/UserMessage"
            }
          }
        },
        "description": "列出授权用户的所有私信"
      },
      "UserMessage": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "sender": {
            "$ref": "#/components/schemas/UserBasic"
          },
          "unread": {
            "type": "boolean"
          },
          "content": {
            "type": "string"
          },
          "updated_at": {
            "type": "string",
            "format": "date-time"
          },
          "url": {
            "type": "string"
          },
          "html_url": {
            "type": "string"
          }
        },
        "description": "获取一条私信"
      },
      "UserEmail": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string"
          },
          "state": {
            "type": "string"
          },
          "scope": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "description": "获取授权用户的全部邮箱"
      }
    }
  },
  "x-original-swagger-version": "2.0"
} as const;