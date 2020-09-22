# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## GitHub (COPY AND PASTE COMMANDS!)

### Cloning

Run the command `cd SOME/PATH` to a clean workspace **NOT under iCloud sync**.  
Clone the project using the command `git clone https://github.com/zpg6/pingg.git`  
Run `git checkout master`.  

### Branching

Create a branch that identifies you with `git branch BRANCH_NAME`.
Run `git checkout BRANCH_NAME`.

### Deploying 

 - To run bash scripts on Windows, see [this link](https://www.thewindowsclub.com/how-to-run-sh-or-shell-script-file-in-windows-10).

- You'll need to have Angular, Firebase CLI, and git installed to your Terminal for
all of the commands in the script to execute.

Run the shell script I made by running `sh deploy.sh` while in the root folder of the project.  
You'll be asked to enter that *BRANCH_NAME* and a commit message (please be detailed).  
The script handles **BOTH** Firebase deploying and GitHub committing, pushing, merging, and re-checking out *BRANCH_NAME*.
Please let Zach know of any errors encountered in the shell script.

Before making ANY LOCAL CHANGES next time you want to code pingg, you will need to run `sh checkout.sh` while in the root folder of the project.
You'll be asked to enter that *BRANCH_NAME*. The script handles fetching any changes to the master branch and merging
them into your *BRANCH_NAME*.