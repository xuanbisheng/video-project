# AI 影视 Agent 工作区迁移说明

本目录包含项目运行所需的 Agent、Skill、模板和参考资料。迁移项目时，优先复制本文件所在目录下的 agents/ 和 skills/，不依赖 C:/Users/13771/.codex/skills/。

## 主入口 Agent

| 文件 | 作用 |
|---|---|
| agents/video-prompt-director.md | 总入口；编排角色设计、资产库、分镜、H3 和 Seedance |
| agents/asset-prompt-director.md | 资产专用入口；角色、场景、道具资产库和 Midjourney 提示词 |
| agents/character-design-review-agent.md | 内部角色设计闸门；整个流程唯一人工审核点 |
| agents/ai-storyboard-agent.md | 旧调用兼容入口；实际分镜由 shot-planning 执行 |

## 自动流程

剧本 -> 角色设计审核（唯一人工闸门） -> 资产库 + Midjourney 提示词 -> 统一镜头事实与分镜 -> H3 提示词 + Seedance 提示词 -> 连续性检查与最终导出

角色确认后不再逐阶段请求用户确认。

## 核心 Skill

| Skill | 工作区路径 | 作用 |
|---|---|---|
| character-design-review | skills/character-design-review/ | 性格、人设、外观、服装、首饰配饰、关键道具和表演连续性 |
| asset-prompt-pack | skills/asset-prompt-pack/ | 资产库和 Midjourney 资产提示词；不生成通用生图提示词 |
| script-to-video-prompts | skills/script-to-video-prompts/ | 剧本事实、节拍、视频单元和镜头事实 |
| shot-planning | skills/shot-planning/ | 摄影、灯光、走位、起止状态、参考图和 AI 可生成性 |
| h3-adapter | skills/h3-adapter/ | MiniMax H3 视频提示词 |
| seedance-adapter | skills/seedance-adapter/ | Seedance 连续视频单元提示词 |
| continuity-and-export | skills/continuity-and-export/ | 内部连续性检查和六个主文件导出 |
| output-packaging | skills/output-packaging/ | 运行目录和最终文件结构 |

## 最终交付文件

每次完整运行的 final/ 目录只包含：

1. 01-character-design.md
2. 02-asset-library.md
3. 03-midjourney-prompts.md
4. 04-storyboard.md
5. 05-video-prompts-h3.md
6. 06-video-prompts-seedance.md

角色审核稿、运行清单、原始剧本事实和 QA 报告放在同一运行目录的 _internal/，不属于最终交付。

## 兼容 Skill

script-breakdown、story-beat-mapping、traditional-shot-design、blocking-and-continuity、ai-shot-feasibility、reference-and-keyframe-plan、ai-storyboard-schema、ai-storyboard-writing、ai-shot-generation-sheet 和 storyboard-qa 保留在 skills/ 中，作为内部子模块或旧调用兼容层，不应作为新的顶层流程入口。

## 迁移注意

- 本目录内的相对路径是项目内路径，迁移后保持 agents/ 与 skills/ 的同级关系。
- 不需要复制用户级 Skill 目录即可运行本项目框架。
- 历史运行结果在 outputs/ 中单独保存，不影响 Agent 和 Skill 迁移。
- 每次 Agent 执行、Skill 重跑或规则更新后的重新生成都必须创建新的 outputs/<project-slug>/run-<timestamp>/；历史运行只读，不修改、覆盖、移动或删除。
- 规则文件更新与项目产出解耦；需要同步历史内容时只能在新运行中重新生成。
- 当前模型适配只包含 H3 和 Seedance；不包含 generic、豆包或其他视频平台适配器。
