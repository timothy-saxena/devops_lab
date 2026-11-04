# Mid-1 DevOps Lab: upload-ready solutions

This folder contains one independent, practical solution for each question set found in `mid1_sets.pdf`: Sets 1, 3, 4, 6, 7, 9, 10, 11, and 12.

## Before the practical

1. On **Windows**, open **Git Bash** for every Git command. On **macOS**, open Terminal. The Git commands are the same.
2. Replace these placeholders everywhere they occur:
   - `YOUR_USERNAME` - your GitHub username
   - `YOUR_REPOSITORY` - the repository name in that set
   - `YOUR_EMAIL@example.com` - your GitHub email address
3. On Windows Jenkins, choose **Execute Windows batch command** and paste the `.bat` file content. On macOS Jenkins, choose **Execute shell** and paste the `.sh` file content.
4. For a Jenkins Pipeline, create a **Pipeline** job and paste the matching `Jenkinsfile.windows` or `Jenkinsfile.mac` into **Pipeline script**.

## First-time Git setup

```bash
git config --global user.name "Your Name"
git config --global user.email "YOUR_EMAIL@example.com"
```

## Common Git push pattern

Create an empty public GitHub repository first. Do **not** initialise it with a README when you will push an existing local folder.

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Jenkins variables: Windows vs macOS

| Meaning | Windows batch | macOS/Linux shell |
| --- | --- | --- |
| Workspace folder | `%WORKSPACE%` | `$WORKSPACE` |
| Build number | `%BUILD_NUMBER%` | `$BUILD_NUMBER` |
| Current date/time | `%DATE% %TIME%` | `$(date)` |

`echo` and `writeFile` in a Jenkins Pipeline are platform-independent. Only `bat` is Windows-specific and `sh` is macOS/Linux-specific.
