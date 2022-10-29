# Video extensions

A userscript utility that allows to easily control the speed of any videos in view. "+" increases by 0.25, "-" decreases it. Speed is remembered between pages loads, per domain. More features coming soon, will update readme then.

## Script generation

Clone repo, install (preferably using pnpm, but I think other package managers will also work, just show a warning for an incorrect lock file), run `pnpm build` to trigger a turbo build chain, and will result in a `userscript.js` in `apps/exporter/dist`.

## Usage

Take the created userscript, and insert into your userscript runner of choice. A few examples would be:
- Violentmonkey
- Greasemonkey
- Tampermonkey

## Testing?

lmao