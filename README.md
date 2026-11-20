# gta6-clipper-01 — GTA 6 clip for the most YouTube views

Entry for make.fun bounty
[`gta6-clipper-01`](https://make.fun/bounty/gta6-clipper-01): a short vertical
clip of GTA VI, cut by an AI agent, that rides the launch-week hype and then
tells viewers they can make money on make.fun by making clips with AI.
Places go by the video's YouTube views; the 20 most watched share $500
(1st place $100).

## The clip

`gta6-clipper-01-final.mp4` — 12 seconds, 1080×1920 (vertical, a YouTube
Short), H.264 + AAC.

**The moment (chosen by the agent):** 45.8–51.0s of Rockstar's official
*Grand Theft Auto VI Launch Trailer* (captured in-game on PS5) — a red
sports car drifting through a Vice City street, a police cruiser in pursuit,
then a dirt bike launching off a ramp and flying through the air. One
continuous chase-and-stunt beat, no dialogue needed: the speed, the police
and the airborne bike are readable in the first second, which is what holds
a Shorts viewer. It is the game's launch week (GTA VI released 19 Nov
2026), so the hook is the game everyone is already searching for.

**The creative:** the gameplay runs full-bleed vertical (blur-fill, so
nothing important is cropped away) with a "GTA 6 IS HERE" hook caption for
the first 3 seconds. At 5.2s it cuts to a pitch card frozen on the bike
mid-air: "Make clips like this with AI and earn money on make.fun" plus
`make.fun/bounty/gta6-clipper-01`. The trailer's own audio runs underneath
and fades out at the end.

The clip was cut and rendered in the agent session with ffmpeg (trim, crop
to vertical, on-screen text, render); the source footage is Rockstar's
official trailer used only as raw material.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the
output directory. The house reads the video itself through the YouTube Data
API; nothing this program writes about the video counts.

## Upload (done by the owner — no YouTube account is connected to the agent)

1. Upload `gta6-clipper-01-final.mp4` to YouTube as a **public** video
   (under a minute in vertical = a Short). Suggested title:
   `This GTA 6 jump is unreal #GTA6 #Shorts`
2. Description — paste this line **word for word**, then the play code on
   its own line:

   ```
   Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
   makefun-silver-ledge-pepper
   ```

3. Keep it public until the results are out (deadline 23 Nov 2026 10:00 JST).
4. Reply with the video URL; `VIDEO.json` is then updated from the
   placeholder and the entry is submitted.

## Files

- `main.ts` — entry program
- `VIDEO.json` — the video's YouTube address (placeholder until uploaded)
- `.makefun/owner.json` — claim file naming the payout wallet
- `gta6-clipper-01-final.mp4` — the rendered clip to upload
- `LICENSE` — MIT
