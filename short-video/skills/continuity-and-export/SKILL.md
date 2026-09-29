---
name: continuity-and-export
description: "在角色确认后的自动流程末端执行连续性检查，并只导出项目要求的主交付文件。"
---

# Continuity And Export

这是自动流程的末端 Skill。它不向用户发起新的审核，只修正可确定的问题；无法安全推断时在内部记录风险。

## 检查

- 角色、资产、场景、节拍、单元和镜头 ID 在所有主文件中一致。
- 角色核心特征、服装、关键道具和场景锚点没有被下游改写。
- 相邻镜头的空间位置、动作方向、视线、光线、道具状态、start_state 和 end_state 可衔接。
- H3 与 Seedance 的镜头事实、时长、动作和结束状态与分镜一致。
- H3 未被错误要求角色三视图；Seedance 没有把同场景机械合并。
- Midjourney 参数位于每条 Prompt 末尾。

## 导出

在运行目录 final/ 中只保留：

1. 01-character-design.md
2. 02-asset-library.md
3. 03-midjourney-prompts.md
4. 04-storyboard.md
5. 05-video-prompts-h3.md
6. 06-video-prompts-seedance.md

运行清单、角色闸门稿、原始事实、QA 结果和修订关系写入 _internal/，不列入最终交付。不得创建 generic-image-prompts.md、generic-video-prompts.md 或 doubao-prompts.md。


