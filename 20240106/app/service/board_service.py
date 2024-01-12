from app.model.board_access import BoardAccess


class BoardService:
    """
    게시판 관련 비즈니스 로직을 처리하는 서비스 클래스
    """
    def __init__(self):
        self.board_access = BoardAccess()

    def get_categories(self):
        """
        모든 게시판을 불러온다
        """
        return self.board_access.find_all_category()
