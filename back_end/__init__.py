import os
from flask import Flask
from flask_login import LoginManager, current_user

app = Flask(__name__)
login_manager = LoginManager(app)

@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)

@app.route('/')
def hello_world():
    return 'Hello, World!'