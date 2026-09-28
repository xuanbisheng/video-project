---
name: ai-shot-feasibility
description: "评估分镜的 AI 生成可行性，拆分动作、摄影机运动和环境运动，并给出模式与 fallback。"
---
# AI Shot Feasibility
不改故事意图，只判断镜头能否稳定执行以及如何降低复杂度。

输出字段：generation_mode、primary_action、secondary_motion、camera_motion、scene_motion、temporal_complexity、subject_count、interaction_complexity、recommended_duration、prompt_duration_limit、duration_budget、continuity_block_id、motion_priority、identity_priority、background_priority、risk_level、fallback_strategy。

生成模式使用模型无关名称：T2V、I2V、START_END、REFERENCE、VIDEO_GUIDED；模型专属字段留给适配层。

一个镜头原则上只有一个主要主体动作和一个主要摄影机动作；分别记录主体、相机和环境运动。所有时间点必须落在镜头 duration 内。若动作预计超过 prompt_duration_limit、包含多个独立动作或无法在时长内完成，必须增加后续分镜，不能用更长提示词硬塞进同一镜头。拆镜时保持前镜 end_state 到后镜 start_state 的位置、视线、道具、光线和方向连续。

多人交互、手部接触、遮挡、长连续动作、快速变形、精确口型和复杂物理运动属于风险来源。高风险时缩短、固定首帧、减少主体、拆动作或改用首尾帧，并给出最小拆镜方案。

若连续镜头的 scene_id、地点、时间、主光、人物和关键道具一致，使用同一 continuity_block_id；将这些短镜头相邻排列，并复用参考图和空间锚点。
