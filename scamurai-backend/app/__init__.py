from flask import Flask
from flask_cors import CORS

from app.chatbot.Fchatbot import Fchatbot as finance_bot
from app.phishing_url.Umodel import phishing_detector as url_checker

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:8080"}})

    app.register_blueprint(finance_bot,url_prefix="/api/finance")
    app.register_blueprint(url_checker,url_prefix="/api/phishing")
    return app
