# Run Manifest

## 运行信息

- 项目：maomao-touchi-v2
- 运行 ID：run-20261005-205155
- 运行状态：已完成
- 执行入口：Video Prompt Director Agent
- 创建时间：2026-10-05 20:51（Asia/Shanghai）
- 来源运行：run-20260929-235527（只读）
- 运行关系：资产库 Midjourney 双语格式修订运行

## 输入与确认

- 剧本：D:/AIGCProject/video-project-2/video-project/script/output/short-film/maomao-touchi-v2/07_final_screenplay.md
- 剧本 SHA-256：7DCAAB58163C9C73E1BC6F604CB9D682FA3A8BA99084B87D6AC255028BE7387F
- 用户确认：小林采用浅灰/米白上衣、深色长裤、室内拖鞋；少部分露脸；团团左耳深色毛为长期识别点，开场灰尘为临时状态
- 角色审核状态：角色已确认

## 运行步骤

1. 读取来源运行的批准版角色设计、资产库和剧本事实。
2. 按更新后的 asset-prompt-pack Skill 重写 Midjourney 资产提示词。
3. 为每个资产增加中文提示和英文 prompt，并保留 edit_instruction。
4. 删除资产提示词中的 reference_images 输出字段。
5. 复核双语一致性、参数位置和连续性约束。

## 最终文件

- final/01-character-design.md
- final/02-asset-library.md
- final/03-midjourney-prompts.md
- final/04-storyboard.md
- final/05-video-prompts-h3.md
- final/06-video-prompts-seedance.md

## 不可变记录

- 本轮没有修改来源运行或任何历史文件。
- 本轮仅修订 final/03-midjourney-prompts.md；其余主文件从来源运行复制到新目录，作为本轮完整运行快照。
- 后续角色修改、Skill/Agent 更新、提示词修订或模型切换必须创建新的 run-<timestamp>/。
- 本轮不生成通用生图、通用视频、豆包或角色三视图文件。
