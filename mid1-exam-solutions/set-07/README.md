# Set 7 - Simple HTML branching + FileCopyJob

## Question

1. Demonstrate GitHub branching with a simple HTML file.
2. Create a Jenkins Freestyle project named `FileCopyJob`.

## Required input

- GitHub username: `YOUR_USERNAME`
- Repository: `set-07-branching-demo`
- Branch: `about-page`
- Jenkins job name: `FileCopyJob`

## Part A - Simple HTML branching

1. Create an empty GitHub repository called `set-07-branching-demo`.
2. Open Git Bash/Terminal in the `website/` folder and push the base page:

```bash
git init
git branch -M main
git add index.html
git commit -m "Add home page"
git remote add origin https://github.com/YOUR_USERNAME/set-07-branching-demo.git
git push -u origin main
```

3. Create a branch, add a separate HTML file, and push it:

```bash
git checkout -b about-page
git add about.html
git commit -m "Add about page"
git push -u origin about-page
```

4. Merge the feature into main:

```bash
git checkout main
git merge about-page
git push origin main
```

5. Show branch evidence with:

```bash
git branch -a
git log --oneline --graph --all
```

## Part B - FileCopyJob

1. Jenkins -> **New Item** -> `FileCopyJob` -> **Freestyle project**.
2. Under **Build Steps**, add the matching platform command from `jenkins/`.
3. Save -> **Build Now** -> inspect **Console Output**.

### Windows verification

The copied file is:

```text
C:\inetpub\wwwroot\Devops\test.txt
```

### macOS verification

The copied file is:

```text
~/jenkins-devops-copy/test.txt
```

## Expected output

```text
File copied successfully.
```

The destination file contains `Hello from Jenkins`.

## Viva answers

- A local branch exists in your local Git repository, for example `main` or `about-page`. A remote-tracking branch refers to GitHub's copy, for example `origin/main`.
- Jenkins `WORKSPACE` is the job-specific directory in which Jenkins checks out code and performs the build.
