---
name: reference-and-keyframe-plan
description: "为 AI 分镜规划主体、场景、道具参考图以及首帧、尾帧和关键状态。"
---
# Reference And Keyframe Plan
明确哪些信息由参考图锁定，哪些由文字控制，哪些变化必须由首尾帧固定。

输出字段：reference_requirements、character_reference、scene_reference、prop_reference、start_frame_requirement、end_frame_requirement、keyframe_changes、reference_priority、locked_elements、variable_elements。

规则：参考图锁定身份、构图、场景和材质等稳定信息；文字描述动作、时间变化和镜头运动；首尾帧描述变化状态并引用锁定项；多主体建立稳定引用和关系；无须参考图时明确写“无”。为每张参考图标注职责；H3 不要求角色三视图或默认身份参考图。若身份连续性确实需要参考图，使用单主体、单视角图片；多角度设定板只用于资产外观审阅，不直接上传为 H3 身份参考。
