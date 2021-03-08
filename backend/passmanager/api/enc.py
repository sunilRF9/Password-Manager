import base64
import os
from cryptography.fernet import Fernet
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

BASE_DIR = os.getcwd()
SEC_KEY_FILE = 'secret.key'
PATH = os.path.join(BASE_DIR, SEC_KEY_FILE)


def generate_key():
    """
    Generates a key and save it into a file
    """
    password = b"gAAAAABesCUIAcM8M-_Ik_-I1-JD0AzLZU8A8-AJITYCp9Mc33JaHMnYmRedtwC8LLcYk9zpTqYSaDaqFUgfz-tcHZ2TQjAgKKnIWJ2ae9GDoea6tw8XeJ4"
    salt = os.urandom(16)
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=100000,
    )
    key = base64.urlsafe_b64encode(kdf.derive(password))
    print(key)
    with open(PATH, "wb") as key_file:
        key_file.write(key)

def load_key():
    """
    Load the previously generated key
    """
    return open(PATH, "rb").read()

def encrypt_message(message):
    """
    Encrypts a message
    """
    key = load_key()
    encoded_message = message.encode()
    f = Fernet(key)
    encrypted_message = f.encrypt(encoded_message)

    print(encrypted_message)
    return encrypted_message

def decrypt_message(encrypted_message):
    """
    Decrypts an encrypted message
    """
    key = load_key()
    f = Fernet(key)
    decrypted_message = f.decrypt(encrypted_message)

    print(decrypted_message.decode())

if __name__ == "__main__":
    encrypt_message('Hello')
