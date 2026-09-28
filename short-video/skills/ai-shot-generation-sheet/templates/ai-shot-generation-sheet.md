# AI 镜头生成执行表

## 项目信息
- 项目：{{PROJECT_TITLE}}
- 默认格式：{{FORMAT}}
- 生成约束：{{GENERATION_CONSTRAINTS}}

## 镜头执行表
| Shot ID | Continuity Block | Scene / Beat | Duration / Limit | Mode | Input | Start / End Frame | Primary Action | Camera Motion | Scene Motion | Risk |
|---|---|---|---:|---|---|---|---|---|---|---|
| {{SHOT_ID}} | {{CONTINUITY_BLOCK_ID}} | {{SCENE_ID}} / {{BEAT_ID}} | {{DURATION}}s / {{PROMPT_DURATION_LIMIT}}s | {{GENERATION_MODE}} | {{INPUT_REQUIREMENTS}} | {{KEYFRAME_REQUIREMENTS}} | {{PRIMARY_ACTION}} | {{CAMERA_MOTION}} | {{ENVIRONMENT_MOTION}} | {{RISK_LEVEL}} |

## {{SHOT_ID}} 生成说明
- 参考图：{{REFERENCE_IMAGES}}
- 锁定元素：{{LOCKED_ELEMENTS}}
- 可变元素：{{VARIABLE_ELEMENTS}}
- 起始状态：{{START_STATE}}
- 动作时间线：{{MOTION_TIMELINE}}
- 结束状态：{{END_STATE}}
- 场景锁定：{{SCENE_LOCK}}
- 人物锁定：{{SUBJECT_LOCK}}
- 空间锚点：{{SPATIAL_ANCHOR}}
- 转场承接：入 {{TRANSITION_IN}}；出 {{TRANSITION_OUT}}
- 优先级：身份 {{IDENTITY_PRIORITY}}；动作 {{MOTION_PRIORITY}}；摄影机 {{CAMERA_PRIORITY}}；背景 {{BACKGROUND_PRIORITY}}
- 迭代顺序：{{ITERATION_ORDER}}
- 风险：{{RISK_NOTES}}
- Fallback：{{FALLBACK_STRATEGY}}

## 生成前检查
{{PRE_FLIGHT_CHECKS}}
