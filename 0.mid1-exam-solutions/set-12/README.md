# Set 12 - Pizza order page + scheduled greeting job

## Question

1. Create a simple HTML pizza order form and upload it to GitHub.
2. Create a Jenkins Freestyle project that automatically runs every two minutes and displays a greeting plus the Jenkins workspace path.

## Required input

- GitHub username: `YOUR_USERNAME`
- Repository: `set-12-pizza-order`
- Jenkins job: `Set12-Pizza-Greeting`
- Schedule: every two minutes

## Part A - Upload the pizza order form

1. Create an empty GitHub repository called `set-12-pizza-order`.
2. Open Git Bash/Terminal in `website/`.
3. Run:

```bash
git init
git branch -M main
git add index.html
git commit -m "Add pizza order form"
git remote add origin https://github.com/YOUR_USERNAME/set-12-pizza-order.git
git push -u origin main
```

4. Verify that `index.html` is visible on GitHub. Open it locally in a browser to show the form.

## Part B - Scheduled greeting Freestyle project

1. Jenkins -> **New Item** -> `Set12-Pizza-Greeting` -> **Freestyle project**.
2. In **Build Triggers**, tick **Build periodically**.
3. Enter this cron schedule:

```text
H/2 * * * *
```

4. Under **Build Steps**, choose **Execute Windows batch command** on Windows or **Execute shell** on macOS.
5. Paste the corresponding file from `jenkins/`.
6. Save, wait for the automatic build, and open **Console Output**.

## Expected input/output

The user fills the pizza form with name, pizza size, toppings, quantity, and delivery address.

Expected Jenkins Console Output:

```text
Hello from the scheduled Jenkins job!
Workspace path: ...
```

## Viva answers

Configure Git identity once with:

```bash
git config --global user.name "Your Name"
git config --global user.email "YOUR_EMAIL@example.com"
```

`WORKSPACE` is Jenkins' environment variable for the directory assigned to the current job. On Windows write `%WORKSPACE%`; on macOS/Linux write `$WORKSPACE`.
