def validate_input(start, end):
    # 실제 데코레이터 함수를 정의
    def decorator(func):
        # 원본 함수에 추가적인 작업을 수행할 두번째 중첩 함수를 정의
        def wrapper(*args):
            # 상세 로직 작성
            for arg in args:
                if not (start <= arg <= end):
                    raise ValueError(f'{start}이상 {end}이하의 값을 입력하세요. 입력된 값: {arg}')
            return func(*args)

        return wrapper
    return decorator


@validate_input(1, 10)
def process(*args):
    return args


validate_deco = validate_input(1, 10)
decorated_func = validate_deco(process)
print(decorated_func(1, 2, 3))