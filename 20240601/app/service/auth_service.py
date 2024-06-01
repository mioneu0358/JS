from flask import session, Response
class AuthService:
    """
    권한 처리 서비스
    """
    @staticmethod
    def auth_check(func):
        def wrapper(*args,**kwargs):
            if 'user' not in session:
                return Response('권한없음', 405)
            return func(*args, **kwargs)
        return wrapper
        