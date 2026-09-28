# MiniMax H3 视频提示词

> 文件用途：MiniMax H3。
> 
> 规则：保留 H3 多模态字段；每个镜头编号与通用版完全对应。

## 项目信息

- 项目：`{{PROJECT_TITLE}}`
- H3 模式：`T2VA / I2VA / FL2VA / L2VA / Full Reference`
- 画幅 / 帧率：`{{FORMAT}}`
- 总时长：`{{TOTAL_DURATION}}`
- 资产引用：`{{ASSET_IDS}}`

## T2VA / I2VA 主结构

```text
integrated_multimodal_description:
[Shot 1] {{SHOT_1_DESCRIPTION}}
[Shot 2] {{SHOT_2_DESCRIPTION}}
{{ADDITIONAL_SHOTS}}
overall_soundscape: {{OVERALL_SOUNDSCAPE}}
non_diegetic_music: {{NON_DIEGETIC_MUSIC}}
```

## 单镜头明细

### H3 镜头执行约束

- 每个 Shot 必须有明确时长、起始状态、按时间顺序的动作和结束状态。
- 动作时间线超过该 Shot 的可执行时长，或包含多个主要动作时，必须增加后续 Shot；后一 Shot 直接承接前一 Shot 的结束状态。
- 同一 continuity_block_id 内的短 Shot 相邻排列，并复用 subject_definitions、scene_definition、空间锚点、人物位置、视线、道具状态和光线方向。
- T2VA / I2VA 使用 integrated_multimodal_description；FL2VA 使用 keyframe_description；L2VA / Full Reference 先定义主体和场景，再写镜头。
- H3 版不把通用版提示词逐词翻译；只保持镜头编号、时长、剧情动作、起止状态和连续性事实一致。

### `{{SHOT_ID}}`｜{{SCENE}}｜{{DURATION}} 秒

`[{{SHOT_INDEX}}] {{SUBJECT}}, {{ACTION_TIMELINE}}, {{ENVIRONMENT}}, {{CAMERA}}, {{LIGHTING}}, {{EMOTION}}, {{ENDING_STATE}}`

声音：`{{SHOT_SOUND}}`

## FL2VA 首尾帧模式

```text
keyframe_description:
At 0.00 seconds, {{START_STATE}}
At {{END_TIME}} seconds, {{END_STATE}}
transition_description:
{{TRANSITION_DESCRIPTION}}
overall_soundscape: {{OVERALL_SOUNDSCAPE}}
non_diegetic_music: {{NON_DIEGETIC_MUSIC}}
```

## L2VA / Full Reference 模式

```text
subject_definitions:
<Subject 1> {{SUBJECT_1_DEFINITION}}
<Subject 2> {{SUBJECT_2_DEFINITION}}
scene_definition:
{{SCENE_DEFINITION}}
summary:
{{SUMMARY}}
retention_analysis:
{{RETENTION_ANALYSIS}}
detailed_description:
[Shot 1] {{DETAILED_SHOT_1}}
[Shot 2] {{DETAILED_SHOT_2}}
overall_soundscape: {{OVERALL_SOUNDSCAPE}}
non_diegetic_music: {{NON_DIEGETIC_MUSIC}}
```

## H3 质检

- `integrated_multimodal_description` 或对应模式字段存在。
- 每个 Shot 先写主体和动作，再写场景、镜头、灯光和结尾状态。
- 声音字段明确写环境声、动作声、对白和是否有画外音乐。
- 多主体任务使用稳定的 `<Subject N>` 引用。
- 与通用版的镜头编号、动作和时长完全对应。
