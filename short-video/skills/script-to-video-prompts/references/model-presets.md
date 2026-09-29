# Model Presets

本项目以上游统一镜头事实为基线，只适配 H3 与 Seedance。不同模型的界面和参数可能变化，不能假设某个平台一定支持某个字段。

## 统一事实基线

上游记录主体、动作、环境、摄影、灯光、风格、时长、起止状态和连续性约束；平台字段只在 H3 或 Seedance 适配器中展开。

## 适配原则

- **Seedance**：按 UNIT_* 连续单元写起始状态、动作时间线、结束状态、衔接和声音。
- **MiniMax H3**：使用官方多模态描述结构。文本生视频优先写 `integrated_multimodal_description`，需要声音时增加 `overall_soundscape` 与 `non_diegetic_music`；图生视频、首尾帧和全参考任务改用对应的参考字段。

## 输出约束

H3 和 Seedance 是本项目的唯一视频适配目标；不生成 Sora、Veo、Runway、Kling、Hailuo 或豆包专用版本。


