# Set 4 - Linked branch pages + ApplicationFlow Pipeline

## Question

1. Create a GitHub repository where each branch contains one HTML file that links to a file in another branch. Merge all branches into `main`.
2. Create a Jenkins Pipeline named `ApplicationFlow` with Compile, Verify, and Release stages.

## Required input

- GitHub username: `YOUR_USERNAME`
- Repository name: `set-04-linked-pages`
- Branches: `page-a` and `page-b`
- Jenkins Pipeline name: `ApplicationFlow`

## Part A - Branches and links

1. Create an empty GitHub repository named `set-04-linked-pages`.
2. Copy `website/index.html` to a new local folder, then run from that folder:

```bash
git init
git branch -M main
git add index.html
git commit -m "Add home page"
git remote add origin https://github.com/YOUR_USERNAME/set-04-linked-pages.git
git push -u origin main
```

3. Create the first branch and add its page:

```bash
git checkout -b page-a
```

Copy `website/page-a.html` into this folder, then:

```bash
git add page-a.html
git commit -m "Add Page A"
git push -u origin page-a
```

4. Return to `main`, create the second branch, and add its page:

```bash
git checkout main
git checkout -b page-b
```

Copy `website/page-b.html`, then:

```bash
git add page-b.html
git commit -m "Add Page B"
git push -u origin page-b
```

5. Merge both branches into main:

```bash
git checkout main
git merge page-a
git merge page-b
git push origin main
```

6. Open `index.html` after the merge. Both links work because `main` now contains both files.

## Part B - ApplicationFlow Pipeline

1. Jenkins -> **New Item** -> type `ApplicationFlow` -> select **Pipeline**.
2. Under **Pipeline**, keep **Definition: Pipeline script**.
3. Paste `jenkins/Jenkinsfile.windows` on Windows, or `jenkins/Jenkinsfile.mac` on macOS.
4. Save -> **Build Now**.

## Expected output

GitHub main branch contains `index.html`, `page-a.html`, and `page-b.html`. The Pipeline stage view and Console Output show this exact order:

```text
Compile
Verify
Release
```

## Viva answers

- A branch is an independent line of development. It lets a developer work safely without changing stable code on `main`.
- A scheduled pipeline starts by time/cron. An integrated (SCM-triggered) pipeline starts when it is connected to source control and a relevant code change occurs.
