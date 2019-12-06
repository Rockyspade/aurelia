# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="0.5.0"></a>
# 0.5.0 (2019-11-15)

### Features:

* **replace:** Nested replaceables didn't render ([71e815c](https://github.com/aurelia/aurelia/commit/71e815c))
* **kernel:** initial logger implementation ([7f77340](https://github.com/aurelia/aurelia/commit/7f77340))


### Bug Fixes:

* **test-nod:** verbose script ([42a18a8](https://github.com/aurelia/aurelia/commit/42a18a8))
* **di:** warn instead of throwing on native function dependencies ([7d56668](https://github.com/aurelia/aurelia/commit/7d56668))
* **integration:** fixing testfor FF ([edaae69](https://github.com/aurelia/aurelia/commit/edaae69))
* **runtime-html:** style-attribute-accessor issue ([40db3dc](https://github.com/aurelia/aurelia/commit/40db3dc))
* **runtime-html:** uniform syntax for class CA ([feede3a](https://github.com/aurelia/aurelia/commit/feede3a))


### Refactorings:

* **ref:** check element name again ([2625040](https://github.com/aurelia/aurelia/commit/2625040))
* **all:** rename behaviorFor to for ([0823dfe](https://github.com/aurelia/aurelia/commit/0823dfe))

<a name="0.4.0"></a>
# 0.4.0 (2019-10-26)

### Features:

* **portal:** add portal attribute ([8602dd0](https://github.com/aurelia/aurelia/commit/8602dd0))
* **dom:** add prependTo api to nodesequences ([b958d57](https://github.com/aurelia/aurelia/commit/b958d57))
* **testing:** new tracing capabolities ([ffb65ba](https://github.com/aurelia/aurelia/commit/ffb65ba))
* **test:** new html assertions for text and value ([46cdfdd](https://github.com/aurelia/aurelia/commit/46cdfdd))
* **strict-binding:** Allow null/und to be '' ([a44720e](https://github.com/aurelia/aurelia/commit/a44720e))
* **integration:** tests for updateTrigger and if ([caf1136](https://github.com/aurelia/aurelia/commit/caf1136))
* **integration:** new tests for text input ([dc87cea](https://github.com/aurelia/aurelia/commit/dc87cea))
* **tests:** added script to copy htmls ([823833d](https://github.com/aurelia/aurelia/commit/823833d))
* **integration:** starting integration tests ([aaefd34](https://github.com/aurelia/aurelia/commit/aaefd34))
* **integration:** test plan for runtime-html ([32c0de5](https://github.com/aurelia/aurelia/commit/32c0de5))
* **integration:** plan for binding behaviors ([e6ea738](https://github.com/aurelia/aurelia/commit/e6ea738))
* **integration:** test plan for runtime observers ([4d4525f](https://github.com/aurelia/aurelia/commit/4d4525f))
* **integration:** wip plan for runtime observers ([86bb368](https://github.com/aurelia/aurelia/commit/86bb368))
* **integration-test:** further test plan ([709ad73](https://github.com/aurelia/aurelia/commit/709ad73))
* **test:** starting integration test plan ([2dce7d0](https://github.com/aurelia/aurelia/commit/2dce7d0))
* **alias:** Added additional test cases ([4a45a5c](https://github.com/aurelia/aurelia/commit/4a45a5c))
* **alias:** Add convention add tests fix conv log ([19399af](https://github.com/aurelia/aurelia/commit/19399af))
* **alias:** Binding command aliases ([efffff8](https://github.com/aurelia/aurelia/commit/efffff8))
* **alias:** Cleanup and tests added ([5cabba3](https://github.com/aurelia/aurelia/commit/5cabba3))
* **kernel:** cover more edge cases in camel/kebabCase ([a37ca76](https://github.com/aurelia/aurelia/commit/a37ca76))
* **runtime-html:** Enhance the style accessor ([57bc7b1](https://github.com/aurelia/aurelia/commit/57bc7b1))
* **plugin-conventions:** improve compatibility with uppercase resource name ([b67b839](https://github.com/aurelia/aurelia/commit/b67b839))
* **plugin-conventions:** support foo.js + foo-view.html convention ([625ec6a](https://github.com/aurelia/aurelia/commit/625ec6a))
* **router:** improve instruction parser (working) ([f4b4806](https://github.com/aurelia/aurelia/commit/f4b4806))
* **router:** improve instruction parser (incomplete) ([dc3c6ee](https://github.com/aurelia/aurelia/commit/dc3c6ee))
* **plugin-conventions:** support conventional css pair, support alternative file extentions ([cfb9446](https://github.com/aurelia/aurelia/commit/cfb9446))
* **plugin-conventions:** support metadata containerless and bindable tag/attr ([b5395b4](https://github.com/aurelia/aurelia/commit/b5395b4))
* **plugin-conventions:** always wrap others resources in defer ([082b83b](https://github.com/aurelia/aurelia/commit/082b83b))
* **plugin-conventions:** enable ShadomDOM option in html-only-element ([e44eadd](https://github.com/aurelia/aurelia/commit/e44eadd))
* **plugin-conventions:** support defaultShadowOptions in conventions support ([dcf0bba](https://github.com/aurelia/aurelia/commit/dcf0bba))
* **router:** configure to not use url fragment hash ([88b4ada](https://github.com/aurelia/aurelia/commit/88b4ada))
* **i18n:** prepend, append HTML content support ([b9aeca8](https://github.com/aurelia/aurelia/commit/b9aeca8))
* **i18n:** support for [text] ([2576139](https://github.com/aurelia/aurelia/commit/2576139))
* **router:** add configuration for use browser  fragment hash ([4b2f0c1](https://github.com/aurelia/aurelia/commit/4b2f0c1))
* **i18n:** core translation service and related auxiliary features ([c3d4a85](https://github.com/aurelia/aurelia/commit/c3d4a85))
* **default-replaceable:** allow replace conv ([73ca7b0](https://github.com/aurelia/aurelia/commit/73ca7b0))
* **default-replaceable:** allow replace conv ([1300933](https://github.com/aurelia/aurelia/commit/1300933))
* **router:** add scope modifcations to link ([80f42a0](https://github.com/aurelia/aurelia/commit/80f42a0))
* **router:** make true default for viewport scope ([4298d78](https://github.com/aurelia/aurelia/commit/4298d78))
* **blur:** blur attribute ([9e844a8](https://github.com/aurelia/aurelia/commit/9e844a8))
* **observer:** Add the ability to bind an array of objects and strings to a class ([cd94c43](https://github.com/aurelia/aurelia/commit/cd94c43))
* **router:** fix review comments ([a75c569](https://github.com/aurelia/aurelia/commit/a75c569))
* **i18n:** skipTranslationOnMissingKey ([a544563](https://github.com/aurelia/aurelia/commit/a544563))
* **styles:** support the new css modules spec ([9b36a8e](https://github.com/aurelia/aurelia/commit/9b36a8e))
* **i18n:** all binding behavior ([f002dd7](https://github.com/aurelia/aurelia/commit/f002dd7))
* **i18n:** signalable rt value converter ([e4dfb10](https://github.com/aurelia/aurelia/commit/e4dfb10))
* **i18n:** signalable nf value-converter ([1e38acb](https://github.com/aurelia/aurelia/commit/1e38acb))
* **i18n:** signalable date-format value-converter ([24653f3](https://github.com/aurelia/aurelia/commit/24653f3))
* **i18n:** signalable t value-converter ([6d31d83](https://github.com/aurelia/aurelia/commit/6d31d83))
* **i18n:** support for unformat ([8d5a4fa](https://github.com/aurelia/aurelia/commit/8d5a4fa))
* **i18n:** basic relative-time implementation ([2ea21b7](https://github.com/aurelia/aurelia/commit/2ea21b7))
* **i18n:** date and number format with Intl API ([c2405b0](https://github.com/aurelia/aurelia/commit/c2405b0))
* **i18n:** support CE attribute translation ([58e2b93](https://github.com/aurelia/aurelia/commit/58e2b93))
* **i18n:** support for current locale change ([f450b68](https://github.com/aurelia/aurelia/commit/f450b68))
* **i18n:** added change handler to binding ([591f1d8](https://github.com/aurelia/aurelia/commit/591f1d8))
* **i18n:** improved support of append, prepend ([2db042c](https://github.com/aurelia/aurelia/commit/2db042c))
* **i18n:** support for [html],[prepend],[append] ([f0aadd6](https://github.com/aurelia/aurelia/commit/f0aadd6))
* **blur:** blur attribute, basic working state ([177684e](https://github.com/aurelia/aurelia/commit/177684e))
* **i18n:** support for `t=${key}`, `t=[attr]key` ([5f2fdfd](https://github.com/aurelia/aurelia/commit/5f2fdfd))
* **i18n:** alias integration ([03ab122](https://github.com/aurelia/aurelia/commit/03ab122))
* **observer:** Add the ability to bind an array of objects and strings to a class ([fb3ccf2](https://github.com/aurelia/aurelia/commit/fb3ccf2))
* **observer:** Add the ability to bind an array of objects and strings to a class ([75c8418](https://github.com/aurelia/aurelia/commit/75c8418))
* **observer:** Add the ability to bind an array of objects and strings to a class ([e80b279](https://github.com/aurelia/aurelia/commit/e80b279))
* **focus:** add focus attribute ([1972323](https://github.com/aurelia/aurelia/commit/1972323))
* **i18n:** add t-params ([2f559d0](https://github.com/aurelia/aurelia/commit/2f559d0))
* **observer:** Add the ability to bind an object to class ([13bd1d1](https://github.com/aurelia/aurelia/commit/13bd1d1))
* **observer:** Fix up tests and remove redundancy from class accessor ([64294ad](https://github.com/aurelia/aurelia/commit/64294ad))
* **observer:** Add the ability to bind an object to class ([3e7dba7](https://github.com/aurelia/aurelia/commit/3e7dba7))
* **focus:** add focus attribute ([ec6ba76](https://github.com/aurelia/aurelia/commit/ec6ba76))
* **i18n:** add binding+renderer+instructn+pattern ([adb4439](https://github.com/aurelia/aurelia/commit/adb4439))
* **router:** use router configuration and interface ([427e95d](https://github.com/aurelia/aurelia/commit/427e95d))
* **router:** extract load url from router activate ([af26abf](https://github.com/aurelia/aurelia/commit/af26abf))
* **runtime:** add lifecycle flag propagating template controllers for perf tweaks ([c28db65](https://github.com/aurelia/aurelia/commit/c28db65))
* **i18n:** skeleton implementation ([4ab2cff](https://github.com/aurelia/aurelia/commit/4ab2cff))
* **plugin-gulp:** conventions plugin for gulp, replaced plugin-requirejs ([ddb65b8](https://github.com/aurelia/aurelia/commit/ddb65b8))
* **router:** clean up debug for innerhtml ([3509464](https://github.com/aurelia/aurelia/commit/3509464))
* **router:** clean up debug for innerhtml ([1091baf](https://github.com/aurelia/aurelia/commit/1091baf))
* **router:** make nav title use innerhtml ([17dcd1b](https://github.com/aurelia/aurelia/commit/17dcd1b))
* **18n:** add basic unit tests ([d16fcb1](https://github.com/aurelia/aurelia/commit/d16fcb1))
* **webpack-loader:** webpack-loader on top of plugin-conventions ([0a4b131](https://github.com/aurelia/aurelia/commit/0a4b131))
* **plugin-conventions:** preprocess html template ([fd7134d](https://github.com/aurelia/aurelia/commit/fd7134d))
* **plugin-conventions:** preprocess js/ts resources, adding decorators ([0fa3cb2](https://github.com/aurelia/aurelia/commit/0fa3cb2))
* **router:** check entry before replace in cancel ([7350e0c](https://github.com/aurelia/aurelia/commit/7350e0c))
* **router:** improve guard matching & remaining viewports ([6df8e8b](https://github.com/aurelia/aurelia/commit/6df8e8b))
* **router:** clean up guardian & move parameters next to component & refactor viewport defaults ([0c7eaca](https://github.com/aurelia/aurelia/commit/0c7eaca))
* **router:** add navigation guardian ([9130e40](https://github.com/aurelia/aurelia/commit/9130e40))
* **router:** add style loader to navigation skeleton ([40a742d](https://github.com/aurelia/aurelia/commit/40a742d))
* **router:** add css to navigation skeleton ([2af8e37](https://github.com/aurelia/aurelia/commit/2af8e37))
* **router:** improve viewport state and description ([178c318](https://github.com/aurelia/aurelia/commit/178c318))
* **router:** replace BrowserNavigation's queue with Queue ([769b1b8](https://github.com/aurelia/aurelia/commit/769b1b8))
* **router:** remove router queue ([27927bc](https://github.com/aurelia/aurelia/commit/27927bc))
* **router:** add browser navigation and queue ([95c8795](https://github.com/aurelia/aurelia/commit/95c8795))


### Bug Fixes:

* **tests:** correction ([8edc003](https://github.com/aurelia/aurelia/commit/8edc003))
* **dirty-checker:** use render task queue ([21f9b69](https://github.com/aurelia/aurelia/commit/21f9b69))
* **test:** linting issues ([74c0cfc](https://github.com/aurelia/aurelia/commit/74c0cfc))
* **scheduler:** fix persistent task cancellation and add more tests ([88c897b](https://github.com/aurelia/aurelia/commit/88c897b))
* **runtime:** binary expression connect issue ([039f4f2](https://github.com/aurelia/aurelia/commit/039f4f2))
* **metadata:** add metadata and decorate function polyfills ([b79f55f](https://github.com/aurelia/aurelia/commit/b79f55f))
* **tests:** tri-state boolean radio buttons ([d201f09](https://github.com/aurelia/aurelia/commit/d201f09))
* **tests:** correction ([328cba8](https://github.com/aurelia/aurelia/commit/328cba8))
* **tests:** make sure test run on both node/browser ([4896920](https://github.com/aurelia/aurelia/commit/4896920))
* **tests:** make sure test run on both node/browser ([554386a](https://github.com/aurelia/aurelia/commit/554386a))
* **tests:** make sure test run on both node/browser ([f800bea](https://github.com/aurelia/aurelia/commit/f800bea))
* **view:** handle inheritance correctly / fix tests ([4956c68](https://github.com/aurelia/aurelia/commit/4956c68))
* **view:** more decorator/metadata fixes ([8db676b](https://github.com/aurelia/aurelia/commit/8db676b))
* **runtime:** missing notify on new value of key ([55c9fdf](https://github.com/aurelia/aurelia/commit/55c9fdf))
* **portal:** add 2nd param for hold, add tests, export mountstrategy ([d797f9a](https://github.com/aurelia/aurelia/commit/d797f9a))
* **au-dom:** revert weird changes ([a696579](https://github.com/aurelia/aurelia/commit/a696579))
* **portal:** separate API for hold parent container ([537eb97](https://github.com/aurelia/aurelia/commit/537eb97))
* **rendering-engine:** property inject compiler ([617f215](https://github.com/aurelia/aurelia/commit/617f215))
* **tests:** build issue correction ([b843149](https://github.com/aurelia/aurelia/commit/b843149))
* **tests:** build issue correction ([158ff3f](https://github.com/aurelia/aurelia/commit/158ff3f))
* **runtime:** attribute order for checkbox ([49a1d43](https://github.com/aurelia/aurelia/commit/49a1d43))
* **tests:** tweak affected tests ([8678836](https://github.com/aurelia/aurelia/commit/8678836))
* **style-inst:** correctly compile surrogate style/ add more tests ([1ee91df](https://github.com/aurelia/aurelia/commit/1ee91df))
* **ref:** add update source flag to binding ([19fdc34](https://github.com/aurelia/aurelia/commit/19fdc34))
* **ref:** use updatesource in self observer ([9354994](https://github.com/aurelia/aurelia/commit/9354994))
* **tests:** comment out pre-refactoring tests (has todo) ([4aee8bd](https://github.com/aurelia/aurelia/commit/4aee8bd))
* **tests:** comment out pre-refactoring tests (has todo) ([b5854f8](https://github.com/aurelia/aurelia/commit/b5854f8))
* **tests:** comment out pre-refactoring tests (has todo) ([75e8c99](https://github.com/aurelia/aurelia/commit/75e8c99))
* **ref-tests:** add tests for abitrary declaration order of ref binding ([82d8ed4](https://github.com/aurelia/aurelia/commit/82d8ed4))
* **tests:** computed-observer typing issue ([6a6043c](https://github.com/aurelia/aurelia/commit/6a6043c))
* **test:** linting issue ([0ef3878](https://github.com/aurelia/aurelia/commit/0ef3878))
* **tests:** computed observer ([a074800](https://github.com/aurelia/aurelia/commit/a074800))
* **test:** CI issues ([1554cdd](https://github.com/aurelia/aurelia/commit/1554cdd))
* **tests:** linitng issues ([16df0e1](https://github.com/aurelia/aurelia/commit/16df0e1))
* **tests:** linting issues ([3f85553](https://github.com/aurelia/aurelia/commit/3f85553))
* **integration:** easier test boilerplate ([11b2f35](https://github.com/aurelia/aurelia/commit/11b2f35))
* **plugin-conventions:** check import statement on new "aurelia" package, add test coverage ([fcff1de](https://github.com/aurelia/aurelia/commit/fcff1de))
* **plugin-conventions:** add missing support of templateController ([8ab115c](https://github.com/aurelia/aurelia/commit/8ab115c))
* **runtime:** computed bug ([641ba1c](https://github.com/aurelia/aurelia/commit/641ba1c))
* **runtime:** computed-observer overridden config ([6363d47](https://github.com/aurelia/aurelia/commit/6363d47))
* **custom-attr:** define parsing behavior clearer ([32e7ec8](https://github.com/aurelia/aurelia/commit/32e7ec8))
* **let:** to-view-model -> to-binding-context ([be22bc7](https://github.com/aurelia/aurelia/commit/be22bc7))
* **template-binder:** properly handle multiAttr binding edge cases ([d44d8fd](https://github.com/aurelia/aurelia/commit/d44d8fd))
* **let:** minor left over ([ae806eb](https://github.com/aurelia/aurelia/commit/ae806eb))
* **let:** to-view-model -> to-binding-context ([a201a32](https://github.com/aurelia/aurelia/commit/a201a32))
* **convention:** map inputmode -> inputMode ([3e7b0e6](https://github.com/aurelia/aurelia/commit/3e7b0e6))
* **repeat:** revert changes related to iterator binding ([3edbcd0](https://github.com/aurelia/aurelia/commit/3edbcd0))
* **repeat:** fix map delete observation, add more tests, normalize items in repeat ([f62df34](https://github.com/aurelia/aurelia/commit/f62df34))
* **repeat:** remove debugger ([c42f28a](https://github.com/aurelia/aurelia/commit/c42f28a))
* **repeat:** basic test case with array ([530eb33](https://github.com/aurelia/aurelia/commit/530eb33))
* **repeat:** add contextual props back ([4083fb4](https://github.com/aurelia/aurelia/commit/4083fb4))
* **custom-attr:** skip failing tests, tweak tests to reflect real usage ([e91f40d](https://github.com/aurelia/aurelia/commit/e91f40d))
* **custom-attr:** more tests for some common scenarios ([e41e3ff](https://github.com/aurelia/aurelia/commit/e41e3ff))
* **custom-attr:** more test cases for multi binding detection ([9c118ea](https://github.com/aurelia/aurelia/commit/9c118ea))
* **custom-attr:** define parsing behavior clearer ([526b557](https://github.com/aurelia/aurelia/commit/526b557))
* **array-observer:** fix splice edge case ([5a246a7](https://github.com/aurelia/aurelia/commit/5a246a7))
* **kernel:** only propagate globally registered resources to child render contexts ([1ccf9c0](https://github.com/aurelia/aurelia/commit/1ccf9c0))
* **kernel:** cover more edge cases in camel/kebabCase ([a7a594f](https://github.com/aurelia/aurelia/commit/a7a594f))
* **tests:** use map/reduce instead of flatmap ([b591f14](https://github.com/aurelia/aurelia/commit/b591f14))
* **plugin-conventions:** upgrade modify-code to latest version to fix a preprocess bug ([6d018a2](https://github.com/aurelia/aurelia/commit/6d018a2))
* **plugin-conventions:** new decorator has to be injected before existing decorators ([437596c](https://github.com/aurelia/aurelia/commit/437596c))
* **styles:** proper local vs. global style resolution ([95791b1](https://github.com/aurelia/aurelia/commit/95791b1))
* **bindable-primary:** cleanup debug code, add more tests ([8e2054d](https://github.com/aurelia/aurelia/commit/8e2054d))
* **bindable-primary:** cleanup debug code, add more tests ([f812a55](https://github.com/aurelia/aurelia/commit/f812a55))
* **ref:** fix ref usage ([bbdfbec](https://github.com/aurelia/aurelia/commit/bbdfbec))
* **all:** rename root au -> aurelia, auRefs -> au, fix tests ([edeb66b](https://github.com/aurelia/aurelia/commit/edeb66b))
* **template-binderf:** ensure custom attribute are processed first ([b6177cb](https://github.com/aurelia/aurelia/commit/b6177cb))
* **template-compiler:** add recursive test cases for custom attr + event pair ([27c19ee](https://github.com/aurelia/aurelia/commit/27c19ee))
* **template-compiler:** harmony compilation on surrogate el ([53b8a49](https://github.com/aurelia/aurelia/commit/53b8a49))
* **webpack-loader:** need to use "!!" in "!!raw-loader!" to bypass all loaders in webpack config ([5c00dbd](https://github.com/aurelia/aurelia/commit/5c00dbd))
* **plugin-conventions:** proper support of HTML-only element in format other than .html ([73860ec](https://github.com/aurelia/aurelia/commit/73860ec))
* **plugin-conventions:** turn off ShadowDOM for element with one-word tag name ([d1f10ff](https://github.com/aurelia/aurelia/commit/d1f10ff))
* **di:** defer should not register primitives ([2d19d6e](https://github.com/aurelia/aurelia/commit/2d19d6e))
* **binding-language:** allow binding command to take precedence over custom attr ([cf24681](https://github.com/aurelia/aurelia/commit/cf24681))
* **harmony-compilation:** tweaks flags, revert cond ([dd403bd](https://github.com/aurelia/aurelia/commit/dd403bd))
* **view-locator:** final typing issue ([bb903f1](https://github.com/aurelia/aurelia/commit/bb903f1))
* **binding-type:** adjust flags bits, tweak tests ([0bac00f](https://github.com/aurelia/aurelia/commit/0bac00f))
* **binding-language:** add IgnoreCustomAttr to binding type ([02b6903](https://github.com/aurelia/aurelia/commit/02b6903))
* **bindign-language-tests:** let some tests run in browser only ([1614052](https://github.com/aurelia/aurelia/commit/1614052))
* **binding-language-tests:** Element -> INode ([9dc9574](https://github.com/aurelia/aurelia/commit/9dc9574))
* **binding-language:** allow binding command to take precedence over custom attr ([bc6dcfc](https://github.com/aurelia/aurelia/commit/bc6dcfc))
* **view-locator:** improve types and simplify tests ([2ecb8c4](https://github.com/aurelia/aurelia/commit/2ecb8c4))
* **jit-html:** add convention for html attributes ([3c2a05a](https://github.com/aurelia/aurelia/commit/3c2a05a))
* **i18n:** fixed relative-time formatting issue ([19f32c5](https://github.com/aurelia/aurelia/commit/19f32c5))
* **i18n:** fixed i18n related CI issues ([fa994d7](https://github.com/aurelia/aurelia/commit/fa994d7))
* **tests:** tweak TemplateBinder ([b00e3da](https://github.com/aurelia/aurelia/commit/b00e3da))
* **i18n:** post-review changes ([b797d3f](https://github.com/aurelia/aurelia/commit/b797d3f))
* **i18n:** type def for locale ([eabf0e3](https://github.com/aurelia/aurelia/commit/eabf0e3))
* **i18n:** post-review changes ([81265bd](https://github.com/aurelia/aurelia/commit/81265bd))
* **i18n:** waited for i18next init in beforeBind ([fc3073d](https://github.com/aurelia/aurelia/commit/fc3073d))
* **i18n:** post-review changes ([d94d030](https://github.com/aurelia/aurelia/commit/d94d030))
* **styles:** pull shadow root type from jsdom ([8e9f1a5](https://github.com/aurelia/aurelia/commit/8e9f1a5))
* **styles:** ensure all styles infrastructure uses the dom abstraction ([2c397ec](https://github.com/aurelia/aurelia/commit/2c397ec))
* **styles:** address two deep scan issues ([4906098](https://github.com/aurelia/aurelia/commit/4906098))
* **i18n:** alias registration for `.bind` pattern ([47b95c5](https://github.com/aurelia/aurelia/commit/47b95c5))
* **deepscan:** removed unused import ([ec883a1](https://github.com/aurelia/aurelia/commit/ec883a1))
* **i18n:** disabling singular rt tests ([52dcaab](https://github.com/aurelia/aurelia/commit/52dcaab))
* **i18n:** correction for node ([78efceb](https://github.com/aurelia/aurelia/commit/78efceb))
* **all:** build errors related to children observers ([1658844](https://github.com/aurelia/aurelia/commit/1658844))
* **plugin-gulp:** fix html pair checking in plugin-gulp ([be01413](https://github.com/aurelia/aurelia/commit/be01413))
* **plugin-conventions:** fix TS TS2449 error for custom element with in-file dep ([efdc2ae](https://github.com/aurelia/aurelia/commit/efdc2ae))
* **replaceable:** fix some more edge cases with multi nested elements and template controllers ([b600463](https://github.com/aurelia/aurelia/commit/b600463))
* **replaceable:** more scoping fixes, enable most of bigopon's tests ([0daea3a](https://github.com/aurelia/aurelia/commit/0daea3a))
* **replaceable:** make part scopes also work when not immediately bound from the wrapping replaceable ([78803f1](https://github.com/aurelia/aurelia/commit/78803f1))
* **replaceable:** retain parts through template controllers in the replace-part ([69fdd0c](https://github.com/aurelia/aurelia/commit/69fdd0c))
* **observer-locator:** fix attribute NS accessor and tests ([923c326](https://github.com/aurelia/aurelia/commit/923c326))
* **repeat:** fix indexMap synchronization ([16c69f9](https://github.com/aurelia/aurelia/commit/16c69f9))
* **compose:** fix typo and tests ([a3060e9](https://github.com/aurelia/aurelia/commit/a3060e9))


### Refactorings:

* ***:** remove timeSlicing api calls ([0e05c43](https://github.com/aurelia/aurelia/commit/0e05c43))
* **scheduler:** remove evenLoop priority ([bb1fe5a](https://github.com/aurelia/aurelia/commit/bb1fe5a))
* **di:** sync annotation prefix ([ef905ff](https://github.com/aurelia/aurelia/commit/ef905ff))
* **all:** update definition refs ([676e86a](https://github.com/aurelia/aurelia/commit/676e86a))
* **resources): prepend with a:**  ([dd7c238](https://github.com/aurelia/aurelia/commit/dd7c238))
* **scheduler:** reorder priorities ([12cc85a](https://github.com/aurelia/aurelia/commit/12cc85a))
* **scheduler:** add more tests and more fixes ([d613137](https://github.com/aurelia/aurelia/commit/d613137))
* **scheduler:** add tests and fix the bugs they exposed ([2babe82](https://github.com/aurelia/aurelia/commit/2babe82))
* **scheduler:** add global initialization and initial test setup ([2d15388](https://github.com/aurelia/aurelia/commit/2d15388))
* **replaceable:** rename 'replace-part' to 'replace' and 'replaceable part' to 'replaceable' ([603b68b](https://github.com/aurelia/aurelia/commit/603b68b))
* ***:** drop unused imports ([7755bbf](https://github.com/aurelia/aurelia/commit/7755bbf))
* ***:** un-ignore some ts-ignore ([5e19c62](https://github.com/aurelia/aurelia/commit/5e19c62))
* **router:** remove internal strings and scope class ([17af5ad](https://github.com/aurelia/aurelia/commit/17af5ad))
* **all:** rename BasicConfiguration in various packages ([7e330d8](https://github.com/aurelia/aurelia/commit/7e330d8))
* **event-agg:** Change interface signature ([78658eb](https://github.com/aurelia/aurelia/commit/78658eb))
* **di:** cleanup resourceFactories stuff and add some tests ([e1ee6d2](https://github.com/aurelia/aurelia/commit/e1ee6d2))
* **debug:** rename Tracer to DebugTracer ([a6c28b3](https://github.com/aurelia/aurelia/commit/a6c28b3))
* **custom-attrs:** first pass removing dynamic options ([03c5480](https://github.com/aurelia/aurelia/commit/03c5480))
* **plugin-conventions:** simplify usage of html only element ([2d31b7f](https://github.com/aurelia/aurelia/commit/2d31b7f))
* **plugin-conventions:** simplify usage of html only element ([c52b8e4](https://github.com/aurelia/aurelia/commit/c52b8e4))
* **ref:** move $au to INode ([dbf1fce](https://github.com/aurelia/aurelia/commit/dbf1fce))
* **ref:** remove ref.xx binding command, tweak tests ([12d88b2](https://github.com/aurelia/aurelia/commit/12d88b2))
* **router:** fix review comments ([5ac5891](https://github.com/aurelia/aurelia/commit/5ac5891))
* **router:** fix review comments ([205e04c](https://github.com/aurelia/aurelia/commit/205e04c))
* **router:** strict route-recognizer ([2b0b146](https://github.com/aurelia/aurelia/commit/2b0b146))
* **router:** strict viewport-content ([9baa389](https://github.com/aurelia/aurelia/commit/9baa389))
* **blur:** skip some tests ([5dc99be](https://github.com/aurelia/aurelia/commit/5dc99be))
* **blur/focus:** use testhost instead of doc ([cedcd47](https://github.com/aurelia/aurelia/commit/cedcd47))
* **focus:** use ctx.doc instead of document in tests ([a345b62](https://github.com/aurelia/aurelia/commit/a345b62))
* **blur:** always wait 1 frame before/after each test ([6e6e677](https://github.com/aurelia/aurelia/commit/6e6e677))
* **blur/focus:** isolated tests in their own host elements ([8111b96](https://github.com/aurelia/aurelia/commit/8111b96))
* **blur:** make contains work across dom boundaries ([3f6b88d](https://github.com/aurelia/aurelia/commit/3f6b88d))
* **router:** rename browser-navigation to browser-navigator ([0c2a179](https://github.com/aurelia/aurelia/commit/0c2a179))
* **router:** rename all Navigation to Navigator for Navigator ([173ca6e](https://github.com/aurelia/aurelia/commit/173ca6e))
* **styles:** rename to make processor clear ([d703dcf](https://github.com/aurelia/aurelia/commit/d703dcf))
* **plugin-conventions:** push down common logic to base package ([cb96d99](https://github.com/aurelia/aurelia/commit/cb96d99))
* **resources:** shorten resource names ([499634b](https://github.com/aurelia/aurelia/commit/499634b))
* **binding:** rename bindings ([35d4dff](https://github.com/aurelia/aurelia/commit/35d4dff))
* **ast:** add -Expression suffix to AST expression classes ([0870538](https://github.com/aurelia/aurelia/commit/0870538))
* **router:** remove unused history and test files ([01ea880](https://github.com/aurelia/aurelia/commit/01ea880))
* **all): more cleaning up after TS breaking changes:** ( ([c4c3fc7](https://github.com/aurelia/aurelia/commit/c4c3fc7))
* **replaceable:** fix scoping and some variations of nesting ([99b356c](https://github.com/aurelia/aurelia/commit/99b356c))
* **test:** consolidate / cleanup ([6c83b4e](https://github.com/aurelia/aurelia/commit/6c83b4e))
* **all:** rename ICustomElement to IViewModel ([8092acf](https://github.com/aurelia/aurelia/commit/8092acf))
* **all:** rename $customElement to $controller ([aacf278](https://github.com/aurelia/aurelia/commit/aacf278))
* **all:** rename ILifecycleHooks to IViewModel ([a4e2dad](https://github.com/aurelia/aurelia/commit/a4e2dad))
* **runtime:** encapsulate lifecycle behavior in controller class ([4c12498](https://github.com/aurelia/aurelia/commit/4c12498))
* **router:** use DOM abstraction ([27d4eeb](https://github.com/aurelia/aurelia/commit/27d4eeb))
* **all:** move all testing utilities to aurelia-testing package ([8f2fe34](https://github.com/aurelia/aurelia/commit/8f2fe34))
