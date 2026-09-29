---
name: shot-planning
description: "在角色确认和资产锁定后，把剧本节拍规划为可拍摄、可生成、可连续衔接的 AI 分镜事实。"
---

# Shot Planning

这是主流程中的统一分镜规划 Skill，合并传统镜头设计、场面调度、连续性、AI 可生成性、参考图和关键帧规划。

## 前置条件

- 角色设计状态为“角色已确认”。
- 已有 CHAR_*、ASSET_*、SCENE_* 和 BEAT_* 稳定 ID。
- 已读取 H3 与 Seedance 适配需求，但不在本 Skill 中写平台专属格式。

## 工作流

1. 为每个场次确定戏剧目标、信息释放顺序和观众必须看到的变化。
2. 建立 UNIT_* 视频单元；每个单元写地点、光线、主体关系、start_state、动作时间线、end_state 和下一单元衔接。
3. 为每个单元规划 SHOT_*：叙事目的、生成目的、景别、机位、构图、走位、视线、轴线、摄影机运动、灯光、声音和剪辑点。
4. 控制每镜一个主要动作和一个主要摄影机动作；超出时长或包含多个主要动作时拆镜。
5. 规划参考图、首帧、尾帧和局部资产职责。H3 不要求角色三视图或默认身份参考图。
6. 标记多人互动、手部、口型、复杂物理运动和长动作的风险，给出缩短、拆镜、固定帧或替代模式。

## 稳定字段

每镜必须具备：scene_id、beat_id、unit_id、shot_id、continuity_block_id、duration、start_state、motion_timeline、end_state、primary_action、camera_motion、subject_blocking、scene_lock、subject_lock、reference_requirements、keyframe_requirements、risk_level、fallback_strategy。

相邻镜头必须核对人物位置、朝向、视线、道具状态、光线方向和屏幕方向。前镜 end_state 必须能直接成为后镜 start_state；禁止因为同一场景就机械合并镜头。

## 输出

向主 Agent 返回统一镜头事实，并生成最终 04-storyboard.md。不生成通用视频提示词、H3 提示词或 Seedance 提示词；平台字段交给对应适配器。


