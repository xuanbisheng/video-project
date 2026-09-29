# 运行清单（内部）

- 项目：{{PROJECT_SLUG}}
- 运行目录：{{RUN_DIRECTORY}}
- 运行时间：{{RUN_TIME}}
- 来源剧本：{{SOURCE_SCRIPT}}
- 运行状态：{{RUN_STATUS}}
- 基于运行：{{PARENT_RUN_OR_NONE}}
- 角色审核状态：{{CHARACTER_REVIEW_STATUS}}
- 角色审核稿：_internal/character-design-gate.md
- 用户审核决定 / 时间：{{CHARACTER_REVIEW_DECISION}} / {{CHARACTER_REVIEW_TIME}}

## 最终交付

| 文件 | 状态 | 说明 |
|---|---|---|
| final/01-character-design.md | {{CHARACTER_STATUS}} | 已确认角色设计 |
| final/02-asset-library.md | {{ASSET_LIBRARY_STATUS}} | 角色、场景、道具资产库 |
| final/03-midjourney-prompts.md | {{ASSET_MJ_STATUS}} | Midjourney 资产提示词 |
| final/04-storyboard.md | {{STORYBOARD_STATUS}} | 剧本分镜与镜头事实 |
| final/05-video-prompts-h3.md | {{VIDEO_H3_STATUS}} | MiniMax H3 视频提示词 |
| final/06-video-prompts-seedance.md | {{VIDEO_SEEDANCE_STATUS}} | Seedance 视频提示词 |

## 内部检查

- ID 一致性：{{ID_CHECK}}
- 角色锁定项未漂移：{{CHARACTER_LOCK_CHECK}}
- 镜头起止状态可衔接：{{STATE_CHAIN_CHECK}}
- H3 / Seedance 与分镜一致：{{ADAPTER_CHECK}}
- Midjourney 参数位置正确：{{MJ_CHECK}}
- 未生成通用资产、通用视频或豆包文件：{{EXCLUDED_OUTPUT_CHECK}}
- 未生成项及原因：{{MISSING_ITEMS}}
