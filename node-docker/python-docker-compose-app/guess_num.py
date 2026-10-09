import random

number = random.randint(1, 50)
guess = random.randint(1, 50)

print(f"Generated guess: {guess}")

if guess == number:
    print("Correct!")
else:
    print(f"Wrong! The number was {number}")
