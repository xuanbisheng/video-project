# H3 与 Seedance 提示词兼容规则

本参考用于 AI 分镜 Agent 的内部事实编排。它不改变剧情或镜头设计，只规定时长、镜头连续性以及 H3、Seedance 适配时必须保持的事实。

## 共同的时长规则

- 每个镜头必须有明确的 duration、prompt_duration_limit 和动作时间线。
- motion_timeline 的所有时间点必须落在 0.00 到该镜头 duration 之间。
- 单镜头不得塞入超过时长预算的连续动作、多个主要动作或多个独立情绪转折。
- 当预计动作时长超过 prompt_duration_limit，或动作无法在当前时长内完成，必须增加后续分镜；不得只把提示词写得更长。
- 拆镜后，前一镜的 end_state 必须成为后一镜的 start_state，并保留人物位置、视线、道具状态、动作方向和光线方向。
- 拆镜编号按故事顺序递增，例如 S01_SH03 拆为 S01_SH03 与 S01_SH04，不使用含义不明的半镜头。

### 拆镜判断示例

原动作：人物从走廊尽头走到门前，开门，看到房间内目标并后退。
判断：包含行走、开门、发现、后退四个连续变化，超过单镜头动作预算。
处理：S01_SH03 走到门前并停在门把手前；S01_SH04 握住门把手并开门，视线进入房间；S01_SH05 看到目标后后退，停在门口。

## 连续镜头块

- 连续几镜若 scene_id、地点、时间、天气、主光方向、主要人物和关键道具一致，应归入同一个 continuity_block_id，并在输出中相邻排列。
- 同一连续镜头块内不得插入无关场景、无关人物或跳变的时间状态；如剧本必须切换，应先结束当前 block，再建立新的 block。
- 第一镜建立空间、人物位置和光线锚点；后续短镜头引用该锚点，不重复改写或重新猜测场景。
- 同一人物在相邻镜头中的屏幕位置、朝向、视线、服装、发型、道具持握手和动作方向保持一致，除非剧本明确发生变化。
- 前一镜的 end_state、人物位置和道具状态必须直接传递给后一镜的 start_state；转场只描述实际发生的变化。
- 同一连续镜头块优先复用相同的主体与场景参考图和锁定特征；H3 只重复必要的身份锚点，不复制整段角色百科。
- 短镜头集中在同一场景块中，以保持角色、空间和光线一致性；不能为了形式上的镜头数量打散同一动作链。

## MiniMax H3 提示词

H3 版保持官方多模态字段，不把通用版直接翻译成另一种语言。每个 Shot 按以下顺序组织：

主体与身份 → 按时间顺序的动作 → 场景与光线 → 摄影机 → 情绪的可见表现 → 结束状态 → 声音

- T2VA / I2VA 使用 integrated_multimodal_description，连续镜头按 Shot N 有序排列。
- FL2VA 使用 keyframe_description，明确 At 0.00 seconds 与结束时间，并写清两帧之间的 transition_description。
- L2VA / Full Reference 先写 subject_definitions、scene_definition 和 retention_analysis，再写镜头描述。
- overall_soundscape 和 non_diegetic_music 必须明确；无画外音乐时写 None 或“无非叙事音乐”。
- 同一 continuity_block_id 内复用 Subject N、场景定义和参考图；只补充本镜头发生的动作和状态变化。

## Seedance 提示词

Seedance 以 UNIT_* 为连续生成单位，写明地点、主体关系、start_state、动作时间线、end_state 和下一单元衔接。有对白时保留原文和声音指令；每个单元至少写一个环境声或动作声。

## 双适配一致性

- H3 与 Seedance 必须共享 scene_id、continuity_block_id、beat_id、unit_id、shot_id、duration、主体动作、起始状态和结束状态。
- 任一适配器发生拆镜，另一适配器必须同步增加相同镜头编号，并重新检查连续性。
