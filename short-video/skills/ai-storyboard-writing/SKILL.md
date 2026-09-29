---
name: ai-storyboard-writing
description: "把统一镜头事实写成最终 04-storyboard.md；不生成通用或平台专属视频提示词。"
---

# AI Storyboard Writing

作为 shot-planning 的写作子流程，读取已确认角色和资产 ID，将统一镜头事实写成按故事顺序阅读的 04-storyboard.md。

## 每镜字段

scene_id、beat_id、unit_id、shot_id、continuity_block_id、叙事目的、生成目的、时长、景别、机位、构图、走位、起始状态、动作时间线、结束状态、摄影机运动、环境运动、对白声音、剪辑衔接、参考图/关键帧、风险和 fallback。

## 规则

- 一镜一个主要动作；抽象情绪转成可见表演证据。
- 后镜 start_state 直接承接前镜 end_state。
- 写入主 Agent 已创建的运行目录，不覆盖历史运行。
- 不在本 Skill 中生成 generic-video-prompts.md、H3 或 Seedance 提示词；平台适配交给 h3-adapter 和 seedance-adapter。
