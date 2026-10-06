# H3 视频生成提示词

## 项目级约束

- 模式：I2VA 为主；回溯镜头使用 FL2VA 或同构首尾帧剪辑；无参考图镜头可用 T2VA。
- 画幅：9:16；中文；每镜 5—10 秒；无画外音乐（N/A）。
- 团团锁定：橘白短毛、左耳深色毛、绿色项圈；开场灰尘为临时状态。
- 小林锁定：大学刚毕业的萌宠博主，温柔有爱心；浅灰/米白上衣、深色长裤、室内拖鞋；主要局部和半身，允许少部分自然露脸。
- 倒计时和字幕由后期添加；不生成三视图、额外人物、额外猫或额外鱼干。

## 镜头提示词

### S01_SH01 | UNIT_001 | 8s | T2VA

integrated_multimodal_description: [Shot 1] 周末下午普通客厅，矮柜和储物柜门缝在后景，手机支架与灰色水盆靠近矮柜，低机位中广角缓慢推近，左侧窗边暖光稳定，地面留出猫的活动区，不生成可读倒计时。
overall_soundscape: 安静客厅底噪与轻微设备声，无对白。 non_diegetic_music: N/A

### S01_SH02 | UNIT_001 | 7s | I2VA

integrated_multimodal_description: [Shot 1] 从首帧继续，保留橘白短毛猫团团、左耳深色毛、绿色项圈。开场左耳临时沾灰，嘴边半截小鱼干，爪边有鱼干酱；团团从门缝钻出，叼鱼干跳上沙发并蜷成晒太阳姿势。低位中近景轻跟，保持矮柜、支架、水盆和左侧暖光关系。
overall_soundscape: 轻爪步、鱼干摩擦声、客厅底噪，无对白。 non_diegetic_music: N/A

### S01_SH03 | UNIT_002 | 7s | I2VA

integrated_multimodal_description: [Shot 1] 团团蜷在沙发；小林是大学刚毕业的萌宠博主，穿浅灰或米白上衣、深色长裤、室内拖鞋，少部分自然露脸，主要显示手部和半身。她举浅黄色浴巾说 <d>[Chinese]三分钟后开拍。只擦一下，不泡水。</d> 团团睁一只眼、压耳后撤，后爪碰黑色重拍器。固定中景、左侧暖光。
overall_soundscape: 温和中文短句、浴巾摩擦声、客厅底噪。 non_diegetic_music: N/A

### S02_SH01 | UNIT_002 | 8s | I2VA

integrated_multimodal_description: [Shot 1] 猫爪特写，后爪触碰黑色三秒重拍器，第一格指示灯变蓝；浴巾和小林裤腿在背景虚化，左侧暖光与蓝灯形成对比，猫身压低紧张。固定特写。
overall_soundscape: 清晰一声“滴”，无对白。 non_diegetic_music: N/A

### S02_SH02 | UNIT_003 | 8s | FL2VA

keyframe_description: 0秒为蓝灯亮、浴巾在小林手中、团团在沙发边；8秒为浴巾、团团和同一处鱼干碎屑回到触发前位置。
transition_description: 用同构硬切和短反向声音表达三秒回溯，不生成长段倒放，暖光和空间关系不变。
overall_soundscape: 短反向电子声回到客厅底噪，无对白。 non_diegetic_music: N/A

### S02_SH03 | UNIT_003 | 10s | I2VA

integrated_multimodal_description: [Shot 1] 回溯后团团看重拍器再看未察觉的小林，抬爪按键；[Shot 2] 5秒处同构回溯，团团和碎屑归位，团团压低身体并扫尾一次。保持左耳深色毛和绿色项圈，字幕后期添加。
overall_soundscape: 两次短“滴”声，中间短暂停顿，无对白。 non_diegetic_music: N/A

### S03_SH01 | UNIT_004 | 8s | I2VA

integrated_multimodal_description: [Shot 1] 小林蹲在黑色设备旁握住边缘，穿锁定居家服，少部分露脸；团团在侧后景观察。低机位中近景，矮柜、支架、水盆和暖光位置不变。
overall_soundscape: 手指轻触塑料，画外扫地机器人声渐近，无对白。 non_diegetic_music: N/A

### S03_SH02 | UNIT_004 | 7s | I2VA

integrated_multimodal_description: [Shot 1] 猫视角中近景，同一根鱼干在前景，小林手仍在设备旁；扫地机器人声变近，小林回头，团团压低重心锁定鱼干。慢横移跟随视线，不出现机器人。
overall_soundscape: 画外机器人由远到近，猫呼吸声，无对白。 non_diegetic_music: N/A

### S04_SH01 | UNIT_005 | 8s | I2VA

integrated_multimodal_description: [Shot 1] 团团从原位置低位冲向同一根鱼干，叼起后转身用一只爪按重拍器，低机位侧向短跟拍，结束在按键接触瞬间，鱼干数量保持一根。
overall_soundscape: 爪步、鱼干脆响、一声“滴”，无对白。 non_diegetic_music: N/A

### S04_SH02 | UNIT_005 | 5s | FL2VA

keyframe_description: 0秒团团刚按键、第二格蓝灯亮；5秒团团和鱼干回到冲刺前位置，第三格由蓝转黄。
transition_description: 同构短回溯，不增加鱼干，不生成长倒放；字幕仅后期添加。
overall_soundscape: 短“滴”与低沉过渡音，无对白。 non_diegetic_music: N/A

### S05_SH01 | UNIT_006 | 8s | I2VA

integrated_multimodal_description: [Shot 1] 团团从同一位置扑来，小林已看见动作并提前收手，猫爪停在半空；中景缓慢推近并停住，黄色第三格灯在背景，窗侧暖光不变。
overall_soundscape: 短爪声后刻意安静，无对白。 non_diegetic_music: N/A

### S05_SH02 | UNIT_006 | 7s | I2VA

integrated_multimodal_description: [Shot 1] 双主体中近景，小林少部分自然露脸，温和看向团团并说 <d>[Chinese]你在重拍？</d> 她把浅黄色浴巾放地上，不抓猫，动作低压稳定。
overall_soundscape: 温和中文台词、浴巾落地声、客厅底噪。 non_diegetic_music: N/A

### S06_SH01 | UNIT_006 | 10s | I2VA

integrated_multimodal_description: [Shot 1] 小林拿干净温毛巾铺到窗边阳光区，说 <d>[Chinese]不抓你。擦一下，晒太阳。</d> 主要显示手部和半身、少部分露脸，镜头缓慢横移跟随毛巾，团团在安全距离观察。
overall_soundscape: 温和中文台词、织物铺展声、安静室内，无音乐。 non_diegetic_music: N/A

### S06_SH02 | UNIT_007 | 8s | I2VA

integrated_multimodal_description: [Shot 1] 团团接近第三格黄灯设备，轻触一次，黄灯闪烁后立即收爪退半步；温毛巾在远处阳光区可见，受控中近景。
overall_soundscape: 低沉提示音、轻爪触碰声，无对白。 non_diegetic_music: N/A

### S07_SH01 | UNIT_007 | 8s | I2VA

integrated_multimodal_description: [Shot 1] 小林把浅黄色浴巾推到画外并后退一步，保持深色长裤和室内拖鞋；团团在画面中线，不被追赶。固定中景，空间关系不变。
overall_soundscape: 浴巾滑地声、轻脚步声，无对白。 non_diegetic_music: N/A

### S07_SH02 | UNIT_007 | 8s | I2VA

integrated_multimodal_description: [Shot 1] 低机位特写，小林室内拖鞋轻碰灰色水盆盆沿，水盆向手机支架和团团活动区移动，浅水面只水平晃动不倾倒，支架保持直立，镜头小幅横移跟盆沿。
overall_soundscape: 塑料摩擦声、水平水面晃动声，无对白。 non_diegetic_music: N/A

### S08_SH01 | UNIT_008 | 7s | I2VA

integrated_multimodal_description: [Shot 1] 团团停住，先看移动的水盆，再看最后一格红灯设备；保持橘白短毛、左耳深色毛、绿色项圈，缓慢推近到猫未触碰设备前停住。
overall_soundscape: 水面余波与猫呼吸声，无对白。 non_diegetic_music: N/A

### S08_SH02 | UNIT_008 | 7s | FL2VA

keyframe_description: 0秒团团爪子靠近最后红灯、水盆接近活动区；7秒水盆回到安全位置，四格红灯同时闪红后熄灭，团团再按无反应。
transition_description: 一次清晰按键、长“滴——”、同构归位和灯灭；不生成泼水或湿猫。
overall_soundscape: 长提示音尾巴、水面归于平静，无对白。 non_diegetic_music: N/A

### S09_SH01 | UNIT_009 | 8s | I2VA

integrated_multimodal_description: [Shot 1] 小林低位移走灰色水盆，黑色设备保持熄灭，服装和少部分露脸策略不变，客厅恢复平稳中景。
overall_soundscape: 盆底滑地声、安静客厅，无对白。 non_diegetic_music: N/A

### S09_SH02 | UNIT_009 | 7s | I2VA

integrated_multimodal_description: [Shot 1] 小林坐远，双手放膝盖，把温毛巾向团团推近后停手；团团站在熄灭设备旁观察毛巾。低位中景轻微拉远，留出选择空间。
overall_soundscape: 织物滑地声、轻呼吸，无对白。 non_diegetic_music: N/A

### S10_SH01 | UNIT_010 | 7s | I2VA

integrated_multimodal_description: [Shot 1] 脚部特写，团团先把一只前爪放上温毛巾，停顿后压低身体；黑色设备在后方虚化且保持熄灭，暖光柔和固定。
overall_soundscape: 爪落棉布声、轻猫呼吸，无对白。 non_diegetic_music: N/A

### S10_SH02 | UNIT_010 | 6s | I2VA

integrated_multimodal_description: [Shot 1] 团团低卧并闭眼，小林手部慢慢入画，只擦背和爪边，不碰头、不抱起；尾巴尖仍朝向熄灭设备。安静中近景。
overall_soundscape: 织物擦拭毛发声、平稳猫呼吸，无对白。 non_diegetic_music: N/A

### S11_SH01 | UNIT_011 | 6s | I2VA

integrated_multimodal_description: [Shot 1] 清洁结束，团团被浅黄色浴巾松松包住；小林少部分自然露脸，递一根小鱼干，团团平静叼走，不挣扎，服装保持不变。
overall_soundscape: 鱼干轻响、安静室内，无对白。 non_diegetic_music: N/A

### S11_SH02 | UNIT_011 | 6s | I2VA

integrated_multimodal_description: [Shot 1] 团团走两步回头碰熄灭设备，无蓝光无滴声；小林把第二根鱼干放在毛巾旁，团团看按钮再看鱼干，叼走离开画面，尾巴尖仍朝设备弯着；结尾字幕后期，CUT TO BLACK。
overall_soundscape: 轻爪步、鱼干拾取声、无设备声、无对白。 non_diegetic_music: N/A

## 全局禁止项

- 不出现额外人物、额外猫、额外鱼干或额外设备。
- 不改变小林服装、团团左耳深色毛和绿色项圈。
- 红灯锁死后重拍器永不重新亮起。
- 不生成水盆完整倾倒、猫被浸湿、窒息、惊吓或强行抓抱。
