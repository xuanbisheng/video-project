---
name: storyboard-qa
description: "作为内部自动检查，验证角色、资产、分镜、H3 和 Seedance 的 ID、连续性与可生成性。"
---

# Storyboard QA (Internal)

仅在角色已确认后自动执行，不向用户发起新的审核。

## 检查

- CHAR_*、ASSET_*、SCENE_*、BEAT_*、UNIT_*、SHOT_* 在六个最终文件中一致。
- 角色核心特征、服装、关键道具、空间锚点和光线状态未漂移。
- 每镜有 start_state、motion_timeline、end_state；相邻镜头可直接衔接。
- H3 与 Seedance 的时长、动作、结束状态与 04-storyboard.md 一致。
- H3 未要求角色三视图；Seedance 未因同场景而机械合并。
- Midjourney 参数位于每条 Prompt 末尾。

## 处理

可确定的问题直接修正；需要创作判断的风险写入 _internal/continuity-report.md，不阻塞主流程，不作为最终交付文件。
