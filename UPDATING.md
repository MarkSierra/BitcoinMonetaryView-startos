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

## Testing before the pull request

Every change is installed and tested on a real StartOS server before it goes to
[Start9-Community/bitcoinmonetaryview-startos](https://github.com/Start9-Community/bitcoinmonetaryview-startos),
because each merge there publishes straight to Community Beta. The test build carries a pre-release version,
so the published build is offered as a normal update afterwards (`0.3.8:0-beta.0` < `0.3.8:0-beta.1` <
`0.3.8:0`):

1. Sync `main` from the Start9-Community fork, then branch from it. The branch carries the final version
   (e.g. `0.3.8:0`); this is the branch the pull request is opened from.
2. For the test build, branch once more (e.g. `test/0.3.8-beta.0`) and add one commit that only changes
   `version` in `startos/versions/current.ts` to `0.3.8:0-beta.0`. Push it and run the **Build** workflow on
   that branch (Actions → Build → Run workflow); it uploads the three `.s9pk` files as artifacts.
3. Sideload the `.s9pk` on StartOS and test: update over the installed version and a clean install, the
   tasks and actions, sign-in, the health checks; uninstall and reinstall.
4. A fix goes on the pull-request branch; the next test build is `-beta.1`, and so on.
5. Open the pull request from the final-version branch, never from a test branch: a `-beta` version must
   not reach the registry. Delete the test branches after the merge.
