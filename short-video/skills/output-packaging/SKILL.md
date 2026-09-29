---
name: output-packaging
description: "为影视 Agent 建立独立运行目录，并只导出角色、资产库、Midjourney、分镜、H3 和 Seedance 六类主文件。"
---

# Output Packaging

每次执行创建新的 outputs/<project-slug>/run-<timestamp>/ 目录，不覆盖历史运行。内部过程与最终交付分开保存。

## 不可变运行规则

- 每次 Agent 执行、Skill 重跑、角色修改、提示词修订或模型切换，都必须创建新的 run-<timestamp>/ 目录。
- 新运行必须记录基于的剧本版本、Agent/Skill 版本和（如有）旧运行路径；不得复用旧运行目录。
- 任何 Agent/Skill 更新都只改变规则文件，不得回写、覆盖、移动或删除 outputs/ 下已经产出的文件。
- 历史运行是只读基线；即使新运行来自历史运行，也只能复制事实并写入新目录。
- 同一秒内重复执行时必须追加唯一后缀，确保目录名不冲突。

## 运行目录

run-.../
├── final/
│   ├── 01-character-design.md
│   ├── 02-asset-library.md
│   ├── 03-midjourney-prompts.md
│   ├── 04-storyboard.md
│   ├── 05-video-prompts-h3.md
│   └── 06-video-prompts-seedance.md
└── _internal/
    ├── run-manifest.md
    ├── character-design-gate.md
    ├── continuity-report.md
    └── source-facts.md

## 闸门规则

- 角色审核前只允许写 _internal/source-facts.md、_internal/character-design-gate.md 和 _internal/run-manifest.md，状态为“待角色审核”；不得提前创建 final/ 文件。
- 角色确认后自动生成 final/ 六个主文件，不再等待中间审核。
- 审核稿、审核决定、QA 报告和中间拆解只保存在 _internal/，不列入用户最终交付。

## 最低交付

六个 final 文件全部存在且内部检查通过，运行状态才可标记为“已完成”。不得用 generic-image-prompts.md、generic-video-prompts.md 或豆包文件替代缺失文件。

## 修订

每次修订、换模型或重跑都创建新运行目录，并记录基于的旧运行；不覆盖历史文件。规则或 Agent/Skill 本身更新时，也不得为了“同步”而修改旧运行文件。
