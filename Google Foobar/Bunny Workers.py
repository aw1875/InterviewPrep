def solution(x, y):
    return str(int(x + ((x + y - 2) * (x + y - 1)) / 2))
        

if __name__ == "__main__":
    test_cases = {
        "96": [5, 10],
        "9": [3, 2],
    }

    for i, (k, v) in enumerate(test_cases.items()):
        if solution(v[0], v[1]) == k:
            print("\033[92m✓ Test Case " + str(i + 1) + " Passed\033[0m")
        else:
            print("\033[91m✗ Test Case " + str(i + 1) + " Passed\033[0m")
            print("\033[91mExpected: {}, Got: {}\033[0m".format(k, solution(v[0], v[1])))
