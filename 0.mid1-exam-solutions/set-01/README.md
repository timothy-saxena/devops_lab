# Set 1 - HTML website + automatic build

## Question

1. Push an HTML website to GitHub.
2. Create an automatic build program.

## Files to upload to GitHub

Upload the contents of `website/`, especially `index.html`.

## Required input

- GitHub username: `YOUR_USERNAME`
- New repository name: `set-01-html-site`
- Jenkins job name: `Set01-Automatic-Build`
- GitHub repository URL: `https://github.com/YOUR_USERNAME/set-01-html-site.git`

## Part A - Push the website

1. Create an empty GitHub repository named `set-01-html-site`.
2. Open Git Bash/Terminal inside this set's `website` folder.
3. Run:

```bash
git init
git branch -M main
git add index.html
git commit -m "Add HTML website"
git remote add origin https://github.com/YOUR_USERNAME/set-01-html-site.git
git push -u origin main
```

4. Refresh GitHub. `index.html` must be visible on branch `main`.

## Part B - Jenkins automatic build using Poll SCM

This is the standard automatic-build interpretation: Jenkins checks GitHub periodically and builds when it finds a new commit.

1. Jenkins -> **New Item** -> name `Set01-Automatic-Build` -> **Freestyle project**.
2. **Source Code Management** -> **Git**.
3. Enter the repository URL above and set branch to `*/main`.
4. **Build Triggers** -> tick **Poll SCM**.
5. Enter this schedule (checks approximately every two minutes):

```text
H/2 * * * *
```

6. **Build Steps** -> choose the platform-specific command below.
7. Save. Make a small change to `index.html`, commit and push it. Wait up to two minutes.

### Windows build step

Paste `jenkins/automatic-build.windows.bat` into **Execute Windows batch command**.

### macOS build step

Paste `jenkins/automatic-build.mac.sh` into **Execute shell**.

## Expected output

GitHub shows `index.html`. Jenkins creates a new build automatically after the push, and Console Output includes the build number and workspace path.

```text
Set 1 automatic build is running.
Build Number: 1
Workspace: ...
```

## Viva answers

- `git add` stages files, `git commit` saves a local snapshot, and `git push` uploads commits to GitHub.
- Poll SCM makes Jenkins periodically check the Git repository and build only if it detects a change.
