---
name: minimax-h3-storyboard-prompt
description: Turn a user's storyboard or shot list into paste-ready MiniMax H3 prompts, then save the result as a timestamped Markdown file in the workspace outputs folder. Use when the user provides a storyboard and wants H3 prompts; do not use for unrelated video models.
---

# MiniMax H3 storyboard prompt writer

When the user provides a storyboard, turn it directly into usable MiniMax H3 prompts. Do not require a special input template or ask for details that can be inferred. Preserve the intended story, action, dialogue, and visual identity; fill only the production details needed to make the shots filmable. Do not invent plot beats or important props.

Read [the verified H3 documentation notes](references/h3-docs.md) when applying model limits or choosing between text, frame, and reference modes.

## Build the prompt

- Parse shot numbers, time ranges, locations, characters, actions, dialogue, framing, camera movement, mood, and transitions. Resolve obvious continuity gaps using the storyboard context.
- Convert abstract directions into visible, time-ordered actions. Keep who does what, where they look, and how the camera moves unambiguous. Where a shot has multiple beats, describe them in order instead of stacking contradictory actions.
- Carry recurring character appearance, wardrobe, setting, lighting, and style forward consistently across prompts. Refer to each available reference asset by its supplied label (for example, “图1人物参考”); do not claim an asset exists when none was supplied.
- Use concise natural-language instructions. State the desired subject and action first, then framing/camera, environment and light, visual style, and sound or spoken dialogue when relevant. Include aspect ratio and intended duration in the prompt when they are useful creative constraints, but keep API settings separately identified.
- Preserve user-provided dialogue verbatim. Specify which character speaks, delivery, and language when given or clear from context. Do not add narration, music, subtitles, logos, or on-screen text unless requested or present in the storyboard.
- Keep each prompt below the official 7,000-character limit. Prefer concrete positive direction over long negative lists.

## Choose clip boundaries

H3 generates one 4–15 second video per request. If the storyboard is longer, or contains distinct scenes that should be edited together, make one prompt per logical clip and keep each clip within 4–15 seconds. Preserve the requested shot order and provide a short continuity note only when needed to keep adjacent clips consistent. Do not force a multi-minute storyboard into one prompt. For a single short scene, make one prompt that describes its shot progression.

If shot timings are provided, preserve them when feasible and use an integer duration that fits H3's supported range. For a clip with several beats, allocate the time in the prompt as a simple progression; do not imply frame-accurate timing. If a requested clip is under 4 seconds, combine it with a neighboring beat only when the story still reads naturally, otherwise flag the minimum-duration constraint and offer the closest practical grouping. If a segment exceeds 15 seconds, split it at a meaningful action or edit point.

## Output

Default to Chinese. For each clip, show:

1. A short clip label with source shot numbers.
2. Generation settings: model `MiniMax-H3`, integer duration (4–15 seconds), resolution (`768P` or `2K`), and ratio (`21:9`, `16:9`, `4:3`, `1:1`, `3:4`, or `9:16`). Infer sensible settings from the storyboard; use 16:9 for an unspecified landscape/cinematic scene and 9:16 for an unspecified vertical/social scene. These are API/UI settings, not JSON unless the user asks for an API payload.
3. One paste-ready prompt in a fenced block. Keep it a coherent instruction, not commentary about prompt engineering.

Treat the storyboard as text-to-video by default. If the user supplied or clearly intends a start/end image, identify first/last-frame mode and preserve those references; if reference images, video, or audio are intended to guide content, identify multimodal-reference mode instead. State which asset roles are needed, but do not fabricate URLs or assets. If the user's inputs or requested settings create an incompatible combination, briefly note the specific conflict and give a valid alternative.

Use the requested output language when the user specifies one. If the storyboard is ambiguous but still actionable, make a reasonable choice and label only that assumption; ask a question only when ambiguity would materially change the result.

## Save the deliverable

After generating the prompts, save the complete result as a UTF-8 Markdown file in the active workspace's `outputs/` directory. Create `outputs/` if it does not exist. Do not save inside the skill package.

Name each file `<project-name>_<YYYYMMDD>_<HHmmss>.md`, using the current local time. Use an explicitly provided project name when available; otherwise infer a short project name from the storyboard title or central story. If neither is available, use the workspace folder name. Keep readable Chinese characters, replace filename-invalid characters with hyphens, trim trailing spaces and periods, and ensure the name is not empty. If a file with the same name already exists, append a numeric suffix rather than overwrite it.

The Markdown file should contain the clip labels, recommended generation settings, and the exact paste-ready prompt blocks shown to the user. Keep any continuity notes or material assumptions that affect prompt use. After saving, give the user a link to the file and a brief confirmation; do not duplicate the entire file content in chat unless requested. If the current platform cannot write workspace files, return the same Markdown content in chat and clearly state that it could not be saved to `outputs/`.
