# HackerRank Node.JS broken for this question.
def decodeHuff(root, s):
    decoded = ''
    node = root
    
    for c in s:
        node = node.left if c == '0' else node.right
        
        if not node.left and not node.right:
            decoded += node.data
            node = root
            
    print(decoded)
