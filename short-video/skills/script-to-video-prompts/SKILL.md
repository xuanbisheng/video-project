---
name: script-to-video-prompts
description: "将影视剧本拆解为稳定的节拍、视频单元和镜头事实，供 H3 与 Seedance 适配器生成提示词。"
---

# Script To Video Prompts

这是上游事实和流程 Skill，不直接创建平台专属提示词。它把剧本转换为 scene、beat、unit 和 shot 的统一结构，再交给 shot-planning、h3-adapter 和 seedance-adapter。

## 唯一审核闸门

角色设计是唯一人工暂停点：解析剧本后调用 character-design-review，状态为“待角色审核”；只有用户明确确认后才继续。确认后的角色核心特征不得被下游改写。

## 自动流程

1. 提取场次、时间、地点、人物、动作、对白、道具、情绪和转场意图。
2. 检查目标、动机、阻碍、转折、选择、代价和情绪落点；不清晰处记录内部风险，不擅自补写。
3. 角色确认后建立视觉总纲、资产关系、SCENE_*、BEAT_* 和 UNIT_*。
4. 调用 shot-planning 完成景别、机位、构图、走位、灯光、声音、起止状态和 AI 可生成性规划。
5. 调用 h3-adapter 和 seedance-adapter，分别生成 H3 与 Seedance 提示词。
6. 调用 continuity-and-export，检查并导出最终主文件。

## 统一约束

- 每个镜头共享 scene_id、beat_id、unit_id、shot_id、duration、start_state、motion_timeline 和 end_state。
- 每镜一个主要动作和一个主要摄影机动作；超出时长或动作预算时拆镜并传递结束状态。
- 同一场景不自动合并；只有连续动作链、主体关系和光线状态都成立时才合并为同一 UNIT_*。
- H3 不要求角色三视图；Seedance 重点保留连续单元和起止状态。
- 本项目只输出 H3 和 Seedance 视频提示词，不生成 generic-video-prompts.md 或豆包版本。

## 参考资料路由

- 镜头字段：references/prompt-schema.md
- H3：references/h3-prompt-guide.md
- Seedance：references/seedance-guide.md
- 连续性：references/continuity-bible.md
- 声音和对白：references/performance-and-sound.md
- 质量检查：references/quality-checklist.md


