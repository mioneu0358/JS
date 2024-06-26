"""
게시판 관련 요청 컨트롤러
"""
from flask import Blueprint, jsonify, request, session, Response
from app.service.board_service import BoardService

board_service = BoardService()
board_bp = Blueprint('BoardController', __name__)


@board_bp.route('/category')
def category_list():
    categories = board_service.get_categories()
    return jsonify(categories)


@board_bp.route('/post')
def post_read():
    post_id = request.args.get('post_id')
    post = board_service.get_post(post_id)
    return jsonify(post)


@board_bp.route('/post', methods=['POST'])
def post_write():
    if 'user' not in session:
        return Response('권한이 없습니다.', 405)

    param = request.get_json()  # 요청 Body를 JSON 형식으로 해석
    board_service.add_post(
        param['category_id'],
        param['title'],
        param['content']
    )
    return jsonify({'state': 'success'})


@board_bp.route('/posts')
def post_list():
    category_id = request.args.get('category_id')
    max_post = int(request.args.get('max_post'))
    page = int(request.args.get('page'))
    posts = board_service.get_posts(
        category_id,
        max_post,
        page
    )
    return jsonify(posts)


@board_bp.route('/post/count', methods=['GET'])
def count_post():
    category_id = request.args.get('category_id')
    count = board_service.count_post(category_id)
    return jsonify({
        'count': count
    })
