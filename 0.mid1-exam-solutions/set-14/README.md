# Set 14 - Secret-message branches + GreetJob

## Question

1. Create three branches, each containing a part of a secret message in a file. Merge them into `main` to reveal the full message.
2. Create a Jenkins Freestyle project named `GreetJob` with a String Parameter called `CI_CD_TOOL`. Use the entered value to display: `The CI_CD Tool is Jenkins` in Console Output.

## Required input

- GitHub username: `YOUR_USERNAME`
- Repository: `secret-message-branches`
- Branches: `message-part-1`, `message-part-2`, `message-part-3`
- Jenkins job: `GreetJob`
- Jenkins String Parameter: `CI_CD_TOOL`
- Example parameter value: `Jenkins`

The exam wording shows “CI_CD Tool”; Jenkins parameter names should not have spaces. Use the safe parameter name `CI_CD_TOOL`.

## Part A - Create, merge, and reveal the secret message

1. Create an empty GitHub repository called `secret-message-branches`.
2. Make a new local project folder. Copy only `website/README.md` into it, then run:

```bash
git init
git branch -M main
git add README.md
git commit -m "Add secret message project"
git remote add origin https://github.com/YOUR_USERNAME/secret-message-branches.git
git push -u origin main
```

3. Create the first branch, copy its part file from `website/`, then commit/push/merge:

```bash
git checkout -b message-part-1
git add part1.txt
git commit -m "Add secret message part 1"
git push -u origin message-part-1
git checkout main
git merge message-part-1
git push origin main
```

4. Repeat for the second part:

```bash
git checkout -b message-part-2
git add part2.txt
git commit -m "Add secret message part 2"
git push -u origin message-part-2
git checkout main
git merge message-part-2
git push origin main
```

5. Repeat for the third part:

```bash
git checkout -b message-part-3
git add part3.txt
git commit -m "Add secret message part 3"
git push -u origin message-part-3
git checkout main
git merge message-part-3
git push origin main
```

6. On the `main` branch, read `part1.txt`, then `part2.txt`, then `part3.txt`. That reveals the full message.

```bash
git branch -a
git log --oneline --graph --all
```

## Part B - Parameterized Freestyle GreetJob

1. Jenkins -> **New Item** -> type `GreetJob` -> choose **Freestyle project** -> OK.
2. In **General**, tick **This project is parameterized**.
3. Select **Add Parameter** -> **String Parameter**.
4. Enter:

```text
Name: CI_CD_TOOL
Default Value: Jenkins
Description: Enter the CI/CD tool name
```

5. Under **Build Steps**, select the platform-specific option:
   - Windows: **Execute Windows batch command** -> paste `jenkins/greet.windows.bat`
   - macOS: **Execute shell** -> paste `jenkins/greet.mac.sh`
6. Save -> click **Build with Parameters**.
7. Enter `Jenkins` as `CI_CD_TOOL` -> click **Build** -> open **Console Output**.

## Expected input/output

Expected Git result: `main` contains `README.md`, `part1.txt`, `part2.txt`, and `part3.txt`. Reading parts in sequence reveals:

```text
DevOps automation starts with Git, continues with Jenkins, and makes software delivery reliable.
```

Build input:

```text
CI_CD_TOOL = Jenkins
```

Expected Jenkins Console Output:

```text
The CI_CD Tool is Jenkins
```

## Viva answers

- When changes from multiple branches are merged into `main`, Git combines their commits and files. If different files were changed, the merge normally completes automatically. If the same lines conflict, the developer must resolve the conflict before committing.
- A String Parameter lets a user provide a text value at build time. Jenkins exposes that value to the build, so one job can behave differently for different inputs.
