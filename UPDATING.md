# Updating the upstream version

This package builds Monetary View from the `upstream` git submodule
([MarkSierra/BitcoinMonetaryView](https://github.com/MarkSierra/BitcoinMonetaryView)).

## Determining the upstream version

- Latest release tag: `git -C upstream fetch --tags && git -C upstream describe --tags --abbrev=0 origin/main`
- The current pin is the submodule commit: `git submodule status upstream`.

## Applying the bump

1. `git -C upstream checkout <tag or commit>` and `git add upstream`.
2. Bump `version` in `startos/versions/current.ts` (upstream version + `:0`, or rename the file into a
   historical version and create a new `current.ts` if a migration is needed — see the packaging guide).
   Write `releaseNotes` in all five StartOS languages — English (`en_US`), German (`de_DE`), Spanish
   (`es_ES`), French (`fr_FR`) and Polish (`pl_PL`). Keep the translations in `startos/manifest/i18n.ts`
   and `startos/i18n/dictionaries/translations.ts` in step with the English texts too, using the same
   wording as the dashboard (upstream `bitcoinmonetaryview/static/i18n/<lang>.js`).
3. Copy the `FROM` line of `upstream/Dockerfile` into `Dockerfile`, so the package runs on the base image the
   app was tested on.
4. If upstream changed its settings schema (`docs/settings.md`), update `startos/fileModels/settings.json.ts`
   and the actions.
