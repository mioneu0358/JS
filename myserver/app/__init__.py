from flask import Flask

from .controller.page_controller import page_bp
from .controller.github_controller import github_bp


# 서버 애플리케이션
app = Flask(__name__, static_folder='../static/resource')


# 컨트롤러 Blueprint 등록
app.register_blueprint(page_bp)
app.register_blueprint(github_bp, url_prefix='/github')
