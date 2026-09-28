---
name: script-breakdown
description: "提取影视剧本的场次事实、可见动作、对白和必须传达的信息，为 AI 分镜提供不带镜头决策的输入。"
---
# Script Breakdown
只提取剧本事实和可见叙事信息，不决定景别、机位、焦段、提示词或生成模型。

输出字段：scene_id、scene_heading、location、time、weather_or_environment、characters、props、dialogue、visible_actions、emotional_turns、required_story_information、sound_cues、explicit_constraints、unknowns。

规则：区分明确事实与推断；心理活动标记为待视觉化意图；动作只写观众可观察行为；提取人物、道具和空间关系但不建立资产包；影响空间、因果、身份或安全边界的缺口标为高优先级。
