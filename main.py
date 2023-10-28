from flask import *

app = Flask(__name__,static_folder="./static/resource")
# app: 객체

# @: 데코레이터, route()




# 메인 페이지
@app.route('/')
def index():
    return send_file("static/index.html")

# 연습용 페이지
@app.route('/prac')
def prac():
    return send_file("static/prac.html")


@app.route("/prac/submit-test", methods=["POST"])
def submit_test():
    my_string = request.form['my-string']
    return f"서버에서 받은 값: {my_string}"

@app.route("/prac/submit-test-async", methods=["POST"])
def submit_test_async():
    my_string= request.form['my-string']
    return f"(비동기) 서버에서 받은값: {my_string}"


if __name__ == "__main__":
    app.run()
