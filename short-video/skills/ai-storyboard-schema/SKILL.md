---
name: ai-storyboard-schema
description: "兼容子模块：维护 shot-planning 使用的统一场景、单元和镜头字段。"
---

# AI Storyboard Schema (Internal)

统一项目、场景、节拍、视频单元和镜头字段。主键为 scene_id、beat_id、unit_id、shot_id、continuity_block_id；每镜必须成组出现 start_state、motion_timeline 和 end_state。平台提示词不在此 Skill 中生成。
