# Set 6 - Registration/Login branches + ReportPipeline

## Question

1. Create two branches: one with a registration form and another with a login page. Merge them.
2. Create `ReportPipeline`; generate a text report in the Jenkins workspace, then display it in a later stage.

## Required input

- GitHub username: `YOUR_USERNAME`
- Repository: `set-06-auth-pages`
- Branches: `registration-form`, `login-page`
- Pipeline job: `ReportPipeline`

## Part A - Create and merge the pages

1. Create an empty GitHub repository `set-06-auth-pages`.
2. In a new local folder, create the first branch:

```bash
git init
git branch -M main
git commit --allow-empty -m "Initialize main branch"
git remote add origin https://github.com/YOUR_USERNAME/set-06-auth-pages.git
git checkout -b registration-form
```

3. Copy `website/registration.html` into the local repository, then commit and push it:

```bash
git add registration.html
git commit -m "Add registration form"
git push -u origin registration-form
```

4. Create the login branch from `main`:

```bash
git checkout main
git checkout -b login-page
```

5. Copy `website/login.html`, then commit and push:

```bash
git add login.html
git commit -m "Add login page"
git push -u origin login-page
```

6. Merge both branches into main:

```bash
git checkout main
git merge registration-form
git merge login-page
git push -u origin main
```

## Part B - ReportPipeline

1. Jenkins -> **New Item** -> `ReportPipeline` -> **Pipeline**.
2. Paste the appropriate Pipeline file from `jenkins/` into **Pipeline script**.
3. Save -> **Build Now** -> **Console Output**.

## Expected input/output

No runtime input is needed. Expected Console Output contains:

```text
Jenkins report generated successfully.
Report generated inside workspace.
```

The text file exists at `report.txt` in the job workspace during the build.

## Viva answers

- When merging branches that contain different files, Git combines the files in the target branch automatically, normally without a conflict.
- **Execute Windows batch command** is a Freestyle build step that runs Windows commands such as `echo`, `copy`, `mkdir`, and `type`.
