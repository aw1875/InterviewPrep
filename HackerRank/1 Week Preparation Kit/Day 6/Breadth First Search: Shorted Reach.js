function bfs(n, m, edges, s) {
    const graph = new Object();
    const result = [];
    Array(n + 1).fill(null).forEach((_, i) => graph[i] = new Set())


    for (let [n, n2] of edges) {
        graph[n].add(n2);
        graph[n2].add(n);
    }

    for (let i = 1; i <= n; i++) {
        if (i == s) continue;

        let queue = []
        const dist = Array(n + 1).fill(null).map((_) => -1);
        dist[s] = 0;
        queue.push(s);

        while (queue.length > 0) {
            let node = queue.shift();

            for (let neighbor of graph[node]) {
                if (dist[neighbor] === -1) {
                    queue.push(neighbor)
                    dist[neighbor] = dist[node] + 6

                    if (neighbor === i) {
                        queue = [];
                        break;
                    }
                }
            }
        }

        result.push(dist[i] || -1);
    }
    return result;
}
