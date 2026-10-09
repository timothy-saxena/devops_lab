dialogues = {
    "brahmanandam": "My brain has too many tabs open!",
    "allu arjun": "My dance moves work, but my Wi-Fi doesn't!",
    "prabhas": "Before saving the kingdom, let me finish my biryani!",
    "mahesh babu": "Even my errors look confident!"
}

actor = input("Enter an actor's name: ").strip().lower()

if actor in dialogues:
    print("Funny dialogue:", dialogues[actor])
else:
    print("No dialogue available for this actor.")
