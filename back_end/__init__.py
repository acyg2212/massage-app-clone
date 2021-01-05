import os
from flask import Flask
from flask_login import LoginManager, current_user
from .models import db, User
from flask_migrate import Migrate
from back_end.api.user_routes import user_routes
from back_end.config import Config

app = Flask(__name__)
app.config.from_object(Config)
login_manager = LoginManager(app)
db.init_app(app)
migrate = Migrate(app, db)

app.register_blueprint(user_routes, url_prefix='/api/users')


@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
