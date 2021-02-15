from Flask import flask
import json
from flask_login import login_user, LoginManager, current_user, logout_user,login_required

from back_end.api.user_routes import user_routes

def test_user_routes_success(self, client):
    app=Flask(__name__)
    client=app.test_client()
    url='/api/users/register'

    mock_request_data= = {
        'email':"testing123@test.com",
        'password':'password'
    }

    response=client.post(url, data=json.dumps(mock_request_data))
    assert response.status_code ==200