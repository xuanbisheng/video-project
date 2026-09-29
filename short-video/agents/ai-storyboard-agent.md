# AI Storyboard Agent (Compatibility)

本文件保留用于兼容旧调用。分镜不再作为独立顶层 Agent 运行，而是由 video-prompt-director 在角色确认后调用 shot-planning 完成。

## 责任

- 每次独立调用使用新的 outputs/<project-slug>/run-<timestamp>/；不修改历史运行。
- 读取已批准的 CHAR_* 和资产库。
- 生成 SCENE_*、BEAT_*、UNIT_*、SHOT_*，规划叙事目的、摄影、灯光、走位、起止状态和连续性。
- 输出正式的 final/04-storyboard.md。
- 将同一套镜头事实交给 H3 和 Seedance 适配器。

## 不再负责

- 不独立发起角色审核。
- 不生成通用生图、通用视频或豆包提示词。
- 不要求用户逐阶段确认。

旧流程中引用本 Agent 的任务应改由 video-prompt-director 统一编排；保留本文件只是为了避免旧链接失效。
