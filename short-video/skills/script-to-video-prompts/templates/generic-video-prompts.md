# 通用视频提示词

> 文件用途：适用于多数视频生成模型。
> 
> 规则：模型无关，不使用 H3 专属字段或平台参数。

## 项目信息

- 项目：`{{PROJECT_TITLE}}`
- 画幅 / 帧率：`{{FORMAT}}`
- 总时长：`{{TOTAL_DURATION}}`
- 风格总纲：`{{STYLE_BIBLE}}`
- 角色与资产引用：`{{ASSET_IDS}}`

## 分场镜头

### 通用镜头执行约束

- 每个镜头必须记录：CONTINUITY_BLOCK_ID、DURATION、PROMPT_DURATION_LIMIT、START_STATE、MOTION_TIMELINE、END_STATE。
- 如果动作时间线超过 PROMPT_DURATION_LIMIT，或包含多个无法在当前时长完成的主要动作，必须新增后续镜头；后一镜的 START_STATE 直接承接前一镜的 END_STATE。
- 同一连续镜头块中的短镜头要相邻排列，并复用场景、人物、道具、空间锚点、光线和屏幕方向。
- 通用正向提示词顺序固定为：主体与动作 → 环境与美术 → 摄影机与镜头 → 灯光 → 色彩与材质 → 情绪 → 连续性约束。
- 负面提示词只写本镜头真实风险，不用负面词代替动作或场景设计。

### `{{SHOT_ID}}`｜{{SCENE}}｜{{DURATION}} 秒

- 叙事目的：`{{NARRATIVE_PURPOSE}}`
- 景别与机位：`{{SHOT_SIZE_AND_CAMERA}}`
- 主体与动作：`{{SUBJECT_AND_ACTION}}`
- 环境与美术：`{{ENVIRONMENT_AND_ART}}`
- 摄影机运动：`{{CAMERA_MOVEMENT}}`
- 灯光：`{{LIGHTING}}`
- 色彩与质感：`{{COLOR_AND_TEXTURE}}`
- 声音：`{{DIALOGUE_AND_SFX}}`
- 衔接：`{{TRANSITION}}`

**正向提示词**

```text
{{SUBJECT_AND_ACTION}}, {{ENVIRONMENT}}, {{CINEMATOGRAPHY}}, {{LIGHTING}}, {{COLOR_AND_TEXTURE}}, {{EMOTION}}, {{CONTINUITY_CONSTRAINTS}}
```

**负面提示词**

```text
{{NEGATIVE_PROMPT}}
```

**参数建议**

`{{PARAMETERS}}`

## 质量检查

`{{QUALITY_CHECKS}}`
