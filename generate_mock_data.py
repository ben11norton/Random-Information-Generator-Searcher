# Importing necessary libraries
from faker import Faker
import json

# Initialize Faker
fake = Faker()

# Function to generate mock data
def generate_mock_data(entries=100):
    data = []
    for _ in range(entries):
        data.append({
            "title": fake.sentence(nb_words=6),
            "url": fake.url(),
            "description": fake.text(max_nb_chars=200)
        })
    return data

# Function to save mock data to a JSON file
def save_to_json(data, filename="data/mock_data.json"):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

# Generate and save mock data
if __name__ == "__main__":
    mock_data = generate_mock_data(entries=100)  # Generate 100 entries of mock data
    save_to_json(mock_data)  # Save the mock data to a JSON file
