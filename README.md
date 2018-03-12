[![CADRE](/statics/images/cadre-logo.png)]()

[![](/../badges/master/build.svg)](/../commits/master)

# Introduction

CACI Deployment and Rapid-development Environment

CADRE provides a complete, state of the art cloud centric development and deployment environment, focused on web and mobile applications that enables Agile and DevOps style software lifecycle management.

# Setup

First you will need to install [Node.js](http://nodejs.org). Both the current and LTS version of Node.js are supported. If you're going to do development work on the project, it is recommended that you have both the current and LTS versions of Node.js installed on your system. To do that, it is recommended that you install Node.js using a Node.js version manager like [nvm](https://github.com/creationix/nvm) rather than the official installer, as a version manager will allow you to switch between multiple versions of Node.js easily.

Some important caveats to note:

- nvm is not available on Windows. Windows users should try out [nvm-windows](https://github.com/coreybutler/nvm-windows) or [nvs](https://github.com/jasongin/nvs).
- Linux/macOS users who install Node.js without a version manager like nvm may need to resolve some commonly encountered [permissions headaches associated with npm](https://docs.npmjs.com/getting-started/fixing-npm-permissions). As such, use of nvm is strongly recommended.

The [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) is also required for development work. The JDK is required for the local HTML validator feature.

You will also need to install [PostgreSQL](http://www.postgresql.org/download). *(macOS users are recommended to get it [here](https://postgresapp.com).)*

To be able to run the automated testing, you'll also need to download the most recent Selenium web drivers for Firefox and Chrome from the [selenium-webdriver npm page](https://www.npmjs.com/package/selenium-webdriver) and add them to your PATH. Ubuntu users may need to `sudo apt install libgconf-2-4` in order for the Chromium driver to work correctly.

Next ensure that git is installed and that it's [properly configured](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

# Recommended dev tools

- [Visual Studio Code](https://code.visualstudio.com/) - This is the preferred code editor as our repository has a file that auto configures it for this project.
  - Recommended extensions: stylelint, ESLint, Debugger for Chrome.
- [SourceTree](http://www.sourcetreeapp.com) - One of the better GUIs for git.
- [Cmder](http://cmder.net) *(Windows users only)* - Less terrible command line than the native one. It actually supports emojis. 😲

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
  - `npm run dev`: runs the app in development mode. Recommended when doing development. Enables a number of dev mode features.
- Once the app is running, go to [http://localhost:43712](http://localhost:43712) to use the app.

Contributing
===

1. Create a branch in your fork for the feature or bug you're working on.
2. Do your work in your fork in the desired branch.
3. Commit your changes. The commit message should meaningfully and specifically describe your changes.
4. Fetch from all remotes.
5. Pull from the `base` remote.
6. Resolve any merge conflicts that may emerge.
7. Push your changes to your fork.
8. Open a merge request to the base repo from your fork. The merge request should meaningfully and specifically describe your changes. Note any issue(s) the MR closes by citing "closes #issue-number" in the MR text.
