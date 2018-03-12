[![CADRE](/statics/images/cadre-logo.png)]()

[![](/../badges/master/build.svg)](/../commits/master)

# Introduction

CACI Deployment and Rapid-development Environment

CADRE provides a complete, state of the art cloud centric development and deployment environment, focused on web and mobile applications that enables Agile and DevOps style software lifecycle management.

First time running the app
===

*Note: Windows users may need to run their command line as administrator to avoid permission errors relating to symlink creation.*

- Fork this repo.
- Clone your fork to a directory on your computer exclusive to CACI projects, e.g. a folder named CACI.
- Add a remote for the base repository you forked from. The recommended name for it is `base`.
  - Note: it is common to see the base repo referred to as `upstream` or `source` in other git projects.
  - Note: by default, you will already have the remote `origin` which refers to your fork.
- Configure `git` to use the correct email address for your projects:
  - Identify location of your global config: `git config --list --show-origin`. On *nix systems, it is typically `~/.gitconfig`.
  - If you have a public GitHub account, alter your global config to add the email address associated with your GitHub account as your global default:

    ```
    [user]
        name = Your Name
        email = your_github@email_address.com
    ```
  - Add a line to your global config setting your CACI email address as the default for CACI projects:

    ```
    [includeIf "gitdir:~/Projects/CACI/"]
        path = ~/Projects/CACI/.gitconfig
    ```
  - Create the config file specified and add your CACI email address to it:

    ```
    [user]
        email = you@caci.com
    ```
- Run the app in either prod mode or dev mode:
  - `npm start` or `npm run prod`: runs the app in production mode. Recommended for simulating deployment. Dev mode features are disabled in this mode and static assets are minified.
  - `npm run dev`: runs the app in development mode. Recommended when doing development. Enables a number of dev mode features. (See below for details.)
- Once the app is running, go to [http://localhost:43712](http://localhost:43712) to use the app.
