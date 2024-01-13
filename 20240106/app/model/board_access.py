from app.model.db_interface import DBInterface


class BoardAccess:
    """
    게시판에 관련된 데이터에 접근하는
    Database Access Object(DAO)
    """
    def __init__(self):
        """
        BoardAccess 생성자
        """
        self.db = DBInterface()

    def find_all_category(self):
        """
        모든 카테고리 반환
        """
        self.db.connect()

        result = self.db.fetch_query("""
            SELECT category_id,
                   title,
                   datetime(crt, 'localtime'),
                   datetime(amd, 'localtime')
            FROM Category
            ORDER BY title
        """)

        self.db.disconnect()

        if len(result) == 0:
            return []

        for i in range(len(result)):
            result[i] = {
                'category_id': result[i][0],
                'title': result[i][1],
                'crt': result[i][2],
                'amd': result[i][3]
            }
        return result


    def find_all_post(self,category_id):
        """
        모든 Post 반환
        """
        self.db.connect()

        result = self.db.fetch_query("""
            SELECT post_id,
                   title,
                   content
                   datetime(crt, 'localdate'),
                   view
                   row_number() over(ORDER BY crt ASC)      <--! 행 번호를 생성일의 오름차순으로 가져온다 -->
            FROM Post
            WHERE category_id = ?
            ORDER BY crt DESC
        """,category_id)

        self.db.disconnect()

        if len(result) == 0:
            return []

        for i in range(len(result)):
            result[i] = {
                'post_id':  result[i][0],
                'title':    result[i][1],
                'content':  result[i][2],
                'crt':      result[i][3],
                'view':     result[i][4],
                'no'  :     result[i][5]
            }
        return result

    def find_category_by_id(self, category_id):
        """
        ID값을 통해 카테고리를 찾는다
        """
        self.db.connect()

        result = self.db.fetch_query("""
            SELECT category_id,
                   title,
                   datetime(crt, 'localtime'),
                   datetime(amd, 'localtime')
            FROM Category
            WHERE category_id = ?
        """, category_id)

        self.db.disconnect()

        # 검색결과 없으면 None 반환
        if len(result) == 0:
            return None

        # 검색결과 있으면 dictionary 형식으로 반환
        return {
            'category_id': result[0][0],
            'title': result[0][1],
            'crt': result[0][2],
            'amd': result[0][3]
        }

    def create_category(self, title):
        """
        새로운 카테고리를 생성
        """
        self.db.connect()

        self.db.execute_query("""
            INSERT INTO Category(title) 
            VALUES(?)
        """, title)

        self.db.disconnect()

    def create_post(self,category_id, title,content):
        """
        새로운 개시글 생성
        """
        self.db.connect()

        self.db.execute_query("""
            INSERT INTO Post(category_id, title, content)
            VALUES(?,?,?)
        """, category_id,title,content)

        self.db.disconnect()