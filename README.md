This is just a simple CLI to kickstart Typescript projects.

`kickstart-ts <name>`

Specify the **name** of the project. This name will be integrated in the `package.json` and will also be the name of the directory that is being created.

# Options

## Template (`-t` or `--template`)

The template to use for project creation. Currently, only *simple* is supported.

## Update (`-u` or `--update`)

Will use `npm-check-update` to upgrade packages.json to the latest version.

## Install (`-i` or `--install`)

Install all dependency with `npm install`.

## Git (`-g` or `--git`)

Initialize an empty git repository.
