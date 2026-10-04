# Updating the upstream version

This package builds BitcoinMonetaryView from the `upstream` git submodule
([MarkSierra/BitcoinMonetaryView](https://github.com/MarkSierra/BitcoinMonetaryView)).

## Determining the upstream version

- Latest release tag: `git -C upstream fetch --tags && git -C upstream describe --tags --abbrev=0 origin/main`
- The current pin is the submodule commit: `git submodule status upstream`.

## Applying the bump

1. `git -C upstream checkout <tag or commit>` and `git add upstream`.
2. Bump `version` in `startos/versions/current.ts` (upstream version + `:0`, or rename the file into a
   historical version and create a new `current.ts` if a migration is needed — see the packaging guide).
3. If upstream changed its settings schema (`docs/settings.md`), update `startos/fileModels/settings.json.ts`
   and the actions.
