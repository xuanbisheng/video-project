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
