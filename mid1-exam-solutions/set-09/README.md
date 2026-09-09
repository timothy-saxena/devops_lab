# Set 9 - Shopping list + scheduled Freestyle job

## Question

1. Create an HTML page with ordered and unordered lists, then upload it to GitHub.
2. Create a scheduled Jenkins Freestyle job.

## Required input

- GitHub username: `YOUR_USERNAME`
- Repository: `set-09-shopping-list`
- Jenkins job: `ScheduledJob`
- Schedule: every two minutes

## Part A - Upload the shopping-list page

1. Create an empty GitHub repository named `set-09-shopping-list`.
2. Open Git Bash/Terminal in `website/` and run:

```bash
git init
git branch -M main
git add index.html
git commit -m "Add shopping list page"
git remote add origin https://github.com/YOUR_USERNAME/set-09-shopping-list.git
git push -u origin main
```

## Part B - ScheduledJob

1. Jenkins -> **New Item** -> `ScheduledJob` -> **Freestyle project**.
2. Go to **Build Triggers** and tick **Build periodically**.
3. Enter:

```text
H/2 * * * *
```

4. Under **Build Steps**, add the Windows or macOS command from `jenkins/`.
5. Save. Wait for at least two builds, then open a build's **Console Output**.
6. Disable the schedule after demonstrating it if instructed; otherwise it keeps creating builds.

## Expected output

The HTML page shows a numbered shopping plan and bullet-point items. Jenkins creates automatic builds and prints a time, for example:

```text
Scheduled build running.
Current date and time: ...
```

## Viva answers

- On Windows, the Jenkins initial administrator password is commonly retrieved with:

```bat
type "C:\ProgramData\Jenkins\.jenkins\secrets\initialAdminPassword"
```

- A cron expression tells Jenkins when to run a scheduled job. Its five fields are minute, hour, day of month, month, and day of week.
