"""
페이지 이동 관련 요청 컨트롤러 정의
"""

from flask import Blueprint, send_file

# 페이지 컨트롤러 Blueprint 객체
page_bp = Blueprint('PageController', __name__)



@page_bp.route('/')
def main():
    """
    메인 페이지
    :return: view/index.html
    """
    return send_file('view/index.html')


@page_bp.route('/dashboard')
def dashboard():
    """
    대시 보드 (홈 컨텐츠)
    :return: view/dashboard.html
    """
    return send_file('view/dashboard.html')


@page_bp.route('/practice')
def practice():
    """
    연습장
    :return: view/practice.html
    """
    return send_file('view/practice.html')