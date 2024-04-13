"""
회원 관련 요청 컨트롤러
"""
from flask import Blueprint, send_file,request,jsonify
from app.service.user_service import userService

user_bp = Blueprint('UserController', __name__)
user_service = userService()
@user_bp.route('/sign-up', methods = ["POST"])
def sign_up():
    param = request.get_json()

    # print(f"sign-up/ param: {param}")
    # 파라미터의 값이 들어있는지 확인
    has_id = False
    has_pw = False
    for key in param.keys():
        if key == "id":
            has_id = True
        if key == 'pw':
            has_pw = True
    if not has_id or not has_pw:
        return jsonify({'state': 'success'})
    
    user_service.registration(param['id'], param['pw'])
    return jsonify({'state': 'success'})