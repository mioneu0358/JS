from db_interface import DBInterface


class BoardAccess:
    """
    게시판에 관련된 데이터에 접근하는
    Database Access Object(DAO)
    """
    @staticmethod
    def find_category_by_id(category_id):
        """
        ID값을 통해 카테고리를 찾는다
        """
        db = DBInterface()
        db.connect()

        result = db.fetch_query(f"""
            SELECT category_id,
                   title,
                   datetime(crt, 'localtime'),
                   datetime(amd, 'localtime')
            FROM Category
            WHERE category_id = {category_id}
        """)

        db.disconnect()

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

    @staticmethod
    def create_category(title):
        """
        새로운 카테고리를 생성
        """
        db = DBInterface()
        db.connect()

        db.execute_query(f"""
            INSERT INTO Category(title) 
            VALUES('{title}')
        """)

        db.disconnect()
