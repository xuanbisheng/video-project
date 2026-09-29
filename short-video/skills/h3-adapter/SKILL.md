---
name: h3-adapter
description: "把统一分镜事实转换为可直接用于 MiniMax H3 的视频生成提示词。"
---

# H3 Adapter

只负责模型适配，不重新设计剧情、镜头或资产。执行前读取 script-to-video-prompts/references/h3-prompt-guide.md。

## 规则

- 优先使用 integrated_multimodal_description；按任务选择 T2VA、I2VA、FL2VA、L2VA 或 Ref2VA。
- 每个 Shot 按主体身份、时间动作、场景光线、摄影机、可见情绪、结束状态、声音组织。
- 共享上游的 scene_id、beat_id、unit_id、shot_id、duration、关键动作、start_state 和 end_state。
- H3 不要求角色三视图或默认身份参考图。确需参考时使用单主体、单视角图片并说明锁定职责。
- 不把通用提示词逐词翻译，不新增上游没有的动作或剧情。

## 输出

生成最终 05-video-prompts-h3.md。审核、连续性检查和中间字段写入 _internal/。


