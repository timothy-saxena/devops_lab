# Set 3 - Feedback form + parameterized Freestyle job

## Question

1. Create a feedback form and push it to GitHub.
2. Create a Freestyle parameterized job.

## Required input

- GitHub username: `YOUR_USERNAME`
- Repository: `set-03-feedback-form`
- Jenkins job: `Set03-ParameterizedJob`
- String parameter name: `STUDENT_NAME`

## Part A - Website and GitHub

1. Create an empty repository named `set-03-feedback-form` on GitHub.
2. Open Git Bash/Terminal in `website/`.
3. Run:

```bash
git init
git branch -M main
git add feedback.html
git commit -m "Add feedback form"
git remote add origin https://github.com/YOUR_USERNAME/set-03-feedback-form.git
git push -u origin main
```

## Part B - Parameterized Jenkins Freestyle project

1. Jenkins -> **New Item** -> `Set03-ParameterizedJob` -> **Freestyle project**.
2. In **General**, tick **This project is parameterized**.
3. Click **Add Parameter** -> **String Parameter**.
4. Enter:

```text
Name: STUDENT_NAME
Default Value: Student
Description: Enter your name
```

5. Under **Build Steps**, choose the correct platform-specific build step and paste the matching file from `jenkins/`.
6. Save -> **Build with Parameters** -> enter a name -> Build.

## Expected input/output

Input at build time:

```text
STUDENT_NAME = Ananya
```

Expected Console Output:

```text
Hello, Ananya!
Parameterized build completed successfully.
```

## Viva answers

- `echo` prints text in the terminal or Jenkins Console Output.
- `nano` is a command-line text editor normally used on macOS/Linux. On Windows, use Notepad/VS Code, or Git Bash if `nano` is installed.
- `agent any` in a Pipeline means Jenkins can run it on any available agent/node.
