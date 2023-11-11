from flask import *
from github from Github
app = Flask(__name__, static_folder='./static/resource')


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


if __name__ == '__main__':
    app.run()
