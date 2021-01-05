import os
from flask import Flask
from flask_login import LoginManager, current_user

app = Flask(__name__)
login_manager = LoginManager(app)

db.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)

