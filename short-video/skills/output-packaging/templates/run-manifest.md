# 运行清单

- 项目：{{PROJECT_SLUG}}
- 运行目录：{{RUN_DIRECTORY}}
- 运行时间：{{RUN_TIME}}
- 来源剧本：{{SOURCE_SCRIPT}}
- 运行状态：{{RUN_STATUS}}（只有三部分均存在且 QA 通过时才可填写“已完成”）
- 基于运行：{{PARENT_RUN_OR_NONE}}
- 角色审核状态：{{CHARACTER_REVIEW_STATUS}}
- 角色审核稿：`character-design-review.md`
- 用户审核决定 / 时间：{{CHARACTER_REVIEW_DECISION}} / {{CHARACTER_REVIEW_TIME}}


## 审核门产物

| 文件 | 状态 | 说明 |
|---|---|---|
| `character-design-review.md` | {{CHARACTER_REVIEW_STATUS}} | 角色设计审核稿；确认前阻断下游流程 |

## 三部分交付

| 部分 | 文件 | 状态 | 说明 |
|---|---|---|---|
| 资产库 | `generic-image-prompts.md` | {{ASSET_GENERIC_STATUS}} | 通用生图资产提示词 |
| 资产库 | `midjourney-prompts.md` | {{ASSET_MJ_STATUS}} | Midjourney 资产提示词 |
| 分镜剧本 | `ai-storyboard-script.md` | {{STORYBOARD_STATUS}} | 按故事顺序的分镜脚本 |
| 分镜剧本 | `ai-shot-generation-sheet.md` | {{SHOT_SHEET_STATUS}} | 需要执行表时使用 |
| 视频提示词 | `generic-video-prompts.md` | {{VIDEO_GENERIC_STATUS}} | 模型无关视频提示词 |
| 视频提示词 | `h3-video-prompts.md` | {{VIDEO_H3_STATUS}} | MiniMax H3 视频提示词 |

## 其他文件

{{OTHER_FILES}}

## 质量检查

- 三部分是否都在同一运行目录：{{ALL_IN_ONE_RUN_DIRECTORY}}
- 资产 ID 是否在资产库与分镜/提示词中一致：{{ASSET_ID_CHECK}}
- 分镜与两份视频提示词的镜头主键、时长、动作和起止状态是否一致：{{SHOT_CONSISTENCY_CHECK}}
- 未生成项及原因：{{MISSING_ITEMS}}
