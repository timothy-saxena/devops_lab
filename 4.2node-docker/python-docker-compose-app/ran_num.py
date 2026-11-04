import random

numbers = [random.randint(1, 100) for _ in range(10)]

print("Numbers:", numbers)
print("Maximum:", max(numbers))
print("Minimum:", min(numbers))
print("Average:", sum(numbers) / len(numbers))
