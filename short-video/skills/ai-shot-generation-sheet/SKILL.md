---
name: ai-shot-generation-sheet
description: "将 AI 分镜整理成按生成输入、运动优先级、迭代顺序和风险执行的镜头生成表。"
---
# AI Shot Generation Sheet

输出面向 AI 视频制作和迭代的 ai-shot-generation-sheet.md，不改动故事顺序中的镜头主键和动作意图。

该文件属于一次完整运行的交付物，必须写入 `outputs/<project-slug>/run-<YYYYMMDD-HHmmss>[-<序号>]/`，与对应分镜、视频提示词和 `run-manifest.md` 放在同一目录。修订时创建新运行目录。

规则：按生成前置条件和执行顺序组织；明确输入图片、主体参考、场景参考、首帧和尾帧是否必需；分开身份、动作、摄影机和背景优先级；提供先动作、再镜头、再环境、最后风格或声音的迭代顺序；高风险镜头必须有 fallback。
