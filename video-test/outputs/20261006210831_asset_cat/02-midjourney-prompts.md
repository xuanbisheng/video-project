# 《再来一次，我就洗澡》中英双语提示词库（阶段 2 · 之二）

> 产出位置：`outputs/20261006210831_asset_cat/02-midjourney-prompts.md`
> 依据规范：`skills/character-asset-skill`、`skills/prop-asset-skill`、`skills/scene-asset-skill`（阶段 2）＋ `_shared/prompt-conventions.md`
> 上游依据：`01-asset-library.md`（同目录，资产台账）
> 本稿状态：**已确认**（用户 2026-10-06 确认）　提示词可直接执行，执行前须完成第一批锁定流程
> 风格依据：阶段 0 已确认的 Pixar 三维动画方向

## 0. 项目参数头（Prompt Header）

本文件所有提示词共用以下参数，正文不再重复：

```
- 项目：再来一次，我就洗澡
- 目标模型版本：niji 7
- 画幅基线：竖屏交付 9:16；角色基准 2:3；道具主参考 1:1；空间总览 16:9
- 风格基线：三维动画家庭喜剧（Pixar 方向）——圆润讨喜造型、次表面散射、
            窗户单侧主光＋暖色反弹光、电影感浅景深、低饱和暖白／浅灰／原木色调
- 风格载体：文字画风基线（即本参数头上方的「风格基线」）
            （用户 2026-10-06 决定不使用 Moodboard；画风由文字基线单独承担）
- 参考图机制：niji 分支 → --sref [<ID>_URL] ＋ --sw
              （--oref／--ow 与 Niji 分支不兼容；未实测，批量前先小样验证）
- 风格强度基线：角色 80；道具 60；场景 80
- 负面约束基线：见 0.2
- 锁定日期与版本：2026-10-06 / _v01
```

### 0.1 使用规则

- 参数集中在提示词**末尾**，参数之后不接正文或标点；书写顺序：正文 → `--ar` → `--s` → `--no`。
- 版本专属参数（`--niji 7`、`--sref`、`--sw` 等）由本参数头注入，不写进每条正文。
- 一次只改变一个变量（视角、表情、状态或动作），否则无法判断变化来源。
- 重复性模板只写增量变量；固定锚点在第 1、3、4 节的主参考条目中完整出现一次。
- 双语逐条对应：中文用于审核含义与连续性，英文用于执行；参数、占位符与变量名不翻译。
- **第一批不使用任何参考图**；选定代表图并填入占位符后，第二批才用 `[<ID>_URL]` 派生。

### 0.2 负面约束基线

通用（每条提示词都要有）：`photorealistic`、`photography`、`2D line art`、`cel shading`、`text`、`logo`、`watermark`、`cropped head or feet`。

**角色与道具专用**（依据 0.3 的背景规则）：`gradient background`、`vignette`、`textured backdrop`、`scenery`、`floor line`、`environmental props`。场景资产**不适用**这一组。

分类追加：

| 类型 | 追加 |
|---|---|
| 角色 | 物种／品种漂移、毛色花纹漂移、配饰变化、拟人化身体、人类手掌、攻击或恐惧表情 |
| 道具 | 额外数量、外观材质变化、重复设备、科幻化 |
| 场景 | 家具重排、窗户方向变化、道具复制、可读屏幕文字 |
| 同框 | 主体比例失真、某个主体被重新设计 |

### 0.3 背景规则（用户 2026-10-06）

**角色与道具**的参考图一律使用**纯色背景**：

- 单一颜色平铺，颜色统一为浅灰；
- 禁止渐变、暗角、纹理、场景元素与地面线；
- 角色脚下允许**极轻的接触阴影**用于交代重心，除此之外不出现任何投影、反光或环境光；
- 道具俯视平铺时同样不出现地面线或桌面边缘。

**场景资产不适用本条**——场景必须呈现真实空间与光线，其背景由空间本身构成。

动作类资产（第 2.3 节）需要与道具同框交代尺度与接触关系，暂保留场景光线；如需一并改为纯色，请指出。

## 1. 角色主参考（第一批，不使用参考图）

### 1.1 `CHAR_TUANTUAN` 团团

**中文：** 三维动画风格的成年橘白短毛家猫，皮克斯式圆润讨喜造型，略圆润但敏捷的体型，完整全身，中性站姿，正面视图，四爪着地，橘色与奶油白分区清晰，左耳有明显深橘棕色毛斑，佩戴低饱和绿色窄项圈和小型金属牌，金黄色眼睛，柔软短毛带次表面散射，可信的猫科解剖结构，尾巴自然可见，浅灰纯色背景（单一颜色平铺，无渐变、无暗角、无纹理、无场景元素、无地面线），柔和均匀光线，脚下仅有极轻的接触阴影，无道具，无可读文字。

**English:** 3D animated adult orange-and-white domestic shorthair cat, Pixar-style rounded appealing design, slightly plump but agile build, full body, neutral standing pose, front view, standing on all four paws, clear orange and cream-white coat separation, distinct dark orange-brown patch on the left ear, low-saturation narrow green collar with a small metal tag, golden-yellow eyes, soft short fur with subsurface scattering, believable feline anatomy, tail naturally visible, flat solid light-gray background (single flat color, no gradient, no vignette, no texture, no scenery, no floor line), soft even light, only a very light contact shadow under the paws, no props, no readable text

`--ar 2:3 --s 80 --no photorealistic, photography, 2D line art, cel shading, flat colors, chibi, oversized cartoon head, anthropomorphic body, human hands, bipedal, different cat breed, missing left-ear marking, changed collar colour, bell, extra limbs, duplicate tail, wet fur, fear, text, logo, watermark`

### 1.2 `CHAR_XIAOLIN` 小林

**中文：** 三维动画风格的约 20 岁年轻女性，大学刚毕业，清瘦自然的年轻成年身形，普通亲切的面相，深色头发在颈后扎成低马尾、居家随意，浅灰棉质居家短袖，深灰直筒家居长裤，浅色室内拖鞋，完整全身，中性站姿，正面视图，双手自然垂放，头顶到鞋底完整入画，浅灰纯色背景（单一颜色平铺，无渐变、无暗角、无纹理、无场景元素、无地面线），柔和均匀光线，脚下仅有极轻的接触阴影，不拿道具，无可读文字。

**English:** 3D animated young woman around 20, recent university graduate, lean natural young-adult build, ordinary friendly face, dark hair tied in a low ponytail at the nape, casual at home, light-gray cotton home T-shirt, dark charcoal straight-leg lounge pants, light indoor slippers, complete full body, neutral standing pose, front view, arms hanging naturally, fully in frame from top of head to soles, flat solid light-gray background (single flat color, no gradient, no vignette, no texture, no scenery, no floor line), soft even light, only a very light contact shadow under the feet, no props, no readable text

`--ar 2:3 --s 80 --no photorealistic, photography, 2D line art, cel shading, middle-aged, older woman, masculine features, beard, fashion model face, celebrity likeness, uniform, suit, brand logo, busy pattern, loose hair, short hair, high ponytail, changing hairstyle, changing footwear, missing fingers, extra limbs, cropped head, cropped feet, text, logo, watermark`

> 「middle-aged / older woman」「masculine features」「loose hair」「high ponytail」必须保留在负面约束中：小林的年龄、性别与发型是本项目最容易漂移的三项。
> **性别更正（2026-10-06）：小林为女性**；**发型确认为深色低马尾**（束于颈后低位）。造型按年轻女性处理，仍需避免成熟化。

## 2. 角色派生模板（第二批）

机制：`--sref [<ID>_URL]` ＋ `--sw`，逐张生成；身份锚点由参考图承载，正文只写增量变量。

### 2.1 角度模板

**中文：** `[<CHAR_ID>_URL]` 同一角色，保持全部身份锚点不变，`[VIEW_CN]`，完整全身，中性站姿，浅灰纯色背景（无渐变、无纹理、无场景元素、无地面线），统一光线，无道具。

**English:** `[<CHAR_ID>_URL]` same character, all identity anchors unchanged, `[VIEW_EN]`, full body, neutral pose, flat solid light-gray background (no gradient, no texture, no scenery, no floor line), consistent lighting, no props

变量：`左侧面 / 右侧面 / 背面 / 四分之三`
参数：`--ar 2:3 --s 80` ＋ 角色类负面约束

团团的背面视图需额外确认：项圈闭合关系处于背面可见位置。

### 2.2 表情与头部模板

**中文：** `[<CHAR_ID>_URL]` 同一角色，头部与肩部特写，`[EXPRESSION_CN]`，保持面部锚点与配色不变，浅灰纯色背景，柔和光线，无可读文字。

**English:** `[<CHAR_ID>_URL]` same character, head-and-shoulders portrait, `[EXPRESSION_EN]`, facial anchors and palette unchanged, flat solid light-gray background, soft light, no readable text

参数：`--ar 1:1 --s 80` ＋ 角色类负面约束 ＋ 表情类负面约束（见本节末）

#### 表情基调（用户 2026-10-06）

**「严肃还是开心」——以严肃、平静、克制为主，全片几乎没有笑容。** 唯一允许的正面情绪是「安抚」时**嘴角极轻微上扬、且不露齿**。小林不得出现大笑、露齿笑、夸张惊讶或喜剧化鬼脸。

团团的表情靠**耳朵、眼睛、胡须与尾巴**表达，**不做人化笑容或露齿表情**。

下列标签是剧本动作标签，**不能直接填进提示词**；必须使用右侧对应的面部描述。

#### 小林表情变量（5 项）

| 标签 | 中文（填入 `[EXPRESSION_CN]`） | English（填入 `[EXPRESSION_EN]`） |
|---|---|---|
| 准备执行 | 平静专注的中性表情，眉毛放松，目光看向前方目标，嘴唇自然闭合、略微抿紧，下颌平稳，无笑意 | calm focused neutral expression, relaxed brows, gaze directed at the task ahead, lips naturally closed and slightly pressed, jaw level, no smile |
| 察觉异常 | 轻微惊讶但立刻克制，眉毛微微上扬，眼睛略微睁大，嘴唇只微微张开，头略向一侧倾斜 | mildly surprised but immediately restrained, eyebrows slightly raised, eyes slightly widened, lips barely parted, head tilted slightly to one side |
| 克制停顿 | 表情收敛，嘴唇抿成一条线，眉毛内侧略微下压，视线短暂移开再回到猫身上 | composed and withholding, lips pressed into a thin line, inner brows slightly lowered, gaze briefly averted then returning to the cat |
| 安抚 | 温和放松，嘴角极轻微上扬且不露齿，眼部放松，眉毛舒展，目光柔和稳定 | warm and relaxed, the very faintest closed-mouth upturn at the corners of the mouth, eyes relaxed, brows smooth, steady gentle gaze |
| 等待 | 完全平静，面部无紧张，嘴唇自然闭合，目光平稳看向猫的方向 | fully calm, no tension in the face, lips naturally closed, level gaze toward the cat |

#### 团团表情变量（4 项）

| 标签 | 中文 | English |
|---|---|---|
| 警惕 | 耳朵向两侧压平并略微后转，眼睛睁大、瞳孔略收缩，胡须向前张开，身体压低，嘴闭合 | ears flattened sideways and slightly back, eyes wide with pupils slightly narrowed, whiskers fanned forward, body lowered, mouth closed |
| 得意 | 下巴略微抬起，眼睛半眯、外眼角上提，耳朵朝前立起，胡须放松，尾巴尖小幅上翘，不做人化笑容 | chin slightly lifted, eyes half-lidded with a lifted outer corner, ears pricked forward, whiskers relaxed, tail tip slightly raised, no human-like smile |
| 犹豫 | 一只前爪停在半空，一只耳朵前倾、另一只侧转，眼睛在两个目标之间移动，眼上方皮肤轻微蹙起，嘴闭合 | one front paw frozen mid-air, one ear forward and the other turned sideways, eyes moving between two targets, slight furrow above the eyes, mouth closed |
| 放松 | 眼睛闭合，耳朵自然朝前放松，胡须下垂放松，面部无紧绷，尾巴尖仍朝向设备 | eyes closed, ears relaxed and facing forward, whiskers lowered and relaxed, face free of tension, tail tip still angled toward the device |

画幅：两个角色均为 `--ar 1:1`（身份权重高于角度资产）。

#### 表情类负面约束

共用：`exaggerated expression`、`cartoon grin`、`wide open mouth`、`tongue out`、`angry glare`、`comedic face`、`fear`、`distress`

小林追加：`broad smile`、`laughing`、`teeth showing`、`exaggerated surprise`（「安抚」允许的只是极轻微的闭口上扬，不是笑）

团团追加：`human-like smile`、`bared teeth`、`aggressive snarl`

### 2.3 动作模板

**中文：** `[<CHAR_ID>_URL]` 同一角色，完整全身或在剧本允许的景别内，`[ACTION_CN]`，动作语言清楚，与已锁定道具的尺度一致，周末下午窗边暖光，竖屏制作参考图，无可读文字。

**English:** `[<CHAR_ID>_URL]` same character, full body or the shot size the script allows, `[ACTION_EN]`, readable body language, consistent scale with locked props, warm weekend-afternoon window light, vertical production still, no readable text

动作对照：

| 中文 | English |
|---|---|
| 蜷在沙发上假装晒太阳，只睁一只眼看向浅黄色浴巾 | curled on the sofa pretending to sunbathe, one eye open toward a pale-yellow towel |
| 耳朵压平，身体向后退，后爪碰到黑色重拍器 | ears flattened, body moving backward, rear paw touching the small black replay device |
| 抬起一只前爪按下重拍器顶部按钮，谨慎而坚定 | one front paw pressing the top button of the replay device, cautious and determined |
| 冲向地面上唯一的一根小鱼干，途中回头看小林 | sprinting toward the single dried fish on the floor, looking back at the owner |
| 一只前爪停在半空，在温毛巾和重拍器之间犹豫 | one paw frozen mid-air, hesitating between the warm towel and the replay device |
| 没有被抓取，自主走上温毛巾，身体逐渐压低 | walking voluntarily onto the warm towel, lowering the body without being grabbed |
| 被毛巾松松包住，叼着一根小鱼干离开，尾巴尖弯向重拍器 | loosely wrapped in a towel, carrying one dried fish away, tail tip curved toward the replay device |

参数：`--ar 9:16 --s 80` ＋ 角色类负面约束

小林的对应动作：拿浅黄色浴巾靠近／蹲下检查设备／提前收手／坐远双手放膝／推温毛巾／递鱼干。

### 2.4 状态模板

**中文：** `[<CHAR_ID>_URL]` 同一角色，`[STATE_CN]`，其余全部锚点不变，背景沿用浅灰纯色。

**English:** `[<CHAR_ID>_URL]` same character, `[STATE_EN]`, all other anchors unchanged, flat solid light-gray background retained

| 角色 | 状态变量 |
|---|---|
| 团团 | 开场脏污（仅左耳灰、嘴边半截鱼干、爪边一点鱼干酱）／干净 |
| 小林 | 持浴巾／持温毛巾／空手 |

脏污只允许出现在左耳、嘴边与爪边三处，不得扩散为换毛色。

## 3. 道具主参考（第一批）

> **毛巾形态规则（用户 2026-10-06）**：两条毛巾一律使用**完全展开的长方形**形态，不生成折叠、卷起、堆叠或搭挂结构——折叠形态在生成时容易出现结构错误。剧情中毛巾被拿起或推动时，用「搭在手臂上／被推向前」等动作描述，**不要写成「折叠的毛巾」**。

### 3.1 `PROP_REPLAY_DEVICE` 黑色三秒重拍器

**中文：** 三维动画风格的掌大小黑色磨砂小设备，圆角矩形机身，顶部一个可按压按钮，机身一排四个小型指示灯（当前全部熄灭），真实消费电子塑料质感，简约无品牌设计，独立产品参考图，正面三分之四视图与顶部视图，浅灰纯色背景（单一颜色平铺，无渐变、无暗角、无纹理、无场景元素、无桌面边缘），柔和均匀棚拍光，无可读文字。

**English:** 3D animated palm-sized matte-black small device, rounded rectangular body, one pressable button on top, a single row of four small indicator lights currently all off, realistic consumer-electronics plastic, minimal unbranded design, isolated product reference, front three-quarter view and top view, flat solid light-gray background (single flat color, no gradient, no vignette, no texture, no scenery, no table edge), soft even studio light, no readable text

`--ar 1:1 --s 60 --no photorealistic product shot, futuristic sci-fi gadget, glow effects, screen, brand logo, extra buttons, transparent plastic, metallic gold, oversized device, human hand, cat, watermark`

**状态模板**（增量变量，六步顺序不得颠倒；锁死后不得恢复）

| 变量 | 中文 | English |
|---|---|---|
| `[L1]` | 第一格蓝灯亮，其余熄灭 | first light blue on, others off |
| `[L2]` | 第二格蓝灯亮，第一格熄灭 | second light blue on, first off |
| `[L3]` | 第三格转为黄灯，前两格熄灭 | third light yellow, previous two off |
| `[L4]` | 最后一格红灯常亮，设备锁死，其余熄灭 | last light solid red, device locked, others off |
| `[L5]` | 四格短暂同时闪红 | all four lights briefly red together |
| `[L6]` | 完全熄灭，无任何灯光 | completely powered off, no lights |

参数：`--ar 1:1 --s 60 --no changed body, changed light count, rainbow lights, readable text, logo, extra button, duplicate device, watermark`

### 3.2 `PROP_BATH_TOWEL` 浅黄色浴巾

**中文：** 三维动画风格的一条浅黄色棉质浴巾，中等厚度毛圈织物，**完全展开平铺的长方形**，长度约为宽度的两倍，四边自然柔软、不起翘、不堆叠，家用尺寸，独立纺织品参考图，俯视平铺视角，完整看到整条毛巾的展开形态与两端边缘，浅灰纯色背景（单一颜色平铺，无渐变、无暗角、无纹理、无场景元素、无地面线），柔和自然光，无图案、无文字、无 Logo。

**English:** 3D animated single pale-yellow cotton bath towel, medium-thick terry texture, fully unfolded and laid out flat as a long rectangle roughly twice as long as it is wide, naturally soft edges with no curling and no stacking, practical home size, isolated textile reference, top-down flat-lay view showing the entire unfolded towel and both ends, flat solid light-gray background (single flat color, no gradient, no vignette, no texture, no scenery, no floor line), soft natural light, no pattern, no text, no logo

`--ar 1:1 --s 60 --no photorealistic photography, patterned towel, stripes, embroidery, multiple towels, folded towel, rolled towel, stacked fabric, draped fabric, bunched cloth, crumpled textile, wet dripping fabric, soaked cloth, text, logo, watermark`

### 3.3 `PROP_WARM_TOWEL` 温毛巾

**中文：** 三维动画风格的一条暖象牙色棉质小毛巾，比浴巾更小，**完全展开平铺的单层长方形**，柔软并带有晒过阳光的温暖感，四边自然柔软、不堆叠，独立纺织品参考图，俯视平铺视角，完整看到整条毛巾的展开形态，浅灰纯色背景（单一颜色平铺，无渐变、无暗角、无纹理、无场景元素、无地面线），柔和窗边光，无图案、无文字、无 Logo。

**English:** 3D animated single warm ivory cotton hand towel, smaller than the bath towel, fully unfolded and laid out flat in a single layer, visibly soft and warm from sunlight, naturally soft edges with no stacking, isolated textile reference, top-down flat-lay view showing the entire unfolded towel, flat solid light-gray background (single flat color, no gradient, no vignette, no texture, no scenery, no floor line), gentle window light, no pattern, no text, no logo

`--ar 1:1 --s 60 --no pale-yellow bath towel colour, photorealistic photography, patterned fabric, multiple towels, folded towel, rolled towel, stacked fabric, draped fabric, bunched cloth, soaking water, dripping wet towel, text, logo, watermark`

### 3.4 `PROP_WATER_BASIN` 浅灰色水盆

**中文：** 三维动画风格的浅灰色磨砂家用水盆，低矮宽盆沿，稳定圆润底座，真实塑料表面，空置并处于安全位置，独立产品参考图，正面三分之四视图与顶部视图，浅灰纯色背景（单一颜色平铺，无渐变、无暗角、无纹理、无场景元素、无地面线），柔和日光，轮廓清晰，无可读文字。

**English:** 3D animated shallow matte-gray household water basin, low wide rim, stable rounded base, realistic plastic surface, empty and safely placed, isolated product reference, front three-quarter view and top view, flat solid light-gray background (single flat color, no gradient, no vignette, no texture, no scenery, no floor line), soft daylight, clear silhouette, no readable text

`--ar 1:1 --s 60 --no photorealistic product shot, metal bowl, deep bucket, sharp rim, cracked plastic, overflowing water, splashing water, text, logo, watermark`

**状态模板**：`W0` 安全静置／`W1` 盆沿轻移／`W2` 水面在盆内明显晃动但未溢出／`W3` 回溯后恢复安全位置。参数 `--ar 9:16 --s 70 --no overturned basin, flood, large splash, injured animal, broken phone stand, complete liquid pour, text, logo, watermark`

### 3.5 `PROP_DRIED_FISH` 小鱼干

**中文：** 三维动画风格的一根单独的小型金棕色鱼干，形状略不规则，干燥纹理表面，独立食品道具参考图，尺寸适合猫叼走，浅灰纯色背景（单一颜色平铺，无渐变、无暗角、无纹理、无场景元素、无桌面边缘），柔和真实光线，无包装、无文字。

**English:** 3D animated single small golden-brown dried fish treat, slightly irregular natural shape, dry textured surface, isolated food prop reference, sized for a cat to carry, flat solid light-gray background (single flat color, no gradient, no vignette, no texture, no scenery, no table edge), soft realistic light, no package, no text

`--ar 1:1 --s 60 --no pile of fish, multiple treats, extra treats, giant fish, fresh raw fish, package, text, logo, watermark`

数量纪律：循环段地面恒为 1 根；结尾新增 2 根（递出 1 ＋ 毛巾旁 1）。

### 3.6 `PROP_SMARTPHONE_TRIPOD` 手机支架

**中文：** 三维动画风格的简洁黑色磨砂手机三脚支架，紧凑家用拍摄配件，稳定三脚底座，中性手机夹，不显示屏幕内容，独立产品参考图，浅灰纯色背景（单一颜色平铺，无渐变、无暗角、无纹理、无场景元素、无桌面边缘），柔和棚拍光，无可读文字。

**English:** 3D animated simple matte-black smartphone tripod stand, compact home filming accessory, stable three-legged base, neutral phone holder, no visible screen content, isolated product reference, flat solid light-gray background (single flat color, no gradient, no vignette, no texture, no scenery, no table edge), soft studio light, no readable text

`--ar 1:1 --s 60 --no photorealistic product shot, camera lens close-up, readable screen, brand logo, extra legs, unstable floating stand, text, watermark`

### 3.7 `PROP_ROBOT_VACUUM` 扫地机器人——不建立可见资产

**结论（用户 2026-10-06）**：不产出可见资产。剧本中它只以画外声出现（「画外传来扫地机器人靠近的声音」），因此本项目不为它建立主参考、状态或同框提示词，仅保留音效设计。

如日后需要出镜，按三维动画低矮圆形家用扫地机器人重新立稿；负面约束需含 `humanoid robot`、`futuristic machine`、`vacuum hose`。

## 4. 场景母版（第一批）

> **场景规则（用户 2026-10-06）**：场景资产只表现**空间本身**——不含角色、动物与任何剧情道具。道具的位置关系记录在 `01-asset-library.md` 第 5 节的跨资产关系中，在实际镜头里另行落位，不写进场景母版。
> **母版数量（用户 2026-10-06）**：本项目场景母版**只有 16:9 横屏一张**；竖屏交付母版不产出，竖屏镜头在分镜阶段依据这张母版确立的空间关系取景。
> **画幅统一**：4.1 母版与 4.2 两处关键区域一律使用 `--ar 16:9`，场景资产族内不再出现其他画幅。

### 4.1 空间总览母版（`--ar 16:9`）

**中文：** 三维动画风格的普通紧凑城市住宅客厅，周末下午，一侧窗户射入温暖自然光并带暖色反弹光，简洁布艺沙发、矮储物柜、带窄门缝的高储物柜，沙发前留出清楚的猫可通行地面，窗边地面有一小块阳光区域，生活化材质与轻微使用痕迹，完整户型与动线清晰，横屏总览构图，**无人物、无动物、无任何道具**、无可读文字。

**English:** 3D animated ordinary compact urban living room on a weekend afternoon, warm natural sunlight entering from a window on one side with warm bounce light, a simple fabric sofa, a low storage cabinet, a taller storage cabinet with a narrow door gap, clear cat-passable floor in front of the sofa, a small patch of sunlight on the floor near the window, lived-in materials with subtle wear, clear complete layout and circulation, horizontal overview composition, no people, no animals, no props of any kind, no readable text

`--ar 16:9 --s 80 --no photorealistic, photography, 2D line art, cel shading, luxury mansion, studio set, rearranged furniture, duplicate sofa, floating objects, props, household objects, floor items, readable screen, clutter blocking the floor, text, logo, watermark`

> 竖屏交付母版与「两个母版必须表达同一户型」的原要求一并撤销。若日后需要把竖屏机位也锁定为资产，可按同一横向空间描述改写画幅为 `--ar 9:16` 重新立稿。

### 4.2 关键区域

**矮柜区域（中文）：** `[ENV_LIVING_ROOM_WEEKEND_URL]` 同一客厅的矮柜区域近景，附近可见带窄门缝的高储物柜，矮柜与地面保持干净、无任何物件，家具的尺度与材质真实可信，暖色侧向阳光，无角色、无道具、无可读文字。

**Low cabinet area (English):** `[ENV_LIVING_ROOM_WEEKEND_URL]` close-up continuity reference of the low cabinet area in the same living room, the tall storage cabinet with its narrow door gap visible nearby, the cabinet and floor kept clean and free of any objects, realistic furniture scale and materials, warm side sunlight, no characters, no props, no readable text

`--ar 16:9 --s 70 --no props, household objects, floor items, floating objects, changed cabinet, changed material, readable text, watermark`

**窗边阳光区（中文）：** `[ENV_LIVING_ROOM_WEEKEND_URL]` 同一客厅的窗边区域，一小块下午阳光落在地面上，背景中的沙发与矮柜保持相同位置，地面空置无物件，柔和暖光，安全平静的居家氛围，保留猫可自主靠近的空地，无人物、无动物、无道具、无可读文字。

**Window sunlight area (English):** `[ENV_LIVING_ROOM_WEEKEND_URL]` window-side area of the same living room, a small patch of afternoon sunlight on the floor, the sofa and low cabinet staying in the same background positions, floor left empty and free of objects, soft warm light, calm safe domestic atmosphere, clear empty space for a cat to approach voluntarily, no people, no animals, no props, no readable text

`--ar 16:9 --s 70 --no props, towels, household objects, bath water, wet animal, forced restraint, changed furniture layout, floating objects, readable text, watermark`

## 5. 同框尺度板（第二批）

**前置**：同框双方必须均已锁定；未锁定资产不得进入同框图。
**多主体规则**：一个画面出现两个以上主体时，优先锁定其中一名主体并完整描述，其余作为场景内容描述；偏差明显时改用后期编辑或合成，不反复重跑。

**生产顺序（用户 2026-10-06 确认）**：本节整体**推迟**到最小资产包通过之后再执行。

**团团与道具同框：** `[ENV_LIVING_ROOM_WEEKEND_URL]` 同一客厅，`[CHAR_TUANTUAN_URL]` 团团位于矮柜旁地面，体型与沙发、矮柜、黑色小设备、浅灰水盆的比例可信，稳定中景，周末下午暖光，无可读文字。
`--ar 9:16 --s 80 --no cat breed drift, giant cat, tiny unreadable props, changed room layout, duplicate furniture, text, logo, watermark`

**小林与道具同框：** `[ENV_LIVING_ROOM_WEEKEND_URL]` 同一客厅，`[CHAR_XIAOLIN_URL]` 小林穿浅灰居家短袖、深灰家居长裤与浅色室内拖鞋，在沙发与矮柜附近站立作为全身尺度参考，手机支架与水盆位于脚边，周末下午暖光，真实居家比例，无可读文字。
`--ar 9:16 --s 80 --no changed furniture, changed footwear, fashion styling, brand logo, cropped feet, duplicate props, text, subtitles, watermark`

**猫与人同框：** 优先完整描述团团并以小林作为场景内容（或反之），两者都必须在同一空间与同一光照下；若其中一个明显偏差，改用后期合成。

## 6. 剧情关键帧（第二批，须全部锁定后生成）

要求：一张图只表达一个核心动作，不把动作开始与结束塞进同一张；视线方向清楚；适合作为视频首帧；为字幕与界面留出空间。

建议关键帧清单：脏猫从柜门钻出／第一次回溯后低头看设备／抬爪按键／冲向鱼干并回头看／小林提前收手（团团爪子停在半空）／水盆倾斜水面晃动／最后一次回溯后设备四格闪红／团团走上温毛巾／结尾叼鱼干离场并回头碰设备。

写入槽位：`outputs/<时间戳>_keyframe_cat/01-keyframes.md`。

## 7. 连续性检查

- 所有提示词都带通用负面约束，且未出现写实摄影与二维平涂相关正向词。
- 角色与道具条目均为浅灰纯色背景，未出现渐变、暗角、纹理、场景元素或地面线；场景条目未被误加这组负面约束。
- 场景条目（4.1–4.2）只描述空间本身，**未出现角色、动物或任何剧情道具**；道具位置关系只记录在台账第 5 节。
- 表情资产一律使用 §2.2 的**具体面部描述**，而非剧本动作标签；小林保持克制中性、不做大笑，团团不做人化笑容。
- 团团：橘白分区、左耳毛斑、绿项圈、金黄眼睛、四足结构在每条提示词中都受保护。
- 小林：年龄（20 岁、刚毕业）、**深色低马尾**、服装、浅色室内拖鞋在每条提示词中都受保护，且负面约束含 `middle-aged`／`older woman`／`masculine features`／`loose hair`／`high ponytail`。
- 重拍器灯色按六步顺序；锁死后不得恢复；设备数量恒为 1。
- 鱼干数量：循环段 1 根，结尾新增 2 根。
- 两个场景母版表达同一户型；窗户方向与光线一致。
- 参数一律置于末尾；版本专属参数只在参数头声明。
- 未锁定资产未出现在同框图与关键帧中。
- 屏幕文字、倒计时与字幕均标记为后期添加。

## 8. 审核结论（用户 2026-10-06）

| # | 选项 | 结论 |
|---|---|---|
| 1 | 风格载体是否使用 Moodboard | **不使用**——不加 `--p` 参数；画风由参数头的文字风格基线单独承担 |
| 2 | 温毛巾暖象牙色 | **确认** |
| 3 | 扫地机器人可见资产 | **不建立**，仅保留画外音效（见 3.7） |
| 4 | 同框尺度板优先级 | **可以推迟**到最小资产包通过之后（见第 5 节） |
| 5 | 阶段 2 是否确认 | **确认** |

### 变更记录

- **2026-10-06**：应要求移除全部 `--p`（Moodboard）参数，风格载体由「Moodboard ＋ 文字基线」改回「文字基线」单载体。
- **2026-10-06**：小林性别更正为**女性**，主参考与相关约束同步改写。
- **2026-10-06**：小林发型确认为**深色低马尾**，主参考与负面约束同步改写。
- **2026-10-06**：两条毛巾主参考改为**完全展开的长方形**形态，移除全部折叠视图，新增 `folded towel`／`rolled towel`／`stacked fabric`／`draped fabric`／`bunched cloth` 类负面约束；第 4.3 节窗边区域同步改为「完全展开平铺」。
- **2026-10-06**：补齐第 4.3 节两处关键区域的英文版（此前只有中文，违反本规范的双语要求）。
- **2026-10-06**：新增 0.3 背景规则——角色与道具参考图统一改为**浅灰纯色背景**；负面约束基线补充角色与道具专用的 `gradient background`／`vignette`／`textured backdrop`／`scenery`／`floor line`／`environmental props`。
- **2026-10-06**：确立**场景规则**——场景资产只表现空间本身，移除 4.1、4.2、4.3 中的全部道具描述（重拍器、水盆、手机支架、温毛巾、鱼干碎屑），并新增 `props`／`household objects` 类负面约束。道具落位改由台账第 5 节的跨资产关系承载。
- **2026-10-06**：场景母版**只保留 16:9 横屏一张**，撤销竖屏交付母版；原 4.3 关键区域顺延为 4.2。
- **2026-10-06**：§2.2 表情模板重写——剧本动作标签（如「准备执行」）不能直接进提示词，改为**可执行的面部特征描述**并补齐中英对照；新增「表情基调」规则（小林以克制中性为主、几乎无笑容）、参数行与表情类负面约束。
- **2026-10-06**：扫地机器人不再产出可见资产。

### 风险提示（因移除 Moodboard）

文字基线单独承担画风，**风格漂移风险高于有 Moodboard 时**。缓解手段：严格使用参数头的风格基线与负面约束；首批出图后先做一次画风抽检，偏离则先修基线，不要继续批量生产。
