"""
게시판 관련 요청 컨트롤러
"""
from flask import Blueprint, jsonify, request
from app.service.board_service import BoardService

board_service = BoardService()
board_bp = Blueprint('BoardController', __name__)


@board_bp.route('/category')
def category_list():
    categories = board_service.get_categories()
    return jsonify(categories)



@board_bp.route('/post',methods=["POST"])
def post_write():
    param = request.get_json()
    board_service.add_post(     # 요청 Body를 Json 형식으로 해석
        param['category_id'],
        param['title'],
        param["content"]
    )
    return jsonify({'state': 'success'})

@board_bp.route('/posts')
def post_list():
    # category_id = request.get_json()['category_id']
    category_id = 1
    postList = board_service.get_posts(category_id)
    print(f"posts: {postList}")
    return jsonify(postList)