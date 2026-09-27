# Midjourney V8.2 资产提示词

> 文件用途：Midjourney 当前默认 V8.2。
> 
> 规则：参数必须放在每条 Prompt 的末尾；参数后不再写正文。

## 项目信息

- 项目：`{{PROJECT_TITLE}}`
- Midjourney 版本：`V8.2`
- 参考图策略：`Image Prompt / Style Reference / Edit Model`
- 版本锁定：按需添加 `--v 8.2`

## 资产索引

| Asset ID | 类型 | 名称 | 主要 Prompt | 参考图/编辑方式 |
|---|---|---|---|---|
| `{{ASSET_ID}}` | `{{ASSET_TYPE}}` | `{{ASSET_NAME}}` | `{{PROMPT_LABEL}}` | `{{REFERENCE_MODE}}` |

## 资产提示词

### `{{ASSET_ID}} — {{ASSET_NAME}}`

**锁定设定**

`{{LOCKED_FEATURES}}`

**主 Prompt**

```text
{{OPTIONAL_IMAGE_PROMPT_URL}} {{SUBJECT}}, {{MEDIUM_OR_DISPLAY_MODE}}, {{ENVIRONMENT}}, {{LIGHTING}}, {{COLOR_AND_MATERIAL}}, {{MOOD}}, {{COMPOSITION_AND_VIEW}} {{PARAMETERS_AT_END}}
```

**中性资产设定图 Prompt**

```text
{{NEUTRAL_PROMPT_WITH_PARAMETERS_AT_END}}
```

**气氛变体 Prompt**

```text
{{ATMOSPHERIC_PROMPT_WITH_PARAMETERS_AT_END}}
```

**参考图 / Edit Model 说明**

- 参考图：`{{REFERENCE_IMAGES}}`
- Edit instruction：`{{EDIT_INSTRUCTION}}`
- 风格参考：`{{STYLE_REFERENCE}}`
- 不把 `--oref` 作为 V8.2 默认方案。

**参数解释**

- 画幅：`{{AR_PARAMETER}}`
- 风格化：`{{STYLIZE_PARAMETER}}`
- Raw：`{{RAW_PARAMETER}}`
- 变化度：`{{CHAOS_PARAMETER}}`
- 排除项：`{{NO_PARAMETER}}`
- 复现测试：`{{SEED_PARAMETER}}`

**风险与连续性**

`{{RISK_AND_CONTINUITY}}`

## 跨资产连续性

`{{CROSS_ASSET_CONTINUITY}}`

## 待确认问题

`{{OPEN_QUESTIONS}}`
