from flask import Blueprint, jsonify, session, request
from back_end.models import User, db
from flask_login import login_user, LoginManager, current_user, logout_user,login_required

user_routes = Blueprint('users', __name__)

@user_routes.route('/register', methods=['POST'])
def register():

    email = request.json.get('email', None)
    password = request.json.get('password', None)
    print(email)
    print(password)


    if not email or not password:
        return {"errors": ["Missing email or password"]}, 400
    
    check_email = User.query.filter(User.email==email).all()
    
    if check_email:
        return {"errors": ["Email is already in use"]}, 401
    
    new_user = User(
        email=email,
        password=password
    )
    db.session.add(new_user)
    db.session.commit()

    login_user(new_user)
    return {"current_user_id": current_user.id,
    "current_user": current_user.to_dict()}
    