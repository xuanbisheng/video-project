# Run Manifest

## 运行信息

- 项目：maomao-touchi-v2
- 运行 ID：run-20260929-234600
- 运行状态：待角色审核
- 执行入口：Video Prompt Director Agent
- 运行阶段：角色设计审核闸门
- 创建时间：2026-09-29 23:46（Asia/Shanghai）
- 旧运行：无；本轮为独立新运行

## 输入

- 剧本：D:/AIGCProject/video-project-2/video-project/script/output/short-film/maomao-touchi-v2/07_final_screenplay.md
- 剧本版本：v2（文件标题标记）
- 剧本 SHA-256：7DCAAB58163C9C73E1BC6F604CB9D682FA3A8BA99084B87D6AC255028BE7387F
- 用户补充的人设：小林为大学刚毕业、萌宠博主、温柔、有爱心

## 本轮写入文件

- _internal/source-facts.md：剧本事实和连续性约束
- _internal/character-design-gate.md：角色审核稿，等待用户确认
- _internal/run-manifest.md：本运行清单

## 尚未生成

- final/01-character-design.md
- final/02-asset-library.md
- final/03-midjourney-prompts.md
- final/04-storyboard.md
- final/05-video-prompts-h3.md
- final/06-video-prompts-seedance.md

## 不可变规则

- 本运行不得修改、覆盖、移动或删除任何旧运行文件。
- 角色修改、Skill/Agent 更新、提示词修订或模型切换必须创建新的 run-<timestamp>/。
- 只有用户明确确认角色设计后，才允许在本运行继续生成六类最终主文件。
- H3 与 Seedance 是本项目唯一视频模型适配；不生成 generic、豆包或角色三视图文件。
