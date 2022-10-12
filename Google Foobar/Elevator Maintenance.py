def solution(l):
    version_hash = {}
    result = ""
    
    # First pass - create hash
    for v in l:
        if v[0] in version_hash:
            version_hash[v[0]].append(v)
        else:
            version_hash[v[0]] = [v]
            
    # Sort keys
    version_hash = dict(sorted(version_hash.items()))
    
    # Second pass - sort values
    for k in version_hash:
        version_hash[k] = sorted(version_hash[k], key=lambda x:[int(i) for i in x.split('.')])
        
    # Third pass - create result string
    for v in version_hash.values():
        for i in v:
            result += i + ","
        
    return result.strip(',')

if __name__ == "__main__":
    test_cases = {
        "0.1,1.1.1,1.2,1.2.1,1.11,2,2.0,2.0.0": ["1.11", "2.0.0", "1.2", "2", "0.1", "1.2.1", "1.1.1", "2.0"],
        "1.0,1.0.2,1.0.12,1.1.2,1.3.3": ["1.1.2", "1.0", "1.3.3", "1.0.12", "1.0.2"]
    }

    for i, (k, v) in enumerate(test_cases.items()):
        if solution(v) == k:
            print("\033[92m✓ Test Case " + str(i + 1) + " Passed\033[0m")
        else:
            print("\033[91m✗ Test Case " + str(i + 1) + " Passed\033[0m")
            print("\033[91mExpected: {}, Got: {}\033[0m".format(k, solution(v)))
