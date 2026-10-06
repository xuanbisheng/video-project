# 《再来一次，我就洗澡》项目画风锁定稿（阶段 0）

> 产出位置：`outputs/20261006205057_style_lock_cat/01-style-lock.md`
> 依据规范：`skills/project-style-lock`（阶段 0）＋ `_shared/prompt-conventions.md`
> 项目标记：`cat`　来源：`剧本/07_final_screenplay.md`（最终剧本 v2）
> 本稿状态：**待审核**　本稿不生成任何图片；四联测试已按用户决定取消
> 目标模型：**niji 7**（用户于 2026-10-06 指定）
> 安全边界：不生成浸水、窒息、惊吓、强行惩罚或失控泼洒画面

## 0. 前置状态

| 项目 | 状态 | 说明 |
|---|---|---|
| 阶段 0 画风锁定 | 待审核 | 本文件即该阶段产出 |
| 目标模型版本 | **niji 7** | 用户于 2026-10-06 指定；见下方 0.1 的写实度冲突提示 |
| 风格载体 | 待定 | 尚无 Moodboard；暂以「文字画风基线」占位，其约束强度弱于 Moodboard |
| 参考图投放 | 未提供 | 第 2 节为需求清单，等待用户投放或授权以文字描述替代 |
| 四联测试 | **已取消** | 用户决定不进行 MJ 环境测试；本阶段不产生实测证据 |
| 下游（角色设计） | 未解锁 | 需本稿状态提升至「已确认」 |

### 0.1 模型选择提示：niji 7 与「生活化写实」存在张力（需裁决）

据 Midjourney 官方更新公告，Niji V7 是「专为亚洲与动漫风格调校」的模型分支，官方强调的能力是动漫一致性、提示理解、文字渲染与 sref 表现（[Niji V7!](https://updates.midjourney.com/niji-v7/)）。而本稿第 1.4 节推荐的视觉方向是**生活化写实家庭纪录**。两者方向不一致，必须先裁决：

| 选项 | 含义 | 代价 |
|---|---|---|
| A. 保留写实方向，改用 MJ 主线模型 | 换用主线版本出图，niji 7 不用于本项目 | 与你的指定冲突，需你改口 |
| B. 保留 niji 7，接受风格化 | 画风转为「动漫／插画化的生活喜剧」；第 1.2–1.5 节、第 4 节文字基线与第 5 节全部测试提示词需整体重写 | 剧本中脏猫的粗粝感与写实宠物质感不再成立；「不要儿童卡通」需重新界定为「不要低龄化」 |
| C. 双轨 | 写实主线出角色与场景资产，niji 7 只用于特定镜头或封面 | 同一项目两套画风，连续性风险最高，不推荐 |

参数层面的连带影响：Niji 7 的角色一致性走 `--sref` ＋ `--sw`；Omni Reference（`--oref`／`--ow`）会自动指向主线 V7 模型，与 Niji 分支不兼容。因此共享约定中「第二批用参考图派生」的机制在 niji 7 下应改用 `--sref`。**此条来自第三方资料、未经实测**（你已决定不做 MJ 测试），请在使用时留意，或后续用一次生成验证。

## 1. 项目需求卡

### 1.1 剧本事实

- 类型：AI 原生家庭喜剧／有限次数时间回溯；时长约 3 分钟；平台抖音竖屏，画幅 9:16。
- 场景：周末下午的普通客厅，单场景。
- 角色：橘白猫团团（左耳深色毛、绿色项圈）、主人小林。
- 核心道具：黑色三秒重拍器、浅黄色浴巾、温毛巾、灰色水盆、小鱼干、手机支架、扫地机器人。
- 回溯以固定构图剪辑与物件归位表现，不生成连续倒放。
- 安全限制：不生成猫被浸水、窒息、惊吓或强行惩罚的画面；清洁只表现温毛巾擦拭。
- 屏幕倒计时、循环字幕与结尾字幕全部后期添加。

### 1.2 核心观感（建议，非剧本事实）

生活化、真实、克制、暖调、日常、轻微荒诞。

喜剧来自**规则被一只猫熟练利用**这件反常的事，而不是来自夸张表情或变形动作。

### 1.3 主要视觉反差（建议）

一只耳朵沾灰的普通家猫，冷静地反复按下地上的黑色小设备来重置时间；设备是廉价、无设计感的掌大小物件，而猫的表演精确、算计、有分寸。反差来自「写实环境 ＋ 荒诞机制」的对撞。

### 1.4 建议视觉方向（建议）

写实家庭生活摄影质感 ＋ 竖屏短视频构图 ＋ 周末下午窗边自然暖光 ＋ 真实猫科身体比例 ＋ 克制的动物表演 ＋ 单场景固定机位。

### 1.5 不要什么（强制）

剧本限制：

- 不生成浸水、窒息、惊吓、强行惩罚画面；清洁只表现温毛巾擦拭。
- 不生成完整液体倾倒或失控泼洒；水盆只用分段状态表现。
- 不要求生成可读文字（字幕、倒计时、设备文字、包装文字一律后期）。

画风禁止项（建议）：

- 儿童卡通、二维动画质感、完整人形猫。
- 宠物广告式过度梳理的毛发与影棚硬光。
- 未来科技感设备：发光线条、霓虹、屏幕界面、金属反光、科幻体量。
- 豪宅、样板间、摄影棚搭景式客厅。
- 恐怖或惊悚处理：设备灯色不做恐怖片式红闪，不做阴暗悬疑调色。
- 每张图使用不同光线；电影感浓滤镜、重暗角、强对比调色。

## 2. 参考图归类与准入结果

当前**未收到任何参考图**。以下为需求清单：每类说明「它必须决定什么」，供投放与准入判断。

| # | 类别 | 它必须决定 | 本项目需要的样子 | 状态 |
|---|---|---|---|---|
| 1 | 主体质感 | 写实程度与毛发表现 | 真实橘白短毛家猫、自然毛流与略微凌乱感、室内自然光下的毛发层次、可信猫科结构 | 待投放 |
| 2 | 空间参考 | 住宅气质与装修方向 | 紧凑普通城市住宅客厅、有轻微生活痕迹、非样板间、含沙发／矮柜／带门缝的高储物柜／窗边 | 待投放 |
| 3 | 摄影参考 | 画幅、机位与镜头语言 | 竖屏手机拍摄质量、平视中景、固定机位、真实但不粗糙 | 待投放 |
| 4 | 材质参考 | 具体表面质感 | 棉质毛巾、磨砂塑料水盆、掌大小磨砂黑塑料小设备、布艺沙发、木地板 | 待投放 |
| 5 | 色彩参考 | 主色、辅色、强调色 | 暖白、浅灰、原木色；橘白为角色本色；低饱和绿只用于项圈 | 待投放 |
| 6 | 情绪参考 | 表演与氛围基调 | 一本正经、克制、轻微荒诞；笑点来自行为反差 | 待投放 |

准入标准：一张图至少明确贡献上表中的一种信息，否则剔除。

剔除清单：与项目无关的纯风景、童话梦幻画面、赛博朋克光线、二维卡通猫、人形猫、豪宅室内、阴暗悬疑画面、复杂舞台灯光、与暖调冲突的图片、只有内容相似而风格完全不同的图片。

## 3. 画风方向比选

### 方向 A：生活化写实家庭纪录（推荐）

- 主要特征：真实住宅实景、自然窗光、手机竖屏纪录片构图、猫只做真实可完成的动作（用前爪按键）、保留轻微生活痕迹。
- 优势：与「时间回溯」的荒诞机制形成最大反差；单场景固定机位对连续性最友好；资产成本最低、最易复用。
- 风险：控制不足时画面会像随手拍的宠物视频，缺少「剧」的完成度。

### 方向 B：广告级宠物喜剧

- 主要特征：毛发干净精致、轮廓清楚、柔和精致打光、构图整洁、道具带产品质感。
- 优势：单帧完成度高，适合做封面与系列视觉。
- 风险：削弱开场「脏猫、左耳沾灰、嘴边挂着鱼干」的设定，与剧本的粗粝感冲突。

### 方向 C：轻度荒诞拟人

- 主要特征：拟人动作更明显、设备感更强、色彩更鲜明、更有网感。
- 优势：「按按钮」这一核心动作更易读，笑点更直接。
- 风险：容易滑向人形猫，破坏真实猫科比例与克制的表演基调。

### 推荐结论

以 **A 为主**；从 B 只借「关键帧的构图整洁度与光线稳定性」；从 C 只借「按按钮动作的可读性与机位选择」；不采用 B 的精致毛发与 C 的夸张造型。

## 4. 文字画风基线（`[STYLE_BASELINE]`）

在 Moodboard 建立前，以下描述作为正式的风格载体填入参数头。

**中文：** 生活化写实家庭喜剧质感，周末下午窗边自然暖光，真实紧凑的城市住宅客厅，手机竖屏纪录片式构图，可信的猫科解剖结构与自然短毛质感，克制的表演与轻微生活痕迹，柔和阴影，低饱和暖白／浅灰／原木色调，无戏剧化打光，无可读文字。

**English:** grounded domestic realism, warm weekend-afternoon window light, a real compact urban living room, vertical phone-documentary framing, believable feline anatomy with natural short fur, restrained performance and subtle lived-in detail, soft shadows, low-saturation warm-white, light-gray and light-wood palette, no dramatic lighting, no readable text.

## 5. 四联测试提示词

> **状态：已取消。** 用户决定不进行 Midjourney 环境测试。以下四条提示词本阶段不会执行，仅作为后续首次生成时的抽检底稿保留。

参数约定（遵循 `_shared/prompt-conventions.md` 第二节）：本稿只固定 `--ar`、`--s`、`--p`、`--no`；目标模型为 niji 7，其余版本相关参数由参数头注入，不写进正文。风格强度按低值起步。

**重要限制：以下测试不使用任何参考图**，身份一致性只能靠文字锚点，因此**只用于判定画风，不用于判定角色身份稳定性**。角色身份稳定性在阶段 1、阶段 2 判定。

### 测试一：角色

**中文：** 一只写实比例的成年橘白短毛家猫，全身，中性站姿，正面视图，橘色与奶油白分区清晰，左耳有明显深橘棕色毛斑，佩戴低饱和绿色窄项圈和小型金属牌，自然短毛质感，可信猫科解剖比例，四爪与尾巴完整可见，周末下午室内窗边自然暖光，浅灰中性背景，无道具，无可读文字。

**English:** a realistic adult orange-and-white domestic shorthair cat, full body, neutral standing pose, front view, clear orange and cream-white coat separation, distinct dark orange-brown patch on the left ear, low-saturation narrow green collar with a small metal tag, natural short fur, believable feline anatomy, all paws and tail fully visible, warm weekend-afternoon window light, neutral light-gray background, no props, no readable text

`--ar 2:3 --s 80 --p [MOODBOARD_CODE] --no cartoon big head, anthropomorphic body, different cat breed, missing left-ear marking, changed collar colour, oversized bell, extra limbs, duplicate tail, wet fur, fear, text, logo, watermark`

> 眼睛颜色属阶段 1 的待确认项，本测试不锁定。

### 测试二：场景

**中文：** 周末下午的普通紧凑城市住宅客厅，一侧窗户射入温暖自然光，简洁布艺沙发、矮储物柜、带窄门缝的高储物柜，沙发前留出清楚的猫可通行地面，浅灰水盆与黑色手机支架位于矮柜附近相当于人的脚边位置，矮柜旁地面有一个掌大小的黑色小设备，真实居家材质与轻微生活痕迹，中远景平视构图，竖屏留出上下边界，无人物、无动物、无可读文字。

**English:** an ordinary compact urban living room on a weekend afternoon, warm natural sunlight entering from a window on one side, a simple fabric sofa, a low storage cabinet, a taller storage cabinet with a narrow door gap, clear cat-passable floor in front of the sofa, a shallow gray water basin and a small black smartphone tripod near the low cabinet at foot level, a palm-sized black device on the floor beside the cabinet, realistic domestic materials with subtle lived-in detail, medium-wide eye-level composition with vertical headroom, no people, no animals, no readable text

`--ar 9:16 --s 80 --p [MOODBOARD_CODE] --no luxury mansion, studio set, rearranged furniture, duplicate sofa, floating objects, readable screen, text, logo, watermark`

### 测试三：道具

**中文：** 一个掌大小的黑色磨砂小设备，圆角矩形机身，顶部一个可按压按钮，机身一排四个小型指示灯（测试期处于熄灭状态），真实消费电子塑料质感，轻微模塑边缘，独立产品参考图，浅灰中性背景，柔和均匀棚拍光，无品牌、无可读文字。

**English:** a palm-sized matte-black small device, rounded rectangular body, one pressable button on top, a single row of four small indicator lights currently off, realistic consumer-electronics plastic, subtle molded edges, isolated product reference, neutral light-gray background, soft even studio light, no brand, no readable text

`--ar 1:1 --s 60 --p [MOODBOARD_CODE] --no futuristic sci-fi gadget, glow effects, screen, brand logo, extra buttons, transparent plastic, metallic gold, oversized device, human hand, cat, watermark`

### 测试四：剧情关键帧

**中文：** 同一只橘白短毛猫，全身入画，站在客厅地板矮柜旁，抬起一只前爪按下地面上黑色小设备顶部的按钮，身体略前倾，神情警惕而专注，回头看，竖屏构图，周末下午窗边暖光，真实的地面接触，无可读文字。

**English:** the same orange-and-white shorthair cat, full body, standing on a living-room floor beside a low cabinet, one front paw pressing the top button of a small black device on the floor, body leaning slightly forward, alert and focused expression, looking back over the shoulder, vertical composition, warm weekend-afternoon window light, realistic floor contact, no readable text

`--ar 9:16 --s 80 --p [MOODBOARD_CODE] --no humanoid body, human hands, bipedal anatomy, forced restraint, bathing in water, wet fur, frightened animal, injury, text, subtitles, watermark`

### 检查项与结果

每条测试检查：写实程度、材质表现、结构是否正确、色彩关系、光线一致性、是否出现主体异变、是否符合故事方向。

| 测试 | 结果 | 判定 |
|---|---|---|
| 测试一 角色 | 不执行 | 用户取消 MJ 环境测试 |
| 测试二 场景 | 不执行 | 同上 |
| 测试三 道具 | 不执行 | 同上 |
| 测试四 关键帧 | 不执行 | 同上 |

因测试取消，本阶段不再以「四联测试通过」作为进入资产生产的前置条件。替代控制：

1. 画风以第 4 节文字画风基线锁定；
2. 首次实际生成的第一张图作为画风抽检，若明显偏离基线则回到本稿修订，不继续批量生产；
3. 该风险在阶段 1 交付时一并复述。

## 6. 锁定记录（待填）

| 字段 | 值 |
|---|---|
| 画风名称 | `[待填]` |
| 方向编号 | `[待填]`（建议 A，见第 3 节） |
| 风格载体 | 待用户创建 Moodboard；当前为「文字画风基线」（弱于 Moodboard，漂移风险更高） |
| Moodboard 名称／ID | `[MOODBOARD_ID]`（待填） |
| 冻结代码（生产期用） | `[MOODBOARD_CODE]`（待填） |
| 目标模型版本 | **niji 7**（用户 2026-10-06 指定） |
| 关键参考图 | `[待填]` |
| 测试提示词 | 见第 5 节 |
| 四联测试结果 | 不适用（测试已取消） |
| 锁定日期 | `[LOCK_DATE]`（待填） |
| 版本号 | `[LOCK_VERSION]`（待填） |
| 代表结果图 | `[待填]` |
| 状态 | **待审核** |

版本命名：探索期 `_v01`、`_v02`；候选合并 `_Master_v01`；最终 `_LOCK`。探索期跟随最新状态，正式生产必须使用冻结版本。

## 7. 修订规则（速查）

| 现象 | 调整动作 |
|---|---|
| 猫太卡通 | 删除卡通动物参考，增加真实宠物摄影与真实毛发参考，减少夸张表情参考 |
| 客厅像样板间 | 增加真实住宅与生活用品参考，增加轻微使用痕迹，删除豪华室内摄影 |
| 缺少短视频感 | 增加竖屏构图与正面中景参考，增加拍摄设备痕迹，统一强调色 |
| 画面过于杂乱 | 删除背景复杂的参考，统一空间色彩，减少高频纹理，保持清楚主体 |
| 喜剧感过火 | 删除卡通变形表情，增加克制表情参考，让笑点来自行为反差 |
| 光线不统一 | 固定主光方向（窗在单侧），删除与该方向冲突的光线参考 |
| 设备太科幻 | 删除未来科技参考，增加真实消费电子与磨砂塑料材质参考，把体量压到掌大小，去掉发光与屏幕 |

每次只改一项，改完用下一次实际生成做抽检对照（四联测试已取消，见第 5 节）。

## 8. 待用户审核的选项

### 已解决

- ~~目标模型版本~~ → 已定为 **niji 7**。
- ~~四联测试授权~~ → 已决定 **不进行**，替代控制见第 5 节。

### 仍需你裁决

1. **（最高优先）** 0.1 节三选一：A 换回 MJ 主线保写实／B 保留 niji 7 改为风格化／C 双轨。
2. 画风方向是否采用 **A（生活化写实家庭纪录）为主**，并接受从 B 借「构图整洁度与光线稳定性」、从 C 借「按键动作可读性」？（若第 1 项选 B，本节随之改写）
3. 第 1.2／1.3／1.4 节的核心观感与视觉方向是否需要增删？
4. 第 1.5 节「不要什么」是否需要增删（尤其：设备是否允许任何形式的光效）？
5. 第 2 节六类参考图：由你投放图片，还是授权我用文字描述替代全部参考图？（见下方说明）
6. 是否由你在 Midjourney 创建 Moodboard 并提供 ID／冻结代码？若不创建，是否接受以「文字画风基线」作为正式风格载体并承担更高的风格漂移风险？（见下方说明）
7. 整体写实程度是否确认「真实比例、不卡通化」？此项与第 1 项联动，若选 B 则本条作废。

### 两项名词说明

- **Moodboard 是什么**：Midjourney 的「画风参考集」功能。你上传一组参考图，MJ 从这组图里学习整个项目的审美方向——色彩、光线、材质、构图偏好、写实程度——并生成一个风格代码；之后每条提示词末尾带上这个代码，出图就会自动落在同一套画风里。它**只统一画风，不锁定角色长相**（角色靠参考图锁定）。本项目当前没有它，因此暂以第 4 节的文字描述替代；文字约束比 Moodboard 弱，风格漂移风险更高。
- **参考图投放是什么**：指你提供图片文件或图片网址，作为第 2 节那六类参考——真实猫的毛发、真实客厅、竖屏构图、材质、色彩、情绪。不提供也能做，但画风只能靠文字描述约束。若你愿意提供，把图片放进一个文件夹并告诉我路径即可，我来归类、登记并做准入筛选。

## 9. 下游交接说明

- **当前可开始**：无。阶段 1 需本稿状态达到「已确认」，且需先裁决 0.1 节的模型与画风路线。
- **确认后进入**：阶段 1 角色概念设计 → `outputs/<时间戳>_character_design_cat/`。
- **本阶段未完成项**：模型路线裁决、Moodboard 建立、参考图投放、锁定记录填写。
- **已取消项**：四联测试（用户决定），替代控制见第 5 节。
- **风险提示**：在无 Moodboard、无参考图、无实测证据的情况下进入角色资产，风格漂移风险显著高于正常流程。若第 1 项选择 B（保留 niji 7 的风格化路线），第 1、4 节与第 5 节全部测试提示词需整体重写，本稿不能直接沿用。
