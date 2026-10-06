# 场景资产库：Midjourney 双语提示词

> 来源：07_final_screenplay.md及角色设定中的空间连续性要求。
> 使用范围：周末下午客厅、固定机位、关键区域、光线和角色/道具尺度关系。
> 目标：建立可循环剪辑的场景母版，不让 Midjourney 自行改变家具布局。

## 场景固定锚点

- 竖屏短视频空间，主要画幅 9:16。
- 普通生活化客厅，不做豪宅、摄影棚或样板间。
- 沙发、矮柜、储物柜、窗户/阳光区保持稳定相对位置。
- 手机支架和灰色水盆位于小林脚边，靠近矮柜。
- 黑色重拍器位于矮柜旁地面，鱼干位于角色可到达的地面位置。
- 温毛巾铺在窗边阳光处；浴巾可被小林拿入或推到画外。
- 回溯通过同构镜头和物件归位表现，不生成完整倒放效果。
- 倒计时、字幕、灯光数值和台词后期添加，场景图不依赖可读文字。

## 1. 客厅场景母版：竖屏建立镜头

### 中文正向提示词

周末下午的普通紧凑客厅，竖屏家庭喜剧场景设计，一侧窗户射入温暖自然阳光，简洁沙发、矮储物柜、带窄门缝的高储物柜，沙发前有清晰地面空间，黑色手机支架和浅灰色水盆位于矮柜附近、相当于人的脚边位置，黑色重拍器放在矮柜旁地面，窗边有暖象牙色毛巾区域，真实居家材质，空间布局稳定，中远景平视构图，为竖屏保留足够上下边界，无人物、无动物、无可读文字。

### English MJ prompt

ordinary compact living room on a weekend afternoon, vertical home-comedy production design, warm natural sunlight entering from a window on one side, a simple sofa, a low storage cabinet, a taller storage cabinet with a narrow door gap, clear floor space in front of the sofa, a small black smartphone tripod and a shallow gray water basin positioned near the low cabinet where a person's feet would be, a small black replay device on the floor beside the cabinet, warm ivory towel area near the window, realistic domestic materials, stable spatial layout, medium-wide eye-level composition, enough floor and ceiling margin for vertical framing, no people, no animals, no readable text

### 中文负面约束

不要豪宅、摄影棚、家具重排、重复沙发、漂浮物体、可读屏幕、字幕、Logo、水印，不要杂物堵住地面动线。

### English negative prompt and parameters

--no luxury mansion, studio set, rearranged furniture, duplicate sofa, floating objects, readable screen, subtitles, logo, watermark, clutter blocking the floor --ar 9:16 --stylize 70

## 2. 固定中景机位 / Fixed medium shot

### 中文模板

[SCENE_REFERENCE_IMAGE_URL] 同一客厅布局、同一沙发、同一矮柜、同一储物柜、同一窗户方向、同一手机支架和灰色水盆位置、同一黑色重拍器位置，从正面固定中景拍摄，机位高度介于猫眼高度和人的膝盖下方，周末下午稳定暖光，沙发和矮柜之间保留猫可通行的地面，生活化写实，无人物、无动物、无文字。

### English template

[SCENE_REFERENCE_IMAGE_URL] same ordinary living room, same sofa, same low cabinet, same storage cabinet, same window direction, same smartphone tripod and gray basin positions, same black replay device location, fixed medium shot from the front at cat-eye to low human-knee height, calm warm weekend afternoon light, clear floor for a cat to move between sofa and cabinet, practical domestic realism, no people, no animals, no text

### 中文负面约束

不要改变机位、家具布局、镜头高度或窗户方向，不要镜头变形、豪宅化、杂物堆积、可读屏幕、字幕、Logo 或水印。

### English negative prompt and parameters

--no changed camera angle, changed furniture layout, changed window direction, zoom distortion, wide luxury room, clutter, readable screen, subtitles, logo, watermark --ar 9:16 --stylize 55

## 3. 矮柜与重拍器区域 / Low cabinet area

### 中文正向提示词

同一客厅的矮柜区域，近景连续性参考，附近可见带窄门缝的储物柜，黑色重拍器位于矮柜旁地面，同一地面区域有少量小鱼干碎屑，画面边缘可见手机支架和浅灰色水盆，脚底接触和物件比例真实，暖色侧向阳光，无角色、无可读文字。

### English MJ prompt

same living-room low cabinet area, close continuity reference, narrow storage cabinet door gap nearby, matte-black replay device on the floor beside the cabinet, small dried-fish crumbs on the same floor zone, smartphone tripod and shallow gray water basin visible near the edge of the frame, realistic floor contact and practical scale, warm side sunlight, no characters, no readable text

### 中文负面约束

不要重复重拍器、设备变色、额外鱼干、漂浮道具、改变矮柜、文字、Logo 或水印。

### English negative prompt and parameters

--no duplicate replay device, changed device color, extra fish, floating props, changed cabinet, text, logo, watermark --ar 4:3 --stylize 50

## 4. 窗边温毛巾区域 / Window towel area

### 中文正向提示词

同一普通客厅的窗边区域，暖象牙色温毛巾铺在一小块下午阳光地面上，背景中的沙发和矮柜保持相同位置，柔和暖光，安全平静的居家氛围，真实织物和地面纹理，保留猫可以自主靠近的空地，无人物、无动物、无可读文字。

### English MJ prompt

same ordinary living room beside the window, a warm ivory hand towel spread on a small patch of afternoon sunlight on the floor, the sofa and low cabinet remaining in the same background positions, soft warm light, calm safe domestic atmosphere, realistic fabric and floor texture, clear empty space for a cat to approach voluntarily, no people, no animals, no readable text

### 中文负面约束

不要洗澡水、湿动物、强行控制、家具布局变化、图案毛巾、文字、Logo 或水印。

### English negative prompt and parameters

--no bath water, wet animal, forced restraint, changed furniture layout, patterned towel, text, logo, watermark --ar 9:16 --stylize 55

## 5. 水盆危机空间状态 / Basin safety state

### 中文正向提示词

[SCENE_REFERENCE_IMAGE_URL] 同一客厅中景构图、同一矮柜、同一手机支架和黑色重拍器位置，浅灰色水盆在人的脚边区域轻微倾斜，水面晃动但保持在盆内，猫可安全避开的布置，不生成完整泼洒，周末下午暖光，真实物理连续性参考，无人物、无动物、无文字。

### English MJ prompt

[SCENE_REFERENCE_IMAGE_URL] same living-room medium composition, same low cabinet, smartphone tripod and black replay device positions, shallow gray water basin slightly tilted near the human foot area, water surface wobbling but contained, cat-safe staging, no complete spill, warm afternoon light, practical physical continuity reference, no people, no animals, no text

### 中文负面约束

不要洪水、大飞溅、损坏手机支架、溺水、受伤动物、空间布局变化、镜头抖动效果、文字、Logo 或水印。

### English negative prompt and parameters

--no flood, large splash, broken phone tripod, drowning, injured animal, changed layout, camera shake effect, text, logo, watermark --ar 9:16 --stylize 45

## 6. 角色与场景同框尺度参考 / Character scale boards

### 团团同框

中文： [SCENE_REFERENCE_IMAGE_URL] 同一客厅布局，一只保持橘白短毛、左耳深色毛斑和绿色项圈的团团，体型与沙发、矮柜、重拍器和浅灰色水盆比例可信，猫位于矮柜旁地面，稳定中景构图，周末下午暖光，生活化家庭喜剧，无可读文字。

English: [SCENE_REFERENCE_IMAGE_URL] same living room layout, realistic orange-and-white short-haired cat with the same dark left-ear marking and green collar, cat-sized relative to the sofa, low cabinet, replay device and shallow gray water basin, cat near the floor beside the cabinet, stable medium composition, warm weekend afternoon light, natural domestic comedy, no readable text

中文负面约束：不要猫种漂移、房间布局变化、巨型猫、比例过小而不可读的道具、重复家具、文字、Logo 或水印。

English negative prompt and parameters: --no cat breed drift, changed room layout, giant cat, tiny unreadable props, duplicate furniture, text, logo, watermark --ar 9:16 --stylize 60

### 小林同框

中文： [SCENE_REFERENCE_IMAGE_URL] 同一客厅布局，普通居家男性穿浅灰居家短袖、深灰家居长裤和浅色室内拖鞋，在沙发和矮柜附近站立作为全身尺度参考，手机支架和灰色水盆位于脚边，周末下午暖光，真实居家比例，无可读文字。

English: [SCENE_REFERENCE_IMAGE_URL] same living room layout, ordinary homebody man in light gray home T-shirt and dark charcoal lounge pants, light neutral indoor slippers, full-body scale reference standing near the sofa and low cabinet, smartphone tripod and gray water basin near his feet, warm afternoon light, realistic domestic proportions, no readable text

中文负面约束：不要家具变化、时尚造型、品牌 Logo、裁掉脚部、重复道具、文字、字幕或水印。

English negative prompt and parameters: --no changed furniture, fashion styling, brand logo, cropped feet, duplicate props, text, subtitles, watermark --ar 9:16 --stylize 55

## 7. 场景连续性检查

- 每次生成都引用同一张场景母版图，或复制同一组空间描述。
- 先锁定家具布局，再加入角色和道具；不要在动作提示词中重新描述一个全新客厅。
- 检查沙发、矮柜、手机支架、水盆和重拍器的相对位置。
- 检查窗户阳光方向是否一致；温毛巾区域不能在镜头间漂移。
- 不让 MJ 生成字幕、倒计时或可读设备文字；这些内容留给后期。

