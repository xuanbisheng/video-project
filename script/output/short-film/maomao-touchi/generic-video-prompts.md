# 《再来一次，我就洗澡》通用视频提示词

> 来源：`07_final_screenplay.md`
> 
> 目标：抖音竖屏短片，9:16，约 3 分钟，24fps。
> 
> 适用：模型无关的视频生成工作流。每镜头建议生成 4-8 秒，再用剪辑完成回溯、重复和字幕。

## 视觉与连续性总纲

- 资产：`CHAR_001` 团团（橘白短毛猫、左耳深色毛、绿色项圈）；`CHAR_002` 小林（浅灰家居服，以手部/半身/画外声为主）；`PROP_001` 黑色单按钮回溯器；`PROP_002` 浅黄色浴巾；`PROP_003` 米白温毛巾；`PROP_004` 金棕色小鱼干；`PROP_005` 黑色扫地机器人；`ENV_001` 周末下午客厅。
- 光线：落地窗右侧暖金色自然光，室内柔和阴影；回溯时瞬间加入冷蓝闪光和轻微运动拖影。
- 摄影：生活化电影质感，35mm/50mm 视角，低机位贴近猫的视线；重复回溯尽量保持同一构图。
- 安全：不出现强行浸水、受伤、虐待、痛苦挣扎；清洁动作轻柔。
- 字幕：`只有我记得。`、`今天先不重来。` 后期叠加，不让模型生成文字。

## 分镜与提示词

### S01｜0:00-0:06｜储物柜门缝

- 景别/运动：低机位近景，固定，轻微呼吸感。
- 动作：团团从门缝钻出，左耳沾灰，嘴角挂半截鱼干。

```text
Vertical cinematic close-up in a warm weekend-afternoon living room, TuanTuan the same orange-and-white shorthair cat with dark fur on the left ear and a green collar slowly squeezing out of a narrow storage-cabinet door gap, dusty left ear, half a dried fish at the corner of the mouth, low cat-eye camera, soft golden window light, realistic fur and household texture, playful secretive mood, stable composition
```

负面：`extra cats, changed fur pattern, missing collar, deformed paws, text, watermark, injury, horror lighting`

### S02｜0:06-0:12｜沙发伪装

- 景别/运动：中近景，轻微跟随。
- 动作：团团跳上沙发，蜷成一团，装作无事。

```text
TuanTuan jumps onto the fabric sofa and curls into a compact innocent-looking ball, pretending nothing happened, the same living-room layout and afternoon sunlight, medium close-up from sofa height, gentle handheld micro-motion, warm domestic comedy, realistic cat movement, consistent orange-white fur and green collar
```

### S03｜0:12-0:20｜浴巾与按钮

- 景别/运动：中景到近景，缓慢推近。
- 动作：小林手持浅黄色浴巾入画；团团耳朵压平后退，撞到矮柜旁回溯器，蓝灯亮起。

```text
The calm owner's hand and forearm in light gray home clothes enter frame holding a pale-yellow bath towel; TuanTuan flattens its ears and backs away, bumps the small black one-button rewind device beside the low cabinet, the blue indicator suddenly glows, slow push-in, warm afternoon light interrupted by a brief cool blue flash, no force, no fear injury
```

### S04｜0:20-0:25｜第一次回溯

- 景别/运动：与 S03 完全同构图，先定格后倒放。
- 动作：团团、浴巾和鱼干碎屑回到三秒前位置。

```text
Exact match cut of the previous composition: TuanTuan, the pale-yellow towel, and tiny dried-fish crumbs move backward three seconds to their previous positions, the blue device light pulses once, brief cool-blue motion trail, fixed camera, clean readable rewind effect, no new objects
```

### S05｜0:25-0:32｜主动按键

- 景别/运动：低机位中近景，固定。
- 动作：小林再次伸手，团团主动抬爪按下按钮。

```text
In the exact same living-room composition, the owner's hand reaches with the pale-yellow towel, TuanTuan deliberately raises one front paw and presses the single button on the black rewind device, blue light turns on, low cat-eye camera, restrained comic timing, realistic paw contact, consistent prop position
```

### S06｜0:32-0:38｜第二次回溯

```text
Repeat the exact previous framing and reverse the action by three seconds: TuanTuan, the towel and the owner's hand return to their earlier positions, one blue pulse and a soft electronic beep, fixed camera, clean temporal loop, no morphing
```

后期：此处叠加字幕“只有我记得。”

### S07｜0:38-0:52｜逃避蒙太奇

- 景别/运动：三个 4 秒短镜头，同一轴线，固定构图。
- 动作：浴巾出现—按键—回溯；扫地机器人转来—按键—回溯。

```text
Fast comedic montage in the same warm living room: first the towel enters and TuanTuan presses the rewind button, then the low black robot vacuum turns toward the cat and TuanTuan presses the button again; repeatable match-cut composition, blue flash at each reset, crisp physical actions, playful pacing, stable cat design, no text
```

### S08｜0:52-0:58｜胜利姿势

```text
After the second reset, TuanTuan lies on its back on the living-room floor, all four paws relaxed, tail flicking once like a tiny victory declaration, the owner stops in the background, low wide shot, warm sunlight, comic pause, realistic fur and anatomy
```

### S09｜0:58-1:05｜鱼干诱饵

```text
The owner's hand places one small golden-brown dried fish beside the black rewind device and slowly retreats, TuanTuan watches from the sofa edge, medium shot, warm afternoon light, clear spatial relationship between cat, fish and device, quiet anticipation
```

### S10｜1:05-1:12｜第一次进货

```text
TuanTuan gently grabs the dried fish, looks back at the owner, then reaches down and presses the rewind button with one paw, blue light pulse, three-quarter low angle, deliberate comedic timing, no sudden camera movement, fixed living-room layout
```

### S11｜1:12-1:20｜鱼干回位

```text
The room rewinds three seconds: the dried fish returns beside the device while the fish remains in TuanTuan's mouth, exact match composition, blue flash, the cat's eyes widen with delighted realization, clean readable temporal gag
```

### S12｜1:20-1:31｜无限鱼干蒙太奇

```text
Comedic repeated montage: TuanTuan takes the same dried fish, presses the button, resets, and keeps the fish in its mouth; each loop adds another visible fish at the cat's cheeks, the floor fish always returns to the same spot, consistent framing and lighting, escalating but physically readable comedy
```

### S13｜1:31-1:38｜主人数数

```text
Close-up on TuanTuan guarding a growing mouthful of dried fish with both front paws, back turned toward the owner; the owner's voice counts from off screen, shallow depth of field, warm household light, proud guilty expression, no text generated
```

### S14｜1:38-1:46｜小林守住盒子

```text
The owner crouches beside the low cabinet and places one palm firmly but gently over the edge of the black rewind device; TuanTuan approaches from the same position, medium low-angle two-subject shot, warm light, tension played for comedy, no grabbing or harm
```

### S15｜1:46-1:53｜手掌仍在

```text
After the three-second rewind, the owner's hand remains pressed on the device edge while the room returns to the previous state, exact composition, blue pulse, TuanTuan approaches again, temporal continuity clearly visible
```

### S16｜1:53-2:00｜抓住规律

```text
On the second and third loops, the owner withdraws his hand early; TuanTuan's paw stops in midair before touching the device, the owner calmly says that it is not running fast but restarting fast, medium close-up alternating between paw and hand, warm gentle tone
```

### S17｜2:00-2:08｜温毛巾出现

```text
The owner sets aside the pale-yellow bath towel and places a warm cream towel in a patch of sunlight, then sits far away with both hands on his knees, wide vertical composition, inviting golden light, clear distance and non-threatening posture
```

### S18｜2:08-2:16｜按钮颜色变化

```text
TuanTuan looks from the warm towel to the rewind device, touches the button and retracts its paw; it tries again, the indicator changes from blue to yellow and the device gives a low warning tone, close-up on paw and light, suspenseful but gentle, no sparks
```

### S19｜2:16-2:24｜自己走来

```text
The owner pushes the bath towel farther away and remains still; TuanTuan watches him, then slowly walks to the warm cream towel, placing one front paw first and lowering its body, side-on medium shot, golden sunlight, cautious trust, realistic cat behavior
```

### S20｜2:24-2:32｜温和清洁

```text
The owner gently wipes only TuanTuan's back and paws with the warm towel, TuanTuan closes its eyes while one ear stays pointed toward the rewind device, close two-shot, soft golden backlight, calm domestic intimacy, no water, no force, no distress
```

### S21｜2:32-2:39｜红灯安静

```text
The black rewind device glows red and becomes quiet in the background; TuanTuan is softly wrapped in the towel like an unwilling warm bundle, the owner finishes cleaning, medium close-up, warm sunlight, affectionate comedy
```

### S22｜2:39-2:47｜按钮与鱼干

```text
The owner offers one dried fish; TuanTuan takes it and walks away with its chin raised, two small steps across the warm floor, side tracking shot, relaxed triumphant mood, consistent collar and fur
```

### S23｜2:47-3:00｜今天先不重来

```text
After two steps TuanTuan secretly reaches one paw toward the rewind device; the owner's hand covers the paw before contact and slides another dried fish forward, TuanTuan looks at the button, then at the fish, chooses the fish and walks out of frame, tail tip still curves toward the device, slow gentle push-in, warm final sunlight, hold on the empty room and cut to black
```

后期：叠加字幕“今天先不重来。”

## 声音与剪辑建议

- 环境声：周末客厅的轻微室内底噪、窗外远处城市声、扫地机器人低速电机声。
- 回溯声：每次按钮触发一个短促“滴”，接极轻的反向空气声；不要使用巨大爆炸声。
- 音乐：轻快木琴/拨弦喜剧动机，S14 后降低，S19 起转为温暖稀疏和弦。
- 回溯制作：保持 S03/S04、S05/S06、S10/S11、S14/S15 的同构图，优先用倒放、跳剪、遮罩和声效完成。
