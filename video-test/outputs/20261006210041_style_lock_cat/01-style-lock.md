# 《再来一次，我就洗澡》项目画风锁定稿（阶段 0 · 第二版）

> 产出位置：`outputs/20261006210041_style_lock_cat/01-style-lock.md`
> 依据规范：`skills/project-style-lock`（阶段 0）＋ `_shared/prompt-conventions.md`
> 项目标记：`cat`　来源：`剧本/07_final_screenplay.md`（最终剧本 v2）
> 目标模型：**niji 7**　风格载体：**文字画风基线**（不使用 Moodboard，用户 2026-10-06 决定）
> 本稿状态：**已确认**（用户于 2026-10-06 确认）　本稿不生成任何图片
> 版本关系：取代 `20261006205057_style_lock_cat`（写实方向版，已归档）

## 0. 前置状态

| 项目 | 状态 | 说明 |
|---|---|---|
| 阶段 0 画风锁定 | **已确认** | 用户 2026-10-06 确认；阶段 1 已启动 |
| 风格方向 | **Pixar 三维动画风** | 用户于 2026-10-06 指定，取代原「生活化写实」方向 |
| 目标模型版本 | **niji 7** | 用户指定 |
| 风格载体 | **文字画风基线** | 用户 2026-10-06 决定不使用 Moodboard；画风由第 4 节文字基线单独承担 |
| 参考图投放 | **不投放** | 用户明确决定；风格参考由文字画风基线承载，见第 2 节 |
| 四联测试 | **已取消** | 用户决定不进行 MJ 环境测试；第 5 节保留抽检底稿 |
| 下游（角色设计） | **已解锁** | 阶段 1 已产出 `20261006210333_character_design_cat` |

### 0.1 变更记录与残留风险

本次相对第一版的变更：风格目标由「生活化写实家庭纪录」改为「Pixar 三维动画」；模型确认为 niji 7；风格载体一度升级为「Moodboard ＋ 文字基线」，随后于同日按用户决定**改回「文字基线」单载体**（不加 `--p`）。

**关于 Moodboard 的记录（已撤销）**：Midjourney 官方公告确认「已为 niji 7（动漫图像模型）加入 Personalization 与 Moodboards」（[官方更新](https://updates.midjourney.com/personalization-and-web-updates/)），因此用户指定的 Moodboard ID 与 niji 7 在技术上是兼容的。但用户于 2026-10-06 决定**不使用 Moodboard**，本项目不添加 `--p` 参数，画风改由第 4 节文字基线单独承担。

- 副作用（利好）：撤销 Moodboard 同时消解了原 R3（Moodboard 与 `--sw` 可能互斥）——现在可以无冲突地使用 `--sref` ＋ `--sw` 做角色一致性。
- 代价：文字基线的约束强度弱于 Moodboard，**风格漂移风险上升**，缓解手段见第 5 节替代控制。
- 2026-10-06 追加：角色与道具的参考图背景统一为**浅灰纯色**（依据阶段 2 的 0.3 背景规则）；确立**场景不含道具**边界，第 5 节抽检一、二、三已同步更新。场景母版**只保留 16:9 横屏一张**，抽检二同步改为 `--ar 16:9`。

**残留风险（未经实测，因已取消测试）**：

| # | 风险 | 说明 | 处置建议 |
|---|---|---|---|
| R1 | 三维质感落差 | 官方将 niji 7 定义为「动漫图像模型」，其语言偏二维插画；Pixar 属三维 CG 语言。文字基线与提示词能拉近多少，需看实际出图 | 首次生成的第一张图即作为判定点；若明显偏二维平涂，可改用 MJ 主线模型（文字基线不变） |
| R2 | 派生机制未验证 | Niji 分支的角色一致性通常走 `--sref` ＋ `--sw`；`--oref`／`--ow` 按第三方资料指向主线模型、与 Niji 不兼容 | 阶段 2 用到参考图派生时先小样验证，再批量 |
| R3 | ~~`--p` 与 `--sw` 可能互斥~~ **已消解** | 原风险：Moodboard 不能与 `--sw`／`--sv` 同时使用。2026-10-06 决定不使用 Moodboard 后，该冲突不再存在 | 无需处置；可正常使用 `--sref` ＋ `--sw` |

三项都只影响后续执行细节，不阻塞阶段 0 定稿。

## 1. 项目需求卡

### 1.1 剧本事实

- 类型：AI 原生家庭喜剧／有限次数时间回溯；时长约 3 分钟；平台抖音竖屏，画幅 9:16。
- 场景：周末下午的普通客厅，单场景。
- 角色：橘白猫团团（左耳深色毛、绿色项圈）、主人小林。
- 核心道具：黑色三秒重拍器、浅黄色浴巾、温毛巾、灰色水盆、小鱼干、手机支架、扫地机器人。
- 回溯以固定构图剪辑与物件归位表现，不生成连续倒放。
- 安全限制：不生成猫被浸水、窒息、惊吓或强行惩罚的画面；清洁只表现温毛巾擦拭。
- 屏幕倒计时、循环字幕与结尾字幕全部后期添加。

### 1.2 核心观感（建议）

温暖、可爱、家庭向、有质感、克制、轻微荒诞。

笑点来自**一只看起来很乖的动画猫冷静地反复重置时间**这件反常的事，而不是来自夸张变形表情。可爱是外壳，算计是内核。

### 1.3 主要视觉反差（建议）

一个典型的皮克斯式温暖家庭场景里，最讨喜的角色在做最不讨喜的事：为了逃避擦洗，精确地、有条不紊地操纵一台廉价的黑色塑料小设备。反差来自「可爱造型 × 冷静算计」。

### 1.4 建议视觉方向（建议）

三维动画家庭喜剧质感（Pixar 方向）＋ 竖屏短视频构图 ＋ 温暖室内自然光（窗户为主光源、暖色反弹光）＋ 可信猫科结构但带动画化的讨喜比例 ＋ 克制的表演 ＋ 电影感浅景深。

人物（小林）沿用同一动画语言：适度夸张但可信的成人比例、真实居家服装、不做偶像化。

猫保持四足着地：可以有表情与眼神的夸张，但不立行、不使用人类手掌。

### 1.5 不要什么（强制）

剧本限制（不因画风变更而改变）：

- 不生成浸水、窒息、惊吓、强行惩罚画面；清洁只表现温毛巾擦拭。
- 不生成完整液体倾倒或失控泼洒；水盆只用分段状态表现。
- 不要求生成可读文字（字幕、倒计时、设备文字、包装文字一律后期）。

画风禁止项：

- **写实宠物摄影质感**（本方向已放弃写实，出现真实照片感即为跑偏）。
- **二维平面动漫／赛璐璐上色／线稿感**（避免与 niji 分支的默认倾向混淆）。
- **低龄幼儿化**：形状过度简化、材质与光影层次丢失、只剩高饱和平涂。
- **人形猫**：直立行走、人类手掌、类人身体结构。
- 科幻硬件感：设备保持掌大小、廉价磨砂塑料、无发光线路、无全息界面、无金属高光。
- 恐怖或惊悚处理：设备灯色不做恐怖片式红闪，不做阴暗悬疑打光。
- 豪宅、样板间、摄影棚搭景式客厅。
- 每个镜头不同光线；电影感浓滤镜、重暗角、强对比调色。

## 2. 参考图策略

用户已明确**不投放参考图**，且于 2026-10-06 决定**不使用 Moodboard**。因此本项目的风格参考只由**第 4 节文字画风基线**承载。

> 文字基线的约束强度弱于 Moodboard，风格漂移风险相应上升；缓解手段见 0.1 与第 5 节的替代控制。
> 风格基线不负责锁定角色长相；角色身份在阶段 1、阶段 2 用参考图派生机制处理（见 R2）。

下表保留六类参考的归类与准入标准，用途由「投放清单」变更为「日后修正画风时的补充依据」：

| # | 类别 | 它必须决定 | 本项目需要的样子 |
|---|---|---|---|
| 1 | 主体质感 | 造型亲和力与毛发渲染 | 三维动画风格的圆润讨喜造型、柔软毛发带次表面散射、可信猫科结构 |
| 2 | 空间参考 | 住宅气质与装修方向 | 紧凑普通住宅客厅、生活化、非样板间、含沙发／矮柜／带门缝的高储物柜／窗边 |
| 3 | 摄影参考 | 画幅、机位与镜头语言 | 竖屏、平视中景、固定机位、电影感浅景深 |
| 4 | 材质参考 | 表面质感与渲染质量 | 棉质毛巾、磨砂塑料水盆、掌大小磨砂黑塑料小设备、布艺沙发、木地板 |
| 5 | 色彩参考 | 主色、辅色、强调色 | 暖白、浅灰、原木色；橘白为角色本色；低饱和绿只用于项圈、黄与红只用于设备灯色 |
| 6 | 情绪参考 | 表演与氛围基调 | 一本正经、克制、温暖；笑点来自行为反差 |

准入标准：一张图至少明确贡献上表中的一种信息，否则剔除。

剔除清单：纯风景、与项目无关的写实宠物摄影、二维平涂动漫、低龄幼儿动画、赛博朋克光效、豪宅室内、阴暗悬疑、与暖调冲突的图片。

## 3. 画风方向比选

风格已锁定在 Pixar 三维动画范畴内，以下为三个细分方向：

### 方向 A：皮克斯式家庭动画（推荐）

- 主要特征：圆润讨喜的造型、可信但适度夸张的解剖、柔软毛发与次表面散射、温暖窗光与暖色反弹光、电影感浅景深、生活化道具质感。
- 优势：与剧本的家庭喜剧基调一致；可爱外壳与冷静算计的反差最强；单场景固定机位下材质与光线最易保持一致。
- 风险：渲染质量要求高，若模型偏二维则需回退或换模型（见 R1）。

### 方向 B：高饱和卡通（偏低龄）

- 主要特征：更强的形状简化、更鲜艳的色彩、更少的材质细节。
- 优势：出图稳定、风格统一容易。
- 风险：丢失质感与生活痕迹，开场「脏猫、左耳沾灰」的细节撑不起来，也不利于与后续系列内容共存。

### 方向 C：半写实三维（偏游戏 CG）

- 主要特征：材质更接近真实、光照更冷、造型夸张度低。
- 优势：细节丰富，单帧完成度高。
- 风险：会滑回写实方向，与本次指定的 Pixar 目标偏离；家庭喜剧的亲和力减弱。

### 推荐结论

采用 **A**。从 B 只借「轮廓清晰、造型易读」；从 C 只借「材质可信、光影层次」；不采用 B 的低龄简化，也不采用 C 的写实倾向。

## 4. 文字画风基线（`[STYLE_BASELINE]`）

正式风格载体为以下文字画风基线（本项目不使用 Moodboard）；该基线填入参数头，正文不重复。

**中文：** 三维动画家庭喜剧质感，皮克斯式的圆润造型与角色亲和力，可信但适度夸张的动物解剖，柔软毛发渲染带次表面散射，温暖室内自然光以窗户为主光源并带暖色反弹光，生活化的紧凑住宅客厅，电影感浅景深与柔和阴影，低饱和暖白／浅灰／原木色调，克制的表演与轻微生活痕迹；无写实摄影质感，无二维线稿与赛璐璐上色，无可读文字。

**English:** 3D animated family-comedy look, Pixar-style rounded shapes and character appeal, believable but lightly stylized anatomy, soft fur rendering with subsurface scattering, warm interior daylight with the window as key light plus warm bounce, a lived-in compact living room, cinematic shallow depth of field and soft shadows, low-saturation warm-white, light-gray and light-wood palette, restrained performance and subtle lived-in detail; no photorealistic photography, no 2D line art or cel shading, no readable text.

## 5. 抽检提示词

> **状态：四联测试已取消**（用户决定不进行 MJ 环境测试）。以下四条不执行，仅作为后续首次实际生成时的抽检底稿保留。

参数约定（遵循 `_shared/prompt-conventions.md` 第二节）：固定 `--ar`、`--s`、`--no`；`--niji 7` 等模型参数由参数头注入，不写进正文。风格强度按低值起步。

**重要限制：以下抽检不使用角色参考图**，身份一致性只能靠文字锚点，因此**只用于判定画风，不用于判定角色身份稳定性**。角色身份稳定性在阶段 1、阶段 2 判定。

### 抽检一：角色

**中文：** 三维动画风格的成年橘白短毛家猫，皮克斯式圆润讨喜造型，全身，中性站姿，正面视图，橘色与奶油白分区清晰，左耳有明显深橘棕色毛斑，佩戴低饱和绿色窄项圈和小型金属牌，柔软毛发带次表面散射，可信猫科结构但适度动画化，四爪着地，尾巴完整可见，柔和暖色照明，浅灰纯色背景（无渐变、无暗角、无纹理、无场景元素、无地面线），无可读文字。

**English:** a 3D animated adult orange-and-white domestic shorthair cat, Pixar-style rounded appealing design, full body, neutral standing pose, front view, clear orange and cream-white coat separation, distinct dark orange-brown patch on the left ear, low-saturation narrow green collar with a small metal tag, soft fur with subsurface scattering, believable feline structure with light animation stylization, standing on all four paws, full tail visible, soft warm lighting, flat solid light-gray background (no gradient, no vignette, no texture, no scenery, no floor line), no readable text

`--ar 2:3 --s 80 --no photorealistic, photography, 2D line art, cel shading, flat colors, chibi, oversized cartoon head, anthropomorphic body, human hands, bipedal, different cat breed, missing left-ear marking, changed collar colour, oversized bell, extra limbs, duplicate tail, wet fur, fear, text, logo, watermark`

> 眼睛颜色已在阶段 1 确认为**金黄色**（见 `outputs/20261006210333_character_design_cat/`）。

### 抽检二：场景

**中文：** 三维动画风格的紧凑城市住宅客厅，周末下午，一侧窗户射入温暖自然光并带暖色反弹光，简洁布艺沙发、矮储物柜、带窄门缝的高储物柜，沙发前留出清楚的猫可通行地面，生活化材质与轻微使用痕迹，电影感浅景深，中远景平视构图，横屏总览构图，无人物、无动物、**无任何道具**、无可读文字。

**English:** a 3D animated compact urban living room on a weekend afternoon, warm natural sunlight entering from a window on one side with warm bounce light, a simple fabric sofa, a low storage cabinet, a taller storage cabinet with a narrow door gap, clear cat-passable floor in front of the sofa, lived-in materials with subtle wear, cinematic shallow depth of field, medium-wide eye-level composition, horizontal overview composition, no people, no animals, no props of any kind, no readable text

`--ar 16:9 --s 80 --no photorealistic, photography, 2D line art, cel shading, luxury mansion, studio set, rearranged furniture, duplicate sofa, floating objects, props, household objects, readable screen, text, logo, watermark`

### 抽检三：道具

**中文：** 掌大小的黑色磨砂小设备，圆角矩形机身，顶部一个可按压按钮，机身一排四个小型指示灯（当前熄灭），三维动画道具质感，简约无品牌设计，独立产品参考图，浅灰纯色背景（无渐变、无暗角、无纹理、无场景元素、无桌面边缘），柔和均匀棚拍光，无可读文字。

**English:** a palm-sized matte-black small device, rounded rectangular body, one pressable button on top, a single row of four small indicator lights currently off, 3D animated prop rendering, minimal unbranded design, isolated product reference, flat solid light-gray background (no gradient, no vignette, no texture, no scenery, no table edge), soft even studio light, no readable text

`--ar 1:1 --s 60 --no photorealistic product shot, futuristic sci-fi gadget, glow effects, screen, brand logo, extra buttons, transparent plastic, metallic gold, oversized device, human hand, cat, watermark`

### 抽检四：剧情关键帧

**中文：** 三维动画风格，同一只橘白短毛家猫，全身入画，四爪着地站在客厅地板矮柜旁，抬起一只前爪按下地面上黑色小设备顶部的按钮，身体略前倾，神情警惕而专注，回头看，竖屏构图，周末下午窗边暖光，可信的地面接触，无可读文字。

**English:** 3D animated style, the same orange-and-white shorthair cat, full body, standing on all four paws on a living-room floor beside a low cabinet, one front paw pressing the top button of a small black device on the floor, body leaning slightly forward, alert and focused expression, looking back over the shoulder, vertical composition, warm weekend-afternoon window light, believable floor contact, no readable text

`--ar 9:16 --s 80 --no photorealistic, photography, 2D line art, cel shading, humanoid body, human hands, bipedal anatomy, forced restraint, bathing in water, wet fur, frightened animal, injury, text, subtitles, watermark`

### 结果

| 抽检 | 结果 | 判定 |
|---|---|---|
| 抽检一 角色 | 不执行 | 用户取消 MJ 环境测试 |
| 抽检二 场景 | 不执行 | 同上 |
| 抽检三 道具 | 不执行 | 同上 |
| 抽检四 关键帧 | 不执行 | 同上 |

替代控制：画风以第 4 节文字基线锁定；首次实际生成的第一张图作为画风抽检点，若明显偏二维平涂（见 R1）则先解决模型问题，不继续批量生产。

## 6. 锁定记录

| 字段 | 值 |
|---|---|
| 画风名称 | Pixar 三维动画家庭喜剧（方向 A） |
| 方向编号 | A |
| 风格载体 | **第 4 节文字画风基线**（本项目不使用 Moodboard） |
| 目标模型版本 | **niji 7** |
| 关键参考图 | 无（用户不投放） |
| 抽检提示词 | 见第 5 节（未执行） |
| 抽检结果 | 不适用（测试已取消） |
| 锁定日期 | 2026-10-06 |
| 版本号 | `_v01` |
| 代表结果图 | `[待填]` |
| 状态 | **已确认** |

版本命名：探索期 `_v01`、`_v02`；候选合并 `_Master_v01`；最终 `_LOCK`。

## 7. 修订规则（速查）

| 现象 | 调整动作 |
|---|---|
| 太像二维动漫／平涂 | 在文字基线中强化三维渲染描述；提示词强调 rounded 3D forms、subsurface scattering、soft shadows |
| 太像写实摄影 | 提高造型夸张度与轮廓简化，增加动画电影参考，删除写实宠物摄影参考 |
| 太幼儿化 | 增加材质与光影层次参考，降低饱和度，保留可信解剖与生活化道具 |
| 客厅像样板间 | 增加真实住宅与生活用品参考，增加轻微使用痕迹，删除豪华室内摄影 |
| 缺少短视频感 | 增加竖屏构图与正面中景参考，统一强调色 |
| 喜剧感过火 | 减少夸张变形表情参考，让笑点来自行为反差 |
| 光线不统一 | 固定主光方向（窗在单侧），删除与该方向冲突的光线参考 |
| 设备太科幻 | 压到掌大小、去掉发光与界面，保留廉价磨砂塑料感 |
| 猫变人形 | 恢复四爪着地与猫科结构，删除拟人化身体与人类手掌参考 |

每次只改一项，改完用下一次实际生成做抽检对照（四联测试已取消，见第 5 节）。

## 8. 审核结论与遗留待办

### 已解决

- ~~目标模型版本~~ → **niji 7**。
- ~~风格方向~~ → **Pixar 三维动画**（方向 A）。
- ~~风格载体~~ → **文字画风基线**（2026-10-06 决定不使用 Moodboard）。
- ~~参考图投放~~ → **不投放**，风格参考由文字基线承载。
- ~~四联测试授权~~ → **不进行**，替代控制见第 5 节。

### 已确认（用户 2026-10-06）

1. ~~第 1.2–1.5 节的观感、视觉方向与「不要什么」~~ → 认可。
2. ~~第 3 节细分方向~~ → 采用 **A（皮克斯式家庭动画）**。
3. ~~0.1 节三项残留风险~~ → 按「首次生成时验证」处理。
4. ~~提升状态~~ → 已提升为「已确认」，阶段 1 已启动。

### 遗留待办

- 填入代表结果图（首次生成后）。
- ~~登记 Moodboard 冻结代码~~ → 已取消（不使用 Moodboard）。

## 9. 下游交接说明

- **当前可开始**：阶段 1 角色设计已完成并确认 → `outputs/20261006210333_character_design_cat/01-character-design-review.md`。
- **再下一阶段**：阶段 2 资产台账与双语提示词已完成并确认 → `outputs/20261006210831_asset_cat/`。
- **待用户执行**：在 Midjourney 中按 `02-midjourney-prompts.md` 跑第一批最小资产包；第一张图先做画风抽检。
- **后续阶段**：阶段 3 剧情关键帧 → `outputs/<时间戳>_keyframe_cat/`（须角色、场景与核心道具全部锁定后）。
- **本阶段未完成项**：代表结果图（首次生成后回填）。
- **风险提示**：项目在**无 Moodboard、无参考图、无实测证据**的情况下进入生产，画风漂移风险高于常规流程。首要不确定性是 niji 7 能否稳定产出三维动画质感（R1）；第一张图未达到三维动画质感时不要继续批量派生。
