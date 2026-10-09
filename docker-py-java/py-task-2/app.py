try:
    values = input("Enter numbers separated by spaces: ")
    numbers = [float(value) for value in values.split()]

    if not numbers:
        print("Please enter at least one number.")
    else:
        print("Maximum:", max(numbers))
        print("Minimum:", min(numbers))
        average = sum(numbers) / len(numbers)
        print("Average:", average)
except ValueError:
    print("Please enter valid numbers only.")
