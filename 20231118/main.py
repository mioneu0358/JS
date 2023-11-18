from flask import *
from github import Github, Auth

app = Flask(__name__, static_folder='./static/resource')
g = Github(auth=Auth.Token('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'))

# 테스트 1
@app.route('/hello-world')
def hello_world():
    return 'Hello World!'


# 테스트 2
@app.route('/hello-world2')
def hello_world2():
    return send_file('static/test.html')


# 홈 (index)
@app.route('/')
def index():
    return send_file('static/index.html')


# 연습장 (practice)
@app.route('/practice')
def practice():
    return send_file('static/practice.html')


@app.route('/practice/submit-test', methods=['POST'])
def submit_test():
    my_string = request.form['my-string']
    return f'서버에서 받은 값 {my_string}'


@app.route('/practice/submit-test-async', methods=['POST'])
def submit_test_async():
    my_string = request.form['my-string']
    return f'(비동기) 서버에서 받은 값 {my_string}'


@app.route('/git/user')
def git_user_info():
    user = g.get_user()
    return jsonify({
        'nickname': user.login,
        'name': user.name,
        'email': user.email,
        'img': user.avatar_url
    })


if __name__ == '__main__':
    app.run()
