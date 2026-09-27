# Asset Schema

两份输出文件必须共享同一套资产字段，避免通用版和 Midjourney 版出现设定漂移。

## 项目级字段

- `project_title`：项目名。
- `source_scope`：来自完整剧本、某一场或已有资产设定。
- `render_intent`：设定图、概念图、宣传图、图生图参考或视频连续性参考。
- `target_model`：通用版模型范围；Midjourney 版默认 `V8.2`。
- `global_style`：时代、类型、写实/风格化、材质与色彩总纲。

## 资产级字段

```text
asset_id：CHAR_001 / PROP_001 / ENV_001
asset_type：character / prop / scene / costume / vehicle / creature / effect
asset_name：资产名称
narrative_role：在故事中的用途
locked_features：不可改变的外观、颜色、比例、材质和结构
variable_features：允许随镜头变化的表情、姿态、光线、环境和构图
scale_relations：与人物、门、桌面或其他资产的尺寸关系
display_views：需要正面、侧面、背面、细节、鸟瞰或空间全貌等哪些视角
lighting_logic：主光方向、色温、反差和可见光源
palette：主色、辅助色、禁用色
continuity_notes：跨镜头或跨资产的锁定关系
positive_prompt：正向提示词
negative_prompt：负面提示词或 --no 内容
parameters：比例、版本、风格强度、参考图等参数
risk_notes：模型可能出错的地方
```

## 角色展示建议

- `CHAR_001_turnaround`：中性背景，正面、侧面、背面或三视图。
- `CHAR_001_expression`：保持脸部和服装锁定，变化表情和姿态。
- `CHAR_001_costume`：强调服装层次、材质、鞋和配饰。

## 道具展示建议

- `PROP_001_hero`：孤立物、三分之四角度、轮廓清晰。
- `PROP_001_detail`：锁定材质、磨损、结构和关键功能部位。
- `PROP_001_scale`：与手掌、桌面或角色的尺度关系。

## 场景展示建议

- `ENV_001_establishing`：空间全貌、主要入口、纵深和动线。
- `ENV_001_day` / `ENV_001_night`：同一空间不同时间/光线版本。
- `ENV_001_key_view`：为视频镜头提供固定机位、视线和主光方向。
