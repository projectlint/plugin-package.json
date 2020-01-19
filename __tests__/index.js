test("smoke", function() {
  const result = require("..");

  expect(result).toMatchInlineSnapshot(`
    Object {
      "config": Object {
        "recommended": Object {
          "has default version": "warning",
          "npm-check-updates": Object {
            "error": Object {
              "errorLevel": 2,
              "semverLevel": "major",
            },
            "warning": Object {
              "errorLevel": 2,
            },
          },
          "npm-package-json-lint": Array [
            "error",
            Object {
              "no-absolute-version-dependencies": "error",
              "no-absolute-version-devDependencies": "error",
              "no-duplicate-properties": "error",
              "no-file-dependencies": "error",
              "no-file-devDependencies": "error",
              "no-repeated-dependencies": "error",
              "prefer-alphabetical-bundledDependencies": "error",
              "prefer-alphabetical-dependencies": "error",
              "prefer-alphabetical-devDependencies": "error",
              "prefer-alphabetical-optionalDependencies": "error",
              "prefer-alphabetical-peerDependencies": "error",
              "prefer-alphabetical-scripts": "error",
              "prefer-no-engineStrict": "error",
              "prefer-property-order": "warning",
              "require-author": "error",
              "require-bugs": "error",
              "require-description": "error",
              "require-homepage": "error",
              "require-license": "error",
              "require-repository": "error",
              "require-scripts": "error",
              "rules": Object {
                "bin-type": "error",
                "config-type": "error",
                "cpu-type": "error",
                "dependencies-type": "error",
                "description-type": "error",
                "devDependencies-type": "error",
                "directories-type": "error",
                "engines-type": "error",
                "files-type": "error",
                "homepage-type": "error",
                "keywords-type": "error",
                "license-type": "error",
                "main-type": "error",
                "man-type": "error",
                "name-format": "error",
                "name-type": "error",
                "optionalDependencies-type": "error",
                "os-type": "error",
                "peerDependencies-type": "error",
                "preferGlobal-type": "error",
                "private-type": "error",
                "repository-type": "error",
                "require-name": "error",
                "require-version": "error",
                "scripts-type": "error",
                "version-format": "error",
                "version-type": "error",
              },
            },
          ],
        },
        "strict": Object {
          "has default version": "warning",
          "npm-check-updates": Object {
            "error": Object {
              "errorLevel": 2,
            },
          },
          "npm-package-json-lint": Array [
            "error",
            Object {
              "no-absolute-version-dependencies": "error",
              "no-absolute-version-devDependencies": "error",
              "no-archive-dependencies": "error",
              "no-archive-devDependencies": "error",
              "no-duplicate-properties": "error",
              "no-file-dependencies": "error",
              "no-file-devDependencies": "error",
              "no-git-dependencies": "error",
              "no-git-devDependencies": "error",
              "no-repeated-dependencies": "error",
              "prefer-alphabetical-bundledDependencies": "error",
              "prefer-alphabetical-dependencies": "error",
              "prefer-alphabetical-devDependencies": "error",
              "prefer-alphabetical-optionalDependencies": "error",
              "prefer-alphabetical-peerDependencies": "error",
              "prefer-alphabetical-scripts": "error",
              "prefer-no-engineStrict": "error",
              "prefer-no-version-zero-dependencies": "error",
              "prefer-no-version-zero-devDependencies": "error",
              "prefer-property-order": "warning",
              "require-author": "error",
              "require-bugs": "error",
              "require-contributors": "error",
              "require-description": "error",
              "require-engines": "error",
              "require-homepage": "error",
              "require-keywords": "error",
              "require-license": "error",
              "require-main": "error",
              "require-private": "error",
              "require-repository": "error",
              "require-scripts": "error",
              "rules": Object {
                "bin-type": "error",
                "config-type": "error",
                "cpu-type": "error",
                "dependencies-type": "error",
                "description-type": "error",
                "devDependencies-type": "error",
                "directories-type": "error",
                "engines-type": "error",
                "files-type": "error",
                "homepage-type": "error",
                "keywords-type": "error",
                "license-type": "error",
                "main-type": "error",
                "man-type": "error",
                "name-format": "error",
                "name-type": "error",
                "optionalDependencies-type": "error",
                "os-type": "error",
                "peerDependencies-type": "error",
                "preferGlobal-type": "error",
                "private-type": "error",
                "repository-type": "error",
                "require-name": "error",
                "require-version": "error",
                "scripts-type": "error",
                "version-format": "error",
                "version-type": "error",
              },
            },
          ],
        },
      },
      "rules": Object {
        "has default version": Object {
          "evaluate": [Function],
        },
        "npm-check-updates": Object {
          "evaluate": [Function],
          "fix": [Function],
        },
        "npm-package-json-lint": Object {
          "evaluate": [Function],
          "fix": [Function],
        },
      },
    }
  `);
});
