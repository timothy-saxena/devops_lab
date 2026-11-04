# Set 10 - My Bio Book branches + GitHub-webhook build

## Question

1. Create a repository called **My Bio Book**. Create four branches as chapters, add text files, merge all branches, and display the result.
2. Configure a Jenkins Freestyle project with a GitHub webhook to automatically build when code is pushed.

## Required input

- GitHub username: `YOUR_USERNAME`
- Repository name: `my-bio-book`
- Branches: `chapter-1`, `chapter-2`, `chapter-3`, `chapter-4`
- Jenkins job: `MyBioBook-Webhook-Build`
- Repository URL: `https://github.com/YOUR_USERNAME/my-bio-book.git`
- **Webhook input:** a Jenkins URL reachable by GitHub, for example `http://JENKINS-SERVER-IP:8080/github-webhook/`

## Part A - Create four chapter branches

Do not initially upload every chapter file at once. Follow the one-file-per-branch sequence below.

1. Create an empty GitHub repository `my-bio-book`.
2. In a new local folder, copy only `website/book.html`, then run:

```bash
git init
git branch -M main
git add book.html
git commit -m "Add bio book home page"
git remote add origin https://github.com/YOUR_USERNAME/my-bio-book.git
git push -u origin main
```

3. Create a branch, copy that chapter file from `website/`, commit, push, then merge it. Repeat for all four chapters:

```bash
git checkout -b chapter-1
git add chapter1.txt
git commit -m "Add Chapter 1"
git push -u origin chapter-1
git checkout main
git merge chapter-1
git push origin main

git checkout -b chapter-2
git add chapter2.txt
git commit -m "Add Chapter 2"
git push -u origin chapter-2
git checkout main
git merge chapter-2
git push origin main

git checkout -b chapter-3
git add chapter3.txt
git commit -m "Add Chapter 3"
git push -u origin chapter-3
git checkout main
git merge chapter-3
git push origin main

git checkout -b chapter-4
git add chapter4.txt
git commit -m "Add Chapter 4"
git push -u origin chapter-4
git checkout main
git merge chapter-4
git push origin main
```

4. Verify the final book:

```bash
git branch -a
git log --oneline --graph --all
```

Open `book.html`. Its links open all four chapter text files after the final merges.

## Part B - Freestyle GitHub webhook job

1. Jenkins -> **New Item** -> `MyBioBook-Webhook-Build` -> **Freestyle project**.
2. **Source Code Management** -> Git -> enter the repository URL -> branch `*/main`.
3. **Build Triggers** -> tick **GitHub hook trigger for GITScm polling**.
4. Add the matching build step from `jenkins/` and save the job.
5. On GitHub: repository -> **Settings** -> **Webhooks** -> **Add webhook**.
6. Use this payload URL:

```text
http://JENKINS-SERVER-IP:8080/github-webhook/
```

7. Content type: `application/json`; event: **Just the push event**.
8. Make and push a small change:

```bash
git add .
git commit -m "Update bio book"
git push origin main
```

## Expected input/output

Expected repository output: `main` contains `book.html` and all four chapter files; the Git graph shows four feature branches and merges.

Expected Jenkins Console Output:

```text
GitHub webhook triggered this Jenkins build.
Build Number: 1
Build completed successfully.
```

## Important lab note

`http://localhost:8080/github-webhook/` does **not** work for GitHub because GitHub cannot access the local computer called “localhost.” If the lab has no reachable Jenkins URL, demonstrate **Poll SCM** instead and tell the examiner that webhook delivery requires a reachable endpoint.

## Viva answers

- Separate branches isolate work on different chapters, prevent unfinished work from affecting `main`, and make review/merging easier.
- A GitHub webhook is an event-driven request from GitHub to Jenkins after a push. Poll SCM makes Jenkins check the repository repeatedly according to a schedule.
