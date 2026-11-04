# Set 11 - DevOps README + MonitorPipeline

## Question

1. Create a README quick-reference guide for Git, Docker, Jenkins, Kubernetes, and AWS.
2. Create `MonitorPipeline`, running automatically every five minutes and recording the current date/time.

## Required input

- GitHub username: `YOUR_USERNAME`
- Repository: `devops-tools-readme`
- Jenkins Pipeline job: `MonitorPipeline`
- Schedule: every five minutes

## Part A - Create and upload the DevOps README

1. Create an empty GitHub repository named `devops-tools-readme`.
2. Copy `website/README.md` into a new local folder.
3. Open Git Bash/Terminal there and run:

```bash
git init
git branch -M main
git add README.md
git commit -m "Add DevOps tools quick reference"
git remote add origin https://github.com/YOUR_USERNAME/devops-tools-readme.git
git push -u origin main
```

4. Open GitHub and show the rendered README. It demonstrates headings, a table, hyperlinks, inline code, and code blocks.

## Part B - MonitorPipeline

1. Jenkins -> **New Item** -> `MonitorPipeline` -> **Pipeline**.
2. Paste the matching Windows/macOS Pipeline script from `jenkins/` into **Pipeline script**.
3. Save. It will run automatically approximately every five minutes.
4. After two builds, open a build -> **Console Output**. Disable the trigger only if your examiner asks you to stop it.

## Expected input/output

No build-time input is needed. Expected Console Output:

```text
MonitorPipeline ran at:
...
```

The build history increments automatically every five minutes.

## Viva answers

- Markdown tables make comparison information easy to scan. Code blocks preserve commands and keep them copyable.
- A scheduled Pipeline uses a cron trigger and starts automatically. A manual Pipeline starts only when someone clicks **Build Now**.
