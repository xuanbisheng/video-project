# 通用生图提示词

> 文件用途：适用于 Flux、SDXL、Imagen 或其他通用文生图/图生图模型。
> 
> 规则：本文件不使用 Midjourney 专属参数。

## 项目信息

- 项目：`{{PROJECT_TITLE}}`
- 来源：`{{SOURCE_SCOPE}}`
- 视觉总纲：`{{GLOBAL_STYLE}}`
- 画幅：`{{ASPECT_RATIO}}`
- 参考图策略：`{{REFERENCE_STRATEGY}}`

## 资产索引

| Asset ID | 类型 | 名称 | 展示目标 | 连续性等级 |
|---|---|---|---|---|
| `{{ASSET_ID}}` | `{{ASSET_TYPE}}` | `{{ASSET_NAME}}` | `{{DISPLAY_INTENT}}` | `LOCKED / VARIABLE` |

## 资产提示词

### `{{ASSET_ID}} — {{ASSET_NAME}}`

**叙事用途**

`{{NARRATIVE_ROLE}}`

**锁定设定**

- 外观：`{{LOCKED_FEATURES}}`
- 材质与尺度：`{{MATERIAL_SCALE}}`
- 主色与禁用色：`{{PALETTE}}`
- 展示视角：`{{DISPLAY_VIEWS}}`
- 连续性关系：`{{CONTINUITY_NOTES}}`

**正向提示词**

```text
{{SUBJECT}}, {{DISPLAY_INTENT}}, {{ENVIRONMENT}}, {{MATERIALS_AND_DETAILS}}, {{LIGHTING}}, {{COLOR_PALETTE}}, {{COMPOSITION_AND_CAMERA}}, {{CONTINUITY_CONSTRAINTS}}
```

**负面提示词**

```text
{{NEGATIVE_PROMPT}}
```

**生成变体**

- 中性设定图：`{{NEUTRAL_VARIANT}}`
- 叙事气氛图：`{{ATMOSPHERIC_VARIANT}}`
- 细节/尺度图：`{{DETAIL_OR_SCALE_VARIANT}}`

**参数建议**

- 尺寸/比例：`{{PARAMETERS}}`
- 参考图或 ControlNet：`{{REFERENCE_CONTROLS}}`
- 风险：`{{RISK_NOTES}}`

## 跨资产连续性

`{{CROSS_ASSET_CONTINUITY}}`

## 待确认问题

`{{OPEN_QUESTIONS}}`
