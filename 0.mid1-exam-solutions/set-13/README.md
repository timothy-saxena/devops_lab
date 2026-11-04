# Set 13 - GitHub Profile README + RepositoryPipeline

## Question

1. Design an attractive GitHub Profile README that introduces you and showcases GitHub activity.
2. Create a Jenkins Pipeline named `RepositoryPipeline` that retrieves source code from GitHub, simulates an application build, and displays the latest Git commit message.

## Required input

- GitHub username: `YOUR_USERNAME`
- Profile repository name: **exactly** `YOUR_USERNAME`
- Separate source repository: `repository-pipeline-demo`
- Jenkins Pipeline name: `RepositoryPipeline`
- Pipeline source URL: `https://github.com/YOUR_USERNAME/repository-pipeline-demo.git`

## Part A - Create the special GitHub Profile README

GitHub shows a README on your profile only when a **public repository has exactly the same name as your GitHub username**.

1. On GitHub, create a **public** repository named exactly `YOUR_USERNAME`.
2. Copy `profile-readme/README.md` to a new folder as `README.md`.
3. In that folder, replace every `YOUR_USERNAME`, `YOUR NAME`, email, location, skills, and links with your own details.
4. Open Git Bash/Terminal in that folder and run:

```bash
git init
git branch -M main
git add README.md
git commit -m "Add GitHub profile README"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.git
git push -u origin main
```

5. Visit `https://github.com/YOUR_USERNAME`. The README should appear below your profile information.

## Part B - Create the source repository for Jenkins

1. Create a second empty public repository named `repository-pipeline-demo`.
2. Open Git Bash/Terminal in `pipeline-source/` and run:

```bash
git init
git branch -M main
git add index.html
git commit -m "Add pipeline demo website"
git remote add origin https://github.com/YOUR_USERNAME/repository-pipeline-demo.git
git push -u origin main
```

3. This commit message will be displayed by Jenkins.

## Part C - Create RepositoryPipeline

1. Jenkins -> **New Item** -> type `RepositoryPipeline` -> choose **Pipeline**.
2. Under **Pipeline**, leave **Definition** as **Pipeline script**.
3. Open the matching file in `jenkins/`:
   - Windows: `Jenkinsfile.windows`
   - macOS: `Jenkinsfile.mac`
4. Replace `YOUR_USERNAME` in the GitHub URL inside the script.
5. Paste the script in Jenkins -> **Pipeline script** -> Save -> **Build Now**.

## Expected input/output

The profile page shows your introduction, skills, social links, GitHub statistics, language summary, and a contribution-streak card.

Expected Jenkins Console Output:

```text
Checking out source code from GitHub...
Simulating application build...
Latest Git commit message:
Add pipeline demo website
```

The Pipeline stage view shows:

```text
Checkout -> Build -> Latest Commit
```

## Viva answers

- A GitHub Profile README is displayed on the user's public GitHub profile because its repository name exactly matches the username. A normal repository README documents only that one repository.
- A Jenkins Pipeline retrieves GitHub source code using the `git` Pipeline step or the `checkout` step. It clones/checks out the specified branch into the Jenkins workspace; private repositories also need credentials.
